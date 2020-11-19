(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $author$project$Main$init = function (_v0) {
	return _Utils_Tuple2(_Utils_Tuple0, $elm$core$Platform$Cmd$none);
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $author$project$Main$CompileString = function (a) {
	return {$: 'CompileString', a: a};
};
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Main$compileString = _Platform_incomingPort('compileString', $elm$json$Json$Decode$string);
var $author$project$Main$subscriptions = function (_v0) {
	return $author$project$Main$compileString($author$project$Main$CompileString);
};
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $author$project$Wasm$Block = function (a) {
	return {$: 'Block', a: a};
};
var $author$project$Wasm$Break = function (a) {
	return {$: 'Break', a: a};
};
var $author$project$Wasm$BreakIf = function (a) {
	return {$: 'BreakIf', a: a};
};
var $author$project$Wasm$Call = function (a) {
	return {$: 'Call', a: a};
};
var $author$project$Wasm$CallIndirect = {$: 'CallIndirect'};
var $author$project$Wasm$Drop = {$: 'Drop'};
var $author$project$Wasm$I32_Add = {$: 'I32_Add'};
var $author$project$Wasm$I32_Const = function (a) {
	return {$: 'I32_Const', a: a};
};
var $author$project$Wasm$I32_Div = {$: 'I32_Div'};
var $author$project$Wasm$I32_Eq = {$: 'I32_Eq'};
var $author$project$Wasm$I32_EqZero = {$: 'I32_EqZero'};
var $author$project$Wasm$I32_Load = {$: 'I32_Load'};
var $author$project$Wasm$I32_Mul = {$: 'I32_Mul'};
var $author$project$Wasm$I32_Store = {$: 'I32_Store'};
var $author$project$Wasm$I32_Sub = {$: 'I32_Sub'};
var $author$project$Wasm$Int32 = {$: 'Int32'};
var $author$project$Wasm$Local_Get = function (a) {
	return {$: 'Local_Get', a: a};
};
var $author$project$Wasm$Local_Set = function (a) {
	return {$: 'Local_Set', a: a};
};
var $author$project$Wasm$Local_Tee = function (a) {
	return {$: 'Local_Tee', a: a};
};
var $author$project$Wasm$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $author$project$Wasm$Memory = F2(
	function (a, b) {
		return {$: 'Memory', a: a, b: b};
	});
var $author$project$Play$Codegen$BaseModule$addIntFn = '__add_i32';
var $author$project$Play$Codegen$BaseModule$allocFn = '__alloc';
var $author$project$Play$Codegen$BaseModule$boxFn = '__box';
var $author$project$Play$Codegen$BaseModule$callQuoteFn = '__call_quote';
var $author$project$Play$Codegen$BaseModule$copyStructFn = '__copy_str';
var $author$project$Play$Codegen$BaseModule$defaultStackSize = 1024;
var $author$project$Play$Codegen$BaseModule$divIntFn = '__div_i32';
var $author$project$Play$Codegen$BaseModule$dropFn = '__drop';
var $author$project$Play$Codegen$BaseModule$dupFn = '__duplicate';
var $author$project$Play$Codegen$BaseModule$eqIntFn = '__eq_i32';
var $author$project$Wasm$Module = function (a) {
	return {$: 'Module', a: a};
};
var $author$project$Wasm$initModule = $author$project$Wasm$Module(
	{exports: _List_Nil, functions: _List_Nil, imports: _List_Nil, nextFunctionIndex: 0, quotables: _List_Nil, start: $elm$core$Maybe$Nothing, typeSignatures: _List_Nil});
var $author$project$Play$Codegen$BaseModule$wasmPtrSize = 4;
var $author$project$Play$Codegen$BaseModule$stackPositionOffset = $author$project$Play$Codegen$BaseModule$wasmPtrSize;
var $author$project$Play$Codegen$BaseModule$initialHeapPositionOffset = $author$project$Play$Codegen$BaseModule$stackPositionOffset + $author$project$Play$Codegen$BaseModule$wasmPtrSize;
var $author$project$Play$Codegen$BaseModule$leftRotFn = '__left_rotate';
var $author$project$Play$Codegen$BaseModule$mulIntFn = '__mul_i32';
var $author$project$Play$Codegen$BaseModule$rotFn = '__rotate';
var $author$project$Play$Codegen$BaseModule$stackCapacityOffset = 0;
var $author$project$Play$Codegen$BaseModule$stackGetElementFn = '__stack_get';
var $author$project$Play$Codegen$BaseModule$stackPopFn = '__stack_pop';
var $author$project$Play$Codegen$BaseModule$stackPushFn = '__stack_push';
var $author$project$Play$Codegen$BaseModule$stackReplaceElementFn = '__stack_replace';
var $author$project$Play$Codegen$BaseModule$subIntFn = '__sub_i32';
var $author$project$Play$Codegen$BaseModule$swapFn = '__swap';
var $author$project$Play$Codegen$BaseModule$unboxFn = '__unbox';
var $elm_community$list_extra$List$Extra$findIndexHelp = F3(
	function (index, predicate, list) {
		findIndexHelp:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var x = list.a;
				var xs = list.b;
				if (predicate(x)) {
					return $elm$core$Maybe$Just(index);
				} else {
					var $temp$index = index + 1,
						$temp$predicate = predicate,
						$temp$list = xs;
					index = $temp$index;
					predicate = $temp$predicate;
					list = $temp$list;
					continue findIndexHelp;
				}
			}
		}
	});
var $elm_community$list_extra$List$Extra$findIndex = $elm_community$list_extra$List$Extra$findIndexHelp(0);
var $elm_community$list_extra$List$Extra$elemIndex = function (x) {
	return $elm_community$list_extra$List$Extra$findIndex(
		$elm$core$Basics$eq(x));
};
var $author$project$Wasm$withFunction = F2(
	function (funcDef, _v0) {
		var module_ = _v0.a;
		var typeSignature = {inputs: funcDef.args, outputs: funcDef.results};
		var _v1 = function () {
			var _v2 = A2($elm_community$list_extra$List$Extra$elemIndex, typeSignature, module_.typeSignatures);
			if (_v2.$ === 'Just') {
				var idx = _v2.a;
				return _Utils_Tuple2(idx, module_);
			} else {
				return _Utils_Tuple2(
					$elm$core$List$length(module_.typeSignatures),
					_Utils_update(
						module_,
						{
							typeSignatures: _Utils_ap(
								module_.typeSignatures,
								_List_fromArray(
									[typeSignature]))
						}));
			}
		}();
		var tsIndex = _v1.a;
		var updatedModule = _v1.b;
		var newFunction = {instructions: funcDef.instructions, locals: funcDef.locals, name: funcDef.name, typeSignatureIndex: tsIndex};
		return $author$project$Wasm$Module(
			_Utils_update(
				updatedModule,
				{
					exports: funcDef.exported ? _Utils_ap(
						updatedModule.exports,
						_List_fromArray(
							[updatedModule.nextFunctionIndex])) : updatedModule.exports,
					functions: _Utils_ap(
						updatedModule.functions,
						_List_fromArray(
							[newFunction])),
					nextFunctionIndex: updatedModule.nextFunctionIndex + 1,
					quotables: funcDef.isIndirectlyCalled ? _Utils_ap(
						updatedModule.quotables,
						_List_fromArray(
							[updatedModule.nextFunctionIndex])) : updatedModule.quotables
				}));
	});
var $author$project$Wasm$withImport = F4(
	function (importModule, entityName, typeToImport, _v0) {
		var module_ = _v0.a;
		return $author$project$Wasm$Module(
			_Utils_update(
				module_,
				{
					imports: _Utils_ap(
						module_.imports,
						_List_fromArray(
							[
								{entityName: entityName, moduleName: importModule, type_: typeToImport}
							]))
				}));
	});
var $author$project$Wasm$withStartFunction = F2(
	function (funcDef, module_) {
		var _v0 = A2($author$project$Wasm$withFunction, funcDef, module_);
		var moduleWithFunction = _v0.a;
		var startIdx = $elm$core$List$length(moduleWithFunction.functions) - 1;
		return $author$project$Wasm$Module(
			_Utils_update(
				moduleWithFunction,
				{
					start: $elm$core$Maybe$Just(startIdx)
				}));
	});
var $author$project$Play$Codegen$BaseModule$baseModule = A2(
	$author$project$Wasm$withFunction,
	{
		args: _List_Nil,
		exported: false,
		instructions: _List_fromArray(
			[
				$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
				$author$project$Wasm$CallIndirect
			]),
		isIndirectlyCalled: false,
		locals: _List_Nil,
		name: $author$project$Play$Codegen$BaseModule$callQuoteFn,
		results: _List_Nil
	},
	A2(
		$author$project$Wasm$withFunction,
		{
			args: _List_fromArray(
				[$author$project$Wasm$Int32]),
			exported: false,
			instructions: _List_fromArray(
				[
					$author$project$Wasm$Local_Get(0),
					$author$project$Wasm$Local_Get(0),
					$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackGetElementFn),
					$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$wasmPtrSize),
					$author$project$Wasm$I32_Add,
					$author$project$Wasm$I32_Load,
					$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackReplaceElementFn)
				]),
			isIndirectlyCalled: false,
			locals: _List_Nil,
			name: $author$project$Play$Codegen$BaseModule$unboxFn,
			results: _List_Nil
		},
		A2(
			$author$project$Wasm$withFunction,
			{
				args: _List_fromArray(
					[$author$project$Wasm$Int32, $author$project$Wasm$Int32]),
				exported: false,
				instructions: function () {
					var typeSize = $author$project$Play$Codegen$BaseModule$wasmPtrSize * 2;
					return _List_fromArray(
						[
							$author$project$Wasm$I32_Const(typeSize),
							$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$allocFn),
							$author$project$Wasm$Local_Tee(2),
							$author$project$Wasm$Local_Get(1),
							$author$project$Wasm$I32_Store,
							$author$project$Wasm$Local_Get(2),
							$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$wasmPtrSize),
							$author$project$Wasm$I32_Add,
							$author$project$Wasm$Local_Get(0),
							$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackGetElementFn),
							$author$project$Wasm$I32_Store,
							$author$project$Wasm$Local_Get(0),
							$author$project$Wasm$Local_Get(2),
							$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackReplaceElementFn)
						]);
				}(),
				isIndirectlyCalled: false,
				locals: _List_fromArray(
					[$author$project$Wasm$Int32]),
				name: $author$project$Play$Codegen$BaseModule$boxFn,
				results: _List_Nil
			},
			A2(
				$author$project$Wasm$withFunction,
				{
					args: _List_fromArray(
						[$author$project$Wasm$Int32, $author$project$Wasm$Int32]),
					exported: false,
					instructions: _List_fromArray(
						[
							$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$stackPositionOffset),
							$author$project$Wasm$I32_Load,
							$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$wasmPtrSize),
							$author$project$Wasm$Local_Get(0),
							$author$project$Wasm$I32_Const(1),
							$author$project$Wasm$I32_Add,
							$author$project$Wasm$I32_Mul,
							$author$project$Wasm$I32_Sub,
							$author$project$Wasm$Local_Get(1),
							$author$project$Wasm$I32_Store
						]),
					isIndirectlyCalled: false,
					locals: _List_Nil,
					name: $author$project$Play$Codegen$BaseModule$stackReplaceElementFn,
					results: _List_Nil
				},
				A2(
					$author$project$Wasm$withFunction,
					{
						args: _List_fromArray(
							[$author$project$Wasm$Int32]),
						exported: false,
						instructions: _List_fromArray(
							[
								$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$stackPositionOffset),
								$author$project$Wasm$I32_Load,
								$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$wasmPtrSize),
								$author$project$Wasm$Local_Get(0),
								$author$project$Wasm$I32_Const(1),
								$author$project$Wasm$I32_Add,
								$author$project$Wasm$I32_Mul,
								$author$project$Wasm$I32_Sub,
								$author$project$Wasm$I32_Load
							]),
						isIndirectlyCalled: false,
						locals: _List_Nil,
						name: $author$project$Play$Codegen$BaseModule$stackGetElementFn,
						results: _List_fromArray(
							[$author$project$Wasm$Int32])
					},
					A2(
						$author$project$Wasm$withFunction,
						{
							args: _List_Nil,
							exported: false,
							instructions: _List_fromArray(
								[
									$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
									$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
									$author$project$Wasm$I32_Eq,
									$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
								]),
							isIndirectlyCalled: false,
							locals: _List_Nil,
							name: $author$project$Play$Codegen$BaseModule$eqIntFn,
							results: _List_Nil
						},
						A2(
							$author$project$Wasm$withFunction,
							{
								args: _List_Nil,
								exported: false,
								instructions: _List_fromArray(
									[
										$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$swapFn),
										$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
										$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
										$author$project$Wasm$I32_Div,
										$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
									]),
								isIndirectlyCalled: false,
								locals: _List_Nil,
								name: $author$project$Play$Codegen$BaseModule$divIntFn,
								results: _List_Nil
							},
							A2(
								$author$project$Wasm$withFunction,
								{
									args: _List_Nil,
									exported: false,
									instructions: _List_fromArray(
										[
											$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$swapFn),
											$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
											$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
											$author$project$Wasm$I32_Mul,
											$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
										]),
									isIndirectlyCalled: false,
									locals: _List_Nil,
									name: $author$project$Play$Codegen$BaseModule$mulIntFn,
									results: _List_Nil
								},
								A2(
									$author$project$Wasm$withFunction,
									{
										args: _List_Nil,
										exported: false,
										instructions: _List_fromArray(
											[
												$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$swapFn),
												$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
												$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
												$author$project$Wasm$I32_Sub,
												$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
											]),
										isIndirectlyCalled: false,
										locals: _List_Nil,
										name: $author$project$Play$Codegen$BaseModule$subIntFn,
										results: _List_Nil
									},
									A2(
										$author$project$Wasm$withFunction,
										{
											args: _List_Nil,
											exported: false,
											instructions: _List_fromArray(
												[
													$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$swapFn),
													$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
													$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
													$author$project$Wasm$I32_Add,
													$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
												]),
											isIndirectlyCalled: false,
											locals: _List_Nil,
											name: $author$project$Play$Codegen$BaseModule$addIntFn,
											results: _List_Nil
										},
										A2(
											$author$project$Wasm$withFunction,
											{
												args: _List_Nil,
												exported: false,
												instructions: _List_fromArray(
													[
														$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
														$author$project$Wasm$Local_Set(0),
														$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
														$author$project$Wasm$Local_Set(1),
														$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
														$author$project$Wasm$Local_Set(2),
														$author$project$Wasm$Local_Get(1),
														$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn),
														$author$project$Wasm$Local_Get(0),
														$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn),
														$author$project$Wasm$Local_Get(2),
														$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
													]),
												isIndirectlyCalled: false,
												locals: _List_fromArray(
													[$author$project$Wasm$Int32, $author$project$Wasm$Int32, $author$project$Wasm$Int32]),
												name: $author$project$Play$Codegen$BaseModule$leftRotFn,
												results: _List_Nil
											},
											A2(
												$author$project$Wasm$withFunction,
												{
													args: _List_Nil,
													exported: false,
													instructions: _List_fromArray(
														[
															$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
															$author$project$Wasm$Local_Set(0),
															$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
															$author$project$Wasm$Local_Set(1),
															$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
															$author$project$Wasm$Local_Set(2),
															$author$project$Wasm$Local_Get(0),
															$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn),
															$author$project$Wasm$Local_Get(2),
															$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn),
															$author$project$Wasm$Local_Get(1),
															$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
														]),
													isIndirectlyCalled: false,
													locals: _List_fromArray(
														[$author$project$Wasm$Int32, $author$project$Wasm$Int32, $author$project$Wasm$Int32]),
													name: $author$project$Play$Codegen$BaseModule$rotFn,
													results: _List_Nil
												},
												A2(
													$author$project$Wasm$withFunction,
													{
														args: _List_Nil,
														exported: false,
														instructions: _List_fromArray(
															[
																$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
																$author$project$Wasm$Local_Set(0),
																$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
																$author$project$Wasm$Local_Get(0),
																$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn),
																$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
															]),
														isIndirectlyCalled: false,
														locals: _List_fromArray(
															[$author$project$Wasm$Int32]),
														name: $author$project$Play$Codegen$BaseModule$swapFn,
														results: _List_Nil
													},
													A2(
														$author$project$Wasm$withFunction,
														{
															args: _List_Nil,
															exported: false,
															instructions: _List_fromArray(
																[
																	$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
																	$author$project$Wasm$Drop
																]),
															isIndirectlyCalled: false,
															locals: _List_Nil,
															name: $author$project$Play$Codegen$BaseModule$dropFn,
															results: _List_Nil
														},
														A2(
															$author$project$Wasm$withFunction,
															{
																args: _List_Nil,
																exported: false,
																instructions: _List_fromArray(
																	[
																		$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
																		$author$project$Wasm$Local_Tee(0),
																		$author$project$Wasm$Local_Get(0),
																		$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn),
																		$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
																	]),
																isIndirectlyCalled: false,
																locals: _List_fromArray(
																	[$author$project$Wasm$Int32]),
																name: $author$project$Play$Codegen$BaseModule$dupFn,
																results: _List_Nil
															},
															A2(
																$author$project$Wasm$withFunction,
																{
																	args: _List_Nil,
																	exported: false,
																	instructions: _List_fromArray(
																		[
																			$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$stackPositionOffset),
																			$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$stackPositionOffset),
																			$author$project$Wasm$I32_Load,
																			$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$wasmPtrSize),
																			$author$project$Wasm$I32_Sub,
																			$author$project$Wasm$Local_Tee(0),
																			$author$project$Wasm$I32_Store,
																			$author$project$Wasm$Local_Get(0),
																			$author$project$Wasm$I32_Load
																		]),
																	isIndirectlyCalled: false,
																	locals: _List_fromArray(
																		[$author$project$Wasm$Int32]),
																	name: $author$project$Play$Codegen$BaseModule$stackPopFn,
																	results: _List_fromArray(
																		[$author$project$Wasm$Int32])
																},
																A2(
																	$author$project$Wasm$withFunction,
																	{
																		args: _List_fromArray(
																			[$author$project$Wasm$Int32]),
																		exported: false,
																		instructions: _List_fromArray(
																			[
																				$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$stackPositionOffset),
																				$author$project$Wasm$I32_Load,
																				$author$project$Wasm$Local_Tee(1),
																				$author$project$Wasm$Local_Get(0),
																				$author$project$Wasm$I32_Store,
																				$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$stackPositionOffset),
																				$author$project$Wasm$Local_Get(1),
																				$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$wasmPtrSize),
																				$author$project$Wasm$I32_Add,
																				$author$project$Wasm$I32_Store
																			]),
																		isIndirectlyCalled: false,
																		locals: _List_fromArray(
																			[$author$project$Wasm$Int32]),
																		name: $author$project$Play$Codegen$BaseModule$stackPushFn,
																		results: _List_Nil
																	},
																	A2(
																		$author$project$Wasm$withFunction,
																		{
																			args: _List_fromArray(
																				[$author$project$Wasm$Int32, $author$project$Wasm$Int32]),
																			exported: false,
																			instructions: _List_fromArray(
																				[
																					$author$project$Wasm$Local_Get(1),
																					$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$allocFn),
																					$author$project$Wasm$Local_Set(2),
																					$author$project$Wasm$Block(
																					_List_fromArray(
																						[
																							$author$project$Wasm$Loop(
																							_List_fromArray(
																								[
																									$author$project$Wasm$Local_Get(1),
																									$author$project$Wasm$I32_EqZero,
																									$author$project$Wasm$BreakIf(1),
																									$author$project$Wasm$Local_Get(1),
																									$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$wasmPtrSize),
																									$author$project$Wasm$I32_Sub,
																									$author$project$Wasm$Local_Set(1),
																									$author$project$Wasm$Local_Get(0),
																									$author$project$Wasm$Local_Get(1),
																									$author$project$Wasm$I32_Add,
																									$author$project$Wasm$I32_Load,
																									$author$project$Wasm$Local_Set(3),
																									$author$project$Wasm$Local_Get(2),
																									$author$project$Wasm$Local_Get(1),
																									$author$project$Wasm$I32_Add,
																									$author$project$Wasm$Local_Get(3),
																									$author$project$Wasm$I32_Store,
																									$author$project$Wasm$Break(0)
																								]))
																						])),
																					$author$project$Wasm$Local_Get(2)
																				]),
																			isIndirectlyCalled: false,
																			locals: _List_fromArray(
																				[$author$project$Wasm$Int32, $author$project$Wasm$Int32]),
																			name: $author$project$Play$Codegen$BaseModule$copyStructFn,
																			results: _List_fromArray(
																				[$author$project$Wasm$Int32])
																		},
																		A2(
																			$author$project$Wasm$withFunction,
																			{
																				args: _List_fromArray(
																					[$author$project$Wasm$Int32]),
																				exported: false,
																				instructions: _List_fromArray(
																					[
																						$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$initialHeapPositionOffset),
																						$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$initialHeapPositionOffset),
																						$author$project$Wasm$I32_Load,
																						$author$project$Wasm$Local_Tee(1),
																						$author$project$Wasm$Local_Get(0),
																						$author$project$Wasm$I32_Add,
																						$author$project$Wasm$I32_Store,
																						$author$project$Wasm$Local_Get(1)
																					]),
																				isIndirectlyCalled: false,
																				locals: _List_fromArray(
																					[$author$project$Wasm$Int32]),
																				name: $author$project$Play$Codegen$BaseModule$allocFn,
																				results: _List_fromArray(
																					[$author$project$Wasm$Int32])
																			},
																			A2(
																				$author$project$Wasm$withStartFunction,
																				{
																					args: _List_Nil,
																					exported: false,
																					instructions: _List_fromArray(
																						[
																							$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$stackCapacityOffset),
																							$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$defaultStackSize),
																							$author$project$Wasm$I32_Store,
																							$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$stackPositionOffset),
																							$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$wasmPtrSize * 3),
																							$author$project$Wasm$I32_Store,
																							$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$initialHeapPositionOffset),
																							$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$defaultStackSize + $author$project$Play$Codegen$BaseModule$wasmPtrSize),
																							$author$project$Wasm$I32_Store
																						]),
																					isIndirectlyCalled: false,
																					locals: _List_Nil,
																					name: '__initialize',
																					results: _List_Nil
																				},
																				A4(
																					$author$project$Wasm$withImport,
																					'host',
																					'memory',
																					A2($author$project$Wasm$Memory, 1, $elm$core$Maybe$Nothing),
																					$author$project$Wasm$initModule)))))))))))))))))))));
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $author$project$Play$Codegen$Box = F2(
	function (a, b) {
		return {$: 'Box', a: a, b: b};
	});
var $author$project$Play$Codegen$Builtin = function (a) {
	return {$: 'Builtin', a: a};
};
var $author$project$Play$Codegen$ConstructType = function (a) {
	return {$: 'ConstructType', a: a};
};
var $author$project$Play$Data$Type$Custom = function (a) {
	return {$: 'Custom', a: a};
};
var $author$project$Play$Data$Type$CustomGeneric = F2(
	function (a, b) {
		return {$: 'CustomGeneric', a: a, b: b};
	});
var $author$project$Play$Data$Type$Generic = function (a) {
	return {$: 'Generic', a: a};
};
var $author$project$Play$Codegen$GetMember = F3(
	function (a, b, c) {
		return {$: 'GetMember', a: a, b: b, c: c};
	});
var $author$project$Play$Data$Type$Int = {$: 'Int'};
var $author$project$Play$Codegen$IntLiteral = function (a) {
	return {$: 'IntLiteral', a: a};
};
var $author$project$Play$Data$Type$Quotation = function (a) {
	return {$: 'Quotation', a: a};
};
var $author$project$Play$Codegen$SetMember = F3(
	function (a, b, c) {
		return {$: 'SetMember', a: a, b: b, c: c};
	});
var $author$project$Play$Codegen$Word = F2(
	function (a, b) {
		return {$: 'Word', a: a, b: b};
	});
