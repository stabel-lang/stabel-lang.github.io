import { Elm } from './Playground.elm';
import Compiler from './compiler.js';
import wabtInit from 'wabt';

const app = Elm.Playground.init({
  node: document.getElementById('elm-app')
});

app.ports.compileSource.subscribe(source => {
    compileToWat(source)
        .then(val => {
            return execute(val);
        })
        .then(val => {
            console.log(val);
            return app.ports.compilationResult.send(val);
        })
        .catch(err => {
            console.log(err);
            return app.ports.compilationResult.send(err);
        });
});

function compileToWat(source) {
    return new Promise((resolve, reject) => {
        const compiler = Compiler.Elm.TestCompiler.init({});

        compiler.ports.compileFinished.subscribe(([ok, output]) => {
            if (ok) {
                resolve(output);
            } else {
                reject(output);
            }
        });

        compiler.ports.compileString.send(['main', source]);
    });
}

async function execute(wat) {
    const wabt = await wabtInit();
    const wasmModule = wabt.parseWat('tmp', wat).toBinary({}).buffer;

    const memory = new WebAssembly.Memory({
        initial: 10
    });

    const imports = {
        host: {
            memory: memory
        }
    };

    const program = await WebAssembly.instantiate(wasmModule, imports);
    const main = program.instance.exports.main;
    if (typeof main === 'undefined') {
        return "Could not find a word named 'main'";
    }

    main();

    const memView = new Uint32Array(memory.buffer);
    return memView[3].toString(); // First three i32 elements are stack and heap information
}
