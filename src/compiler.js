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




var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


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

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
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

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
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


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
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
	if (region.bJ.O === region.bd.O)
	{
		return 'on line ' + region.bJ.O;
	}
	return 'on lines ' + region.bJ.O + ' through ' + region.bd.O;
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

	/**_UNUSED/
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

	/**/
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

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
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

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


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



/**_UNUSED/
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

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

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
		impl.bm,
		impl.bP,
		impl.bL,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
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


function _Platform_export(exports)
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


function _Platform_export_UNUSED(exports)
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
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$LT = 0;
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
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
			if (t.$ === -2) {
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
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$append = _Utils_append;
var $elm$core$Basics$False = 1;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
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
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
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
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
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
		return {$: 0, a: a, b: b, c: c, d: d};
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
	return {$: 1, a: a};
};
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
	return {$: 0, a: a};
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
		if (!builder.g) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.h),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.h);
		} else {
			var treeLen = builder.g * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.i) : builder.i;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.g);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.h) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.h);
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
					{i: nodeList, g: (len / $elm$core$Array$branchFactor) | 0, h: tail});
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
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$TestCompiler$compileFinished = _Platform_outgoingPort(
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
var $author$project$TestCompiler$compileFailed = function (err) {
	return $author$project$TestCompiler$compileFinished(
		_Utils_Tuple2(false, 'Compilation failed:\n\n' + err));
};
var $author$project$Stabel$Parser$ModuleDefinition$Undefined = {$: 0};
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
var $elm$core$Result$map2 = F3(
	function (func, ra, rb) {
		if (ra.$ === 1) {
			var x = ra.a;
			return $elm$core$Result$Err(x);
		} else {
			var a = ra.a;
			if (rb.$ === 1) {
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
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$Set_elm_builtin = $elm$core$Basics$identity;
var $elm$core$Set$empty = $elm$core$Dict$empty;
var $author$project$TestCompiler$emptyQualifierAst = {bj: $elm$core$Dict$empty, aW: $elm$core$Set$empty, I: $elm$core$Dict$empty};
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
var $author$project$TestCompiler$formatErrors = F2(
	function (fn, problems) {
		return $elm$core$Result$Err(
			A2(
				$elm$core$String$join,
				'\n\n',
				A2(
					$elm$core$List$map,
					function (_v0) {
						var source = _v0.a;
						var err = _v0.b;
						return A2(fn, source, err);
					},
					problems)));
	});
var $author$project$TestCompiler$formatParserErrors = F2(
	function (fn, problems) {
		return $elm$core$Result$Err(
			A2(
				$elm$core$String$join,
				'\n\n',
				A2(
					$elm$core$List$map,
					function (_v0) {
						var ref = _v0.a;
						var source = _v0.b;
						var err = _v0.c;
						return A3(fn, ref, source, err);
					},
					problems)));
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
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
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
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
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
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
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
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
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
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
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
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
var $author$project$Stabel$Qualifier$Builtin = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $author$project$Stabel$Qualifier$ConstructType = function (a) {
	return {$: 6, a: a};
};
var $author$project$Stabel$Qualifier$Cycle = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $author$project$Stabel$Parser$ExternalFunction = F3(
	function (a, b, c) {
		return {$: 3, a: a, b: b, c: c};
	});
var $author$project$Stabel$Qualifier$Function = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Stabel$Qualifier$Problem$FunctionNotExposed = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $author$project$Stabel$Qualifier$FunctionRef = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Stabel$Qualifier$GetMember = F4(
	function (a, b, c, d) {
		return {$: 7, a: a, b: b, c: c, d: d};
	});
var $author$project$Stabel$Qualifier$Integer = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Stabel$Qualifier$MultiImpl = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Stabel$Qualifier$Problem$NoSuchMemberOnType = F3(
	function (a, b, c) {
		return {$: 4, a: a, b: b, c: c};
	});
var $author$project$Stabel$Data$TypeSignature$NotProvided = {$: 0};
var $author$project$Stabel$Parser$PackageFunction = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $author$project$Stabel$Qualifier$Recurse = function (a) {
	return {$: 3, a: a};
};
var $author$project$Stabel$Qualifier$SetMember = F4(
	function (a, b, c, d) {
		return {$: 8, a: a, b: b, c: c, d: d};
	});
var $author$project$Stabel$Qualifier$SoloImpl = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$Data$SourceLocation$SourceLocationRange = F3(
	function (source, start, end) {
		return {bd: end, bI: source, bJ: start};
	});
var $author$project$Stabel$Qualifier$Problem$UnknownFunctionRef = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Stabel$Qualifier$Problem$UnknownTypeRef = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Stabel$Data$Builtin$Apply = 10;
var $author$project$Stabel$Data$Builtin$Divide = 3;
var $author$project$Stabel$Data$Builtin$Equal = 4;
var $author$project$Stabel$Data$Builtin$Minus = 1;
var $author$project$Stabel$Data$Builtin$Multiply = 2;
var $author$project$Stabel$Data$Builtin$Plus = 0;
var $author$project$Stabel$Data$Builtin$StackDrop = 6;
var $author$project$Stabel$Data$Builtin$StackDuplicate = 5;
var $author$project$Stabel$Data$Builtin$StackLeftRotate = 9;
var $author$project$Stabel$Data$Builtin$StackRightRotate = 8;
var $author$project$Stabel$Data$Builtin$StackSwap = 7;
var $author$project$Stabel$Qualifier$builtinDict = $elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('+', 0),
			_Utils_Tuple2('-', 1),
			_Utils_Tuple2('*', 2),
			_Utils_Tuple2('div', 3),
			_Utils_Tuple2('=', 4),
			_Utils_Tuple2('swap', 7),
			_Utils_Tuple2('dup', 5),
			_Utils_Tuple2('drop', 6),
			_Utils_Tuple2('rotate', 8),
			_Utils_Tuple2('-rotate', 9),
			_Utils_Tuple2('!', 10)
		]));
var $elm$core$String$concat = function (strings) {
	return A2($elm$core$String$join, '', strings);
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
var $author$project$Stabel$Data$SourceLocation$SourceLocation = F2(
	function (row, col) {
		return {aD: col, S: row};
	});
var $author$project$Stabel$Data$SourceLocation$emptyRange = A3(
	$author$project$Stabel$Data$SourceLocation$SourceLocationRange,
	'',
	A2($author$project$Stabel$Data$SourceLocation$SourceLocation, 0, 0),
	A2($author$project$Stabel$Data$SourceLocation$SourceLocation, 0, 0));
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
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Stabel$Qualifier$getMemberType = F2(
	function (typeDef, memberName) {
		var members = function () {
			var _v4 = typeDef.aQ;
			if (!_v4.$) {
				var mems = _v4.a;
				return mems;
			} else {
				return _List_Nil;
			}
		}();
		return A2(
			$elm$core$Maybe$map,
			function (_v2) {
				var idx = _v2.a;
				var _v3 = _v2.b;
				var t = _v3.b;
				return _Utils_Tuple2(idx, t);
			},
			A2(
				$elm_community$list_extra$List$Extra$find,
				function (_v0) {
					var _v1 = _v0.b;
					var name = _v1.a;
					return _Utils_eq(name, memberName);
				},
				A2($elm$core$List$indexedMap, $elm$core$Tuple$pair, members)));
	});
var $author$project$Stabel$Qualifier$initQualifyNodeAccumulator = F4(
	function (qualifiedTypes, qualifiedFunctions, modRefs, currentlyParsing) {
		return {J: 1, A: currentlyParsing, aa: $elm$core$Set$empty, P: modRefs, d: qualifiedFunctions, a: _List_Nil, D: qualifiedTypes};
	});
var $elm$core$Set$insert = F2(
	function (key, _v0) {
		var dict = _v0;
		return A3($elm$core$Dict$insert, key, 0, dict);
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $author$project$Stabel$Qualifier$isMultiFunction = function (def) {
	var _v0 = def.aL;
	if (!_v0.$) {
		return false;
	} else {
		return true;
	}
};
var $elm$core$Dict$member = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$get, key, dict);
		if (!_v0.$) {
			return true;
		} else {
			return false;
		}
	});
var $elm$core$Set$member = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$member, key, dict);
	});
var $author$project$Stabel$Parser$ModuleDefinition$emptyDefinition = {q: $elm$core$Dict$empty, bg: $elm$core$Set$empty, t: $elm$core$Dict$empty};
var $author$project$Stabel$Parser$ModuleDefinition$definition = function (mod) {
	if (!mod.$) {
		return $author$project$Stabel$Parser$ModuleDefinition$emptyDefinition;
	} else {
		var def = mod.a;
		return def;
	}
};
var $elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3($elm$core$Dict$foldl, $elm$core$Dict$insert, t2, t1);
	});
var $author$project$Stabel$Qualifier$moduleDefinition = function (config) {
	var defaultImports = _Utils_eq(
		A2($elm$core$Dict$get, '/core', config.B),
		$elm$core$Maybe$Just('stabel/standard_library')) ? $elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2('/core', _List_Nil)
			])) : $elm$core$Dict$empty;
	var def = $author$project$Stabel$Parser$ModuleDefinition$definition(config.k.aq);
	return {
		q: def.q,
		bg: def.bg,
		t: A2($elm$core$Dict$union, def.t, defaultImports)
	};
};
var $author$project$Stabel$Data$Type$Custom = function (a) {
	return {$: 2, a: a};
};
var $author$project$Stabel$Data$Type$CustomGeneric = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$Stabel$Parser$Type$ExternalRef = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var $author$project$Stabel$Data$Type$Generic = function (a) {
	return {$: 1, a: a};
};
var $author$project$Stabel$Data$Type$Int = {$: 0};
var $author$project$Stabel$Qualifier$Problem$InvalidTypeMatch = function (a) {
	return {$: 3, a: a};
};
var $author$project$Stabel$Qualifier$LiteralInt = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$Qualifier$LiteralType = function (a) {
	return {$: 1, a: a};
};
var $author$project$Stabel$Qualifier$RecursiveMatch = function (a) {
	return {$: 2, a: a};
};
var $author$project$Stabel$Parser$TypeMatch = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $author$project$Stabel$Qualifier$TypeMatch = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $author$project$Stabel$Qualifier$TypeMatchCond = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $author$project$Stabel$Qualifier$Problem$TypeNotExposed = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $author$project$Stabel$Data$Type$Union = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $author$project$Stabel$Qualifier$Problem$UnionTypeMatchWithPatterns = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return $elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return $elm$core$Result$Err(e);
		}
	});
var $elm$core$Basics$not = _Basics_not;
var $author$project$Stabel$Data$Type$FunctionSignature = function (a) {
	return {$: 5, a: a};
};
var $author$project$Stabel$Parser$Type$InternalRef = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $author$project$Stabel$Data$Type$StackRange = function (a) {
	return {$: 6, a: a};
};
var $author$project$Stabel$Qualifier$qualifyName = F2(
	function (config, name) {
		return (config.x === '') ? name : $elm$core$String$concat(
			_List_fromArray(
				['/', config.x, '/', config.aR, '/', name]));
	});
var $author$project$Stabel$Qualifier$qualifyPackageModule = F2(
	function (packageName, path) {
		return (packageName === '') ? path : $elm$core$String$concat(
			_List_fromArray(
				['/', packageName, '/', path]));
	});
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Stabel$Qualifier$rebindGenerics = F3(
	function (genericNames, types, members) {
		var genericsMap = $elm$core$Dict$fromList(
			A3($elm$core$List$map2, $elm$core$Tuple$pair, genericNames, types));
		var rebindGenericsHelper = function (t) {
			switch (t.$) {
				case 1:
					var val = t.a;
					return A2(
						$elm$core$Maybe$withDefault,
						t,
						A2($elm$core$Dict$get, val, genericsMap));
				case 3:
					var cgName = t.a;
					var cgMembers = t.b;
					return A2(
						$author$project$Stabel$Data$Type$CustomGeneric,
						cgName,
						A2($elm$core$List$map, rebindGenericsHelper, cgMembers));
				case 4:
					var uName = t.a;
					var uMembers = t.b;
					return A2(
						$author$project$Stabel$Data$Type$Union,
						uName,
						A2($elm$core$List$map, rebindGenericsHelper, uMembers));
				default:
					return t;
			}
		};
		return A2($elm$core$List$map, rebindGenericsHelper, members);
	});
var $elm$core$String$startsWith = _String_startsWith;
var $author$project$Stabel$Qualifier$representsExternalModule = function (path) {
	return A2($elm$core$String$startsWith, '/', path);
};
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			$elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3($elm$core$Dict$insert, k, v, d) : d;
				}),
			$elm$core$Dict$empty,
			dict);
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
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
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
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
var $elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			$elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var $author$project$Stabel$Qualifier$resolveImported = F4(
	function (config, modRefs, lookupTable, name) {
		var resolveMod = function (mod) {
			return $author$project$Stabel$Qualifier$representsExternalModule(mod) ? A2(
				$elm$core$Maybe$map,
				function (_package) {
					return A2(
						$author$project$Stabel$Qualifier$qualifyPackageModule,
						_package,
						A2($elm$core$String$dropLeft, 1, mod));
				},
				A2($elm$core$Dict$get, mod, config.B)) : $elm$core$Maybe$Just(
				A2($author$project$Stabel$Qualifier$qualifyPackageModule, config.x, mod));
		};
		var potentialCandidates = A2(
			$elm$core$List$map,
			function (mod) {
				return _Utils_Tuple2(mod, mod + ('/' + name));
			},
			A2(
				$elm$core$List$filterMap,
				resolveMod,
				$elm$core$Dict$keys(
					A2(
						$elm$core$Dict$filter,
						F2(
							function (_v3, v) {
								return $elm$core$List$isEmpty(v);
							}),
						modRefs.t))));
		var explicitImports = A2(
			$elm$core$Maybe$andThen,
			resolveMod,
			A2(
				$elm$core$Maybe$map,
				$elm$core$Tuple$first,
				A2(
					$elm_community$list_extra$List$Extra$find,
					function (_v2) {
						var v = _v2.b;
						return A2($elm$core$List$member, name, v);
					},
					$elm$core$Dict$toList(modRefs.t))));
		if (!explicitImports.$) {
			return explicitImports;
		} else {
			return $elm$core$List$head(
				A2(
					$elm$core$List$filterMap,
					function (_v1) {
						var mod = _v1.a;
						var qName = _v1.b;
						return A2(
							$elm$core$Maybe$map,
							$elm$core$Basics$always(mod),
							A2($elm$core$Dict$get, qName, lookupTable));
					},
					potentialCandidates));
		}
	});
var $author$project$Stabel$Qualifier$resolveImportedType = F3(
	function (config, modRefs, name) {
		return A4($author$project$Stabel$Qualifier$resolveImported, config, modRefs, config.G.I, name);
	});
var $author$project$Stabel$Qualifier$splitExternalPackagePath = function (path) {
	return A2(
		$elm$core$List$drop,
		1,
		A2($elm$core$String$split, '/', path));
};
var $author$project$Stabel$Qualifier$qualifyFunctionType = F4(
	function (config, modRefs, range, type_) {
		if (!type_.$) {
			var sym = type_.a;
			return $elm$core$Result$Ok(
				$author$project$Stabel$Data$Type$StackRange(sym));
		} else {
			var pqt = type_.a;
			return A4($author$project$Stabel$Qualifier$qualifyMemberType, config, modRefs, range, pqt);
		}
	});
var $author$project$Stabel$Qualifier$qualifyMemberType = F4(
	function (config, modRefs, range, type_) {
		var refLookup = F2(
			function (name, binds) {
				var maybeType = A2($elm$core$Dict$get, name, config.G.I);
				var maybeMembers = A2(
					$elm$core$Maybe$map,
					function ($) {
						return $.aQ;
					},
					maybeType);
				var genericNames = A2(
					$elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $._;
						},
						maybeType));
				var exposed = A2(
					$elm$core$Maybe$withDefault,
					false,
					A2(
						$elm$core$Maybe$map,
						function ($) {
							return $.s;
						},
						maybeType));
				var bindResult = $elm_community$result_extra$Result$Extra$combine(
					A2(
						$elm$core$List$map,
						A3($author$project$Stabel$Qualifier$qualifyMemberType, config, modRefs, range),
						binds));
				var _v7 = _Utils_Tuple3(exposed, maybeMembers, bindResult);
				if (_v7.b.$ === 1) {
					var _v8 = _v7.b;
					return $elm$core$Result$Err(
						A2($author$project$Stabel$Qualifier$Problem$UnknownTypeRef, range, name));
				} else {
					if (!_v7.a) {
						return $elm$core$Result$Err(
							A2($author$project$Stabel$Qualifier$Problem$TypeNotExposed, range, name));
					} else {
						if (_v7.c.$ === 1) {
							var err = _v7.c.a;
							return $elm$core$Result$Err(err);
						} else {
							if (!_v7.b.a.$) {
								if (!_v7.c.a.b) {
									return $elm$core$Result$Ok(
										$author$project$Stabel$Data$Type$Custom(name));
								} else {
									var qualifiedBinds = _v7.c.a;
									return $elm$core$Result$Ok(
										A2($author$project$Stabel$Data$Type$CustomGeneric, name, qualifiedBinds));
								}
							} else {
								var members = _v7.b.a.a;
								var qualifiedBinds = _v7.c.a;
								return $elm$core$Result$Ok(
									A2(
										$author$project$Stabel$Data$Type$Union,
										$elm$core$Maybe$Just(name),
										A3($author$project$Stabel$Qualifier$rebindGenerics, genericNames, qualifiedBinds, members)));
							}
						}
					}
				}
			});
		var internalRefLookup = F3(
			function (path, name, binds) {
				var qualifiedName = A2(
					$author$project$Stabel$Qualifier$qualifyPackageModule,
					config.x,
					A2(
						$elm$core$String$join,
						'/',
						_Utils_ap(
							path,
							_List_fromArray(
								[name]))));
				return A2(refLookup, qualifiedName, binds);
			});
		var importsLookup = F2(
			function (name, binds) {
				var _v6 = A3($author$project$Stabel$Qualifier$resolveImportedType, config, modRefs, name);
				if (!_v6.$) {
					var importedModule = _v6.a;
					if ($author$project$Stabel$Qualifier$representsExternalModule(importedModule)) {
						var nextPath = A2(
							$elm$core$List$drop,
							2,
							$author$project$Stabel$Qualifier$splitExternalPackagePath(importedModule));
						return A4(
							$author$project$Stabel$Qualifier$qualifyMemberType,
							config,
							modRefs,
							range,
							A3($author$project$Stabel$Parser$Type$ExternalRef, nextPath, name, binds));
					} else {
						return A4(
							$author$project$Stabel$Qualifier$qualifyMemberType,
							config,
							modRefs,
							range,
							A3(
								$author$project$Stabel$Parser$Type$InternalRef,
								A2($elm$core$String$split, '/', importedModule),
								name,
								binds));
					}
				} else {
					return $elm$core$Result$Err(
						A2($author$project$Stabel$Qualifier$Problem$UnknownTypeRef, range, name));
				}
			});
		switch (type_.$) {
			case 0:
				if (!type_.b.b) {
					if (type_.a === 'Int') {
						return $elm$core$Result$Ok($author$project$Stabel$Data$Type$Int);
					} else {
						var name = type_.a;
						var _v1 = A2($elm$core$Dict$get, name, config.k.I);
						if (!_v1.$) {
							return $elm$core$Result$Ok(
								$author$project$Stabel$Data$Type$Custom(
									A2($author$project$Stabel$Qualifier$qualifyName, config, name)));
						} else {
							return A2(importsLookup, name, _List_Nil);
						}
					}
				} else {
					var name = type_.a;
					var binds = type_.b;
					var _v2 = A2($elm$core$Dict$get, name, config.k.I);
					if (!_v2.$) {
						var bindResult = $elm_community$result_extra$Result$Extra$combine(
							A2(
								$elm$core$List$map,
								A3($author$project$Stabel$Qualifier$qualifyMemberType, config, modRefs, range),
								binds));
						if (!bindResult.$) {
							var convertedBindings = bindResult.a;
							return $elm$core$Result$Ok(
								A2(
									$author$project$Stabel$Data$Type$CustomGeneric,
									A2($author$project$Stabel$Qualifier$qualifyName, config, name),
									convertedBindings));
						} else {
							var err = bindResult.a;
							return $elm$core$Result$Err(err);
						}
					} else {
						return A2(importsLookup, name, binds);
					}
				}
			case 1:
				if (type_.a.b && (!type_.a.b.b)) {
					var path = type_.a;
					var possibleAlias = path.a;
					var name = type_.b;
					var binds = type_.c;
					var _v4 = A2($elm$core$Dict$get, possibleAlias, modRefs.q);
					if (!_v4.$) {
						var val = _v4.a;
						if ($author$project$Stabel$Qualifier$representsExternalModule(val)) {
							var newPath = $author$project$Stabel$Qualifier$splitExternalPackagePath(val);
							return A4(
								$author$project$Stabel$Qualifier$qualifyMemberType,
								config,
								modRefs,
								range,
								A3($author$project$Stabel$Parser$Type$ExternalRef, newPath, name, binds));
						} else {
							return A3(
								internalRefLookup,
								A2($elm$core$String$split, '/', val),
								name,
								binds);
						}
					} else {
						return A3(internalRefLookup, path, name, binds);
					}
				} else {
					var path = type_.a;
					var name = type_.b;
					var binds = type_.c;
					return A3(internalRefLookup, path, name, binds);
				}
			case 2:
				var path = type_.a;
				var name = type_.b;
				var binds = type_.c;
				var pathString = '/' + A2($elm$core$String$join, '/', path);
				var qualifiedName = A2(
					$elm$core$Maybe$withDefault,
					'',
					A2(
						$elm$core$Maybe$map,
						function (prefix) {
							return '/' + (prefix + (pathString + ('/' + name)));
						},
						A2($elm$core$Dict$get, pathString, config.B)));
				return A2(refLookup, qualifiedName, binds);
			case 3:
				var sym = type_.a;
				return $elm$core$Result$Ok(
					$author$project$Stabel$Data$Type$Generic(sym));
			default:
				var sign = type_.a;
				var outputResult = $elm_community$result_extra$Result$Extra$combine(
					A2(
						$elm$core$List$map,
						A3($author$project$Stabel$Qualifier$qualifyFunctionType, config, modRefs, range),
						sign.H));
				var inputResult = $elm_community$result_extra$Result$Extra$combine(
					A2(
						$elm$core$List$map,
						A3($author$project$Stabel$Qualifier$qualifyFunctionType, config, modRefs, range),
						sign.o));
				var _v5 = _Utils_Tuple2(inputResult, outputResult);
				if (!_v5.a.$) {
					if (!_v5.b.$) {
						var input = _v5.a.a;
						var output = _v5.b.a;
						return $elm$core$Result$Ok(
							$author$project$Stabel$Data$Type$FunctionSignature(
								{o: input, H: output}));
					} else {
						var output = _v5.b.a;
						return $elm$core$Result$Err(output);
					}
				} else {
					var input = _v5.a.a;
					return $elm$core$Result$Err(input);
				}
		}
	});
var $author$project$Stabel$Qualifier$qualifyMatch = F4(
	function (config, qualifiedTypes, modRefs, typeMatch) {
		var qualifiedRange = function (range) {
			return A3($author$project$Stabel$Data$SourceLocation$SourceLocationRange, config.k.a$, range.bJ, range.bd);
		};
		var qualifiedNameToMatch = F3(
			function (range, name, patterns) {
				var _v18 = A2($elm$core$Dict$get, name, qualifiedTypes);
				if (!_v18.$) {
					var typeDef = _v18.a;
					if (!typeDef.s) {
						return $elm$core$Result$Err(
							A2($author$project$Stabel$Qualifier$Problem$TypeNotExposed, range, name));
					} else {
						var _v19 = typeDef.aQ;
						if (!_v19.$) {
							var members = _v19.a;
							var qualifiedPatternsResult = $elm_community$result_extra$Result$Extra$combine(
								A2(
									$elm$core$List$map,
									A6($author$project$Stabel$Qualifier$qualifyMatchValue, config, qualifiedTypes, modRefs, range, name, members),
									patterns));
							var actualType = function () {
								var _v21 = typeDef._;
								if (!_v21.b) {
									return $author$project$Stabel$Data$Type$Custom(name);
								} else {
									return A2(
										$author$project$Stabel$Data$Type$CustomGeneric,
										name,
										A2($elm$core$List$map, $author$project$Stabel$Data$Type$Generic, typeDef._));
								}
							}();
							if (!qualifiedPatternsResult.$) {
								var qualifiedPatterns = qualifiedPatternsResult.a;
								return $elm$core$Result$Ok(
									A3($author$project$Stabel$Qualifier$TypeMatch, range, actualType, qualifiedPatterns));
							} else {
								var err = qualifiedPatternsResult.a;
								return $elm$core$Result$Err(err);
							}
						} else {
							var types = _v19.a;
							return $elm$core$List$isEmpty(patterns) ? $elm$core$Result$Ok(
								A3(
									$author$project$Stabel$Qualifier$TypeMatch,
									range,
									A2(
										$author$project$Stabel$Data$Type$Union,
										$elm$core$Maybe$Just(name),
										types),
									_List_Nil)) : $elm$core$Result$Err(
								$author$project$Stabel$Qualifier$Problem$UnionTypeMatchWithPatterns(range));
						}
					}
				} else {
					return $elm$core$Result$Err(
						A2($author$project$Stabel$Qualifier$Problem$UnknownTypeRef, range, name));
				}
			});
		_v4$3:
		while (true) {
			_v4$7:
			while (true) {
				switch (typeMatch.b.$) {
					case 3:
						if (!typeMatch.c.b) {
							var range = typeMatch.a;
							var sym = typeMatch.b.a;
							return $elm$core$Result$Ok(
								A3(
									$author$project$Stabel$Qualifier$TypeMatch,
									qualifiedRange(range),
									$author$project$Stabel$Data$Type$Generic(sym),
									_List_Nil));
						} else {
							break _v4$7;
						}
					case 0:
						if (!typeMatch.b.b.b) {
							if (typeMatch.b.a === 'Int') {
								if (!typeMatch.c.b) {
									var range = typeMatch.a;
									var _v5 = typeMatch.b;
									return $elm$core$Result$Ok(
										A3(
											$author$project$Stabel$Qualifier$TypeMatch,
											qualifiedRange(range),
											$author$project$Stabel$Data$Type$Int,
											_List_Nil));
								} else {
									if (((typeMatch.c.a.a === 'value') && (!typeMatch.c.a.b.$)) && (!typeMatch.c.b.b)) {
										var range = typeMatch.a;
										var _v6 = typeMatch.b;
										var _v7 = typeMatch.c;
										var _v8 = _v7.a;
										var val = _v8.b.a;
										return $elm$core$Result$Ok(
											A3(
												$author$project$Stabel$Qualifier$TypeMatch,
												qualifiedRange(range),
												$author$project$Stabel$Data$Type$Int,
												_List_fromArray(
													[
														A3(
														$author$project$Stabel$Qualifier$TypeMatchCond,
														'value',
														$author$project$Stabel$Data$Type$Int,
														$author$project$Stabel$Qualifier$LiteralInt(val))
													])));
									} else {
										break _v4$3;
									}
								}
							} else {
								break _v4$3;
							}
						} else {
							break _v4$7;
						}
					case 1:
						if (typeMatch.b.a.b && (!typeMatch.b.a.b.b)) {
							var range = typeMatch.a;
							var _v13 = typeMatch.b;
							var _v14 = _v13.a;
							var possibleAlias = _v14.a;
							var name = _v13.b;
							var patterns = typeMatch.c;
							var _v15 = A2($elm$core$Dict$get, possibleAlias, modRefs.q);
							if (!_v15.$) {
								var actualPath = _v15.a;
								if ($author$project$Stabel$Qualifier$representsExternalModule(actualPath)) {
									var extPath = $author$project$Stabel$Qualifier$splitExternalPackagePath(actualPath);
									return A4(
										$author$project$Stabel$Qualifier$qualifyMatch,
										config,
										qualifiedTypes,
										modRefs,
										A3(
											$author$project$Stabel$Parser$TypeMatch,
											range,
											A3($author$project$Stabel$Parser$Type$ExternalRef, extPath, name, _List_Nil),
											patterns));
								} else {
									var qualifiedName = A2($author$project$Stabel$Qualifier$qualifyPackageModule, config.x, actualPath + ('/' + name));
									return A3(
										qualifiedNameToMatch,
										qualifiedRange(range),
										qualifiedName,
										patterns);
								}
							} else {
								var qualifiedName = A2($author$project$Stabel$Qualifier$qualifyPackageModule, config.x, possibleAlias + ('/' + name));
								return A3(
									qualifiedNameToMatch,
									qualifiedRange(range),
									qualifiedName,
									patterns);
							}
						} else {
							var range = typeMatch.a;
							var _v16 = typeMatch.b;
							var path = _v16.a;
							var name = _v16.b;
							var patterns = typeMatch.c;
							var qualifiedName = A2(
								$author$project$Stabel$Qualifier$qualifyPackageModule,
								config.x,
								A2(
									$elm$core$String$join,
									'/',
									_Utils_ap(
										path,
										_List_fromArray(
											[name]))));
							return A3(
								qualifiedNameToMatch,
								qualifiedRange(range),
								qualifiedName,
								patterns);
						}
					case 2:
						var range = typeMatch.a;
						var _v17 = typeMatch.b;
						var path = _v17.a;
						var name = _v17.b;
						var patterns = typeMatch.c;
						var pathString = '/' + A2($elm$core$String$join, '/', path);
						var qualifiedName = A2(
							$elm$core$Maybe$withDefault,
							'',
							A2(
								$elm$core$Maybe$map,
								function (prefix) {
									return '/' + (prefix + (pathString + ('/' + name)));
								},
								A2($elm$core$Dict$get, pathString, config.B)));
						return A3(
							qualifiedNameToMatch,
							qualifiedRange(range),
							qualifiedName,
							patterns);
					default:
						break _v4$7;
				}
			}
			var range = typeMatch.a;
			return $elm$core$Result$Err(
				$author$project$Stabel$Qualifier$Problem$InvalidTypeMatch(
					qualifiedRange(range)));
		}
		var range = typeMatch.a;
		var _v9 = typeMatch.b;
		var name = _v9.a;
		var patterns = typeMatch.c;
		var _v10 = A3(
			qualifiedNameToMatch,
			qualifiedRange(range),
			A2($author$project$Stabel$Qualifier$qualifyName, config, name),
			patterns);
		if ((_v10.$ === 1) && (_v10.a.$ === 1)) {
			var errMsg = _v10;
			var _v11 = errMsg.a;
			var _v12 = A3($author$project$Stabel$Qualifier$resolveImportedType, config, modRefs, name);
			if (!_v12.$) {
				var importedModule = _v12.a;
				return A3(
					qualifiedNameToMatch,
					qualifiedRange(range),
					importedModule + ('/' + name),
					patterns);
			} else {
				return errMsg;
			}
		} else {
			var result = _v10;
			return result;
		}
	});
var $author$project$Stabel$Qualifier$qualifyMatchValue = F7(
	function (config, qualifiedTypes, modRefs, range, typeName, members, _v0) {
		var fieldName = _v0.a;
		var matchValue = _v0.b;
		var _v1 = A2(
			$elm_community$list_extra$List$Extra$find,
			A2(
				$elm$core$Basics$composeL,
				$elm$core$Basics$eq(fieldName),
				$elm$core$Tuple$first),
			members);
		if (!_v1.$) {
			var _v2 = _v1.a;
			var fieldType = _v2.b;
			switch (matchValue.$) {
				case 0:
					var val = matchValue.a;
					return $elm$core$Result$Ok(
						A3(
							$author$project$Stabel$Qualifier$TypeMatchCond,
							fieldName,
							fieldType,
							$author$project$Stabel$Qualifier$LiteralInt(val)));
				case 1:
					var type_ = matchValue.a;
					return A2(
						$elm$core$Result$map,
						function (qualifiedType) {
							return A3(
								$author$project$Stabel$Qualifier$TypeMatchCond,
								fieldName,
								fieldType,
								$author$project$Stabel$Qualifier$LiteralType(qualifiedType));
						},
						A4($author$project$Stabel$Qualifier$qualifyMemberType, config, modRefs, range, type_));
				default:
					var typeMatch = matchValue.a;
					return A2(
						$elm$core$Result$map,
						function (match) {
							return A3(
								$author$project$Stabel$Qualifier$TypeMatchCond,
								fieldName,
								fieldType,
								$author$project$Stabel$Qualifier$RecursiveMatch(match));
						},
						A4($author$project$Stabel$Qualifier$qualifyMatch, config, qualifiedTypes, modRefs, typeMatch));
			}
		} else {
			return $elm$core$Result$Err(
				A3($author$project$Stabel$Qualifier$Problem$NoSuchMemberOnType, range, typeName, fieldName));
		}
	});
var $author$project$Stabel$Data$TypeSignature$CompilerProvided = function (a) {
	return {$: 2, a: a};
};
var $author$project$Stabel$Data$TypeSignature$UserProvided = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $author$project$Stabel$Data$TypeSignature$map = F2(
	function (fn, ts) {
		switch (ts.$) {
			case 0:
				return $author$project$Stabel$Data$TypeSignature$NotProvided;
			case 1:
				var wt = ts.a;
				return $author$project$Stabel$Data$TypeSignature$UserProvided(
					fn(wt));
			default:
				var wt = ts.a;
				return $author$project$Stabel$Data$TypeSignature$CompilerProvided(
					fn(wt));
		}
	});
var $author$project$Stabel$Qualifier$resolveUnion = F2(
	function (typeDefs, type_) {
		switch (type_.$) {
			case 2:
				var typeName = type_.a;
				var _v1 = A2(
					$elm$core$Maybe$map,
					function ($) {
						return $.aQ;
					},
					A2($elm$core$Dict$get, typeName, typeDefs));
				if ((!_v1.$) && (_v1.a.$ === 1)) {
					var members = _v1.a.a;
					return A2(
						$author$project$Stabel$Data$Type$Union,
						$elm$core$Maybe$Just(typeName),
						members);
				} else {
					return type_;
				}
			case 3:
				var typeName = type_.a;
				var types = type_.b;
				var _v2 = A2($elm$core$Dict$get, typeName, typeDefs);
				if (!_v2.$) {
					var result = _v2.a;
					var _v3 = result.aQ;
					if (_v3.$ === 1) {
						var members = _v3.a;
						return A2(
							$author$project$Stabel$Data$Type$Union,
							$elm$core$Maybe$Just(typeName),
							A3($author$project$Stabel$Qualifier$rebindGenerics, result._, types, members));
					} else {
						return type_;
					}
				} else {
					return type_;
				}
			default:
				return type_;
		}
	});
var $author$project$Stabel$Qualifier$resolveUnions = F2(
	function (typeDefs, wt) {
		return {
			o: A2(
				$elm$core$List$map,
				$author$project$Stabel$Qualifier$resolveUnion(typeDefs),
				wt.o),
			H: A2(
				$elm$core$List$map,
				$author$project$Stabel$Qualifier$resolveUnion(typeDefs),
				wt.H)
		};
	});
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
var $author$project$Stabel$Parser$AssociatedFunctionSignature$toMaybe = function (ts) {
	switch (ts.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var wt = ts.a;
			return $elm$core$Maybe$Just(wt);
		default:
			var wt = ts.a;
			return $elm$core$Maybe$Just(wt);
	}
};
var $author$project$Stabel$Qualifier$qualifyMetadata = F3(
	function (config, qualifiedTypes, _function) {
		var modDef = $author$project$Stabel$Qualifier$moduleDefinition(config);
		var modRefs = {
			q: A2($elm$core$Dict$union, modDef.q, _function.q),
			t: A2($elm$core$Dict$union, modDef.t, _function.t)
		};
		var inputLength = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				A2(
					$elm$core$Basics$composeR,
					function ($) {
						return $.o;
					},
					$elm$core$List$length),
				$author$project$Stabel$Parser$AssociatedFunctionSignature$toMaybe(_function.bO)));
		var functionRange = A2(
			$elm$core$Maybe$withDefault,
			$author$project$Stabel$Data$SourceLocation$emptyRange,
			A2(
				$elm$core$Maybe$map,
				function (r) {
					return A3($author$project$Stabel$Data$SourceLocation$SourceLocationRange, config.k.a$, r.bJ, r.bd);
				},
				_function.w));
		return A2(
			$elm$core$Result$map,
			function (qualifiedFlatTypeSignature) {
				var functionType = {
					o: A2($elm$core$List$take, inputLength, qualifiedFlatTypeSignature),
					H: A2($elm$core$List$drop, inputLength, qualifiedFlatTypeSignature)
				};
				var ts = function () {
					var _v1 = _function.bO;
					switch (_v1.$) {
						case 0:
							return $author$project$Stabel$Data$TypeSignature$NotProvided;
						case 1:
							return $author$project$Stabel$Data$TypeSignature$UserProvided(functionType);
						default:
							return $author$project$Stabel$Data$TypeSignature$CompilerProvided(functionType);
					}
				}();
				return _Utils_Tuple2(
					A2(
						$author$project$Stabel$Data$TypeSignature$map,
						$author$project$Stabel$Qualifier$resolveUnions(qualifiedTypes),
						ts),
					function () {
						var _v0 = config.k.aq;
						if (!_v0.$) {
							return true;
						} else {
							var def = _v0.a;
							return A2($elm$core$Set$member, _function.m, def.bg);
						}
					}());
			},
			$elm_community$result_extra$Result$Extra$combine(
				A2(
					$elm$core$List$map,
					A3($author$project$Stabel$Qualifier$qualifyFunctionType, config, modRefs, functionRange),
					A2(
						$elm$core$Maybe$withDefault,
						_List_Nil,
						A2(
							$elm$core$Maybe$map,
							function (ts) {
								return _Utils_ap(ts.o, ts.H);
							},
							$author$project$Stabel$Parser$AssociatedFunctionSignature$toMaybe(_function.bO))))));
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
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
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
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
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
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
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
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
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
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
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
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
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
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
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
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
				if (_v4.$ === -1) {
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
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
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
						if (_v7.$ === -1) {
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
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
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
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Set$remove = F2(
	function (key, _v0) {
		var dict = _v0;
		return A2($elm$core$Dict$remove, key, dict);
	});
var $author$project$Stabel$Qualifier$resolveImportedFunction = F3(
	function (config, modRefs, name) {
		return A4($author$project$Stabel$Qualifier$resolveImported, config, modRefs, config.G.bj, name);
	});
var $author$project$Stabel$Qualifier$splitInternalPackagePath = $elm$core$String$split('/');
var $elm$core$Set$union = F2(
	function (_v0, _v1) {
		var dict1 = _v0;
		var dict2 = _v1;
		return A2($elm$core$Dict$union, dict1, dict2);
	});
var $author$project$Stabel$Qualifier$initQualifyNode = F7(
	function (config, qualifiedTypes, qualifiedFunctions, currentDefName, modRefs, currentlyParsing, impl) {
		return function (acc) {
			return {
				aa: acc.aa,
				d: acc.d,
				a: $elm_community$result_extra$Result$Extra$combine(acc.a)
			};
		}(
			A3(
				$elm$core$List$foldr,
				A2($author$project$Stabel$Qualifier$qualifyNode, config, currentDefName),
				A4(
					$author$project$Stabel$Qualifier$initQualifyNodeAccumulator,
					qualifiedTypes,
					qualifiedFunctions,
					modRefs,
					A2($elm$core$Set$insert, currentDefName, currentlyParsing)),
				impl));
	});
var $author$project$Stabel$Qualifier$qualifyDefinitionHelp = F5(
	function (config, qualifiedTypes, qualifiedFunctions, currentlyParsing, unqualifiedFunction) {
		var qualifiedName = A2($author$project$Stabel$Qualifier$qualifyName, config, unqualifiedFunction.m);
		var qualifiedMetadataResult = A3($author$project$Stabel$Qualifier$qualifyMetadata, config, qualifiedTypes, unqualifiedFunction);
		var modDef = $author$project$Stabel$Qualifier$moduleDefinition(config);
		var moduleReferences = {
			q: A2($elm$core$Dict$union, unqualifiedFunction.q, modDef.q),
			t: A2($elm$core$Dict$union, unqualifiedFunction.t, modDef.t)
		};
		var mapLoc = function (loc) {
			return A3($author$project$Stabel$Data$SourceLocation$SourceLocationRange, config.k.a$, loc.bJ, loc.bd);
		};
		var _v24 = function () {
			var _v25 = unqualifiedFunction.aL;
			if (!_v25.$) {
				var defImpl = _v25.a;
				return _Utils_Tuple2(_List_Nil, defImpl);
			} else {
				var whenImpl = _v25.a;
				var defImpl = _v25.b;
				return _Utils_Tuple2(whenImpl, defImpl);
			}
		}();
		var whens = _v24.a;
		var impl = _v24.b;
		var _v26 = function (_v27) {
			var a = _v27.a;
			var b = _v27.b;
			var c = _v27.c;
			return _Utils_Tuple3(
				a,
				b,
				$elm_community$result_extra$Result$Extra$combine(c));
		}(
			A3(
				$elm$core$List$foldr,
				A5($author$project$Stabel$Qualifier$qualifyWhen, config, qualifiedTypes, unqualifiedFunction.m, moduleReferences, currentlyParsing),
				_Utils_Tuple3(qualifiedFunctions, $elm$core$Set$empty, _List_Nil),
				whens));
		var newFunctionsAfterWhens = _v26.a;
		var inlineFunctionNamesAfterWhens = _v26.b;
		var qualifiedWhensResult = _v26.c;
		var implQualifyResult = A7($author$project$Stabel$Qualifier$initQualifyNode, config, qualifiedTypes, newFunctionsAfterWhens, unqualifiedFunction.m, moduleReferences, currentlyParsing, impl);
		var newInlineFuncs = A2($elm$core$Set$union, implQualifyResult.aa, inlineFunctionNamesAfterWhens);
		var _v28 = _Utils_Tuple3(qualifiedWhensResult, implQualifyResult.a, qualifiedMetadataResult);
		if (!_v28.a.$) {
			if (!_v28.b.$) {
				if (!_v28.c.$) {
					var qualifiedWhens = _v28.a.a;
					var qualifiedImplementation = _v28.b.a;
					var _v29 = _v28.c.a;
					var typeSignature = _v29.a;
					var exposed = _v29.b;
					var qualifiedFunc = {
						s: exposed,
						aL: $elm$core$List$isEmpty(qualifiedWhens) ? $author$project$Stabel$Qualifier$SoloImpl(qualifiedImplementation) : A2($author$project$Stabel$Qualifier$MultiImpl, qualifiedWhens, qualifiedImplementation),
						m: qualifiedName,
						U: A2($elm$core$Maybe$map, mapLoc, unqualifiedFunction.w),
						bO: typeSignature
					};
					return {
						aa: newInlineFuncs,
						C: $elm$core$Result$Ok(qualifiedFunc),
						d: A3($elm$core$Dict$insert, qualifiedFunc.m, qualifiedFunc, implQualifyResult.d)
					};
				} else {
					var metaError = _v28.c.a;
					return {
						aa: newInlineFuncs,
						C: $elm$core$Result$Err(metaError),
						d: implQualifyResult.d
					};
				}
			} else {
				var implError = _v28.b.a;
				return {
					aa: newInlineFuncs,
					C: $elm$core$Result$Err(implError),
					d: implQualifyResult.d
				};
			}
		} else {
			var whenError = _v28.a.a;
			return {
				aa: newInlineFuncs,
				C: $elm$core$Result$Err(whenError),
				d: implQualifyResult.d
			};
		}
	});
var $author$project$Stabel$Qualifier$qualifyNode = F4(
	function (config, currentDefName, node, acc) {
		qualifyNode:
		while (true) {
			var mapLoc = function (loc) {
				return A3($author$project$Stabel$Data$SourceLocation$SourceLocationRange, config.k.a$, loc.bJ, loc.bd);
			};
			switch (node.$) {
				case 0:
					var loc = node.a;
					var value = node.b;
					return _Utils_update(
						acc,
						{
							a: A2(
								$elm$core$List$cons,
								$elm$core$Result$Ok(
									A2(
										$author$project$Stabel$Qualifier$Integer,
										mapLoc(loc),
										value)),
								acc.a)
						});
				case 1:
					var loc = node.a;
					var value = node.b;
					var qLoc = mapLoc(loc);
					var _v4 = A2($elm$core$Dict$get, value, $author$project$Stabel$Qualifier$builtinDict);
					if (!_v4.$) {
						var builtin = _v4.a;
						return _Utils_update(
							acc,
							{
								a: A2(
									$elm$core$List$cons,
									$elm$core$Result$Ok(
										A2($author$project$Stabel$Qualifier$Builtin, qLoc, builtin)),
									acc.a)
							});
					} else {
						var qualifiedName = A2($author$project$Stabel$Qualifier$qualifyName, config, value);
						var _v5 = A2($elm$core$Dict$get, qualifiedName, acc.d);
						if (!_v5.$) {
							var func = _v5.a;
							return _Utils_update(
								acc,
								{
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Ok(
											A2($author$project$Stabel$Qualifier$Function, qLoc, func)),
										acc.a)
								});
						} else {
							var _v6 = A3($author$project$Stabel$Qualifier$resolveImportedFunction, config, acc.P, value);
							if (!_v6.$) {
								var mod = _v6.a;
								if ($author$project$Stabel$Qualifier$representsExternalModule(mod)) {
									var path = A2(
										$elm$core$List$drop,
										2,
										$author$project$Stabel$Qualifier$splitExternalPackagePath(mod));
									var $temp$config = config,
										$temp$currentDefName = currentDefName,
										$temp$node = A3($author$project$Stabel$Parser$ExternalFunction, loc, path, value),
										$temp$acc = acc;
									config = $temp$config;
									currentDefName = $temp$currentDefName;
									node = $temp$node;
									acc = $temp$acc;
									continue qualifyNode;
								} else {
									var path = $author$project$Stabel$Qualifier$splitInternalPackagePath(mod);
									var $temp$config = config,
										$temp$currentDefName = currentDefName,
										$temp$node = A3($author$project$Stabel$Parser$PackageFunction, loc, path, value),
										$temp$acc = acc;
									config = $temp$config;
									currentDefName = $temp$currentDefName;
									node = $temp$node;
									acc = $temp$acc;
									continue qualifyNode;
								}
							} else {
								if (_Utils_eq(value, currentDefName)) {
									return _Utils_update(
										acc,
										{
											a: A2(
												$elm$core$List$cons,
												$elm$core$Result$Ok(
													$author$project$Stabel$Qualifier$Recurse(qLoc)),
												acc.a)
										});
								} else {
									var _v7 = A2($elm$core$Dict$get, value, config.k.bj);
									if (!_v7.$) {
										var fn = _v7.a;
										if (A2($elm$core$Set$member, value, acc.A)) {
											var _v8 = A3($author$project$Stabel$Qualifier$qualifyMetadata, config, acc.D, fn);
											if (!_v8.$) {
												var _v9 = _v8.a;
												var typeSignature = _v9.a;
												var exposed = _v9.b;
												return _Utils_update(
													acc,
													{
														a: A2(
															$elm$core$List$cons,
															$elm$core$Result$Ok(
																A2(
																	$author$project$Stabel$Qualifier$Cycle,
																	qLoc,
																	{
																		s: exposed,
																		bp: $author$project$Stabel$Qualifier$isMultiFunction(fn),
																		m: value,
																		U: A2($elm$core$Maybe$map, mapLoc, fn.w),
																		bO: typeSignature
																	})),
															acc.a)
													});
											} else {
												var err = _v8.a;
												return _Utils_update(
													acc,
													{
														a: A2(
															$elm$core$List$cons,
															$elm$core$Result$Err(err),
															acc.a)
													});
											}
										} else {
											var qualifyDefinitionResult = A5(
												$author$project$Stabel$Qualifier$qualifyDefinitionHelp,
												config,
												acc.D,
												acc.d,
												A2($elm$core$Set$insert, fn.m, acc.A),
												fn);
											var _v10 = qualifyDefinitionResult.C;
											if (!_v10.$) {
												var qualifiedFunction = _v10.a;
												return _Utils_update(
													acc,
													{
														A: A2($elm$core$Set$remove, fn.m, acc.A),
														aa: A2($elm$core$Set$union, qualifyDefinitionResult.aa, acc.aa),
														d: qualifyDefinitionResult.d,
														a: A2(
															$elm$core$List$cons,
															$elm$core$Result$Ok(
																A2($author$project$Stabel$Qualifier$Function, qLoc, qualifiedFunction)),
															acc.a)
													});
											} else {
												var err = _v10.a;
												return _Utils_update(
													acc,
													{
														A: A2($elm$core$Set$remove, fn.m, acc.A),
														a: A2(
															$elm$core$List$cons,
															$elm$core$Result$Err(err),
															acc.a)
													});
											}
										}
									} else {
										return _Utils_update(
											acc,
											{
												a: A2(
													$elm$core$List$cons,
													$elm$core$Result$Err(
														A2($author$project$Stabel$Qualifier$Problem$UnknownFunctionRef, qLoc, value)),
													acc.a)
											});
									}
								}
							}
						}
					}
				case 2:
					var loc = node.a;
					var path = node.b;
					var value = node.c;
					var qLoc = mapLoc(loc);
					var normalizedPathPreAliasCheck = A2($elm$core$String$join, '/', path);
					var normalizedPath = A2(
						$elm$core$Maybe$withDefault,
						normalizedPathPreAliasCheck,
						A2($elm$core$Dict$get, normalizedPathPreAliasCheck, acc.P.q));
					if ($author$project$Stabel$Qualifier$representsExternalModule(normalizedPath)) {
						var externalFunctionNode = A3(
							$author$project$Stabel$Parser$ExternalFunction,
							loc,
							$author$project$Stabel$Qualifier$splitExternalPackagePath(normalizedPath),
							value);
						var $temp$config = config,
							$temp$currentDefName = currentDefName,
							$temp$node = externalFunctionNode,
							$temp$acc = acc;
						config = $temp$config;
						currentDefName = $temp$currentDefName;
						node = $temp$node;
						acc = $temp$acc;
						continue qualifyNode;
					} else {
						var qualifiedPath = A2($author$project$Stabel$Qualifier$qualifyPackageModule, config.x, normalizedPath);
						var qualifiedName = A2(
							$elm$core$String$join,
							'/',
							_List_fromArray(
								[qualifiedPath, value]));
						var _v11 = A2($elm$core$Dict$get, qualifiedName, config.G.bj);
						if (_v11.$ === 1) {
							return _Utils_update(
								acc,
								{
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Err(
											A2($author$project$Stabel$Qualifier$Problem$UnknownFunctionRef, qLoc, qualifiedName)),
										acc.a)
								});
						} else {
							var _function = _v11.a;
							return _function.s ? _Utils_update(
								acc,
								{
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Ok(
											A2($author$project$Stabel$Qualifier$Function, qLoc, _function)),
										acc.a)
								}) : _Utils_update(
								acc,
								{
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Err(
											A2($author$project$Stabel$Qualifier$Problem$FunctionNotExposed, qLoc, qualifiedName)),
										acc.a)
								});
						}
					}
				case 3:
					var loc = node.a;
					var path = node.b;
					var value = node.c;
					var qLoc = mapLoc(loc);
					var normalizedPath = '/' + A2($elm$core$String$join, '/', path);
					var _v12 = A2($elm$core$Dict$get, normalizedPath, config.B);
					if (_v12.$ === 1) {
						return _Utils_update(
							acc,
							{
								a: A2(
									$elm$core$List$cons,
									$elm$core$Result$Err(
										A2($author$project$Stabel$Qualifier$Problem$UnknownFunctionRef, qLoc, normalizedPath + ('/' + value))),
									acc.a)
							});
					} else {
						var _package = _v12.a;
						var fullReference = $elm$core$String$concat(
							_List_fromArray(
								['/', _package, normalizedPath, '/', value]));
						var _v13 = A2($elm$core$Dict$get, fullReference, config.G.bj);
						if (_v13.$ === 1) {
							return _Utils_update(
								acc,
								{
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Err(
											A2($author$project$Stabel$Qualifier$Problem$UnknownFunctionRef, qLoc, fullReference)),
										acc.a)
								});
						} else {
							var def = _v13.a;
							return def.s ? _Utils_update(
								acc,
								{
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Ok(
											A2($author$project$Stabel$Qualifier$Function, qLoc, def)),
										acc.a)
								}) : _Utils_update(
								acc,
								{
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Err(
											A2($author$project$Stabel$Qualifier$Problem$FunctionNotExposed, qLoc, fullReference)),
										acc.a)
								});
						}
					}
				case 5:
					var typeName = node.a;
					var qualifiedName = A2($author$project$Stabel$Qualifier$qualifyName, config, typeName);
					var _v14 = A2($elm$core$Dict$get, qualifiedName, acc.D);
					if (!_v14.$) {
						var t = _v14.a;
						return _Utils_update(
							acc,
							{
								a: A2(
									$elm$core$List$cons,
									$elm$core$Result$Ok(
										$author$project$Stabel$Qualifier$ConstructType(t)),
									acc.a)
							});
					} else {
						return _Utils_update(
							acc,
							{
								a: A2(
									$elm$core$List$cons,
									$elm$core$Result$Err(
										A2($author$project$Stabel$Qualifier$Problem$UnknownTypeRef, $author$project$Stabel$Data$SourceLocation$emptyRange, qualifiedName)),
									acc.a)
							});
					}
				case 7:
					var typeName = node.a;
					var memberName = node.b;
					var qualifiedName = A2($author$project$Stabel$Qualifier$qualifyName, config, typeName);
					var _v15 = A2($elm$core$Dict$get, qualifiedName, acc.D);
					if (!_v15.$) {
						var t = _v15.a;
						var _v16 = A2($author$project$Stabel$Qualifier$getMemberType, t, memberName);
						if (!_v16.$) {
							var _v17 = _v16.a;
							var memberIndex = _v17.a;
							var memberType = _v17.b;
							return _Utils_update(
								acc,
								{
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Ok(
											A4($author$project$Stabel$Qualifier$SetMember, t, memberName, memberIndex, memberType)),
										acc.a)
								});
						} else {
							return _Utils_update(
								acc,
								{
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Err(
											A3($author$project$Stabel$Qualifier$Problem$NoSuchMemberOnType, $author$project$Stabel$Data$SourceLocation$emptyRange, qualifiedName, memberName)),
										acc.a)
								});
						}
					} else {
						return _Utils_update(
							acc,
							{
								a: A2(
									$elm$core$List$cons,
									$elm$core$Result$Err(
										A2($author$project$Stabel$Qualifier$Problem$UnknownTypeRef, $author$project$Stabel$Data$SourceLocation$emptyRange, qualifiedName)),
									acc.a)
							});
					}
				case 6:
					var typeName = node.a;
					var memberName = node.b;
					var qualifiedName = A2($author$project$Stabel$Qualifier$qualifyName, config, typeName);
					var _v18 = A2($elm$core$Dict$get, qualifiedName, acc.D);
					if (!_v18.$) {
						var t = _v18.a;
						var _v19 = A2($author$project$Stabel$Qualifier$getMemberType, t, memberName);
						if (!_v19.$) {
							var _v20 = _v19.a;
							var memberIndex = _v20.a;
							var memberType = _v20.b;
							return _Utils_update(
								acc,
								{
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Ok(
											A4($author$project$Stabel$Qualifier$GetMember, t, memberName, memberIndex, memberType)),
										acc.a)
								});
						} else {
							return _Utils_update(
								acc,
								{
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Err(
											A3($author$project$Stabel$Qualifier$Problem$NoSuchMemberOnType, $author$project$Stabel$Data$SourceLocation$emptyRange, qualifiedName, memberName)),
										acc.a)
								});
						}
					} else {
						return _Utils_update(
							acc,
							{
								a: A2(
									$elm$core$List$cons,
									$elm$core$Result$Err(
										A2($author$project$Stabel$Qualifier$Problem$UnknownTypeRef, $author$project$Stabel$Data$SourceLocation$emptyRange, qualifiedName)),
									acc.a)
							});
					}
				default:
					var sourceLocation = node.a;
					var quotImpl = node.b;
					var inlineFuncName = A2($elm$core$String$startsWith, 'inlinefn:', currentDefName) ? (currentDefName + ('/' + $elm$core$String$fromInt(acc.J))) : ('inlinefn:' + (A2($author$project$Stabel$Qualifier$qualifyName, config, currentDefName) + ('/' + $elm$core$String$fromInt(acc.J))));
					var qualifyNodeResult = A7($author$project$Stabel$Qualifier$initQualifyNode, config, acc.D, acc.d, inlineFuncName, acc.P, acc.A, quotImpl);
					var _v21 = qualifyNodeResult.a;
					if (!_v21.$) {
						if ((_v21.a.b && (_v21.a.a.$ === 1)) && (!_v21.a.b.b)) {
							var _v22 = _v21.a;
							var _v23 = _v22.a;
							var qualifiedFunction = _v23.b;
							return _Utils_update(
								acc,
								{
									aa: A2(
										$elm$core$Set$insert,
										qualifiedFunction.m,
										A2($elm$core$Set$union, qualifyNodeResult.aa, acc.aa)),
									d: A2($elm$core$Dict$union, acc.d, qualifyNodeResult.d),
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Ok(
											A2(
												$author$project$Stabel$Qualifier$FunctionRef,
												mapLoc(sourceLocation),
												qualifiedFunction)),
										acc.a)
								});
						} else {
							var qualifiedQuotImpl = _v21.a;
							var qualifiedFunction = {
								s: false,
								aL: $author$project$Stabel$Qualifier$SoloImpl(qualifiedQuotImpl),
								m: inlineFuncName,
								U: $elm$core$Maybe$Nothing,
								bO: $author$project$Stabel$Data$TypeSignature$NotProvided
							};
							return _Utils_update(
								acc,
								{
									J: acc.J + 1,
									aa: A2(
										$elm$core$Set$insert,
										inlineFuncName,
										A2($elm$core$Set$union, qualifyNodeResult.aa, acc.aa)),
									d: A3(
										$elm$core$Dict$insert,
										qualifiedFunction.m,
										qualifiedFunction,
										A2($elm$core$Dict$union, acc.d, qualifyNodeResult.d)),
									a: A2(
										$elm$core$List$cons,
										$elm$core$Result$Ok(
											A2(
												$author$project$Stabel$Qualifier$FunctionRef,
												mapLoc(sourceLocation),
												qualifiedFunction)),
										acc.a)
								});
						}
					} else {
						var err = _v21.a;
						return _Utils_update(
							acc,
							{
								a: A2(
									$elm$core$List$cons,
									$elm$core$Result$Err(err),
									acc.a)
							});
					}
			}
		}
	});
var $author$project$Stabel$Qualifier$qualifyWhen = F7(
	function (config, qualifiedTypes, functionName, modRefs, currentlyParsing, _v0, _v1) {
		var typeMatch = _v0.a;
		var impl = _v0.b;
		var qualifiedFunctions = _v1.a;
		var inlineFunctionNames = _v1.b;
		var result = _v1.c;
		var qualifyNodeResult = A7($author$project$Stabel$Qualifier$initQualifyNode, config, qualifiedTypes, qualifiedFunctions, functionName, modRefs, currentlyParsing, impl);
		var qualifiedMatchResult = A4($author$project$Stabel$Qualifier$qualifyMatch, config, qualifiedTypes, modRefs, typeMatch);
		return _Utils_Tuple3(
			qualifyNodeResult.d,
			A2($elm$core$Set$union, inlineFunctionNames, qualifyNodeResult.aa),
			function () {
				var _v2 = _Utils_Tuple2(qualifyNodeResult.a, qualifiedMatchResult);
				if (_v2.a.$ === 1) {
					var err = _v2.a.a;
					return A2(
						$elm$core$List$cons,
						$elm$core$Result$Err(err),
						result);
				} else {
					if (_v2.b.$ === 1) {
						var err = _v2.b.a;
						return A2(
							$elm$core$List$cons,
							$elm$core$Result$Err(err),
							result);
					} else {
						var qualifiedImplementation = _v2.a.a;
						var qualifiedMatch = _v2.b.a;
						return A2(
							$elm$core$List$cons,
							$elm$core$Result$Ok(
								_Utils_Tuple2(qualifiedMatch, qualifiedImplementation)),
							result);
					}
				}
			}());
	});
var $author$project$Stabel$Qualifier$qualifyDefinition = F5(
	function (config, qualifiedTypes, qualifiedFunctions, currentlyParsing, unqualifiedFunction) {
		var _v0 = A2($elm$core$Dict$get, unqualifiedFunction.m, qualifiedFunctions);
		if (!_v0.$) {
			var qualifiedFunction = _v0.a;
			return {
				aa: $elm$core$Set$empty,
				C: $elm$core$Result$Ok(qualifiedFunction),
				d: qualifiedFunctions
			};
		} else {
			return A5($author$project$Stabel$Qualifier$qualifyDefinitionHelp, config, qualifiedTypes, qualifiedFunctions, currentlyParsing, unqualifiedFunction);
		}
	});
var $author$project$Stabel$Qualifier$qualifyDefinitionFoldHelper = F4(
	function (config, qualifiedTypes, functionDef, _v0) {
		var errors = _v0.a;
		var qualifiedFunctions = _v0.b;
		var inlineFunctionNames = _v0.c;
		var qualificationResult = A5($author$project$Stabel$Qualifier$qualifyDefinition, config, qualifiedTypes, qualifiedFunctions, $elm$core$Set$empty, functionDef);
		var _v1 = qualificationResult.C;
		if (_v1.$ === 1) {
			var err = _v1.a;
			return _Utils_Tuple3(
				A2($elm$core$List$cons, err, errors),
				qualificationResult.d,
				A2($elm$core$Set$union, qualificationResult.aa, inlineFunctionNames));
		} else {
			return _Utils_Tuple3(
				errors,
				qualificationResult.d,
				A2($elm$core$Set$union, qualificationResult.aa, inlineFunctionNames));
		}
	});
var $author$project$Stabel$Qualifier$StructMembers = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$Qualifier$UnionMembers = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === -2) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Set$isEmpty = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$isEmpty(dict);
};
var $author$project$Stabel$Qualifier$qualifyType = F3(
	function (config, typeDef, _v0) {
		var errors = _v0.a;
		var acc = _v0.b;
		var qualifiedRange = A3($author$project$Stabel$Data$SourceLocation$SourceLocationRange, config.k.a$, typeDef.U.bJ, typeDef.U.bd);
		var qualifiedName = A2($author$project$Stabel$Qualifier$qualifyName, config, typeDef.m);
		var modDef = $author$project$Stabel$Qualifier$moduleDefinition(config);
		var _v1 = _Utils_Tuple2(
			{q: modDef.q, t: modDef.t},
			modDef.bg);
		var modRefs = _v1.a;
		var exposes = _v1.b;
		var exposed = $elm$core$Set$isEmpty(exposes) || A2($elm$core$Set$member, typeDef.m, exposes);
		var _v2 = typeDef.aQ;
		if (!_v2.$) {
			var members = _v2.a;
			var raiseTupleError = function (_v5) {
				var label = _v5.a;
				var result = _v5.b;
				if (!result.$) {
					var value = result.a;
					return $elm$core$Result$Ok(
						_Utils_Tuple2(label, value));
				} else {
					var err = result.a;
					return $elm$core$Result$Err(err);
				}
			};
			var qualifiedMemberResult = $elm_community$result_extra$Result$Extra$combine(
				A2(
					$elm$core$List$map,
					raiseTupleError,
					A2(
						$elm$core$List$map,
						$elm$core$Tuple$mapSecond(
							A3($author$project$Stabel$Qualifier$qualifyMemberType, config, modRefs, qualifiedRange)),
						members)));
			if (qualifiedMemberResult.$ === 1) {
				var err = qualifiedMemberResult.a;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, err, errors),
					acc);
			} else {
				var qualifiedMembers = qualifiedMemberResult.a;
				return _Utils_Tuple2(
					errors,
					A3(
						$elm$core$Dict$insert,
						qualifiedName,
						{
							s: exposed,
							_: typeDef._,
							aQ: $author$project$Stabel$Qualifier$StructMembers(qualifiedMembers),
							m: qualifiedName,
							U: qualifiedRange
						},
						acc));
			}
		} else {
			var memberTypes = _v2.a;
			var qualifiedMemberTypesResult = $elm_community$result_extra$Result$Extra$combine(
				A2(
					$elm$core$List$map,
					A3($author$project$Stabel$Qualifier$qualifyMemberType, config, modRefs, qualifiedRange),
					memberTypes));
			if (qualifiedMemberTypesResult.$ === 1) {
				var err = qualifiedMemberTypesResult.a;
				return _Utils_Tuple2(
					A2($elm$core$List$cons, err, errors),
					acc);
			} else {
				var qualifiedMemberTypes = qualifiedMemberTypesResult.a;
				return _Utils_Tuple2(
					errors,
					A3(
						$elm$core$Dict$insert,
						qualifiedName,
						{
							s: exposed,
							_: typeDef._,
							aQ: $author$project$Stabel$Qualifier$UnionMembers(qualifiedMemberTypes),
							m: qualifiedName,
							U: qualifiedRange
						},
						acc));
			}
		}
	});
var $author$project$Stabel$Qualifier$resolveUnionInTypeDefs = F2(
	function (qt, td) {
		return _Utils_update(
			td,
			{
				aQ: function () {
					var _v0 = td.aQ;
					if (!_v0.$) {
						var members = _v0.a;
						return $author$project$Stabel$Qualifier$StructMembers(
							A2(
								$elm$core$List$map,
								$elm$core$Tuple$mapSecond(
									$author$project$Stabel$Qualifier$resolveUnion(qt)),
								members));
					} else {
						var members = _v0.a;
						return $author$project$Stabel$Qualifier$UnionMembers(
							A2(
								$elm$core$List$map,
								$author$project$Stabel$Qualifier$resolveUnion(qt),
								members));
					}
				}()
			});
	});
var $author$project$Stabel$Qualifier$run = function (config) {
	var _v0 = A2(
		$elm$core$Tuple$mapSecond,
		function (qt) {
			return A2(
				$elm$core$Dict$map,
				F2(
					function (_v2, v) {
						return A2($author$project$Stabel$Qualifier$resolveUnionInTypeDefs, qt, v);
					}),
				qt);
		},
		A3(
			$elm$core$Dict$foldl,
			F3(
				function (_v1, val, acc) {
					return A3($author$project$Stabel$Qualifier$qualifyType, config, val, acc);
				}),
			_Utils_Tuple2(_List_Nil, $elm$core$Dict$empty),
			config.k.I));
	var typeErrors = _v0.a;
	var qualifiedTypes = _v0.b;
	var allQualifiedTypes = A2($elm$core$Dict$union, qualifiedTypes, config.G.I);
	var _v3 = A3(
		$elm$core$Dict$foldl,
		F3(
			function (_v4, val, acc) {
				return A4($author$project$Stabel$Qualifier$qualifyDefinitionFoldHelper, config, allQualifiedTypes, val, acc);
			}),
		_Utils_Tuple3(_List_Nil, $elm$core$Dict$empty, $elm$core$Set$empty),
		config.k.bj);
	var functionErrors = _v3.a;
	var qualifiedFunctions = _v3.b;
	var inlineFunctionNames = _v3.c;
	var _v5 = _Utils_Tuple2(typeErrors, functionErrors);
	if ((!_v5.a.b) && (!_v5.b.b)) {
		return $elm$core$Result$Ok(
			{bj: qualifiedFunctions, aW: inlineFunctionNames, I: qualifiedTypes});
	} else {
		return $elm$core$Result$Err(
			_Utils_ap(typeErrors, functionErrors));
	}
};
var $author$project$TestCompiler$qualifyTestTuples = F2(
	function (_v0, _v1) {
		var packageName = _v0.a;
		var modulePath = _v0.b;
		var parserAst = _v0.c;
		var problems = _v1.a;
		var config = _v1.b;
		var updatedConfig = _Utils_update(
			config,
			{k: parserAst, aR: modulePath, x: packageName});
		var _v2 = $author$project$Stabel$Qualifier$run(updatedConfig);
		if (_v2.$ === 1) {
			var errs = _v2.a;
			return _Utils_Tuple2(
				_Utils_ap(errs, problems),
				updatedConfig);
		} else {
			var qualifiedAST = _v2.a;
			var inProgressAST = updatedConfig.G;
			var updatedInProgressAst = _Utils_update(
				inProgressAST,
				{
					bj: A2($elm$core$Dict$union, qualifiedAST.bj, inProgressAST.bj),
					aW: A2($elm$core$Set$union, qualifiedAST.aW, inProgressAST.aW),
					I: A2($elm$core$Dict$union, qualifiedAST.I, inProgressAST.I)
				});
			var configWithQualifiedAst = _Utils_update(
				updatedConfig,
				{
					B: A3($elm$core$Dict$insert, '/' + modulePath, packageName, updatedConfig.B),
					G: updatedInProgressAst
				});
			return _Utils_Tuple2(problems, configWithQualifiedAst);
		}
	});
var $author$project$Stabel$Wasm$Memory = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Stabel$Wasm$Block = function (a) {
	return {$: 1, a: a};
};
var $author$project$Stabel$Wasm$Break = function (a) {
	return {$: 3, a: a};
};
var $author$project$Stabel$Wasm$BreakIf = function (a) {
	return {$: 4, a: a};
};
var $author$project$Stabel$Wasm$Call = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $author$project$Stabel$Wasm$CallIndirect = {$: 7};
var $author$project$Stabel$Wasm$Drop = {$: 21};
var $author$project$Stabel$Wasm$I32_Add = {$: 12};
var $author$project$Stabel$Wasm$I32_Const = function (a) {
	return {$: 11, a: a};
};
var $author$project$Stabel$Wasm$I32_Div = {$: 15};
var $author$project$Stabel$Wasm$I32_Eq = {$: 16};
var $author$project$Stabel$Wasm$I32_EqZero = {$: 18};
var $author$project$Stabel$Wasm$I32_Load = {$: 20};
var $author$project$Stabel$Wasm$I32_Mul = {$: 14};
var $author$project$Stabel$Wasm$I32_Store = {$: 19};
var $author$project$Stabel$Wasm$I32_Sub = {$: 13};
var $author$project$Stabel$Wasm$Int32 = 0;
var $author$project$Stabel$Wasm$Local_Get = function (a) {
	return {$: 8, a: a};
};
var $author$project$Stabel$Wasm$Local_Set = function (a) {
	return {$: 9, a: a};
};
var $author$project$Stabel$Wasm$Local_Tee = function (a) {
	return {$: 10, a: a};
};
var $author$project$Stabel$Wasm$Loop = function (a) {
	return {$: 2, a: a};
};
var $author$project$Stabel$Codegen$BaseModule$addIntFn = '__add_i32';
var $author$project$Stabel$Codegen$BaseModule$allocFn = '__alloc';
var $author$project$Stabel$Codegen$BaseModule$boxFn = '__box';
var $author$project$Stabel$Codegen$BaseModule$callAllocFn = A2($author$project$Stabel$Wasm$Call, 1, $author$project$Stabel$Codegen$BaseModule$allocFn);
var $author$project$Stabel$Codegen$BaseModule$stackGetElementFn = '__stack_get';
var $author$project$Stabel$Codegen$BaseModule$callStackGetElementFn = A2($author$project$Stabel$Wasm$Call, 15, $author$project$Stabel$Codegen$BaseModule$stackGetElementFn);
var $author$project$Stabel$Codegen$BaseModule$stackPopFn = '__stack_pop';
var $author$project$Stabel$Codegen$BaseModule$callStackPopFn = A2($author$project$Stabel$Wasm$Call, 4, $author$project$Stabel$Codegen$BaseModule$stackPopFn);
var $author$project$Stabel$Codegen$BaseModule$stackPushFn = '__stack_push';
var $author$project$Stabel$Codegen$BaseModule$callStackPushFn = A2($author$project$Stabel$Wasm$Call, 3, $author$project$Stabel$Codegen$BaseModule$stackPushFn);
var $author$project$Stabel$Codegen$BaseModule$stackReplaceElementFn = '__stack_replace';
var $author$project$Stabel$Codegen$BaseModule$callStackReplaceElementFn = A2($author$project$Stabel$Wasm$Call, 16, $author$project$Stabel$Codegen$BaseModule$stackReplaceElementFn);
var $author$project$Stabel$Codegen$BaseModule$swapFn = '__swap';
var $author$project$Stabel$Codegen$BaseModule$callSwapFn = A2($author$project$Stabel$Wasm$Call, 7, $author$project$Stabel$Codegen$BaseModule$swapFn);
var $author$project$Stabel$Codegen$BaseModule$copyStructFn = '__copy_struct';
var $author$project$Stabel$Codegen$BaseModule$defaultStackSize = 1024;
var $author$project$Stabel$Codegen$BaseModule$divIntFn = '__div_i32';
var $author$project$Stabel$Codegen$BaseModule$dropFn = '__drop';
var $author$project$Stabel$Codegen$BaseModule$dupFn = '__duplicate';
var $author$project$Stabel$Codegen$BaseModule$eqIntFn = '__eq_i32';
var $author$project$Stabel$Codegen$BaseModule$execInlineFn = '__exec_inline';
var $author$project$Stabel$Codegen$BaseModule$wasmPtrSize = 4;
var $author$project$Stabel$Codegen$BaseModule$stackPositionOffset = $author$project$Stabel$Codegen$BaseModule$wasmPtrSize;
var $author$project$Stabel$Codegen$BaseModule$initialHeapPositionOffset = $author$project$Stabel$Codegen$BaseModule$stackPositionOffset + $author$project$Stabel$Codegen$BaseModule$wasmPtrSize;
var $author$project$Stabel$Codegen$BaseModule$leftRotFn = '__left_rotate';
var $author$project$Stabel$Codegen$BaseModule$mulIntFn = '__mul_i32';
var $author$project$Stabel$Codegen$BaseModule$rotFn = '__rotate';
var $author$project$Stabel$Codegen$BaseModule$stackCapacityOffset = 0;
var $author$project$Stabel$Codegen$BaseModule$subIntFn = '__sub_i32';
var $author$project$Stabel$Codegen$BaseModule$unboxFn = '__unbox';
var $author$project$Stabel$Codegen$BaseModule$baseFunctions = _List_fromArray(
	[
		{
		a8: _List_Nil,
		bk: 0,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$stackCapacityOffset),
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$defaultStackSize),
				$author$project$Stabel$Wasm$I32_Store,
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$stackPositionOffset),
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$wasmPtrSize * 3),
				$author$project$Stabel$Wasm$I32_Store,
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$initialHeapPositionOffset),
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$defaultStackSize + $author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
				$author$project$Stabel$Wasm$I32_Store
			]),
		bq: _List_Nil,
		m: '__initialize',
		bH: _List_Nil
	},
		{
		a8: _List_fromArray(
			[0]),
		bk: 1,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$initialHeapPositionOffset),
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$initialHeapPositionOffset),
				$author$project$Stabel$Wasm$I32_Load,
				$author$project$Stabel$Wasm$Local_Tee(1),
				$author$project$Stabel$Wasm$Local_Get(0),
				$author$project$Stabel$Wasm$I32_Add,
				$author$project$Stabel$Wasm$I32_Store,
				$author$project$Stabel$Wasm$Local_Get(1)
			]),
		bq: _List_fromArray(
			[0]),
		m: $author$project$Stabel$Codegen$BaseModule$allocFn,
		bH: _List_fromArray(
			[0])
	},
		{
		a8: _List_fromArray(
			[0, 0]),
		bk: 2,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Wasm$Local_Get(1),
				$author$project$Stabel$Codegen$BaseModule$callAllocFn,
				$author$project$Stabel$Wasm$Local_Set(2),
				$author$project$Stabel$Wasm$Block(
				_List_fromArray(
					[
						$author$project$Stabel$Wasm$Loop(
						_List_fromArray(
							[
								$author$project$Stabel$Wasm$Local_Get(1),
								$author$project$Stabel$Wasm$I32_EqZero,
								$author$project$Stabel$Wasm$BreakIf(1),
								$author$project$Stabel$Wasm$Local_Get(1),
								$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
								$author$project$Stabel$Wasm$I32_Sub,
								$author$project$Stabel$Wasm$Local_Set(1),
								$author$project$Stabel$Wasm$Local_Get(0),
								$author$project$Stabel$Wasm$Local_Get(1),
								$author$project$Stabel$Wasm$I32_Add,
								$author$project$Stabel$Wasm$I32_Load,
								$author$project$Stabel$Wasm$Local_Set(3),
								$author$project$Stabel$Wasm$Local_Get(2),
								$author$project$Stabel$Wasm$Local_Get(1),
								$author$project$Stabel$Wasm$I32_Add,
								$author$project$Stabel$Wasm$Local_Get(3),
								$author$project$Stabel$Wasm$I32_Store,
								$author$project$Stabel$Wasm$Break(0)
							]))
					])),
				$author$project$Stabel$Wasm$Local_Get(2)
			]),
		bq: _List_fromArray(
			[0, 0]),
		m: $author$project$Stabel$Codegen$BaseModule$copyStructFn,
		bH: _List_fromArray(
			[0])
	},
		{
		a8: _List_fromArray(
			[0]),
		bk: 3,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$stackPositionOffset),
				$author$project$Stabel$Wasm$I32_Load,
				$author$project$Stabel$Wasm$Local_Tee(1),
				$author$project$Stabel$Wasm$Local_Get(0),
				$author$project$Stabel$Wasm$I32_Store,
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$stackPositionOffset),
				$author$project$Stabel$Wasm$Local_Get(1),
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
				$author$project$Stabel$Wasm$I32_Add,
				$author$project$Stabel$Wasm$I32_Store
			]),
		bq: _List_fromArray(
			[0]),
		m: $author$project$Stabel$Codegen$BaseModule$stackPushFn,
		bH: _List_Nil
	},
		{
		a8: _List_Nil,
		bk: 4,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$stackPositionOffset),
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$stackPositionOffset),
				$author$project$Stabel$Wasm$I32_Load,
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
				$author$project$Stabel$Wasm$I32_Sub,
				$author$project$Stabel$Wasm$Local_Tee(0),
				$author$project$Stabel$Wasm$I32_Store,
				$author$project$Stabel$Wasm$Local_Get(0),
				$author$project$Stabel$Wasm$I32_Load
			]),
		bq: _List_fromArray(
			[0]),
		m: $author$project$Stabel$Codegen$BaseModule$stackPopFn,
		bH: _List_fromArray(
			[0])
	},
		{
		a8: _List_Nil,
		bk: 5,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
				$author$project$Stabel$Wasm$Local_Tee(0),
				$author$project$Stabel$Wasm$Local_Get(0),
				$author$project$Stabel$Codegen$BaseModule$callStackPushFn,
				$author$project$Stabel$Codegen$BaseModule$callStackPushFn
			]),
		bq: _List_fromArray(
			[0]),
		m: $author$project$Stabel$Codegen$BaseModule$dupFn,
		bH: _List_Nil
	},
		{
		a8: _List_Nil,
		bk: 6,
		bn: _List_fromArray(
			[$author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Wasm$Drop]),
		bq: _List_Nil,
		m: $author$project$Stabel$Codegen$BaseModule$dropFn,
		bH: _List_Nil
	},
		{
		a8: _List_Nil,
		bk: 7,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
				$author$project$Stabel$Wasm$Local_Set(0),
				$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
				$author$project$Stabel$Wasm$Local_Get(0),
				$author$project$Stabel$Codegen$BaseModule$callStackPushFn,
				$author$project$Stabel$Codegen$BaseModule$callStackPushFn
			]),
		bq: _List_fromArray(
			[0]),
		m: $author$project$Stabel$Codegen$BaseModule$swapFn,
		bH: _List_Nil
	},
		{
		a8: _List_Nil,
		bk: 8,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
				$author$project$Stabel$Wasm$Local_Set(0),
				$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
				$author$project$Stabel$Wasm$Local_Set(1),
				$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
				$author$project$Stabel$Wasm$Local_Set(2),
				$author$project$Stabel$Wasm$Local_Get(0),
				$author$project$Stabel$Codegen$BaseModule$callStackPushFn,
				$author$project$Stabel$Wasm$Local_Get(2),
				$author$project$Stabel$Codegen$BaseModule$callStackPushFn,
				$author$project$Stabel$Wasm$Local_Get(1),
				$author$project$Stabel$Codegen$BaseModule$callStackPushFn
			]),
		bq: _List_fromArray(
			[0, 0, 0]),
		m: $author$project$Stabel$Codegen$BaseModule$rotFn,
		bH: _List_Nil
	},
		{
		a8: _List_Nil,
		bk: 9,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
				$author$project$Stabel$Wasm$Local_Set(0),
				$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
				$author$project$Stabel$Wasm$Local_Set(1),
				$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
				$author$project$Stabel$Wasm$Local_Set(2),
				$author$project$Stabel$Wasm$Local_Get(1),
				$author$project$Stabel$Codegen$BaseModule$callStackPushFn,
				$author$project$Stabel$Wasm$Local_Get(0),
				$author$project$Stabel$Codegen$BaseModule$callStackPushFn,
				$author$project$Stabel$Wasm$Local_Get(2),
				$author$project$Stabel$Codegen$BaseModule$callStackPushFn
			]),
		bq: _List_fromArray(
			[0, 0, 0]),
		m: $author$project$Stabel$Codegen$BaseModule$leftRotFn,
		bH: _List_Nil
	},
		{
		a8: _List_Nil,
		bk: 10,
		bn: _List_fromArray(
			[$author$project$Stabel$Codegen$BaseModule$callSwapFn, $author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Wasm$I32_Add, $author$project$Stabel$Codegen$BaseModule$callStackPushFn]),
		bq: _List_Nil,
		m: $author$project$Stabel$Codegen$BaseModule$addIntFn,
		bH: _List_Nil
	},
		{
		a8: _List_Nil,
		bk: 11,
		bn: _List_fromArray(
			[$author$project$Stabel$Codegen$BaseModule$callSwapFn, $author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Wasm$I32_Sub, $author$project$Stabel$Codegen$BaseModule$callStackPushFn]),
		bq: _List_Nil,
		m: $author$project$Stabel$Codegen$BaseModule$subIntFn,
		bH: _List_Nil
	},
		{
		a8: _List_Nil,
		bk: 12,
		bn: _List_fromArray(
			[$author$project$Stabel$Codegen$BaseModule$callSwapFn, $author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Wasm$I32_Mul, $author$project$Stabel$Codegen$BaseModule$callStackPushFn]),
		bq: _List_Nil,
		m: $author$project$Stabel$Codegen$BaseModule$mulIntFn,
		bH: _List_Nil
	},
		{
		a8: _List_Nil,
		bk: 13,
		bn: _List_fromArray(
			[$author$project$Stabel$Codegen$BaseModule$callSwapFn, $author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Wasm$I32_Div, $author$project$Stabel$Codegen$BaseModule$callStackPushFn]),
		bq: _List_Nil,
		m: $author$project$Stabel$Codegen$BaseModule$divIntFn,
		bH: _List_Nil
	},
		{
		a8: _List_Nil,
		bk: 14,
		bn: _List_fromArray(
			[$author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Wasm$I32_Eq, $author$project$Stabel$Codegen$BaseModule$callStackPushFn]),
		bq: _List_Nil,
		m: $author$project$Stabel$Codegen$BaseModule$eqIntFn,
		bH: _List_Nil
	},
		{
		a8: _List_fromArray(
			[0]),
		bk: 15,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$stackPositionOffset),
				$author$project$Stabel$Wasm$I32_Load,
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
				$author$project$Stabel$Wasm$Local_Get(0),
				$author$project$Stabel$Wasm$I32_Const(1),
				$author$project$Stabel$Wasm$I32_Add,
				$author$project$Stabel$Wasm$I32_Mul,
				$author$project$Stabel$Wasm$I32_Sub,
				$author$project$Stabel$Wasm$I32_Load
			]),
		bq: _List_Nil,
		m: $author$project$Stabel$Codegen$BaseModule$stackGetElementFn,
		bH: _List_fromArray(
			[0])
	},
		{
		a8: _List_fromArray(
			[0, 0]),
		bk: 16,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$stackPositionOffset),
				$author$project$Stabel$Wasm$I32_Load,
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
				$author$project$Stabel$Wasm$Local_Get(0),
				$author$project$Stabel$Wasm$I32_Const(1),
				$author$project$Stabel$Wasm$I32_Add,
				$author$project$Stabel$Wasm$I32_Mul,
				$author$project$Stabel$Wasm$I32_Sub,
				$author$project$Stabel$Wasm$Local_Get(1),
				$author$project$Stabel$Wasm$I32_Store
			]),
		bq: _List_Nil,
		m: $author$project$Stabel$Codegen$BaseModule$stackReplaceElementFn,
		bH: _List_Nil
	},
		{
		a8: _List_fromArray(
			[0, 0]),
		bk: 17,
		bn: function () {
			var typeSize = $author$project$Stabel$Codegen$BaseModule$wasmPtrSize * 2;
			return _List_fromArray(
				[
					$author$project$Stabel$Wasm$I32_Const(typeSize),
					A2($author$project$Stabel$Wasm$Call, 1, $author$project$Stabel$Codegen$BaseModule$allocFn),
					$author$project$Stabel$Wasm$Local_Tee(2),
					$author$project$Stabel$Wasm$Local_Get(1),
					$author$project$Stabel$Wasm$I32_Store,
					$author$project$Stabel$Wasm$Local_Get(2),
					$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
					$author$project$Stabel$Wasm$I32_Add,
					$author$project$Stabel$Wasm$Local_Get(0),
					$author$project$Stabel$Codegen$BaseModule$callStackGetElementFn,
					$author$project$Stabel$Wasm$I32_Store,
					$author$project$Stabel$Wasm$Local_Get(0),
					$author$project$Stabel$Wasm$Local_Get(2),
					$author$project$Stabel$Codegen$BaseModule$callStackReplaceElementFn
				]);
		}(),
		bq: _List_fromArray(
			[0]),
		m: $author$project$Stabel$Codegen$BaseModule$boxFn,
		bH: _List_Nil
	},
		{
		a8: _List_fromArray(
			[0]),
		bk: 18,
		bn: _List_fromArray(
			[
				$author$project$Stabel$Wasm$Local_Get(0),
				$author$project$Stabel$Wasm$Local_Get(0),
				$author$project$Stabel$Codegen$BaseModule$callStackGetElementFn,
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
				$author$project$Stabel$Wasm$I32_Add,
				$author$project$Stabel$Wasm$I32_Load,
				$author$project$Stabel$Codegen$BaseModule$callStackReplaceElementFn
			]),
		bq: _List_Nil,
		m: $author$project$Stabel$Codegen$BaseModule$unboxFn,
		bH: _List_Nil
	},
		{
		a8: _List_Nil,
		bk: 19,
		bn: _List_fromArray(
			[$author$project$Stabel$Codegen$BaseModule$callStackPopFn, $author$project$Stabel$Wasm$CallIndirect]),
		bq: _List_Nil,
		m: $author$project$Stabel$Codegen$BaseModule$execInlineFn,
		bH: _List_Nil
	}
	]);
var $author$project$Stabel$Wasm$Module = $elm$core$Basics$identity;
var $author$project$Stabel$Wasm$initModule = {ao: _List_Nil, bj: _List_Nil, t: _List_Nil, bF: _List_Nil, bJ: $elm$core$Maybe$Nothing, M: _List_Nil};
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
var $author$project$Stabel$Wasm$withFunction = F2(
	function (funcDef, _v0) {
		var module_ = _v0;
		var typeSignature = {ac: funcDef.a8, af: funcDef.bH};
		var _v1 = function () {
			var _v2 = A2($elm_community$list_extra$List$Extra$elemIndex, typeSignature, module_.M);
			if (!_v2.$) {
				var idx = _v2.a;
				return _Utils_Tuple2(idx, module_);
			} else {
				return _Utils_Tuple2(
					$elm$core$List$length(module_.M),
					_Utils_update(
						module_,
						{
							M: _Utils_ap(
								module_.M,
								_List_fromArray(
									[typeSignature]))
						}));
			}
		}();
		var tsIndex = _v1.a;
		var updatedModule = _v1.b;
		var newFunction = {bk: funcDef.bk, bn: funcDef.bn, bq: funcDef.bq, m: funcDef.m, ay: tsIndex};
		return _Utils_update(
			updatedModule,
			{
				bj: A2($elm$core$List$cons, newFunction, updatedModule.bj)
			});
	});
var $author$project$Stabel$Wasm$withImport = F4(
	function (importModule, entityName, typeToImport, _v0) {
		var module_ = _v0;
		return _Utils_update(
			module_,
			{
				t: A2(
					$elm$core$List$cons,
					{an: entityName, ar: importModule, V: typeToImport},
					module_.t)
			});
	});
var $author$project$Stabel$Wasm$withStartFunction = F2(
	function (startIdx, _v0) {
		var fields = _v0;
		return _Utils_update(
			fields,
			{
				bJ: $elm$core$Maybe$Just(startIdx)
			});
	});
var $author$project$Stabel$Codegen$BaseModule$baseModule = function () {
	var withoutFunctions = A2(
		$author$project$Stabel$Wasm$withStartFunction,
		0,
		A4(
			$author$project$Stabel$Wasm$withImport,
			'host',
			'memory',
			A2($author$project$Stabel$Wasm$Memory, 1, $elm$core$Maybe$Nothing),
			$author$project$Stabel$Wasm$initModule));
	return A3($elm$core$List$foldl, $author$project$Stabel$Wasm$withFunction, withoutFunctions, $author$project$Stabel$Codegen$BaseModule$baseFunctions);
}();
var $author$project$Stabel$Codegen$IdAssigner$empty = function (startingId) {
	return {aC: $elm$core$Dict$empty, L: startingId};
};
var $author$project$Stabel$Codegen$BaseModule$firstAvailableFunctionId = 20;
var $author$project$Stabel$Codegen$emptyContext = {
	K: $author$project$Stabel$Codegen$IdAssigner$empty($author$project$Stabel$Codegen$BaseModule$firstAvailableFunctionId),
	aa: _List_Nil,
	ak: $author$project$Stabel$Codegen$IdAssigner$empty(0)
};
var $elm$core$Set$foldr = F3(
	function (func, initialState, _v0) {
		var dict = _v0;
		return A3(
			$elm$core$Dict$foldr,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $author$project$Stabel$Codegen$Box = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var $author$project$Stabel$Codegen$Builtin = function (a) {
	return {$: 6, a: a};
};
var $author$project$Stabel$Codegen$ConstructType = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$Stabel$Codegen$Function = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Stabel$Codegen$FunctionRef = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Stabel$Codegen$GetMember = function (a) {
	return {$: 5, a: a};
};
var $author$project$Stabel$Codegen$IntLiteral = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$Codegen$SetMember = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $author$project$Stabel$Data$Builtin$functionType = function (builtin) {
	switch (builtin) {
		case 0:
			return {
				o: _List_fromArray(
					[$author$project$Stabel$Data$Type$Int, $author$project$Stabel$Data$Type$Int]),
				H: _List_fromArray(
					[$author$project$Stabel$Data$Type$Int])
			};
		case 1:
			return {
				o: _List_fromArray(
					[$author$project$Stabel$Data$Type$Int, $author$project$Stabel$Data$Type$Int]),
				H: _List_fromArray(
					[$author$project$Stabel$Data$Type$Int])
			};
		case 2:
			return {
				o: _List_fromArray(
					[$author$project$Stabel$Data$Type$Int, $author$project$Stabel$Data$Type$Int]),
				H: _List_fromArray(
					[$author$project$Stabel$Data$Type$Int])
			};
		case 3:
			return {
				o: _List_fromArray(
					[$author$project$Stabel$Data$Type$Int, $author$project$Stabel$Data$Type$Int]),
				H: _List_fromArray(
					[$author$project$Stabel$Data$Type$Int])
			};
		case 4:
			return {
				o: _List_fromArray(
					[$author$project$Stabel$Data$Type$Int, $author$project$Stabel$Data$Type$Int]),
				H: _List_fromArray(
					[$author$project$Stabel$Data$Type$Int])
			};
		case 5:
			return {
				o: _List_fromArray(
					[
						$author$project$Stabel$Data$Type$Generic('a')
					]),
				H: _List_fromArray(
					[
						$author$project$Stabel$Data$Type$Generic('a'),
						$author$project$Stabel$Data$Type$Generic('a')
					])
			};
		case 6:
			return {
				o: _List_fromArray(
					[
						$author$project$Stabel$Data$Type$Generic('a')
					]),
				H: _List_Nil
			};
		case 7:
			return {
				o: _List_fromArray(
					[
						$author$project$Stabel$Data$Type$Generic('a'),
						$author$project$Stabel$Data$Type$Generic('b')
					]),
				H: _List_fromArray(
					[
						$author$project$Stabel$Data$Type$Generic('b'),
						$author$project$Stabel$Data$Type$Generic('a')
					])
			};
		case 8:
			return {
				o: _List_fromArray(
					[
						$author$project$Stabel$Data$Type$Generic('a'),
						$author$project$Stabel$Data$Type$Generic('b'),
						$author$project$Stabel$Data$Type$Generic('c')
					]),
				H: _List_fromArray(
					[
						$author$project$Stabel$Data$Type$Generic('c'),
						$author$project$Stabel$Data$Type$Generic('a'),
						$author$project$Stabel$Data$Type$Generic('b')
					])
			};
		case 9:
			return {
				o: _List_fromArray(
					[
						$author$project$Stabel$Data$Type$Generic('a'),
						$author$project$Stabel$Data$Type$Generic('b'),
						$author$project$Stabel$Data$Type$Generic('c')
					]),
				H: _List_fromArray(
					[
						$author$project$Stabel$Data$Type$Generic('b'),
						$author$project$Stabel$Data$Type$Generic('c'),
						$author$project$Stabel$Data$Type$Generic('a')
					])
			};
		default:
			return {
				o: _List_fromArray(
					[
						$author$project$Stabel$Data$Type$StackRange('a'),
						$author$project$Stabel$Data$Type$FunctionSignature(
						{
							o: _List_fromArray(
								[
									$author$project$Stabel$Data$Type$StackRange('a')
								]),
							H: _List_fromArray(
								[
									$author$project$Stabel$Data$Type$StackRange('b')
								])
						})
					]),
				H: _List_fromArray(
					[
						$author$project$Stabel$Data$Type$StackRange('b')
					])
			};
	}
};
var $author$project$Stabel$Codegen$IdAssigner$assignId = F2(
	function (name, assign) {
		var _v0 = A2($elm$core$Dict$get, name, assign.aC);
		if (!_v0.$) {
			var id = _v0.a;
			return _Utils_Tuple2(id, assign);
		} else {
			return _Utils_Tuple2(
				assign.L,
				_Utils_update(
					assign,
					{
						aC: A3($elm$core$Dict$insert, name, assign.L, assign.aC),
						L: assign.L + 1
					}));
		}
	});
var $author$project$Stabel$Codegen$idForFunction = F2(
	function (funcName, context) {
		var _v0 = A2($author$project$Stabel$Codegen$IdAssigner$assignId, funcName, context.K);
		var id = _v0.a;
		var assign = _v0.b;
		return _Utils_Tuple2(
			id,
			_Utils_update(
				context,
				{K: assign}));
	});
var $author$project$Stabel$Codegen$idForType = F2(
	function (typeName, context) {
		var _v0 = A2($author$project$Stabel$Codegen$IdAssigner$assignId, typeName, context.ak);
		var id = _v0.a;
		var assign = _v0.b;
		return _Utils_Tuple2(
			id,
			_Utils_update(
				context,
				{ak: assign}));
	});
var $author$project$Stabel$Codegen$memberSize = function (def) {
	var _v0 = def.aQ;
	if (!_v0.$) {
		var members = _v0.a;
		return $elm$core$List$length(members);
	} else {
		var members = _v0.a;
		return $elm$core$List$length(members);
	}
};
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $author$project$Stabel$Codegen$requiresBoxingInPatternMatch = function (type_) {
	switch (type_.$) {
		case 0:
			return true;
		case 1:
			return true;
		default:
			return false;
	}
};
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $author$project$Stabel$Codegen$unionBoxMap = function (union) {
	var helper = F2(
		function (t, _v0) {
			var nextId = _v0.a;
			var mapping = _v0.b;
			return $author$project$Stabel$Codegen$requiresBoxingInPatternMatch(t) ? _Utils_Tuple2(
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
var $author$project$Stabel$Codegen$astNodeToCodegenNode = F3(
	function (def, node, _v0) {
		var stack = _v0.a;
		var result = _v0.b;
		var context = _v0.c;
		var typeFromTypeDef = F2(
			function (typeName, gens) {
				return $elm$core$List$isEmpty(gens) ? $author$project$Stabel$Data$Type$Custom(typeName) : A2(
					$author$project$Stabel$Data$Type$CustomGeneric,
					typeName,
					A2($elm$core$List$map, $author$project$Stabel$Data$Type$Generic, gens));
			});
		var nodeType = function () {
			switch (node.$) {
				case 0:
					return {
						o: _List_Nil,
						H: _List_fromArray(
							[$author$project$Stabel$Data$Type$Int])
					};
				case 1:
					var type_ = node.c;
					return type_;
				case 2:
					var fn = node.b;
					return {
						o: _List_Nil,
						H: _List_fromArray(
							[
								$author$project$Stabel$Data$Type$FunctionSignature(fn.V)
							])
					};
				case 3:
					return def.V;
				case 4:
					var data = node.b;
					return data.bO;
				case 5:
					var builtin = node.b;
					return $author$project$Stabel$Data$Builtin$functionType(builtin);
				case 6:
					var typeDef = node.a;
					var _v19 = typeDef.aQ;
					if (!_v19.$) {
						var members = _v19.a;
						return {
							o: A2($elm$core$List$map, $elm$core$Tuple$second, members),
							H: _List_fromArray(
								[
									A2(typeFromTypeDef, typeDef.m, typeDef._)
								])
						};
					} else {
						var members = _v19.a;
						return {
							o: members,
							H: _List_fromArray(
								[
									A2(typeFromTypeDef, typeDef.m, typeDef._)
								])
						};
					}
				case 7:
					var typeDef = node.a;
					var memberType = node.d;
					var type_ = A2(typeFromTypeDef, typeDef.m, typeDef._);
					return {
						o: _List_fromArray(
							[type_, memberType]),
						H: _List_fromArray(
							[type_])
					};
				default:
					var typeDef = node.a;
					var memberType = node.d;
					var type_ = A2(typeFromTypeDef, typeDef.m, typeDef._);
					return {
						o: _List_fromArray(
							[type_]),
						H: _List_fromArray(
							[memberType])
					};
			}
		}();
		var stackInScope = $elm$core$List$reverse(
			A2(
				$elm$core$List$take,
				$elm$core$List$length(nodeType.o),
				$elm$core$List$reverse(stack)));
		var newStack = $elm$core$List$reverse(
			function (s) {
				return _Utils_ap(
					$elm$core$List$reverse(nodeType.H),
					s);
			}(
				A2(
					$elm$core$List$drop,
					$elm$core$List$length(nodeType.o),
					$elm$core$List$reverse(stack))));
		var maybeCons = F2(
			function (maybeBoxElement, list) {
				if (!maybeBoxElement.$) {
					var value = maybeBoxElement.a;
					return A2($elm$core$List$cons, value, list);
				} else {
					return list;
				}
			});
		var maybeBox = function (_v16) {
			var idx = _v16.a;
			var leftType = _v16.b;
			var rightType = _v16.c;
			var _v13 = _Utils_Tuple2(leftType, rightType);
			if (_v13.b.$ === 4) {
				var _v14 = _v13.b;
				var members = _v14.b;
				return A2(
					$elm$core$Maybe$map,
					$author$project$Stabel$Codegen$Box(idx),
					A2(
						$elm$core$Maybe$map,
						$elm$core$Tuple$second,
						A2(
							$elm_community$list_extra$List$Extra$find,
							function (_v15) {
								var t = _v15.a;
								return _Utils_eq(t, leftType);
							},
							$author$project$Stabel$Codegen$unionBoxMap(members))));
			} else {
				return $elm$core$Maybe$Nothing;
			}
		};
		var isMultiFunction = function (possibleMultiFunctionNode) {
			switch (possibleMultiFunctionNode.$) {
				case 1:
					var fn = possibleMultiFunctionNode.b;
					var _v12 = fn.aL;
					if (!_v12.$) {
						return false;
					} else {
						return true;
					}
				case 4:
					var data = possibleMultiFunctionNode.b;
					return data.bp;
				default:
					return false;
			}
		};
		var maybeBoxLeadingElement = function () {
			var _v9 = _Utils_Tuple3(
				$elm$core$List$head(stackInScope),
				isMultiFunction(node),
				$elm$core$List$head(nodeType.o));
			if (((!_v9.a.$) && _v9.b) && (!_v9.c.$)) {
				if (_v9.c.a.$ === 4) {
					var _v10 = _v9.c.a;
					return $elm$core$Maybe$Nothing;
				} else {
					var nodeLeadingType = _v9.c.a;
					if ($author$project$Stabel$Codegen$requiresBoxingInPatternMatch(nodeLeadingType)) {
						var idx = A2(
							$elm$core$Basics$max,
							0,
							$elm$core$List$length(nodeType.o) - 1);
						return $elm$core$Maybe$Just(
							A2($author$project$Stabel$Codegen$Box, idx, -1));
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
						function (i, _v8) {
							var l = _v8.a;
							var r = _v8.b;
							return _Utils_Tuple3(i, l, r);
						}),
					A3(
						$elm$core$List$map2,
						$elm$core$Tuple$pair,
						$elm$core$List$reverse(stackInScope),
						$elm$core$List$reverse(nodeType.o)))));
		var _v1 = function () {
			switch (node.$) {
				case 0:
					var val = node.b;
					return _Utils_Tuple2(
						$author$project$Stabel$Codegen$IntLiteral(val),
						context);
				case 1:
					var fn = node.b;
					var _v3 = A2($author$project$Stabel$Codegen$idForFunction, fn.m, context);
					var fnId = _v3.a;
					var newContext = _v3.b;
					return _Utils_Tuple2(
						A2($author$project$Stabel$Codegen$Function, fnId, fn.m),
						newContext);
				case 2:
					var fn = node.b;
					var _v4 = A2($author$project$Stabel$Codegen$idForFunction, fn.m, context);
					var fnId = _v4.a;
					var newContext = _v4.b;
					return _Utils_Tuple2(
						A2($author$project$Stabel$Codegen$FunctionRef, fnId, fn.m),
						newContext);
				case 3:
					var _v5 = A2($author$project$Stabel$Codegen$idForFunction, def.m, context);
					var fnId = _v5.a;
					var newContext = _v5.b;
					return _Utils_Tuple2(
						A2($author$project$Stabel$Codegen$Function, fnId, def.m),
						newContext);
				case 4:
					var data = node.b;
					var _v6 = A2($author$project$Stabel$Codegen$idForFunction, data.m, context);
					var fnId = _v6.a;
					var newContext = _v6.b;
					return _Utils_Tuple2(
						A2($author$project$Stabel$Codegen$Function, fnId, data.m),
						newContext);
				case 5:
					var builtin = node.b;
					return _Utils_Tuple2(
						$author$project$Stabel$Codegen$Builtin(builtin),
						context);
				case 6:
					var typeDef = node.a;
					var _v7 = A2($author$project$Stabel$Codegen$idForType, typeDef.m, context);
					var typeId = _v7.a;
					var newContext = _v7.b;
					return _Utils_Tuple2(
						A2(
							$author$project$Stabel$Codegen$ConstructType,
							typeId,
							$author$project$Stabel$Codegen$memberSize(typeDef)),
						newContext);
				case 7:
					var typeDef = node.a;
					var memberIndex = node.c;
					return _Utils_Tuple2(
						A2(
							$author$project$Stabel$Codegen$SetMember,
							memberIndex,
							$author$project$Stabel$Codegen$memberSize(typeDef)),
						context);
				default:
					var memberIndex = node.c;
					return _Utils_Tuple2(
						$author$project$Stabel$Codegen$GetMember(memberIndex),
						context);
			}
		}();
		var newNode = _v1.a;
		var updatedContext = _v1.b;
		return _Utils_Tuple3(
			newStack,
			A2(
				$elm$core$List$cons,
				newNode,
				_Utils_ap(stackElementsToBox, result)),
			updatedContext);
	});
var $author$project$Stabel$Wasm$Batch = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$Wasm$Commented = F2(
	function (a, b) {
		return {$: 23, a: a, b: b};
	});
var $author$project$Stabel$Codegen$BaseModule$callAddIntFn = A2($author$project$Stabel$Wasm$Call, 10, $author$project$Stabel$Codegen$BaseModule$addIntFn);
var $author$project$Stabel$Codegen$BaseModule$callBoxFn = A2($author$project$Stabel$Wasm$Call, 17, $author$project$Stabel$Codegen$BaseModule$boxFn);
var $author$project$Stabel$Codegen$BaseModule$callCopyStructFn = A2($author$project$Stabel$Wasm$Call, 2, $author$project$Stabel$Codegen$BaseModule$copyStructFn);
var $author$project$Stabel$Codegen$BaseModule$callDivIntFn = A2($author$project$Stabel$Wasm$Call, 13, $author$project$Stabel$Codegen$BaseModule$divIntFn);
var $author$project$Stabel$Codegen$BaseModule$callDropFn = A2($author$project$Stabel$Wasm$Call, 6, $author$project$Stabel$Codegen$BaseModule$dropFn);
var $author$project$Stabel$Codegen$BaseModule$callDupFn = A2($author$project$Stabel$Wasm$Call, 5, $author$project$Stabel$Codegen$BaseModule$dupFn);
var $author$project$Stabel$Codegen$BaseModule$callEqIntFn = A2($author$project$Stabel$Wasm$Call, 14, $author$project$Stabel$Codegen$BaseModule$eqIntFn);
var $author$project$Stabel$Codegen$BaseModule$callExecInlineFn = A2($author$project$Stabel$Wasm$Call, 19, $author$project$Stabel$Codegen$BaseModule$execInlineFn);
var $author$project$Stabel$Codegen$BaseModule$callLeftRotFn = A2($author$project$Stabel$Wasm$Call, 9, $author$project$Stabel$Codegen$BaseModule$leftRotFn);
var $author$project$Stabel$Codegen$BaseModule$callMulIntFn = A2($author$project$Stabel$Wasm$Call, 12, $author$project$Stabel$Codegen$BaseModule$mulIntFn);
var $author$project$Stabel$Codegen$BaseModule$callRotFn = A2($author$project$Stabel$Wasm$Call, 8, $author$project$Stabel$Codegen$BaseModule$rotFn);
var $author$project$Stabel$Codegen$BaseModule$callSubIntFn = A2($author$project$Stabel$Wasm$Call, 11, $author$project$Stabel$Codegen$BaseModule$subIntFn);
var $author$project$Stabel$Codegen$indexOfHelper = F3(
	function (idx, value, list) {
		indexOfHelper:
		while (true) {
			if (!list.b) {
				return $elm$core$Maybe$Nothing;
			} else {
				var element = list.a;
				var rest = list.b;
				if (_Utils_eq(element, value)) {
					return $elm$core$Maybe$Just(idx);
				} else {
					var $temp$idx = idx + 1,
						$temp$value = value,
						$temp$list = rest;
					idx = $temp$idx;
					value = $temp$value;
					list = $temp$list;
					continue indexOfHelper;
				}
			}
		}
	});
var $author$project$Stabel$Codegen$indexOf = F2(
	function (value, list) {
		return A3($author$project$Stabel$Codegen$indexOfHelper, 0, value, list);
	});
var $author$project$Stabel$Codegen$nodeToInstruction = F2(
	function (context, node) {
		switch (node.$) {
			case 0:
				var value = node.a;
				return $author$project$Stabel$Wasm$Batch(
					_List_fromArray(
						[
							$author$project$Stabel$Wasm$I32_Const(value),
							$author$project$Stabel$Codegen$BaseModule$callStackPushFn
						]));
			case 1:
				var id = node.a;
				var name = node.b;
				return A2($author$project$Stabel$Wasm$Call, id, name);
			case 2:
				var name = node.b;
				var indexOfId = A2(
					$elm$core$Maybe$withDefault,
					0,
					A2($author$project$Stabel$Codegen$indexOf, name, context.aa));
				return $author$project$Stabel$Wasm$Batch(
					_List_fromArray(
						[
							A2(
							$author$project$Stabel$Wasm$Commented,
							name + 'ref',
							$author$project$Stabel$Wasm$I32_Const(indexOfId)),
							$author$project$Stabel$Codegen$BaseModule$callStackPushFn
						]));
			case 3:
				var typeId = node.a;
				var members = node.b;
				var typeSize = $author$project$Stabel$Codegen$BaseModule$wasmPtrSize + (members * $author$project$Stabel$Codegen$BaseModule$wasmPtrSize);
				return $author$project$Stabel$Wasm$Batch(
					_List_fromArray(
						[
							$author$project$Stabel$Wasm$I32_Const(typeSize),
							$author$project$Stabel$Codegen$BaseModule$callAllocFn,
							$author$project$Stabel$Wasm$Local_Tee(0),
							$author$project$Stabel$Wasm$I32_Const(typeId),
							$author$project$Stabel$Wasm$I32_Store,
							$author$project$Stabel$Wasm$I32_Const(members),
							$author$project$Stabel$Wasm$Local_Set(1),
							$author$project$Stabel$Wasm$Block(
							_List_fromArray(
								[
									$author$project$Stabel$Wasm$Loop(
									_List_fromArray(
										[
											$author$project$Stabel$Wasm$Local_Get(1),
											$author$project$Stabel$Wasm$I32_EqZero,
											$author$project$Stabel$Wasm$BreakIf(1),
											$author$project$Stabel$Wasm$Local_Get(0),
											$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
											$author$project$Stabel$Wasm$Local_Get(1),
											$author$project$Stabel$Wasm$I32_Mul,
											$author$project$Stabel$Wasm$I32_Add,
											$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
											$author$project$Stabel$Wasm$I32_Store,
											$author$project$Stabel$Wasm$Local_Get(1),
											$author$project$Stabel$Wasm$I32_Const(1),
											$author$project$Stabel$Wasm$I32_Sub,
											$author$project$Stabel$Wasm$Local_Set(1),
											$author$project$Stabel$Wasm$Break(0)
										]))
								])),
							$author$project$Stabel$Wasm$Local_Get(0),
							$author$project$Stabel$Codegen$BaseModule$callStackPushFn
						]));
			case 4:
				var memberIndex = node.a;
				var members = node.b;
				var typeSize = $author$project$Stabel$Codegen$BaseModule$wasmPtrSize + (members * $author$project$Stabel$Codegen$BaseModule$wasmPtrSize);
				return $author$project$Stabel$Wasm$Batch(
					_List_fromArray(
						[
							$author$project$Stabel$Codegen$BaseModule$callSwapFn,
							$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
							$author$project$Stabel$Wasm$I32_Const(typeSize),
							$author$project$Stabel$Codegen$BaseModule$callCopyStructFn,
							$author$project$Stabel$Wasm$Local_Tee(0),
							$author$project$Stabel$Wasm$I32_Const((memberIndex + 1) * $author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
							$author$project$Stabel$Wasm$I32_Add,
							$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
							$author$project$Stabel$Wasm$I32_Store,
							$author$project$Stabel$Wasm$Local_Get(0),
							$author$project$Stabel$Codegen$BaseModule$callStackPushFn
						]));
			case 5:
				var memberIndex = node.a;
				return $author$project$Stabel$Wasm$Batch(
					_List_fromArray(
						[
							$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
							$author$project$Stabel$Wasm$I32_Const((memberIndex + 1) * $author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
							$author$project$Stabel$Wasm$I32_Add,
							$author$project$Stabel$Wasm$I32_Load,
							$author$project$Stabel$Codegen$BaseModule$callStackPushFn
						]));
			case 6:
				var builtin = node.a;
				switch (builtin) {
					case 0:
						return $author$project$Stabel$Codegen$BaseModule$callAddIntFn;
					case 1:
						return $author$project$Stabel$Codegen$BaseModule$callSubIntFn;
					case 2:
						return $author$project$Stabel$Codegen$BaseModule$callMulIntFn;
					case 3:
						return $author$project$Stabel$Codegen$BaseModule$callDivIntFn;
					case 4:
						return $author$project$Stabel$Codegen$BaseModule$callEqIntFn;
					case 5:
						return $author$project$Stabel$Codegen$BaseModule$callDupFn;
					case 6:
						return $author$project$Stabel$Codegen$BaseModule$callDropFn;
					case 7:
						return $author$project$Stabel$Codegen$BaseModule$callSwapFn;
					case 8:
						return $author$project$Stabel$Codegen$BaseModule$callRotFn;
					case 9:
						return $author$project$Stabel$Codegen$BaseModule$callLeftRotFn;
					default:
						return $author$project$Stabel$Codegen$BaseModule$callExecInlineFn;
				}
			default:
				var stackPos = node.a;
				var id = node.b;
				return $author$project$Stabel$Wasm$Batch(
					_List_fromArray(
						[
							$author$project$Stabel$Wasm$I32_Const(stackPos),
							$author$project$Stabel$Wasm$I32_Const(id),
							$author$project$Stabel$Codegen$BaseModule$callBoxFn
						]));
		}
	});
var $author$project$Stabel$Codegen$astNodesToInstructions = F3(
	function (context, def, astNodes) {
		var _v0 = A3(
			$elm$core$List$foldl,
			$author$project$Stabel$Codegen$astNodeToCodegenNode(def),
			_Utils_Tuple3(def.V.o, _List_Nil, context),
			astNodes);
		var codeGenNodes = _v0.b;
		var updatedContext = _v0.c;
		return _Utils_Tuple2(
			A2(
				$elm$core$List$map,
				$author$project$Stabel$Codegen$nodeToInstruction(updatedContext),
				$elm$core$List$reverse(codeGenNodes)),
			updatedContext);
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
var $author$project$Stabel$Wasm$maximumLocalIndex = function (ins) {
	switch (ins.$) {
		case 0:
			var insList = ins.a;
			return $elm$core$List$maximum(
				A2($elm$core$List$filterMap, $author$project$Stabel$Wasm$maximumLocalIndex, insList));
		case 1:
			var insList = ins.a;
			return $elm$core$List$maximum(
				A2($elm$core$List$filterMap, $author$project$Stabel$Wasm$maximumLocalIndex, insList));
		case 2:
			var insList = ins.a;
			return $elm$core$List$maximum(
				A2($elm$core$List$filterMap, $author$project$Stabel$Wasm$maximumLocalIndex, insList));
		case 8:
			var idx = ins.a;
			return $elm$core$Maybe$Just(idx);
		case 9:
			var idx = ins.a;
			return $elm$core$Maybe$Just(idx);
		case 10:
			var idx = ins.a;
			return $elm$core$Maybe$Just(idx);
		default:
			return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Stabel$Wasm$Return = {$: 5};
var $author$project$Stabel$Wasm$I32_NotEq = {$: 17};
var $author$project$Stabel$Wasm$Unreachable = {$: 22};
var $author$project$Stabel$Codegen$BaseModule$callUnboxFn = A2($author$project$Stabel$Wasm$Call, 18, $author$project$Stabel$Codegen$BaseModule$unboxFn);
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
var $author$project$Stabel$Codegen$matchingIntTest = F2(
	function (localIdx, _v0) {
		var astValue = _v0.b;
		var value = function () {
			if (!astValue.$) {
				var num = astValue.a;
				return num;
			} else {
				return 0;
			}
		}();
		return _List_fromArray(
			[
				$author$project$Stabel$Wasm$Local_Get(localIdx),
				$author$project$Stabel$Wasm$I32_Const($author$project$Stabel$Codegen$BaseModule$wasmPtrSize),
				$author$project$Stabel$Wasm$I32_Add,
				$author$project$Stabel$Wasm$I32_Load,
				$author$project$Stabel$Wasm$I32_Const(value),
				$author$project$Stabel$Wasm$I32_NotEq,
				$author$project$Stabel$Wasm$BreakIf(0)
			]);
	});
var $author$project$Stabel$Codegen$makeInequalityTest = F5(
	function (boxMap, selfIndex, t_, localIdx, context) {
		var typeFromTypeMatch = t_.b;
		var maybeBoxId = A2(
			$elm$core$Maybe$map,
			$elm$core$Tuple$second,
			A2(
				$elm_community$list_extra$List$Extra$find,
				function (_v18) {
					var boxedType = _v18.a;
					return _Utils_eq(boxedType, typeFromTypeMatch);
				},
				boxMap));
		var _v9 = _Utils_Tuple2(t_, maybeBoxId);
		_v9$4:
		while (true) {
			if (!_v9.b.$) {
				if (!_v9.a.b.$) {
					var _v10 = _v9.a;
					var _v11 = _v10.b;
					var conditions = _v10.c;
					var boxId = _v9.b.a;
					return _Utils_Tuple2(
						$author$project$Stabel$Wasm$Batch(
							_List_fromArray(
								[
									$author$project$Stabel$Wasm$Local_Get(localIdx),
									$author$project$Stabel$Wasm$I32_Load,
									$author$project$Stabel$Wasm$I32_Const(boxId),
									$author$project$Stabel$Wasm$I32_NotEq,
									$author$project$Stabel$Wasm$BreakIf(0),
									$author$project$Stabel$Wasm$Batch(
									A2(
										$elm$core$List$concatMap,
										$author$project$Stabel$Codegen$matchingIntTest(localIdx),
										conditions)),
									$author$project$Stabel$Wasm$I32_Const(selfIndex),
									$author$project$Stabel$Codegen$BaseModule$callUnboxFn
								])),
						context);
				} else {
					if (!_v9.a.c.b) {
						var _v12 = _v9.a;
						var boxId = _v9.b.a;
						return _Utils_Tuple2(
							$author$project$Stabel$Wasm$Batch(
								_List_fromArray(
									[
										$author$project$Stabel$Wasm$Local_Get(localIdx),
										$author$project$Stabel$Wasm$I32_Load,
										$author$project$Stabel$Wasm$I32_Const(boxId),
										$author$project$Stabel$Wasm$I32_NotEq,
										$author$project$Stabel$Wasm$BreakIf(0),
										$author$project$Stabel$Wasm$I32_Const(selfIndex),
										$author$project$Stabel$Codegen$BaseModule$callUnboxFn
									])),
							context);
					} else {
						break _v9$4;
					}
				}
			} else {
				switch (_v9.a.b.$) {
					case 2:
						var _v13 = _v9.a;
						var name = _v13.b.a;
						var conditions = _v13.c;
						var _v14 = _v9.b;
						return A6($author$project$Stabel$Codegen$matchingStructTest, boxMap, selfIndex, context, localIdx, name, conditions);
					case 3:
						var _v15 = _v9.a;
						var _v16 = _v15.b;
						var name = _v16.a;
						var conditions = _v15.c;
						var _v17 = _v9.b;
						return A6($author$project$Stabel$Codegen$matchingStructTest, boxMap, selfIndex, context, localIdx, name, conditions);
					default:
						break _v9$4;
				}
			}
		}
		return _Utils_Tuple2($author$project$Stabel$Wasm$Unreachable, context);
	});
var $author$project$Stabel$Codegen$matchingConditionTest = F5(
	function (boxMap, selfIndex, localIdx, _v2, _v3) {
		var fieldName = _v2.a;
		var value = _v2.b;
		var result = _v3.a;
		var context = _v3.b;
		var getterName = fieldName + '>';
		var _v4 = A2($author$project$Stabel$Codegen$idForFunction, getterName, context);
		var getterId = _v4.a;
		var idContext = _v4.b;
		var callGetter = A2($author$project$Stabel$Wasm$Call, getterId, getterName);
		switch (value.$) {
			case 0:
				var num = value.a;
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_List_fromArray(
							[
								$author$project$Stabel$Wasm$Local_Get(localIdx),
								$author$project$Stabel$Codegen$BaseModule$callStackPushFn,
								callGetter,
								$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
								$author$project$Stabel$Wasm$I32_Const(num),
								$author$project$Stabel$Wasm$I32_NotEq,
								$author$project$Stabel$Wasm$BreakIf(0)
							]),
						result),
					idContext);
			case 1:
				var typ_ = value.a;
				if (typ_.$ === 2) {
					var typeName = typ_.a;
					var _v7 = A2($author$project$Stabel$Codegen$idForType, typeName, idContext);
					var typeId = _v7.a;
					var updatedContext = _v7.b;
					return _Utils_Tuple2(
						A2(
							$elm$core$List$cons,
							_List_fromArray(
								[
									$author$project$Stabel$Wasm$Local_Get(localIdx),
									$author$project$Stabel$Codegen$BaseModule$callStackPushFn,
									callGetter,
									$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
									$author$project$Stabel$Wasm$I32_Load,
									$author$project$Stabel$Wasm$I32_Const(typeId),
									$author$project$Stabel$Wasm$I32_NotEq,
									$author$project$Stabel$Wasm$BreakIf(0)
								]),
							result),
						updatedContext);
				} else {
					return _Utils_Tuple2(
						A2(
							$elm$core$List$cons,
							_List_fromArray(
								[$author$project$Stabel$Wasm$Unreachable]),
							result),
						context);
				}
			default:
				var match = value.a;
				var nextLocalIdx = localIdx + 1;
				var _v8 = A5($author$project$Stabel$Codegen$makeInequalityTest, boxMap, selfIndex, match, nextLocalIdx, idContext);
				var inequalityTestImpl = _v8.a;
				var updatedContext = _v8.b;
				return _Utils_Tuple2(
					A2(
						$elm$core$List$cons,
						_List_fromArray(
							[
								$author$project$Stabel$Wasm$Local_Get(localIdx),
								$author$project$Stabel$Codegen$BaseModule$callStackPushFn,
								callGetter,
								$author$project$Stabel$Codegen$BaseModule$callStackPopFn,
								$author$project$Stabel$Wasm$Local_Set(nextLocalIdx),
								inequalityTestImpl
							]),
						result),
					updatedContext);
		}
	});
var $author$project$Stabel$Codegen$matchingStructTest = F6(
	function (boxMap, selfIndex, context, localIdx, typeName, conditions) {
		var _v0 = A2($author$project$Stabel$Codegen$idForType, typeName, context);
		var typeId = _v0.a;
		var updatedContext = _v0.b;
		var _v1 = A3(
			$elm$core$List$foldl,
			A3($author$project$Stabel$Codegen$matchingConditionTest, boxMap, selfIndex, localIdx),
			_Utils_Tuple2(_List_Nil, updatedContext),
			conditions);
		var conditionTestImpls = _v1.a;
		var finalContext = _v1.b;
		return _Utils_Tuple2(
			$author$project$Stabel$Wasm$Batch(
				_List_fromArray(
					[
						$author$project$Stabel$Wasm$Local_Get(localIdx),
						$author$project$Stabel$Wasm$I32_Load,
						$author$project$Stabel$Wasm$I32_Const(typeId),
						$author$project$Stabel$Wasm$I32_NotEq,
						$author$project$Stabel$Wasm$BreakIf(0),
						$author$project$Stabel$Wasm$Batch(
						$elm$core$List$concat(conditionTestImpls))
					])),
			finalContext);
	});
var $author$project$Stabel$Codegen$buildMultiFnBranch = F5(
	function (def, boxMap, selfIndex, _v0, _v1) {
		var type_ = _v0.a;
		var nodes = _v0.b;
		var previousBranch = _v1.a;
		var context = _v1.b;
		var _v2 = A3($author$project$Stabel$Codegen$astNodesToInstructions, context, def, nodes);
		var instructions = _v2.a;
		var updatedContext = _v2.b;
		var _v3 = A5($author$project$Stabel$Codegen$makeInequalityTest, boxMap, selfIndex, type_, 0, updatedContext);
		var inequalityTestImpl = _v3.a;
		var finalContext = _v3.b;
		return _Utils_Tuple2(
			$author$project$Stabel$Wasm$Block(
				_List_fromArray(
					[
						previousBranch,
						inequalityTestImpl,
						$author$project$Stabel$Wasm$Batch(instructions),
						$author$project$Stabel$Wasm$Return
					])),
			finalContext);
	});
var $author$project$Stabel$Codegen$createBoxMap = function (t_) {
	if (t_.$ === 4) {
		var members = t_.b;
		return $author$project$Stabel$Codegen$unionBoxMap(members);
	} else {
		return $author$project$Stabel$Codegen$requiresBoxingInPatternMatch(t_) ? _List_fromArray(
			[
				_Utils_Tuple2(t_, -1)
			]) : _List_Nil;
	}
};
var $author$project$Stabel$Codegen$multiFnToInstructions = F4(
	function (context, def, whens, defaultImpl) {
		var selfIndex = A2(
			$elm$core$Basics$max,
			0,
			$elm$core$List$length(def.V.o) - 1);
		var boxMap = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				$author$project$Stabel$Codegen$createBoxMap,
				$elm$core$List$head(def.V.o)));
		var _v0 = A3(
			$elm$core$List$foldl,
			A3($author$project$Stabel$Codegen$buildMultiFnBranch, def, boxMap, selfIndex),
			_Utils_Tuple2(
				$author$project$Stabel$Wasm$Batch(_List_Nil),
				context),
			whens);
		var branches = _v0.a;
		var updatedContext = _v0.b;
		var _v1 = A3($author$project$Stabel$Codegen$astNodesToInstructions, updatedContext, def, defaultImpl);
		var implementation = _v1.a;
		var finalContext = _v1.b;
		return _Utils_Tuple2(
			_List_fromArray(
				[
					$author$project$Stabel$Wasm$I32_Const(selfIndex),
					$author$project$Stabel$Codegen$BaseModule$callStackGetElementFn,
					$author$project$Stabel$Wasm$Local_Set(0),
					branches,
					$author$project$Stabel$Wasm$Batch(implementation)
				]),
			finalContext);
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
var $author$project$Stabel$Codegen$toWasmFuncDef = F2(
	function (def, _v0) {
		var wasmFuncs = _v0.a;
		var context = _v0.b;
		var _v1 = A2($author$project$Stabel$Codegen$idForFunction, def.m, context);
		var defId = _v1.a;
		var idContext = _v1.b;
		var _v2 = function () {
			var _v3 = def.aL;
			if (!_v3.$) {
				var impl = _v3.a;
				return A3($author$project$Stabel$Codegen$astNodesToInstructions, idContext, def, impl);
			} else {
				var whens = _v3.a;
				var defaultImpl = _v3.b;
				return A4($author$project$Stabel$Codegen$multiFnToInstructions, idContext, def, whens, defaultImpl);
			}
		}();
		var wasmImplementation = _v2.a;
		var updatedContext = _v2.b;
		var numberOfLocals = A2(
			$elm$core$Maybe$withDefault,
			0,
			A2(
				$elm$core$Maybe$map,
				$elm$core$Basics$add(1),
				$elm$core$List$maximum(
					A2($elm$core$List$filterMap, $author$project$Stabel$Wasm$maximumLocalIndex, wasmImplementation))));
		return _Utils_Tuple2(
			A2(
				$elm$core$List$cons,
				{
					a8: _List_Nil,
					bk: defId,
					bn: wasmImplementation,
					bq: A2($elm$core$List$repeat, numberOfLocals, 0),
					m: def.m,
					bH: _List_Nil
				},
				wasmFuncs),
			updatedContext);
	});
var $author$project$Stabel$Wasm$withExports = F2(
	function (exports, _v0) {
		var module_ = _v0;
		return _Utils_update(
			module_,
			{ao: exports});
	});
var $author$project$Stabel$Wasm$withReferencables = F2(
	function (references, _v0) {
		var module_ = _v0;
		return _Utils_update(
			module_,
			{bF: references});
	});
var $author$project$Stabel$Codegen$run = F2(
	function (exportedFunctions, ast) {
		var inlineFunctionNames = $elm$core$Set$toList(ast.bF);
		var _v0 = A3(
			$elm$core$Dict$foldl,
			F3(
				function (_v1, fn, acc) {
					return A2($author$project$Stabel$Codegen$toWasmFuncDef, fn, acc);
				}),
			_Utils_Tuple2(
				_List_Nil,
				_Utils_update(
					$author$project$Stabel$Codegen$emptyContext,
					{aa: inlineFunctionNames})),
			ast.bj);
		var wasmFunctions = _v0.a;
		var context = _v0.b;
		var exportedFunctionRefs = A3(
			$elm$core$Set$foldr,
			F2(
				function (name, acc) {
					return A2(
						$elm$core$Maybe$withDefault,
						acc,
						A2(
							$elm$core$Maybe$map,
							function (res) {
								return A2($elm$core$List$cons, res, acc);
							},
							A2(
								$elm$core$Maybe$map,
								function (id) {
									return _Utils_Tuple2(name, id);
								},
								A2($elm$core$Dict$get, name, context.K.aC))));
				}),
			_List_Nil,
			exportedFunctions);
		var inlineFunctionRefs = A2(
			$elm$core$List$filterMap,
			function (name) {
				return A2($elm$core$Dict$get, name, context.K.aC);
			},
			inlineFunctionNames);
		return A2(
			$author$project$Stabel$Wasm$withExports,
			exportedFunctionRefs,
			A2(
				$author$project$Stabel$Wasm$withReferencables,
				inlineFunctionRefs,
				A3($elm$core$List$foldl, $author$project$Stabel$Wasm$withFunction, $author$project$Stabel$Codegen$BaseModule$baseModule, wasmFunctions)));
	});
var $author$project$Stabel$Parser$Problem$ExpectedEndOfFile = {$: 11};
var $author$project$Stabel$Parser$Problem$ModuleIsEmpty = {$: 19};
var $elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $elm$parser$Parser$Advanced$Parser = $elm$core$Basics$identity;
var $elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _v0) {
		var parseA = _v0;
		return function (s0) {
			var _v1 = parseA(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				var _v2 = callback(a);
				var parseB = _v2;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
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
		};
	});
var $author$project$Stabel$Parser$Problem$BadDefinition = function (a) {
	return {$: 20, a: a};
};
var $elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Stabel$Parser$Problem$UnknownError = {$: 5};
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
var $author$project$Stabel$Parser$Problem$FunctionAlreadyDefined = F2(
	function (a, b) {
		return {$: 15, a: a, b: b};
	});
var $author$project$Stabel$Parser$Problem$FunctionDefinition = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Stabel$Parser$AssociatedFunctionSignature$NotProvided = {$: 0};
var $author$project$Stabel$Parser$SoloImpl = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$Parser$Problem$AliasKeyword = {$: 5};
var $author$project$Stabel$Parser$Problem$ImplementationKeyword = {$: 10};
var $author$project$Stabel$Parser$Problem$ImportKeyword = {$: 6};
var $author$project$Stabel$Parser$Problem$TypeKeyword = {$: 8};
var $author$project$Stabel$Parser$Problem$UnknownMetadata = function (a) {
	return {$: 17, a: a};
};
var $author$project$Stabel$Parser$AssociatedFunctionSignature$UserProvided = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Set$fromList = function (list) {
	return A3($elm$core$List$foldl, $elm$core$Set$insert, $elm$core$Set$empty, list);
};
var $author$project$Stabel$Parser$Problem$ExpectedMetadata = {$: 2};
var $elm$parser$Parser$Advanced$map2 = F3(
	function (func, _v0, _v1) {
		var parseA = _v0;
		var parseB = _v1;
		return function (s0) {
			var _v2 = parseA(s0);
			if (_v2.$ === 1) {
				var p = _v2.a;
				var x = _v2.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p1 = _v2.a;
				var a = _v2.b;
				var s1 = _v2.c;
				var _v3 = parseB(s1);
				if (_v3.$ === 1) {
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
		};
	});
var $elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3($elm$parser$Parser$Advanced$map2, $elm$core$Basics$always, keepParser, ignoreParser);
	});
var $author$project$Stabel$Parser$specialChars = $elm$core$Set$fromList(
	_List_fromArray(
		[':', '{', '}', '[', ']', '(', ')', '.', '#', '/']));
var $author$project$Stabel$Parser$whitespaceChars = $elm$core$Set$fromList(
	_List_fromArray(
		[' ', '\n', '\u000D', '\t']));
var $author$project$Stabel$Parser$invalidSymbolChars = A2($elm$core$Set$union, $author$project$Stabel$Parser$whitespaceChars, $author$project$Stabel$Parser$specialChars);
var $elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {aD: col, aE: contextStack, bE: problem, S: row};
	});
var $elm$parser$Parser$Advanced$Empty = {$: 0};
var $elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			$elm$parser$Parser$Advanced$AddRight,
			$elm$parser$Parser$Advanced$Empty,
			A4($elm$parser$Parser$Advanced$DeadEnd, s.S, s.aD, x, s.W));
	});
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var $elm$parser$Parser$Advanced$token = function (_v0) {
	var str = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(str);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, str, s.c, s.S, s.aD, s.b);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return _Utils_eq(newOffset, -1) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{aD: newCol, W: s.W, e: s.e, c: newOffset, S: newRow, b: s.b});
	};
};
var $elm$parser$Parser$Advanced$symbol = $elm$parser$Parser$Advanced$token;
var $author$project$Stabel$Parser$validSymbolChar = function (c) {
	return !A2($elm$core$Set$member, c, $author$project$Stabel$Parser$invalidSymbolChars);
};
var $elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var $elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {aD: col, W: context, e: indent, c: offset, S: row, b: src};
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
	return function (s) {
		var firstOffset = A3($elm$parser$Parser$Advanced$isSubChar, i.bJ, s.c, s.b);
		if (_Utils_eq(firstOffset, -1)) {
			return A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, i.Z));
		} else {
			var s1 = _Utils_eq(firstOffset, -2) ? A7($elm$parser$Parser$Advanced$varHelp, i.ab, s.c + 1, s.S + 1, 1, s.b, s.e, s.W) : A7($elm$parser$Parser$Advanced$varHelp, i.ab, firstOffset, s.S, s.aD + 1, s.b, s.e, s.W);
			var name = A3($elm$core$String$slice, s.c, s1.c, s.b);
			return A2($elm$core$Set$member, name, i.ai) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, i.Z)) : A3($elm$parser$Parser$Advanced$Good, true, name, s1);
		}
	};
};
var $author$project$Stabel$Parser$metadataParserHelp = function (reserved) {
	return A2(
		$elm$parser$Parser$Advanced$ignorer,
		$elm$parser$Parser$Advanced$variable(
			{
				Z: $author$project$Stabel$Parser$Problem$ExpectedMetadata,
				ab: $author$project$Stabel$Parser$validSymbolChar,
				ai: reserved,
				bJ: function (c) {
					return !($elm$core$Char$isDigit(c) || ($elm$core$Char$isUpper(c) || A2($elm$core$Set$member, c, $author$project$Stabel$Parser$invalidSymbolChars)));
				}
			}),
		$elm$parser$Parser$Advanced$symbol(
			A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Stabel$Parser$Problem$ExpectedMetadata)));
};
var $author$project$Stabel$Parser$definitionMetadataParser = $author$project$Stabel$Parser$metadataParserHelp(
	$elm$core$Set$fromList(
		_List_fromArray(
			['def', 'defmulti', 'defstruct', 'defunion'])));
var $author$project$Stabel$Parser$Problem$ExpectedLeftBracket = {$: 13};
var $author$project$Stabel$Parser$Problem$ExpectedRightBracket = {$: 14};
var $author$project$Stabel$Parser$InlineFunction = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $author$project$Stabel$Parser$SourceLocation$SourceLocationRange = F2(
	function (start, end) {
		return {bd: end, bJ: start};
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
			var parse = _v0;
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p1 = _v1.a;
				var step = _v1.b;
				var s1 = _v1.c;
				if (!step.$) {
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
		return function (s) {
			return A4($elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
		};
	});
var $author$project$Stabel$Parser$Integer = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Stabel$Parser$Problem$ExpectedInt = {$: 0};
var $elm$parser$Parser$Advanced$problem = function (x) {
	return function (s) {
		return A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $elm$parser$Parser$Advanced$succeed = function (a) {
	return function (s) {
		return A3($elm$parser$Parser$Advanced$Good, false, a, s);
	};
};
var $elm$core$String$toInt = _String_toInt;
var $author$project$Stabel$Parser$intParser = function () {
	var helper = function (text) {
		var _v0 = $elm$core$String$toInt(text);
		if (!_v0.$) {
			var num = _v0.a;
			return $elm$parser$Parser$Advanced$succeed(num);
		} else {
			return $elm$parser$Parser$Advanced$problem($author$project$Stabel$Parser$Problem$ExpectedInt);
		}
	};
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		helper,
		$elm$parser$Parser$Advanced$variable(
			{Z: $author$project$Stabel$Parser$Problem$ExpectedInt, ab: $elm$core$Char$isDigit, ai: $elm$core$Set$empty, bJ: $elm$core$Char$isDigit}));
}();
var $elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2($elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a;
				var remainingParsers = parsers.b;
				var _v1 = parse(s0);
				if (!_v1.$) {
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
	return function (s) {
		return A3($elm$parser$Parser$Advanced$oneOfHelp, s, $elm$parser$Parser$Advanced$Empty, parsers);
	};
};
var $author$project$Stabel$Parser$Function = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Stabel$Parser$Problem$InvalidModulePath = function (a) {
	return {$: 18, a: a};
};
var $elm$core$String$any = _String_any;
var $author$project$Stabel$Parser$modulePathFinalizer = function (symbols) {
	if (!symbols.b) {
		return _Utils_Tuple2(_List_Nil, '');
	} else {
		if (!symbols.b.b) {
			var only = symbols.a;
			return _Utils_Tuple2(_List_Nil, only);
		} else {
			var first = symbols.a;
			var rest = symbols.b;
			return _Utils_Tuple2(
				$elm$core$List$reverse(rest),
				first);
		}
	}
};
var $author$project$Stabel$Parser$Problem$ExpectedSymbol = {$: 1};
var $author$project$Stabel$Parser$Problem$UnexpectedMetadata = {$: 8};
var $elm$parser$Parser$Advanced$backtrackable = function (_v0) {
	var parse = _v0;
	return function (s0) {
		var _v1 = parse(s0);
		if (_v1.$ === 1) {
			var x = _v1.b;
			return A2($elm$parser$Parser$Advanced$Bad, false, x);
		} else {
			var a = _v1.b;
			var s1 = _v1.c;
			return A3($elm$parser$Parser$Advanced$Good, false, a, s1);
		}
	};
};
var $author$project$Stabel$Parser$symbolParserHelp = function (startPred) {
	return $elm$parser$Parser$Advanced$backtrackable(
		A2(
			$elm$parser$Parser$Advanced$ignorer,
			$elm$parser$Parser$Advanced$variable(
				{Z: $author$project$Stabel$Parser$Problem$ExpectedSymbol, ab: $author$project$Stabel$Parser$validSymbolChar, ai: $elm$core$Set$empty, bJ: startPred}),
			$elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						A2(
						$elm$parser$Parser$Advanced$andThen,
						function (_v0) {
							return $elm$parser$Parser$Advanced$problem($author$project$Stabel$Parser$Problem$UnexpectedMetadata);
						},
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
							$elm$parser$Parser$Advanced$symbol(
								A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Stabel$Parser$Problem$ExpectedMetadata)))),
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity)
					]))));
};
var $author$project$Stabel$Parser$symbolImplParser = $author$project$Stabel$Parser$symbolParserHelp(
	function (c) {
		return !($elm$core$Char$isDigit(c) || A2($elm$core$Set$member, c, $author$project$Stabel$Parser$invalidSymbolChars));
	});
var $author$project$Stabel$Parser$modulePathParser = function (symbols) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						function (name) {
							return $elm$parser$Parser$Advanced$Loop(
								A2($elm$core$List$cons, name, symbols));
						}),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '/', $author$project$Stabel$Parser$Problem$ExpectedMetadata))),
				$author$project$Stabel$Parser$symbolImplParser),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$author$project$Stabel$Parser$modulePathFinalizer(symbols)))
			]));
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $author$project$Stabel$Parser$qualifiedSymbolImplParser = function () {
	var checkForUpperCaseLetterInPath = function (path) {
		return A2(
			$elm$core$List$any,
			$elm$core$String$any($elm$core$Char$isUpper),
			path);
	};
	var externalBuilder = function (_v0) {
		var path = _v0.a;
		var reference = _v0.b;
		return checkForUpperCaseLetterInPath(path) ? $elm$parser$Parser$Advanced$problem(
			$author$project$Stabel$Parser$Problem$InvalidModulePath(
				'/' + A2($elm$core$String$join, '/', path))) : ((!$elm$core$List$length(path)) ? $elm$parser$Parser$Advanced$problem(
			$author$project$Stabel$Parser$Problem$InvalidModulePath(
				'/' + (A2($elm$core$String$join, '/', path) + ('/' + reference)))) : $elm$parser$Parser$Advanced$succeed(
			function (loc) {
				return A3($author$project$Stabel$Parser$ExternalFunction, loc, path, reference);
			}));
	};
	var internalBuilder = F2(
		function (firstSymbol, modulePathResult) {
			var partialPath = modulePathResult.a;
			var reference = modulePathResult.b;
			var path = A2($elm$core$List$cons, firstSymbol, partialPath);
			return (checkForUpperCaseLetterInPath(path) && (!_Utils_eq(partialPath, _List_Nil))) ? $elm$parser$Parser$Advanced$problem(
				$author$project$Stabel$Parser$Problem$InvalidModulePath(
					A2($elm$core$String$join, '/', path))) : $elm$parser$Parser$Advanced$succeed(
				function (loc) {
					return _Utils_eq(
						modulePathResult,
						_Utils_Tuple2(_List_Nil, '')) ? A2($author$project$Stabel$Parser$Function, loc, firstSymbol) : A3($author$project$Stabel$Parser$PackageFunction, loc, path, reference);
				});
		});
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$andThen,
				$elm$core$Basics$identity,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed(internalBuilder),
						$author$project$Stabel$Parser$symbolImplParser),
					A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$modulePathParser))),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				externalBuilder,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$modulePathParser)))
			]));
}();
var $author$project$Stabel$Parser$SourceLocation$SourceLocation = F2(
	function (row, col) {
		return {aD: col, S: row};
	});
var $elm$parser$Parser$Advanced$getCol = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.aD, s);
};
var $elm$parser$Parser$Advanced$getRow = function (s) {
	return A3($elm$parser$Parser$Advanced$Good, false, s.S, s);
};
var $author$project$Stabel$Parser$sourceLocationParser = A2(
	$elm$parser$Parser$Advanced$keeper,
	A2(
		$elm$parser$Parser$Advanced$keeper,
		$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$SourceLocation$SourceLocation),
		$elm$parser$Parser$Advanced$getRow),
	$elm$parser$Parser$Advanced$getCol);
var $author$project$Stabel$Parser$nodeParser = $elm$parser$Parser$Advanced$oneOf(
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
									$author$project$Stabel$Parser$Integer,
									A2($author$project$Stabel$Parser$SourceLocation$SourceLocationRange, startLoc, endLoc),
									value);
							})),
					$author$project$Stabel$Parser$sourceLocationParser),
				$author$project$Stabel$Parser$intParser),
			$author$project$Stabel$Parser$sourceLocationParser),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F3(
							function (startLoc, builder, endLoc) {
								return builder(
									A2($author$project$Stabel$Parser$SourceLocation$SourceLocationRange, startLoc, endLoc));
							})),
					$author$project$Stabel$Parser$sourceLocationParser),
				$author$project$Stabel$Parser$qualifiedSymbolImplParser),
			$author$project$Stabel$Parser$sourceLocationParser)
		]));
var $author$project$Stabel$Parser$Problem$ExpectedWhitespace = {$: 7};
var $elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return function (s) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, s.c, s.b);
			return _Utils_eq(newOffset, -1) ? A2(
				$elm$parser$Parser$Advanced$Bad,
				false,
				A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{aD: 1, W: s.W, e: s.e, c: s.c + 1, S: s.S + 1, b: s.b}) : A3(
				$elm$parser$Parser$Advanced$Good,
				true,
				0,
				{aD: s.aD + 1, W: s.W, e: s.e, c: newOffset, S: s.S, b: s.b}));
		};
	});
var $elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3($elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.b);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					$elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.c, offset) < 0,
					0,
					{aD: col, W: s0.W, e: s0.e, c: offset, S: row, b: s0.b});
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
	return function (s) {
		return A5($elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.c, s.S, s.aD, s);
	};
};
var $author$project$Stabel$Parser$noiseParserLoop = function (_v0) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$elm$parser$Parser$Advanced$Loop(0)),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '#', $author$project$Stabel$Parser$Problem$UnknownError))),
				$elm$parser$Parser$Advanced$chompWhile(
					function (c) {
						return c !== '\n';
					})),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$elm$parser$Parser$Advanced$Loop(0)),
					A2(
						$elm$parser$Parser$Advanced$chompIf,
						function (c) {
							return A2($elm$core$Set$member, c, $author$project$Stabel$Parser$whitespaceChars);
						},
						$author$project$Stabel$Parser$Problem$ExpectedWhitespace)),
				$elm$parser$Parser$Advanced$chompWhile(
					function (c) {
						return A2($elm$core$Set$member, c, $author$project$Stabel$Parser$whitespaceChars);
					})),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(0))
			]));
};
var $author$project$Stabel$Parser$noiseParser = A2($elm$parser$Parser$Advanced$loop, 0, $author$project$Stabel$Parser$noiseParserLoop);
var $author$project$Stabel$Parser$implementationParserHelp = function (nodes) {
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
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$nodeParser, $author$project$Stabel$Parser$noiseParser)),
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
												$author$project$Stabel$Parser$InlineFunction,
												A2($author$project$Stabel$Parser$SourceLocation$SourceLocationRange, startLoc, endLoc),
												quotImpl),
											nodes));
								})),
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$author$project$Stabel$Parser$sourceLocationParser,
								$elm$parser$Parser$Advanced$symbol(
									A2($elm$parser$Parser$Advanced$Token, '[', $author$project$Stabel$Parser$Problem$ExpectedLeftBracket))),
							$author$project$Stabel$Parser$noiseParser)),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$author$project$Stabel$Parser$cyclic$implementationParser(),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, ']', $author$project$Stabel$Parser$Problem$ExpectedRightBracket)))),
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$sourceLocationParser, $author$project$Stabel$Parser$noiseParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(nodes)))
			]));
};
function $author$project$Stabel$Parser$cyclic$implementationParser() {
	return A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$implementationParserHelp);
}
var $author$project$Stabel$Parser$implementationParser = $author$project$Stabel$Parser$cyclic$implementationParser();
$author$project$Stabel$Parser$cyclic$implementationParser = function () {
	return $author$project$Stabel$Parser$implementationParser;
};
var $elm$parser$Parser$Advanced$Located = F3(
	function (row, col, context) {
		return {aD: col, W: context, S: row};
	});
var $elm$parser$Parser$Advanced$changeContext = F2(
	function (newContext, s) {
		return {aD: s.aD, W: newContext, e: s.e, c: s.c, S: s.S, b: s.b};
	});
var $elm$parser$Parser$Advanced$inContext = F2(
	function (context, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(
				A2(
					$elm$parser$Parser$Advanced$changeContext,
					A2(
						$elm$core$List$cons,
						A3($elm$parser$Parser$Advanced$Located, s0.S, s0.aD, context),
						s0.W),
					s0));
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					a,
					A2($elm$parser$Parser$Advanced$changeContext, s0.W, s1));
			} else {
				var step = _v1;
				return step;
			}
		};
	});
var $elm$parser$Parser$Advanced$keyword = function (_v0) {
	var kwd = _v0.a;
	var expecting = _v0.b;
	var progress = !$elm$core$String$isEmpty(kwd);
	return function (s) {
		var _v1 = A5($elm$parser$Parser$Advanced$isSubString, kwd, s.c, s.S, s.aD, s.b);
		var newOffset = _v1.a;
		var newRow = _v1.b;
		var newCol = _v1.c;
		return (_Utils_eq(newOffset, -1) || (0 <= A3(
			$elm$parser$Parser$Advanced$isSubChar,
			function (c) {
				return $elm$core$Char$isAlphaNum(c) || (c === '_');
			},
			newOffset,
			s.b))) ? A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
			$elm$parser$Parser$Advanced$Good,
			progress,
			0,
			{aD: newCol, W: s.W, e: s.e, c: newOffset, S: newRow, b: s.b});
	};
};
var $elm$parser$Parser$Advanced$map = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (!_v1.$) {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					func(a),
					s1);
			} else {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			}
		};
	});
var $author$project$Stabel$Parser$modulePathStringParser = function () {
	var joiner = function (_v0) {
		var path = _v0.a;
		var sym = _v0.b;
		return A2(
			$elm$core$String$join,
			'/',
			_Utils_ap(
				path,
				_List_fromArray(
					[sym])));
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$map,
				joiner,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					function (sym) {
						return A2(
							$elm$parser$Parser$Advanced$loop,
							_List_fromArray(
								[sym]),
							$author$project$Stabel$Parser$modulePathParser);
					},
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$author$project$Stabel$Parser$symbolImplParser))),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					function (res) {
						return '/' + joiner(res);
					}),
				A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$modulePathParser))
			]));
}();
var $author$project$Stabel$Parser$symbolImplListParser = function (symbols) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					function (sym) {
						return $elm$parser$Parser$Advanced$Loop(
							A2($elm$core$List$cons, sym, symbols));
					}),
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$symbolImplParser, $author$project$Stabel$Parser$noiseParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(symbols)))
			]));
};
var $author$project$Stabel$Parser$symbolParser = $author$project$Stabel$Parser$symbolParserHelp(
	function (c) {
		return !($elm$core$Char$isDigit(c) || ($elm$core$Char$isUpper(c) || A2($elm$core$Set$member, c, $author$project$Stabel$Parser$invalidSymbolChars)));
	});
var $author$project$Stabel$Parser$Problem$ExpectedTypeSeperator = {$: 12};
var $author$project$Stabel$Parser$Type$FunctionType = function (a) {
	return {$: 4, a: a};
};
var $author$project$Stabel$Parser$Type$NotStackRange = function (a) {
	return {$: 1, a: a};
};
var $author$project$Stabel$Parser$Type$Generic = function (a) {
	return {$: 3, a: a};
};
var $author$project$Stabel$Parser$Type$StackRange = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$Parser$Problem$ExpectedGeneric = {$: 3};
var $author$project$Stabel$Parser$genericParser = $elm$parser$Parser$Advanced$backtrackable(
	$elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$andThen,
				function (_v0) {
					return $elm$parser$Parser$Advanced$problem($author$project$Stabel$Parser$Problem$ExpectedGeneric);
				},
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '-', $author$project$Stabel$Parser$Problem$UnknownError)))),
				$author$project$Stabel$Parser$symbolParser
			])));
var $author$project$Stabel$Parser$genericOrRangeParser = function () {
	var helper = function (value) {
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$author$project$Stabel$Parser$Type$StackRange(value)),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '...', $author$project$Stabel$Parser$Problem$UnknownError))),
					A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$author$project$Stabel$Parser$Type$NotStackRange(
							$author$project$Stabel$Parser$Type$Generic(value))),
					A2(
						$elm$parser$Parser$Advanced$chompIf,
						function (c) {
							return A2($elm$core$Set$member, c, $author$project$Stabel$Parser$whitespaceChars);
						},
						$author$project$Stabel$Parser$Problem$ExpectedWhitespace))
				]));
	};
	return A2($elm$parser$Parser$Advanced$andThen, helper, $author$project$Stabel$Parser$genericParser);
}();
var $author$project$Stabel$Parser$Problem$ExpectedForwardSlash = {$: 6};
var $author$project$Stabel$Parser$Problem$ExpectedLeftParen = {$: 9};
var $author$project$Stabel$Parser$Problem$ExpectedRightParen = {$: 10};
var $author$project$Stabel$Parser$Type$LocalRef = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Stabel$Parser$Problem$ExpectedType = {$: 4};
var $author$project$Stabel$Parser$typeNameParser = $elm$parser$Parser$Advanced$variable(
	{Z: $author$project$Stabel$Parser$Problem$ExpectedType, ab: $author$project$Stabel$Parser$validSymbolChar, ai: $elm$core$Set$empty, bJ: $elm$core$Char$isUpper});
var $author$project$Stabel$Parser$modularizedTypeRefParser = function (reversedPath) {
	var onType = function (type_) {
		return $elm$parser$Parser$Advanced$Done(
			_Utils_Tuple2(
				$elm$core$List$reverse(reversedPath),
				type_));
	};
	var addToPath = function (pathPiece) {
		return $elm$parser$Parser$Advanced$Loop(
			A2($elm$core$List$cons, pathPiece, reversedPath));
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(onType),
				$author$project$Stabel$Parser$typeNameParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(addToPath),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$author$project$Stabel$Parser$symbolParser,
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '/', $author$project$Stabel$Parser$Problem$ExpectedForwardSlash))))
			]));
};
var $elm$parser$Parser$Advanced$lazy = function (thunk) {
	return function (s) {
		var _v0 = thunk(0);
		var parse = _v0;
		return parse(s);
	};
};
var $author$project$Stabel$Parser$typeOrGenericParser = function (types) {
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
								A2($author$project$Stabel$Parser$Type$LocalRef, name, _List_Nil),
								types));
					}),
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$typeNameParser, $author$project$Stabel$Parser$noiseParser)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					function (name) {
						return $elm$parser$Parser$Advanced$Loop(
							A2(
								$elm$core$List$cons,
								$author$project$Stabel$Parser$Type$Generic(name),
								types));
					}),
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$genericParser, $author$project$Stabel$Parser$noiseParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(types)))
			]));
};
function $author$project$Stabel$Parser$cyclic$typeRefParser() {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$Type$LocalRef),
					A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$typeNameParser, $author$project$Stabel$Parser$noiseParser)),
				A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$typeOrGenericParser)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							F2(
								function (_v0, binds) {
									var path = _v0.a;
									var name = _v0.b;
									return A3($author$project$Stabel$Parser$Type$ExternalRef, path, name, binds);
								})),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, '/', $author$project$Stabel$Parser$Problem$ExpectedForwardSlash))),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$modularizedTypeRefParser),
						$author$project$Stabel$Parser$noiseParser)),
				A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$typeOrGenericParser)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed(
						F2(
							function (_v1, binds) {
								var path = _v1.a;
								var name = _v1.b;
								return A3($author$project$Stabel$Parser$Type$InternalRef, path, name, binds);
							})),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$modularizedTypeRefParser),
						$author$project$Stabel$Parser$noiseParser)),
				A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$typeOrGenericParser)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$Type$Generic),
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$genericParser, $author$project$Stabel$Parser$noiseParser)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, '(', $author$project$Stabel$Parser$Problem$ExpectedLeftParen))),
					$author$project$Stabel$Parser$noiseParser),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$lazy(
							function (_v2) {
								return $author$project$Stabel$Parser$cyclic$typeRefParser();
							}),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, ')', $author$project$Stabel$Parser$Problem$ExpectedRightParen))),
					$author$project$Stabel$Parser$noiseParser))
			]));
}
var $author$project$Stabel$Parser$typeRefParser = $author$project$Stabel$Parser$cyclic$typeRefParser();
$author$project$Stabel$Parser$cyclic$typeRefParser = function () {
	return $author$project$Stabel$Parser$typeRefParser;
};
var $author$project$Stabel$Parser$typeSignatureRefParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed(
				function (name) {
					return A2($author$project$Stabel$Parser$Type$LocalRef, name, _List_Nil);
				}),
			$author$project$Stabel$Parser$typeNameParser),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					function (_v0) {
						var path = _v0.a;
						var name = _v0.b;
						return A3($author$project$Stabel$Parser$Type$ExternalRef, path, name, _List_Nil);
					}),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '/', $author$project$Stabel$Parser$Problem$ExpectedForwardSlash))),
			A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$modularizedTypeRefParser)),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed(
				function (_v1) {
					var path = _v1.a;
					var name = _v1.b;
					return A3($author$project$Stabel$Parser$Type$InternalRef, path, name, _List_Nil);
				}),
			A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$modularizedTypeRefParser)),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$Type$Generic),
			$author$project$Stabel$Parser$genericParser),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '(', $author$project$Stabel$Parser$Problem$ExpectedLeftParen))),
				$author$project$Stabel$Parser$noiseParser),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$author$project$Stabel$Parser$typeRefParser,
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, ')', $author$project$Stabel$Parser$Problem$ExpectedRightParen))))
		]));
var $author$project$Stabel$Parser$typeLoopParser = function (reverseTypes) {
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
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$genericOrRangeParser, $author$project$Stabel$Parser$noiseParser)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(
					A2($elm$core$Basics$composeR, $author$project$Stabel$Parser$Type$NotStackRange, step)),
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$typeSignatureRefParser, $author$project$Stabel$Parser$noiseParser)),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$elm$parser$Parser$Advanced$succeed(
							function (functionType) {
								return step(
									$author$project$Stabel$Parser$Type$NotStackRange(
										$author$project$Stabel$Parser$Type$FunctionType(functionType)));
							}),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, '[', $author$project$Stabel$Parser$Problem$ExpectedLeftBracket))),
					$author$project$Stabel$Parser$noiseParser),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						$author$project$Stabel$Parser$cyclic$typeSignatureParser(),
						$elm$parser$Parser$Advanced$symbol(
							A2($elm$parser$Parser$Advanced$Token, ']', $author$project$Stabel$Parser$Problem$ExpectedRightBracket))),
					$author$project$Stabel$Parser$noiseParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(reverseTypes)))
			]));
};
function $author$project$Stabel$Parser$cyclic$typeSignatureParser() {
	return A2(
		$elm$parser$Parser$Advanced$keeper,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed(
				F2(
					function (input, output) {
						return {o: input, H: output};
					})),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$typeLoopParser),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '--', $author$project$Stabel$Parser$Problem$ExpectedTypeSeperator))),
				$author$project$Stabel$Parser$noiseParser)),
		A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$typeLoopParser));
}
var $author$project$Stabel$Parser$typeSignatureParser = $author$project$Stabel$Parser$cyclic$typeSignatureParser();
$author$project$Stabel$Parser$cyclic$typeSignatureParser = function () {
	return $author$project$Stabel$Parser$typeSignatureParser;
};
var $author$project$Stabel$Parser$functionMetadataParser = function (def) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$TypeKeyword,
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
												bO: $author$project$Stabel$Parser$AssociatedFunctionSignature$UserProvided(typeSign)
											}));
								}),
							$elm$parser$Parser$Advanced$keyword(
								A2($elm$parser$Parser$Advanced$Token, 'type:', $author$project$Stabel$Parser$Problem$UnknownError))),
						$author$project$Stabel$Parser$noiseParser),
					$author$project$Stabel$Parser$typeSignatureParser)),
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$AliasKeyword,
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
										function (alias, value) {
											return $elm$parser$Parser$Advanced$Loop(
												_Utils_update(
													def,
													{
														q: A3($elm$core$Dict$insert, alias, value, def.q)
													}));
										})),
								$elm$parser$Parser$Advanced$keyword(
									A2($elm$parser$Parser$Advanced$Token, 'alias:', $author$project$Stabel$Parser$Problem$UnknownError))),
							$author$project$Stabel$Parser$noiseParser),
						A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$symbolParser, $author$project$Stabel$Parser$noiseParser)),
					A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$modulePathStringParser, $author$project$Stabel$Parser$noiseParser))),
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$ImportKeyword,
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
										function (mod, vals) {
											return $elm$parser$Parser$Advanced$Loop(
												_Utils_update(
													def,
													{
														t: A3($elm$core$Dict$insert, mod, vals, def.t)
													}));
										})),
								$elm$parser$Parser$Advanced$keyword(
									A2($elm$parser$Parser$Advanced$Token, 'import:', $author$project$Stabel$Parser$Problem$UnknownError))),
							$author$project$Stabel$Parser$noiseParser),
						A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$modulePathStringParser, $author$project$Stabel$Parser$noiseParser)),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$symbolImplListParser),
						$author$project$Stabel$Parser$noiseParser))),
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$ImplementationKeyword,
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
												aL: $author$project$Stabel$Parser$SoloImpl(impl)
											}));
								}),
							$elm$parser$Parser$Advanced$keyword(
								A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Stabel$Parser$Problem$UnknownError))),
						$author$project$Stabel$Parser$noiseParser),
					$author$project$Stabel$Parser$implementationParser)),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				$elm$parser$Parser$Advanced$problem,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$Problem$UnknownMetadata),
					$author$project$Stabel$Parser$definitionMetadataParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(def))
			]));
};
var $author$project$Stabel$Parser$functionDefinitionParser = F2(
	function (definedFunctions, _v0) {
		var startLocation = _v0.a;
		var name = _v0.b;
		var joinParseResults = F2(
			function (def, endLocation) {
				return _Utils_update(
					def,
					{
						w: $elm$core$Maybe$Just(
							{bd: endLocation, bJ: startLocation})
					});
			});
		var emptyDef = {
			q: $elm$core$Dict$empty,
			aL: $author$project$Stabel$Parser$SoloImpl(_List_Nil),
			t: $elm$core$Dict$empty,
			m: name,
			w: $elm$core$Maybe$Nothing,
			bO: $author$project$Stabel$Parser$AssociatedFunctionSignature$NotProvided
		};
		return A2(
			$elm$parser$Parser$Advanced$inContext,
			A2($author$project$Stabel$Parser$Problem$FunctionDefinition, startLocation, name),
			function () {
				var _v1 = A2($elm$core$Dict$get, name, definedFunctions);
				if (!_v1.$) {
					var previousDefinition = _v1.a;
					return $elm$parser$Parser$Advanced$problem(
						A2($author$project$Stabel$Parser$Problem$FunctionAlreadyDefined, name, previousDefinition.w));
				} else {
					return A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(joinParseResults),
								$author$project$Stabel$Parser$noiseParser),
							A2($elm$parser$Parser$Advanced$loop, emptyDef, $author$project$Stabel$Parser$functionMetadataParser)),
						$author$project$Stabel$Parser$sourceLocationParser);
				}
			}());
	});
var $author$project$Stabel$Parser$ConstructType = function (a) {
	return {$: 5, a: a};
};
var $author$project$Stabel$Parser$GetMember = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var $author$project$Stabel$Parser$SetMember = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var $author$project$Stabel$Parser$AssociatedFunctionSignature$Verified = function (a) {
	return {$: 2, a: a};
};
var $author$project$Stabel$Parser$generateDefaultFunctionsForType = function (typeDef) {
	var _v0 = typeDef.aQ;
	if (_v0.$ === 1) {
		return _List_Nil;
	} else {
		var typeMembers = _v0.a;
		var typeOfType = $author$project$Stabel$Parser$Type$NotStackRange(
			A2(
				$author$project$Stabel$Parser$Type$LocalRef,
				typeDef.m,
				A2($elm$core$List$map, $author$project$Stabel$Parser$Type$Generic, typeDef._)));
		var setterGetterPair = function (_v1) {
			var memberName = _v1.a;
			var memberType = _v1.b;
			return _List_fromArray(
				[
					{
					q: $elm$core$Dict$empty,
					aL: $author$project$Stabel$Parser$SoloImpl(
						_List_fromArray(
							[
								A2($author$project$Stabel$Parser$SetMember, typeDef.m, memberName)
							])),
					t: $elm$core$Dict$empty,
					m: '>' + memberName,
					w: $elm$core$Maybe$Nothing,
					bO: $author$project$Stabel$Parser$AssociatedFunctionSignature$Verified(
						{
							o: _List_fromArray(
								[
									typeOfType,
									$author$project$Stabel$Parser$Type$NotStackRange(memberType)
								]),
							H: _List_fromArray(
								[typeOfType])
						})
				},
					{
					q: $elm$core$Dict$empty,
					aL: $author$project$Stabel$Parser$SoloImpl(
						_List_fromArray(
							[
								A2($author$project$Stabel$Parser$GetMember, typeDef.m, memberName)
							])),
					t: $elm$core$Dict$empty,
					m: memberName + '>',
					w: $elm$core$Maybe$Nothing,
					bO: $author$project$Stabel$Parser$AssociatedFunctionSignature$Verified(
						{
							o: _List_fromArray(
								[typeOfType]),
							H: _List_fromArray(
								[
									$author$project$Stabel$Parser$Type$NotStackRange(memberType)
								])
						})
				}
				]);
		};
		var ctorDef = {
			q: $elm$core$Dict$empty,
			aL: $author$project$Stabel$Parser$SoloImpl(
				_List_fromArray(
					[
						$author$project$Stabel$Parser$ConstructType(typeDef.m)
					])),
			t: $elm$core$Dict$empty,
			m: $elm$core$List$isEmpty(typeMembers) ? typeDef.m : ('>' + typeDef.m),
			w: $elm$core$Maybe$Nothing,
			bO: $author$project$Stabel$Parser$AssociatedFunctionSignature$Verified(
				{
					o: A2(
						$elm$core$List$map,
						A2($elm$core$Basics$composeL, $author$project$Stabel$Parser$Type$NotStackRange, $elm$core$Tuple$second),
						typeMembers),
					H: _List_fromArray(
						[typeOfType])
				})
		};
		return A2(
			$elm$core$List$cons,
			ctorDef,
			A2($elm$core$List$concatMap, setterGetterPair, typeMembers));
	}
};
var $author$project$Stabel$Parser$MultiImpl = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Stabel$Parser$Problem$MultifunctionDefinition = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Stabel$Parser$Problem$ElseKeyword = {$: 11};
var $author$project$Stabel$Parser$LiteralInt = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$Parser$LiteralType = function (a) {
	return {$: 1, a: a};
};
var $author$project$Stabel$Parser$RecursiveMatch = function (a) {
	return {$: 2, a: a};
};
var $author$project$Stabel$Parser$typeMatchTypeParser = $elm$parser$Parser$Advanced$oneOf(
	_List_fromArray(
		[
			A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed(
				function (name) {
					return A2($author$project$Stabel$Parser$Type$LocalRef, name, _List_Nil);
				}),
			$author$project$Stabel$Parser$typeNameParser),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed(
					function (_v0) {
						var path = _v0.a;
						var name = _v0.b;
						return A3($author$project$Stabel$Parser$Type$ExternalRef, path, name, _List_Nil);
					}),
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, '/', $author$project$Stabel$Parser$Problem$ExpectedForwardSlash))),
			A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$modularizedTypeRefParser)),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed(
				function (_v1) {
					var path = _v1.a;
					var name = _v1.b;
					return A3($author$project$Stabel$Parser$Type$InternalRef, path, name, _List_Nil);
				}),
			A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$modularizedTypeRefParser)),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$Type$Generic),
			$author$project$Stabel$Parser$genericParser),
			A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$symbol(
						A2($elm$parser$Parser$Advanced$Token, '(', $author$project$Stabel$Parser$Problem$ExpectedLeftParen))),
				$author$project$Stabel$Parser$noiseParser),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$author$project$Stabel$Parser$typeRefParser,
				$elm$parser$Parser$Advanced$symbol(
					A2($elm$parser$Parser$Advanced$Token, ')', $author$project$Stabel$Parser$Problem$ExpectedRightParen))))
		]));
var $author$project$Stabel$Parser$typeMatchConditionParser = function (nodes) {
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
					A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$symbolParser, $author$project$Stabel$Parser$noiseParser)),
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$author$project$Stabel$Parser$cyclic$typeMatchValueParser(),
					$author$project$Stabel$Parser$noiseParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(nodes)))
			]));
};
function $author$project$Stabel$Parser$cyclic$typeMatchValueParser() {
	var handleNewType = function (match) {
		var type_ = match.b;
		var conditions = match.c;
		if (!conditions.b) {
			return $author$project$Stabel$Parser$LiteralType(type_);
		} else {
			return $author$project$Stabel$Parser$RecursiveMatch(match);
		}
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$LiteralInt),
				$author$project$Stabel$Parser$intParser),
				A2(
				$elm$parser$Parser$Advanced$keeper,
				$elm$parser$Parser$Advanced$succeed(handleNewType),
				$author$project$Stabel$Parser$cyclic$typeMatchParser())
			]));
}
function $author$project$Stabel$Parser$cyclic$typeMatchParser() {
	return A2(
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
									$author$project$Stabel$Parser$TypeMatch,
									A2($author$project$Stabel$Parser$SourceLocation$SourceLocationRange, startLoc, endLoc),
									type_,
									conds);
							})),
					$author$project$Stabel$Parser$sourceLocationParser),
				$author$project$Stabel$Parser$typeMatchTypeParser),
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
									A2($elm$parser$Parser$Advanced$Token, '(', $author$project$Stabel$Parser$Problem$ExpectedLeftParen))),
							$author$project$Stabel$Parser$noiseParser),
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$typeMatchConditionParser),
							$elm$parser$Parser$Advanced$symbol(
								A2($elm$parser$Parser$Advanced$Token, ')', $author$project$Stabel$Parser$Problem$ExpectedRightParen)))),
						$elm$parser$Parser$Advanced$succeed(_List_Nil)
					]))),
		$author$project$Stabel$Parser$sourceLocationParser);
}
var $author$project$Stabel$Parser$typeMatchValueParser = $author$project$Stabel$Parser$cyclic$typeMatchValueParser();
$author$project$Stabel$Parser$cyclic$typeMatchValueParser = function () {
	return $author$project$Stabel$Parser$typeMatchValueParser;
};
var $author$project$Stabel$Parser$typeMatchParser = $author$project$Stabel$Parser$cyclic$typeMatchParser();
$author$project$Stabel$Parser$cyclic$typeMatchParser = function () {
	return $author$project$Stabel$Parser$typeMatchParser;
};
var $author$project$Stabel$Parser$multiFunctionMetadataParser = function (def) {
	var setDefaultImpl = function (impl) {
		var _v1 = def.aL;
		if (_v1.$ === 1) {
			var whens = _v1.a;
			return A2($author$project$Stabel$Parser$MultiImpl, whens, impl);
		} else {
			return A2($author$project$Stabel$Parser$MultiImpl, _List_Nil, impl);
		}
	};
	var addWhenImpl = function (impl) {
		var _v0 = def.aL;
		if (_v0.$ === 1) {
			var whens = _v0.a;
			var _default = _v0.b;
			return A2(
				$author$project$Stabel$Parser$MultiImpl,
				A2($elm$core$List$cons, impl, whens),
				_default);
		} else {
			var _default = _v0.a;
			return A2(
				$author$project$Stabel$Parser$MultiImpl,
				_List_fromArray(
					[impl]),
				_default);
		}
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$TypeKeyword,
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
												bO: $author$project$Stabel$Parser$AssociatedFunctionSignature$UserProvided(typeSign)
											}));
								}),
							$elm$parser$Parser$Advanced$keyword(
								A2($elm$parser$Parser$Advanced$Token, 'type:', $author$project$Stabel$Parser$Problem$UnknownError))),
						$author$project$Stabel$Parser$noiseParser),
					$author$project$Stabel$Parser$typeSignatureParser)),
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$ElseKeyword,
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
												aL: setDefaultImpl(impl)
											}));
								}),
							$elm$parser$Parser$Advanced$keyword(
								A2($elm$parser$Parser$Advanced$Token, 'else:', $author$project$Stabel$Parser$Problem$UnknownError))),
						$author$project$Stabel$Parser$noiseParser),
					$author$project$Stabel$Parser$implementationParser)),
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$AliasKeyword,
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
										function (alias, value) {
											return $elm$parser$Parser$Advanced$Loop(
												_Utils_update(
													def,
													{
														q: A3($elm$core$Dict$insert, alias, value, def.q)
													}));
										})),
								$elm$parser$Parser$Advanced$keyword(
									A2($elm$parser$Parser$Advanced$Token, 'alias:', $author$project$Stabel$Parser$Problem$UnknownError))),
							$author$project$Stabel$Parser$noiseParser),
						A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$symbolParser, $author$project$Stabel$Parser$noiseParser)),
					A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$modulePathStringParser, $author$project$Stabel$Parser$noiseParser))),
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$ImportKeyword,
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
										function (mod, vals) {
											return $elm$parser$Parser$Advanced$Loop(
												_Utils_update(
													def,
													{
														t: A3($elm$core$Dict$insert, mod, vals, def.t)
													}));
										})),
								$elm$parser$Parser$Advanced$keyword(
									A2($elm$parser$Parser$Advanced$Token, 'import:', $author$project$Stabel$Parser$Problem$UnknownError))),
							$author$project$Stabel$Parser$noiseParser),
						A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$modulePathStringParser, $author$project$Stabel$Parser$noiseParser)),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$symbolImplListParser),
						$author$project$Stabel$Parser$noiseParser))),
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$ImplementationKeyword,
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
														aL: addWhenImpl(
															_Utils_Tuple2(type_, impl))
													}));
										})),
								$elm$parser$Parser$Advanced$keyword(
									A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Stabel$Parser$Problem$UnknownError))),
							$author$project$Stabel$Parser$noiseParser),
						A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$typeMatchParser, $author$project$Stabel$Parser$noiseParser)),
					$author$project$Stabel$Parser$implementationParser)),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				$elm$parser$Parser$Advanced$problem,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$Problem$UnknownMetadata),
					$author$project$Stabel$Parser$definitionMetadataParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(def))
			]));
};
var $author$project$Stabel$Parser$multiFunctionDefinitionParser = F2(
	function (definedFunctions, _v0) {
		var startLocation = _v0.a;
		var name = _v0.b;
		var reverseWhens = function (implementation) {
			if (!implementation.$) {
				return implementation;
			} else {
				var whens = implementation.a;
				var impl = implementation.b;
				return A2(
					$author$project$Stabel$Parser$MultiImpl,
					$elm$core$List$reverse(whens),
					impl);
			}
		};
		var joinParseResults = F2(
			function (def, endLocation) {
				return _Utils_update(
					def,
					{
						aL: reverseWhens(def.aL),
						w: $elm$core$Maybe$Just(
							{bd: endLocation, bJ: startLocation})
					});
			});
		var emptyDef = {
			q: $elm$core$Dict$empty,
			aL: $author$project$Stabel$Parser$SoloImpl(_List_Nil),
			t: $elm$core$Dict$empty,
			m: name,
			w: $elm$core$Maybe$Nothing,
			bO: $author$project$Stabel$Parser$AssociatedFunctionSignature$NotProvided
		};
		return A2(
			$elm$parser$Parser$Advanced$inContext,
			A2($author$project$Stabel$Parser$Problem$MultifunctionDefinition, startLocation, name),
			function () {
				var _v1 = A2($elm$core$Dict$get, name, definedFunctions);
				if (!_v1.$) {
					var previousDefinition = _v1.a;
					return $elm$parser$Parser$Advanced$problem(
						A2($author$project$Stabel$Parser$Problem$FunctionAlreadyDefined, name, previousDefinition.w));
				} else {
					return A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								$elm$parser$Parser$Advanced$succeed(joinParseResults),
								$author$project$Stabel$Parser$noiseParser),
							A2($elm$parser$Parser$Advanced$loop, emptyDef, $author$project$Stabel$Parser$multiFunctionMetadataParser)),
						$author$project$Stabel$Parser$sourceLocationParser);
				}
			}());
	});
var $elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _v0) {
		var parse = _v0;
		return function (s0) {
			var _v1 = parse(s0);
			if (_v1.$ === 1) {
				var p = _v1.a;
				var x = _v1.b;
				return A2($elm$parser$Parser$Advanced$Bad, p, x);
			} else {
				var p = _v1.a;
				var a = _v1.b;
				var s1 = _v1.c;
				return A3(
					$elm$parser$Parser$Advanced$Good,
					p,
					A2(
						func,
						A3($elm$core$String$slice, s0.c, s1.c, s0.b),
						a),
					s1);
			}
		};
	});
var $elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2($elm$parser$Parser$Advanced$mapChompedString, $elm$core$Basics$always, parser);
};
var $author$project$Stabel$Parser$textParser = $elm$parser$Parser$Advanced$getChompedString(
	$elm$parser$Parser$Advanced$chompWhile(
		function (c) {
			return !A2($elm$core$Set$member, c, $author$project$Stabel$Parser$whitespaceChars);
		}));
var $author$project$Stabel$Parser$Problem$StructDefinition = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$Stabel$Parser$StructMembers = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$Parser$Problem$TypeAlreadyDefined = F2(
	function (a, b) {
		return {$: 16, a: a, b: b};
	});
var $author$project$Stabel$Parser$typeGenericParser = function (generics) {
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
				A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$genericParser, $author$project$Stabel$Parser$noiseParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(generics)))
			]));
};
var $author$project$Stabel$Parser$Problem$MemberKeyword = {$: 9};
var $author$project$Stabel$Parser$typeMemberParser = F2(
	function (functions, types) {
		var alreadyDefinedCheck = function (name) {
			var setterName = '>' + name;
			var getterName = name + '>';
			var _v0 = _Utils_Tuple2(
				A2($elm$core$Dict$get, getterName, functions),
				A2($elm$core$Dict$get, setterName, functions));
			if (!_v0.a.$) {
				var getter = _v0.a.a;
				return $elm$parser$Parser$Advanced$problem(
					A2($author$project$Stabel$Parser$Problem$FunctionAlreadyDefined, getter.m, getter.w));
			} else {
				if (!_v0.b.$) {
					var setter = _v0.b.a;
					return $elm$parser$Parser$Advanced$problem(
						A2($author$project$Stabel$Parser$Problem$FunctionAlreadyDefined, setter.m, setter.w));
				} else {
					var _v1 = _v0.a;
					var _v2 = _v0.b;
					return $elm$parser$Parser$Advanced$succeed(name);
				}
			}
		};
		return $elm$parser$Parser$Advanced$oneOf(
			_List_fromArray(
				[
					A2(
					$elm$parser$Parser$Advanced$inContext,
					$author$project$Stabel$Parser$Problem$MemberKeyword,
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
										A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Stabel$Parser$Problem$UnknownError))),
								$author$project$Stabel$Parser$noiseParser),
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2($elm$parser$Parser$Advanced$andThen, alreadyDefinedCheck, $author$project$Stabel$Parser$symbolParser),
								$author$project$Stabel$Parser$noiseParser)),
						$author$project$Stabel$Parser$typeRefParser)),
					A2(
					$elm$parser$Parser$Advanced$andThen,
					$elm$parser$Parser$Advanced$problem,
					A2(
						$elm$parser$Parser$Advanced$keeper,
						$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$Problem$UnknownMetadata),
						$author$project$Stabel$Parser$definitionMetadataParser)),
					$elm$parser$Parser$Advanced$succeed(
					$elm$parser$Parser$Advanced$Done(
						$elm$core$List$reverse(types)))
				]));
	});
var $author$project$Stabel$Parser$typeDefinitionParser = F3(
	function (definedTypes, definedFunctions, _v0) {
		var startLocation = _v0.a;
		var typeName = _v0.b;
		var ctor = F3(
			function (generics, members, endLocation) {
				return {
					_: generics,
					aQ: $author$project$Stabel$Parser$StructMembers(members),
					m: typeName,
					U: A2($author$project$Stabel$Parser$SourceLocation$SourceLocationRange, startLocation, endLocation)
				};
			});
		return A2(
			$elm$parser$Parser$Advanced$inContext,
			A2($author$project$Stabel$Parser$Problem$StructDefinition, startLocation, typeName),
			function () {
				var _v1 = A2($elm$core$Dict$get, typeName, definedTypes);
				if (!_v1.$) {
					var previousDefinition = _v1.a;
					return $elm$parser$Parser$Advanced$problem(
						A2($author$project$Stabel$Parser$Problem$TypeAlreadyDefined, typeName, previousDefinition.U));
				} else {
					return A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$keeper,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(ctor),
									$author$project$Stabel$Parser$noiseParser),
								A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$typeGenericParser)),
							A2(
								$elm$parser$Parser$Advanced$loop,
								_List_Nil,
								$author$project$Stabel$Parser$typeMemberParser(definedFunctions))),
						$author$project$Stabel$Parser$sourceLocationParser);
				}
			}());
	});
var $author$project$Stabel$Parser$Problem$UnionDefinition = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $author$project$Stabel$Parser$UnionMembers = function (a) {
	return {$: 1, a: a};
};
var $author$project$Stabel$Parser$unionTypeMemberParser = function (types) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$MemberKeyword,
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
								A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Stabel$Parser$Problem$UnknownError))),
						$author$project$Stabel$Parser$noiseParser),
					$author$project$Stabel$Parser$typeRefParser)),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				$elm$parser$Parser$Advanced$problem,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$Problem$UnknownMetadata),
					$author$project$Stabel$Parser$definitionMetadataParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(
					$elm$core$List$reverse(types)))
			]));
};
var $author$project$Stabel$Parser$unionTypeDefinitionParser = F2(
	function (definedTypes, _v0) {
		var startLocation = _v0.a;
		var typeName = _v0.b;
		var ctor = F3(
			function (generics, members, endLocation) {
				return {
					_: generics,
					aQ: $author$project$Stabel$Parser$UnionMembers(members),
					m: typeName,
					U: A2($author$project$Stabel$Parser$SourceLocation$SourceLocationRange, startLocation, endLocation)
				};
			});
		return A2(
			$elm$parser$Parser$Advanced$inContext,
			A2($author$project$Stabel$Parser$Problem$UnionDefinition, startLocation, typeName),
			function () {
				var _v1 = A2($elm$core$Dict$get, typeName, definedTypes);
				if (!_v1.$) {
					var previousDefinition = _v1.a;
					return $elm$parser$Parser$Advanced$problem(
						A2($author$project$Stabel$Parser$Problem$TypeAlreadyDefined, typeName, previousDefinition.U));
				} else {
					return A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$keeper,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$elm$parser$Parser$Advanced$succeed(ctor),
									$author$project$Stabel$Parser$noiseParser),
								A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$typeGenericParser)),
							A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$unionTypeMemberParser)),
						$author$project$Stabel$Parser$sourceLocationParser);
				}
			}());
	});
var $author$project$Stabel$Parser$definitionParser = function (ast) {
	var insertType = function (typeDef) {
		var typeName = typeDef.m;
		var typeFunctions = $author$project$Stabel$Parser$generateDefaultFunctionsForType(typeDef);
		return $elm$parser$Parser$Advanced$succeed(
			$elm$parser$Parser$Advanced$Loop(
				_Utils_update(
					ast,
					{
						bj: A2(
							$elm$core$Dict$union,
							A2(
								$elm_community$dict_extra$Dict$Extra$fromListBy,
								function ($) {
									return $.m;
								},
								typeFunctions),
							ast.bj),
						I: A3($elm$core$Dict$insert, typeName, typeDef, ast.I)
					})));
	};
	var insertFunction = function (funcDef) {
		return $elm$parser$Parser$Advanced$succeed(
			$elm$parser$Parser$Advanced$Loop(
				_Utils_update(
					ast,
					{
						bj: A3($elm$core$Dict$insert, funcDef.m, funcDef, ast.bj)
					})));
	};
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$andThen,
				insertFunction,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$author$project$Stabel$Parser$functionDefinitionParser(ast.bj),
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair),
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$author$project$Stabel$Parser$sourceLocationParser,
									$elm$parser$Parser$Advanced$keyword(
										A2($elm$parser$Parser$Advanced$Token, 'def:', $author$project$Stabel$Parser$Problem$UnknownError))),
								$author$project$Stabel$Parser$noiseParser)),
						$author$project$Stabel$Parser$symbolParser))),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				insertFunction,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$author$project$Stabel$Parser$multiFunctionDefinitionParser(ast.bj),
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair),
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$author$project$Stabel$Parser$sourceLocationParser,
									$elm$parser$Parser$Advanced$keyword(
										A2($elm$parser$Parser$Advanced$Token, 'defmulti:', $author$project$Stabel$Parser$Problem$UnknownError))),
								$author$project$Stabel$Parser$noiseParser)),
						$author$project$Stabel$Parser$symbolParser))),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				insertType,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					A2($author$project$Stabel$Parser$typeDefinitionParser, ast.I, ast.bj),
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair),
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$author$project$Stabel$Parser$sourceLocationParser,
									$elm$parser$Parser$Advanced$keyword(
										A2($elm$parser$Parser$Advanced$Token, 'defstruct:', $author$project$Stabel$Parser$Problem$UnknownError))),
								$author$project$Stabel$Parser$noiseParser)),
						$author$project$Stabel$Parser$typeNameParser))),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				insertType,
				A2(
					$elm$parser$Parser$Advanced$andThen,
					$author$project$Stabel$Parser$unionTypeDefinitionParser(ast.I),
					A2(
						$elm$parser$Parser$Advanced$keeper,
						A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed($elm$core$Tuple$pair),
							A2(
								$elm$parser$Parser$Advanced$ignorer,
								A2(
									$elm$parser$Parser$Advanced$ignorer,
									$author$project$Stabel$Parser$sourceLocationParser,
									$elm$parser$Parser$Advanced$keyword(
										A2($elm$parser$Parser$Advanced$Token, 'defunion:', $author$project$Stabel$Parser$Problem$UnknownError))),
								$author$project$Stabel$Parser$noiseParser)),
						$author$project$Stabel$Parser$typeNameParser))),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				$elm$parser$Parser$Advanced$problem,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$Problem$BadDefinition),
					$author$project$Stabel$Parser$textParser)),
				$elm$parser$Parser$Advanced$succeed(
				$elm$parser$Parser$Advanced$Done(ast))
			]));
};
var $elm$parser$Parser$Advanced$end = function (x) {
	return function (s) {
		return _Utils_eq(
			$elm$core$String$length(s.b),
			s.c) ? A3($elm$parser$Parser$Advanced$Good, false, 0, s) : A2(
			$elm$parser$Parser$Advanced$Bad,
			false,
			A2($elm$parser$Parser$Advanced$fromState, s, x));
	};
};
var $author$project$Stabel$Parser$ModuleDefinition$Defined = function (a) {
	return {$: 1, a: a};
};
var $author$project$Stabel$Parser$Problem$ModuleDefinition = {$: 0};
var $author$project$Stabel$Parser$Problem$ExposingKeyword = {$: 7};
var $author$project$Stabel$Parser$metadataParser = $author$project$Stabel$Parser$metadataParserHelp($elm$core$Set$empty);
var $author$project$Stabel$Parser$moduleDefinitionMetaParser = function (def) {
	return $elm$parser$Parser$Advanced$oneOf(
		_List_fromArray(
			[
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$AliasKeyword,
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
										function (alias, value) {
											return $elm$parser$Parser$Advanced$Loop(
												_Utils_update(
													def,
													{
														q: A3($elm$core$Dict$insert, alias, value, def.q)
													}));
										})),
								$elm$parser$Parser$Advanced$keyword(
									A2($elm$parser$Parser$Advanced$Token, 'alias:', $author$project$Stabel$Parser$Problem$UnknownError))),
							$author$project$Stabel$Parser$noiseParser),
						A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$symbolParser, $author$project$Stabel$Parser$noiseParser)),
					A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$modulePathStringParser, $author$project$Stabel$Parser$noiseParser))),
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$ImportKeyword,
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
										function (mod, vals) {
											return $elm$parser$Parser$Advanced$Loop(
												_Utils_update(
													def,
													{
														t: A3($elm$core$Dict$insert, mod, vals, def.t)
													}));
										})),
								$elm$parser$Parser$Advanced$keyword(
									A2($elm$parser$Parser$Advanced$Token, 'import:', $author$project$Stabel$Parser$Problem$UnknownError))),
							$author$project$Stabel$Parser$noiseParser),
						A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$modulePathStringParser, $author$project$Stabel$Parser$noiseParser)),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$symbolImplListParser),
						$author$project$Stabel$Parser$noiseParser))),
				A2(
				$elm$parser$Parser$Advanced$inContext,
				$author$project$Stabel$Parser$Problem$ExposingKeyword,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$ignorer,
							$elm$parser$Parser$Advanced$succeed(
								function (exposings) {
									return $elm$parser$Parser$Advanced$Loop(
										_Utils_update(
											def,
											{bg: exposings}));
								}),
							$elm$parser$Parser$Advanced$keyword(
								A2($elm$parser$Parser$Advanced$Token, 'exposing:', $author$project$Stabel$Parser$Problem$UnknownError))),
						$author$project$Stabel$Parser$noiseParser),
					A2(
						$elm$parser$Parser$Advanced$ignorer,
						A2(
							$elm$parser$Parser$Advanced$map,
							$elm$core$Set$fromList,
							A2($elm$parser$Parser$Advanced$loop, _List_Nil, $author$project$Stabel$Parser$symbolImplListParser)),
						$author$project$Stabel$Parser$noiseParser))),
				A2(
				$elm$parser$Parser$Advanced$andThen,
				$elm$parser$Parser$Advanced$problem,
				A2(
					$elm$parser$Parser$Advanced$keeper,
					$elm$parser$Parser$Advanced$succeed($author$project$Stabel$Parser$Problem$UnknownMetadata),
					$author$project$Stabel$Parser$metadataParser)),
				A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed(
						$elm$parser$Parser$Advanced$Done(def)),
					$elm$parser$Parser$Advanced$keyword(
						A2($elm$parser$Parser$Advanced$Token, ':', $author$project$Stabel$Parser$Problem$UnknownError))),
				$author$project$Stabel$Parser$noiseParser)
			]));
};
var $author$project$Stabel$Parser$moduleDefinitionParser = A2(
	$elm$parser$Parser$Advanced$inContext,
	$author$project$Stabel$Parser$Problem$ModuleDefinition,
	A2(
		$elm$parser$Parser$Advanced$map,
		$author$project$Stabel$Parser$ModuleDefinition$Defined,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				A2(
					$elm$parser$Parser$Advanced$ignorer,
					$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
					$elm$parser$Parser$Advanced$keyword(
						A2($elm$parser$Parser$Advanced$Token, 'defmodule:', $author$project$Stabel$Parser$Problem$UnknownError))),
				$author$project$Stabel$Parser$noiseParser),
			A2($elm$parser$Parser$Advanced$loop, $author$project$Stabel$Parser$ModuleDefinition$emptyDefinition, $author$project$Stabel$Parser$moduleDefinitionMetaParser))));
var $author$project$Stabel$Parser$parser = function (ref) {
	var joinParseResults = F2(
		function (modDef, ast) {
			return _Utils_update(
				ast,
				{aq: modDef});
		});
	var emptyAst = {bj: $elm$core$Dict$empty, aq: $author$project$Stabel$Parser$ModuleDefinition$Undefined, a$: ref, I: $elm$core$Dict$empty};
	var checkIfEmpty = function (ast) {
		return ($elm$core$Dict$isEmpty(ast.I) && $elm$core$Dict$isEmpty(ast.bj)) ? $elm$parser$Parser$Advanced$problem($author$project$Stabel$Parser$Problem$ModuleIsEmpty) : $elm$parser$Parser$Advanced$succeed(ast);
	};
	return A2(
		$elm$parser$Parser$Advanced$andThen,
		checkIfEmpty,
		A2(
			$elm$parser$Parser$Advanced$keeper,
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$succeed($elm$core$Basics$identity),
				$author$project$Stabel$Parser$noiseParser),
			A2(
				$elm$parser$Parser$Advanced$ignorer,
				$elm$parser$Parser$Advanced$oneOf(
					_List_fromArray(
						[
							A2(
							$elm$parser$Parser$Advanced$keeper,
							A2(
								$elm$parser$Parser$Advanced$keeper,
								$elm$parser$Parser$Advanced$succeed(joinParseResults),
								A2($elm$parser$Parser$Advanced$ignorer, $author$project$Stabel$Parser$moduleDefinitionParser, $author$project$Stabel$Parser$noiseParser)),
							A2($elm$parser$Parser$Advanced$loop, emptyAst, $author$project$Stabel$Parser$definitionParser)),
							A2(
							$elm$parser$Parser$Advanced$keeper,
							$elm$parser$Parser$Advanced$succeed(
								joinParseResults($author$project$Stabel$Parser$ModuleDefinition$Undefined)),
							A2($elm$parser$Parser$Advanced$loop, emptyAst, $author$project$Stabel$Parser$definitionParser))
						])),
				$elm$parser$Parser$Advanced$end($author$project$Stabel$Parser$Problem$ExpectedEndOfFile))));
};
var $elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 0:
					return list;
				case 1:
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
		var parse = _v0;
		var _v1 = parse(
			{aD: 1, W: _List_Nil, e: 1, c: 0, S: 1, b: src});
		if (!_v1.$) {
			var value = _v1.b;
			return $elm$core$Result$Ok(value);
		} else {
			var bag = _v1.b;
			return $elm$core$Result$Err(
				A2($elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var $author$project$Stabel$Parser$run = F2(
	function (ref, sourceCode) {
		return A2(
			$elm$parser$Parser$Advanced$run,
			$author$project$Stabel$Parser$parser(ref),
			sourceCode);
	});
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
var $elm$core$Dict$singleton = F2(
	function (key, value) {
		return A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
	});
var $elm$core$Set$singleton = function (key) {
	return A2($elm$core$Dict$singleton, key, 0);
};
var $author$project$Stabel$Data$Type$referencedGenerics = function (t) {
	switch (t.$) {
		case 1:
			var val = t.a;
			return $elm$core$Set$singleton(val);
		case 3:
			var members = t.b;
			return A3(
				$elm$core$List$foldl,
				$elm$core$Set$union,
				$elm$core$Set$empty,
				A2($elm$core$List$map, $author$project$Stabel$Data$Type$referencedGenerics, members));
		case 4:
			var members = t.b;
			return A3(
				$elm$core$List$foldl,
				$elm$core$Set$union,
				$elm$core$Set$empty,
				A2($elm$core$List$map, $author$project$Stabel$Data$Type$referencedGenerics, members));
		default:
			return $elm$core$Set$empty;
	}
};
var $author$project$Stabel$TypeChecker$collectReferencedGenerics = function (memberTypes) {
	return $elm$core$Set$toList(
		A3(
			$elm$core$List$foldl,
			$elm$core$Set$union,
			$elm$core$Set$empty,
			A2($elm$core$List$map, $author$project$Stabel$Data$Type$referencedGenerics, memberTypes)));
};
var $author$project$Stabel$TypeChecker$Problem$UndeclaredGeneric = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
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
var $author$project$Stabel$TypeChecker$collectUndeclaredGenericProblems = F3(
	function (range, listedGenerics, memberTypes) {
		return A2(
			$elm$core$List$map,
			function (gen) {
				return A2($author$project$Stabel$TypeChecker$Problem$UndeclaredGeneric, range, gen);
			},
			A2(
				$elm$core$List$filter,
				function (gen) {
					return !A2($elm$core$Set$member, gen, listedGenerics);
				},
				memberTypes));
	});
var $author$project$Stabel$TypeChecker$verifyGenericVariableConsistency = function (t) {
	var _v0 = t.aQ;
	if (!_v0.$) {
		var members = _v0.a;
		var listedGenerics_ = $elm$core$Set$fromList(t._);
		return A3(
			$author$project$Stabel$TypeChecker$collectUndeclaredGenericProblems,
			t.U,
			listedGenerics_,
			$author$project$Stabel$TypeChecker$collectReferencedGenerics(
				A2($elm$core$List$map, $elm$core$Tuple$second, members)));
	} else {
		var mts = _v0.a;
		var listedGenerics_ = $elm$core$Set$fromList(t._);
		return A3(
			$author$project$Stabel$TypeChecker$collectUndeclaredGenericProblems,
			t.U,
			listedGenerics_,
			$author$project$Stabel$TypeChecker$collectReferencedGenerics(mts));
	}
};
var $author$project$Stabel$TypeChecker$initContext = function (ast) {
	return {
		z: $elm$core$Dict$empty,
		F: $elm$core$Dict$empty,
		l: A2(
			$elm$core$List$concatMap,
			$author$project$Stabel$TypeChecker$verifyGenericVariableConsistency,
			$elm$core$Dict$values(ast.I)),
		y: _List_Nil,
		E: $elm$core$Dict$empty,
		I: ast.I,
		a5: ast.bj
	};
};
var $author$project$Stabel$TypeChecker$Builtin = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $author$project$Stabel$TypeChecker$ConstructType = function (a) {
	return {$: 6, a: a};
};
var $author$project$Stabel$TypeChecker$Cycle = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $author$project$Stabel$TypeChecker$Function = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var $author$project$Stabel$TypeChecker$FunctionRef = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var $author$project$Stabel$TypeChecker$GetMember = F4(
	function (a, b, c, d) {
		return {$: 8, a: a, b: b, c: c, d: d};
	});
var $author$project$Stabel$TypeChecker$Problem$InconsistentWhens = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $author$project$Stabel$TypeChecker$IntLiteral = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $author$project$Stabel$TypeChecker$Problem$MissingTypeAnnotationInRecursiveCallStack = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $author$project$Stabel$TypeChecker$MultiImpl = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $author$project$Stabel$TypeChecker$Push = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$TypeChecker$Recurse = function (a) {
	return {$: 3, a: a};
};
var $author$project$Stabel$TypeChecker$SetMember = F4(
	function (a, b, c, d) {
		return {$: 7, a: a, b: b, c: c, d: d};
	});
var $author$project$Stabel$TypeChecker$SoloImpl = function (a) {
	return {$: 0, a: a};
};
var $elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			$elm$core$List$any,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, isOkay),
			list);
	});
var $author$project$Stabel$Data$Type$genericlyCompatible = F2(
	function (lhs, rhs) {
		var _v0 = _Utils_Tuple2(lhs, rhs);
		_v0$2:
		while (true) {
			_v0$5:
			while (true) {
				switch (_v0.a.$) {
					case 1:
						if (_v0.b.$ === 1) {
							return true;
						} else {
							return false;
						}
					case 3:
						switch (_v0.b.$) {
							case 1:
								break _v0$2;
							case 3:
								var _v1 = _v0.a;
								var lName = _v1.a;
								var _v2 = _v0.b;
								var rName = _v2.a;
								return _Utils_eq(lName, rName);
							default:
								break _v0$5;
						}
					case 4:
						switch (_v0.b.$) {
							case 1:
								break _v0$2;
							case 4:
								var _v3 = _v0.a;
								var lMems = _v3.b;
								var _v4 = _v0.b;
								var rMems = _v4.b;
								return _Utils_eq(lMems, rMems);
							default:
								break _v0$5;
						}
					default:
						if (_v0.b.$ === 1) {
							break _v0$2;
						} else {
							break _v0$5;
						}
				}
			}
			return _Utils_eq(lhs, rhs);
		}
		return true;
	});
var $author$project$Stabel$TypeChecker$compatibleTypeList = F2(
	function (aLs, bLs) {
		return A2(
			$elm$core$List$all,
			$elm$core$Basics$identity,
			A3($elm$core$List$map2, $author$project$Stabel$Data$Type$genericlyCompatible, aLs, bLs));
	});
var $author$project$Stabel$TypeChecker$areAllEqual = function (ls) {
	if (!ls.b) {
		return true;
	} else {
		var _v1 = ls.a;
		var inputTypes = _v1.a;
		var outputLength = _v1.b;
		var rest = ls.b;
		return A2(
			$elm$core$List$all,
			function (_v2) {
				var nextInputTypes = _v2.a;
				var nextOutputLength = _v2.b;
				return _Utils_eq(outputLength, nextOutputLength) && A2($author$project$Stabel$TypeChecker$compatibleTypeList, inputTypes, nextInputTypes);
			},
			rest);
	}
};
var $author$project$Stabel$TypeChecker$cleanContext = function (ctx) {
	return _Utils_update(
		ctx,
		{z: $elm$core$Dict$empty, F: $elm$core$Dict$empty, y: _List_Nil});
};
var $author$project$Stabel$TypeChecker$constrainGenericsHelper = F4(
	function (remappedGenerics, annotated, inferred, acc) {
		constrainGenericsHelper:
		while (true) {
			var _v0 = _Utils_Tuple2(annotated, inferred);
			_v0$6:
			while (true) {
				if (!_v0.a.b) {
					var rest = _v0.b;
					return _Utils_Tuple2(
						remappedGenerics,
						_Utils_ap(
							$elm$core$List$reverse(acc),
							rest));
				} else {
					if (!_v0.b.b) {
						return _Utils_Tuple2(
							remappedGenerics,
							$elm$core$List$reverse(acc));
					} else {
						switch (_v0.b.a.$) {
							case 1:
								if (_v0.a.a.$ === 1) {
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
										if (!_v3.$) {
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
							case 6:
								if (_v0.a.a.$ === 6) {
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
										if (!_v6.$) {
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
									if (!_v9.$) {
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
							case 5:
								if (_v0.a.a.$ === 5) {
									var _v10 = _v0.a;
									var annotatedFunction = _v10.a.a;
									var annotatedRest = _v10.b;
									var _v11 = _v0.b;
									var inferredFunction = _v11.a.a;
									var inferredRest = _v11.b;
									var _v12 = A4($author$project$Stabel$TypeChecker$constrainGenericsHelper, remappedGenerics, annotatedFunction.o, inferredFunction.o, _List_Nil);
									var functionRemappedGens = _v12.a;
									var constrainedInputs = _v12.b;
									var _v13 = A4($author$project$Stabel$TypeChecker$constrainGenericsHelper, functionRemappedGens, annotatedFunction.H, inferredFunction.H, _List_Nil);
									var functionRemappedGens2 = _v13.a;
									var constrainedOutputs = _v13.b;
									var constrainedFunction = $author$project$Stabel$Data$Type$FunctionSignature(
										{o: constrainedInputs, H: constrainedOutputs});
									var $temp$remappedGenerics = A2($elm$core$Dict$union, functionRemappedGens2, remappedGenerics),
										$temp$annotated = annotatedRest,
										$temp$inferred = inferredRest,
										$temp$acc = A2($elm$core$List$cons, constrainedFunction, acc);
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
var $author$project$Stabel$Data$TypeSignature$toMaybe = function (ts) {
	switch (ts.$) {
		case 0:
			return $elm$core$Maybe$Nothing;
		case 1:
			var wt = ts.a;
			return $elm$core$Maybe$Just(wt);
		default:
			var wt = ts.a;
			return $elm$core$Maybe$Just(wt);
	}
};
var $author$project$Stabel$TypeChecker$constrainGenerics = F2(
	function (typeSignature, inferredType) {
		var _v0 = $author$project$Stabel$Data$TypeSignature$toMaybe(typeSignature);
		if (_v0.$ === 1) {
			return inferredType;
		} else {
			var annotatedType = _v0.a;
			var _v1 = A4($author$project$Stabel$TypeChecker$constrainGenericsHelper, $elm$core$Dict$empty, annotatedType.o, inferredType.o, _List_Nil);
			var remappedGenerics = _v1.a;
			var constrainedInputs = _v1.b;
			var _v2 = A4($author$project$Stabel$TypeChecker$constrainGenericsHelper, remappedGenerics, annotatedType.H, inferredType.H, _List_Nil);
			var constrainedOutputs = _v2.b;
			return {o: constrainedInputs, H: constrainedOutputs};
		}
	});
var $author$project$Stabel$TypeChecker$countOutput = function (functionType) {
	return _Utils_Tuple2(
		functionType.o,
		$elm$core$List$length(functionType.H));
};
var $author$project$Stabel$TypeChecker$dropFirstInputType = function (inf) {
	return _Utils_update(
		inf,
		{
			o: A2($elm$core$List$drop, 1, inf.o)
		});
};
var $author$project$Stabel$Data$Type$emptyFunctionType = {o: _List_Nil, H: _List_Nil};
var $author$project$Stabel$TypeChecker$equalizeWhenTypesHelper = F3(
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
						function (_v4, _v5) {
							var left = _v4.a;
							var right = _v4.b;
							var leftAcc = _v5.a;
							var rightAcc = _v5.b;
							return _Utils_Tuple2(
								A2($elm$core$List$cons, left, leftAcc),
								A2($elm$core$List$cons, right, rightAcc));
						});
					var constrainAndZip = F2(
						function (lhs, rhs) {
							var _v3 = _Utils_Tuple2(lhs, rhs);
							if (_v3.a.$ === 1) {
								if (_v3.b.$ === 1) {
									return _Utils_Tuple2(lhs, rhs);
								} else {
									var other = _v3.b;
									return _Utils_Tuple2(other, other);
								}
							} else {
								if (_v3.b.$ === 1) {
									var other = _v3.a;
									return _Utils_Tuple2(other, other);
								} else {
									return _Utils_Tuple2(lhs, rhs);
								}
							}
						});
					var constrainedInputs = A3($elm$core$List$map2, constrainAndZip, firstType.o, secondType.o);
					var _v2 = A3(
						$elm$core$List$foldr,
						unzip,
						_Utils_Tuple2(_List_Nil, _List_Nil),
						constrainedInputs);
					var unzippedFirstInputs = _v2.a;
					var unzippedSecondInputs = _v2.b;
					var newFirstType = {o: unzippedFirstInputs, H: firstType.H};
					var newSecondType = {o: unzippedSecondInputs, H: secondType.H};
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
var $author$project$Stabel$TypeChecker$equalizeWhenTypes = function (functionTypes) {
	var splitFirstInputType = function (functionType) {
		var _v4 = functionType.o;
		if (_v4.b) {
			var first = _v4.a;
			var rest = _v4.b;
			return $elm$core$Maybe$Just(
				_Utils_Tuple2(
					first,
					_Utils_update(
						functionType,
						{o: rest})));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	};
	var joinSplitFunctionType = function (_v3) {
		var firstType = _v3.a;
		var functionType = _v3.b;
		return _Utils_update(
			functionType,
			{
				o: A2($elm$core$List$cons, firstType, functionType.o)
			});
	};
	return A2(
		$elm$core$List$map,
		joinSplitFunctionType,
		function (_v2) {
			var firstTypes = _v2.a;
			var equalizedWhenTypes = _v2.b;
			return A3($elm$core$List$map2, $elm$core$Tuple$pair, firstTypes, equalizedWhenTypes);
		}(
			A2(
				$elm$core$Tuple$mapSecond,
				function (lobotomizedFunctionTypes) {
					return A3($author$project$Stabel$TypeChecker$equalizeWhenTypesHelper, lobotomizedFunctionTypes, $elm$core$Dict$empty, _List_Nil);
				},
				A3(
					$elm$core$List$foldr,
					F2(
						function (_v0, _v1) {
							var firstType = _v0.a;
							var functionType = _v0.b;
							var typeAcc = _v1.a;
							var functionTypeAcc = _v1.b;
							return _Utils_Tuple2(
								A2($elm$core$List$cons, firstType, typeAcc),
								A2($elm$core$List$cons, functionType, functionTypeAcc));
						}),
					_Utils_Tuple2(_List_Nil, _List_Nil),
					A2($elm$core$List$filterMap, splitFirstInputType, functionTypes)))));
};
var $author$project$Stabel$TypeChecker$Pop = function (a) {
	return {$: 1, a: a};
};
var $author$project$Stabel$TypeChecker$Problem$UnexpectedType = F4(
	function (a, b, c, d) {
		return {$: 2, a: a, b: b, c: c, d: d};
	});
var $author$project$Stabel$TypeChecker$bindGeneric = F3(
	function (toBind, target, context) {
		if (toBind.$ === 1) {
			var name = toBind.a;
			return _Utils_update(
				context,
				{
					z: A3($elm$core$Dict$insert, name, target, context.z)
				});
		} else {
			return context;
		}
	});
var $author$project$Stabel$TypeChecker$getGenericBinding = F2(
	function (context, type_) {
		getGenericBinding:
		while (true) {
			switch (type_.$) {
				case 1:
					var genericId = type_.a;
					var _v1 = A2($elm$core$Dict$get, genericId, context.z);
					if ((!_v1.$) && (_v1.a.$ === 1)) {
						var nextGenericId = _v1.a.a;
						var _v2 = A2($elm$core$Dict$get, nextGenericId, context.z);
						if ((!_v2.$) && (_v2.a.$ === 1)) {
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
				case 4:
					var name = type_.a;
					var members = type_.b;
					return $elm$core$Maybe$Just(
						A2(
							$author$project$Stabel$Data$Type$Union,
							name,
							A2(
								$elm$core$List$map,
								$author$project$Stabel$TypeChecker$resolveType(context),
								members)));
				case 3:
					var name = type_.a;
					var members = type_.b;
					return $elm$core$Maybe$Just(
						A2(
							$author$project$Stabel$Data$Type$CustomGeneric,
							name,
							A2(
								$elm$core$List$map,
								$author$project$Stabel$TypeChecker$resolveType(context),
								members)));
				default:
					return $elm$core$Maybe$Just(type_);
			}
		}
	});
var $author$project$Stabel$TypeChecker$resolveType = F2(
	function (context, t) {
		return A2(
			$elm$core$Maybe$withDefault,
			t,
			A2($author$project$Stabel$TypeChecker$getGenericBinding, context, t));
	});
var $author$project$Stabel$Data$Type$isGeneric = function (t) {
	if (t.$ === 1) {
		return true;
	} else {
		return false;
	}
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
var $author$project$Stabel$TypeChecker$replaceStackRange = F2(
	function (boundRanges, types) {
		return A2(
			$elm$core$List$concatMap,
			function (t) {
				if (t.$ === 6) {
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
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $author$project$Stabel$TypeChecker$bindStackRange = F4(
	function (context, actual, expected, bound) {
		bindStackRange:
		while (true) {
			var rangeUpdater = F2(
				function (existing, newType) {
					if (!existing.$) {
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
			var _v26 = _Utils_Tuple2(actual, expected);
			if (!_v26.a.b) {
				return bound;
			} else {
				if (!_v26.b.b) {
					return bound;
				} else {
					if ((_v26.b.a.$ === 6) && (!_v26.b.b.b)) {
						var _v27 = _v26.a;
						var afirst = _v27.a;
						var arest = _v27.b;
						var _v28 = _v26.b;
						var rangeName = _v28.a.a;
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
						var _v29 = _v26.a;
						var afirst = _v29.a;
						var arest = _v29.b;
						var _v30 = _v26.b;
						var bfirst = _v30.a;
						var brest = _v30.b;
						var _v31 = A3($author$project$Stabel$TypeChecker$compatibleTypes, context, afirst, bfirst);
						var newContext = _v31.a;
						var compatible = _v31.b;
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
var $author$project$Stabel$TypeChecker$compatibleTypes = F3(
	function (context, typeA, typeB) {
		compatibleTypes:
		while (true) {
			var _v0 = _Utils_Tuple2(
				A2($author$project$Stabel$TypeChecker$getGenericBinding, context, typeA),
				A2($author$project$Stabel$TypeChecker$getGenericBinding, context, typeB));
			if (_v0.a.$ === 1) {
				if (!_v0.b.$) {
					var _v1 = _v0.a;
					var boundB = _v0.b.a;
					return _Utils_Tuple2(
						A3($author$project$Stabel$TypeChecker$bindGeneric, typeA, boundB, context),
						true);
				} else {
					var _v3 = _v0.a;
					var _v4 = _v0.b;
					return _Utils_Tuple2(
						A3(
							$author$project$Stabel$TypeChecker$bindGeneric,
							typeB,
							typeA,
							A3($author$project$Stabel$TypeChecker$bindGeneric, typeA, typeB, context)),
						true);
				}
			} else {
				if (_v0.b.$ === 1) {
					var boundA = _v0.a.a;
					var _v2 = _v0.b;
					return _Utils_Tuple2(
						A3($author$project$Stabel$TypeChecker$bindGeneric, typeB, boundA, context),
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
									case 4:
										if (_v5.b.$ === 4) {
											var _v6 = _v5.a;
											var leftUnion = _v6.b;
											var _v7 = _v5.b;
											var rightUnion = _v7.b;
											var lengthTest = _Utils_eq(
												$elm$core$List$length(leftUnion),
												$elm$core$List$length(rightUnion));
											var foldHelper = F2(
												function (_v9, _v10) {
													var lType = _v9.a;
													var rType = _v9.b;
													var ctx = _v10.a;
													var currValue = _v10.b;
													return (!currValue) ? _Utils_Tuple2(ctx, currValue) : A3($author$project$Stabel$TypeChecker$compatibleTypes, ctx, lType, rType);
												});
											var _v8 = A3(
												$elm$core$List$foldl,
												foldHelper,
												_Utils_Tuple2(context, true),
												A3($elm$core$List$map2, $elm$core$Tuple$pair, leftUnion, rightUnion));
											var newContext = _v8.a;
											var allMembersTest = _v8.b;
											return _Utils_Tuple2(newContext, lengthTest && allMembersTest);
										} else {
											var _v11 = _v5.a;
											var unionTypes = _v11.b;
											var rhs = _v5.b;
											if (!unionTypes.b) {
												return _Utils_Tuple2(context, false);
											} else {
												var firstType = unionTypes.a;
												var rest = unionTypes.b;
												var helper = F2(
													function (t, _v15) {
														var ctx = _v15.a;
														var oldTruth = _v15.b;
														var _v14 = A3($author$project$Stabel$TypeChecker$compatibleTypes, ctx, firstType, t);
														var newCtx = _v14.a;
														var thisTruth = _v14.b;
														return _Utils_Tuple2(newCtx, oldTruth && thisTruth);
													});
												var _v13 = A3(
													$elm$core$List$foldl,
													helper,
													_Utils_Tuple2(context, true),
													rest);
												var finalCtx = _v13.a;
												var allBoundToSame = _v13.b;
												if (allBoundToSame) {
													var $temp$context = finalCtx,
														$temp$typeA = firstType,
														$temp$typeB = rhs;
													context = $temp$context;
													typeA = $temp$typeA;
													typeB = $temp$typeB;
													continue compatibleTypes;
												} else {
													return _Utils_Tuple2(context, false);
												}
											}
										}
									case 3:
										switch (_v5.b.$) {
											case 4:
												break _v5$2;
											case 3:
												var _v19 = _v5.a;
												var lName = _v19.a;
												var lMembers = _v19.b;
												var _v20 = _v5.b;
												var rName = _v20.a;
												var rMembers = _v20.b;
												var members = A3($elm$core$List$map2, $elm$core$Tuple$pair, lMembers, rMembers);
												var foldHelper = F2(
													function (_v22, acc) {
														var lType = _v22.a;
														var rType = _v22.b;
														var currCtx = acc.a;
														var isCompatible = acc.b;
														return (!isCompatible) ? acc : A3($author$project$Stabel$TypeChecker$compatibleTypes, currCtx, lType, rType);
													});
												var _v21 = A3(
													$elm$core$List$foldl,
													foldHelper,
													_Utils_Tuple2(context, true),
													members);
												var updatedContext = _v21.a;
												var compatible = _v21.b;
												return (_Utils_eq(lName, rName) && compatible) ? _Utils_Tuple2(updatedContext, true) : _Utils_Tuple2(context, false);
											default:
												break _v5$5;
										}
									case 5:
										switch (_v5.b.$) {
											case 4:
												break _v5$2;
											case 5:
												var lhs = _v5.a.a;
												var rhs = _v5.b.a;
												var foldHelper = F2(
													function (_v25, acc) {
														var lType = _v25.a;
														var rType = _v25.b;
														var currCtx = acc.a;
														var isCompatible = acc.b;
														return (!isCompatible) ? acc : A3($author$project$Stabel$TypeChecker$compatibleTypes, currCtx, lType, rType);
													});
												var boundRanges = A4(
													$author$project$Stabel$TypeChecker$bindStackRange,
													context,
													lhs.H,
													rhs.H,
													A4($author$project$Stabel$TypeChecker$bindStackRange, context, lhs.o, rhs.o, $elm$core$Dict$empty));
												var contextWithBoundRanges = _Utils_update(
													context,
													{
														F: A2($elm$core$Dict$union, context.F, boundRanges)
													});
												var actualOutputRequirement = A2($author$project$Stabel$TypeChecker$replaceStackRange, boundRanges, rhs.H);
												var actualInputRequirement = A2($author$project$Stabel$TypeChecker$replaceStackRange, boundRanges, rhs.o);
												var _v23 = A3(
													$elm$core$List$foldl,
													foldHelper,
													_Utils_Tuple2(contextWithBoundRanges, true),
													A3($elm$core$List$map2, $elm$core$Tuple$pair, lhs.o, actualInputRequirement));
												var contextAfterInputCheck = _v23.a;
												var inputsCompatible = _v23.b;
												var _v24 = A3(
													$elm$core$List$foldl,
													foldHelper,
													_Utils_Tuple2(contextAfterInputCheck, true),
													A3($elm$core$List$map2, $elm$core$Tuple$pair, lhs.H, actualOutputRequirement));
												var contextAfterOutputCheck = _v24.a;
												var outputsCompatible = _v24.b;
												return _Utils_Tuple2(contextAfterOutputCheck, inputsCompatible && outputsCompatible);
											default:
												break _v5$5;
										}
									default:
										if (_v5.b.$ === 4) {
											break _v5$2;
										} else {
											break _v5$5;
										}
								}
							}
							return _Utils_Tuple2(context, false);
						}
						var lhsType = _v5.a;
						var _v16 = _v5.b;
						var unionTypes = _v16.b;
						var findCompatibleMember = function (members) {
							return A2(
								$elm$core$Maybe$withDefault,
								_Utils_Tuple2(context, false),
								A2(
									$elm_community$list_extra$List$Extra$find,
									$elm$core$Tuple$second,
									A2(
										$elm$core$List$map,
										A2($author$project$Stabel$TypeChecker$compatibleTypes, context, lhsType),
										members)));
						};
						var _v17 = A2($elm$core$List$partition, $author$project$Stabel$Data$Type$isGeneric, unionTypes);
						var generics = _v17.a;
						var nonGenerics = _v17.b;
						var _v18 = findCompatibleMember(nonGenerics);
						var nonGenericContext = _v18.a;
						var compatibleNonGenericMember = _v18.b;
						return compatibleNonGenericMember ? _Utils_Tuple2(nonGenericContext, true) : findCompatibleMember(generics);
					}
				}
			}
		}
	});
var $author$project$Stabel$TypeChecker$functionTypeFromStackEffectsHelper = F3(
	function (untypedDef, effects, _v0) {
		functionTypeFromStackEffectsHelper:
		while (true) {
			var context = _v0.a;
			var functionType = _v0.b;
			var problem = F2(
				function (expected, actual) {
					return A4(
						$author$project$Stabel$TypeChecker$Problem$UnexpectedType,
						A2($elm$core$Maybe$withDefault, $author$project$Stabel$Data$SourceLocation$emptyRange, untypedDef.U),
						untypedDef.m,
						A2($author$project$Stabel$TypeChecker$resolveType, context, expected),
						A2($author$project$Stabel$TypeChecker$resolveType, context, actual));
				});
			if (!effects.b) {
				return _Utils_Tuple2(
					context,
					_Utils_update(
						functionType,
						{
							H: $elm$core$List$reverse(functionType.H)
						}));
			} else {
				if (effects.a.$ === 1) {
					if (effects.a.a.$ === 6) {
						var type_ = effects.a.a;
						var rangeName = type_.a;
						var remainingEffects = effects.b;
						var _v2 = A2($elm$core$Dict$get, rangeName, context.F);
						if (!_v2.$) {
							var needToPop = _v2.a;
							var $temp$untypedDef = untypedDef,
								$temp$effects = _Utils_ap(
								A2($elm$core$List$map, $author$project$Stabel$TypeChecker$Pop, needToPop),
								remainingEffects),
								$temp$_v0 = _Utils_Tuple2(context, functionType);
							untypedDef = $temp$untypedDef;
							effects = $temp$effects;
							_v0 = $temp$_v0;
							continue functionTypeFromStackEffectsHelper;
						} else {
							var _v3 = functionType.H;
							if (!_v3.b) {
								return A3(
									$author$project$Stabel$TypeChecker$functionTypeFromStackEffectsHelper,
									untypedDef,
									remainingEffects,
									_Utils_Tuple2(
										context,
										_Utils_update(
											functionType,
											{
												o: A2($elm$core$List$cons, type_, functionType.o)
											})));
							} else {
								var availableType = _v3.a;
								var remainingOutput = _v3.b;
								return (!_Utils_eq(availableType, type_)) ? _Utils_Tuple2(
									_Utils_update(
										context,
										{
											l: A2(
												$elm$core$List$cons,
												A2(problem, type_, availableType),
												context.l)
										}),
									functionType) : _Utils_Tuple2(
									context,
									_Utils_update(
										functionType,
										{H: remainingOutput}));
							}
						}
					} else {
						var type_ = effects.a.a;
						var remainingEffects = effects.b;
						var _v4 = functionType.H;
						if (!_v4.b) {
							return A3(
								$author$project$Stabel$TypeChecker$functionTypeFromStackEffectsHelper,
								untypedDef,
								remainingEffects,
								_Utils_Tuple2(
									context,
									_Utils_update(
										functionType,
										{
											o: A2($elm$core$List$cons, type_, functionType.o)
										})));
						} else {
							var availableType = _v4.a;
							var remainingOutput = _v4.b;
							var _v5 = A3($author$project$Stabel$TypeChecker$compatibleTypes, context, availableType, type_);
							var newContext = _v5.a;
							var compatible = _v5.b;
							return (!compatible) ? _Utils_Tuple2(
								_Utils_update(
									newContext,
									{
										l: A2(
											$elm$core$List$cons,
											A2(problem, type_, availableType),
											context.l)
									}),
								functionType) : A3(
								$author$project$Stabel$TypeChecker$functionTypeFromStackEffectsHelper,
								untypedDef,
								remainingEffects,
								_Utils_Tuple2(
									newContext,
									_Utils_update(
										functionType,
										{H: remainingOutput})));
						}
					}
				} else {
					if (effects.a.a.$ === 6) {
						var type_ = effects.a.a;
						var rangeName = type_.a;
						var remainingEffects = effects.b;
						var _v6 = A2($elm$core$Dict$get, rangeName, context.F);
						if (!_v6.$) {
							var range = _v6.a;
							var $temp$untypedDef = untypedDef,
								$temp$effects = _Utils_ap(
								A2($elm$core$List$map, $author$project$Stabel$TypeChecker$Push, range),
								remainingEffects),
								$temp$_v0 = _Utils_Tuple2(context, functionType);
							untypedDef = $temp$untypedDef;
							effects = $temp$effects;
							_v0 = $temp$_v0;
							continue functionTypeFromStackEffectsHelper;
						} else {
							return A3(
								$author$project$Stabel$TypeChecker$functionTypeFromStackEffectsHelper,
								untypedDef,
								remainingEffects,
								_Utils_Tuple2(
									context,
									_Utils_update(
										functionType,
										{
											H: A2($elm$core$List$cons, type_, functionType.H)
										})));
						}
					} else {
						var type_ = effects.a.a;
						var remainingEffects = effects.b;
						return A3(
							$author$project$Stabel$TypeChecker$functionTypeFromStackEffectsHelper,
							untypedDef,
							remainingEffects,
							_Utils_Tuple2(
								context,
								_Utils_update(
									functionType,
									{
										H: A2($elm$core$List$cons, type_, functionType.H)
									})));
					}
				}
			}
		}
	});
var $author$project$Stabel$TypeChecker$functionTypeFromStackEffects = F2(
	function (untypedDef, context) {
		return A3(
			$author$project$Stabel$TypeChecker$functionTypeFromStackEffectsHelper,
			untypedDef,
			context.y,
			_Utils_Tuple2(
				context,
				{o: _List_Nil, H: _List_Nil}));
	});
var $author$project$Stabel$TypeChecker$functionTypeToStackEffects = function (functionType) {
	return _Utils_ap(
		A2(
			$elm$core$List$map,
			$author$project$Stabel$TypeChecker$Pop,
			$elm$core$List$reverse(functionType.o)),
		A2($elm$core$List$map, $author$project$Stabel$TypeChecker$Push, functionType.H));
};
var $author$project$Stabel$TypeChecker$getStructMembers = function (typeDef) {
	var _v0 = typeDef.aQ;
	if (!_v0.$) {
		var members = _v0.a;
		return members;
	} else {
		return _List_Nil;
	}
};
var $author$project$Stabel$TypeChecker$getStructType = function (typeDef) {
	var _v0 = typeDef._;
	if (!_v0.b) {
		return $author$project$Stabel$Data$Type$Custom(typeDef.m);
	} else {
		var gens = _v0;
		return A2(
			$author$project$Stabel$Data$Type$CustomGeneric,
			typeDef.m,
			A2($elm$core$List$map, $author$project$Stabel$Data$Type$Generic, gens));
	}
};
var $author$project$Stabel$TypeChecker$Problem$InexhaustiveMultiFunction = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var $author$project$Stabel$TypeChecker$Total = 0;
var $author$project$Stabel$TypeChecker$SeenInt = 1;
var $author$project$Stabel$TypeChecker$inexhaustivenessCheckHelper = F3(
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
				return _Utils_eq(typeList, toMatch) && (!state);
			},
			acc)) {
			return acc;
		} else {
			var isRecursiveMatch = function (cond) {
				if (cond.c.$ === 2) {
					var val = cond.c.a;
					return $elm$core$Maybe$Just(val);
				} else {
					return $elm$core$Maybe$Nothing;
				}
			};
			var subcases = A3(
				$elm$core$List$foldl,
				$author$project$Stabel$TypeChecker$inexhaustivenessCheckHelper(typeList),
				acc,
				A2($elm$core$List$filterMap, isRecursiveMatch, conds));
			var toAdd = function () {
				var _v5 = _Utils_Tuple3(t, conds, subcases);
				if (!_v5.b.b) {
					return _List_fromArray(
						[
							_Utils_Tuple2(typeList, 0)
						]);
				} else {
					if (!_v5.a.$) {
						var _v6 = _v5.a;
						return _List_fromArray(
							[
								_Utils_Tuple2(typeList, 1)
							]);
					} else {
						return A2(
							$elm$core$List$all,
							A2(
								$elm$core$Basics$composeR,
								$elm$core$Tuple$second,
								$elm$core$Basics$eq(0)),
							subcases) ? _List_fromArray(
							[
								_Utils_Tuple2(typeList, 0)
							]) : subcases;
					}
				}
			}();
			var modifiedAcc = (!_Utils_eq(
				toAdd,
				_List_fromArray(
					[
						_Utils_Tuple2(typeList, 0)
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
			if (A2(
				$elm$core$List$any,
				function (_v2) {
					var toMatch = _v2.a;
					return _Utils_eq(toMatch, typeList);
				},
				modifiedAcc)) {
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
var $author$project$Stabel$TypeChecker$inexhaustivenessCheck = F2(
	function (range, patterns) {
		var inexhaustiveStates = A2(
			$elm$core$List$map,
			$elm$core$Tuple$first,
			A2(
				$elm$core$List$filter,
				function (_v1) {
					var state = _v1.b;
					return !(!state);
				},
				A3(
					$elm$core$List$foldl,
					$author$project$Stabel$TypeChecker$inexhaustivenessCheckHelper(_List_Nil),
					_List_Nil,
					patterns)));
		if (!inexhaustiveStates.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			return $elm$core$Maybe$Just(
				A2($author$project$Stabel$TypeChecker$Problem$InexhaustiveMultiFunction, range, inexhaustiveStates));
		}
	});
var $author$project$Stabel$TypeChecker$joinOutputs = F2(
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
							if (_v2.a.$ === 4) {
								if (_v2.b.$ === 4) {
									var _v3 = _v2.a;
									var lhsMems = _v3.b;
									var _v4 = _v2.b;
									var rhsMems = _v4.b;
									return _Utils_eq(lhsMems, rhsMems) ? lhs : A2(
										$author$project$Stabel$Data$Type$Union,
										$elm$core$Maybe$Nothing,
										_Utils_ap(lhsMems, rhsMems));
								} else {
									var _v5 = _v2.a;
									var lhsMems = _v5.b;
									return A2($elm$core$List$member, rhs, lhsMems) ? lhs : A2(
										$author$project$Stabel$Data$Type$Union,
										$elm$core$Maybe$Nothing,
										A2($elm$core$List$cons, rhs, lhsMems));
								}
							} else {
								if (_v2.b.$ === 4) {
									var _v6 = _v2.b;
									var rhsMems = _v6.b;
									return A2($elm$core$List$member, lhs, rhsMems) ? rhs : A2(
										$author$project$Stabel$Data$Type$Union,
										$elm$core$Maybe$Nothing,
										A2($elm$core$List$cons, lhs, rhsMems));
								} else {
									return _Utils_eq(lhs, rhs) ? lhs : A2(
										$author$project$Stabel$Data$Type$Union,
										$elm$core$Maybe$Nothing,
										_List_fromArray(
											[lhs, rhs]));
								}
							}
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
						{H: joined});
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
var $author$project$Stabel$TypeChecker$LiteralInt = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$TypeChecker$LiteralType = function (a) {
	return {$: 1, a: a};
};
var $author$project$Stabel$TypeChecker$RecursiveMatch = function (a) {
	return {$: 2, a: a};
};
var $author$project$Stabel$TypeChecker$TypeMatch = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var $author$project$Stabel$TypeChecker$mapTypeMatch = function (_v2) {
	var range = _v2.a;
	var type_ = _v2.b;
	var cond = _v2.c;
	return A3(
		$author$project$Stabel$TypeChecker$TypeMatch,
		range,
		type_,
		A2($elm$core$List$map, $author$project$Stabel$TypeChecker$mapTypeMatchCond, cond));
};
var $author$project$Stabel$TypeChecker$mapTypeMatchCond = function (_v0) {
	var fieldName = _v0.a;
	var value = _v0.c;
	switch (value.$) {
		case 0:
			var val = value.a;
			return _Utils_Tuple2(
				fieldName,
				$author$project$Stabel$TypeChecker$LiteralInt(val));
		case 1:
			var val = value.a;
			return _Utils_Tuple2(
				fieldName,
				$author$project$Stabel$TypeChecker$LiteralType(val));
		default:
			var val = value.a;
			return _Utils_Tuple2(
				fieldName,
				$author$project$Stabel$TypeChecker$RecursiveMatch(
					$author$project$Stabel$TypeChecker$mapTypeMatch(val)));
	}
};
var $elm$core$List$sortBy = _List_sortBy;
var $author$project$Stabel$TypeChecker$normalizeWhenTypes = function (whenTypes) {
	var padGeneric = function (t) {
		if (t.$ === 1) {
			var val = t.a;
			return $author$project$Stabel$Data$Type$Generic('*' + val);
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
						return $.o;
					},
					$elm$core$List$length),
				whenTypes)));
	var matchInputLength = F2(
		function (toMatch, functionType) {
			var diff = $elm$core$List$length(toMatch.o) - $elm$core$List$length(functionType.o);
			var padding = A2(
				$elm$core$List$map,
				padGeneric,
				A2($elm$core$List$take, diff, toMatch.o));
			if (!padding.b) {
				return functionType;
			} else {
				var elements = padding;
				return {
					o: _Utils_ap(elements, functionType.o),
					H: _Utils_ap(elements, functionType.H)
				};
			}
		});
	if (!maybeLongestInputWhenType.$) {
		var longestInputWT = maybeLongestInputWhenType.a;
		return A2(
			$elm$core$List$map,
			matchInputLength(longestInputWT),
			whenTypes);
	} else {
		return whenTypes;
	}
};
var $author$project$Stabel$TypeChecker$patternMatchIsCompatibleWithInferredType = function (_v0) {
	var _v1 = _v0.a;
	var typeMatchType = _v1.b;
	var inf = _v0.b;
	var _v2 = inf.o;
	if (_v2.b) {
		var inferredType = _v2.a;
		return A2($author$project$Stabel$Data$Type$genericlyCompatible, typeMatchType, inferredType);
	} else {
		return false;
	}
};
var $author$project$Stabel$TypeChecker$replaceFirstInputType = F2(
	function (_with, inf) {
		var _v0 = inf.o;
		if (_v0.b) {
			var rem = _v0.b;
			return _Utils_update(
				inf,
				{
					o: A2($elm$core$List$cons, _with, rem)
				});
		} else {
			return inf;
		}
	});
var $author$project$Stabel$TypeChecker$replaceType = F3(
	function (type_, _with, el) {
		switch (el.$) {
			case 3:
				var name = el.a;
				var members = el.b;
				return A2(
					$author$project$Stabel$Data$Type$CustomGeneric,
					name,
					A2(
						$elm$core$List$map,
						A2($author$project$Stabel$TypeChecker$replaceType, type_, _with),
						members));
			case 4:
				var name = el.a;
				var members = el.b;
				return A2(
					$author$project$Stabel$Data$Type$Union,
					name,
					A2(
						$elm$core$List$map,
						A2($author$project$Stabel$TypeChecker$replaceType, type_, _with),
						members));
			case 5:
				var functionType = el.a;
				return $author$project$Stabel$Data$Type$FunctionSignature(
					{
						o: A2(
							$elm$core$List$map,
							A2($author$project$Stabel$TypeChecker$replaceType, type_, _with),
							functionType.o),
						H: A2(
							$elm$core$List$map,
							A2($author$project$Stabel$TypeChecker$replaceType, type_, _with),
							functionType.H)
					});
			default:
				return _Utils_eq(type_, el) ? _with : el;
		}
	});
var $author$project$Stabel$TypeChecker$replaceFirstTypeWithPatternMatch = function (_v0) {
	var _v1 = _v0.a;
	var matchType = _v1.b;
	var typeSignature = _v0.b;
	var _v2 = typeSignature.o;
	_v2$2:
	while (true) {
		if (_v2.b) {
			switch (_v2.a.$) {
				case 1:
					var toReplace = _v2.a;
					return {
						o: A2(
							$elm$core$List$map,
							A2($author$project$Stabel$TypeChecker$replaceType, toReplace, matchType),
							typeSignature.o),
						H: A2(
							$elm$core$List$map,
							A2($author$project$Stabel$TypeChecker$replaceType, toReplace, matchType),
							typeSignature.H)
					};
				case 6:
					var toReplace = _v2.a;
					return {
						o: A2(
							$elm$core$List$map,
							A2($author$project$Stabel$TypeChecker$replaceType, toReplace, matchType),
							typeSignature.o),
						H: A2(
							$elm$core$List$map,
							A2($author$project$Stabel$TypeChecker$replaceType, toReplace, matchType),
							typeSignature.H)
					};
				default:
					break _v2$2;
			}
		} else {
			break _v2$2;
		}
	}
	return typeSignature;
};
var $author$project$Stabel$TypeChecker$tagGeneric = F2(
	function (idx, type_) {
		switch (type_.$) {
			case 1:
				var genName = type_.a;
				return $author$project$Stabel$Data$Type$Generic(
					_Utils_ap(
						genName,
						$elm$core$String$fromInt(idx)));
			case 3:
				var name = type_.a;
				var generics = type_.b;
				return A2(
					$author$project$Stabel$Data$Type$CustomGeneric,
					name,
					A2(
						$elm$core$List$map,
						$author$project$Stabel$TypeChecker$tagGeneric(idx),
						generics));
			case 4:
				var name = type_.a;
				var members = type_.b;
				return A2(
					$author$project$Stabel$Data$Type$Union,
					name,
					A2(
						$elm$core$List$map,
						$author$project$Stabel$TypeChecker$tagGeneric(idx),
						members));
			case 5:
				var wt = type_.a;
				return $author$project$Stabel$Data$Type$FunctionSignature(
					{
						o: A2(
							$elm$core$List$map,
							$author$project$Stabel$TypeChecker$tagGeneric(idx),
							wt.o),
						H: A2(
							$elm$core$List$map,
							$author$project$Stabel$TypeChecker$tagGeneric(idx),
							wt.H)
					});
			default:
				return type_;
		}
	});
var $author$project$Stabel$TypeChecker$resolveGenericsInFunctionType = F3(
	function (idx, context, wt) {
		var replaceGenericWithBoundValue = function (t) {
			var boundType = function () {
				var _v1 = A2($author$project$Stabel$TypeChecker$getGenericBinding, context, t);
				if (!_v1.$) {
					var boundValue = _v1.a;
					return boundValue;
				} else {
					return t;
				}
			}();
			switch (boundType.$) {
				case 4:
					var unionName = boundType.a;
					var members = boundType.b;
					return A2(
						$author$project$Stabel$Data$Type$Union,
						unionName,
						A2($elm$core$List$map, replaceGenericWithBoundValue, members));
				case 3:
					var name = boundType.a;
					var members = boundType.b;
					return A2(
						$author$project$Stabel$Data$Type$CustomGeneric,
						name,
						A2($elm$core$List$map, replaceGenericWithBoundValue, members));
				default:
					return boundType;
			}
		};
		return {
			o: A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$author$project$Stabel$TypeChecker$tagGeneric(idx),
					replaceGenericWithBoundValue),
				wt.o),
			H: A2(
				$elm$core$List$map,
				A2(
					$elm$core$Basics$composeR,
					$author$project$Stabel$TypeChecker$tagGeneric(idx),
					replaceGenericWithBoundValue),
				wt.H)
		};
	});
var $author$project$Stabel$TypeChecker$bindGenericsInType = F2(
	function (bindings, t) {
		switch (t.$) {
			case 1:
				var genericName = t.a;
				return A2(
					$elm$core$Maybe$withDefault,
					t,
					A2($elm$core$Dict$get, genericName, bindings));
			case 3:
				var name = t.a;
				var gens = t.b;
				return A2(
					$author$project$Stabel$Data$Type$CustomGeneric,
					name,
					A2(
						$elm$core$List$map,
						$author$project$Stabel$TypeChecker$bindGenericsInType(bindings),
						gens));
			case 4:
				var name = t.a;
				var members = t.b;
				return A2(
					$author$project$Stabel$Data$Type$Union,
					name,
					A2(
						$elm$core$List$map,
						$author$project$Stabel$TypeChecker$bindGenericsInType(bindings),
						members));
			default:
				return t;
		}
	});
var $author$project$Stabel$Data$Type$genericName = function (type_) {
	if (type_.$ === 1) {
		var name = type_.a;
		return $elm$core$Maybe$Just(name);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $author$project$Stabel$TypeChecker$initialBindingsFromFunctionDef = F2(
	function (def, structGenerics) {
		var _v0 = $author$project$Stabel$Data$TypeSignature$toMaybe(def.bO);
		if (!_v0.$) {
			var wt = _v0.a;
			var _v1 = wt.o;
			if (_v1.b && (_v1.a.$ === 3)) {
				var _v2 = _v1.a;
				var possiblyBoundGenerics = _v2.b;
				var liftTupleMaybe = function (_v3) {
					var first = _v3.a;
					var second = _v3.b;
					return A2(
						$elm$core$Maybe$map,
						function (x) {
							return _Utils_Tuple2(x, second);
						},
						first);
				};
				return $elm$core$Dict$fromList(
					A2(
						$elm$core$List$filterMap,
						liftTupleMaybe,
						A2(
							$elm$core$List$map,
							$elm$core$Tuple$mapFirst($author$project$Stabel$Data$Type$genericName),
							A3($elm$core$List$map2, $elm$core$Tuple$pair, structGenerics, possiblyBoundGenerics))));
			} else {
				return $elm$core$Dict$empty;
			}
		} else {
			return $elm$core$Dict$empty;
		}
	});
var $author$project$Stabel$TypeChecker$whenConditionsBindGenerics = F2(
	function (bindings, _v0) {
		var fieldName = _v0.a;
		var fieldType = _v0.b;
		var value = _v0.c;
		var boundValue = function () {
			switch (value.$) {
				case 1:
					var t = value.a;
					return $author$project$Stabel$Qualifier$LiteralType(
						A2($author$project$Stabel$TypeChecker$bindGenericsInType, bindings, t));
				case 2:
					var _v2 = value.a;
					var subLoc = _v2.a;
					var subType = _v2.b;
					var subConds = _v2.c;
					return $author$project$Stabel$Qualifier$RecursiveMatch(
						A3(
							$author$project$Stabel$Qualifier$TypeMatch,
							subLoc,
							A2($author$project$Stabel$TypeChecker$bindGenericsInType, bindings, subType),
							A2(
								$elm$core$List$map,
								$author$project$Stabel$TypeChecker$whenConditionsBindGenerics(bindings),
								subConds)));
				default:
					return value;
			}
		}();
		return A3(
			$author$project$Stabel$Qualifier$TypeMatchCond,
			fieldName,
			A2($author$project$Stabel$TypeChecker$bindGenericsInType, bindings, fieldType),
			boundValue);
	});
var $author$project$Stabel$TypeChecker$whenConditionsGenericBindings = F2(
	function (_v0, bindings) {
		var fieldType = _v0.b;
		var value = _v0.c;
		var _v1 = _Utils_Tuple2(fieldType, value);
		_v1$3:
		while (true) {
			switch (_v1.b.$) {
				case 0:
					if (_v1.a.$ === 1) {
						var genericName = _v1.a.a;
						return A3($elm$core$Dict$insert, genericName, $author$project$Stabel$Data$Type$Int, bindings);
					} else {
						break _v1$3;
					}
				case 1:
					if (_v1.a.$ === 1) {
						var genericName = _v1.a.a;
						var t = _v1.b.a;
						return A3($elm$core$Dict$insert, genericName, t, bindings);
					} else {
						break _v1$3;
					}
				default:
					var _v2 = _v1.b.a;
					var subConds = _v2.c;
					return A3($elm$core$List$foldl, $author$project$Stabel$TypeChecker$whenConditionsGenericBindings, bindings, subConds);
			}
		}
		return bindings;
	});
var $author$project$Stabel$TypeChecker$resolveWhenConditions = F2(
	function (untypedDef, match) {
		var loc = match.a;
		var typeMatch = match.b;
		var conds = match.c;
		if (typeMatch.$ === 3) {
			var structGenerics = typeMatch.b;
			var bindings = A3(
				$elm$core$List$foldl,
				$author$project$Stabel$TypeChecker$whenConditionsGenericBindings,
				A2($author$project$Stabel$TypeChecker$initialBindingsFromFunctionDef, untypedDef, structGenerics),
				conds);
			return A3(
				$author$project$Stabel$Qualifier$TypeMatch,
				loc,
				A2($author$project$Stabel$TypeChecker$bindGenericsInType, bindings, typeMatch),
				A2(
					$elm$core$List$map,
					$author$project$Stabel$TypeChecker$whenConditionsBindGenerics(bindings),
					conds));
		} else {
			return match;
		}
	});
var $author$project$Stabel$TypeChecker$isAliasOf = F5(
	function (context, visitedKeys, targetKey, topKey, currentKey) {
		isAliasOf:
		while (true) {
			var _v0 = A2($elm$core$Dict$get, currentKey, context.z);
			if ((!_v0.$) && (_v0.a.$ === 1)) {
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
var $author$project$Stabel$TypeChecker$findAliases = F2(
	function (context, generic) {
		return _Utils_Tuple2(
			generic,
			A2(
				$elm$core$List$filterMap,
				function (key) {
					return A5($author$project$Stabel$TypeChecker$isAliasOf, context, $elm$core$Set$empty, generic, key, key);
				},
				$elm$core$Dict$keys(context.z)));
	});
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $elm$core$Char$fromCode = _Char_fromCode;
var $author$project$Stabel$TypeChecker$renameGenerics = F2(
	function (type_, _v0) {
		var nextId = _v0.a;
		var seenGenerics = _v0.b;
		var acc = _v0.c;
		switch (type_.$) {
			case 1:
				var genName = type_.a;
				var _v2 = A2($elm$core$Dict$get, genName, seenGenerics);
				if (!_v2.$) {
					var newName = _v2.a;
					return _Utils_Tuple3(
						nextId,
						seenGenerics,
						A2(
							$elm$core$List$cons,
							$author$project$Stabel$Data$Type$Generic(newName),
							acc));
				} else {
					var newName = $elm$core$String$fromChar(nextId);
					return _Utils_Tuple3(
						$elm$core$Char$fromCode(
							1 + $elm$core$Char$toCode(nextId)),
						A3($elm$core$Dict$insert, genName, newName, seenGenerics),
						A2(
							$elm$core$List$cons,
							$author$project$Stabel$Data$Type$Generic(newName),
							acc));
				}
			case 4:
				var name = type_.a;
				var members = type_.b;
				var _v3 = A3(
					$elm$core$List$foldr,
					$author$project$Stabel$TypeChecker$renameGenerics,
					_Utils_Tuple3(nextId, seenGenerics, _List_Nil),
					members);
				var newNextId = _v3.a;
				var newSeenGenerics = _v3.b;
				var newMembers = _v3.c;
				return _Utils_Tuple3(
					newNextId,
					newSeenGenerics,
					A2(
						$elm$core$List$cons,
						A2($author$project$Stabel$Data$Type$Union, name, newMembers),
						acc));
			case 3:
				var name = type_.a;
				var members = type_.b;
				var _v4 = A3(
					$elm$core$List$foldr,
					$author$project$Stabel$TypeChecker$renameGenerics,
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
						A2($author$project$Stabel$Data$Type$CustomGeneric, name, newMembers),
						acc));
			default:
				return _Utils_Tuple3(
					nextId,
					seenGenerics,
					A2($elm$core$List$cons, type_, acc));
		}
	});
var $author$project$Stabel$TypeChecker$reverseLookup = F2(
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
var $author$project$Stabel$TypeChecker$simplifyFunctionType = function (_v0) {
	var functionType = _v0.a;
	var context = _v0.b;
	var oldSignature = _Utils_ap(functionType.o, functionType.H);
	var inputLength = $elm$core$List$length(functionType.o);
	var aliases = A3(
		$elm$core$List$foldl,
		$author$project$Stabel$TypeChecker$reverseLookup,
		$elm$core$Dict$empty,
		A2(
			$elm$core$List$map,
			$author$project$Stabel$TypeChecker$findAliases(context),
			A3(
				$elm$core$Basics$composeR,
				$elm$core$Set$fromList,
				$elm$core$Set$toList,
				A2($elm$core$List$filterMap, $author$project$Stabel$Data$Type$genericName, oldSignature))));
	var reduceGenericName = function (type_) {
		switch (type_.$) {
			case 1:
				var genName = type_.a;
				var _v2 = A2($author$project$Stabel$TypeChecker$getGenericBinding, context, type_);
				if (!_v2.$) {
					var boundType = _v2.a;
					return boundType;
				} else {
					var _v3 = A2($elm$core$Dict$get, genName, aliases);
					if (!_v3.$) {
						var actualName = _v3.a;
						return $author$project$Stabel$Data$Type$Generic(actualName);
					} else {
						return type_;
					}
				}
			case 4:
				var name = type_.a;
				var members = type_.b;
				return A2(
					$author$project$Stabel$Data$Type$Union,
					name,
					A2($elm$core$List$map, reduceGenericName, members));
			case 3:
				var name = type_.a;
				var members = type_.b;
				return A2(
					$author$project$Stabel$Data$Type$CustomGeneric,
					name,
					A2($elm$core$List$map, reduceGenericName, members));
			default:
				return type_;
		}
	};
	var newSignature = $elm$core$List$reverse(
		function (_v4) {
			var ns = _v4.c;
			return ns;
		}(
			A3(
				$elm$core$List$foldl,
				$author$project$Stabel$TypeChecker$renameGenerics,
				_Utils_Tuple3('a', $elm$core$Dict$empty, _List_Nil),
				A2($elm$core$List$map, reduceGenericName, oldSignature))));
	return _Utils_Tuple2(
		{
			o: A2($elm$core$List$take, inputLength, newSignature),
			H: A2($elm$core$List$drop, inputLength, newSignature)
		},
		context);
};
var $author$project$Stabel$TypeChecker$simplifyWhenFunctionTypes = function (_v0) {
	var functionTypes = _v0.a;
	var context = _v0.b;
	return _Utils_Tuple2(
		A2(
			$elm$core$List$map,
			function (wt) {
				return $author$project$Stabel$TypeChecker$simplifyFunctionType(
					_Utils_Tuple2(wt, context)).a;
			},
			functionTypes),
		context);
};
var $author$project$Stabel$TypeChecker$tagGenericEffect = F2(
	function (idx, effect) {
		if (!effect.$) {
			var type_ = effect.a;
			return $author$project$Stabel$TypeChecker$Push(
				A2($author$project$Stabel$TypeChecker$tagGeneric, idx, type_));
		} else {
			var type_ = effect.a;
			return $author$project$Stabel$TypeChecker$Pop(
				A2($author$project$Stabel$TypeChecker$tagGeneric, idx, type_));
		}
	});
var $author$project$Stabel$TypeChecker$extractTypeFromTypeMatch = function (_v0) {
	var t_ = _v0.b;
	return t_;
};
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
var $author$project$Stabel$TypeChecker$unionOfTypeMatches = function (whenBranches) {
	var flattenUnions = function (t) {
		if (t.$ === 4) {
			var members = t.b;
			return A2($elm$core$List$concatMap, flattenUnions, members);
		} else {
			return _List_fromArray(
				[t]);
		}
	};
	var uniqueTypes = A2(
		$elm$core$List$map,
		$elm$core$Tuple$first,
		$elm_community$list_extra$List$Extra$gatherEquals(
			A2(
				$elm$core$List$concatMap,
				flattenUnions,
				A2(
					$elm$core$List$map,
					A2($elm$core$Basics$composeR, $elm$core$Tuple$first, $author$project$Stabel$TypeChecker$extractTypeFromTypeMatch),
					whenBranches))));
	if (uniqueTypes.b && (!uniqueTypes.b.b)) {
		var singleType = uniqueTypes.a;
		return singleType;
	} else {
		return A2($author$project$Stabel$Data$Type$Union, $elm$core$Maybe$Nothing, uniqueTypes);
	}
};
var $author$project$Stabel$TypeChecker$Problem$TypeError = F4(
	function (a, b, c, d) {
		return {$: 1, a: a, b: b, c: c, d: d};
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
		var dict1 = _v0;
		var dict2 = _v1;
		return A2($elm$core$Dict$diff, dict1, dict2);
	});
var $elm$core$String$endsWith = _String_endsWith;
var $author$project$Stabel$Data$Type$sameCategory = F2(
	function (lhs, rhs) {
		var _v0 = _Utils_Tuple2(lhs, rhs);
		_v0$2:
		while (true) {
			switch (_v0.a.$) {
				case 5:
					if (_v0.b.$ === 5) {
						return true;
					} else {
						break _v0$2;
					}
				case 4:
					if (_v0.b.$ === 4) {
						var _v1 = _v0.a;
						var _v2 = _v0.b;
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
var $author$project$Stabel$Data$Type$toString = function (t) {
	switch (t.$) {
		case 0:
			return 'Int';
		case 1:
			var name = t.a;
			return name + '_Generic';
		case 2:
			var name = t.a;
			return name + '_Custom';
		case 3:
			var name = t.a;
			return name + '_Custom';
		case 4:
			if (!t.a.$) {
				var name = t.a.a;
				return name + '_Union';
			} else {
				var _v1 = t.a;
				return 'Union';
			}
		case 5:
			return 'Function';
		default:
			var name = t.a;
			return name + '...';
	}
};
var $author$project$Stabel$Data$Type$compatibleTypeLists = F3(
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
														case 6:
															if (!_v0.b.b.b) {
																var _v4 = _v0.b;
																return _Utils_Tuple2(rangeDict, true);
															} else {
																break _v0$14;
															}
														case 4:
															break _v0$12;
														default:
															break _v0$14;
													}
												}
											} else {
												if (!_v0.b.b) {
													switch (_v0.a.a.$) {
														case 6:
															if (!_v0.a.b.b) {
																var _v3 = _v0.a;
																return _Utils_Tuple2(rangeDict, true);
															} else {
																break _v0$14;
															}
														case 4:
															break _v0$11;
														default:
															break _v0$14;
													}
												} else {
													switch (_v0.b.a.$) {
														case 6:
															if (!_v0.b.b.b) {
																switch (_v0.a.a.$) {
																	case 6:
																		break _v0$1;
																	case 4:
																		break _v0$4;
																	default:
																		break _v0$4;
																}
															} else {
																switch (_v0.a.a.$) {
																	case 6:
																		break _v0$1;
																	case 4:
																		break _v0$5;
																	default:
																		break _v0$5;
																}
															}
														case 5:
															switch (_v0.a.a.$) {
																case 5:
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
																					if (type_.$ === 6) {
																						var rangeName = type_.a;
																						var _v15 = A2($elm$core$Dict$get, rangeName, rd);
																						if (!_v15.$) {
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
																	var inferredInputRangeApplied = A2(applyRangeDict, rangeDict, inferredQuotType.o);
																	var inferredOutputRangeApplied = A2(applyRangeDict, rangeDict, inferredQuotType.H);
																	var annotatedOutputRangeApplied = A2(applyRangeDict, rangeDict, annotatedQuotType.H);
																	var annotatedInputRangeApplied = A2(applyRangeDict, rangeDict, annotatedQuotType.o);
																	var _v12 = A3($author$project$Stabel$Data$Type$compatibleTypeLists, annotatedInputRangeApplied, inferredInputRangeApplied, rangeDict);
																	var dictRangePostInputs = _v12.a;
																	var inputCompatible = _v12.b;
																	var _v13 = A3($author$project$Stabel$Data$Type$compatibleTypeLists, annotatedOutputRangeApplied, inferredOutputRangeApplied, dictRangePostInputs);
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
																case 4:
																	break _v0$11;
																default:
																	break _v0$13;
															}
														case 1:
															switch (_v0.a.a.$) {
																case 1:
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
																case 4:
																	break _v0$8;
																default:
																	break _v0$8;
															}
														case 3:
															switch (_v0.a.a.$) {
																case 3:
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
																	var _v24 = A3($author$project$Stabel$Data$Type$compatibleTypeLists, lMembers, rMembers, $elm$core$Dict$empty);
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
																case 4:
																	break _v0$11;
																default:
																	break _v0$13;
															}
														case 4:
															if (_v0.a.a.$ === 4) {
																var _v25 = _v0.a;
																var _v26 = _v25.a;
																var lMembers = _v26.b;
																var annotatedRest = _v25.b;
																var _v27 = _v0.b;
																var _v28 = _v27.a;
																var rMembers = _v28.b;
																var inferredRest = _v27.b;
																var rSet = $elm$core$Set$fromList(
																	A2($elm$core$List$map, $author$project$Stabel$Data$Type$toString, rMembers));
																var lSet = $elm$core$Set$fromList(
																	A2($elm$core$List$map, $author$project$Stabel$Data$Type$toString, lMembers));
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
															if (_v0.a.a.$ === 4) {
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
									var _v34 = _v0.a;
									var annotatedEl = _v34.a;
									var annotatedRest = _v34.b;
									var _v35 = _v0.b;
									var inferredEl = _v35.a;
									var inferredRest = _v35.b;
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
								var _v32 = _v0.b;
								var _v33 = _v32.a;
								return _Utils_Tuple2(rangeDict, false);
							}
							var _v30 = _v0.a;
							var _v31 = _v30.a;
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
					if (A2($author$project$Stabel$Data$Type$sameCategory, annotatedEl, inferredNext)) {
						var $temp$annotated = annotated,
							$temp$inferred = A2($elm$core$List$cons, inferredNext, inferredRest),
							$temp$rangeDict = rangeDict;
						annotated = $temp$annotated;
						inferred = $temp$inferred;
						rangeDict = $temp$rangeDict;
						continue compatibleTypeLists;
					} else {
						return A3(
							$author$project$Stabel$Data$Type$compatibleTypeLists,
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
					$author$project$Stabel$Data$Type$compatibleTypeLists,
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
var $author$project$Stabel$Data$Type$compatibleFunctions = F2(
	function (annotated, inferred) {
		var _v0 = A3($author$project$Stabel$Data$Type$compatibleTypeLists, annotated.o, inferred.o, $elm$core$Dict$empty);
		var inputRangeDict = _v0.a;
		var inputsCompatible = _v0.b;
		var _v1 = A3($author$project$Stabel$Data$Type$compatibleTypeLists, annotated.H, inferred.H, inputRangeDict);
		var outputsCompatible = _v1.b;
		return inputsCompatible && outputsCompatible;
	});
var $author$project$Stabel$TypeChecker$simplifyFunctionTypeGenerics = function (functionType) {
	var oldSignature = _Utils_ap(functionType.o, functionType.H);
	var newSignature = $elm$core$List$reverse(
		function (_v0) {
			var ns = _v0.c;
			return ns;
		}(
			A3(
				$elm$core$List$foldl,
				$author$project$Stabel$TypeChecker$renameGenerics,
				_Utils_Tuple3('a', $elm$core$Dict$empty, _List_Nil),
				oldSignature)));
	var inputLength = $elm$core$List$length(functionType.o);
	return {
		o: A2($elm$core$List$take, inputLength, newSignature),
		H: A2($elm$core$List$drop, inputLength, newSignature)
	};
};
var $author$project$Stabel$TypeChecker$verifyTypeSignature = F3(
	function (inferredType, untypedDef, context) {
		var _v0 = $author$project$Stabel$Data$TypeSignature$toMaybe(untypedDef.bO);
		if (!_v0.$) {
			var annotatedType = _v0.a;
			var simplifiedAnnotatedType = $author$project$Stabel$TypeChecker$simplifyFunctionTypeGenerics(annotatedType);
			if (!A2($author$project$Stabel$Data$Type$compatibleFunctions, simplifiedAnnotatedType, inferredType)) {
				var range = A2($elm$core$Maybe$withDefault, $author$project$Stabel$Data$SourceLocation$emptyRange, untypedDef.U);
				var problem = A4($author$project$Stabel$TypeChecker$Problem$TypeError, range, untypedDef.m, simplifiedAnnotatedType, inferredType);
				return _Utils_update(
					context,
					{
						l: A2($elm$core$List$cons, problem, context.l)
					});
			} else {
				return context;
			}
		} else {
			return context;
		}
	});
var $author$project$Stabel$Data$TypeSignature$withDefault = F2(
	function (_default, ts) {
		switch (ts.$) {
			case 0:
				return _default;
			case 1:
				var wt = ts.a;
				return wt;
			default:
				var wt = ts.a;
				return wt;
		}
	});
var $author$project$Stabel$TypeChecker$inferWhenTypes = F3(
	function (untypedDef, _v19, _v21) {
		var _v20 = _v19.a;
		var t = _v20.b;
		var im = _v19.b;
		var infs = _v21.a;
		var ctx = _v21.b;
		var matchingCustomGenericType = F2(
			function (nameToMatch, tipe) {
				if (tipe.$ === 3) {
					var name = tipe.a;
					return _Utils_eq(name, nameToMatch);
				} else {
					return false;
				}
			});
		var resolveFirstType = F2(
			function (annotatedType, typeMatchType) {
				var _v25 = _Utils_Tuple2(annotatedType, typeMatchType);
				_v25$2:
				while (true) {
					if (_v25.b.$ === 3) {
						switch (_v25.a.$) {
							case 4:
								var _v26 = _v25.a;
								var unionMembers = _v26.b;
								var _v27 = _v25.b;
								var name = _v27.a;
								return A2(
									$elm$core$Maybe$withDefault,
									typeMatchType,
									A2(
										$elm_community$list_extra$List$Extra$find,
										matchingCustomGenericType(name),
										unionMembers));
							case 3:
								var _v28 = _v25.a;
								var annName = _v28.a;
								var _v29 = _v25.b;
								var matchName = _v29.a;
								return _Utils_eq(annName, matchName) ? annotatedType : typeMatchType;
							default:
								break _v25$2;
						}
					} else {
						break _v25$2;
					}
				}
				return typeMatchType;
			});
		var alteredTypeSignature = function () {
			var _v23 = untypedDef.bO;
			if (_v23.$ === 1) {
				var wt = _v23.a;
				return $author$project$Stabel$Data$TypeSignature$UserProvided(
					function () {
						var _v24 = wt.o;
						if (_v24.b) {
							var firstAnnotatedType = _v24.a;
							var rest = _v24.b;
							return _Utils_update(
								wt,
								{
									o: A2(
										$elm$core$List$cons,
										A2(resolveFirstType, firstAnnotatedType, t),
										rest)
								});
						} else {
							return wt;
						}
					}());
			} else {
				var x = _v23;
				return x;
			}
		}();
		var _v22 = A4(
			$author$project$Stabel$TypeChecker$typeCheckImplementation,
			untypedDef,
			alteredTypeSignature,
			im,
			$author$project$Stabel$TypeChecker$cleanContext(ctx));
		var inf = _v22.a;
		var newCtx = _v22.b;
		return _Utils_Tuple2(
			A2($elm$core$List$cons, inf, infs),
			newCtx);
	});
var $author$project$Stabel$TypeChecker$typeCheckDefinition = F2(
	function (untypedDef, context) {
		var _v17 = A2($elm$core$Dict$get, untypedDef.m, context.E);
		if (!_v17.$) {
			var def = _v17.a;
			return _Utils_Tuple2(def, context);
		} else {
			var _v18 = untypedDef.aL;
			if (!_v18.$) {
				var impl = _v18.a;
				return A3($author$project$Stabel$TypeChecker$typeCheckSoloImplementation, context, untypedDef, impl);
			} else {
				var initialWhens = _v18.a;
				var defaultImpl = _v18.b;
				return A4($author$project$Stabel$TypeChecker$typeCheckMultiImplementation, context, untypedDef, initialWhens, defaultImpl);
			}
		}
	});
var $author$project$Stabel$TypeChecker$typeCheckImplementation = F4(
	function (untypedDef, typeSignatureToUse, impl, context) {
		var reverseFunctionType = function (wt) {
			return {o: _List_Nil, H: wt.o};
		};
		var startingStackEffects = $author$project$Stabel$TypeChecker$functionTypeToStackEffects(
			A2(
				$author$project$Stabel$Data$TypeSignature$withDefault,
				$author$project$Stabel$Data$Type$emptyFunctionType,
				A2($author$project$Stabel$Data$TypeSignature$map, reverseFunctionType, typeSignatureToUse)));
		var contextWithCall = _Utils_update(
			context,
			{y: startingStackEffects});
		var annotatedInput = A2(
			$elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				$elm$core$Maybe$map,
				function ($) {
					return $.o;
				},
				$author$project$Stabel$Data$TypeSignature$toMaybe(typeSignatureToUse)));
		var _v14 = A3(
			$elm$core$List$foldl,
			F2(
				function (node, _v15) {
					var idx = _v15.a;
					var ctx = _v15.b;
					return _Utils_Tuple2(
						idx + 1,
						A4($author$project$Stabel$TypeChecker$typeCheckNode, untypedDef, idx, node, ctx));
				}),
			_Utils_Tuple2(0, contextWithCall),
			impl);
		var contextWithStackEffects = _v14.b;
		return $author$project$Stabel$TypeChecker$simplifyFunctionType(
			function (_v16) {
				var ctx = _v16.a;
				var wt = _v16.b;
				return _Utils_Tuple2(
					_Utils_update(
						wt,
						{
							o: _Utils_ap(wt.o, annotatedInput)
						}),
					ctx);
			}(
				A2($author$project$Stabel$TypeChecker$functionTypeFromStackEffects, untypedDef, contextWithStackEffects)));
	});
var $author$project$Stabel$TypeChecker$typeCheckMultiImplementation = F4(
	function (context, untypedDef, initialWhens, defaultImpl) {
		var sourceLocation = A2($elm$core$Maybe$withDefault, $author$project$Stabel$Data$SourceLocation$emptyRange, untypedDef.U);
		var allBranches = function () {
			if (!defaultImpl.b) {
				return initialWhens;
			} else {
				var _v12 = A4(
					$author$project$Stabel$TypeChecker$typeCheckImplementation,
					untypedDef,
					untypedDef.bO,
					defaultImpl,
					$author$project$Stabel$TypeChecker$cleanContext(context));
				var inferredDefaultType = _v12.a;
				var _v13 = inferredDefaultType.o;
				if (!_v13.b) {
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							A3(
								$author$project$Stabel$Qualifier$TypeMatch,
								$author$project$Stabel$Data$SourceLocation$emptyRange,
								$author$project$Stabel$Data$Type$Generic('*'),
								_List_Nil),
							defaultImpl),
						initialWhens);
				} else {
					var firstType = _v13.a;
					return A2(
						$elm$core$List$cons,
						_Utils_Tuple2(
							A3($author$project$Stabel$Qualifier$TypeMatch, $author$project$Stabel$Data$SourceLocation$emptyRange, firstType, _List_Nil),
							defaultImpl),
						initialWhens);
				}
			}
		}();
		var whens = A2(
			$elm$core$List$map,
			$elm$core$Tuple$mapFirst(
				$author$project$Stabel$TypeChecker$resolveWhenConditions(untypedDef)),
			allBranches);
		var whenPatterns = A2($elm$core$List$map, $elm$core$Tuple$first, whens);
		var maybeInexhaustiveError = A2($author$project$Stabel$TypeChecker$inexhaustivenessCheck, sourceLocation, whenPatterns);
		var _v10 = A2(
			$elm$core$Tuple$mapFirst,
			$elm$core$List$map(
				$author$project$Stabel$TypeChecker$constrainGenerics(untypedDef.bO)),
			A2(
				$elm$core$Tuple$mapFirst,
				$author$project$Stabel$TypeChecker$equalizeWhenTypes,
				A2(
					$elm$core$Tuple$mapFirst,
					A2(
						$elm$core$Basics$composeR,
						A2($elm$core$List$map2, $elm$core$Tuple$pair, whenPatterns),
						$elm$core$List$map($author$project$Stabel$TypeChecker$replaceFirstTypeWithPatternMatch)),
					$author$project$Stabel$TypeChecker$simplifyWhenFunctionTypes(
						A2(
							$elm$core$Tuple$mapFirst,
							$author$project$Stabel$TypeChecker$normalizeWhenTypes,
							A3(
								$elm$core$List$foldr,
								$author$project$Stabel$TypeChecker$inferWhenTypes(untypedDef),
								_Utils_Tuple2(_List_Nil, context),
								whens))))));
		var inferredWhenTypes = _v10.a;
		var newContext = _v10.b;
		var inferredType = A2(
			$author$project$Stabel$TypeChecker$joinOutputs,
			A2(
				$elm$core$List$map,
				function ($) {
					return $.H;
				},
				inferredWhenTypes),
			A2(
				$author$project$Stabel$TypeChecker$replaceFirstInputType,
				$author$project$Stabel$TypeChecker$unionOfTypeMatches(whens),
				A2(
					$elm$core$Maybe$withDefault,
					{o: _List_Nil, H: _List_Nil},
					$elm$core$List$head(inferredWhenTypes))));
		var exposedType = A2($author$project$Stabel$Data$TypeSignature$withDefault, inferredType, untypedDef.bO);
		var whensAreCompatible = $author$project$Stabel$TypeChecker$areAllEqual(
			A2(
				$elm$core$List$map,
				A2($elm$core$Basics$composeR, $author$project$Stabel$TypeChecker$dropFirstInputType, $author$project$Stabel$TypeChecker$countOutput),
				inferredWhenTypes));
		var whensAreConsistent = A2(
			$elm$core$List$all,
			$author$project$Stabel$TypeChecker$patternMatchIsCompatibleWithInferredType,
			A3($elm$core$List$map2, $elm$core$Tuple$pair, whenPatterns, inferredWhenTypes));
		var maybeConsistencyError = (whensAreConsistent && whensAreCompatible) ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(
			A2($author$project$Stabel$TypeChecker$Problem$InconsistentWhens, sourceLocation, untypedDef.m));
		var typeImplementation = function (impl) {
			return A2($author$project$Stabel$TypeChecker$untypedToTypedImplementation, newContext, impl);
		};
		var typedDef = {
			aL: A2(
				$author$project$Stabel$TypeChecker$MultiImpl,
				A2(
					$elm$core$List$map,
					A2($elm$core$Tuple$mapBoth, $author$project$Stabel$TypeChecker$mapTypeMatch, typeImplementation),
					initialWhens),
				typeImplementation(defaultImpl)),
			m: untypedDef.m,
			U: untypedDef.U,
			V: exposedType
		};
		var finalContext = $author$project$Stabel$TypeChecker$cleanContext(
			A3(
				$author$project$Stabel$TypeChecker$verifyTypeSignature,
				inferredType,
				untypedDef,
				_Utils_update(
					newContext,
					{
						l: _Utils_ap(
							A2(
								$elm$core$List$filterMap,
								$elm$core$Basics$identity,
								_List_fromArray(
									[maybeConsistencyError, maybeInexhaustiveError])),
							newContext.l),
						E: A3($elm$core$Dict$insert, untypedDef.m, typedDef, newContext.E)
					})));
		return _Utils_Tuple2(typedDef, finalContext);
	});
var $author$project$Stabel$TypeChecker$typeCheckNode = F4(
	function (currentDef, idx, node, context) {
		var addStackEffect = F2(
			function (ctx, effects) {
				return _Utils_update(
					ctx,
					{
						y: _Utils_ap(
							ctx.y,
							A2(
								$elm$core$List$map,
								$author$project$Stabel$TypeChecker$tagGenericEffect(idx),
								effects))
					});
			});
		switch (node.$) {
			case 0:
				return A2(
					addStackEffect,
					context,
					_List_fromArray(
						[
							$author$project$Stabel$TypeChecker$Push($author$project$Stabel$Data$Type$Int)
						]));
			case 1:
				var untypedDef = node.b;
				var _v6 = A2($author$project$Stabel$TypeChecker$typeCheckDefinition, untypedDef, context);
				var def = _v6.a;
				var contextWithTypedDef = _v6.b;
				var newContext = _Utils_update(
					contextWithTypedDef,
					{y: context.y});
				return A2(
					addStackEffect,
					newContext,
					$author$project$Stabel$TypeChecker$functionTypeToStackEffects(def.V));
			case 2:
				var ref = node.b;
				var stackEffectsBeforeFunctionCheck = context.y;
				var _v7 = A2($author$project$Stabel$TypeChecker$typeCheckDefinition, ref, context);
				var def = _v7.a;
				var contextAfterFunctionCheck = _v7.b;
				var newContext = _Utils_update(
					contextAfterFunctionCheck,
					{y: stackEffectsBeforeFunctionCheck});
				return A2(
					addStackEffect,
					newContext,
					_List_fromArray(
						[
							$author$project$Stabel$TypeChecker$Push(
							$author$project$Stabel$Data$Type$FunctionSignature(def.V))
						]));
			case 3:
				var _v8 = $author$project$Stabel$Data$TypeSignature$toMaybe(currentDef.bO);
				if (!_v8.$) {
					var annotatedType = _v8.a;
					return A2(
						addStackEffect,
						context,
						$author$project$Stabel$TypeChecker$functionTypeToStackEffects(annotatedType));
				} else {
					var problem = A2(
						$author$project$Stabel$TypeChecker$Problem$MissingTypeAnnotationInRecursiveCallStack,
						A2($elm$core$Maybe$withDefault, $author$project$Stabel$Data$SourceLocation$emptyRange, currentDef.U),
						currentDef.m);
					return _Utils_update(
						context,
						{
							l: A2($elm$core$List$cons, problem, context.l)
						});
				}
			case 4:
				var data = node.b;
				var _v9 = $author$project$Stabel$Data$TypeSignature$toMaybe(data.bO);
				if (!_v9.$) {
					var annotatedType = _v9.a;
					return A2(
						addStackEffect,
						context,
						$author$project$Stabel$TypeChecker$functionTypeToStackEffects(annotatedType));
				} else {
					var problem = A2(
						$author$project$Stabel$TypeChecker$Problem$MissingTypeAnnotationInRecursiveCallStack,
						A2($elm$core$Maybe$withDefault, $author$project$Stabel$Data$SourceLocation$emptyRange, data.U),
						data.m);
					return _Utils_update(
						context,
						{
							l: A2($elm$core$List$cons, problem, context.l)
						});
				}
			case 6:
				var typeDef = node.a;
				var typeInQuestion = $author$project$Stabel$TypeChecker$getStructType(typeDef);
				var memberTypes = A2(
					$elm$core$List$map,
					$elm$core$Tuple$second,
					$author$project$Stabel$TypeChecker$getStructMembers(typeDef));
				return A2(
					addStackEffect,
					context,
					$author$project$Stabel$TypeChecker$functionTypeToStackEffects(
						{
							o: memberTypes,
							H: _List_fromArray(
								[typeInQuestion])
						}));
			case 8:
				var typeDef = node.a;
				var memberType = node.d;
				var typeInQuestion = $author$project$Stabel$TypeChecker$getStructType(typeDef);
				return A2(
					addStackEffect,
					context,
					$author$project$Stabel$TypeChecker$functionTypeToStackEffects(
						{
							o: _List_fromArray(
								[typeInQuestion, memberType]),
							H: _List_fromArray(
								[typeInQuestion])
						}));
			case 7:
				var typeDef = node.a;
				var memberType = node.d;
				var typeInQuestion = $author$project$Stabel$TypeChecker$getStructType(typeDef);
				return A2(
					addStackEffect,
					context,
					$author$project$Stabel$TypeChecker$functionTypeToStackEffects(
						{
							o: _List_fromArray(
								[typeInQuestion]),
							H: _List_fromArray(
								[memberType])
						}));
			default:
				var builtin = node.b;
				return A2(
					addStackEffect,
					context,
					$author$project$Stabel$TypeChecker$functionTypeToStackEffects(
						$author$project$Stabel$Data$Builtin$functionType(builtin)));
		}
	});
var $author$project$Stabel$TypeChecker$typeCheckSoloImplementation = F3(
	function (context, untypedDef, impl) {
		var _v4 = A4(
			$author$project$Stabel$TypeChecker$typeCheckImplementation,
			untypedDef,
			untypedDef.bO,
			impl,
			$author$project$Stabel$TypeChecker$cleanContext(context));
		var inferredType = _v4.a;
		var newContext = _v4.b;
		var typedImplementation = $author$project$Stabel$TypeChecker$SoloImpl(
			A2($author$project$Stabel$TypeChecker$untypedToTypedImplementation, newContext, impl));
		var typedDef = {
			aL: typedImplementation,
			m: untypedDef.m,
			U: untypedDef.U,
			V: A2($author$project$Stabel$Data$TypeSignature$withDefault, inferredType, untypedDef.bO)
		};
		var finalContext = $author$project$Stabel$TypeChecker$cleanContext(
			A3(
				$author$project$Stabel$TypeChecker$verifyTypeSignature,
				inferredType,
				untypedDef,
				_Utils_update(
					newContext,
					{
						E: A3($elm$core$Dict$insert, untypedDef.m, typedDef, newContext.E)
					})));
		return _Utils_Tuple2(typedDef, finalContext);
	});
var $author$project$Stabel$TypeChecker$untypedToTypedImplementation = F2(
	function (context, impl) {
		var helper = F2(
			function (node, _v3) {
				var idx = _v3.a;
				var res = _v3.b;
				return _Utils_Tuple2(
					idx + 1,
					A2(
						$elm$core$List$cons,
						A3($author$project$Stabel$TypeChecker$untypedToTypedNode, idx, context, node),
						res));
			});
		return $elm$core$List$reverse(
			A3(
				$elm$core$List$foldl,
				helper,
				_Utils_Tuple2(0, _List_Nil),
				impl).b);
	});
var $author$project$Stabel$TypeChecker$untypedToTypedNode = F3(
	function (idx, context, untypedNode) {
		switch (untypedNode.$) {
			case 0:
				var range = untypedNode.a;
				var num = untypedNode.b;
				return A2($author$project$Stabel$TypeChecker$IntLiteral, range, num);
			case 1:
				var range = untypedNode.a;
				var _function = untypedNode.b;
				var _v1 = A2($author$project$Stabel$TypeChecker$typeCheckDefinition, _function, context);
				var def = _v1.a;
				return A3(
					$author$project$Stabel$TypeChecker$Function,
					range,
					def,
					A3($author$project$Stabel$TypeChecker$resolveGenericsInFunctionType, idx, context, def.V));
			case 2:
				var range = untypedNode.a;
				var ref = untypedNode.b;
				var _v2 = A2($author$project$Stabel$TypeChecker$typeCheckDefinition, ref, context);
				var def = _v2.a;
				return A2($author$project$Stabel$TypeChecker$FunctionRef, range, def);
			case 3:
				var range = untypedNode.a;
				return $author$project$Stabel$TypeChecker$Recurse(range);
			case 4:
				var range = untypedNode.a;
				var data = untypedNode.b;
				var functionType = A2(
					$author$project$Stabel$Data$TypeSignature$withDefault,
					$author$project$Stabel$Data$Type$emptyFunctionType,
					A2(
						$author$project$Stabel$Data$TypeSignature$map,
						A2($author$project$Stabel$TypeChecker$resolveGenericsInFunctionType, idx, context),
						data.bO));
				return A2(
					$author$project$Stabel$TypeChecker$Cycle,
					range,
					{bp: data.bp, m: data.m, U: data.U, bO: functionType});
			case 5:
				var range = untypedNode.a;
				var builtin = untypedNode.b;
				return A2($author$project$Stabel$TypeChecker$Builtin, range, builtin);
			case 6:
				var typeDef = untypedNode.a;
				return $author$project$Stabel$TypeChecker$ConstructType(typeDef);
			case 8:
				var typeDef = untypedNode.a;
				var memberName = untypedNode.b;
				var memberIndex = untypedNode.c;
				var memberType = untypedNode.d;
				return A4($author$project$Stabel$TypeChecker$SetMember, typeDef, memberName, memberIndex, memberType);
			default:
				var typeDef = untypedNode.a;
				var memberName = untypedNode.b;
				var memberIndex = untypedNode.c;
				var memberType = untypedNode.d;
				return A4($author$project$Stabel$TypeChecker$GetMember, typeDef, memberName, memberIndex, memberType);
		}
	});
var $author$project$Stabel$TypeChecker$typeCheck = F2(
	function (context, ast) {
		var updatedContext = A3(
			$elm$core$Dict$foldl,
			F3(
				function (_v0, v, acc) {
					return A2($author$project$Stabel$TypeChecker$typeCheckDefinition, v, acc).b;
				}),
			context,
			ast.bj);
		return $elm$core$List$isEmpty(updatedContext.l) ? $elm$core$Result$Ok(
			{bj: updatedContext.E, bF: ast.aW, I: updatedContext.I}) : $elm$core$Result$Err(updatedContext.l);
	});
var $author$project$Stabel$TypeChecker$run = function (ast) {
	return A2(
		$author$project$Stabel$TypeChecker$typeCheck,
		$author$project$Stabel$TypeChecker$initContext(ast),
		ast);
};
var $author$project$Stabel$Qualifier$Problem$sourceLocationRef = function (problem) {
	switch (problem.$) {
		case 0:
			var range = problem.a;
			return range.bI;
		case 1:
			var range = problem.a;
			return range.bI;
		case 2:
			var range = problem.a;
			return range.bI;
		case 3:
			var range = problem.a;
			return range.bI;
		case 4:
			var range = problem.a;
			return range.bI;
		case 5:
			var range = problem.a;
			return range.bI;
		default:
			var range = problem.a;
			return range.bI;
	}
};
var $author$project$Stabel$TypeChecker$Problem$sourceLocationRef = function (problem) {
	switch (problem.$) {
		case 0:
			var range = problem.a;
			return range.bI;
		case 1:
			var range = problem.a;
			return range.bI;
		case 2:
			var range = problem.a;
			return range.bI;
		case 3:
			var range = problem.a;
			return range.bI;
		case 4:
			var range = problem.a;
			return range.bI;
		case 5:
			var range = problem.a;
			return range.bI;
		default:
			var range = problem.a;
			return range.bI;
	}
};
var $author$project$Stabel$Parser$Problem$contextToString = function (context) {
	switch (context.$) {
		case 0:
			return 'module definition';
		case 1:
			var name = context.b;
			return '\'' + (name + '\' function');
		case 2:
			var name = context.b;
			return '\'' + (name + '\' multi-function');
		case 3:
			var name = context.b;
			return '\'' + (name + '\' struct');
		case 4:
			var name = context.b;
			return '\'' + (name + '\' union');
		case 5:
			return 'alias keyword';
		case 6:
			return 'import keyword';
		case 7:
			return 'exposing keyword';
		case 8:
			return 'type keyword';
		case 9:
			return 'member';
		case 10:
			return 'implementation';
		default:
			return 'else branch';
	}
};
var $author$project$Stabel$Parser$Problem$contextStackExplination = function (deadEnd) {
	var _v0 = deadEnd.aE;
	if (_v0.b) {
		if (!_v0.b.b) {
			var contextFrame = _v0.a;
			return 'I came across a problem while parsing the ' + $author$project$Stabel$Parser$Problem$contextToString(contextFrame.W);
		} else {
			var contextFrame1 = _v0.a;
			var _v1 = _v0.b;
			var contextFrame2 = _v1.a;
			return 'I came across a problem while parsing the ' + ($author$project$Stabel$Parser$Problem$contextToString(contextFrame1.W) + (' of the ' + $author$project$Stabel$Parser$Problem$contextToString(contextFrame2.W)));
		}
	} else {
		return 'I came across a problem';
	}
};
var $elm$core$String$trim = _String_trim;
var $author$project$Stabel$Data$SourceLocation$dropLastEmptyLinesHelper = function (ls) {
	dropLastEmptyLinesHelper:
	while (true) {
		if (!ls.b) {
			return _List_Nil;
		} else {
			var _v1 = ls.a;
			var line = _v1.b;
			var rest = ls.b;
			if ($elm$core$String$isEmpty(
				$elm$core$String$trim(line))) {
				var $temp$ls = rest;
				ls = $temp$ls;
				continue dropLastEmptyLinesHelper;
			} else {
				return ls;
			}
		}
	}
};
var $author$project$Stabel$Data$SourceLocation$dropLastEmptyLines = function (ls) {
	return $author$project$Stabel$Data$SourceLocation$dropLastEmptyLinesHelper(
		$elm$core$List$reverse(
			$author$project$Stabel$Data$SourceLocation$dropLastEmptyLinesHelper(
				$elm$core$List$reverse(ls))));
};
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$lines = _String_lines;
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
var $elm$core$String$padLeft = F3(
	function (n, _char, string) {
		return _Utils_ap(
			A2(
				$elm$core$String$repeat,
				n - $elm$core$String$length(string),
				$elm$core$String$fromChar(_char)),
			string);
	});
var $author$project$Stabel$Data$SourceLocation$extractFromString = F3(
	function (sourceCode, startLoc, endLoc) {
		var numPadding = $elm$core$String$length(
			$elm$core$String$fromInt(endLoc.S));
		var modifyLastLine = F2(
			function (idx, line) {
				return _Utils_eq(idx, endLoc.S) ? ($elm$core$String$isEmpty(
					$elm$core$String$trim(
						A2($elm$core$String$left, endLoc.aD - 1, line))) ? '' : line) : line;
			});
		return A2(
			$elm$core$String$join,
			'\n',
			A2(
				$elm$core$List$map,
				function (_v2) {
					var idx = _v2.a;
					var line = _v2.b;
					return A3(
						$elm$core$String$padLeft,
						numPadding,
						' ',
						$elm$core$String$fromInt(idx)) + (' | ' + line);
				},
				$author$project$Stabel$Data$SourceLocation$dropLastEmptyLines(
					A2(
						$elm$core$List$filter,
						function (_v1) {
							var idx = _v1.a;
							return (_Utils_cmp(idx, startLoc.S) > -1) && (_Utils_cmp(idx, endLoc.S) < 1);
						},
						A2(
							$elm$core$List$map,
							function (_v0) {
								var idx = _v0.a;
								var line = _v0.b;
								return _Utils_Tuple2(
									idx,
									A2(modifyLastLine, idx, line));
							},
							A2(
								$elm$core$List$indexedMap,
								F2(
									function (idx, line) {
										return _Utils_Tuple2(idx + 1, line);
									}),
								$elm$core$String$lines(sourceCode)))))));
	});
var $author$project$Stabel$Parser$Problem$firstContextRow = function (deadEnd) {
	var _v0 = deadEnd.aE;
	if (_v0.b) {
		var frame = _v0.a;
		var _v1 = frame.W;
		switch (_v1.$) {
			case 1:
				var loc = _v1.a;
				return $elm$core$Maybe$Just(loc.S);
			case 2:
				var loc = _v1.a;
				return $elm$core$Maybe$Just(loc.S);
			case 3:
				var loc = _v1.a;
				return $elm$core$Maybe$Just(loc.S);
			case 4:
				var loc = _v1.a;
				return $elm$core$Maybe$Just(loc.S);
			default:
				return $elm$core$Maybe$Just(frame.S);
		}
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var $author$project$Stabel$Parser$Problem$problemToString = F2(
	function (source, problem) {
		switch (problem.$) {
			case 0:
				return 'Expected to find an integer';
			case 1:
				return 'Expected to find a symbol';
			case 2:
				return 'Expected to find a keyword';
			case 3:
				return 'Expected to find a generic variable';
			case 4:
				return 'Expected to find a type';
			case 5:
				return 'Not sure why there is an error';
			case 6:
				return 'Expected a forward slash';
			case 7:
				return 'Expected whitespace';
			case 8:
				return 'Found metadata where we did not expect too';
			case 9:
				return 'Expected a opening parenthesis';
			case 10:
				return 'Expected a closing parenthesis';
			case 11:
				return 'Expected end of file';
			case 12:
				return 'Expected type seperator (--)';
			case 13:
				return 'Expected opening bracket';
			case 14:
				return 'Expected closing bracket';
			case 15:
				var functionName = problem.a;
				var maybePreviousDefinitionRange = problem.b;
				if (maybePreviousDefinitionRange.$ === 1) {
					return 'You\'re trying to define a new function called \'' + (functionName + '\', but this function has already been defined.');
				} else {
					var previousDefinitionRange = maybePreviousDefinitionRange.a;
					return 'You\'re trying to define a new function called \'' + (functionName + ('\', but this function has already been defined here:\n\n' + A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, previousDefinitionRange.bJ, previousDefinitionRange.bd)));
				}
			case 16:
				var typeName = problem.a;
				var previousDefinitionRange = problem.b;
				return 'You\'re trying to define a new type called \'' + (typeName + ('\', but this type has already been defined here:\n\n' + A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, previousDefinitionRange.bJ, previousDefinitionRange.bd)));
			case 17:
				var meta = problem.a;
				return '\'' + (meta + ':\' is not a known keyword in this context.');
			case 18:
				var path = problem.a;
				return '\'' + (path + '\' is not a valid module path. Note: Upper case characters are not allowed.');
			case 19:
				return 'A module is required to contain at least one definition.';
			default:
				var name = problem.a;
				return '\'' + (name + '\' is not a valid definition. Expected either defmodule:, def:, defmulti:, defstruct: or defunion:');
		}
	});
var $author$project$Stabel$Parser$Problem$toString = F3(
	function (sourceRef, source, deadEnd) {
		var problemDetail = A2($author$project$Stabel$Parser$Problem$problemToString, source, deadEnd.bE);
		var lineOfProblem = deadEnd.S;
		var lineOfContext = A2(
			$elm$core$Maybe$withDefault,
			lineOfProblem,
			$author$project$Stabel$Parser$Problem$firstContextRow(deadEnd));
		var contextExplination = $author$project$Stabel$Parser$Problem$contextStackExplination(deadEnd);
		var _v0 = _Utils_Tuple2(
			A2($elm$core$Basics$min, lineOfProblem, lineOfContext),
			A2($elm$core$Basics$max, lineOfProblem, lineOfContext));
		var startLine = _v0.a;
		var endLine = _v0.b;
		var endLoc = {aD: 1000, S: endLine};
		var startLoc = {aD: 1, S: startLine};
		var codeBlock = A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, startLoc, endLoc);
		return A2(
			$elm$core$String$join,
			'\n\n',
			A2(
				$elm$core$List$filter,
				A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
				_List_fromArray(
					['>> ' + sourceRef, contextExplination, codeBlock, problemDetail])));
	});
var $author$project$Stabel$Qualifier$Problem$toString = F2(
	function (source, problem) {
		switch (problem.$) {
			case 0:
				var range = problem.a;
				var functionRef = problem.b;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + ('No such function: \'' + (functionRef + '\''))))));
			case 1:
				var range = problem.a;
				var typeRef = problem.b;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + ('No such type: \'' + (typeRef + '\''))))));
			case 2:
				var range = problem.a;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + 'Union types cannot have sub-patterns.'))));
			case 3:
				var range = problem.a;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + 'This is not a valid pattern match. Pattern matches look like Type( <member> <value> ).'))));
			case 4:
				var range = problem.a;
				var typeName = problem.b;
				var member = problem.c;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + (typeName + (' does not have a member called \'' + (member + '\'')))))));
			case 5:
				var range = problem.a;
				var functionRef = problem.b;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + ('Trying to call \'' + (functionRef + '\' but this function is not exposed.'))))));
			default:
				var range = problem.a;
				var typeRef = problem.b;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + ('Referencing \'' + (typeRef + '\' but this type is not exposed.'))))));
		}
	});
var $author$project$Stabel$Data$Type$functionTypeToString = function (functionType) {
	var outputTypeStrings = A2($elm$core$List$map, $author$project$Stabel$Data$Type$toDisplayString, functionType.H);
	var inputTypeStrings = A2($elm$core$List$map, $author$project$Stabel$Data$Type$toDisplayString, functionType.o);
	return A2($elm$core$String$join, ' ', inputTypeStrings) + (' -- ' + A2($elm$core$String$join, ' ', outputTypeStrings));
};
var $author$project$Stabel$Data$Type$toDisplayString = function (t) {
	toDisplayString:
	while (true) {
		switch (t.$) {
			case 0:
				return 'Int';
			case 1:
				var name = t.a;
				return name;
			case 2:
				var name = t.a;
				return name;
			case 3:
				if (!t.b.b) {
					var name = t.a;
					return name;
				} else {
					var name = t.a;
					var gens = t.b;
					return name + ('(' + (A2(
						$elm$core$String$join,
						', ',
						A2($elm$core$List$map, $author$project$Stabel$Data$Type$toDisplayString, gens)) + ')'));
				}
			case 4:
				if (!t.a.$) {
					var name = t.a.a;
					var members = t.b;
					var memberString = A2(
						$elm$core$String$join,
						', ',
						A2($elm$core$List$map, $author$project$Stabel$Data$Type$toDisplayString, members));
					return name + ('(' + (memberString + ')'));
				} else {
					var _v1 = t.a;
					var members = t.b;
					var $temp$t = A2(
						$author$project$Stabel$Data$Type$Union,
						$elm$core$Maybe$Just('Union'),
						members);
					t = $temp$t;
					continue toDisplayString;
				}
			case 5:
				var quotType = t.a;
				return '[ ' + ($author$project$Stabel$Data$Type$functionTypeToString(quotType) + ' ]');
			default:
				var name = t.a;
				return name + '...';
		}
	}
};
var $author$project$Stabel$TypeChecker$Problem$toString = F2(
	function (source, problem) {
		switch (problem.$) {
			case 0:
				var range = problem.a;
				var generic = problem.b;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + ('Generic variable \'' + (generic + '\' needs to be declared.'))))));
			case 1:
				var range = problem.a;
				var name = problem.b;
				var actual = problem.c;
				var expected = problem.d;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + ('The type of \'' + (name + ('\' is specified to be:\n\n' + ($author$project$Stabel$Data$Type$functionTypeToString(actual) + ('\n\nHowever, it seems that the actual type is:\n\n' + $author$project$Stabel$Data$Type$functionTypeToString(expected))))))))));
			case 2:
				var range = problem.a;
				var name = problem.b;
				var actual = problem.c;
				var expected = problem.d;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + ('Found a problem in the implementation of \'' + (name + ('\'\n\nExpected:\n\n' + ($author$project$Stabel$Data$Type$toDisplayString(expected) + ('\n\nActual:\n\n' + $author$project$Stabel$Data$Type$toDisplayString(actual))))))))));
			case 3:
				var range = problem.a;
				var name = problem.b;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + ('The branches of \'' + (name + '\' do not all have the same type.'))))));
			case 4:
				var range = problem.a;
				var name = problem.b;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + ('We require a type annotation for \'' + (name + '\' as we\'re unable to infer the type of a recursive call.'))))));
			case 5:
				var range = problem.a;
				var missingTypes = problem.b;
				var formatTypePattern = function (tp) {
					return A2(
						$elm$core$String$join,
						' -> ',
						A2($elm$core$List$map, $author$project$Stabel$Data$Type$toDisplayString, tp));
				};
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + ('This multi-function doesn\'t handle all potential patterns. Missing patterns for:\n\n' + A2(
					$elm$core$String$join,
					'\n',
					A2($elm$core$List$map, formatTypePattern, missingTypes)))))));
			default:
				var range = problem.a;
				var name = problem.b;
				var actual = problem.c;
				var expected = problem.d;
				return '>> ' + (range.bI + ('\n\n' + (A3($author$project$Stabel$Data$SourceLocation$extractFromString, source, range.bJ, range.bd) + ('\n\n' + ('In order to be called from the command line, the type of \'' + (name + ('\' needs to be:\n\n' + ($author$project$Stabel$Data$Type$functionTypeToString(actual) + ('\n\nHowever, it seems that the actual type is:\n\n' + $author$project$Stabel$Data$Type$functionTypeToString(expected))))))))));
		}
	});
var $author$project$TestCompiler$compileProject = function (opts) {
	var sourceDict = $elm$core$Dict$fromList(
		A2(
			$elm$core$List$map,
			function (mod) {
				return _Utils_Tuple2(
					_Utils_ap(mod.ah, mod.aR),
					mod.bI);
			},
			opts.as));
	var parseModuleSource = function (mod) {
		var fullPath = _Utils_ap(mod.ah, mod.aR);
		var _v4 = A2($author$project$Stabel$Parser$run, fullPath, mod.bI);
		if (_v4.$ === 1) {
			var errs = _v4.a;
			return $elm$core$Result$Err(
				_Utils_Tuple3(fullPath, mod.bI, errs));
		} else {
			var ast = _v4.a;
			return $elm$core$Result$Ok(
				_Utils_Tuple3(mod.ah, mod.aR, ast));
		}
	};
	var parserResult = $elm_community$result_extra$Result$Extra$combine(
		A2($elm$core$List$map, parseModuleSource, opts.as));
	if (parserResult.$ === 1) {
		var _v1 = parserResult.a;
		var ref = _v1.a;
		var sourceCode = _v1.b;
		var errs = _v1.c;
		return A2(
			$author$project$TestCompiler$formatParserErrors,
			$author$project$Stabel$Parser$Problem$toString,
			A2(
				$elm$core$List$map,
				function (e) {
					return _Utils_Tuple3(ref, sourceCode, e);
				},
				errs));
	} else {
		var withAst = parserResult.a;
		var initialConfig = {
			k: {bj: $elm$core$Dict$empty, aq: $author$project$Stabel$Parser$ModuleDefinition$Undefined, a$: 'test', I: $elm$core$Dict$empty},
			B: $elm$core$Dict$empty,
			G: $author$project$TestCompiler$emptyQualifierAst,
			aR: '',
			x: ''
		};
		var qualifierResult = A3(
			$elm$core$List$foldl,
			$author$project$TestCompiler$qualifyTestTuples,
			_Utils_Tuple2(_List_Nil, initialConfig),
			withAst);
		var exportedFunctions = $elm$core$Set$singleton(opts.Y);
		if (qualifierResult.a.b) {
			var qualifierErrors = qualifierResult.a;
			return A2(
				$author$project$TestCompiler$formatErrors,
				$author$project$Stabel$Qualifier$Problem$toString,
				A2(
					$elm$core$List$map,
					function (problem) {
						return _Utils_Tuple2(
							A2(
								$elm$core$Maybe$withDefault,
								'',
								A2(
									$elm$core$Dict$get,
									$author$project$Stabel$Qualifier$Problem$sourceLocationRef(problem),
									sourceDict)),
							problem);
					},
					qualifierErrors));
		} else {
			var qualifiedAst = qualifierResult.b;
			var _v3 = $author$project$Stabel$TypeChecker$run(qualifiedAst.G);
			if (_v3.$ === 1) {
				var typeErrors = _v3.a;
				return A2(
					$author$project$TestCompiler$formatErrors,
					$author$project$Stabel$TypeChecker$Problem$toString,
					A2(
						$elm$core$List$map,
						function (problem) {
							return _Utils_Tuple2(
								A2(
									$elm$core$Maybe$withDefault,
									'',
									A2(
										$elm$core$Dict$get,
										$author$project$Stabel$TypeChecker$Problem$sourceLocationRef(problem),
										sourceDict)),
								problem);
						},
						typeErrors));
			} else {
				var typedAst = _v3.a;
				return $elm$core$Result$Ok(
					A2($author$project$Stabel$Codegen$run, exportedFunctions, typedAst));
			}
		}
	}
};
var $author$project$TestCompiler$compileString = function (opts) {
	var _v0 = A2($author$project$Stabel$Parser$run, '<buffer>', opts.T);
	if (_v0.$ === 1) {
		var parserErrors = _v0.a;
		return A2(
			$author$project$TestCompiler$formatParserErrors,
			$author$project$Stabel$Parser$Problem$toString,
			A2(
				$elm$core$List$map,
				function (e) {
					return _Utils_Tuple3('<buffer>', opts.T, e);
				},
				parserErrors));
	} else {
		var ast = _v0.a;
		var qualifierResult = $author$project$Stabel$Qualifier$run(
			{k: ast, B: $elm$core$Dict$empty, G: $author$project$TestCompiler$emptyQualifierAst, aR: '', x: ''});
		var exportedFunctions = $elm$core$Set$singleton(opts.Y);
		if (qualifierResult.$ === 1) {
			var qualifierErrors = qualifierResult.a;
			return A2(
				$author$project$TestCompiler$formatErrors,
				$author$project$Stabel$Qualifier$Problem$toString,
				A2(
					$elm$core$List$map,
					$elm$core$Tuple$pair(opts.T),
					qualifierErrors));
		} else {
			var qualifiedAst = qualifierResult.a;
			var _v2 = $author$project$Stabel$TypeChecker$run(qualifiedAst);
			if (_v2.$ === 1) {
				var typeErrors = _v2.a;
				return A2(
					$author$project$TestCompiler$formatErrors,
					$author$project$Stabel$TypeChecker$Problem$toString,
					A2(
						$elm$core$List$map,
						$elm$core$Tuple$pair(opts.T),
						typeErrors));
			} else {
				var typedAst = _v2.a;
				return $elm$core$Result$Ok(
					A2($author$project$Stabel$Codegen$run, exportedFunctions, typedAst));
			}
		}
	}
};
var $author$project$Stabel$Wasm$Indent = function (a) {
	return {$: 1, a: a};
};
var $author$project$Stabel$Wasm$Str = function (a) {
	return {$: 0, a: a};
};
var $author$project$Stabel$Wasm$applyIndentation = F2(
	function (indent, str) {
		return _Utils_ap(
			A2($elm$core$String$repeat, indent, ' '),
			str);
	});
var $author$project$Stabel$Wasm$formatHelper = F2(
	function (indentation, hint) {
		switch (hint.$) {
			case 0:
				if (hint.a === '') {
					return $elm$core$Maybe$Nothing;
				} else {
					var value = hint.a;
					return $elm$core$Maybe$Just(
						A2($author$project$Stabel$Wasm$applyIndentation, indentation, value));
				}
			case 1:
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
								$author$project$Stabel$Wasm$formatHelper(indentation + 2),
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
								$author$project$Stabel$Wasm$formatHelper(indentation),
								hints)));
				}
		}
	});
var $author$project$Stabel$Wasm$format = function (hint) {
	return A2(
		$elm$core$Maybe$withDefault,
		'',
		A2($author$project$Stabel$Wasm$formatHelper, 0, hint));
};
var $author$project$Stabel$Wasm$formatExport = function (_v0) {
	var functionName = _v0.a;
	var index = _v0.b;
	return $author$project$Stabel$Wasm$Str(
		'(export \"' + (functionName + ('\" (func ' + ($elm$core$String$fromInt(index) + '))'))));
};
var $author$project$Stabel$Wasm$BatchFormat = function (a) {
	return {$: 2, a: a};
};
var $author$project$Stabel$Wasm$formatInstruction = function (ins) {
	switch (ins.$) {
		case 0:
			var insList = ins.a;
			return $author$project$Stabel$Wasm$BatchFormat(
				A2($elm$core$List$map, $author$project$Stabel$Wasm$formatInstruction, insList));
		case 1:
			var insList = ins.a;
			return $author$project$Stabel$Wasm$BatchFormat(
				_List_fromArray(
					[
						$author$project$Stabel$Wasm$Str('(block'),
						$author$project$Stabel$Wasm$Indent(
						A2($elm$core$List$map, $author$project$Stabel$Wasm$formatInstruction, insList)),
						$author$project$Stabel$Wasm$Str(')')
					]));
		case 2:
			var insList = ins.a;
			return $author$project$Stabel$Wasm$BatchFormat(
				_List_fromArray(
					[
						$author$project$Stabel$Wasm$Str('(loop'),
						$author$project$Stabel$Wasm$Indent(
						A2($elm$core$List$map, $author$project$Stabel$Wasm$formatInstruction, insList)),
						$author$project$Stabel$Wasm$Str(')')
					]));
		case 3:
			var num = ins.a;
			return $author$project$Stabel$Wasm$Str(
				'(br ' + ($elm$core$String$fromInt(num) + ')'));
		case 4:
			var num = ins.a;
			return $author$project$Stabel$Wasm$Str(
				'(br_if ' + ($elm$core$String$fromInt(num) + ')'));
		case 5:
			return $author$project$Stabel$Wasm$Str('return');
		case 6:
			var id = ins.a;
			var fnName = ins.b;
			return $author$project$Stabel$Wasm$Str(
				'(call ' + ($elm$core$String$fromInt(id) + (') ;; $' + fnName)));
		case 7:
			return $author$project$Stabel$Wasm$Str('call_indirect');
		case 8:
			var idx = ins.a;
			return $author$project$Stabel$Wasm$Str(
				'(local.get ' + ($elm$core$String$fromInt(idx) + ')'));
		case 9:
			var idx = ins.a;
			return $author$project$Stabel$Wasm$Str(
				'(local.set ' + ($elm$core$String$fromInt(idx) + ')'));
		case 10:
			var idx = ins.a;
			return $author$project$Stabel$Wasm$Str(
				'(local.tee ' + ($elm$core$String$fromInt(idx) + ')'));
		case 11:
			var num = ins.a;
			return $author$project$Stabel$Wasm$Str(
				'(i32.const ' + ($elm$core$String$fromInt(num) + ')'));
		case 12:
			return $author$project$Stabel$Wasm$Str('i32.add');
		case 13:
			return $author$project$Stabel$Wasm$Str('i32.sub');
		case 14:
			return $author$project$Stabel$Wasm$Str('i32.mul');
		case 15:
			return $author$project$Stabel$Wasm$Str('i32.div_s');
		case 16:
			return $author$project$Stabel$Wasm$Str('i32.eq');
		case 17:
			return $author$project$Stabel$Wasm$Str('i32.ne');
		case 18:
			return $author$project$Stabel$Wasm$Str('i32.eqz');
		case 19:
			return $author$project$Stabel$Wasm$Str('i32.store');
		case 20:
			return $author$project$Stabel$Wasm$Str('i32.load');
		case 21:
			return $author$project$Stabel$Wasm$Str('drop');
		case 22:
			return $author$project$Stabel$Wasm$Str('unreachable');
		default:
			var comment = ins.a;
			var inst = ins.b;
			var _v1 = $author$project$Stabel$Wasm$formatInstruction(inst);
			switch (_v1.$) {
				case 0:
					var val = _v1.a;
					return $author$project$Stabel$Wasm$Str(val + (';; ' + comment));
				case 2:
					var batch = _v1.a;
					return $author$project$Stabel$Wasm$BatchFormat(
						A2(
							$elm$core$List$cons,
							$author$project$Stabel$Wasm$Str(';; ' + comment),
							batch));
				default:
					var batch = _v1.a;
					return $author$project$Stabel$Wasm$Indent(
						A2(
							$elm$core$List$cons,
							$author$project$Stabel$Wasm$Str(';; ' + comment),
							batch));
			}
	}
};
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $author$project$Stabel$Wasm$typeToString = function (_v0) {
	return 'i32';
};
var $author$project$Stabel$Wasm$formatFunction = function (_function) {
	var locals = $elm$core$List$isEmpty(_function.bq) ? '' : ('(local ' + (A2(
		$elm$core$String$join,
		' ',
		A2($elm$core$List$map, $author$project$Stabel$Wasm$typeToString, _function.bq)) + ')'));
	var fullFuncDef = A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				'(func',
				'$' + A3($elm$core$String$replace, ',', '__COMMA__', _function.m),
				'(type ' + ($elm$core$String$fromInt(_function.ay) + ')'),
				locals
			]));
	return _List_fromArray(
		[
			$author$project$Stabel$Wasm$Str(fullFuncDef),
			$author$project$Stabel$Wasm$Indent(
			A2($elm$core$List$map, $author$project$Stabel$Wasm$formatInstruction, _function.bn)),
			$author$project$Stabel$Wasm$Str(')')
		]);
};
var $author$project$Stabel$Wasm$moduleTypeToString = function (moduleType) {
	if (moduleType.b.$ === 1) {
		var lower = moduleType.a;
		var _v1 = moduleType.b;
		return '(memory ' + ($elm$core$String$fromInt(lower) + ')');
	} else {
		var lower = moduleType.a;
		var upper = moduleType.b.a;
		return '(memory ' + ($elm$core$String$fromInt(lower) + (' ' + ($elm$core$String$fromInt(upper) + ')')));
	}
};
var $author$project$Stabel$Wasm$formatImport = function (importType) {
	return $author$project$Stabel$Wasm$Str(
		'(import \"' + (importType.ar + ('\" \"' + (importType.an + ('\" ' + ($author$project$Stabel$Wasm$moduleTypeToString(importType.V) + ')'))))));
};
var $author$project$Stabel$Wasm$formatStartFunction = function (maybeStartFunction) {
	if (maybeStartFunction.$ === 1) {
		return $author$project$Stabel$Wasm$Str('');
	} else {
		var idx = maybeStartFunction.a;
		return $author$project$Stabel$Wasm$Indent(
			_List_fromArray(
				[
					$author$project$Stabel$Wasm$Str(
					'(start ' + ($elm$core$String$fromInt(idx) + ')'))
				]));
	}
};
var $author$project$Stabel$Wasm$formatTable = function (references) {
	var tableDef = A2(
		$elm$core$String$join,
		' ',
		_List_fromArray(
			[
				'(table',
				$elm$core$String$fromInt(
				$elm$core$List$length(references)),
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
				A2($elm$core$List$map, $elm$core$String$fromInt, references)),
				')'
			]));
	return _List_fromArray(
		[
			$author$project$Stabel$Wasm$Str(tableDef),
			$author$project$Stabel$Wasm$Str(elemDef)
		]);
};
var $author$project$Stabel$Wasm$formatTypeSignature = function (typeSignature) {
	var results = $elm$core$List$isEmpty(typeSignature.af) ? '' : ('(result ' + (A2(
		$elm$core$String$join,
		' ',
		A2($elm$core$List$map, $author$project$Stabel$Wasm$typeToString, typeSignature.af)) + ')'));
	var inputs = $elm$core$List$isEmpty(typeSignature.ac) ? '' : ('(param ' + (A2(
		$elm$core$String$join,
		' ',
		A2($elm$core$List$map, $author$project$Stabel$Wasm$typeToString, typeSignature.ac)) + ')'));
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
			$author$project$Stabel$Wasm$Str(formattedSignature)
		]);
};
var $author$project$Stabel$Wasm$toString = function (_v0) {
	var module_ = _v0;
	return A2(
		$elm$core$String$join,
		'\n',
		A2(
			$elm$core$List$filter,
			A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
			A2(
				$elm$core$List$map,
				$author$project$Stabel$Wasm$format,
				_List_fromArray(
					[
						$author$project$Stabel$Wasm$Str('(module'),
						$author$project$Stabel$Wasm$Indent(
						A2($elm$core$List$map, $author$project$Stabel$Wasm$formatImport, module_.t)),
						$author$project$Stabel$Wasm$Indent(
						A2($elm$core$List$concatMap, $author$project$Stabel$Wasm$formatTypeSignature, module_.M)),
						$author$project$Stabel$Wasm$Indent(
						$author$project$Stabel$Wasm$formatTable(module_.bF)),
						$author$project$Stabel$Wasm$Indent(
						A2(
							$elm$core$List$concatMap,
							$author$project$Stabel$Wasm$formatFunction,
							A2(
								$elm$core$List$sortBy,
								function ($) {
									return $.bk;
								},
								module_.bj))),
						$author$project$Stabel$Wasm$Indent(
						A2($elm$core$List$map, $author$project$Stabel$Wasm$formatExport, module_.ao)),
						$author$project$Stabel$Wasm$formatStartFunction(module_.bJ),
						$author$project$Stabel$Wasm$Str(')')
					]))));
};
var $author$project$TestCompiler$compileSucceded = function (wasm) {
	return $author$project$TestCompiler$compileFinished(
		_Utils_Tuple2(
			true,
			$author$project$Stabel$Wasm$toString(wasm)));
};
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $author$project$TestCompiler$CompileProject = function (a) {
	return {$: 1, a: a};
};
var $author$project$TestCompiler$CompileProjectOpts = F2(
	function (entryPoint, modules) {
		return {Y: entryPoint, as: modules};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $author$project$TestCompiler$ModuleSource = F3(
	function (_package, modulePath, source) {
		return {aR: modulePath, ah: _package, bI: source};
	});
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$TestCompiler$moduleSourceDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$TestCompiler$ModuleSource,
	A2($elm$json$Json$Decode$field, 'package', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'module', $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$field, 'source', $elm$json$Json$Decode$string));
var $author$project$TestCompiler$compileProjectOptsDecoder = A2(
	$elm$json$Json$Decode$map,
	$author$project$TestCompiler$CompileProject,
	A3(
		$elm$json$Json$Decode$map2,
		$author$project$TestCompiler$CompileProjectOpts,
		A2($elm$json$Json$Decode$field, 'entryPoint', $elm$json$Json$Decode$string),
		A2(
			$elm$json$Json$Decode$field,
			'modules',
			$elm$json$Json$Decode$list($author$project$TestCompiler$moduleSourceDecoder))));
var $author$project$TestCompiler$CompileString = function (a) {
	return {$: 0, a: a};
};
var $author$project$TestCompiler$CompileStringOpts = F2(
	function (entryPoint, sourceCode) {
		return {Y: entryPoint, T: sourceCode};
	});
var $author$project$TestCompiler$compileStringOptsDecoder = A2(
	$elm$json$Json$Decode$map,
	$author$project$TestCompiler$CompileString,
	A3(
		$elm$json$Json$Decode$map2,
		$author$project$TestCompiler$CompileStringOpts,
		A2($elm$json$Json$Decode$field, 'entryPoint', $elm$json$Json$Decode$string),
		A2($elm$json$Json$Decode$field, 'sourceCode', $elm$json$Json$Decode$string)));
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$core$String$toUpper = _String_toUpper;
var $author$project$TestCompiler$inputDecoder = function () {
	var specializedDecoder = function (type_) {
		var _v0 = $elm$core$String$toUpper(type_);
		switch (_v0) {
			case 'COMPILESTRING':
				return $author$project$TestCompiler$compileStringOptsDecoder;
			case 'COMPILEPROJECT':
				return $author$project$TestCompiler$compileProjectOptsDecoder;
			default:
				return $elm$json$Json$Decode$fail('Unknown compilation mode: ' + type_);
		}
	};
	return A2(
		$elm$json$Json$Decode$andThen,
		specializedDecoder,
		A2($elm$json$Json$Decode$field, '__type', $elm$json$Json$Decode$string));
}();
var $author$project$TestCompiler$decodeInput = function (json) {
	return A2($elm$json$Json$Decode$decodeValue, $author$project$TestCompiler$inputDecoder, json);
};
var $author$project$TestCompiler$init = function (input) {
	var _v0 = $author$project$TestCompiler$decodeInput(input);
	if (_v0.$ === 1) {
		var err = _v0.a;
		return $author$project$TestCompiler$compileFailed(
			'Something is wrong with the input: ' + $elm$json$Json$Decode$errorToString(err));
	} else {
		if (!_v0.a.$) {
			var opts = _v0.a.a;
			var _v1 = $author$project$TestCompiler$compileString(opts);
			if (!_v1.$) {
				var wasm = _v1.a;
				return $author$project$TestCompiler$compileSucceded(wasm);
			} else {
				var errmsg = _v1.a;
				return $author$project$TestCompiler$compileFailed(errmsg);
			}
		} else {
			var opts = _v0.a.a;
			var _v2 = $author$project$TestCompiler$compileProject(opts);
			if (!_v2.$) {
				var wasm = _v2.a;
				return $author$project$TestCompiler$compileSucceded(wasm);
			} else {
				var errmsg = _v2.a;
				return $author$project$TestCompiler$compileFailed(errmsg);
			}
		}
	}
};
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $elm$core$Platform$worker = _Platform_worker;
var $author$project$TestCompiler$main = $elm$core$Platform$worker(
	{
		bm: function (input) {
			return _Utils_Tuple2(
				0,
				$author$project$TestCompiler$init(input));
		},
		bL: $elm$core$Basics$always($elm$core$Platform$Sub$none),
		bP: F2(
			function (_v0, _v1) {
				return _Utils_Tuple2(0, $elm$core$Platform$Cmd$none);
			})
	});
_Platform_export({'TestCompiler':{'init':$author$project$TestCompiler$main($elm$json$Json$Decode$value)(0)}});}(this));