var $author$project$Play$Codegen$WordRef = function (a) {
	return {$: 'WordRef', a: a};
};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm_community$list_extra$List$Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return $elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Play$Codegen$requiresBoxingInPatternMatch = function (type_) {
	switch (type_.$) {
		case 'Int':
			return true;
		case 'Generic':
			return true;
		default:
			return false;
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm$core$Debug$todo = _Debug_todo;
var $author$project$Play$Codegen$unionBoxMap = function (union) {
	var helper = F2(
		function (t, _v0) {
			var nextId = _v0.a;
			var mapping = _v0.b;
			return $author$project$Play$Codegen$requiresBoxingInPatternMatch(t) ? _Utils_Tuple2(
				nextId - 1,
				A2(
					$elm$core$List$cons,
					_Utils_Tuple2(t, nextId),
					mapping)) : _Utils_Tuple2(nextId, mapping);
		});
	return A3(
		$elm$core$List$foldl,
		helper,
		_Utils_Tuple2(-1, _List_Nil),
		union).b;
};
var $author$project$Play$Data$Type$StackRange = function (a) {
	return {$: 'StackRange', a: a};
};
var $author$project$Play$Data$Builtin$wordType = function (builtin) {
	switch (builtin.$) {
		case 'Plus':
			return {
				input: _List_fromArray(
					[$author$project$Play$Data$Type$Int, $author$project$Play$Data$Type$Int]),
				output: _List_fromArray(
					[$author$project$Play$Data$Type$Int])
			};
		case 'Minus':
			return {
				input: _List_fromArray(
					[$author$project$Play$Data$Type$Int, $author$project$Play$Data$Type$Int]),
				output: _List_fromArray(
					[$author$project$Play$Data$Type$Int])
			};
		case 'Multiply':
			return {
				input: _List_fromArray(
					[$author$project$Play$Data$Type$Int, $author$project$Play$Data$Type$Int]),
				output: _List_fromArray(
					[$author$project$Play$Data$Type$Int])
			};
		case 'Divide':
			return {
				input: _List_fromArray(
					[$author$project$Play$Data$Type$Int, $author$project$Play$Data$Type$Int]),
				output: _List_fromArray(
					[$author$project$Play$Data$Type$Int])
			};
		case 'Equal':
			return {
				input: _List_fromArray(
					[$author$project$Play$Data$Type$Int, $author$project$Play$Data$Type$Int]),
				output: _List_fromArray(
					[$author$project$Play$Data$Type$Int])
			};
		case 'StackDuplicate':
			return {
				input: _List_fromArray(
					[
						$author$project$Play$Data$Type$Generic('a')
					]),
				output: _List_fromArray(
					[
						$author$project$Play$Data$Type$Generic('a'),
						$author$project$Play$Data$Type$Generic('a')
					])
			};
		case 'StackDrop':
			return {
				input: _List_fromArray(
					[
						$author$project$Play$Data$Type$Generic('a')
					]),
				output: _List_Nil
			};
		case 'StackSwap':
			return {
				input: _List_fromArray(
					[
						$author$project$Play$Data$Type$Generic('a'),
						$author$project$Play$Data$Type$Generic('b')
					]),
				output: _List_fromArray(
					[
						$author$project$Play$Data$Type$Generic('b'),
						$author$project$Play$Data$Type$Generic('a')
					])
			};
		case 'StackRightRotate':
			return {
				input: _List_fromArray(
					[
						$author$project$Play$Data$Type$Generic('a'),
						$author$project$Play$Data$Type$Generic('b'),
						$author$project$Play$Data$Type$Generic('c')
					]),
				output: _List_fromArray(
					[
						$author$project$Play$Data$Type$Generic('c'),
						$author$project$Play$Data$Type$Generic('a'),
						$author$project$Play$Data$Type$Generic('b')
					])
			};
		case 'StackLeftRotate':
			return {
				input: _List_fromArray(
					[
						$author$project$Play$Data$Type$Generic('a'),
						$author$project$Play$Data$Type$Generic('b'),
						$author$project$Play$Data$Type$Generic('c')
					]),
				output: _List_fromArray(
					[
						$author$project$Play$Data$Type$Generic('b'),
						$author$project$Play$Data$Type$Generic('c'),
						$author$project$Play$Data$Type$Generic('a')
					])
			};
		default:
			return {
				input: _List_fromArray(
					[
						$author$project$Play$Data$Type$StackRange('a'),
						$author$project$Play$Data$Type$Quotation(
						{
							input: _List_fromArray(
								[
									$author$project$Play$Data$Type$StackRange('a')
								]),
							output: _List_fromArray(
								[
									$author$project$Play$Data$Type$StackRange('b')
								])
						})
					]),
				output: _List_fromArray(
					[
						$author$project$Play$Data$Type$StackRange('b')
					])
			};
	}
};
var $author$project$Play$Codegen$astNodeToCodegenNode = F3(
	function (ast, node, _v0) {
		var stack = _v0.a;
		var result = _v0.b;
		var typeFromTypeDef = F2(
			function (typeName, gens) {
				return $elm$core$List$isEmpty(gens) ? $author$project$Play$Data$Type$Custom(typeName) : A2(
					$author$project$Play$Data$Type$CustomGeneric,
					typeName,
					A2($elm$core$List$map, $author$project$Play$Data$Type$Generic, gens));
			});
		var nodeType = function () {
			switch (node.$) {
				case 'IntLiteral':
					return {
						input: _List_Nil,
						output: _List_fromArray(
							[$author$project$Play$Data$Type$Int])
					};
				case 'Word':
					var name = node.b;
					var type_ = node.c;
					return type_;
				case 'WordRef':
					var name = node.b;
					var _v14 = A2($elm$core$Dict$get, name, ast.words);
					if (_v14.$ === 'Just') {
						var def = _v14.a;
						return {
							input: _List_Nil,
							output: _List_fromArray(
								[
									$author$project$Play$Data$Type$Quotation(def.type_)
								])
						};
					} else {
						return _Debug_todo(
							'Play.Codegen',
							{
								start: {line: 167, column: 29},
								end: {line: 167, column: 39}
							})('help');
					}
				case 'ConstructType':
					var typeName = node.a;
					var _v15 = A2($elm$core$Dict$get, typeName, ast.types);
					if ((_v15.$ === 'Just') && (_v15.a.$ === 'CustomTypeDef')) {
						var _v16 = _v15.a;
						var gens = _v16.c;
						var members = _v16.d;
						return {
							input: A2($elm$core$List$map, $elm$core$Tuple$second, members),
							output: _List_fromArray(
								[
									A2(typeFromTypeDef, typeName, gens)
								])
						};
					} else {
						return _Debug_todo(
							'Play.Codegen',
							{
								start: {line: 177, column: 29},
								end: {line: 177, column: 39}
							})('help');
					}
				case 'SetMember':
					var typeName = node.a;
					var memberType = node.c;
					var _v17 = A2($elm$core$Dict$get, typeName, ast.types);
					if ((_v17.$ === 'Just') && (_v17.a.$ === 'CustomTypeDef')) {
						var _v18 = _v17.a;
						var gens = _v18.c;
						var type_ = A2(typeFromTypeDef, typeName, gens);
						return {
							input: _List_fromArray(
								[type_, memberType]),
							output: _List_fromArray(
								[type_])
						};
					} else {
						return _Debug_todo(
							'Play.Codegen',
							{
								start: {line: 191, column: 29},
								end: {line: 191, column: 39}
							})('help');
					}
				case 'GetMember':
					var typeName = node.a;
					var memberType = node.c;
					var _v19 = A2($elm$core$Dict$get, typeName, ast.types);
					if ((_v19.$ === 'Just') && (_v19.a.$ === 'CustomTypeDef')) {
						var _v20 = _v19.a;
						var gens = _v20.c;
						var type_ = A2(typeFromTypeDef, typeName, gens);
						return {
							input: _List_fromArray(
								[type_]),
							output: _List_fromArray(
								[memberType])
						};
					} else {
						return _Debug_todo(
							'Play.Codegen',
							{
								start: {line: 205, column: 29},
								end: {line: 205, column: 39}
							})('help');
					}
				default:
					var builtin = node.b;
					return $author$project$Play$Data$Builtin$wordType(builtin);
			}
		}();
		var stackInScope = $elm$core$List$reverse(
			A2(
				$elm$core$List$take,
				$elm$core$List$length(nodeType.input),
				$elm$core$List$reverse(stack)));
		var newStack = $elm$core$List$reverse(
			function (s) {
				return _Utils_ap(
					$elm$core$List$reverse(nodeType.output),
					s);
			}(
				A2(
					$elm$core$List$drop,
					$elm$core$List$length(nodeType.input),
					$elm$core$List$reverse(stack))));
		var newNode = function () {
			switch (node.$) {
				case 'IntLiteral':
					var val = node.b;
					return $author$project$Play$Codegen$IntLiteral(val);
				case 'Word':
					var name = node.b;
					var type_ = node.c;
					return A2($author$project$Play$Codegen$Word, name, type_);
				case 'WordRef':
					var name = node.b;
					return $author$project$Play$Codegen$WordRef(name);
				case 'ConstructType':
					var typeName = node.a;
					return $author$project$Play$Codegen$ConstructType(typeName);
				case 'SetMember':
					var typeName = node.a;
					var memberName = node.b;
					var type_ = node.c;
					return A3($author$project$Play$Codegen$SetMember, typeName, memberName, type_);
				case 'GetMember':
					var typeName = node.a;
					var memberName = node.b;
					var type_ = node.c;
					return A3($author$project$Play$Codegen$GetMember, typeName, memberName, type_);
				default:
					var builtin = node.b;
					return $author$project$Play$Codegen$Builtin(builtin);
			}
		}();
		var maybeCons = F2(
			function (maybeBoxElement, list) {
				if (maybeBoxElement.$ === 'Just') {
					var value = maybeBoxElement.a;
					return A2($elm$core$List$cons, value, list);
				} else {
					return list;
				}
			});
		var maybeBox = function (_v10) {
			var idx = _v10.a;
			var leftType = _v10.b;
			var rightType = _v10.c;
			var _v6 = _Utils_Tuple2(leftType, rightType);
			if (_v6.b.$ === 'Union') {
				var members = _v6.b.a;
				var _v7 = A2(
					$elm_community$list_extra$List$Extra$find,
					function (_v8) {
						var t = _v8.a;
						return _Utils_eq(t, leftType);
					},
					$author$project$Play$Codegen$unionBoxMap(members));
				if (_v7.$ === 'Just') {
					var _v9 = _v7.a;
					var id = _v9.b;
					return $elm$core$Maybe$Just(
						A2($author$project$Play$Codegen$Box, idx, id));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var isMultiWord = function (possibleMultiWordNode) {
			if (possibleMultiWordNode.$ === 'Word') {
				var name = possibleMultiWordNode.a;
				var _v4 = A2($elm$core$Dict$get, name, ast.words);
				if (_v4.$ === 'Just') {
					var def = _v4.a;
					var _v5 = def.implementation;
					if (_v5.$ === 'SoloImpl') {
						return false;
					} else {
						return true;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}
		};
		var maybeBoxLeadingElement = function () {
			var _v2 = _Utils_Tuple3(
				$elm$core$List$head(stackInScope),
				isMultiWord(newNode),
				$elm$core$List$head(nodeType.input));
			if (((_v2.a.$ === 'Just') && _v2.b) && (_v2.c.$ === 'Just')) {
				if (_v2.c.a.$ === 'Union') {
					return $elm$core$Maybe$Nothing;
				} else {
					var nodeLeadingType = _v2.c.a;
					if ($author$project$Play$Codegen$requiresBoxingInPatternMatch(nodeLeadingType)) {
						var idx = A2(
							$elm$core$Basics$max,
							0,
							$elm$core$List$length(nodeType.input) - 1);
						return $elm$core$Maybe$Just(
							A2($author$project$Play$Codegen$Box, idx, -1));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}();
		var stackElementsToBox = A2(
			maybeCons,
			maybeBoxLeadingElement,
			A2(
				$elm$core$List$filterMap,
				maybeBox,
				A2(
					$elm$core$List$indexedMap,
					F2(
						function (i, _v1) {
							var l = _v1.a;
							var r = _v1.b;
							return _Utils_Tuple3(i, l, r);
						}),
					A3(
						$elm$core$List$map2,
						$elm$core$Tuple$pair,
						$elm$core$List$reverse(stackInScope),
						$elm$core$List$reverse(nodeType.input)))));
		return _Utils_Tuple2(
			newStack,
			A2(
				$elm$core$List$cons,
				newNode,
				_Utils_ap(stackElementsToBox, result)));
	});
var $author$project$Wasm$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var $author$project$Wasm$FunctionIndex = function (a) {
	return {$: 'FunctionIndex', a: a};
};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Play$Codegen$getMemberType = F3(
	function (typeInfoDict, typeName, memberName) {
		return A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$first,
			A2(
				$elm$core$Maybe$andThen,
				$elm_community$list_extra$List$Extra$find(
					function (_v1) {
						var name = _v1.b;
						return _Utils_eq(name, memberName);
					}),
				A2(
					$elm$core$Maybe$map,
					A2(
						$elm$core$Basics$composeL,
						$elm$core$List$indexedMap(
							F2(
								function (idx, _v0) {
									var name = _v0.a;
									return _Utils_Tuple2(idx, name);
								})),
						function ($) {
							return $.members;
						}),
					A2($elm$core$Dict$get, typeName, typeInfoDict))));
	});
var $author$project$Play$Codegen$nodeToInstruction = F2(
	function (typeInfo, node) {
		switch (node.$) {
			case 'IntLiteral':
				var value = node.a;
				return $author$project$Wasm$Batch(
					_List_fromArray(
						[
							$author$project$Wasm$I32_Const(value),
							$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
						]));
			case 'Word':
				var value = node.a;
				return $author$project$Wasm$Call(value);
			case 'WordRef':
				var name = node.a;
				return $author$project$Wasm$FunctionIndex(name);
			case 'ConstructType':
				var typeName = node.a;
				var _v1 = A2($elm$core$Dict$get, typeName, typeInfo);
				if (_v1.$ === 'Just') {
					var type_ = _v1.a;
					var memberSize = $elm$core$List$length(type_.members);
					var typeSize = $author$project$Play$Codegen$BaseModule$wasmPtrSize + (memberSize * $author$project$Play$Codegen$BaseModule$wasmPtrSize);
					return $author$project$Wasm$Batch(
						_List_fromArray(
							[
								$author$project$Wasm$I32_Const(typeSize),
								$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$allocFn),
								$author$project$Wasm$Local_Tee(0),
								$author$project$Wasm$I32_Const(type_.id),
								$author$project$Wasm$I32_Store,
								$author$project$Wasm$I32_Const(memberSize),
								$author$project$Wasm$Local_Set(1),
								$author$project$Wasm$Block(
								_List_fromArray(
									[
										$author$project$Wasm$Loop(
										_List_fromArray(
											[
												$author$project$Wasm$Local_Get(1),
												$author$project$Wasm$I32_EqZero,
												$author$project$Wasm$BreakIf(1),
												$author$project$Wasm$Local_Get(0),
												$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$wasmPtrSize),
												$author$project$Wasm$Local_Get(1),
												$author$project$Wasm$I32_Mul,
												$author$project$Wasm$I32_Add,
												$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
												$author$project$Wasm$I32_Store,
												$author$project$Wasm$Local_Get(1),
												$author$project$Wasm$I32_Const(1),
												$author$project$Wasm$I32_Sub,
												$author$project$Wasm$Local_Set(1),
												$author$project$Wasm$Break(0)
											]))
									])),
								$author$project$Wasm$Local_Get(0),
								$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
							]));
				} else {
					return _Debug_todo(
						'Play.Codegen',
						{
							start: {line: 572, column: 21},
							end: {line: 572, column: 31}
						})('This cannot happen.');
				}
			case 'SetMember':
				var typeName = node.a;
				var memberName = node.b;
				var memberType = node.c;
				var _v2 = A2($elm$core$Dict$get, typeName, typeInfo);
				if (_v2.$ === 'Just') {
					var type_ = _v2.a;
					var memberSize = $elm$core$List$length(type_.members);
					var typeSize = $author$project$Play$Codegen$BaseModule$wasmPtrSize + (memberSize * $author$project$Play$Codegen$BaseModule$wasmPtrSize);
					var _v3 = A3($author$project$Play$Codegen$getMemberType, typeInfo, typeName, memberName);
					if (_v3.$ === 'Just') {
						var memberIndex = _v3.a;
						return $author$project$Wasm$Batch(
							_List_fromArray(
								[
									$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$swapFn),
									$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
									$author$project$Wasm$I32_Const(typeSize),
									$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$copyStructFn),
									$author$project$Wasm$Local_Tee(0),
									$author$project$Wasm$I32_Const((memberIndex + 1) * $author$project$Play$Codegen$BaseModule$wasmPtrSize),
									$author$project$Wasm$I32_Add,
									$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
									$author$project$Wasm$I32_Store,
									$author$project$Wasm$Local_Get(0),
									$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
								]));
					} else {
						return _Debug_todo(
							'Play.Codegen',
							{
								start: {line: 601, column: 29},
								end: {line: 601, column: 39}
							})('NOOOOO!');
					}
				} else {
					return _Debug_todo(
						'Play.Codegen',
						{
							start: {line: 604, column: 21},
							end: {line: 604, column: 31}
						})('This cannot happen!');
				}
			case 'GetMember':
				var typeName = node.a;
				var memberName = node.b;
				var memberType = node.c;
				var _v4 = A3($author$project$Play$Codegen$getMemberType, typeInfo, typeName, memberName);
				if (_v4.$ === 'Just') {
					var memberIndex = _v4.a;
					return $author$project$Wasm$Batch(
						_List_fromArray(
							[
								$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
								$author$project$Wasm$I32_Const((memberIndex + 1) * $author$project$Play$Codegen$BaseModule$wasmPtrSize),
								$author$project$Wasm$I32_Add,
								$author$project$Wasm$I32_Load,
								$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn)
							]));
				} else {
					return _Debug_todo(
						'Play.Codegen',
						{
							start: {line: 618, column: 21},
							end: {line: 618, column: 31}
						})('This cannot happen!');
				}
			case 'Builtin':
				var builtin = node.a;
				switch (builtin.$) {
					case 'Plus':
						return $author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$addIntFn);
					case 'Minus':
						return $author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$subIntFn);
					case 'Multiply':
						return $author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$mulIntFn);
					case 'Divide':
						return $author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$divIntFn);
					case 'Equal':
						return $author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$eqIntFn);
					case 'StackDuplicate':
						return $author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$dupFn);
					case 'StackDrop':
						return $author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$dropFn);
					case 'StackSwap':
						return $author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$swapFn);
					case 'StackRightRotate':
						return $author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$rotFn);
					case 'StackLeftRotate':
						return $author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$leftRotFn);
					default:
						return $author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$callQuoteFn);
				}
			default:
				var stackPos = node.a;
				var id = node.b;
				return $author$project$Wasm$Batch(
					_List_fromArray(
						[
							$author$project$Wasm$I32_Const(stackPos),
							$author$project$Wasm$I32_Const(id),
							$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$boxFn)
						]));
		}
	});
var $author$project$Play$Codegen$astNodesToInstructions = F4(
	function (typeInfo, ast, def, astNodes) {
		return A2(
			$elm$core$List$map,
			$author$project$Play$Codegen$nodeToInstruction(typeInfo),
			$elm$core$List$reverse(
				A3(
					$elm$core$List$foldl,
					$author$project$Play$Codegen$astNodeToCodegenNode(ast),
					_Utils_Tuple2(def.type_.input, _List_Nil),
					astNodes).b));
	});
var $elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(
			A3($elm$core$List$foldl, $elm$core$Basics$max, x, xs));
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Wasm$maximumLocalIndex = function (ins) {
	switch (ins.$) {
		case 'Batch':
			var insList = ins.a;
			return $elm$core$List$maximum(
				A2($elm$core$List$filterMap, $author$project$Wasm$maximumLocalIndex, insList));
		case 'Block':
			var insList = ins.a;
			return $elm$core$List$maximum(
				A2($elm$core$List$filterMap, $author$project$Wasm$maximumLocalIndex, insList));
		case 'Loop':
			var insList = ins.a;
			return $elm$core$List$maximum(
				A2($elm$core$List$filterMap, $author$project$Wasm$maximumLocalIndex, insList));
		case 'Local_Get':
			var idx = ins.a;
			return $elm$core$Maybe$Just(idx);
		case 'Local_Set':
			var idx = ins.a;
			return $elm$core$Maybe$Just(idx);
		case 'Local_Tee':
			var idx = ins.a;
			return $elm$core$Maybe$Just(idx);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Wasm$I32_NotEq = {$: 'I32_NotEq'};
var $author$project$Wasm$Return = {$: 'Return'};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Debug$toString = _Debug_toString;
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Play$Codegen$multiFnToInstructions = F5(
	function (typeInfo, ast, def, whens, defaultImpl) {
		var selfIndex = A2(
			$elm$core$Basics$max,
			0,
			$elm$core$List$length(def.type_.input) - 1);
		var createBoxMap = function (t_) {
			if (t_.$ === 'Union') {
				var members = t_.a;
				return $author$project$Play$Codegen$unionBoxMap(members);
			} else {
				return $author$project$Play$Codegen$requiresBoxingInPatternMatch(t_) ? _List_fromArray(
					[
						_Utils_Tuple2(t_, -1)
					]) : _List_Nil;
			}
		};
		var boxMap = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				createBoxMap,
				$elm$core$List$head(def.type_.input)));
		var buildBranch = F2(
			function (_v16, previousBranch) {
				var type_ = _v16.a;
				var nodes = _v16.b;
				var matchingIntTest = F2(
					function (localIdx, _v15) {
						var astValue = _v15.b;
						var value = function () {
							if (astValue.$ === 'LiteralInt') {
								var num = astValue.a;
								return num;
							} else {
								return 0;
							}
						}();
						return _List_fromArray(
							[
								$author$project$Wasm$Local_Get(localIdx),
								$author$project$Wasm$I32_Const($author$project$Play$Codegen$BaseModule$wasmPtrSize),
								$author$project$Wasm$I32_Add,
								$author$project$Wasm$I32_Load,
								$author$project$Wasm$I32_Const(value),
								$author$project$Wasm$I32_NotEq,
								$author$project$Wasm$BreakIf(0)
							]);
					});
				var implementation = $author$project$Wasm$Batch(
					A4($author$project$Play$Codegen$astNodesToInstructions, typeInfo, ast, def, nodes));
				var conditionTest = F2(
					function (localIdx, _v13) {
						var fieldName = _v13.a;
						var value = _v13.b;
						switch (value.$) {
							case 'LiteralInt':
								var num = value.a;
								return _List_fromArray(
									[
										$author$project$Wasm$Local_Get(localIdx),
										$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn),
										$author$project$Wasm$Call(fieldName + '>'),
										$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
										$author$project$Wasm$I32_Const(num),
										$author$project$Wasm$I32_NotEq,
										$author$project$Wasm$BreakIf(0)
									]);
							case 'LiteralType':
								var typ_ = value.a;
								if (typ_.$ === 'Custom') {
									var typeName = typ_.a;
									var typeId = A2(
										$elm$core$Maybe$withDefault,
										0,
										A2(
											$elm$core$Maybe$map,
											function ($) {
												return $.id;
											},
											A2($elm$core$Dict$get, typeName, typeInfo)));
									return _List_fromArray(
										[
											$author$project$Wasm$Local_Get(localIdx),
											$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn),
											$author$project$Wasm$Call(fieldName + '>'),
											$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
											$author$project$Wasm$I32_Load,
											$author$project$Wasm$I32_Const(typeId),
											$author$project$Wasm$I32_NotEq,
											$author$project$Wasm$BreakIf(0)
										]);
								} else {
									return _Debug_todo(
										'Play.Codegen',
										{
											start: {line: 476, column: 37},
											end: {line: 476, column: 47}
										})('oops');
								}
							default:
								var match = value.a;
								var nextLocalIdx = localIdx + 1;
								return _List_fromArray(
									[
										$author$project$Wasm$Local_Get(localIdx),
										$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPushFn),
										$author$project$Wasm$Call(fieldName + '>'),
										$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackPopFn),
										$author$project$Wasm$Local_Set(nextLocalIdx),
										A2(makeInequalityTest, match, nextLocalIdx)
									]);
						}
					});
				var makeInequalityTest = F2(
					function (t_, localIdx) {
						var _v0 = t_;
						var typeFromTypeMatch = _v0.b;
						var maybeBoxId = A2(
							$elm$core$Maybe$map,
							$elm$core$Tuple$second,
							A2(
								$elm_community$list_extra$List$Extra$find,
								function (_v10) {
									var boxedType = _v10.a;
									return _Utils_eq(boxedType, typeFromTypeMatch);
								},
								boxMap));
						var _v1 = _Utils_Tuple2(t_, maybeBoxId);
						_v1$4:
						while (true) {
							if (_v1.b.$ === 'Just') {
								if (_v1.a.b.$ === 'Int') {
									var _v2 = _v1.a;
									var _v3 = _v2.b;
									var conditions = _v2.c;
									var boxId = _v1.b.a;
									return $author$project$Wasm$Batch(
										_List_fromArray(
											[
												$author$project$Wasm$Local_Get(localIdx),
												$author$project$Wasm$I32_Load,
												$author$project$Wasm$I32_Const(boxId),
												$author$project$Wasm$I32_NotEq,
												$author$project$Wasm$BreakIf(0),
												$author$project$Wasm$Batch(
												A2(
													$elm$core$List$concatMap,
													matchingIntTest(localIdx),
													conditions)),
												$author$project$Wasm$I32_Const(selfIndex),
												$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$unboxFn)
											]));
								} else {
									if (!_v1.a.c.b) {
										var _v4 = _v1.a;
										var boxId = _v1.b.a;
										return $author$project$Wasm$Batch(
											_List_fromArray(
												[
													$author$project$Wasm$Local_Get(localIdx),
													$author$project$Wasm$I32_Load,
													$author$project$Wasm$I32_Const(boxId),
													$author$project$Wasm$I32_NotEq,
													$author$project$Wasm$BreakIf(0),
													$author$project$Wasm$I32_Const(selfIndex),
													$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$unboxFn)
												]));
									} else {
										break _v1$4;
									}
								}
							} else {
								switch (_v1.a.b.$) {
									case 'Custom':
										var _v5 = _v1.a;
										var name = _v5.b.a;
										var conditions = _v5.c;
										var _v6 = _v1.b;
										return A3(whenSetup, localIdx, name, conditions);
									case 'CustomGeneric':
										var _v7 = _v1.a;
										var _v8 = _v7.b;
										var name = _v8.a;
										var conditions = _v7.c;
										var _v9 = _v1.b;
										return A3(whenSetup, localIdx, name, conditions);
									default:
										break _v1$4;
								}
							}
						}
						return _Debug_todo(
							'Play.Codegen',
							{
								start: {line: 405, column: 29},
								end: {line: 405, column: 39}
							})(
							'Not supported in pattern match: ' + $elm$core$Debug$toString(t_));
					});
				var whenSetup = F3(
					function (localIdx, typeName, conditions) {
						var typeId = A2(
							$elm$core$Maybe$withDefault,
							0,
							A2(
								$elm$core$Maybe$map,
								function ($) {
									return $.id;
								},
								A2($elm$core$Dict$get, typeName, typeInfo)));
						return $author$project$Wasm$Batch(
							_List_fromArray(
								[
									$author$project$Wasm$Local_Get(localIdx),
									$author$project$Wasm$I32_Load,
									$author$project$Wasm$I32_Const(typeId),
									$author$project$Wasm$I32_NotEq,
									$author$project$Wasm$BreakIf(0),
									$author$project$Wasm$Batch(
									A2(
										$elm$core$List$concatMap,
										conditionTest(localIdx),
										conditions))
								]));
					});
				var testForInequality = A2(makeInequalityTest, type_, 0);
				return $author$project$Wasm$Block(
					_List_fromArray(
						[previousBranch, testForInequality, implementation, $author$project$Wasm$Return]));
			});
		var branches = A3(
			$elm$core$List$foldl,
			buildBranch,
			$author$project$Wasm$Batch(_List_Nil),
			whens);
		return $author$project$Wasm$Batch(
			_List_fromArray(
				[
					$author$project$Wasm$I32_Const(selfIndex),
					$author$project$Wasm$Call($author$project$Play$Codegen$BaseModule$stackGetElementFn),
					$author$project$Wasm$Local_Set(0),
					branches,
					$author$project$Wasm$Batch(
					A4($author$project$Play$Codegen$astNodesToInstructions, typeInfo, ast, def, defaultImpl))
				]));
	});
var $elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2($elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var $elm$core$List$repeat = F2(
	function (n, value) {
		return A3($elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var $author$project$Play$Codegen$toWasmFuncDef = F3(
	function (typeInfo, ast, def) {
		var wasmImplementation = function () {
			var _v0 = def.implementation;
			if (_v0.$ === 'SoloImpl') {
				var impl = _v0.a;
				return A4($author$project$Play$Codegen$astNodesToInstructions, typeInfo, ast, def, impl);
			} else {
				var whens = _v0.a;
				var defaultImpl = _v0.b;
				return _List_fromArray(
					[
						A5($author$project$Play$Codegen$multiFnToInstructions, typeInfo, ast, def, whens, defaultImpl)
					]);
			}
		}();
		var numberOfLocals = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				$elm$core$Basics$add(1),
				$elm$core$List$maximum(
					A2($elm$core$List$filterMap, $author$project$Wasm$maximumLocalIndex, wasmImplementation))));
		return {
			args: _List_Nil,
			exported: def.metadata.isEntryPoint,
			instructions: wasmImplementation,
			isIndirectlyCalled: def.metadata.isQuoted,
			locals: A2($elm$core$List$repeat, numberOfLocals, $author$project$Wasm$Int32),
			name: def.name,
			results: _List_Nil
		};
	});
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $author$project$Play$Codegen$typeMeta = function (types) {
	return $elm$core$Dict$fromList(
		A2(
			$elm$core$List$indexedMap,
			F2(
				function (idx, _v1) {
					var name = _v1.a;
					var def = _v1.b;
					return _Utils_Tuple2(
						name,
						_Utils_update(
							def,
							{id: idx}));
				}),
			A2(
				$elm$core$List$filterMap,
				function (typeDef) {
					if (typeDef.$ === 'CustomTypeDef') {
						var name = typeDef.a;
						var members = typeDef.d;
						return $elm$core$Maybe$Just(
							_Utils_Tuple2(
								name,
								{id: 0, members: members}));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				},
				types)));
};
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $author$project$Play$Codegen$codegen = function (ast) {
	var typeMetaDict = $author$project$Play$Codegen$typeMeta(
		$elm$core$Dict$values(ast.types));
	return $elm$core$Result$Ok(
		A3(
			$elm$core$List$foldl,
			$author$project$Wasm$withFunction,
			$author$project$Play$Codegen$BaseModule$baseModule,
			A2(
				$elm$core$List$map,
				A2($author$project$Play$Codegen$toWasmFuncDef, typeMetaDict, ast),
				$elm$core$Dict$values(ast.words))));
};
var $author$project$Main$formatErrors = F2(
	function (fn, problems) {
		return $elm$core$Result$Err(
			A2(
				$elm$core$String$join,
				'\n\n',
				A2($elm$core$List$map, fn, problems)));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $author$project$Play$Parser$Problem$ExpectedEnd = {$: 'ExpectedEnd'};
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var $author$project$Play$Parser$Problem$NoProblem = {$: 'NoProblem'};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var $author$project$Play$Parser$Problem$TypeAlreadyDefined = F3(
	function (a, b, c) {
		return {$: 'TypeAlreadyDefined', a: a, b: b, c: c};
	});
var $author$project$Play$Parser$Problem$WordAlreadyDefined = F3(
	function (a, b, c) {
		return {$: 'WordAlreadyDefined', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v1 = parseA(s0);
				if (_v1.$ === 'Bad') {
					var p = _v1.a;
					var x = _v1.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v1.a;
					var a = _v1.b;
					var s1 = _v1.c;
					var _v2 = callback(a);
					var parseB = _v2.a;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3($elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var $elm_community$dict_extra$Dict$Extra$fromListBy = F2(
	function (keyfn, xs) {
		return A3(
			$elm$core$List$foldl,
			F2(
				function (x, acc) {
					return A3(
						$elm$core$Dict$insert,
						keyfn(x),
						x,
						acc);
				}),
			$elm$core$Dict$empty,
			xs);
	});
var $author$project$Play$Parser$ConstructType = function (a) {
	return {$: 'ConstructType', a: a};
};
var $author$project$Play$Parser$GetMember = F2(
	function (a, b) {
		return {$: 'GetMember', a: a, b: b};
	});
var $author$project$Play$Parser$SetMember = F2(
	function (a, b) {
		return {$: 'SetMember', a: a, b: b};
	});
var $author$project$Play$Parser$SoloImpl = function (a) {
	return {$: 'SoloImpl', a: a};
};
var $author$project$Play$Data$TypeSignature$NotProvided = {$: 'NotProvided'};
var $author$project$Play$Data$Metadata$default = {isEntryPoint: false, isQuoted: false, sourceLocationRange: $elm$core$Maybe$Nothing, type_: $author$project$Play$Data$TypeSignature$NotProvided};
var $author$project$Play$Data$TypeSignature$CompilerProvided = function (a) {
	return {$: 'CompilerProvided', a: a};
};
var $author$project$Play$Data$Metadata$withVerifiedType = F3(
	function (inputs, outputs, meta) {
		return _Utils_update(
			meta,
			{
				type_: $author$project$Play$Data$TypeSignature$CompilerProvided(
					{input: inputs, output: outputs})
			});
	});
var $author$project$Play$Parser$generateDefaultWordsForType = function (typeDef) {
	if (typeDef.$ === 'UnionTypeDef') {
		return _List_Nil;
	} else {
		var typeName = typeDef.b;
		var binds = typeDef.c;
		var typeMembers = typeDef.d;
		var typeOfType = function () {
			if (!binds.b) {
				return $author$project$Play$Data$Type$Custom(typeName);
			} else {
				return A2(
					$author$project$Play$Data$Type$CustomGeneric,
					typeName,
					A2($elm$core$List$map, $author$project$Play$Data$Type$Generic, binds));
			}
		}();
		var setterGetterPair = function (_v1) {
			var memberName = _v1.a;
			var memberType = _v1.b;
			return _List_fromArray(
				[
					{
					implementation: $author$project$Play$Parser$SoloImpl(
						_List_fromArray(
							[
								A2($author$project$Play$Parser$SetMember, typeName, memberName)
							])),
					metadata: A3(
						$author$project$Play$Data$Metadata$withVerifiedType,
						_List_fromArray(
							[typeOfType, memberType]),
						_List_fromArray(
							[typeOfType]),
						$author$project$Play$Data$Metadata$default),
					name: '>' + memberName
				},
					{
					implementation: $author$project$Play$Parser$SoloImpl(
						_List_fromArray(
							[
								A2($author$project$Play$Parser$GetMember, typeName, memberName)
							])),
					metadata: A3(
						$author$project$Play$Data$Metadata$withVerifiedType,
						_List_fromArray(
							[typeOfType]),
						_List_fromArray(
							[memberType]),
						$author$project$Play$Data$Metadata$default),
					name: memberName + '>'
				}
				]);
		};
		var ctorDef = {
			implementation: $author$project$Play$Parser$SoloImpl(
				_List_fromArray(
					[
						$author$project$Play$Parser$ConstructType(typeName)
					])),
			metadata: A3(
				$author$project$Play$Data$Metadata$withVerifiedType,
				A2($elm$core$List$map, $elm$core$Tuple$second, typeMembers),
				_List_fromArray(
					[typeOfType]),
				$author$project$Play$Data$Metadata$default),
			name: '>' + typeName
		};
		return A2(
			$elm$core$List$cons,
			ctorDef,
			A2($elm$core$List$concatMap, setterGetterPair, typeMembers));
	}
};
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0.a;
		var parseB = _v1.a;
		return $elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _v2 = parseA(s0);
				if (_v2.$ === 'Bad') {
					var p = _v2.a;
					var x = _v2.b;
					return A2($elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _v2.a;
					var a = _v2.b;
					var s1 = _v2.c;
					var _v3 = parseB(s1);
					if (_v3.$ === 'Bad') {
						var p2 = _v3.a;
						var x = _v3.b;
						return A2($elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _v3.a;
						var b = _v3.b;
						var s2 = _v3.c;
						return A3(
							$elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$core$Basics$not = _Basics_not;
var $elm$parser$Parser$Advanced$keyword = function (_v0) {
	var kwd = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(kwd);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return (_Utils_eq(newOffset, -1) || (0 <= A3(
				$elm$parser$Parser$Advanced$isSubChar,
				function (c) {
					return $elm$core$Char$isAlphaNum(c) || _Utils_eq(
						c,
						_Utils_chr('_'));
				},
				newOffset,
				s.src))) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $author$project$Play$Parser$MultiImpl = F2(
	function (a, b) {
		return {$: 'MultiImpl', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$apL, parseFunc, parseArg);
	});
var $elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var parse = _v0.a;
			var _v1 = parse(s0);
			if (_v1.$ === 'Good') {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3($elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var $elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var $author$project$Play$Parser$Problem$UnknownMetadata = function (a) {
	return {$: 'UnknownMetadata', a: a};
};
var $author$project$Play$Data$TypeSignature$UserProvided = function (a) {
	return {$: 'UserProvided', a: a};
};
var $author$project$Play$Parser$Problem$NotMetadata = {$: 'NotMetadata'};
var $author$project$Play$Parser$Problem$NotSymbol = {$: 'NotSymbol'};
var $elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var $elm$core$Set$empty = $elm$core$Set$Set_elm_builtin($elm$core$Dict$empty);
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A3($elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $author$project$Play$Parser$specialChars = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr(':'),
			_Utils_chr('{'),
			_Utils_chr('}'),
			_Utils_chr('['),
			_Utils_chr(']'),
			_Utils_chr('('),
			_Utils_chr(')'),
			_Utils_chr('.'),
			_Utils_chr('#')
		]));
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $elm$core$Set$union = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$union, dict1, dict2));
	});
var $author$project$Play$Parser$whitespaceChars = $elm$core$Set$fromList(
	_List_fromArray(
		[
			_Utils_chr(' '),
			_Utils_chr('\n'),
			_Utils_chr('\u000D'),
			_Utils_chr('\t')
		]));
var $author$project$Play$Parser$invalidSymbolChars = A2($elm$core$Set$union, $author$project$Play$Parser$whitespaceChars, $author$project$Play$Parser$specialChars);
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (_v0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return A2($elm$core$Dict$member, key, dict);
	});
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v1.a;
			var newRow = _v1.b;
			var newCol = _v1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				$elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $author$project$Play$Parser$validSymbolChar = function (c) {
	return !A2($elm$core$Set$member, c, $author$project$Play$Parser$invalidSymbolChars);
};
var $elm$core$String$slice = _String_slice;
var $elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {col: col, context: context, indent: indent, offset: offset, row: row, src: src};
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$variable = function (i) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
			if (_Utils_eq(firstOffset, -1)) {
				return A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting));
			} else {
				var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7($elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
				var name = A3($elm$core$String$slice, s.offset, s1.offset, s.src);
				return A2($elm$core$Set$member, name, i.reserved) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
			}
		});
};
var $author$project$Play$Parser$definitionMetadataParser = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$variable(
		{
			expecting: $author$project$Play$Parser$Problem$NotSymbol,
			inner: $author$project$Play$Parser$validSymbolChar,
			reserved: $elm$core$Set$fromList(
				_List_fromArray(
					['def', 'defmulti', 'deftype', 'defunion'])),
			start: function (c) {
				return !($elm$core$Char$isDigit(c) || ($elm$core$Char$isUpper(c) || A2($elm$core$Set$member, c, $author$project$Play$Parser$invalidSymbolChars)));
			}
		}),
	$elm$parser$Parser$Advanced$symbol(
		A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Play$Parser$Problem$NotMetadata)));
var $author$project$Play$Parser$Problem$ExpectedLeftBracket = {$: 'ExpectedLeftBracket'};
var $author$project$Play$Parser$Problem$ExpectedRightBracket = {$: 'ExpectedRightBracket'};
var $author$project$Play$Parser$Quotation = F2(
	function (a, b) {
		return {$: 'Quotation', a: a, b: b};
	});
var $author$project$Play$Data$SourceLocation$SourceLocationRange = F2(
	function (start, end) {
		return {end: end, start: start};
	});
var $author$project$Play$Parser$Integer = F2(
	function (a, b) {
		return {$: 'Integer', a: a, b: b};
	});
var $author$project$Play$Parser$Word = F2(
	function (a, b) {
		return {$: 'Word', a: a, b: b};
	});
var $author$project$Play$Parser$Problem$NotInt = {$: 'NotInt'};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return $elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					$elm$parser$Parser$Advanced$Bad,
					false,
					A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					$elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var $elm$core$String$length = _String_length;
var $elm$parser$Parser$Advanced$chompUntilEndOr = function (str) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = A5(_Parser_findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _v0.a;
			var newRow = _v0.b;
			var newCol = _v0.c;
			var adjustedOffset = (newOffset < 0) ? $elm$core$String$length(s.src) : newOffset;
			return A3(
				$elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, adjustedOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: adjustedOffset, row: newRow, src: s.src});
		});
};
var $elm$parser$Parser$Advanced$lineComment = function (start) {
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$token(start),
		$elm$parser$Parser$Advanced$chompUntilEndOr('\n'));
};
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (_v1.$ === 'Good') {
					var step = _v1;
					return step;
				} else {
					var step = _v1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2($elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var $elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3($elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var $author$project$Play$Parser$noiseParserLoop = function (_v0) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					$elm$parser$Parser$Advanced$Loop(_Utils_Tuple0)),
				$elm$parser$Parser$Advanced$lineComment(
					A2($elm$parser$Parser$Advanced$Token, '#', $author$project$Play$Parser$Problem$NoProblem))),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$elm$parser$Parser$Advanced$Loop(_Utils_Tuple0)),
					A2(
						$elm$parser$Parser$Advanced$chompIf,
						function (c) {
							return A2($elm$core$Set$member, c, $author$project$Play$Parser$whitespaceChars);
						},
						$author$project$Play$Parser$Problem$NoProblem)),
				$elm$parser$Parser$Advanced$chompWhile(
					function (c) {
						return A2($elm$core$Set$member, c, $author$project$Play$Parser$whitespaceChars);
					})),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(_Utils_Tuple0))
			]));
};
var $author$project$Play$Parser$noiseParser = A2($elm$parser$Parser$Advanced$loop, _Utils_Tuple0, $author$project$Play$Parser$noiseParserLoop);
var $elm$parser$Parser$Advanced$problem = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $elm$core$String$toInt = _String_toInt;
var $author$project$Play$Parser$intParser = function () {
	var helper = function (text) {
		var _v0 = $elm$core$String$toInt(text);
		if (_v0.$ === 'Just') {
			var num = _v0.a;
			return $elm$parser$Parser$Advanced$succeed(num);
		} else {
			return $elm$parser$Parser$Advanced$problem($author$project$Play$Parser$Problem$NotInt);
		}
	};
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		helper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$variable(
				{expecting: $author$project$Play$Parser$Problem$NotInt, inner: $elm$core$Char$isDigit, reserved: $elm$core$Set$empty, start: $elm$core$Char$isDigit}),
			$author$project$Play$Parser$noiseParser));
}();
var $author$project$Play$Data$SourceLocation$SourceLocation = F3(
	function (row, col, offset) {
		return {col: col, offset: offset, row: row};
	});
var $elm$parser$Parser$Advanced$getCol = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.col, s);
	});
var $elm$parser$Parser$Advanced$getOffset = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.offset, s);
	});
var $elm$parser$Parser$Advanced$getRow = $elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, s.row, s);
	});
var $author$project$Play$Parser$sourceLocationParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($author$project$Play$Data$SourceLocation$SourceLocation),
			$elm$parser$Parser$Advanced$getRow),
		$elm$parser$Parser$Advanced$getCol),
	$elm$parser$Parser$Advanced$getOffset);
var $author$project$Play$Parser$Problem$FoundMetadata = {$: 'FoundMetadata'};
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0.a;
	return $elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 'Bad') {
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _v1.b;
				var s1 = _v1.c;
				return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var $author$project$Play$Parser$symbolParser = $elm$parser$Parser$Advanced$backtrackable(
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$variable(
				{
					expecting: $author$project$Play$Parser$Problem$NotSymbol,
					inner: $author$project$Play$Parser$validSymbolChar,
					reserved: $elm$core$Set$empty,
					start: function (c) {
						return !($elm$core$Char$isDigit(c) || ($elm$core$Char$isUpper(c) || A2($elm$core$Set$member, c, $author$project$Play$Parser$invalidSymbolChars)));
					}
				}),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v0) {
							return $elm$parser$Parser$Advanced$problem($author$project$Play$Parser$Problem$FoundMetadata);
						},
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
							$elm$parser$Parser$Advanced$symbol(
								A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Play$Parser$Problem$NotMetadata)))),
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity)
					]))),
		$author$project$Play$Parser$noiseParser));
var $author$project$Play$Parser$nodeParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (startLoc, value, endLoc) {
								return A2(
									$author$project$Play$Parser$Integer,
									A2($author$project$Play$Data$SourceLocation$SourceLocationRange, startLoc, endLoc),
									value);
							})),
					$author$project$Play$Parser$sourceLocationParser),
				$author$project$Play$Parser$intParser),
			$author$project$Play$Parser$sourceLocationParser),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (startLoc, value, endLoc) {
								return A2(
									$author$project$Play$Parser$Word,
									A2($author$project$Play$Data$SourceLocation$SourceLocationRange, startLoc, endLoc),
									value);
							})),
					$author$project$Play$Parser$sourceLocationParser),
				$author$project$Play$Parser$symbolParser),
			$author$project$Play$Parser$sourceLocationParser)
		]));
var $author$project$Play$Parser$implementationParserHelp = function (nodes) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					function (node) {
						return $elm$parser$Parser$Advanced$Loop(
							A2($elm$core$List$cons, node, nodes));
					}),
				$author$project$Play$Parser$nodeParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F3(
								function (startLoc, quotImpl, endLoc) {
									return $elm$parser$Parser$Advanced$Loop(
										A2(
											$elm$core$List$cons,
											A2(
												$author$project$Play$Parser$Quotation,
												A2($author$project$Play$Data$SourceLocation$SourceLocationRange, startLoc, endLoc),
												quotImpl),
											nodes));
								})),
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$author$project$Play$Parser$sourceLocationParser,
								$elm$parser$Parser$Advanced$symbol(
									A2($elm$parser$Parser$Advanced$Token, '[', $author$project$Play$Parser$Problem$ExpectedLeftBracket))),
							$author$project$Play$Parser$noiseParser)),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$author$project$Play$Parser$cyclic$implementationParser(),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, ']', $author$project$Play$Parser$Problem$ExpectedRightBracket)))),
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Play$Parser$sourceLocationParser, $author$project$Play$Parser$noiseParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(nodes)))
			]));
};
function $author$project$Play$Parser$cyclic$implementationParser() {
	return A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Play$Parser$implementationParserHelp);
}
try {
	var $author$project$Play$Parser$implementationParser = $author$project$Play$Parser$cyclic$implementationParser();
	$author$project$Play$Parser$cyclic$implementationParser = function () {
		return $author$project$Play$Parser$implementationParser;
	};
} catch ($) {
	throw 'Some top-level definitions from `Play.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    implementationParser\n  │     ↓\n  │    implementationParserHelp\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$Play$Parser$Problem$ExpectedLeftParen = {$: 'ExpectedLeftParen'};
var $author$project$Play$Parser$Problem$ExpectedRightParen = {$: 'ExpectedRightParen'};
var $author$project$Play$Parser$LiteralInt = function (a) {
	return {$: 'LiteralInt', a: a};
};
var $author$project$Play$Parser$LiteralType = function (a) {
	return {$: 'LiteralType', a: a};
};
var $author$project$Play$Parser$RecursiveMatch = function (a) {
	return {$: 'RecursiveMatch', a: a};
};
var $author$project$Play$Parser$TypeMatch = F3(
	function (a, b, c) {
		return {$: 'TypeMatch', a: a, b: b, c: c};
	});
var $author$project$Play$Parser$Problem$NotGeneric = {$: 'NotGeneric'};
var $author$project$Play$Parser$genericParser = $elm$parser$Parser$Advanced$backtrackable(
	A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$andThen,
					function (_v0) {
						return $elm$parser$Parser$Advanced$problem($author$project$Play$Parser$Problem$NotGeneric);
					},
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, '-', $author$project$Play$Parser$Problem$NoProblem)))),
					$author$project$Play$Parser$symbolParser
				])),
		$author$project$Play$Parser$noiseParser));
var $author$project$Play$Parser$Problem$NotType = {$: 'NotType'};
var $author$project$Play$Parser$typeNameParser = A2(
	$elm$parser$Parser$Advanced$ignorer,
	$elm$parser$Parser$Advanced$variable(
		{expecting: $author$project$Play$Parser$Problem$NotType, inner: $author$project$Play$Parser$validSymbolChar, reserved: $elm$core$Set$empty, start: $elm$core$Char$isUpper}),
	$author$project$Play$Parser$noiseParser);
var $author$project$Play$Parser$typeParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($author$project$Play$Data$Type$Int),
				$elm$parser$Parser$Advanced$keyword(
					A2($elm$parser$Parser$Advanced$Token, 'Int', $author$project$Play$Parser$Problem$NoProblem))),
			$author$project$Play$Parser$noiseParser),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($author$project$Play$Data$Type$Custom),
			$author$project$Play$Parser$typeNameParser)
		]));
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _v0 = thunk(_Utils_Tuple0);
			var parse = _v0.a;
			return parse(s);
		});
};
var $author$project$Play$Parser$typeOrGenericParser = function (types) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					function (name) {
						return $elm$parser$Parser$Advanced$Loop(
							A2(
								$elm$core$List$cons,
								$author$project$Play$Data$Type$Custom(name),
								types));
					}),
				$author$project$Play$Parser$typeNameParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					function (name) {
						return $elm$parser$Parser$Advanced$Loop(
							A2(
								$elm$core$List$cons,
								$author$project$Play$Data$Type$Generic(name),
								types));
					}),
				$author$project$Play$Parser$genericParser),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(types)))
			]));
};
function $author$project$Play$Parser$cyclic$typeRefParser() {
	var helper = F2(
		function (name, binds) {
			if (!binds.b) {
				return $author$project$Play$Data$Type$Custom(name);
			} else {
				return A2($author$project$Play$Data$Type$CustomGeneric, name, binds);
			}
		});
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($author$project$Play$Data$Type$Int),
					$elm$parser$Parser$Advanced$keyword(
						A2($elm$parser$Parser$Advanced$Token, 'Int', $author$project$Play$Parser$Problem$NoProblem))),
				$author$project$Play$Parser$noiseParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(helper),
					$author$project$Play$Parser$typeNameParser),
				A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Play$Parser$typeOrGenericParser)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($author$project$Play$Data$Type$Generic),
				$author$project$Play$Parser$genericParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, '(', $author$project$Play$Parser$Problem$ExpectedLeftParen))),
					$author$project$Play$Parser$noiseParser),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$lazy(
							function (_v0) {
								return $author$project$Play$Parser$cyclic$typeRefParser();
							}),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, ')', $author$project$Play$Parser$Problem$ExpectedRightParen))),
					$author$project$Play$Parser$noiseParser))
			]));
}
try {
	var $author$project$Play$Parser$typeRefParser = $author$project$Play$Parser$cyclic$typeRefParser();
	$author$project$Play$Parser$cyclic$typeRefParser = function () {
		return $author$project$Play$Parser$typeRefParser;
	};
} catch ($) {
	throw 'Some top-level definitions from `Play.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    typeRefParser\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$Play$Parser$typeMatchConditionParser = function (nodes) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F2(
							function (name, value) {
								return $elm$parser$Parser$Advanced$Loop(
									A2(
										$elm$core$List$cons,
										_Utils_Tuple2(name, value),
										nodes));
							})),
					$author$project$Play$Parser$symbolParser),
				$author$project$Play$Parser$cyclic$typeMatchValueParser()),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(nodes)))
			]));
};
function $author$project$Play$Parser$cyclic$typeMatchValueParser() {
	var handleNewType = function (match) {
		var type_ = match.b;
		var conditions = match.c;
		if (!conditions.b) {
			return $author$project$Play$Parser$LiteralType(type_);
		} else {
			return $author$project$Play$Parser$RecursiveMatch(match);
		}
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($author$project$Play$Parser$LiteralInt),
				$author$project$Play$Parser$intParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(handleNewType),
				$author$project$Play$Parser$cyclic$typeMatchParser())
			]));
}
function $author$project$Play$Parser$cyclic$typeMatchParser() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed(
								F4(
									function (startLoc, type_, conds, endLoc) {
										return A3(
											$author$project$Play$Parser$TypeMatch,
											A2($author$project$Play$Data$SourceLocation$SourceLocationRange, startLoc, endLoc),
											type_,
											conds);
									})),
							$author$project$Play$Parser$sourceLocationParser),
						$author$project$Play$Parser$typeParser),
					$elm$parser$Parser$Advanced$oneOf(
						_List_fromArray(
							[
								A2(
								$elm$parser$Parser$Advanced$keeper,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									A2(
										$elm$parser$Parser$Advanced$ignorer,
										$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
										$elm$parser$Parser$Advanced$symbol(
											A2($elm$parser$Parser$Advanced$Token, '(', $author$project$Play$Parser$Problem$ExpectedLeftParen))),
									$author$project$Play$Parser$noiseParser),
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Play$Parser$typeMatchConditionParser),
									$elm$parser$Parser$Advanced$symbol(
										A2($elm$parser$Parser$Advanced$Token, ')', $author$project$Play$Parser$Problem$ExpectedRightParen)))),
								$elm$parser$Parser$Advanced$succeed(_List_Nil)
							]))),
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Play$Parser$sourceLocationParser, $author$project$Play$Parser$noiseParser)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F3(
								function (startLoc, sym, endLoc) {
									return A3(
										$author$project$Play$Parser$TypeMatch,
										A2($author$project$Play$Data$SourceLocation$SourceLocationRange, startLoc, endLoc),
										$author$project$Play$Data$Type$Generic(sym),
										_List_Nil);
								})),
						$author$project$Play$Parser$sourceLocationParser),
					$author$project$Play$Parser$genericParser),
				$author$project$Play$Parser$sourceLocationParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(
							F3(
								function (startLoc, typ, endLoc) {
									return A3(
										$author$project$Play$Parser$TypeMatch,
										A2($author$project$Play$Data$SourceLocation$SourceLocationRange, startLoc, endLoc),
										typ,
										_List_Nil);
								})),
						$author$project$Play$Parser$sourceLocationParser),
					$author$project$Play$Parser$typeRefParser),
				$author$project$Play$Parser$sourceLocationParser)
			]));
}
try {
	var $author$project$Play$Parser$typeMatchValueParser = $author$project$Play$Parser$cyclic$typeMatchValueParser();
	$author$project$Play$Parser$cyclic$typeMatchValueParser = function () {
		return $author$project$Play$Parser$typeMatchValueParser;
	};
	var $author$project$Play$Parser$typeMatchParser = $author$project$Play$Parser$cyclic$typeMatchParser();
	$author$project$Play$Parser$cyclic$typeMatchParser = function () {
		return $author$project$Play$Parser$typeMatchParser;
	};
} catch ($) {
	throw 'Some top-level definitions from `Play.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    typeMatchValueParser\n  │     ↓\n  │    typeMatchParser\n  │     ↓\n  │    typeMatchConditionParser\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$Play$Parser$Problem$ExpectedTypeSeperator = {$: 'ExpectedTypeSeperator'};
var $author$project$Play$Parser$genericOrRangeParser = function () {
	var helper = function (value) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							$author$project$Play$Data$Type$StackRange(value)),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, '...', $author$project$Play$Parser$Problem$NoProblem))),
					$author$project$Play$Parser$noiseParser),
					$elm$parser$Parser$Advanced$succeed(
					$author$project$Play$Data$Type$Generic(value))
				]));
	};
	return A2($elm$parser$Parser$Advanced$andThen, helper, $author$project$Play$Parser$genericParser);
}();
var $author$project$Play$Parser$typeLoopParser = function (reverseTypes) {
	var step = function (type_) {
		return $elm$parser$Parser$Advanced$Loop(
			A2($elm$core$List$cons, type_, reverseTypes));
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(step),
				$author$project$Play$Parser$typeParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(step),
				$author$project$Play$Parser$genericOrRangeParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(step),
				$author$project$Play$Parser$typeRefParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (wordType) {
								return step(
									$author$project$Play$Data$Type$Quotation(wordType));
							}),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, '[', $author$project$Play$Parser$Problem$ExpectedLeftBracket))),
					$author$project$Play$Parser$noiseParser),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$author$project$Play$Parser$cyclic$typeSignatureParser(),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, ']', $author$project$Play$Parser$Problem$ExpectedRightBracket))),
					$author$project$Play$Parser$noiseParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(reverseTypes)))
			]));
};
function $author$project$Play$Parser$cyclic$typeSignatureParser() {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed(
				F2(
					function (input, output) {
						return {input: input, output: output};
					})),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Play$Parser$typeLoopParser),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '--', $author$project$Play$Parser$Problem$ExpectedTypeSeperator))),
				$author$project$Play$Parser$noiseParser)),
		A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Play$Parser$typeLoopParser));
}
try {
	var $author$project$Play$Parser$typeSignatureParser = $author$project$Play$Parser$cyclic$typeSignatureParser();
	$author$project$Play$Parser$cyclic$typeSignatureParser = function () {
		return $author$project$Play$Parser$typeSignatureParser;
	};
} catch ($) {
	throw 'Some top-level definitions from `Play.Parser` are causing infinite recursion:\n\n  ┌─────┐\n  │    typeSignatureParser\n  │     ↓\n  │    typeLoopParser\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.1/bad-recursion to learn how to fix it!';}
var $author$project$Play$Parser$multiWordMetadataParser = function (def) {
	var setDefaultImpl = function (impl) {
		var _v1 = def.implementation;
		if (_v1.$ === 'MultiImpl') {
			var whens = _v1.a;
			return A2($author$project$Play$Parser$MultiImpl, whens, impl);
		} else {
			return A2($author$project$Play$Parser$MultiImpl, _List_Nil, impl);
		}
	};
	var metadata = def.metadata;
	var addWhenImpl = function (impl) {
		var _v0 = def.implementation;
		if (_v0.$ === 'MultiImpl') {
			var whens = _v0.a;
			var _default = _v0.b;
			return A2(
				$author$project$Play$Parser$MultiImpl,
				A2($elm$core$List$cons, impl, whens),
				_default);
		} else {
			var _default = _v0.a;
			return A2(
				$author$project$Play$Parser$MultiImpl,
				_List_fromArray(
					[impl]),
				_default);
		}
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (typeSign) {
								return $elm$parser$Parser$Advanced$Loop(
									_Utils_update(
										def,
										{
											metadata: _Utils_update(
												metadata,
												{
													type_: $author$project$Play$Data$TypeSignature$UserProvided(typeSign)
												})
										}));
							}),
						$elm$parser$Parser$Advanced$keyword(
							A2($elm$parser$Parser$Advanced$Token, 'type:', $author$project$Play$Parser$Problem$NoProblem))),
					$author$project$Play$Parser$noiseParser),
				$author$project$Play$Parser$typeSignatureParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed(
								F2(
									function (type_, impl) {
										return $elm$parser$Parser$Advanced$Loop(
											_Utils_update(
												def,
												{
													implementation: addWhenImpl(
														_Utils_Tuple2(type_, impl))
												}));
									})),
							$elm$parser$Parser$Advanced$keyword(
								A2($elm$parser$Parser$Advanced$Token, 'when:', $author$project$Play$Parser$Problem$NoProblem))),
						$author$project$Play$Parser$noiseParser),
					$author$project$Play$Parser$typeMatchParser),
				$author$project$Play$Parser$implementationParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (impl) {
								return $elm$parser$Parser$Advanced$Loop(
									_Utils_update(
										def,
										{
											implementation: setDefaultImpl(impl)
										}));
							}),
						$elm$parser$Parser$Advanced$keyword(
							A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Play$Parser$Problem$NoProblem))),
					$author$project$Play$Parser$noiseParser),
				$author$project$Play$Parser$implementationParser),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				$elm$parser$Parser$Advanced$problem,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($author$project$Play$Parser$Problem$UnknownMetadata),
					$author$project$Play$Parser$definitionMetadataParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(def))
			]));
};
var $author$project$Play$Data$Metadata$withSourceLocationRange = F2(
	function (range, meta) {
		return _Utils_update(
			meta,
			{
				sourceLocationRange: $elm$core$Maybe$Just(range)
			});
	});
var $author$project$Play$Parser$multiWordDefinitionParser = function (startLocation) {
	var reverseWhens = function (def) {
		var _v0 = def.implementation;
		if (_v0.$ === 'SoloImpl') {
			return def;
		} else {
			var whens = _v0.a;
			var impl = _v0.b;
			return _Utils_update(
				def,
				{
					implementation: A2(
						$author$project$Play$Parser$MultiImpl,
						$elm$core$List$reverse(whens),
						impl)
				});
		}
	};
	var joinParseResults = F3(
		function (name, def, endLocation) {
			return reverseWhens(
				_Utils_update(
					def,
					{
						metadata: A2(
							$author$project$Play$Data$Metadata$withSourceLocationRange,
							{end: endLocation, start: startLocation},
							def.metadata),
						name: name
					}));
		});
	var emptyDef = {
		implementation: $author$project$Play$Parser$SoloImpl(_List_Nil),
		metadata: $author$project$Play$Data$Metadata$default,
		name: ''
	};
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(joinParseResults),
				$author$project$Play$Parser$symbolParser),
			A2($elm$parser$Parser$Advanced$loop, emptyDef, $author$project$Play$Parser$multiWordMetadataParser)),
		$author$project$Play$Parser$sourceLocationParser);
};
var $author$project$Play$Parser$typeDefinitionLocation = function (typeDef) {
	if (typeDef.$ === 'CustomTypeDef') {
		var range = typeDef.a;
		return range;
	} else {
		var range = typeDef.a;
		return range;
	}
};
var $author$project$Play$Parser$typeDefinitionName = function (typeDef) {
	if (typeDef.$ === 'CustomTypeDef') {
		var name = typeDef.b;
		return name;
	} else {
		var name = typeDef.b;
		return name;
	}
};
var $author$project$Play$Parser$CustomTypeDef = F4(
	function (a, b, c, d) {
		return {$: 'CustomTypeDef', a: a, b: b, c: c, d: d};
	});
var $author$project$Play$Parser$typeGenericParser = function (generics) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					function (name) {
						return $elm$parser$Parser$Advanced$Loop(
							A2($elm$core$List$cons, name, generics));
					}),
				$author$project$Play$Parser$genericParser),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(generics)))
			]));
};
var $author$project$Play$Parser$typeMemberParser = function (types) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed(
								F2(
									function (name, type_) {
										return $elm$parser$Parser$Advanced$Loop(
											A2(
												$elm$core$List$cons,
												_Utils_Tuple2(name, type_),
												types));
									})),
							$elm$parser$Parser$Advanced$symbol(
								A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Play$Parser$Problem$NoProblem))),
						$author$project$Play$Parser$noiseParser),
					$author$project$Play$Parser$symbolParser),
				$author$project$Play$Parser$typeRefParser),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				$elm$parser$Parser$Advanced$problem,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($author$project$Play$Parser$Problem$UnknownMetadata),
					$author$project$Play$Parser$definitionMetadataParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(types)))
			]));
};
var $author$project$Play$Parser$typeDefinitionParser = function (startLocation) {
	var ctor = F4(
		function (typeName, generics, members, endLocation) {
			return A4(
				$author$project$Play$Parser$CustomTypeDef,
				A2($author$project$Play$Data$SourceLocation$SourceLocationRange, startLocation, endLocation),
				typeName,
				generics,
				members);
		});
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(ctor),
					$author$project$Play$Parser$typeNameParser),
				A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Play$Parser$typeGenericParser)),
			A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Play$Parser$typeMemberParser)),
		$author$project$Play$Parser$sourceLocationParser);
};
var $author$project$Play$Parser$UnionTypeDef = F4(
	function (a, b, c, d) {
		return {$: 'UnionTypeDef', a: a, b: b, c: c, d: d};
	});
var $author$project$Play$Parser$unionTypeMemberParser = function (types) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (type_) {
								return $elm$parser$Parser$Advanced$Loop(
									A2($elm$core$List$cons, type_, types));
							}),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Play$Parser$Problem$NoProblem))),
					$author$project$Play$Parser$noiseParser),
				$author$project$Play$Parser$typeRefParser),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				$elm$parser$Parser$Advanced$problem,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($author$project$Play$Parser$Problem$UnknownMetadata),
					$author$project$Play$Parser$definitionMetadataParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(types)))
			]));
};
var $author$project$Play$Parser$unionTypeDefinitionParser = function (startLocation) {
	var ctor = F4(
		function (typeName, generics, members, endLocation) {
			return A4(
				$author$project$Play$Parser$UnionTypeDef,
				A2($author$project$Play$Data$SourceLocation$SourceLocationRange, startLocation, endLocation),
				typeName,
				generics,
				members);
		});
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(ctor),
					$author$project$Play$Parser$typeNameParser),
				A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Play$Parser$typeGenericParser)),
			A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Play$Parser$unionTypeMemberParser)),
		$author$project$Play$Parser$sourceLocationParser);
};
var $author$project$Play$Parser$wordMetadataParser = function (def) {
	var metadata = def.metadata;
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (typeSign) {
								return $elm$parser$Parser$Advanced$Loop(
									_Utils_update(
										def,
										{
											metadata: _Utils_update(
												metadata,
												{
													type_: $author$project$Play$Data$TypeSignature$UserProvided(typeSign)
												})
										}));
							}),
						$elm$parser$Parser$Advanced$keyword(
							A2($elm$parser$Parser$Advanced$Token, 'type:', $author$project$Play$Parser$Problem$NoProblem))),
					$author$project$Play$Parser$noiseParser),
				$author$project$Play$Parser$typeSignatureParser),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed(
								$elm$parser$Parser$Advanced$Loop(
									_Utils_update(
										def,
										{
											metadata: _Utils_update(
												metadata,
												{isEntryPoint: true})
										}))),
							$elm$parser$Parser$Advanced$keyword(
								A2($elm$parser$Parser$Advanced$Token, 'entry:', $author$project$Play$Parser$Problem$NoProblem))),
						$author$project$Play$Parser$noiseParser),
					$elm$parser$Parser$Advanced$keyword(
						A2($elm$parser$Parser$Advanced$Token, 'true', $author$project$Play$Parser$Problem$NoProblem))),
				$author$project$Play$Parser$noiseParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (impl) {
								return $elm$parser$Parser$Advanced$Loop(
									_Utils_update(
										def,
										{
											implementation: $author$project$Play$Parser$SoloImpl(impl)
										}));
							}),
						$elm$parser$Parser$Advanced$keyword(
							A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Play$Parser$Problem$NoProblem))),
					$author$project$Play$Parser$noiseParser),
				$author$project$Play$Parser$implementationParser),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				$elm$parser$Parser$Advanced$problem,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($author$project$Play$Parser$Problem$UnknownMetadata),
					$author$project$Play$Parser$definitionMetadataParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(def))
			]));
};
var $author$project$Play$Parser$wordDefinitionParser = function (startLocation) {
	var joinParseResults = F3(
		function (name, def, endLocation) {
			return _Utils_update(
				def,
				{
					metadata: A2(
						$author$project$Play$Data$Metadata$withSourceLocationRange,
						{end: endLocation, start: startLocation},
						def.metadata),
					name: name
				});
		});
	var emptyDef = {
		implementation: $author$project$Play$Parser$SoloImpl(_List_Nil),
		metadata: $author$project$Play$Data$Metadata$default,
		name: ''
	};
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(joinParseResults),
				$author$project$Play$Parser$symbolParser),
			A2($elm$parser$Parser$Advanced$loop, emptyDef, $author$project$Play$Parser$wordMetadataParser)),
		$author$project$Play$Parser$sourceLocationParser);
};
var $author$project$Play$Parser$definitionParser = function (ast) {
	var maybeInsertWordProblem = function (wordDef) {
		return A2(
			$elm$core$Maybe$map,
			function (prevDef) {
				return A3($author$project$Play$Parser$Problem$WordAlreadyDefined, wordDef.name, prevDef.metadata.sourceLocationRange, wordDef.metadata.sourceLocationRange);
			},
			A2($elm$core$Dict$get, wordDef.name, ast.words));
	};
	var insertWord = function (wordDef) {
		var _v2 = maybeInsertWordProblem(wordDef);
		if (_v2.$ === 'Just') {
			var problem = _v2.a;
			return $elm$parser$Parser$Advanced$problem(problem);
		} else {
			return $elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Loop(
					_Utils_update(
						ast,
						{
							words: A3($elm$core$Dict$insert, wordDef.name, wordDef, ast.words)
						})));
		}
	};
	var insertType = function (typeDef) {
		var typeName = $author$project$Play$Parser$typeDefinitionName(typeDef);
		var _v0 = A2($elm$core$Dict$get, typeName, ast.types);
		if (_v0.$ === 'Just') {
			var previousDefinition = _v0.a;
			return $elm$parser$Parser$Advanced$problem(
				A3(
					$author$project$Play$Parser$Problem$TypeAlreadyDefined,
					typeName,
					$author$project$Play$Parser$typeDefinitionLocation(previousDefinition),
					$author$project$Play$Parser$typeDefinitionLocation(typeDef)));
		} else {
			var typeWords = $author$project$Play$Parser$generateDefaultWordsForType(typeDef);
			var typeWordsProblem = $elm$core$List$head(
				A2($elm$core$List$filterMap, maybeInsertWordProblem, typeWords));
			if (typeWordsProblem.$ === 'Just') {
				var problem = typeWordsProblem.a;
				return $elm$parser$Parser$Advanced$problem(problem);
			} else {
				return $elm$parser$Parser$Advanced$succeed(
					$elm$parser$Parser$Advanced$Loop(
						_Utils_update(
							ast,
							{
								types: A3($elm$core$Dict$insert, typeName, typeDef, ast.types),
								words: A2(
									$elm$core$Dict$union,
									A2(
										$elm_community$dict_extra$Dict$Extra$fromListBy,
										function ($) {
											return $.name;
										},
										typeWords),
									ast.words)
							})));
			}
		}
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$andThen,
				insertWord,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$author$project$Play$Parser$wordDefinitionParser,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$author$project$Play$Parser$sourceLocationParser,
							$elm$parser$Parser$Advanced$keyword(
								A2($elm$parser$Parser$Advanced$Token, 'def:', $author$project$Play$Parser$Problem$NoProblem))),
						$author$project$Play$Parser$noiseParser))),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				insertWord,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$author$project$Play$Parser$multiWordDefinitionParser,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$author$project$Play$Parser$sourceLocationParser,
							$elm$parser$Parser$Advanced$keyword(
								A2($elm$parser$Parser$Advanced$Token, 'defmulti:', $author$project$Play$Parser$Problem$NoProblem))),
						$author$project$Play$Parser$noiseParser))),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				insertType,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$author$project$Play$Parser$typeDefinitionParser,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$author$project$Play$Parser$sourceLocationParser,
							$elm$parser$Parser$Advanced$keyword(
								A2($elm$parser$Parser$Advanced$Token, 'deftype:', $author$project$Play$Parser$Problem$NoProblem))),
						$author$project$Play$Parser$noiseParser))),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				insertType,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$author$project$Play$Parser$unionTypeDefinitionParser,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$author$project$Play$Parser$sourceLocationParser,
							$elm$parser$Parser$Advanced$keyword(
								A2($elm$parser$Parser$Advanced$Token, 'defunion:', $author$project$Play$Parser$Problem$NoProblem))),
						$author$project$Play$Parser$noiseParser))),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(ast))
			]));
};
var $elm$parser$Parser$Advanced$end = function (x) {
	return $elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				$elm$core$String$length(s.src),
				s.offset) ? A3($elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var $author$project$Play$Parser$parser = function () {
	var emptyAst = {types: $elm$core$Dict$empty, words: $elm$core$Dict$empty};
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
			$author$project$Play$Parser$noiseParser),
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			A2($elm$parser$Parser$Advanced$loop, emptyAst, $author$project$Play$Parser$definitionParser),
			$elm$parser$Parser$Advanced$end($author$project$Play$Parser$Problem$ExpectedEnd)));
}();
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2($elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var $elm$parser$Parser$Advanced$run = F2(
	function (_v0, src) {
		var parse = _v0.a;
		var _v1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_v1.$ === 'Good') {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $author$project$Play$Parser$run = function (sourceCode) {
	return A2(
		$elm$core$Result$mapError,
		$elm$core$List$map(
			function ($) {
				return $.problem;
			}),
		A2($elm$parser$Parser$Advanced$run, $author$project$Play$Parser$parser, sourceCode));
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $author$project$Play$Qualifier$MultiImpl = F2(
	function (a, b) {
		return {$: 'MultiImpl', a: a, b: b};
	});
var $author$project$Play$Qualifier$SoloImpl = function (a) {
	return {$: 'SoloImpl', a: a};
};
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 'Err') {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 'Err') {
				var x = rb.a;
				return $elm$core$Result$Err(x);
			} else {
				var b = rb.a;
				return $elm$core$Result$Ok(
					A2(func, a, b));
			}
		}
	});
var $elm_community$result_extra$Result$Extra$combine = A2(
	$elm$core$List$foldr,
	$elm$core$Result$map2($elm$core$List$cons),
	$elm$core$Result$Ok(_List_Nil));
var $author$project$Play$Qualifier$Builtin = F2(
	function (a, b) {
		return {$: 'Builtin', a: a, b: b};
	});
var $author$project$Play$Qualifier$ConstructType = function (a) {
	return {$: 'ConstructType', a: a};
};
var $author$project$Play$Qualifier$GetMember = F2(
	function (a, b) {
		return {$: 'GetMember', a: a, b: b};
	});
var $author$project$Play$Qualifier$Integer = F2(
	function (a, b) {
		return {$: 'Integer', a: a, b: b};
	});
var $author$project$Play$Qualifier$SetMember = F2(
	function (a, b) {
		return {$: 'SetMember', a: a, b: b};
	});
var $author$project$Play$Qualifier$Problem$UnknownWordRef = F2(
	function (a, b) {
		return {$: 'UnknownWordRef', a: a, b: b};
	});
var $author$project$Play$Qualifier$Word = F2(
	function (a, b) {
		return {$: 'Word', a: a, b: b};
	});
var $author$project$Play$Qualifier$WordRef = F2(
	function (a, b) {
		return {$: 'WordRef', a: a, b: b};
	});
var $author$project$Play$Data$Builtin$Apply = {$: 'Apply'};
var $author$project$Play$Data$Builtin$Divide = {$: 'Divide'};
var $author$project$Play$Data$Builtin$Equal = {$: 'Equal'};
var $author$project$Play$Data$Builtin$Minus = {$: 'Minus'};
var $author$project$Play$Data$Builtin$Multiply = {$: 'Multiply'};
var $author$project$Play$Data$Builtin$Plus = {$: 'Plus'};
var $author$project$Play$Data$Builtin$StackDrop = {$: 'StackDrop'};
var $author$project$Play$Data$Builtin$StackDuplicate = {$: 'StackDuplicate'};
var $author$project$Play$Data$Builtin$StackLeftRotate = {$: 'StackLeftRotate'};
var $author$project$Play$Data$Builtin$StackRightRotate = {$: 'StackRightRotate'};
var $author$project$Play$Data$Builtin$StackSwap = {$: 'StackSwap'};
var $author$project$Play$Qualifier$builtinDict = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('+', $author$project$Play$Data$Builtin$Plus),
			_Utils_Tuple2('-', $author$project$Play$Data$Builtin$Minus),
			_Utils_Tuple2('*', $author$project$Play$Data$Builtin$Multiply),
			_Utils_Tuple2('/', $author$project$Play$Data$Builtin$Divide),
			_Utils_Tuple2('=', $author$project$Play$Data$Builtin$Equal),
			_Utils_Tuple2('swap', $author$project$Play$Data$Builtin$StackSwap),
			_Utils_Tuple2('dup', $author$project$Play$Data$Builtin$StackDuplicate),
			_Utils_Tuple2('drop', $author$project$Play$Data$Builtin$StackDrop),
			_Utils_Tuple2('rotate', $author$project$Play$Data$Builtin$StackRightRotate),
			_Utils_Tuple2('-rotate', $author$project$Play$Data$Builtin$StackLeftRotate),
			_Utils_Tuple2('!', $author$project$Play$Data$Builtin$Apply)
		]));
var $author$project$Play$Data$Metadata$isQuoted = function (meta) {
	return _Utils_update(
		meta,
		{isQuoted: true});
};
var $author$project$Play$Qualifier$initQualifyNode = F4(
	function (currentDefName, ast, qualifiedWords, impl) {
		return function (_v8) {
			var newQualifiedWords = _v8.b;
			var errors = _v8.c;
			return _Utils_Tuple2(
				newQualifiedWords,
				$elm_community$result_extra$Result$Extra$combine(errors));
		}(
			A3(
				$elm$core$List$foldr,
				A2($author$project$Play$Qualifier$qualifyNode, ast, currentDefName),
				_Utils_Tuple3(1, qualifiedWords, _List_Nil),
				impl));
	});
var $author$project$Play$Qualifier$qualifyNode = F4(
	function (ast, currentDefName, node, _v0) {
		var availableQuoteId = _v0.a;
		var qualifiedWords = _v0.b;
		var qualifiedNodes = _v0.c;
		switch (node.$) {
			case 'Integer':
				var loc = node.a;
				var value = node.b;
				return _Utils_Tuple3(
					availableQuoteId,
					qualifiedWords,
					A2(
						$elm$core$List$cons,
						$elm$core$Result$Ok(
							A2($author$project$Play$Qualifier$Integer, loc, value)),
						qualifiedNodes));
			case 'Word':
				var loc = node.a;
				var value = node.b;
				if (A2($elm$core$Dict$member, value, ast.words)) {
					return _Utils_Tuple3(
						availableQuoteId,
						qualifiedWords,
						A2(
							$elm$core$List$cons,
							$elm$core$Result$Ok(
								A2($author$project$Play$Qualifier$Word, loc, value)),
							qualifiedNodes));
				} else {
					var _v2 = A2($elm$core$Dict$get, value, $author$project$Play$Qualifier$builtinDict);
					if (_v2.$ === 'Just') {
						var builtin = _v2.a;
						return _Utils_Tuple3(
							availableQuoteId,
							qualifiedWords,
							A2(
								$elm$core$List$cons,
								$elm$core$Result$Ok(
									A2($author$project$Play$Qualifier$Builtin, loc, builtin)),
								qualifiedNodes));
					} else {
						return _Utils_Tuple3(
							availableQuoteId,
							qualifiedWords,
							A2(
								$elm$core$List$cons,
								$elm$core$Result$Err(
									A2($author$project$Play$Qualifier$Problem$UnknownWordRef, loc, value)),
								qualifiedNodes));
					}
				}
			case 'ConstructType':
				var typeName = node.a;
				return _Utils_Tuple3(
					availableQuoteId,
					qualifiedWords,
					A2(
						$elm$core$List$cons,
						$elm$core$Result$Ok(
							$author$project$Play$Qualifier$ConstructType(typeName)),
						qualifiedNodes));
			case 'SetMember':
				var typeName = node.a;
				var memberName = node.b;
				return _Utils_Tuple3(
					availableQuoteId,
					qualifiedWords,
					A2(
						$elm$core$List$cons,
						$elm$core$Result$Ok(
							A2($author$project$Play$Qualifier$SetMember, typeName, memberName)),
						qualifiedNodes));
			case 'GetMember':
				var typeName = node.a;
				var memberName = node.b;
				return _Utils_Tuple3(
					availableQuoteId,
					qualifiedWords,
					A2(
						$elm$core$List$cons,
						$elm$core$Result$Ok(
							A2($author$project$Play$Qualifier$GetMember, typeName, memberName)),
						qualifiedNodes));
			default:
				var sourceLocation = node.a;
				var quotImpl = node.b;
				var quoteName = currentDefName + ('__' + ('quote' + $elm$core$String$fromInt(availableQuoteId)));
				var _v3 = A4($author$project$Play$Qualifier$initQualifyNode, quoteName, ast, qualifiedWords, quotImpl);
				var newWordsAfterQuot = _v3.a;
				var qualifiedQuotImplResult = _v3.b;
				if (qualifiedQuotImplResult.$ === 'Ok') {
					if ((qualifiedQuotImplResult.a.b && (qualifiedQuotImplResult.a.a.$ === 'Word')) && (!qualifiedQuotImplResult.a.b.b)) {
						var _v5 = qualifiedQuotImplResult.a;
						var _v6 = _v5.a;
						var wordRef = _v6.b;
						var _v7 = A2($elm$core$Dict$get, wordRef, newWordsAfterQuot);
						if (_v7.$ === 'Nothing') {
							return _Debug_todo(
								'Play.Qualifier',
								{
									start: {line: 466, column: 29},
									end: {line: 466, column: 39}
								})('Cannot happen');
						} else {
							var oldWord = _v7.a;
							return _Utils_Tuple3(
								availableQuoteId,
								A3(
									$elm$core$Dict$insert,
									wordRef,
									_Utils_update(
										oldWord,
										{
											metadata: $author$project$Play$Data$Metadata$isQuoted(oldWord.metadata)
										}),
									newWordsAfterQuot),
								A2(
									$elm$core$List$cons,
									$elm$core$Result$Ok(
										A2($author$project$Play$Qualifier$WordRef, sourceLocation, wordRef)),
									qualifiedNodes));
						}
					} else {
						var qualifiedQuotImpl = qualifiedQuotImplResult.a;
						return _Utils_Tuple3(
							availableQuoteId + 1,
							A3(
								$elm$core$Dict$insert,
								quoteName,
								{
									implementation: $author$project$Play$Qualifier$SoloImpl(qualifiedQuotImpl),
									metadata: $author$project$Play$Data$Metadata$isQuoted($author$project$Play$Data$Metadata$default),
									name: quoteName
								},
								newWordsAfterQuot),
							A2(
								$elm$core$List$cons,
								$elm$core$Result$Ok(
									A2($author$project$Play$Qualifier$WordRef, sourceLocation, quoteName)),
								qualifiedNodes));
					}
				} else {
					var err = qualifiedQuotImplResult.a;
					return _Utils_Tuple3(
						availableQuoteId,
						qualifiedWords,
						A2(
							$elm$core$List$cons,
							$elm$core$Result$Err(err),
							qualifiedNodes));
				}
		}
	});
var $author$project$Play$Data$SourceLocation$emptyRange = A2(
	$author$project$Play$Data$SourceLocation$SourceLocationRange,
	A3($author$project$Play$Data$SourceLocation$SourceLocation, 0, 0, 0),
	A3($author$project$Play$Data$SourceLocation$SourceLocation, 0, 0, 0));
var $author$project$Play$Data$TypeSignature$map = F2(
	function (fn, ts) {
		switch (ts.$) {
			case 'NotProvided':
				return $author$project$Play$Data$TypeSignature$NotProvided;
			case 'UserProvided':
				var wt = ts.a;
				return $author$project$Play$Data$TypeSignature$UserProvided(
					fn(wt));
			default:
				var wt = ts.a;
				return $author$project$Play$Data$TypeSignature$CompilerProvided(
					fn(wt));
		}
	});
var $author$project$Play$Data$Type$Union = function (a) {
	return {$: 'Union', a: a};
};
var $author$project$Play$Qualifier$resolveUnion = F2(
	function (typeDefs, type_) {
		switch (type_.$) {
			case 'Custom':
				var typeName = type_.a;
				var _v1 = A2($elm$core$Dict$get, typeName, typeDefs);
				if ((_v1.$ === 'Just') && (_v1.a.$ === 'UnionTypeDef')) {
					var _v2 = _v1.a;
					var members = _v2.d;
					return $author$project$Play$Data$Type$Union(members);
				} else {
					return type_;
				}
			case 'CustomGeneric':
				var typeName = type_.a;
				var types = type_.b;
				var _v3 = A2($elm$core$Dict$get, typeName, typeDefs);
				if ((_v3.$ === 'Just') && (_v3.a.$ === 'UnionTypeDef')) {
					var _v4 = _v3.a;
					var generics = _v4.c;
					var members = _v4.d;
					var genericsMap = $elm$core$Dict$fromList(
						A3($elm$core$List$map2, $elm$core$Tuple$pair, generics, types));
					var rebindGenerics = function (t) {
						switch (t.$) {
							case 'Generic':
								var val = t.a;
								return A2(
									$elm$core$Maybe$withDefault,
									t,
									A2($elm$core$Dict$get, val, genericsMap));
							case 'CustomGeneric':
								var cgName = t.a;
								var cgMembers = t.b;
								return A2(
									$author$project$Play$Data$Type$CustomGeneric,
									cgName,
									A2($elm$core$List$map, rebindGenerics, cgMembers));
							default:
								return t;
						}
					};
					return $author$project$Play$Data$Type$Union(
						A2($elm$core$List$map, rebindGenerics, members));
				} else {
					return type_;
				}
			default:
				return type_;
		}
	});
var $author$project$Play$Qualifier$resolveUnions = F2(
	function (typeDefs, wt) {
		return {
			input: A2(
				$elm$core$List$map,
				$author$project$Play$Qualifier$resolveUnion(typeDefs),
				wt.input),
			output: A2(
				$elm$core$List$map,
				$author$project$Play$Qualifier$resolveUnion(typeDefs),
				wt.output)
		};
	});
var $author$project$Play$Data$TypeSignature$toMaybe = function (ts) {
	switch (ts.$) {
		case 'NotProvided':
			return $elm$core$Maybe$Nothing;
		case 'UserProvided':
			var wt = ts.a;
			return $elm$core$Maybe$Just(wt);
		default:
			var wt = ts.a;
			return $elm$core$Maybe$Just(wt);
	}
};
var $author$project$Play$Qualifier$Problem$UnknownTypeRef = F2(
	function (a, b) {
		return {$: 'UnknownTypeRef', a: a, b: b};
	});
var $author$project$Play$Qualifier$validateTypeReferences = F3(
	function (typeDefs, wordRange, type_) {
		switch (type_.$) {
			case 'Custom':
				var typeName = type_.a;
				var _v1 = A2($elm$core$Dict$get, typeName, typeDefs);
				if (_v1.$ === 'Just') {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(
						A2($author$project$Play$Qualifier$Problem$UnknownTypeRef, wordRange, typeName));
				}
			case 'CustomGeneric':
				var typeName = type_.a;
				var types = type_.b;
				var _v2 = A2($elm$core$Dict$get, typeName, typeDefs);
				if (_v2.$ === 'Just') {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(
						A2($author$project$Play$Qualifier$Problem$UnknownTypeRef, wordRange, typeName));
				}
			default:
				return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Play$Qualifier$qualifyMetadata = F2(
	function (qualifiedTypes, meta) {
		var wordRange = A2($elm$core$Maybe$withDefault, $author$project$Play$Data$SourceLocation$emptyRange, meta.sourceLocationRange);
		var typeRefErrors = A2(
			$elm$core$List$filterMap,
			A2($author$project$Play$Qualifier$validateTypeReferences, qualifiedTypes, wordRange),
			A2(
				$elm$core$Maybe$withDefault,
				_List_Nil,
				A2(
					$elm$core$Maybe$map,
					function (ts) {
						return _Utils_ap(ts.input, ts.output);
					},
					$author$project$Play$Data$TypeSignature$toMaybe(meta.type_))));
		var _v0 = $elm$core$List$head(typeRefErrors);
		if (_v0.$ === 'Just') {
			var err = _v0.a;
			return $elm$core$Result$Err(err);
		} else {
			return $elm$core$Result$Ok(
				_Utils_update(
					meta,
					{
						type_: A2(
							$author$project$Play$Data$TypeSignature$map,
							$author$project$Play$Qualifier$resolveUnions(qualifiedTypes),
							meta.type_)
					}));
		}
	});
var $author$project$Play$Qualifier$Problem$InvalidTypeMatch = function (a) {
	return {$: 'InvalidTypeMatch', a: a};
};
var $author$project$Play$Qualifier$LiteralInt = function (a) {
	return {$: 'LiteralInt', a: a};
};
var $author$project$Play$Qualifier$LiteralType = function (a) {
	return {$: 'LiteralType', a: a};
};
var $author$project$Play$Qualifier$Problem$NoSuchMemberOnType = F3(
	function (a, b, c) {
		return {$: 'NoSuchMemberOnType', a: a, b: b, c: c};
	});
var $author$project$Play$Qualifier$RecursiveMatch = function (a) {
	return {$: 'RecursiveMatch', a: a};
};
var $author$project$Play$Qualifier$TypeMatch = F3(
	function (a, b, c) {
		return {$: 'TypeMatch', a: a, b: b, c: c};
	});
var $author$project$Play$Qualifier$Problem$UnionTypeMatchWithPatterns = function (a) {
	return {$: 'UnionTypeMatchWithPatterns', a: a};
};
var $author$project$Play$Qualifier$qualifyMatch = F2(
	function (qualifiedTypes, typeMatch) {
		_v3$4:
		while (true) {
			switch (typeMatch.b.$) {
				case 'Int':
					if (!typeMatch.c.b) {
						var range = typeMatch.a;
						var _v4 = typeMatch.b;
						return $elm$core$Result$Ok(
							A3($author$project$Play$Qualifier$TypeMatch, range, $author$project$Play$Data$Type$Int, _List_Nil));
					} else {
						if (((typeMatch.c.a.a === 'value') && (typeMatch.c.a.b.$ === 'LiteralInt')) && (!typeMatch.c.b.b)) {
							var range = typeMatch.a;
							var _v5 = typeMatch.b;
							var _v6 = typeMatch.c;
							var _v7 = _v6.a;
							var val = _v7.b.a;
							return $elm$core$Result$Ok(
								A3(
									$author$project$Play$Qualifier$TypeMatch,
									range,
									$author$project$Play$Data$Type$Int,
									_List_fromArray(
										[
											_Utils_Tuple2(
											'value',
											$author$project$Play$Qualifier$LiteralInt(val))
										])));
						} else {
							break _v3$4;
						}
					}
				case 'Generic':
					if (!typeMatch.c.b) {
						var range = typeMatch.a;
						var type_ = typeMatch.b;
						return $elm$core$Result$Ok(
							A3($author$project$Play$Qualifier$TypeMatch, range, type_, _List_Nil));
					} else {
						break _v3$4;
					}
				case 'Custom':
					var range = typeMatch.a;
					var type_ = typeMatch.b;
					var name = type_.a;
					var patterns = typeMatch.c;
					var _v8 = A2($elm$core$Dict$get, name, qualifiedTypes);
					if (_v8.$ === 'Just') {
						if (_v8.a.$ === 'CustomTypeDef') {
							var _v9 = _v8.a;
							var gens = _v9.c;
							var members = _v9.d;
							var memberNames = $elm$core$Set$fromList(
								A2($elm$core$List$map, $elm$core$Tuple$first, members));
							var qualifiedPatternsResult = $elm_community$result_extra$Result$Extra$combine(
								A2(
									$elm$core$List$map,
									A4($author$project$Play$Qualifier$qualifyMatchValue, qualifiedTypes, range, name, memberNames),
									patterns));
							var actualType = function () {
								if (!gens.b) {
									return type_;
								} else {
									return A2(
										$author$project$Play$Data$Type$CustomGeneric,
										name,
										A2($elm$core$List$map, $author$project$Play$Data$Type$Generic, gens));
								}
							}();
							if (qualifiedPatternsResult.$ === 'Ok') {
								var qualifiedPatterns = qualifiedPatternsResult.a;
								return $elm$core$Result$Ok(
									A3($author$project$Play$Qualifier$TypeMatch, range, actualType, qualifiedPatterns));
							} else {
								var err = qualifiedPatternsResult.a;
								return $elm$core$Result$Err(err);
							}
						} else {
							var _v12 = _v8.a;
							var types = _v12.d;
							return $elm$core$List$isEmpty(patterns) ? $elm$core$Result$Ok(
								A3(
									$author$project$Play$Qualifier$TypeMatch,
									range,
									$author$project$Play$Data$Type$Union(types),
									_List_Nil)) : $elm$core$Result$Err(
								$author$project$Play$Qualifier$Problem$UnionTypeMatchWithPatterns(range));
						}
					} else {
						return $elm$core$Result$Err(
							A2($author$project$Play$Qualifier$Problem$UnknownTypeRef, range, name));
					}
				default:
					break _v3$4;
			}
		}
		var range = typeMatch.a;
		return $elm$core$Result$Err(
			$author$project$Play$Qualifier$Problem$InvalidTypeMatch(range));
	});
var $author$project$Play$Qualifier$qualifyMatchValue = F5(
	function (qualifiedTypes, range, typeName, memberNames, _v0) {
		var fieldName = _v0.a;
		var matchValue = _v0.b;
		if (A2($elm$core$Set$member, fieldName, memberNames)) {
			switch (matchValue.$) {
				case 'LiteralInt':
					var val = matchValue.a;
					return $elm$core$Result$Ok(
						_Utils_Tuple2(
							fieldName,
							$author$project$Play$Qualifier$LiteralInt(val)));
				case 'LiteralType':
					var type_ = matchValue.a;
					return $elm$core$Result$Ok(
						_Utils_Tuple2(
							fieldName,
							$author$project$Play$Qualifier$LiteralType(type_)));
				default:
					var typeMatch = matchValue.a;
					var _v2 = A2($author$project$Play$Qualifier$qualifyMatch, qualifiedTypes, typeMatch);
					if (_v2.$ === 'Err') {
						var err = _v2.a;
						return $elm$core$Result$Err(err);
					} else {
						var match = _v2.a;
						return $elm$core$Result$Ok(
							_Utils_Tuple2(
								fieldName,
								$author$project$Play$Qualifier$RecursiveMatch(match)));
					}
			}
		} else {
			return $elm$core$Result$Err(
				A3($author$project$Play$Qualifier$Problem$NoSuchMemberOnType, range, typeName, fieldName));
		}
	});
var $author$project$Play$Qualifier$qualifyWhen = F5(
	function (ast, qualifiedTypes, wordName, _v0, _v1) {
		var typeMatch = _v0.a;
		var impl = _v0.b;
		var qualifiedWords = _v1.a;
		var result = _v1.b;
		var qualifiedMatchResult = A2($author$project$Play$Qualifier$qualifyMatch, qualifiedTypes, typeMatch);
		var _v2 = A4($author$project$Play$Qualifier$initQualifyNode, wordName, ast, qualifiedWords, impl);
		var newWords = _v2.a;
		var qualifiedImplementationResult = _v2.b;
		var _v3 = _Utils_Tuple2(qualifiedImplementationResult, qualifiedMatchResult);
		if (_v3.a.$ === 'Err') {
			var err = _v3.a.a;
			return _Utils_Tuple2(
				newWords,
				A2(
					$elm$core$List$cons,
					$elm$core$Result$Err(err),
					result));
		} else {
			if (_v3.b.$ === 'Err') {
				var err = _v3.b.a;
				return _Utils_Tuple2(
					newWords,
					A2(
						$elm$core$List$cons,
						$elm$core$Result$Err(err),
						result));
			} else {
				var qualifiedImplementation = _v3.a.a;
				var qualifiedMatch = _v3.b.a;
				return _Utils_Tuple2(
					newWords,
					A2(
						$elm$core$List$cons,
						$elm$core$Result$Ok(
							_Utils_Tuple2(qualifiedMatch, qualifiedImplementation)),
						result));
			}
		}
	});
var $author$project$Play$Qualifier$qualifyDefinition = F4(
	function (ast, qualifiedTypes, unqualifiedWord, _v0) {
		var errors = _v0.a;
		var acc = _v0.b;
		var qualifiedMetadataResult = A2($author$project$Play$Qualifier$qualifyMetadata, qualifiedTypes, unqualifiedWord.metadata);
		var _v1 = function () {
			var _v2 = unqualifiedWord.implementation;
			if (_v2.$ === 'SoloImpl') {
				var defImpl = _v2.a;
				return _Utils_Tuple2(_List_Nil, defImpl);
			} else {
				var whenImpl = _v2.a;
				var defImpl = _v2.b;
				return _Utils_Tuple2(whenImpl, defImpl);
			}
		}();
		var whens = _v1.a;
		var impl = _v1.b;
		var _v3 = A2(
			$elm$core$Tuple$mapSecond,
			$elm_community$result_extra$Result$Extra$combine,
			A3(
				$elm$core$List$foldr,
				A3($author$project$Play$Qualifier$qualifyWhen, ast, qualifiedTypes, unqualifiedWord.name),
				_Utils_Tuple2(acc, _List_Nil),
				whens));
		var newWordsAfterWhens = _v3.a;
		var qualifiedWhensResult = _v3.b;
		var _v4 = A4($author$project$Play$Qualifier$initQualifyNode, unqualifiedWord.name, ast, newWordsAfterWhens, impl);
		var newWordsAfterImpl = _v4.a;
		var qualifiedImplementationResult = _v4.b;
		var _v5 = _Utils_Tuple3(qualifiedWhensResult, qualifiedImplementationResult, qualifiedMetadataResult);
		if (_v5.a.$ === 'Ok') {
			if (_v5.b.$ === 'Ok') {
				if (_v5.c.$ === 'Ok') {
					var qualifiedWhens = _v5.a.a;
					var qualifiedImplementation = _v5.b.a;
					var qualifiedMetadata = _v5.c.a;
					return _Utils_Tuple2(
						errors,
						A3(
							$elm$core$Dict$insert,
							unqualifiedWord.name,
							{
								implementation: $elm$core$List$isEmpty(qualifiedWhens) ? $author$project$Play$Qualifier$SoloImpl(qualifiedImplementation) : A2($author$project$Play$Qualifier$MultiImpl, qualifiedWhens, qualifiedImplementation),
								metadata: qualifiedMetadata,
								name: unqualifiedWord.name
							},
							newWordsAfterImpl));
				} else {
					var metaError = _v5.c.a;
					return _Utils_Tuple2(
						A2($elm$core$List$cons, metaError, errors),
						newWordsAfterImpl);
				}
			} else {
				var implError = _v5.b.a;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, implError, errors),
					newWordsAfterImpl);
			}
		} else {
			var whenError = _v5.a.a;
			return _Utils_Tuple2(
				A2($elm$core$List$cons, whenError, errors),
				newWordsAfterImpl);
		}
	});
var $author$project$Play$Qualifier$CustomTypeDef = F4(
	function (a, b, c, d) {
		return {$: 'CustomTypeDef', a: a, b: b, c: c, d: d};
	});
var $author$project$Play$Qualifier$UnionTypeDef = F4(
	function (a, b, c, d) {
		return {$: 'UnionTypeDef', a: a, b: b, c: c, d: d};
	});
var $author$project$Play$Qualifier$qualifyType = F3(
	function (ast, typeDef, _v0) {
		var errors = _v0.a;
		var acc = _v0.b;
		return _Utils_Tuple2(
			errors,
			function () {
				if (typeDef.$ === 'CustomTypeDef') {
					var range = typeDef.a;
					var name = typeDef.b;
					var generics = typeDef.c;
					var members = typeDef.d;
					return A3(
						$elm$core$Dict$insert,
						name,
						A4($author$project$Play$Qualifier$CustomTypeDef, name, range, generics, members),
						acc);
				} else {
					var range = typeDef.a;
					var name = typeDef.b;
					var generics = typeDef.c;
					var memberTypes = typeDef.d;
					return A3(
						$elm$core$Dict$insert,
						name,
						A4($author$project$Play$Qualifier$UnionTypeDef, name, range, generics, memberTypes),
						acc);
				}
			}());
	});
var $author$project$Play$Qualifier$resolveUnionInTypeDefs = F2(
	function (qt, td) {
		if (td.$ === 'CustomTypeDef') {
			var name = td.a;
			var range = td.b;
			var generics = td.c;
			var members = td.d;
			return A4(
				$author$project$Play$Qualifier$CustomTypeDef,
				name,
				range,
				generics,
				A2(
					$elm$core$List$map,
					$elm$core$Tuple$mapSecond(
						$author$project$Play$Qualifier$resolveUnion(qt)),
					members));
		} else {
			var name = td.a;
			var range = td.b;
			var generics = td.c;
			var memberTypes = td.d;
			return A4(
				$author$project$Play$Qualifier$UnionTypeDef,
				name,
				range,
				generics,
				A2(
					$elm$core$List$map,
					$author$project$Play$Qualifier$resolveUnion(qt),
					memberTypes));
		}
	});
var $author$project$Play$Qualifier$run = function (ast) {
	var _v0 = A2(
		$elm$core$Tuple$mapSecond,
		function (qt) {
			return A2(
				$elm$core$Dict$map,
				F2(
					function (_v2, v) {
						return A2($author$project$Play$Qualifier$resolveUnionInTypeDefs, qt, v);
					}),
				qt);
		},
		A3(
			$elm$core$Dict$foldl,
			F3(
				function (_v1, val, acc) {
					return A3($author$project$Play$Qualifier$qualifyType, ast, val, acc);
				}),
			_Utils_Tuple2(_List_Nil, $elm$core$Dict$empty),
			ast.types));
	var typeErrors = _v0.a;
	var qualifiedTypes = _v0.b;
	var _v3 = A3(
		$elm$core$Dict$foldl,
		F3(
			function (_v4, val, acc) {
				return A4($author$project$Play$Qualifier$qualifyDefinition, ast, qualifiedTypes, val, acc);
			}),
		_Utils_Tuple2(_List_Nil, $elm$core$Dict$empty),
		ast.words);
	var wordErrors = _v3.a;
	var qualifiedWords = _v3.b;
	var _v5 = _Utils_Tuple2(typeErrors, wordErrors);
	if ((!_v5.a.b) && (!_v5.b.b)) {
		return $elm$core$Result$Ok(
			{types: qualifiedTypes, words: qualifiedWords});
	} else {
		return $elm$core$Result$Err(
			_Utils_ap(typeErrors, wordErrors));
	}
};
var $author$project$Play$TypeChecker$CustomTypeDef = F4(
	function (a, b, c, d) {
		return {$: 'CustomTypeDef', a: a, b: b, c: c, d: d};
	});
var $author$project$Play$TypeChecker$Problem$UndeclaredGeneric = F3(
	function (a, b, c) {
		return {$: 'UndeclaredGeneric', a: a, b: b, c: c};
	});
var $author$project$Play$TypeChecker$UnionTypeDef = F4(
	function (a, b, c, d) {
		return {$: 'UnionTypeDef', a: a, b: b, c: c, d: d};
	});
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $elm$core$Set$singleton = function (key) {
	return $elm$core$Set$Set_elm_builtin(
		A2($elm$core$Dict$singleton, key, _Utils_Tuple0));
};
var $author$project$Play$Data$Type$referencedGenerics = function (t) {
	switch (t.$) {
		case 'Generic':
			var val = t.a;
			return $elm$core$Set$singleton(val);
		case 'CustomGeneric':
			var members = t.b;
			return A3(
				$elm$core$List$foldl,
				$elm$core$Set$union,
				$elm$core$Set$empty,
				A2($elm$core$List$map, $author$project$Play$Data$Type$referencedGenerics, members));
		case 'Union':
			var members = t.a;
			return A3(
				$elm$core$List$foldl,
				$elm$core$Set$union,
				$elm$core$Set$empty,
				A2($elm$core$List$map, $author$project$Play$Data$Type$referencedGenerics, members));
		default:
			return $elm$core$Set$empty;
	}
};
var $author$project$Play$TypeChecker$initContext = function (ast) {
	var genericErrors = function (t) {
		var collectUndeclaredGenericProblems = F3(
			function (range, listedGenerics, memberTypes) {
				return A2(
					$elm$core$List$map,
					function (gen) {
						return A3($author$project$Play$TypeChecker$Problem$UndeclaredGeneric, range, gen, listedGenerics);
					},
					A2(
						$elm$core$List$filter,
						function (gen) {
							return !A2($elm$core$Set$member, gen, listedGenerics);
						},
						memberTypes));
			});
		var collectReferencedGenerics = function (memberTypes) {
			return $elm$core$Set$toList(
				A3(
					$elm$core$List$foldl,
					$elm$core$Set$union,
					$elm$core$Set$empty,
					A2($elm$core$List$map, $author$project$Play$Data$Type$referencedGenerics, memberTypes)));
		};
		if (t.$ === 'CustomTypeDef') {
			var name = t.a;
			var range = t.b;
			var generics = t.c;
			var members = t.d;
			var listedGenerics_ = $elm$core$Set$fromList(generics);
			return A3(
				collectUndeclaredGenericProblems,
				range,
				listedGenerics_,
				collectReferencedGenerics(
					A2($elm$core$List$map, $elm$core$Tuple$second, members)));
		} else {
			var name = t.a;
			var range = t.b;
			var generics = t.c;
			var mts = t.d;
			var listedGenerics_ = $elm$core$Set$fromList(generics);
			return A3(
				collectUndeclaredGenericProblems,
				range,
				listedGenerics_,
				collectReferencedGenerics(mts));
		}
	};
	var concreteTypes = A2(
		$elm$core$Dict$map,
		F2(
			function (_v0, t) {
				if (t.$ === 'CustomTypeDef') {
					var name = t.a;
					var range = t.b;
					var generics = t.c;
					var members = t.d;
					return A4($author$project$Play$TypeChecker$CustomTypeDef, name, range, generics, members);
				} else {
					var name = t.a;
					var range = t.b;
					var generics = t.c;
					var memberTypes = t.d;
					return A4($author$project$Play$TypeChecker$UnionTypeDef, name, range, generics, memberTypes);
				}
			}),
		ast.types);
	return {
		boundGenerics: $elm$core$Dict$empty,
		boundStackRanges: $elm$core$Dict$empty,
		callStack: $elm$core$Set$empty,
		errors: A2(
			$elm$core$List$concatMap,
			genericErrors,
			$elm$core$Dict$values(concreteTypes)),
		stackEffects: _List_Nil,
		typedWords: $elm$core$Dict$empty,
		types: concreteTypes,
		untypedWords: ast.words
	};
};
var $author$project$Play$TypeChecker$Problem$InconsistentWhens = F2(
	function (a, b) {
		return {$: 'InconsistentWhens', a: a, b: b};
	});
var $author$project$Play$TypeChecker$Problem$MissingTypeAnnotationInRecursiveCallStack = F2(
	function (a, b) {
		return {$: 'MissingTypeAnnotationInRecursiveCallStack', a: a, b: b};
	});
var $author$project$Play$TypeChecker$MultiImpl = F2(
	function (a, b) {
		return {$: 'MultiImpl', a: a, b: b};
	});
var $author$project$Play$TypeChecker$Push = function (a) {
	return {$: 'Push', a: a};
};
var $author$project$Play$TypeChecker$SoloImpl = function (a) {
	return {$: 'SoloImpl', a: a};
};
var $elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $author$project$Play$TypeChecker$cleanContext = function (ctx) {
	return _Utils_update(
		ctx,
		{boundGenerics: $elm$core$Dict$empty, boundStackRanges: $elm$core$Dict$empty, stackEffects: _List_Nil});
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $author$project$Play$TypeChecker$constrainGenericsHelper = F4(
	function (remappedGenerics, annotated, inferred, acc) {
		constrainGenericsHelper:
		while (true) {
			var _v0 = _Utils_Tuple2(annotated, inferred);
			_v0$6:
			while (true) {
				if (!_v0.a.b) {
					return _Utils_Tuple2(
						remappedGenerics,
						$elm$core$List$reverse(acc));
				} else {
					if (!_v0.b.b) {
						return _Utils_Tuple2(
							remappedGenerics,
							$elm$core$List$reverse(acc));
					} else {
						switch (_v0.b.a.$) {
							case 'Generic':
								if (_v0.a.a.$ === 'Generic') {
									var _v1 = _v0.a;
									var annotatedEl = _v1.a;
									var annGen = annotatedEl.a;
									var annotatedRest = _v1.b;
									var _v2 = _v0.b;
									var inferredEl = _v2.a;
									var infGen = inferredEl.a;
									var inferredRest = _v2.b;
									if (_Utils_eq(annGen, infGen)) {
										var $temp$remappedGenerics = remappedGenerics,
											$temp$annotated = annotatedRest,
											$temp$inferred = inferredRest,
											$temp$acc = A2($elm$core$List$cons, inferredEl, acc);
										remappedGenerics = $temp$remappedGenerics;
										annotated = $temp$annotated;
										inferred = $temp$inferred;
										acc = $temp$acc;
										continue constrainGenericsHelper;
									} else {
										var _v3 = A2($elm$core$Dict$get, infGen, remappedGenerics);
										if (_v3.$ === 'Just') {
											var val = _v3.a;
											var $temp$remappedGenerics = remappedGenerics,
												$temp$annotated = annotatedRest,
												$temp$inferred = inferredRest,
												$temp$acc = A2($elm$core$List$cons, val, acc);
											remappedGenerics = $temp$remappedGenerics;
											annotated = $temp$annotated;
											inferred = $temp$inferred;
											acc = $temp$acc;
											continue constrainGenericsHelper;
										} else {
											var $temp$remappedGenerics = A3($elm$core$Dict$insert, infGen, annotatedEl, remappedGenerics),
												$temp$annotated = annotatedRest,
												$temp$inferred = inferredRest,
												$temp$acc = A2($elm$core$List$cons, annotatedEl, acc);
											remappedGenerics = $temp$remappedGenerics;
											annotated = $temp$annotated;
											inferred = $temp$inferred;
											acc = $temp$acc;
											continue constrainGenericsHelper;
										}
									}
								} else {
									break _v0$6;
								}
							case 'StackRange':
								if (_v0.a.a.$ === 'StackRange') {
									var _v4 = _v0.a;
									var annotatedEl = _v4.a;
									var annGen = annotatedEl.a;
									var annotatedRest = _v4.b;
									var _v5 = _v0.b;
									var inferredEl = _v5.a;
									var infGen = inferredEl.a;
									var inferredRest = _v5.b;
									if (_Utils_eq(annGen, infGen)) {
										var $temp$remappedGenerics = remappedGenerics,
											$temp$annotated = annotatedRest,
											$temp$inferred = inferredRest,
											$temp$acc = A2($elm$core$List$cons, inferredEl, acc);
										remappedGenerics = $temp$remappedGenerics;
										annotated = $temp$annotated;
										inferred = $temp$inferred;
										acc = $temp$acc;
										continue constrainGenericsHelper;
									} else {
										var _v6 = A2($elm$core$Dict$get, infGen, remappedGenerics);
										if (_v6.$ === 'Just') {
											var val = _v6.a;
											var $temp$remappedGenerics = remappedGenerics,
												$temp$annotated = annotatedRest,
												$temp$inferred = inferredRest,
												$temp$acc = A2($elm$core$List$cons, val, acc);
											remappedGenerics = $temp$remappedGenerics;
											annotated = $temp$annotated;
											inferred = $temp$inferred;
											acc = $temp$acc;
											continue constrainGenericsHelper;
										} else {
											var $temp$remappedGenerics = A3($elm$core$Dict$insert, infGen, annotatedEl, remappedGenerics),
												$temp$annotated = annotatedRest,
												$temp$inferred = inferredRest,
												$temp$acc = A2($elm$core$List$cons, annotatedEl, acc);
											remappedGenerics = $temp$remappedGenerics;
											annotated = $temp$annotated;
											inferred = $temp$inferred;
											acc = $temp$acc;
											continue constrainGenericsHelper;
										}
									}
								} else {
									var _v7 = _v0.a;
									var annotatedEl = _v7.a;
									var annotatedRest = _v7.b;
									var _v8 = _v0.b;
									var infGen = _v8.a.a;
									var inferredRest = _v8.b;
									var _v9 = A2($elm$core$Dict$get, infGen, remappedGenerics);
									if (_v9.$ === 'Just') {
										var val = _v9.a;
										var $temp$remappedGenerics = remappedGenerics,
											$temp$annotated = annotatedRest,
											$temp$inferred = inferredRest,
											$temp$acc = A2($elm$core$List$cons, val, acc);
										remappedGenerics = $temp$remappedGenerics;
										annotated = $temp$annotated;
										inferred = $temp$inferred;
										acc = $temp$acc;
										continue constrainGenericsHelper;
									} else {
										var $temp$remappedGenerics = A3($elm$core$Dict$insert, infGen, annotatedEl, remappedGenerics),
											$temp$annotated = annotatedRest,
											$temp$inferred = inferredRest,
											$temp$acc = A2($elm$core$List$cons, annotatedEl, acc);
										remappedGenerics = $temp$remappedGenerics;
										annotated = $temp$annotated;
										inferred = $temp$inferred;
										acc = $temp$acc;
										continue constrainGenericsHelper;
									}
								}
							case 'Quotation':
								if (_v0.a.a.$ === 'Quotation') {
									var _v10 = _v0.a;
									var annotatedQuote = _v10.a.a;
									var annotatedRest = _v10.b;
									var _v11 = _v0.b;
									var inferredQuote = _v11.a.a;
									var inferredRest = _v11.b;
									var _v12 = A4($author$project$Play$TypeChecker$constrainGenericsHelper, remappedGenerics, annotatedQuote.input, inferredQuote.input, _List_Nil);
									var quoteRemappedGens = _v12.a;
									var constrainedInputs = _v12.b;
									var _v13 = A4($author$project$Play$TypeChecker$constrainGenericsHelper, quoteRemappedGens, annotatedQuote.output, inferredQuote.output, _List_Nil);
									var quoteRemappedGens2 = _v13.a;
									var constrainedOutputs = _v13.b;
									var constrainedQuote = $author$project$Play$Data$Type$Quotation(
										{input: constrainedInputs, output: constrainedOutputs});
									var $temp$remappedGenerics = A2($elm$core$Dict$union, quoteRemappedGens2, remappedGenerics),
										$temp$annotated = annotatedRest,
										$temp$inferred = inferredRest,
										$temp$acc = A2($elm$core$List$cons, constrainedQuote, acc);
									remappedGenerics = $temp$remappedGenerics;
									annotated = $temp$annotated;
									inferred = $temp$inferred;
									acc = $temp$acc;
									continue constrainGenericsHelper;
								} else {
									break _v0$6;
								}
							default:
								break _v0$6;
						}
					}
				}
			}
			var _v14 = _v0.a;
			var annotatedRest = _v14.b;
			var _v15 = _v0.b;
			var inferredEl = _v15.a;
			var inferredRest = _v15.b;
			var $temp$remappedGenerics = remappedGenerics,
				$temp$annotated = annotatedRest,
				$temp$inferred = inferredRest,
				$temp$acc = A2($elm$core$List$cons, inferredEl, acc);
			remappedGenerics = $temp$remappedGenerics;
			annotated = $temp$annotated;
			inferred = $temp$inferred;
			acc = $temp$acc;
			continue constrainGenericsHelper;
		}
	});
var $author$project$Play$TypeChecker$constrainGenerics = F2(
	function (typeSignature, inferredType) {
		var _v0 = $author$project$Play$Data$TypeSignature$toMaybe(typeSignature);
		if (_v0.$ === 'Nothing') {
			return inferredType;
		} else {
			var annotatedType = _v0.a;
			var _v1 = A4($author$project$Play$TypeChecker$constrainGenericsHelper, $elm$core$Dict$empty, annotatedType.input, inferredType.input, _List_Nil);
			var remappedGenerics = _v1.a;
			var constrainedInputs = _v1.b;
			var _v2 = A4($author$project$Play$TypeChecker$constrainGenericsHelper, remappedGenerics, annotatedType.output, inferredType.output, _List_Nil);
			var constrainedOutputs = _v2.b;
			return {input: constrainedInputs, output: constrainedOutputs};
		}
	});
var $author$project$Play$Data$Type$emptyWordType = {input: _List_Nil, output: _List_Nil};
var $author$project$Play$TypeChecker$equalizeWhenTypesHelper = F3(
	function (types, remappedGenerics, acc) {
		equalizeWhenTypesHelper:
		while (true) {
			if (!types.b) {
				return $elm$core$List$reverse(acc);
			} else {
				if (!types.b.b) {
					var lastType = types.a;
					return $elm$core$List$reverse(
						A2($elm$core$List$cons, lastType, acc));
				} else {
					var firstType = types.a;
					var _v1 = types.b;
					var secondType = _v1.a;
					var remaining = _v1.b;
					var unzip = F2(
						function (_v5, _v6) {
							var left = _v5.a;
							var right = _v5.b;
							var leftAcc = _v6.a;
							var rightAcc = _v6.b;
							return _Utils_Tuple2(
								A2($elm$core$List$cons, left, leftAcc),
								A2($elm$core$List$cons, right, rightAcc));
						});
					var constrainAndZip = F2(
						function (lhs, rhs) {
							var _v4 = _Utils_Tuple2(lhs, rhs);
							if (_v4.a.$ === 'Generic') {
								if (_v4.b.$ === 'Generic') {
									return _Utils_Tuple2(lhs, rhs);
								} else {
									var other = _v4.b;
									return _Utils_Tuple2(other, other);
								}
							} else {
								if (_v4.b.$ === 'Generic') {
									var other = _v4.a;
									return _Utils_Tuple2(other, other);
								} else {
									return _Utils_Tuple2(lhs, rhs);
								}
							}
						});
					var constrainedInputs = A3($elm$core$List$map2, constrainAndZip, firstType.input, secondType.input);
					var constrainedOutputs = A3($elm$core$List$map2, constrainAndZip, firstType.output, secondType.output);
					var _v2 = A3(
						$elm$core$List$foldr,
						unzip,
						_Utils_Tuple2(_List_Nil, _List_Nil),
						constrainedOutputs);
					var unzippedFirstOutputs = _v2.a;
					var unzippedSecondOutputs = _v2.b;
					var _v3 = A3(
						$elm$core$List$foldr,
						unzip,
						_Utils_Tuple2(_List_Nil, _List_Nil),
						constrainedInputs);
					var unzippedFirstInputs = _v3.a;
					var unzippedSecondInputs = _v3.b;
					var newFirstType = {input: unzippedFirstInputs, output: unzippedFirstOutputs};
					var newSecondType = {input: unzippedSecondInputs, output: unzippedSecondOutputs};
					var $temp$types = remaining,
						$temp$remappedGenerics = remappedGenerics,
						$temp$acc = A2(
						$elm$core$List$cons,
						newSecondType,
						A2($elm$core$List$cons, newFirstType, acc));
					types = $temp$types;
					remappedGenerics = $temp$remappedGenerics;
					acc = $temp$acc;
					continue equalizeWhenTypesHelper;
				}
			}
		}
	});
var $author$project$Play$TypeChecker$equalizeWhenTypes = function (wordTypes) {
	var splitFirstInputType = function (wordType) {
		var _v4 = wordType.input;
		if (_v4.b) {
			var first = _v4.a;
			var rest = _v4.b;
			return $elm$core$Maybe$Just(
				_Utils_Tuple2(
					first,
					_Utils_update(
						wordType,
						{input: rest})));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var joinSplitWordType = function (_v3) {
		var firstType = _v3.a;
		var wordType = _v3.b;
		return _Utils_update(
			wordType,
			{
				input: A2($elm$core$List$cons, firstType, wordType.input)
			});
	};
	return A2(
		$elm$core$List$map,
		joinSplitWordType,
		function (_v2) {
			var firstTypes = _v2.a;
			var equalizedWhenTypes = _v2.b;
			return A3($elm$core$List$map2, $elm$core$Tuple$pair, firstTypes, equalizedWhenTypes);
		}(
			A2(
				$elm$core$Tuple$mapSecond,
				function (lobotomizedWordTypes) {
					return A3($author$project$Play$TypeChecker$equalizeWhenTypesHelper, lobotomizedWordTypes, $elm$core$Dict$empty, _List_Nil);
				},
				A3(
					$elm$core$List$foldr,
					F2(
						function (_v0, _v1) {
							var firstType = _v0.a;
							var wordType = _v0.b;
							var typeAcc = _v1.a;
							var wordTypeAcc = _v1.b;
							return _Utils_Tuple2(
								A2($elm$core$List$cons, firstType, typeAcc),
								A2($elm$core$List$cons, wordType, wordTypeAcc));
						}),
					_Utils_Tuple2(_List_Nil, _List_Nil),
					A2($elm$core$List$filterMap, splitFirstInputType, wordTypes)))));
};
var $author$project$Play$Data$Type$genericlyCompatible = F2(
	function (lhs, rhs) {
		var _v0 = _Utils_Tuple2(lhs, rhs);
		_v0$1:
		while (true) {
			_v0$3:
			while (true) {
				switch (_v0.a.$) {
					case 'Generic':
						return true;
					case 'CustomGeneric':
						switch (_v0.b.$) {
							case 'Generic':
								break _v0$1;
							case 'CustomGeneric':
								var _v1 = _v0.a;
								var lName = _v1.a;
								var _v2 = _v0.b;
								var rName = _v2.a;
								return _Utils_eq(lName, rName);
							default:
								break _v0$3;
						}
					default:
						if (_v0.b.$ === 'Generic') {
							break _v0$1;
						} else {
							break _v0$3;
						}
				}
			}
			return _Utils_eq(lhs, rhs);
		}
		return true;
	});
var $author$project$Play$TypeChecker$getMemberType = F3(
	function (typeDict, typeName, memberName) {
		var _v0 = A2($elm$core$Dict$get, typeName, typeDict);
		if ((_v0.$ === 'Just') && (_v0.a.$ === 'CustomTypeDef')) {
			var _v1 = _v0.a;
			var members = _v1.d;
			return A2(
				$elm$core$Maybe$map,
				$elm$core$Tuple$second,
				A2(
					$elm_community$list_extra$List$Extra$find,
					function (_v2) {
						var name = _v2.a;
						return _Utils_eq(name, memberName);
					},
					members));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $author$project$Play$TypeChecker$Problem$InexhaustiveMultiWord = F2(
	function (a, b) {
		return {$: 'InexhaustiveMultiWord', a: a, b: b};
	});
var $author$project$Play$TypeChecker$Total = {$: 'Total'};
var $author$project$Play$TypeChecker$SeenInt = {$: 'SeenInt'};
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$Play$TypeChecker$inexhaustivenessCheckHelper = F3(
	function (typePrefix, _v0, acc) {
		var t = _v0.b;
		var conds = _v0.c;
		var typeList = _Utils_ap(
			typePrefix,
			_List_fromArray(
				[t]));
		if (A2(
			$elm$core$List$any,
			function (_v1) {
				var toMatch = _v1.a;
				var state = _v1.b;
				return _Utils_eq(typeList, toMatch) && _Utils_eq(state, $author$project$Play$TypeChecker$Total);
			},
			acc)) {
			return acc;
		} else {
			var isRecursiveMatch = function (match) {
				if (match.$ === 'RecursiveMatch') {
					var cond = match.a;
					return $elm$core$Maybe$Just(cond);
				} else {
					return $elm$core$Maybe$Nothing;
				}
			};
			var subcases = A3(
				$elm$core$List$foldl,
				$author$project$Play$TypeChecker$inexhaustivenessCheckHelper(typeList),
				acc,
				A2(
					$elm$core$List$filterMap,
					isRecursiveMatch,
					A2($elm$core$List$map, $elm$core$Tuple$second, conds)));
			var toAdd = function () {
				var _v5 = _Utils_Tuple3(t, conds, subcases);
				if (!_v5.b.b) {
					return _List_fromArray(
						[
							_Utils_Tuple2(typeList, $author$project$Play$TypeChecker$Total)
						]);
				} else {
					if (_v5.a.$ === 'Int') {
						var _v6 = _v5.a;
						return _List_fromArray(
							[
								_Utils_Tuple2(typeList, $author$project$Play$TypeChecker$SeenInt)
							]);
					} else {
						return A2(
							$elm$core$List$all,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Tuple$second,
								$elm$core$Basics$eq($author$project$Play$TypeChecker$Total)),
							subcases) ? _List_fromArray(
							[
								_Utils_Tuple2(typeList, $author$project$Play$TypeChecker$Total)
							]) : subcases;
					}
				}
			}();
			var modifiedAcc = (!_Utils_eq(
				toAdd,
				_List_fromArray(
					[
						_Utils_Tuple2(typeList, $author$project$Play$TypeChecker$Total)
					]))) ? acc : A2(
				$elm$core$List$filter,
				function (_v4) {
					var toMatch = _v4.a;
					return !_Utils_eq(
						A2(
							$elm$core$List$take,
							$elm$core$List$length(typeList),
							toMatch),
						typeList);
				},
				acc);
			if (_Utils_eq(
				A2(
					$elm_community$list_extra$List$Extra$find,
					function (_v2) {
						var toMatch = _v2.a;
						return _Utils_eq(toMatch, typeList);
					},
					modifiedAcc),
				$elm$core$Maybe$Nothing)) {
				return _Utils_ap(toAdd, modifiedAcc);
			} else {
				var updatedStates = A2(
					$elm$core$List$filter,
					function (_v3) {
						var toMatch = _v3.a;
						return !_Utils_eq(toMatch, typeList);
					},
					modifiedAcc);
				return _Utils_ap(toAdd, updatedStates);
			}
		}
	});
var $author$project$Play$TypeChecker$inexhaustivenessCheck = F2(
	function (range, patterns) {
		var inexhaustiveStates = A2(
			$elm$core$List$map,
			$elm$core$Tuple$first,
			A2(
				$elm$core$List$filter,
				function (_v1) {
					var state = _v1.b;
					return !_Utils_eq(state, $author$project$Play$TypeChecker$Total);
				},
				A3(
					$elm$core$List$foldl,
					$author$project$Play$TypeChecker$inexhaustivenessCheckHelper(_List_Nil),
					_List_Nil,
					patterns)));
		if (!inexhaustiveStates.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Just(
				A2($author$project$Play$TypeChecker$Problem$InexhaustiveMultiWord, range, inexhaustiveStates));
		}
	});
var $author$project$Play$Data$Type$isGeneric = function (t) {
	if (t.$ === 'Generic') {
		return true;
	} else {
		return false;
	}
};
var $author$project$Play$TypeChecker$joinOutputs = F2(
	function (outputs, result) {
		joinOutputs:
		while (true) {
			if (outputs.b) {
				if (outputs.b.b) {
					var first = outputs.a;
					var _v1 = outputs.b;
					var second = _v1.a;
					var rest = _v1.b;
					var unionize = F2(
						function (lhs, rhs) {
							var _v2 = _Utils_Tuple2(lhs, rhs);
							return _Utils_eq(lhs, rhs) ? lhs : $author$project$Play$Data$Type$Union(
								_List_fromArray(
									[lhs, rhs]));
						});
					var joined = A3($elm$core$List$map2, unionize, first, second);
					var $temp$outputs = A2($elm$core$List$cons, joined, rest),
						$temp$result = result;
					outputs = $temp$outputs;
					result = $temp$result;
					continue joinOutputs;
				} else {
					var joined = outputs.a;
					return _Utils_update(
						result,
						{output: joined});
				}
			} else {
				return result;
			}
		}
	});
var $elm$core$Tuple$mapBoth = F3(
	function (funcA, funcB, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			funcA(x),
			funcB(y));
	});
var $elm$core$Tuple$mapFirst = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var $author$project$Play$TypeChecker$LiteralInt = function (a) {
	return {$: 'LiteralInt', a: a};
};
var $author$project$Play$TypeChecker$LiteralType = function (a) {
	return {$: 'LiteralType', a: a};
};
var $author$project$Play$TypeChecker$RecursiveMatch = function (a) {
	return {$: 'RecursiveMatch', a: a};
};
var $author$project$Play$TypeChecker$TypeMatch = F3(
	function (a, b, c) {
		return {$: 'TypeMatch', a: a, b: b, c: c};
	});
var $author$project$Play$TypeChecker$mapTypeMatch = function (_v2) {
	var range = _v2.a;
	var type_ = _v2.b;
	var cond = _v2.c;
	return A3(
		$author$project$Play$TypeChecker$TypeMatch,
		range,
		type_,
		A2($elm$core$List$map, $author$project$Play$TypeChecker$mapTypeMatchValue, cond));
};
var $author$project$Play$TypeChecker$mapTypeMatchValue = function (_v0) {
	var fieldName = _v0.a;
	var value = _v0.b;
	switch (value.$) {
		case 'LiteralInt':
			var val = value.a;
			return _Utils_Tuple2(
				fieldName,
				$author$project$Play$TypeChecker$LiteralInt(val));
		case 'LiteralType':
			var val = value.a;
			return _Utils_Tuple2(
				fieldName,
				$author$project$Play$TypeChecker$LiteralType(val));
		default:
			var val = value.a;
			return _Utils_Tuple2(
				fieldName,
				$author$project$Play$TypeChecker$RecursiveMatch(
					$author$project$Play$TypeChecker$mapTypeMatch(val)));
	}
};
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$Play$TypeChecker$normalizeWhenTypes = function (whenTypes) {
	var padGeneric = function (t) {
		if (t.$ === 'Generic') {
			var val = t.a;
			return $author$project$Play$Data$Type$Generic('*' + val);
		} else {
			return t;
		}
	};
	var maybeLongestInputWhenType = $elm$core$List$head(
		$elm$core$List$reverse(
			A2(
				$elm$core$List$sortBy,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.input;
					},
					$elm$core$List$length),
				whenTypes)));
	var matchInputLength = F2(
		function (toMatch, wordType) {
			var diff = $elm$core$List$length(toMatch.input) - $elm$core$List$length(wordType.input);
			var padding = A2(
				$elm$core$List$map,
				padGeneric,
				A2($elm$core$List$take, diff, toMatch.input));
			if (!padding.b) {
				return wordType;
			} else {
				var elements = padding;
				return _Utils_update(
					wordType,
					{
						input: _Utils_ap(elements, wordType.input),
						output: _Utils_ap(elements, wordType.output)
					});
			}
		});
	if (maybeLongestInputWhenType.$ === 'Just') {
		var longestInputWT = maybeLongestInputWhenType.a;
		return A2(
			$elm$core$List$map,
			matchInputLength(longestInputWT),
			whenTypes);
	} else {
		return whenTypes;
	}
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Set$remove = F2(
	function (key, _v0) {
		var dict = _v0.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$remove, key, dict));
	});
var $author$project$Play$TypeChecker$replaceFirstType = F2(
	function (_with, inf) {
		var _v0 = inf.input;
		if (_v0.b) {
			var rem = _v0.b;
			return _Utils_update(
				inf,
				{
					input: A2($elm$core$List$cons, _with, rem)
				});
		} else {
			return inf;
		}
	});
var $author$project$Play$TypeChecker$isAliasOf = F5(
	function (context, visitedKeys, targetKey, topKey, currentKey) {
		isAliasOf:
		while (true) {
			var _v0 = A2($elm$core$Dict$get, currentKey, context.boundGenerics);
			if ((_v0.$ === 'Just') && (_v0.a.$ === 'Generic')) {
				var genericKey = _v0.a.a;
				if (A2($elm$core$Set$member, genericKey, visitedKeys)) {
					return $elm$core$Maybe$Nothing;
				} else {
					if (_Utils_eq(genericKey, targetKey)) {
						return $elm$core$Maybe$Just(topKey);
					} else {
						var $temp$context = context,
							$temp$visitedKeys = A2($elm$core$Set$insert, currentKey, visitedKeys),
							$temp$targetKey = targetKey,
							$temp$topKey = topKey,
							$temp$currentKey = genericKey;
						context = $temp$context;
						visitedKeys = $temp$visitedKeys;
						targetKey = $temp$targetKey;
						topKey = $temp$topKey;
						currentKey = $temp$currentKey;
						continue isAliasOf;
					}
				}
			} else {
				return $elm$core$Maybe$Nothing;
			}
		}
	});
var $author$project$Play$TypeChecker$findAliases = F2(
	function (context, generic) {
		return _Utils_Tuple2(
			generic,
			A2(
				$elm$core$List$filterMap,
				function (key) {
					return A5($author$project$Play$TypeChecker$isAliasOf, context, $elm$core$Set$empty, generic, key, key);
				},
				$elm$core$Dict$keys(context.boundGenerics)));
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Char$fromCode = _Char_fromCode;
var $author$project$Play$Data$Type$genericName = function (type_) {
	if (type_.$ === 'Generic') {
		var name = type_.a;
		return $elm$core$Maybe$Just(name);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Play$TypeChecker$getGenericBinding = F2(
	function (context, type_) {
		getGenericBinding:
		while (true) {
			if (type_.$ === 'Generic') {
				var genericId = type_.a;
				var _v1 = A2($elm$core$Dict$get, genericId, context.boundGenerics);
				if ((_v1.$ === 'Just') && (_v1.a.$ === 'Generic')) {
					var nextGenericId = _v1.a.a;
					var _v2 = A2($elm$core$Dict$get, nextGenericId, context.boundGenerics);
					if ((_v2.$ === 'Just') && (_v2.a.$ === 'Generic')) {
						var anotherGenericType = _v2.a;
						var cycleCheckId = anotherGenericType.a;
						if (_Utils_eq(cycleCheckId, genericId)) {
							return $elm$core$Maybe$Nothing;
						} else {
							var $temp$context = context,
								$temp$type_ = anotherGenericType;
							context = $temp$context;
							type_ = $temp$type_;
							continue getGenericBinding;
						}
					} else {
						var otherwise = _v2;
						return otherwise;
					}
				} else {
					var otherwise = _v1;
					return otherwise;
				}
			} else {
				return $elm$core$Maybe$Just(type_);
			}
		}
	});
var $author$project$Play$TypeChecker$reverseLookup = F2(
	function (_v0, acc) {
		var name = _v0.a;
		var aliases = _v0.b;
		var targetName = A2(
			$elm$core$Maybe$withDefault,
			name,
			A2($elm$core$Dict$get, name, acc));
		return A3(
			$elm$core$List$foldl,
			F2(
				function (alias, newAcc) {
					return A3($elm$core$Dict$insert, alias, targetName, newAcc);
				}),
			acc,
			A2(
				$elm$core$List$filter,
				function (a) {
					return !_Utils_eq(a, targetName);
				},
				A2(
					$elm$core$List$filter,
					function (a) {
						return !A2($elm$core$Dict$member, a, acc);
					},
					aliases)));
	});
var $author$project$Play$TypeChecker$simplifyWordType = function (_v0) {
	var context = _v0.a;
	var wordType = _v0.b;
	var renameGenerics = F2(
		function (type_, _v1) {
			var nextId = _v1.a;
			var seenGenerics = _v1.b;
			var acc = _v1.c;
			switch (type_.$) {
				case 'Generic':
					var genName = type_.a;
					var _v3 = A2($elm$core$Dict$get, genName, seenGenerics);
					if (_v3.$ === 'Just') {
						var newName = _v3.a;
						return _Utils_Tuple3(
							nextId,
							seenGenerics,
							A2(
								$elm$core$List$cons,
								$author$project$Play$Data$Type$Generic(newName),
								acc));
					} else {
						var newName = $elm$core$String$fromChar(nextId);
						return _Utils_Tuple3(
							$elm$core$Char$fromCode(
								1 + $elm$core$Char$toCode(nextId)),
							A3($elm$core$Dict$insert, genName, newName, seenGenerics),
							A2(
								$elm$core$List$cons,
								$author$project$Play$Data$Type$Generic(newName),
								acc));
					}
				case 'Union':
					var members = type_.a;
					var _v4 = A3(
						$elm$core$List$foldr,
						renameGenerics,
						_Utils_Tuple3(nextId, seenGenerics, _List_Nil),
						members);
					var newNextId = _v4.a;
					var newSeenGenerics = _v4.b;
					var newMembers = _v4.c;
					return _Utils_Tuple3(
						newNextId,
						newSeenGenerics,
						A2(
							$elm$core$List$cons,
							$author$project$Play$Data$Type$Union(newMembers),
							acc));
				case 'CustomGeneric':
					var name = type_.a;
					var members = type_.b;
					var _v5 = A3(
						$elm$core$List$foldr,
						renameGenerics,
						_Utils_Tuple3(nextId, seenGenerics, _List_Nil),
						members);
					var newNextId = _v5.a;
					var newSeenGenerics = _v5.b;
					var newMembers = _v5.c;
					return _Utils_Tuple3(
						newNextId,
						newSeenGenerics,
						A2(
							$elm$core$List$cons,
							A2($author$project$Play$Data$Type$CustomGeneric, name, newMembers),
							acc));
				default:
					return _Utils_Tuple3(
						nextId,
						seenGenerics,
						A2($elm$core$List$cons, type_, acc));
			}
		});
	var oldSignature = _Utils_ap(wordType.input, wordType.output);
	var inputLength = $elm$core$List$length(wordType.input);
	var aliases = A3(
		$elm$core$List$foldl,
		$author$project$Play$TypeChecker$reverseLookup,
		$elm$core$Dict$empty,
		A2(
			$elm$core$List$map,
			$author$project$Play$TypeChecker$findAliases(context),
			A3(
				$elm$core$Basics$composeR,
				$elm$core$Set$fromList,
				$elm$core$Set$toList,
				A2($elm$core$List$filterMap, $author$project$Play$Data$Type$genericName, oldSignature))));
	var reduceGenericName = function (type_) {
		switch (type_.$) {
			case 'Generic':
				var genName = type_.a;
				var _v7 = A2($author$project$Play$TypeChecker$getGenericBinding, context, type_);
				if (_v7.$ === 'Just') {
					var boundType = _v7.a;
					return boundType;
				} else {
					var _v8 = A2($elm$core$Dict$get, genName, aliases);
					if (_v8.$ === 'Just') {
						var actualName = _v8.a;
						return $author$project$Play$Data$Type$Generic(actualName);
					} else {
						return type_;
					}
				}
			case 'Union':
				var members = type_.a;
				return $author$project$Play$Data$Type$Union(
					A2($elm$core$List$map, reduceGenericName, members));
			case 'CustomGeneric':
				var name = type_.a;
				var members = type_.b;
				return A2(
					$author$project$Play$Data$Type$CustomGeneric,
					name,
					A2($elm$core$List$map, reduceGenericName, members));
			default:
				return type_;
		}
	};
	var newSignature = $elm$core$List$reverse(
		function (_v9) {
			var ns = _v9.c;
			return ns;
		}(
			A3(
				$elm$core$List$foldl,
				renameGenerics,
				_Utils_Tuple3(
					_Utils_chr('a'),
					$elm$core$Dict$empty,
					_List_Nil),
				A2($elm$core$List$map, reduceGenericName, oldSignature))));
	return _Utils_Tuple2(
		context,
		{
			input: A2($elm$core$List$take, inputLength, newSignature),
			output: A2($elm$core$List$drop, inputLength, newSignature)
		});
};
var $author$project$Play$TypeChecker$simplifyWhenWordTypes = F2(
	function (wordTypes, context) {
		return _Utils_Tuple2(
			A2(
				$elm$core$List$map,
				function (wt) {
					return $author$project$Play$TypeChecker$simplifyWordType(
						_Utils_Tuple2(context, wt)).b;
				},
				wordTypes),
			context);
	});
var $author$project$Play$TypeChecker$Pop = function (a) {
	return {$: 'Pop', a: a};
};
var $author$project$Play$TypeChecker$tagGeneric = F2(
	function (idx, type_) {
		switch (type_.$) {
			case 'Generic':
				var genName = type_.a;
				return $author$project$Play$Data$Type$Generic(
					_Utils_ap(
						genName,
						$elm$core$String$fromInt(idx)));
			case 'CustomGeneric':
				var name = type_.a;
				var generics = type_.b;
				return A2(
					$author$project$Play$Data$Type$CustomGeneric,
					name,
					A2(
						$elm$core$List$map,
						$author$project$Play$TypeChecker$tagGeneric(idx),
						generics));
			case 'Union':
				var members = type_.a;
				return $author$project$Play$Data$Type$Union(
					A2(
						$elm$core$List$map,
						$author$project$Play$TypeChecker$tagGeneric(idx),
						members));
			default:
				return type_;
		}
	});
var $author$project$Play$TypeChecker$tagGenericEffect = F2(
	function (idx, effect) {
		if (effect.$ === 'Push') {
			var type_ = effect.a;
			return $author$project$Play$TypeChecker$Push(
				A2($author$project$Play$TypeChecker$tagGeneric, idx, type_));
		} else {
			var type_ = effect.a;
			return $author$project$Play$TypeChecker$Pop(
				A2($author$project$Play$TypeChecker$tagGeneric, idx, type_));
		}
	});
var $author$project$Play$TypeChecker$extractTypeFromTypeMatch = function (_v0) {
	var t_ = _v0.b;
	return t_;
};
var $elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _v0) {
				var trues = _v0.a;
				var falses = _v0.b;
				return pred(x) ? _Utils_Tuple2(
					A2($elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2($elm$core$List$cons, x, falses));
			});
		return A3(
			$elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var $elm_community$list_extra$List$Extra$gatherWith = F2(
	function (testFn, list) {
		var helper = F2(
			function (scattered, gathered) {
				if (!scattered.b) {
					return $elm$core$List$reverse(gathered);
				} else {
					var toGather = scattered.a;
					var population = scattered.b;
					var _v1 = A2(
						$elm$core$List$partition,
						testFn(toGather),
						population);
					var gathering = _v1.a;
					var remaining = _v1.b;
					return A2(
						helper,
						remaining,
						A2(
							$elm$core$List$cons,
							_Utils_Tuple2(toGather, gathering),
							gathered));
				}
			});
		return A2(helper, list, _List_Nil);
	});
var $elm_community$list_extra$List$Extra$gatherEquals = function (list) {
	return A2($elm_community$list_extra$List$Extra$gatherWith, $elm$core$Basics$eq, list);
};
var $author$project$Play$TypeChecker$unionOfTypeMatches = function (whenBranches) {
	var uniqueTypes = A2(
		$elm$core$List$map,
		$elm$core$Tuple$first,
		$elm_community$list_extra$List$Extra$gatherEquals(
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $author$project$Play$TypeChecker$extractTypeFromTypeMatch),
				whenBranches)));
	if (uniqueTypes.b && (!uniqueTypes.b.b)) {
		var singleType = uniqueTypes.a;
		return singleType;
	} else {
		return $author$project$Play$Data$Type$Union(uniqueTypes);
	}
};
var $author$project$Play$TypeChecker$Builtin = F2(
	function (a, b) {
		return {$: 'Builtin', a: a, b: b};
	});
var $author$project$Play$TypeChecker$ConstructType = function (a) {
	return {$: 'ConstructType', a: a};
};
var $author$project$Play$TypeChecker$GetMember = F3(
	function (a, b, c) {
		return {$: 'GetMember', a: a, b: b, c: c};
	});
var $author$project$Play$TypeChecker$IntLiteral = F2(
	function (a, b) {
		return {$: 'IntLiteral', a: a, b: b};
	});
var $author$project$Play$TypeChecker$SetMember = F3(
	function (a, b, c) {
		return {$: 'SetMember', a: a, b: b, c: c};
	});
var $author$project$Play$TypeChecker$Word = F3(
	function (a, b, c) {
		return {$: 'Word', a: a, b: b, c: c};
	});
var $author$project$Play$TypeChecker$WordRef = F2(
	function (a, b) {
		return {$: 'WordRef', a: a, b: b};
	});
var $author$project$Play$TypeChecker$untypedToTypedNode = F3(
	function (idx, context, untypedNode) {
		switch (untypedNode.$) {
			case 'Integer':
				var range = untypedNode.a;
				var num = untypedNode.b;
				return A2($author$project$Play$TypeChecker$IntLiteral, range, num);
			case 'Word':
				var range = untypedNode.a;
				var name = untypedNode.b;
				var _v1 = A2($elm$core$Dict$get, name, context.typedWords);
				if (_v1.$ === 'Just') {
					var def = _v1.a;
					var replaceGenericWithBoundValue = function (t) {
						var boundType = function () {
							var _v3 = A2($author$project$Play$TypeChecker$getGenericBinding, context, t);
							if (_v3.$ === 'Just') {
								var boundValue = _v3.a;
								return boundValue;
							} else {
								return t;
							}
						}();
						if (boundType.$ === 'Union') {
							var members = boundType.a;
							return $author$project$Play$Data$Type$Union(
								A2($elm$core$List$map, replaceGenericWithBoundValue, members));
						} else {
							return boundType;
						}
					};
					var resolvedWordType = {
						input: A2(
							$elm$core$List$map,
							A2(
								$elm$core$Basics$composeR,
								$author$project$Play$TypeChecker$tagGeneric(idx),
								replaceGenericWithBoundValue),
							def.type_.input),
						output: A2(
							$elm$core$List$map,
							A2(
								$elm$core$Basics$composeR,
								$author$project$Play$TypeChecker$tagGeneric(idx),
								replaceGenericWithBoundValue),
							def.type_.output)
					};
					return A3($author$project$Play$TypeChecker$Word, range, name, resolvedWordType);
				} else {
					return A3(
						$author$project$Play$TypeChecker$Word,
						range,
						name,
						A2(
							$elm$core$Maybe$withDefault,
							{input: _List_Nil, output: _List_Nil},
							A2(
								$elm$core$Maybe$andThen,
								A2(
									$elm$core$Basics$composeR,
									function ($) {
										return $.metadata;
									},
									A2(
										$elm$core$Basics$composeR,
										function ($) {
											return $.type_;
										},
										$author$project$Play$Data$TypeSignature$toMaybe)),
								A2($elm$core$Dict$get, name, context.untypedWords))));
				}
			case 'WordRef':
				var range = untypedNode.a;
				var ref = untypedNode.b;
				return A2($author$project$Play$TypeChecker$WordRef, range, ref);
			case 'ConstructType':
				var typeName = untypedNode.a;
				return $author$project$Play$TypeChecker$ConstructType(typeName);
			case 'SetMember':
				var typeName = untypedNode.a;
				var memberName = untypedNode.b;
				var _v4 = A3($author$project$Play$TypeChecker$getMemberType, context.types, typeName, memberName);
				if (_v4.$ === 'Just') {
					var memberType = _v4.a;
					return A3($author$project$Play$TypeChecker$SetMember, typeName, memberName, memberType);
				} else {
					return _Debug_todo(
						'Play.TypeChecker',
						{
							start: {line: 1518, column: 21},
							end: {line: 1518, column: 31}
						})('Inconcievable!');
				}
			case 'GetMember':
				var typeName = untypedNode.a;
				var memberName = untypedNode.b;
				var _v5 = A3($author$project$Play$TypeChecker$getMemberType, context.types, typeName, memberName);
				if (_v5.$ === 'Just') {
					var memberType = _v5.a;
					return A3($author$project$Play$TypeChecker$GetMember, typeName, memberName, memberType);
				} else {
					return _Debug_todo(
						'Play.TypeChecker',
						{
							start: {line: 1526, column: 21},
							end: {line: 1526, column: 31}
						})('Inconcievable!');
				}
			default:
				var range = untypedNode.a;
				var builtin = untypedNode.b;
				return A2($author$project$Play$TypeChecker$Builtin, range, builtin);
		}
	});
var $author$project$Play$TypeChecker$untypedToTypedImplementation = F2(
	function (context, impl) {
		var helper = F2(
			function (node, _v0) {
				var idx = _v0.a;
				var res = _v0.b;
				return _Utils_Tuple2(
					idx + 1,
					A2(
						$elm$core$List$cons,
						A3($author$project$Play$TypeChecker$untypedToTypedNode, idx, context, node),
						res));
			});
		return $elm$core$List$reverse(
			A3(
				$elm$core$List$foldl,
				helper,
				_Utils_Tuple2(0, _List_Nil),
				impl).b);
	});
var $author$project$Play$TypeChecker$Problem$TypeError = F4(
	function (a, b, c, d) {
		return {$: 'TypeError', a: a, b: b, c: c, d: d};
	});
var $elm$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2($elm$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});
var $elm$core$Set$diff = F2(
	function (_v0, _v1) {
		var dict1 = _v0.a;
		var dict2 = _v1.a;
		return $elm$core$Set$Set_elm_builtin(
			A2($elm$core$Dict$diff, dict1, dict2));
	});
var $elm$core$String$endsWith = _String_endsWith;
var $author$project$Play$Data$Type$sameCategory = F2(
	function (lhs, rhs) {
		var _v0 = _Utils_Tuple2(lhs, rhs);
		_v0$2:
		while (true) {
			switch (_v0.a.$) {
				case 'Quotation':
					if (_v0.b.$ === 'Quotation') {
						return true;
					} else {
						break _v0$2;
					}
				case 'Union':
					if (_v0.b.$ === 'Union') {
						return true;
					} else {
						break _v0$2;
					}
				default:
					break _v0$2;
			}
		}
		return _Utils_eq(lhs, rhs);
	});
var $author$project$Play$Data$Type$toString = function (t) {
	switch (t.$) {
		case 'Int':
			return 'Int';
		case 'Generic':
			var name = t.a;
			return name + '_Generic';
		case 'Custom':
			var name = t.a;
			return name + '_Custom';
		case 'CustomGeneric':
			var name = t.a;
			return name + '_Custom';
		case 'Union':
			return 'Union';
		case 'Quotation':
			return 'quot';
		default:
			var name = t.a;
			return name + '...';
	}
};
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $author$project$Play$Data$Type$compatibleTypeLists = F3(
	function (annotated, inferred, rangeDict) {
		compatibleTypeLists:
		while (true) {
			var _v0 = _Utils_Tuple2(annotated, inferred);
			_v0$1:
			while (true) {
				_v0$4:
				while (true) {
					_v0$5:
					while (true) {
						_v0$8:
						while (true) {
							_v0$11:
							while (true) {
								_v0$12:
								while (true) {
									_v0$13:
									while (true) {
										_v0$14:
										while (true) {
											if (!_v0.a.b) {
												if (!_v0.b.b) {
													return _Utils_Tuple2(rangeDict, true);
												} else {
													switch (_v0.b.a.$) {
														case 'StackRange':
															if (!_v0.b.b.b) {
																var _v4 = _v0.b;
																return _Utils_Tuple2(rangeDict, true);
															} else {
																break _v0$14;
															}
														case 'Union':
															break _v0$12;
														default:
															break _v0$14;
													}
												}
											} else {
												if (!_v0.b.b) {
													switch (_v0.a.a.$) {
														case 'StackRange':
															if (!_v0.a.b.b) {
																var _v3 = _v0.a;
																return _Utils_Tuple2(rangeDict, true);
															} else {
																break _v0$14;
															}
														case 'Union':
															break _v0$11;
														default:
															break _v0$14;
													}
												} else {
													switch (_v0.b.a.$) {
														case 'StackRange':
															if (!_v0.b.b.b) {
																switch (_v0.a.a.$) {
																	case 'StackRange':
																		break _v0$1;
																	case 'Union':
																		break _v0$4;
																	default:
																		break _v0$4;
																}
															} else {
																switch (_v0.a.a.$) {
																	case 'StackRange':
																		break _v0$1;
																	case 'Union':
																		break _v0$5;
																	default:
																		break _v0$5;
																}
															}
														case 'Quotation':
															switch (_v0.a.a.$) {
																case 'Quotation':
																	var _v10 = _v0.a;
																	var annotatedQuotType = _v10.a.a;
																	var annotatedRest = _v10.b;
																	var _v11 = _v0.b;
																	var inferredQuotType = _v11.a.a;
																	var inferredRest = _v11.b;
																	var applyRangeDict = F2(
																		function (rd, types) {
																			return A2(
																				$elm$core$List$concatMap,
																				function (type_) {
																					if (type_.$ === 'StackRange') {
																						var rangeName = type_.a;
																						var _v15 = A2($elm$core$Dict$get, rangeName, rd);
																						if (_v15.$ === 'Just') {
																							var subst = _v15.a;
																							return subst;
																						} else {
																							return _List_fromArray(
																								[type_]);
																						}
																					} else {
																						var other = type_;
																						return _List_fromArray(
																							[other]);
																					}
																				},
																				types);
																		});
																	var inferredInputRangeApplied = A2(applyRangeDict, rangeDict, inferredQuotType.input);
																	var inferredOutputRangeApplied = A2(applyRangeDict, rangeDict, inferredQuotType.output);
																	var annotatedOutputRangeApplied = A2(applyRangeDict, rangeDict, annotatedQuotType.output);
																	var annotatedInputRangeApplied = A2(applyRangeDict, rangeDict, annotatedQuotType.input);
																	var _v12 = A3($author$project$Play$Data$Type$compatibleTypeLists, annotatedInputRangeApplied, inferredInputRangeApplied, rangeDict);
																	var dictRangePostInputs = _v12.a;
																	var inputCompatible = _v12.b;
																	var _v13 = A3($author$project$Play$Data$Type$compatibleTypeLists, annotatedOutputRangeApplied, inferredOutputRangeApplied, dictRangePostInputs);
																	var dictRangePostOutputs = _v13.a;
																	var outputCompatible = _v13.b;
																	if (inputCompatible && outputCompatible) {
																		var $temp$annotated = annotatedRest,
																			$temp$inferred = inferredRest,
																			$temp$rangeDict = dictRangePostOutputs;
																		annotated = $temp$annotated;
																		inferred = $temp$inferred;
																		rangeDict = $temp$rangeDict;
																		continue compatibleTypeLists;
																	} else {
																		return _Utils_Tuple2(dictRangePostOutputs, false);
																	}
																case 'Union':
																	break _v0$11;
																default:
																	break _v0$13;
															}
														case 'Generic':
															switch (_v0.a.a.$) {
																case 'Generic':
																	var _v16 = _v0.a;
																	var annotatedRest = _v16.b;
																	var _v17 = _v0.b;
																	var inferredRest = _v17.b;
																	var $temp$annotated = annotatedRest,
																		$temp$inferred = inferredRest,
																		$temp$rangeDict = rangeDict;
																	annotated = $temp$annotated;
																	inferred = $temp$inferred;
																	rangeDict = $temp$rangeDict;
																	continue compatibleTypeLists;
																case 'Union':
																	break _v0$8;
																default:
																	break _v0$8;
															}
														case 'CustomGeneric':
															switch (_v0.a.a.$) {
																case 'CustomGeneric':
																	var _v20 = _v0.a;
																	var _v21 = _v20.a;
																	var lName = _v21.a;
																	var lMembers = _v21.b;
																	var annotatedRest = _v20.b;
																	var _v22 = _v0.b;
																	var _v23 = _v22.a;
																	var rName = _v23.a;
																	var rMembers = _v23.b;
																	var inferredRest = _v22.b;
																	var _v24 = A3($author$project$Play$Data$Type$compatibleTypeLists, lMembers, rMembers, $elm$core$Dict$empty);
																	var compatibleMembers = _v24.b;
																	if (_Utils_eq(lName, rName) && compatibleMembers) {
																		var $temp$annotated = annotatedRest,
																			$temp$inferred = inferredRest,
																			$temp$rangeDict = rangeDict;
																		annotated = $temp$annotated;
																		inferred = $temp$inferred;
																		rangeDict = $temp$rangeDict;
																		continue compatibleTypeLists;
																	} else {
																		return _Utils_Tuple2(rangeDict, false);
																	}
																case 'Union':
																	break _v0$11;
																default:
																	break _v0$13;
															}
														case 'Union':
															if (_v0.a.a.$ === 'Union') {
																var _v25 = _v0.a;
																var lMembers = _v25.a.a;
																var annotatedRest = _v25.b;
																var _v26 = _v0.b;
																var rMembers = _v26.a.a;
																var inferredRest = _v26.b;
																var rSet = $elm$core$Set$fromList(
																	A2($elm$core$List$map, $author$project$Play$Data$Type$toString, rMembers));
																var lSet = $elm$core$Set$fromList(
																	A2($elm$core$List$map, $author$project$Play$Data$Type$toString, lMembers));
																var diff = $elm$core$Set$toList(
																	A2($elm$core$Set$diff, rSet, lSet));
																if (!diff.b) {
																	var $temp$annotated = annotatedRest,
																		$temp$inferred = inferredRest,
																		$temp$rangeDict = rangeDict;
																	annotated = $temp$annotated;
																	inferred = $temp$inferred;
																	rangeDict = $temp$rangeDict;
																	continue compatibleTypeLists;
																} else {
																	if (!diff.b.b) {
																		var oneDiff = diff.a;
																		if (A2($elm$core$String$endsWith, '_Generic', oneDiff)) {
																			var $temp$annotated = annotatedRest,
																				$temp$inferred = inferredRest,
																				$temp$rangeDict = rangeDict;
																			annotated = $temp$annotated;
																			inferred = $temp$inferred;
																			rangeDict = $temp$rangeDict;
																			continue compatibleTypeLists;
																		} else {
																			return _Utils_Tuple2(rangeDict, false);
																		}
																	} else {
																		return _Utils_Tuple2(rangeDict, false);
																	}
																}
															} else {
																break _v0$12;
															}
														default:
															if (_v0.a.a.$ === 'Union') {
																break _v0$11;
															} else {
																break _v0$13;
															}
													}
												}
											}
										}
										return _Utils_Tuple2(rangeDict, false);
									}
									var _v30 = _v0.a;
									var annotatedEl = _v30.a;
									var annotatedRest = _v30.b;
									var _v31 = _v0.b;
									var inferredEl = _v31.a;
									var inferredRest = _v31.b;
									if (_Utils_eq(annotatedEl, inferredEl)) {
										var $temp$annotated = annotatedRest,
											$temp$inferred = inferredRest,
											$temp$rangeDict = rangeDict;
										annotated = $temp$annotated;
										inferred = $temp$inferred;
										rangeDict = $temp$rangeDict;
										continue compatibleTypeLists;
									} else {
										return _Utils_Tuple2(rangeDict, false);
									}
								}
								var _v29 = _v0.b;
								return _Utils_Tuple2(rangeDict, false);
							}
							var _v28 = _v0.a;
							return _Utils_Tuple2(rangeDict, false);
						}
						var _v18 = _v0.a;
						var annotatedRest = _v18.b;
						var _v19 = _v0.b;
						var inferredRest = _v19.b;
						var $temp$annotated = annotatedRest,
							$temp$inferred = inferredRest,
							$temp$rangeDict = rangeDict;
						annotated = $temp$annotated;
						inferred = $temp$inferred;
						rangeDict = $temp$rangeDict;
						continue compatibleTypeLists;
					}
					var _v7 = _v0.a;
					var annotatedEl = _v7.a;
					var annotatedRest = _v7.b;
					var _v8 = _v0.b;
					var rangeName = _v8.a.a;
					var _v9 = _v8.b;
					var inferredNext = _v9.a;
					var inferredRest = _v9.b;
					if (A2($author$project$Play$Data$Type$sameCategory, annotatedEl, inferredNext)) {
						var $temp$annotated = annotated,
							$temp$inferred = A2($elm$core$List$cons, inferredNext, inferredRest),
							$temp$rangeDict = rangeDict;
						annotated = $temp$annotated;
						inferred = $temp$inferred;
						rangeDict = $temp$rangeDict;
						continue compatibleTypeLists;
					} else {
						return A3(
							$author$project$Play$Data$Type$compatibleTypeLists,
							annotatedRest,
							inferred,
							A3(
								$elm$core$Dict$update,
								rangeName,
								function (maybeVal) {
									return $elm$core$Maybe$Just(
										function (existing) {
											return _Utils_ap(
												existing,
												_List_fromArray(
													[annotatedEl]));
										}(
											A2($elm$core$Maybe$withDefault, _List_Nil, maybeVal)));
								},
								rangeDict));
					}
				}
				var _v5 = _v0.a;
				var annotatedEl = _v5.a;
				var annotatedRest = _v5.b;
				var _v6 = _v0.b;
				var rangeName = _v6.a.a;
				return A3(
					$author$project$Play$Data$Type$compatibleTypeLists,
					annotatedRest,
					inferred,
					A3(
						$elm$core$Dict$update,
						rangeName,
						function (maybeVal) {
							return $elm$core$Maybe$Just(
								function (existing) {
									return _Utils_ap(
										existing,
										_List_fromArray(
											[annotatedEl]));
								}(
									A2($elm$core$Maybe$withDefault, _List_Nil, maybeVal)));
						},
						rangeDict));
			}
			var _v1 = _v0.a;
			var annotatedName = _v1.a.a;
			var annotatedRest = _v1.b;
			var _v2 = _v0.b;
			var inferredName = _v2.a.a;
			var inferredRest = _v2.b;
			if (_Utils_eq(annotatedName, inferredName)) {
				var $temp$annotated = annotatedRest,
					$temp$inferred = inferredRest,
					$temp$rangeDict = rangeDict;
				annotated = $temp$annotated;
				inferred = $temp$inferred;
				rangeDict = $temp$rangeDict;
				continue compatibleTypeLists;
			} else {
				return _Utils_Tuple2(rangeDict, false);
			}
		}
	});
var $author$project$Play$Data$Type$compatibleWords = F2(
	function (annotated, inferred) {
		var _v0 = A3($author$project$Play$Data$Type$compatibleTypeLists, annotated.input, inferred.input, $elm$core$Dict$empty);
		var inputRangeDict = _v0.a;
		var inputsCompatible = _v0.b;
		var _v1 = A3($author$project$Play$Data$Type$compatibleTypeLists, annotated.output, inferred.output, inputRangeDict);
		var outputsCompatible = _v1.b;
		return inputsCompatible && outputsCompatible;
	});
var $author$project$Play$TypeChecker$verifyTypeSignature = F3(
	function (inferredType, untypedDef, context) {
		var _v0 = $author$project$Play$Data$TypeSignature$toMaybe(untypedDef.metadata.type_);
		if (_v0.$ === 'Just') {
			var annotatedType = _v0.a;
			var _v1 = $author$project$Play$TypeChecker$simplifyWordType(
				_Utils_Tuple2(context, annotatedType));
			var simplifiedAnnotatedType = _v1.b;
			if (!A2($author$project$Play$Data$Type$compatibleWords, simplifiedAnnotatedType, inferredType)) {
				var range = A2($elm$core$Maybe$withDefault, $author$project$Play$Data$SourceLocation$emptyRange, untypedDef.metadata.sourceLocationRange);
				var problem = A4($author$project$Play$TypeChecker$Problem$TypeError, range, untypedDef.name, simplifiedAnnotatedType, inferredType);
				return _Utils_update(
					context,
					{
						errors: A2($elm$core$List$cons, problem, context.errors)
					});
			} else {
				return context;
			}
		} else {
			return context;
		}
	});
var $author$project$Play$TypeChecker$Problem$UnexpectedType = F4(
	function (a, b, c, d) {
		return {$: 'UnexpectedType', a: a, b: b, c: c, d: d};
	});
var $author$project$Play$TypeChecker$bindGeneric = F3(
	function (toBind, target, context) {
		if (toBind.$ === 'Generic') {
			var name = toBind.a;
			return _Utils_update(
				context,
				{
					boundGenerics: A3($elm$core$Dict$insert, name, target, context.boundGenerics)
				});
		} else {
			return context;
		}
	});
var $author$project$Play$TypeChecker$replaceStackRange = F2(
	function (boundRanges, types) {
		return A2(
			$elm$core$List$concatMap,
			function (t) {
				if (t.$ === 'StackRange') {
					var rangeName = t.a;
					return A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						A2($elm$core$Dict$get, rangeName, boundRanges));
				} else {
					var otherwise = t;
					return _List_fromArray(
						[otherwise]);
				}
			},
			types);
	});
var $author$project$Play$TypeChecker$bindStackRange = F4(
	function (context, actual, expected, bound) {
		bindStackRange:
		while (true) {
			var rangeUpdater = F2(
				function (existing, newType) {
					if (existing.$ === 'Just') {
						var vals = existing.a;
						return $elm$core$Maybe$Just(
							_Utils_ap(
								vals,
								_List_fromArray(
									[newType])));
					} else {
						return $elm$core$Maybe$Just(
							_List_fromArray(
								[newType]));
					}
				});
			var _v16 = _Utils_Tuple2(actual, expected);
			if (!_v16.a.b) {
				return bound;
			} else {
				if (!_v16.b.b) {
					return bound;
				} else {
					if ((_v16.b.a.$ === 'StackRange') && (!_v16.b.b.b)) {
						var _v17 = _v16.a;
						var afirst = _v17.a;
						var arest = _v17.b;
						var _v18 = _v16.b;
						var rangeName = _v18.a.a;
						var newBound = A3(
							$elm$core$Dict$update,
							rangeName,
							function (existing) {
								return A2(rangeUpdater, existing, afirst);
							},
							bound);
						var $temp$context = context,
							$temp$actual = arest,
							$temp$expected = expected,
							$temp$bound = newBound;
						context = $temp$context;
						actual = $temp$actual;
						expected = $temp$expected;
						bound = $temp$bound;
						continue bindStackRange;
					} else {
						var _v19 = _v16.a;
						var afirst = _v19.a;
						var arest = _v19.b;
						var _v20 = _v16.b;
						var bfirst = _v20.a;
						var brest = _v20.b;
						var _v21 = A3($author$project$Play$TypeChecker$compatibleTypes, context, afirst, bfirst);
						var newContext = _v21.a;
						var compatible = _v21.b;
						if (compatible) {
							var $temp$context = newContext,
								$temp$actual = arest,
								$temp$expected = brest,
								$temp$bound = bound;
							context = $temp$context;
							actual = $temp$actual;
							expected = $temp$expected;
							bound = $temp$bound;
							continue bindStackRange;
						} else {
							return bound;
						}
					}
				}
			}
		}
	});
var $author$project$Play$TypeChecker$compatibleTypes = F3(
	function (context, typeA, typeB) {
		var _v0 = _Utils_Tuple2(
			A2($author$project$Play$TypeChecker$getGenericBinding, context, typeA),
			A2($author$project$Play$TypeChecker$getGenericBinding, context, typeB));
		if (_v0.a.$ === 'Nothing') {
			if (_v0.b.$ === 'Just') {
				var _v1 = _v0.a;
				var boundB = _v0.b.a;
				return _Utils_Tuple2(
					A3($author$project$Play$TypeChecker$bindGeneric, typeA, boundB, context),
					true);
			} else {
				var _v3 = _v0.a;
				var _v4 = _v0.b;
				return _Utils_Tuple2(
					A3(
						$author$project$Play$TypeChecker$bindGeneric,
						typeB,
						typeA,
						A3($author$project$Play$TypeChecker$bindGeneric, typeA, typeB, context)),
					true);
			}
		} else {
			if (_v0.b.$ === 'Nothing') {
				var boundA = _v0.a.a;
				var _v2 = _v0.b;
				return _Utils_Tuple2(
					A3($author$project$Play$TypeChecker$bindGeneric, typeB, boundA, context),
					true);
			} else {
				var boundA = _v0.a.a;
				var boundB = _v0.b.a;
				if (_Utils_eq(boundA, boundB)) {
					return _Utils_Tuple2(context, true);
				} else {
					var _v5 = _Utils_Tuple2(boundA, boundB);
					_v5$2:
					while (true) {
						_v5$5:
						while (true) {
							switch (_v5.a.$) {
								case 'Union':
									if (_v5.b.$ === 'Union') {
										var leftUnion = _v5.a.a;
										var rightUnion = _v5.b.a;
										var lengthTest = _Utils_eq(
											$elm$core$List$length(leftUnion),
											$elm$core$List$length(rightUnion));
										var foldHelper = F2(
											function (_v7, _v8) {
												var lType = _v7.a;
												var rType = _v7.b;
												var ctx = _v8.a;
												var currValue = _v8.b;
												return (!currValue) ? _Utils_Tuple2(ctx, currValue) : A3($author$project$Play$TypeChecker$compatibleTypes, ctx, lType, rType);
											});
										var _v6 = A3(
											$elm$core$List$foldl,
											foldHelper,
											_Utils_Tuple2(context, true),
											A3($elm$core$List$map2, $elm$core$Tuple$pair, leftUnion, rightUnion));
										var newContext = _v6.a;
										var allMembersTest = _v6.b;
										return _Utils_Tuple2(newContext, lengthTest && allMembersTest);
									} else {
										return _Utils_Tuple2(context, false);
									}
								case 'CustomGeneric':
									switch (_v5.b.$) {
										case 'Union':
											break _v5$2;
										case 'CustomGeneric':
											var _v9 = _v5.a;
											var lName = _v9.a;
											var lMembers = _v9.b;
											var _v10 = _v5.b;
											var rName = _v10.a;
											var rMembers = _v10.b;
											var members = A3($elm$core$List$map2, $elm$core$Tuple$pair, lMembers, rMembers);
											var foldHelper = F2(
												function (_v12, acc) {
													var lType = _v12.a;
													var rType = _v12.b;
													var currCtx = acc.a;
													var isCompatible = acc.b;
													return (!isCompatible) ? acc : A3($author$project$Play$TypeChecker$compatibleTypes, currCtx, lType, rType);
												});
											var _v11 = A3(
												$elm$core$List$foldl,
												foldHelper,
												_Utils_Tuple2(context, true),
												members);
											var updatedContext = _v11.a;
											var compatible = _v11.b;
											return (_Utils_eq(lName, rName) && compatible) ? _Utils_Tuple2(updatedContext, true) : _Utils_Tuple2(context, false);
										default:
											break _v5$5;
									}
								case 'Quotation':
									switch (_v5.b.$) {
										case 'Union':
											break _v5$2;
										case 'Quotation':
											var lhs = _v5.a.a;
											var rhs = _v5.b.a;
											var foldHelper = F2(
												function (_v15, acc) {
													var lType = _v15.a;
													var rType = _v15.b;
													var currCtx = acc.a;
													var isCompatible = acc.b;
													return (!isCompatible) ? acc : A3($author$project$Play$TypeChecker$compatibleTypes, currCtx, lType, rType);
												});
											var boundRanges = A4(
												$author$project$Play$TypeChecker$bindStackRange,
												context,
												lhs.output,
												rhs.output,
												A4($author$project$Play$TypeChecker$bindStackRange, context, lhs.input, rhs.input, $elm$core$Dict$empty));
											var contextWithBoundRanges = _Utils_update(
												context,
												{
													boundStackRanges: A2($elm$core$Dict$union, context.boundStackRanges, boundRanges)
												});
											var actualOutputRequirement = A2($author$project$Play$TypeChecker$replaceStackRange, boundRanges, rhs.output);
											var actualInputRequirement = A2($author$project$Play$TypeChecker$replaceStackRange, boundRanges, rhs.input);
											var _v13 = A3(
												$elm$core$List$foldl,
												foldHelper,
												_Utils_Tuple2(contextWithBoundRanges, true),
												A3($elm$core$List$map2, $elm$core$Tuple$pair, lhs.input, actualInputRequirement));
											var contextAfterInputCheck = _v13.a;
											var inputsCompatible = _v13.b;
											var _v14 = A3(
												$elm$core$List$foldl,
												foldHelper,
												_Utils_Tuple2(contextAfterInputCheck, true),
												A3($elm$core$List$map2, $elm$core$Tuple$pair, lhs.output, actualOutputRequirement));
											var contextAfterOutputCheck = _v14.a;
											var outputsCompatible = _v14.b;
											return _Utils_Tuple2(contextAfterOutputCheck, inputsCompatible && outputsCompatible);
										default:
											break _v5$5;
									}
								default:
									if (_v5.b.$ === 'Union') {
										break _v5$2;
									} else {
										break _v5$5;
									}
							}
						}
						return _Utils_Tuple2(context, false);
					}
					var lhsType = _v5.a;
					var unionTypes = _v5.b.a;
					return A2(
						$elm$core$Maybe$withDefault,
						_Utils_Tuple2(context, false),
						A2(
							$elm_community$list_extra$List$Extra$find,
							$elm$core$Tuple$second,
							A2(
								$elm$core$List$map,
								A2($author$project$Play$TypeChecker$compatibleTypes, context, lhsType),
								unionTypes)));
				}
			}
		}
	});
var $author$project$Play$TypeChecker$wordTypeFromStackEffectsHelper = F3(
	function (untypedDef, effects, _v0) {
		wordTypeFromStackEffectsHelper:
		while (true) {
			var context = _v0.a;
			var wordType = _v0.b;
			var problem = F2(
				function (expected, actual) {
					return A4(
						$author$project$Play$TypeChecker$Problem$UnexpectedType,
						A2($elm$core$Maybe$withDefault, $author$project$Play$Data$SourceLocation$emptyRange, untypedDef.metadata.sourceLocationRange),
						untypedDef.name,
						expected,
						actual);
				});
			if (!effects.b) {
				return _Utils_Tuple2(
					context,
					_Utils_update(
						wordType,
						{
							input: wordType.input,
							output: $elm$core$List$reverse(wordType.output)
						}));
			} else {
				if (effects.a.$ === 'Pop') {
					if (effects.a.a.$ === 'StackRange') {
						var type_ = effects.a.a;
						var rangeName = type_.a;
						var remainingEffects = effects.b;
						var _v2 = A2($elm$core$Dict$get, rangeName, context.boundStackRanges);
						if (_v2.$ === 'Just') {
							var needToPop = _v2.a;
							var $temp$untypedDef = untypedDef,
								$temp$effects = _Utils_ap(
								A2($elm$core$List$map, $author$project$Play$TypeChecker$Pop, needToPop),
								remainingEffects),
								$temp$_v0 = _Utils_Tuple2(context, wordType);
							untypedDef = $temp$untypedDef;
							effects = $temp$effects;
							_v0 = $temp$_v0;
							continue wordTypeFromStackEffectsHelper;
						} else {
							var _v3 = wordType.output;
							if (!_v3.b) {
								return A3(
									$author$project$Play$TypeChecker$wordTypeFromStackEffectsHelper,
									untypedDef,
									remainingEffects,
									_Utils_Tuple2(
										context,
										_Utils_update(
											wordType,
											{
												input: A2($elm$core$List$cons, type_, wordType.input)
											})));
							} else {
								var availableType = _v3.a;
								var remainingOutput = _v3.b;
								return (!_Utils_eq(availableType, type_)) ? _Utils_Tuple2(
									_Utils_update(
										context,
										{
											errors: A2(
												$elm$core$List$cons,
												A2(problem, type_, availableType),
												context.errors)
										}),
									wordType) : _Utils_Tuple2(
									context,
									_Utils_update(
										wordType,
										{output: remainingOutput}));
							}
						}
					} else {
						var type_ = effects.a.a;
						var remainingEffects = effects.b;
						var _v4 = wordType.output;
						if (!_v4.b) {
							return A3(
								$author$project$Play$TypeChecker$wordTypeFromStackEffectsHelper,
								untypedDef,
								remainingEffects,
								_Utils_Tuple2(
									context,
									_Utils_update(
										wordType,
										{
											input: A2($elm$core$List$cons, type_, wordType.input)
										})));
						} else {
							var availableType = _v4.a;
							var remainingOutput = _v4.b;
							var _v5 = A3($author$project$Play$TypeChecker$compatibleTypes, context, availableType, type_);
							var newContext = _v5.a;
							var compatible = _v5.b;
							return (!compatible) ? _Utils_Tuple2(
								_Utils_update(
									newContext,
									{
										errors: A2(
											$elm$core$List$cons,
											A2(problem, type_, availableType),
											context.errors)
									}),
								wordType) : A3(
								$author$project$Play$TypeChecker$wordTypeFromStackEffectsHelper,
								untypedDef,
								remainingEffects,
								_Utils_Tuple2(
									newContext,
									_Utils_update(
										wordType,
										{output: remainingOutput})));
						}
					}
				} else {
					if (effects.a.a.$ === 'StackRange') {
						var type_ = effects.a.a;
						var rangeName = type_.a;
						var remainingEffects = effects.b;
						var _v6 = A2($elm$core$Dict$get, rangeName, context.boundStackRanges);
						if (_v6.$ === 'Just') {
							var range = _v6.a;
							var $temp$untypedDef = untypedDef,
								$temp$effects = _Utils_ap(
								A2($elm$core$List$map, $author$project$Play$TypeChecker$Push, range),
								remainingEffects),
								$temp$_v0 = _Utils_Tuple2(context, wordType);
							untypedDef = $temp$untypedDef;
							effects = $temp$effects;
							_v0 = $temp$_v0;
							continue wordTypeFromStackEffectsHelper;
						} else {
							return A3(
								$author$project$Play$TypeChecker$wordTypeFromStackEffectsHelper,
								untypedDef,
								remainingEffects,
								_Utils_Tuple2(
									context,
									_Utils_update(
										wordType,
										{
											output: A2($elm$core$List$cons, type_, wordType.output)
										})));
						}
					} else {
						var type_ = effects.a.a;
						var remainingEffects = effects.b;
						return A3(
							$author$project$Play$TypeChecker$wordTypeFromStackEffectsHelper,
							untypedDef,
							remainingEffects,
							_Utils_Tuple2(
								context,
								_Utils_update(
									wordType,
									{
										output: A2($elm$core$List$cons, type_, wordType.output)
									})));
					}
				}
			}
		}
	});
var $author$project$Play$TypeChecker$wordTypeFromStackEffects = F2(
	function (untypedDef, context) {
		return A3(
			$author$project$Play$TypeChecker$wordTypeFromStackEffectsHelper,
			untypedDef,
			context.stackEffects,
			_Utils_Tuple2(
				context,
				{input: _List_Nil, output: _List_Nil}));
	});
var $author$project$Play$TypeChecker$wordTypeToStackEffects = function (wordType) {
	return _Utils_ap(
		A2(
			$elm$core$List$map,
			$author$project$Play$TypeChecker$Pop,
			$elm$core$List$reverse(wordType.input)),
		A2($elm$core$List$map, $author$project$Play$TypeChecker$Push, wordType.output));
};
var $author$project$Play$TypeChecker$inferWhenTypes = F3(
	function (untypedDef, _v37, _v38) {
		var im = _v37.b;
		var infs = _v38.a;
		var ctx = _v38.b;
		var _v39 = A3(
			$author$project$Play$TypeChecker$typeCheckImplementation,
			untypedDef,
			im,
			$author$project$Play$TypeChecker$cleanContext(ctx));
		var inf = _v39.a;
		var newCtx = _v39.b;
		return _Utils_Tuple2(
			A2($elm$core$List$cons, inf, infs),
			newCtx);
	});
var $author$project$Play$TypeChecker$typeCheckDefinition = F2(
	function (untypedDef, context) {
		var _v35 = A2($elm$core$Dict$get, untypedDef.name, context.typedWords);
		if (_v35.$ === 'Just') {
			return $author$project$Play$TypeChecker$cleanContext(context);
		} else {
			var _v36 = untypedDef.implementation;
			if (_v36.$ === 'SoloImpl') {
				var impl = _v36.a;
				return A3($author$project$Play$TypeChecker$typeCheckSoloImplementation, context, untypedDef, impl);
			} else {
				var initialWhens = _v36.a;
				var defaultImpl = _v36.b;
				return A4($author$project$Play$TypeChecker$typeCheckMultiImplementation, context, untypedDef, initialWhens, defaultImpl);
			}
		}
	});
var $author$project$Play$TypeChecker$typeCheckImplementation = F3(
	function (untypedDef, impl, context) {
		var reverseWordType = function (wt) {
			return {input: _List_Nil, output: wt.input};
		};
		var startingStackEffects = $author$project$Play$TypeChecker$wordTypeToStackEffects(
			A2(
				$elm$core$Maybe$withDefault,
				$author$project$Play$Data$Type$emptyWordType,
				A2(
					$elm$core$Maybe$map,
					reverseWordType,
					$author$project$Play$Data$TypeSignature$toMaybe(untypedDef.metadata.type_))));
		var contextWithCall = _Utils_update(
			context,
			{
				callStack: A2($elm$core$Set$insert, untypedDef.name, context.callStack),
				stackEffects: startingStackEffects
			});
		var annotatedInput = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.input;
				},
				$author$project$Play$Data$TypeSignature$toMaybe(untypedDef.metadata.type_)));
		var _v31 = A3(
			$elm$core$List$foldl,
			F2(
				function (node, _v32) {
					var idx = _v32.a;
					var ctx = _v32.b;
					return _Utils_Tuple2(
						idx + 1,
						A3($author$project$Play$TypeChecker$typeCheckNode, idx, node, ctx));
				}),
			_Utils_Tuple2(0, contextWithCall),
			impl);
		var contextWithStackEffects = _v31.b;
		var contextWithoutCall = _Utils_update(
			contextWithStackEffects,
			{
				callStack: A2($elm$core$Set$remove, untypedDef.name, contextWithStackEffects.callStack)
			});
		return function (_v34) {
			var a = _v34.a;
			var b = _v34.b;
			return _Utils_Tuple2(b, a);
		}(
			$author$project$Play$TypeChecker$simplifyWordType(
				function (_v33) {
					var ctx = _v33.a;
					var wt = _v33.b;
					return _Utils_Tuple2(
						ctx,
						_Utils_update(
							wt,
							{
								input: _Utils_ap(wt.input, annotatedInput)
							}));
				}(
					A2($author$project$Play$TypeChecker$wordTypeFromStackEffects, untypedDef, contextWithoutCall))));
	});
var $author$project$Play$TypeChecker$typeCheckMultiImplementation = F4(
	function (context, untypedDef, initialWhens, defaultImpl) {
		var untypedDefMetadata = untypedDef.metadata;
		var untypedDefNoTypeAnnotation = _Utils_update(
			untypedDef,
			{
				metadata: _Utils_update(
					untypedDefMetadata,
					{type_: $author$project$Play$Data$TypeSignature$NotProvided})
			});
		var whens = function () {
			if (!defaultImpl.b) {
				return initialWhens;
			} else {
				var _v29 = A3(
					$author$project$Play$TypeChecker$typeCheckImplementation,
					untypedDefNoTypeAnnotation,
					defaultImpl,
					$author$project$Play$TypeChecker$cleanContext(context));
				var inferredDefaultType = _v29.a;
				var _v30 = inferredDefaultType.input;
				if (!_v30.b) {
					return _Debug_todo(
						'Play.TypeChecker',
						{
							start: {line: 252, column: 29},
							end: {line: 252, column: 39}
						})('Default impl doesn\'t have an input argument');
				} else {
					var firstType = _v30.a;
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							A3($author$project$Play$Qualifier$TypeMatch, $author$project$Play$Data$SourceLocation$emptyRange, firstType, _List_Nil),
							defaultImpl),
						initialWhens);
				}
			}
		}();
		var whenPatterns = A2($elm$core$List$map, $elm$core$Tuple$first, whens);
		var typeCheckWhen = function (_v26) {
			var _v27 = _v26.a;
			var forType = _v27.b;
			var inf = _v26.b;
			var _v25 = inf.input;
			if (_v25.b) {
				var firstInput = _v25.a;
				return A2($author$project$Play$Data$Type$genericlyCompatible, firstInput, forType);
			} else {
				return false;
			}
		};
		var stripFirstInput = function (inf) {
			return _Utils_update(
				inf,
				{
					input: A2($elm$core$List$drop, 1, inf.input)
				});
		};
		var replaceType = F3(
			function (type_, _with, el) {
				switch (el.$) {
					case 'CustomGeneric':
						var name = el.a;
						var members = el.b;
						return A2(
							$author$project$Play$Data$Type$CustomGeneric,
							name,
							A2(
								$elm$core$List$map,
								A2(replaceType, type_, _with),
								members));
					case 'Union':
						var members = el.a;
						return $author$project$Play$Data$Type$Union(
							A2(
								$elm$core$List$map,
								A2(replaceType, type_, _with),
								members));
					case 'Quotation':
						var quotType = el.a;
						return $author$project$Play$Data$Type$Quotation(
							{
								input: A2(
									$elm$core$List$map,
									A2(replaceType, type_, _with),
									quotType.input),
								output: A2(
									$elm$core$List$map,
									A2(replaceType, type_, _with),
									quotType.output)
							});
					default:
						return _Utils_eq(type_, el) ? _with : el;
				}
			});
		var replaceFirstTypeWithPatternMatch = function (_v23) {
			var _v24 = _v23.a;
			var matchType = _v24.b;
			var typeSignature = _v23.b;
			var _v22 = typeSignature.input;
			_v22$2:
			while (true) {
				if (_v22.b) {
					switch (_v22.a.$) {
						case 'Generic':
							var toReplace = _v22.a;
							return {
								input: A2(
									$elm$core$List$map,
									A2(replaceType, toReplace, matchType),
									typeSignature.input),
								output: A2(
									$elm$core$List$map,
									A2(replaceType, toReplace, matchType),
									typeSignature.output)
							};
						case 'StackRange':
							var toReplace = _v22.a;
							return {
								input: A2(
									$elm$core$List$map,
									A2(replaceType, toReplace, matchType),
									typeSignature.input),
								output: A2(
									$elm$core$List$map,
									A2(replaceType, toReplace, matchType),
									typeSignature.output)
							};
						default:
							break _v22$2;
					}
				} else {
					break _v22$2;
				}
			}
			return typeSignature;
		};
		var maybeInexhaustiveError = A2(
			$author$project$Play$TypeChecker$inexhaustivenessCheck,
			A2($elm$core$Maybe$withDefault, $author$project$Play$Data$SourceLocation$emptyRange, untypedDef.metadata.sourceLocationRange),
			whenPatterns);
		var countOutput = function (wordType) {
			return _Utils_Tuple2(
				wordType.input,
				$elm$core$List$length(wordType.output));
		};
		var compatibleTypeList = F2(
			function (aLs, bLs) {
				return A2(
					$elm$core$List$all,
					$elm$core$Basics$identity,
					A3($elm$core$List$map2, $author$project$Play$Data$Type$genericlyCompatible, aLs, bLs));
			});
		var areAllEqual = function (ls) {
			if (!ls.b) {
				return true;
			} else {
				var _v20 = ls.a;
				var fTypes = _v20.a;
				var fCnt = _v20.b;
				var rest = ls.b;
				return A2(
					$elm$core$List$all,
					function (_v21) {
						var nTypes = _v21.a;
						var nCnt = _v21.b;
						return _Utils_eq(fCnt, nCnt) && A2(compatibleTypeList, fTypes, nTypes);
					},
					rest);
			}
		};
		var _v17 = A2(
			$elm$core$Tuple$mapFirst,
			function (whenTypes) {
				return A2(
					$elm$core$List$map,
					$author$project$Play$TypeChecker$constrainGenerics(untypedDef.metadata.type_),
					whenTypes);
			},
			A2(
				$elm$core$Tuple$mapFirst,
				$author$project$Play$TypeChecker$equalizeWhenTypes,
				A2(
					$elm$core$Tuple$mapFirst,
					A2(
						$elm$core$Basics$composeR,
						A2($elm$core$List$map2, $elm$core$Tuple$pair, whenPatterns),
						$elm$core$List$map(replaceFirstTypeWithPatternMatch)),
					function (_v18) {
						var wts = _v18.a;
						var ctx = _v18.b;
						return A2($author$project$Play$TypeChecker$simplifyWhenWordTypes, wts, ctx);
					}(
						A2(
							$elm$core$Tuple$mapFirst,
							$author$project$Play$TypeChecker$normalizeWhenTypes,
							A3(
								$elm$core$List$foldr,
								$author$project$Play$TypeChecker$inferWhenTypes(untypedDefNoTypeAnnotation),
								_Utils_Tuple2(_List_Nil, context),
								whens))))));
		var inferredWhenTypes = _v17.a;
		var newContext = _v17.b;
		var inferredType = A2(
			$author$project$Play$TypeChecker$joinOutputs,
			A2(
				$elm$core$List$map,
				function ($) {
					return $.output;
				},
				inferredWhenTypes),
			A2(
				$author$project$Play$TypeChecker$replaceFirstType,
				$author$project$Play$TypeChecker$unionOfTypeMatches(whens),
				A2(
					$elm$core$Maybe$withDefault,
					{input: _List_Nil, output: _List_Nil},
					$elm$core$List$head(inferredWhenTypes))));
		var exposedType = A2(
			$elm$core$Maybe$withDefault,
			inferredType,
			$author$project$Play$Data$TypeSignature$toMaybe(untypedDef.metadata.type_));
		var whensAreCompatible = areAllEqual(
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, stripFirstInput, countOutput),
				inferredWhenTypes));
		var whensAreConsistent = A2(
			$elm$core$List$all,
			typeCheckWhen,
			A3($elm$core$List$map2, $elm$core$Tuple$pair, whenPatterns, inferredWhenTypes));
		var maybeConsistencyError = function () {
			if (whensAreConsistent && whensAreCompatible) {
				return $elm$core$Maybe$Nothing;
			} else {
				var error = A2(
					$author$project$Play$TypeChecker$Problem$InconsistentWhens,
					A2($elm$core$Maybe$withDefault, $author$project$Play$Data$SourceLocation$emptyRange, untypedDef.metadata.sourceLocationRange),
					untypedDef.name);
				return $elm$core$Maybe$Just(error);
			}
		}();
		var finalContext = _Utils_update(
			newContext,
			{
				errors: _Utils_ap(
					A2(
						$elm$core$List$filterMap,
						$elm$core$Basics$identity,
						_List_fromArray(
							[maybeConsistencyError, maybeInexhaustiveError])),
					newContext.errors),
				typedWords: A3(
					$elm$core$Dict$insert,
					untypedDef.name,
					{
						implementation: A2(
							$author$project$Play$TypeChecker$MultiImpl,
							A2(
								$elm$core$List$map,
								A2(
									$elm$core$Tuple$mapBoth,
									$author$project$Play$TypeChecker$mapTypeMatch,
									$author$project$Play$TypeChecker$untypedToTypedImplementation(newContext)),
								initialWhens),
							A2($author$project$Play$TypeChecker$untypedToTypedImplementation, newContext, defaultImpl)),
						metadata: untypedDef.metadata,
						name: untypedDef.name,
						type_: exposedType
					},
					newContext.typedWords)
			});
		return $author$project$Play$TypeChecker$cleanContext(
			A3($author$project$Play$TypeChecker$verifyTypeSignature, inferredType, untypedDef, finalContext));
	});
var $author$project$Play$TypeChecker$typeCheckNode = F3(
	function (idx, node, context) {
		var addStackEffect = F2(
			function (ctx, effects) {
				return _Utils_update(
					ctx,
					{
						stackEffects: _Utils_ap(
							ctx.stackEffects,
							A2(
								$elm$core$List$map,
								$author$project$Play$TypeChecker$tagGenericEffect(idx),
								effects))
					});
			});
		switch (node.$) {
			case 'Integer':
				return A2(
					addStackEffect,
					context,
					_List_fromArray(
						[
							$author$project$Play$TypeChecker$Push($author$project$Play$Data$Type$Int)
						]));
			case 'Word':
				var name = node.b;
				var _v2 = A2($elm$core$Dict$get, name, context.typedWords);
				if (_v2.$ === 'Just') {
					var def = _v2.a;
					return A2(
						addStackEffect,
						context,
						$author$project$Play$TypeChecker$wordTypeToStackEffects(def.type_));
				} else {
					var _v3 = A2($elm$core$Dict$get, name, context.untypedWords);
					if (_v3.$ === 'Nothing') {
						return _Debug_todo(
							'Play.TypeChecker',
							{
								start: {line: 878, column: 29},
								end: {line: 878, column: 39}
							})('inconcievable!');
					} else {
						var untypedDef = _v3.a;
						if (A2($elm$core$Set$member, name, context.callStack)) {
							var _v4 = $author$project$Play$Data$TypeSignature$toMaybe(untypedDef.metadata.type_);
							if (_v4.$ === 'Just') {
								var annotatedType = _v4.a;
								return A2(
									addStackEffect,
									context,
									$author$project$Play$TypeChecker$wordTypeToStackEffects(annotatedType));
							} else {
								var problem = A2(
									$author$project$Play$TypeChecker$Problem$MissingTypeAnnotationInRecursiveCallStack,
									A2($elm$core$Maybe$withDefault, $author$project$Play$Data$SourceLocation$emptyRange, untypedDef.metadata.sourceLocationRange),
									untypedDef.name);
								return _Utils_update(
									context,
									{
										errors: A2($elm$core$List$cons, problem, context.errors)
									});
							}
						} else {
							var contextWithTypedDef = A2($author$project$Play$TypeChecker$typeCheckDefinition, untypedDef, context);
							var newContext = _Utils_update(
								contextWithTypedDef,
								{stackEffects: context.stackEffects});
							var _v5 = A2($elm$core$Dict$get, name, newContext.typedWords);
							if (_v5.$ === 'Nothing') {
								return _Debug_todo(
									'Play.TypeChecker',
									{
										start: {line: 906, column: 41},
										end: {line: 906, column: 51}
									})('inconcievable!');
							} else {
								var def = _v5.a;
								return A2(
									addStackEffect,
									newContext,
									$author$project$Play$TypeChecker$wordTypeToStackEffects(def.type_));
							}
						}
					}
				}
			case 'WordRef':
				var loc = node.a;
				var ref = node.b;
				var stackEffectsBeforeWordCheck = context.stackEffects;
				var contextAfterWordCheck = A3(
					$author$project$Play$TypeChecker$typeCheckNode,
					idx,
					A2($author$project$Play$Qualifier$Word, loc, ref),
					context);
				var newContext = _Utils_update(
					contextAfterWordCheck,
					{stackEffects: stackEffectsBeforeWordCheck});
				var _v6 = A2($elm$core$Dict$get, ref, newContext.typedWords);
				if (_v6.$ === 'Just') {
					var def = _v6.a;
					return A2(
						addStackEffect,
						newContext,
						_List_fromArray(
							[
								$author$project$Play$TypeChecker$Push(
								$author$project$Play$Data$Type$Quotation(def.type_))
							]));
				} else {
					return _Debug_todo(
						'Play.TypeChecker',
						{
							start: {line: 928, column: 21},
							end: {line: 928, column: 31}
						})('inconcievable!');
				}
			case 'ConstructType':
				var typeName = node.a;
				var _v7 = A2($elm$core$Dict$get, typeName, context.types);
				if ((_v7.$ === 'Just') && (_v7.a.$ === 'CustomTypeDef')) {
					var _v8 = _v7.a;
					var members = _v8.d;
					var memberTypes = A2($elm$core$List$map, $elm$core$Tuple$second, members);
					var genericMembers = A2($elm$core$List$filter, $author$project$Play$Data$Type$isGeneric, memberTypes);
					var typeInQuestion = function () {
						if (!genericMembers.b) {
							return $author$project$Play$Data$Type$Custom(typeName);
						} else {
							return A2($author$project$Play$Data$Type$CustomGeneric, typeName, genericMembers);
						}
					}();
					return A2(
						addStackEffect,
						context,
						$author$project$Play$TypeChecker$wordTypeToStackEffects(
							{
								input: memberTypes,
								output: _List_fromArray(
									[typeInQuestion])
							}));
				} else {
					var other = _v7;
					return _Debug_todo(
						'Play.TypeChecker',
						{
							start: {line: 955, column: 21},
							end: {line: 955, column: 31}
						})(
						'inconcievable: ' + (typeName + (': ' + $elm$core$Debug$toString(other))));
				}
			case 'SetMember':
				var typeName = node.a;
				var memberName = node.b;
				var _v10 = _Utils_Tuple2(
					A2($elm$core$Dict$get, typeName, context.types),
					A3($author$project$Play$TypeChecker$getMemberType, context.types, typeName, memberName));
				if (((_v10.a.$ === 'Just') && (_v10.a.a.$ === 'CustomTypeDef')) && (_v10.b.$ === 'Just')) {
					var _v11 = _v10.a.a;
					var members = _v11.d;
					var memberType = _v10.b.a;
					var memberTypes = A2($elm$core$List$map, $elm$core$Tuple$second, members);
					var genericMembers = A2($elm$core$List$filter, $author$project$Play$Data$Type$isGeneric, memberTypes);
					var typeInQuestion = function () {
						if (!genericMembers.b) {
							return $author$project$Play$Data$Type$Custom(typeName);
						} else {
							return A2($author$project$Play$Data$Type$CustomGeneric, typeName, genericMembers);
						}
					}();
					return A2(
						addStackEffect,
						context,
						$author$project$Play$TypeChecker$wordTypeToStackEffects(
							{
								input: _List_fromArray(
									[typeInQuestion, memberType]),
								output: _List_fromArray(
									[typeInQuestion])
							}));
				} else {
					var other = _v10;
					return _Debug_todo(
						'Play.TypeChecker',
						{
							start: {line: 986, column: 21},
							end: {line: 986, column: 31}
						})(
						'inconcievable! ' + $elm$core$Debug$toString(other));
				}
			case 'GetMember':
				var typeName = node.a;
				var memberName = node.b;
				var _v13 = _Utils_Tuple2(
					A2($elm$core$Dict$get, typeName, context.types),
					A3($author$project$Play$TypeChecker$getMemberType, context.types, typeName, memberName));
				if (((_v13.a.$ === 'Just') && (_v13.a.a.$ === 'CustomTypeDef')) && (_v13.b.$ === 'Just')) {
					var _v14 = _v13.a.a;
					var members = _v14.d;
					var memberType = _v13.b.a;
					var memberTypes = A2($elm$core$List$map, $elm$core$Tuple$second, members);
					var genericMembers = A2($elm$core$List$filter, $author$project$Play$Data$Type$isGeneric, memberTypes);
					var typeInQuestion = function () {
						if (!genericMembers.b) {
							return $author$project$Play$Data$Type$Custom(typeName);
						} else {
							return A2($author$project$Play$Data$Type$CustomGeneric, typeName, genericMembers);
						}
					}();
					return A2(
						addStackEffect,
						context,
						$author$project$Play$TypeChecker$wordTypeToStackEffects(
							{
								input: _List_fromArray(
									[typeInQuestion]),
								output: _List_fromArray(
									[memberType])
							}));
				} else {
					return _Debug_todo(
						'Play.TypeChecker',
						{
							start: {line: 1017, column: 21},
							end: {line: 1017, column: 31}
						})('inconcievable!');
				}
			default:
				var builtin = node.b;
				return A2(
					addStackEffect,
					context,
					$author$project$Play$TypeChecker$wordTypeToStackEffects(
						$author$project$Play$Data$Builtin$wordType(builtin)));
		}
	});
var $author$project$Play$TypeChecker$typeCheckSoloImplementation = F3(
	function (context, untypedDef, impl) {
		var _v0 = A3(
			$author$project$Play$TypeChecker$typeCheckImplementation,
			untypedDef,
			impl,
			$author$project$Play$TypeChecker$cleanContext(context));
		var inferredType = _v0.a;
		var newContext = _v0.b;
		var finalContext = _Utils_update(
			newContext,
			{
				typedWords: A3(
					$elm$core$Dict$insert,
					untypedDef.name,
					{
						implementation: $author$project$Play$TypeChecker$SoloImpl(
							A2($author$project$Play$TypeChecker$untypedToTypedImplementation, newContext, impl)),
						metadata: untypedDef.metadata,
						name: untypedDef.name,
						type_: A2(
							$elm$core$Maybe$withDefault,
							inferredType,
							$author$project$Play$Data$TypeSignature$toMaybe(untypedDef.metadata.type_))
					},
					newContext.typedWords)
			});
		return $author$project$Play$TypeChecker$cleanContext(
			A3($author$project$Play$TypeChecker$verifyTypeSignature, inferredType, untypedDef, finalContext));
	});
var $author$project$Play$TypeChecker$typeCheckHelper = F2(
	function (context, ast) {
		var updatedContext = A3(
			$elm$core$Dict$foldl,
			F3(
				function (_v0, v, acc) {
					return A2($author$project$Play$TypeChecker$typeCheckDefinition, v, acc);
				}),
			context,
			ast.words);
		return $elm$core$List$isEmpty(updatedContext.errors) ? $elm$core$Result$Ok(
			{types: updatedContext.types, words: updatedContext.typedWords}) : $elm$core$Result$Err(updatedContext.errors);
	});
var $author$project$Play$TypeChecker$run = function (ast) {
	return A2(
		$author$project$Play$TypeChecker$typeCheckHelper,
		$author$project$Play$TypeChecker$initContext(ast),
		ast);
};
var $elm$core$String$lines = _String_lines;
var $elm$core$String$trim = _String_trim;
var $author$project$Play$Data$SourceLocation$extractFromString = F2(
	function (sourceCode, range) {
		return A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$indexedMap,
				F2(
					function (i, l) {
						return $elm$core$String$fromInt(range.start.row + i) + (' | ' + l);
					}),
				$elm$core$String$lines(
					$elm$core$String$trim(
						A3($elm$core$String$slice, range.start.offset, range.end.offset, sourceCode)))));
	});
var $author$project$Play$Data$SourceLocation$toString = function (location) {
	return $elm$core$String$fromInt(location.row) + (':' + $elm$core$String$fromInt(location.col));
};
var $author$project$Play$Parser$Problem$toString = F2(
	function (source, problem) {
		switch (problem.$) {
			case 'NotInt':
				return 'this is not an integer';
			case 'NotSymbol':
				return 'this is not a symbol';
			case 'NotMetadata':
				return 'this is not metadata';
			case 'NotGeneric':
				return 'this is not a generic variable';
			case 'NotType':
				return 'this is not a type';
			case 'NoProblem':
				return 'not sure how we got this error';
			case 'FoundMetadata':
				return 'found metadata where we did not expect too';
			case 'ExpectedLeftParen':
				return 'expected an opening parenthesis';
			case 'ExpectedRightParen':
				return 'expected an closing parenthesis';
			case 'ExpectedEnd':
				return 'expected end of file';
			case 'ExpectedTypeSeperator':
				return 'expected type seperator';
			case 'ExpectedLeftBracket':
				return 'expected opening bracket';
			case 'ExpectedRightBracket':
				return 'expected closing brakcet';
			case 'WordAlreadyDefined':
				var wordName = problem.a;
				var maybePreviousDefinitionRange = problem.b;
				var maybeDefinitionRange = problem.c;
				var definitionRange = A2($elm$core$Maybe$withDefault, $author$project$Play$Data$SourceLocation$emptyRange, maybeDefinitionRange);
				if (maybePreviousDefinitionRange.$ === 'Nothing') {
					return $author$project$Play$Data$SourceLocation$toString(definitionRange.start) + (': You\'re trying to define a new word called \'' + (wordName + '\', but this word has already been defined.'));
				} else {
					var previousDefinitionRange = maybePreviousDefinitionRange.a;
					return $author$project$Play$Data$SourceLocation$toString(definitionRange.start) + (': You\'re trying to define a new word called \'' + (wordName + ('\', but this word has already been defined here:\n\n' + A2($author$project$Play$Data$SourceLocation$extractFromString, source, previousDefinitionRange))));
				}
			case 'TypeAlreadyDefined':
				var typeName = problem.a;
				var previousDefinitionRange = problem.b;
				var definitionRange = problem.c;
				return $author$project$Play$Data$SourceLocation$toString(definitionRange.start) + (': You\'re trying to define a new type called \'' + (typeName + ('\', but this type has already been defined here:\n\n' + A2($author$project$Play$Data$SourceLocation$extractFromString, source, previousDefinitionRange))));
			default:
				var meta = problem.a;
				return meta + ' is not a known metadata label.';
		}
	});
var $author$project$Play$Qualifier$Problem$toString = F2(
	function (source, problem) {
		switch (problem.$) {
			case 'UnknownWordRef':
				var range = problem.a;
				var wordRef = problem.b;
				return A2($author$project$Play$Data$SourceLocation$extractFromString, source, range) + ('\n\n' + ('No such word: \'' + (wordRef + '\'.')));
			case 'UnknownTypeRef':
				var range = problem.a;
				var typeRef = problem.b;
				return A2($author$project$Play$Data$SourceLocation$extractFromString, source, range) + ('\n\n' + ('No such type: \'' + (typeRef + '\'.')));
			case 'UnionTypeMatchWithPatterns':
				var range = problem.a;
				return A2($author$project$Play$Data$SourceLocation$extractFromString, source, range) + ('\n\n' + 'Union types cannot have sub-patterns.');
			case 'InvalidTypeMatch':
				var range = problem.a;
				return A2($author$project$Play$Data$SourceLocation$extractFromString, source, range) + ('\n\n' + 'This is not a valid pattern match. Pattern matches look like Type( <member> <value> ).');
			default:
				var range = problem.a;
				var typeName = problem.b;
				var member = problem.c;
				return A2($author$project$Play$Data$SourceLocation$extractFromString, source, range) + ('\n\n' + (typeName + (' does not have a member called \'' + (member + '\'.'))));
		}
	});
var $author$project$Play$Data$Type$toDisplayString = function (t) {
	switch (t.$) {
		case 'Int':
			return 'Int';
		case 'Generic':
			var name = t.a;
			return name;
		case 'Custom':
			var name = t.a;
			return name;
		case 'CustomGeneric':
			var name = t.a;
			return name;
		case 'Union':
			return 'Union';
		case 'Quotation':
			var quotType = t.a;
			return '[ ' + ($author$project$Play$Data$Type$wordTypeToString(quotType) + ' ]');
		default:
			var name = t.a;
			return name + '...';
	}
};
var $author$project$Play$Data$Type$wordTypeToString = function (wordType) {
	var outputTypeStrings = A2($elm$core$List$map, $author$project$Play$Data$Type$toDisplayString, wordType.output);
	var inputTypeStrings = A2($elm$core$List$map, $author$project$Play$Data$Type$toDisplayString, wordType.input);
	return A2($elm$core$String$join, ' ', inputTypeStrings) + (' -- ' + A2($elm$core$String$join, ' ', outputTypeStrings));
};
var $author$project$Play$TypeChecker$Problem$toString = F2(
	function (source, problem) {
		switch (problem.$) {
			case 'UndeclaredGeneric':
				var range = problem.a;
				var generic = problem.b;
				return A2($author$project$Play$Data$SourceLocation$extractFromString, source, range) + ('\n\n' + ('Generic variable \'' + (generic + '\' needs to be declared.')));
			case 'TypeError':
				var range = problem.a;
				var name = problem.b;
				var actual = problem.c;
				var expected = problem.d;
				return A2($author$project$Play$Data$SourceLocation$extractFromString, source, range) + ('\n\n' + ('The type of \'' + (name + ('\' is specified to be: ' + ($author$project$Play$Data$Type$wordTypeToString(actual) + ('.\nHowever, it seems that the actual type is: ' + $author$project$Play$Data$Type$wordTypeToString(expected)))))));
			case 'UnexpectedType':
				var range = problem.a;
				var name = problem.b;
				var actual = problem.c;
				var expected = problem.d;
				return A2($author$project$Play$Data$SourceLocation$extractFromString, source, range) + ('\n\n' + ('Found a problem in the implementation of \'' + (name + ('\'.\n\nExpected: ' + ($author$project$Play$Data$Type$toDisplayString(expected) + ('.\nActual: ' + ($author$project$Play$Data$Type$toDisplayString(actual) + '.')))))));
			case 'InconsistentWhens':
				var range = problem.a;
				var name = problem.b;
				return A2($author$project$Play$Data$SourceLocation$extractFromString, source, range) + ('\n\n' + ('The branches of \'' + (name + '\' do not all have the same type.')));
			case 'MissingTypeAnnotationInRecursiveCallStack':
				var range = problem.a;
				var name = problem.b;
				return A2($author$project$Play$Data$SourceLocation$extractFromString, source, range) + ('\n\n' + ('We require a type annotation for \'' + (name + '\' as we\'re unable to infer the type of a recursive call.')));
			default:
				var range = problem.a;
				var missingTypes = problem.b;
				var formatTypePattern = function (tp) {
					return A2(
						$elm$core$String$join,
						' -> ',
						A2($elm$core$List$map, $author$project$Play$Data$Type$toDisplayString, tp));
				};
				return A2($author$project$Play$Data$SourceLocation$extractFromString, source, range) + ('\n\n' + ('This multiword doesn\'t handle all potential patterns. Missing patterns for:\n\n' + A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, formatTypePattern, missingTypes))));
		}
	});
var $author$project$Main$compile = function (sourceCode) {
	var _v0 = $author$project$Play$Parser$run(sourceCode);
	if (_v0.$ === 'Err') {
		var parserErrors = _v0.a;
		return A2(
			$author$project$Main$formatErrors,
			$author$project$Play$Parser$Problem$toString(sourceCode),
			parserErrors);
	} else {
		var ast = _v0.a;
		var _v1 = $author$project$Play$Qualifier$run(ast);
		if (_v1.$ === 'Err') {
			var qualifierErrors = _v1.a;
			return A2(
				$author$project$Main$formatErrors,
				$author$project$Play$Qualifier$Problem$toString(sourceCode),
				qualifierErrors);
		} else {
			var qualifiedAst = _v1.a;
			var _v2 = $author$project$Play$TypeChecker$run(qualifiedAst);
			if (_v2.$ === 'Err') {
				var typeErrors = _v2.a;
				return A2(
					$author$project$Main$formatErrors,
					$author$project$Play$TypeChecker$Problem$toString(sourceCode),
					typeErrors);
			} else {
				var typedAst = _v2.a;
				return A2(
					$elm$core$Result$mapError,
					$elm$core$Debug$toString,
					$author$project$Play$Codegen$codegen(typedAst));
			}
		}
	}
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Main$compileFinished = _Platform_outgoingPort(
	'compileFinished',
	function ($) {
		var a = $.a;
		var b = $.b;
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$bool(a),
					$elm$json$Json$Encode$string(b)
				]));
	});
var $author$project$Wasm$Indent = function (a) {
	return {$: 'Indent', a: a};
};
var $author$project$Wasm$Str = function (a) {
	return {$: 'Str', a: a};
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $author$project$Wasm$applyIndentation = F2(
	function (indent, str) {
		return _Utils_ap(
			A2($elm$core$String$repeat, indent, ' '),
			str);
	});
var $author$project$Wasm$formatHelper = F2(
	function (indentation, hint) {
		switch (hint.$) {
			case 'Str':
				if (hint.a === '') {
					return $elm$core$Maybe$Nothing;
				} else {
					var value = hint.a;
					return $elm$core$Maybe$Just(
						A2($author$project$Wasm$applyIndentation, indentation, value));
				}
			case 'Indent':
				if (!hint.a.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					var strs = hint.a;
					return $elm$core$Maybe$Just(
						A2(
							$elm$core$String$join,
							'\n',
							A2(
								$elm$core$List$filterMap,
								$author$project$Wasm$formatHelper(indentation + 2),
								strs)));
				}
			default:
				if (!hint.a.b) {
					return $elm$core$Maybe$Nothing;
				} else {
					var hints = hint.a;
					return $elm$core$Maybe$Just(
						A2(
							$elm$core$String$join,
							'\n',
							A2(
								$elm$core$List$filterMap,
								$author$project$Wasm$formatHelper(indentation),
								hints)));
				}
		}
	});
var $author$project$Wasm$format = function (hint) {
	return A2(
		$elm$core$Maybe$withDefault,
		'',
		A2($author$project$Wasm$formatHelper, 0, hint));
};
var $elm_community$list_extra$List$Extra$getAt = F2(
	function (idx, xs) {
		return (idx < 0) ? $elm$core$Maybe$Nothing : $elm$core$List$head(
			A2($elm$core$List$drop, idx, xs));
	});
var $author$project$Wasm$formatExport = F2(
	function (_v0, idx) {
		var module_ = _v0.a;
		var _v1 = A2($elm_community$list_extra$List$Extra$getAt, idx, module_.functions);
		if (_v1.$ === 'Just') {
			var func = _v1.a;
			return _List_fromArray(
				[
					$author$project$Wasm$Str(
					'(export \"' + (func.name + ('\" (func ' + ($elm$core$String$fromInt(idx) + '))'))))
				]);
		} else {
			return _Debug_todo(
				'Wasm',
				{
					start: {line: 436, column: 13},
					end: {line: 436, column: 23}
				})('Did not expect this...');
		}
	});
var $author$project$Wasm$BatchFormat = function (a) {
	return {$: 'BatchFormat', a: a};
};
var $elm$core$Debug$log = _Debug_log;
var $author$project$Wasm$formatInstruction = F2(
	function (fullModule, ins) {
		var module_ = fullModule.a;
		switch (ins.$) {
			case 'NoOp':
				return $author$project$Wasm$Str('nop');
			case 'Batch':
				var insList = ins.a;
				return $author$project$Wasm$BatchFormat(
					A2(
						$elm$core$List$map,
						$author$project$Wasm$formatInstruction(fullModule),
						insList));
			case 'Block':
				var insList = ins.a;
				return $author$project$Wasm$BatchFormat(
					_List_fromArray(
						[
							$author$project$Wasm$Str('(block'),
							$author$project$Wasm$Indent(
							A2(
								$elm$core$List$map,
								$author$project$Wasm$formatInstruction(fullModule),
								insList)),
							$author$project$Wasm$Str(')')
						]));
			case 'Loop':
				var insList = ins.a;
				return $author$project$Wasm$BatchFormat(
					_List_fromArray(
						[
							$author$project$Wasm$Str('(loop'),
							$author$project$Wasm$Indent(
							A2(
								$elm$core$List$map,
								$author$project$Wasm$formatInstruction(fullModule),
								insList)),
							$author$project$Wasm$Str(')')
						]));
			case 'Break':
				var num = ins.a;
				return $author$project$Wasm$Str(
					'(br ' + ($elm$core$String$fromInt(num) + ')'));
			case 'BreakIf':
				var num = ins.a;
				return $author$project$Wasm$Str(
					'(br_if ' + ($elm$core$String$fromInt(num) + ')'));
			case 'Return':
				return $author$project$Wasm$Str('return');
			case 'Call':
				var word = ins.a;
				var _v1 = A2(
					$elm_community$list_extra$List$Extra$findIndex,
					function (f) {
						return _Utils_eq(f.name, word);
					},
					module_.functions);
				if (_v1.$ === 'Just') {
					var idx = _v1.a;
					return $author$project$Wasm$Str(
						'(call ' + ($elm$core$String$fromInt(idx) + (') ;; $' + word)));
				} else {
					var _v2 = A2($elm$core$Debug$log, 'name', word);
					var _v3 = A2(
						$elm$core$Debug$log,
						'available',
						A2(
							$elm$core$List$map,
							function ($) {
								return $.name;
							},
							module_.functions));
					return _Debug_todo(
						'Wasm',
						{
							start: {line: 365, column: 21},
							end: {line: 365, column: 31}
						})('Did not expect this');
				}
			case 'CallIndirect':
				return $author$project$Wasm$Str('call_indirect');
			case 'FunctionIndex':
				var word = ins.a;
				var _v4 = A2(
					$elm_community$list_extra$List$Extra$findIndex,
					function (f) {
						return _Utils_eq(f.name, word);
					},
					module_.functions);
				if (_v4.$ === 'Just') {
					var idx = _v4.a;
					var _v5 = A2(
						$elm_community$list_extra$List$Extra$findIndex,
						$elm$core$Basics$eq(idx),
						module_.quotables);
					if (_v5.$ === 'Just') {
						var quoteIdx = _v5.a;
						return $author$project$Wasm$BatchFormat(
							_List_fromArray(
								[
									$author$project$Wasm$Str(
									'(i32.const ' + ($elm$core$String$fromInt(quoteIdx) + (') ;; $' + word))),
									$author$project$Wasm$Str('(call $__stack_push)')
								]));
					} else {
						return _Debug_todo(
							'Wasm',
							{
								start: {line: 381, column: 29},
								end: {line: 381, column: 39}
							})('Did not expect this');
					}
				} else {
					return _Debug_todo(
						'Wasm',
						{
							start: {line: 384, column: 21},
							end: {line: 384, column: 31}
						})('Did not expect this');
				}
			case 'Local_Get':
				var idx = ins.a;
				return $author$project$Wasm$Str(
					'(local.get ' + ($elm$core$String$fromInt(idx) + ')'));
			case 'Local_Set':
				var idx = ins.a;
				return $author$project$Wasm$Str(
					'(local.set ' + ($elm$core$String$fromInt(idx) + ')'));
			case 'Local_Tee':
				var idx = ins.a;
				return $author$project$Wasm$Str(
					'(local.tee ' + ($elm$core$String$fromInt(idx) + ')'));
			case 'I32_Const':
				var num = ins.a;
				return $author$project$Wasm$Str(
					'(i32.const ' + ($elm$core$String$fromInt(num) + ')'));
			case 'I32_Add':
				return $author$project$Wasm$Str('i32.add');
			case 'I32_Sub':
				return $author$project$Wasm$Str('i32.sub');
			case 'I32_Mul':
				return $author$project$Wasm$Str('i32.mul');
			case 'I32_Div':
				return $author$project$Wasm$Str('i32.div_s');
			case 'I32_Eq':
				return $author$project$Wasm$Str('i32.eq');
			case 'I32_NotEq':
				return $author$project$Wasm$Str('i32.ne');
			case 'I32_EqZero':
				return $author$project$Wasm$Str('i32.eqz');
			case 'I32_Store':
				return $author$project$Wasm$Str('i32.store');
			case 'I32_Load':
				return $author$project$Wasm$Str('i32.load');
			default:
				return $author$project$Wasm$Str('drop');
		}
	});
var $author$project$Wasm$typeToString = function (type_) {
	return 'i32';
};
var $author$project$Wasm$formatFunction = F2(
	function (module_, _function) {
		var locals = $elm$core$List$isEmpty(_function.locals) ? '' : ('(local ' + (A2(
			$elm$core$String$join,
			' ',
			A2($elm$core$List$map, $author$project$Wasm$typeToString, _function.locals)) + ')'));
		var fullFuncDef = A2(
			$elm$core$String$join,
			' ',
			_List_fromArray(
				[
					'(func',
					'$' + _function.name,
					'(type ' + ($elm$core$String$fromInt(_function.typeSignatureIndex) + ')'),
					locals
				]));
		return _List_fromArray(
			[
				$author$project$Wasm$Str(fullFuncDef),
				$author$project$Wasm$Indent(
				A2(
					$elm$core$List$map,
					$author$project$Wasm$formatInstruction(module_),
					_function.instructions)),
				$author$project$Wasm$Str(')')
			]);
	});
var $author$project$Wasm$moduleTypeToString = function (moduleType) {
	if (moduleType.b.$ === 'Nothing') {
		var lower = moduleType.a;
		var _v1 = moduleType.b;
		return '(memory ' + ($elm$core$String$fromInt(lower) + ')');
	} else {
		var lower = moduleType.a;
		var upper = moduleType.b.a;
		return '(memory ' + ($elm$core$String$fromInt(lower) + (' ' + ($elm$core$String$fromInt(upper) + ')')));
	}
};
var $author$project$Wasm$formatImports = function (importType) {
	return _List_fromArray(
		[
			$author$project$Wasm$Str(
			'(import \"' + (importType.moduleName + ('\" \"' + (importType.entityName + ('\" ' + ($author$project$Wasm$moduleTypeToString(importType.type_) + ')'))))))
		]);
};
var $author$project$Wasm$formatStartFunction = function (maybeStartFunction) {
	if (maybeStartFunction.$ === 'Nothing') {
		return $author$project$Wasm$Str('');
	} else {
		var idx = maybeStartFunction.a;
		return $author$project$Wasm$Indent(
			_List_fromArray(
				[
					$author$project$Wasm$Str(
					'(start ' + ($elm$core$String$fromInt(idx) + ')'))
				]));
	}
};
var $author$project$Wasm$formatTable = function (_v0) {
	var module_ = _v0.a;
	var tableDef = A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				'(table',
				$elm$core$String$fromInt(
				$elm$core$List$length(module_.quotables)),
				'funcref)'
			]));
	var elemDef = A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				'(elem',
				'(i32.const 0)',
				A2(
				$elm$core$String$join,
				' ',
				A2(
					$elm$core$List$map,
					function (funcIdx) {
						return $elm$core$String$fromInt(funcIdx);
					},
					module_.quotables)),
				')'
			]));
	return _List_fromArray(
		[
			$author$project$Wasm$Str(tableDef),
			$author$project$Wasm$Str(elemDef)
		]);
};
var $author$project$Wasm$formatTypeSignature = function (typeSignature) {
	var results = $elm$core$List$isEmpty(typeSignature.outputs) ? '' : ('(result ' + (A2(
		$elm$core$String$join,
		' ',
		A2($elm$core$List$map, $author$project$Wasm$typeToString, typeSignature.outputs)) + ')'));
	var inputs = $elm$core$List$isEmpty(typeSignature.inputs) ? '' : ('(param ' + (A2(
		$elm$core$String$join,
		' ',
		A2($elm$core$List$map, $author$project$Wasm$typeToString, typeSignature.inputs)) + ')'));
	var formattedSignature = A2(
		$elm$core$String$join,
		' ',
		A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			_List_fromArray(
				['(type', '(func', inputs, results, '))'])));
	return _List_fromArray(
		[
			$author$project$Wasm$Str(formattedSignature)
		]);
};
var $author$project$Wasm$toString = function (fullModule) {
	var module_ = fullModule.a;
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			A2(
				$elm$core$List$map,
				$author$project$Wasm$format,
				_List_fromArray(
					[
						$author$project$Wasm$Str('(module'),
						$author$project$Wasm$Indent(
						A2($elm$core$List$concatMap, $author$project$Wasm$formatImports, module_.imports)),
						$author$project$Wasm$Indent(
						A2($elm$core$List$concatMap, $author$project$Wasm$formatTypeSignature, module_.typeSignatures)),
						$author$project$Wasm$Indent(
						$author$project$Wasm$formatTable(fullModule)),
						$author$project$Wasm$Indent(
						A2(
							$elm$core$List$concatMap,
							$author$project$Wasm$formatFunction(fullModule),
							module_.functions)),
						$author$project$Wasm$Indent(
						A2(
							$elm$core$List$concatMap,
							$author$project$Wasm$formatExport(fullModule),
							module_.exports)),
						$author$project$Wasm$formatStartFunction(module_.start),
						$author$project$Wasm$Str(')')
					]))));
};
var $author$project$Main$update = F2(
	function (msg, _v0) {
		var sourceCode = msg.a;
		var _v2 = $author$project$Main$compile(sourceCode);
		if (_v2.$ === 'Ok') {
			var wasm = _v2.a;
			return _Utils_Tuple2(
				_Utils_Tuple0,
				$author$project$Main$compileFinished(
					_Utils_Tuple2(
						true,
						$author$project$Wasm$toString(wasm))));
		} else {
			var errmsg = _v2.a;
			return _Utils_Tuple2(
				_Utils_Tuple0,
				$author$project$Main$compileFinished(
					_Utils_Tuple2(false, 'Compilation failed:\n\n' + errmsg)));
		}
	});
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$Main$main = $elm$core$Platform$worker(
	{init: $author$project$Main$init, subscriptions: $author$project$Main$subscriptions, update: $author$project$Main$update});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}});}(this));