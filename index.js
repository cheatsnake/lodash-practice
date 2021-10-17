var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _ = require('lodash'); //need for tests
///////////////ARRAY
//chunk
function chunk(arr, size) {
    if (size >= arr.length) {
        return [arr];
    }
    else if (size <= 0) {
        return [];
    }
    else {
        var res = [];
        while (arr.length > size) {
            var a = [];
            for (var i = 0; i < size; i++) {
                a.push(arr.shift());
            }
            res.push(a);
        }
        if (arr.length && arr.length <= size) {
            return __spreadArray(__spreadArray([], res, true), [arr], false);
        }
        return res;
    }
}
// console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2))
// console.log(_.chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2))
//compact
var compact = function (arr) { return arr.filter(function (item) { return item; }); };
// console.log(compact([0, 1, false, 2, '', 3]))
// console.log(_.compact([0, 1, false, 2, '', 3]))
//concat
function concat(arr) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var res = [];
    for (var key in arguments) {
        if (Array.isArray(arguments[key])) {
            res.push.apply(res, arguments[key]);
        }
        else {
            res.push(arguments[key]);
        }
    }
    res.shift();
    return __spreadArray(__spreadArray([], arr, true), res, true);
}
// const array = [1];
// console.log(concat(array, 2, [3], [[4]]));
// console.log(_.concat(array, 2, [3], [[4]]));
//difference
function difference(arr, values) {
    var res = [];
    arr.forEach(function (item) {
        !values.find(function (elem) { return elem === item; }) ? res.push(item) : null;
    });
    return res;
}
// console.log(difference([2, 1, 4, 4], [2, 3]))
// console.log(_.difference([2, 1, 4, 4], [2, 3]))
//drop
function drop(arr, n) {
    if (n === void 0) { n = 1; }
    arr.splice(0, n);
    return arr;
}
// console.log(drop([1, 2, 3, 4], 2))
// console.log(_.drop([1, 2, 3, 4], 2))
//dropRight
function dropRight(arr, n) {
    if (n === void 0) { n = 1; }
    return arr.slice(0, -n);
}
// console.log(dropRight([1, 2, 3]))
// console.log(_.dropRight([1, 2, 3]))
//fill
function fill(arr, value, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length; }
    return arr.map(function (elem, i) { return i >= start && i < end ? value : elem; });
}
// console.log(fill([4, 6, 8, 10], '*', 1, 3))
// console.log(_.fill([4, 6, 8, 10], '*', 1, 3))
//head
function head(arr) {
    return arr[0];
}
// console.log(head([1, 2, 3]))
// console.log(_.head([1, 2, 3]))
//flatten
function flatten(arr) {
    var res = [];
    arr.forEach(function (elem) {
        Array.isArray(elem) ? res.push.apply(res, elem) : res.push(elem);
    });
    return res;
}
// console.log(flatten([1, [2, [3, [4]], 5]]))
// console.log(_.flatten([1, [2, [3, [4]], 5]]))
//flattenDeep
function flattenDeep(arr) {
    var res = [];
    function deep(elem) {
        elem.forEach(function (i) {
            Array.isArray(i) ? deep(i) : res.push(i);
        });
    }
    deep(arr);
    return res;
}
// console.log(flattenDeep([1, [2, [3, [4]], 5]]))
// console.log(_.flattenDeep([1, [2, [3, [4]], 5]]))
//indexOf
function indexOf(arr, value, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    var res = -1;
    for (var i = fromIndex; i < arr.length; i++) {
        if (arr[i] === value) {
            res = i;
            i = arr.length;
        }
    }
    return res;
}
// console.log(indexOf([1, 2, 1, 2], 2, 2))
// console.log(_.indexOf([1, 2, 1, 2], 2, 2))
//initial
function initial(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
}
// console.log(initial([1, 2, 3]));
// console.log(_.initial([1, 2, 3]));
//intersection
function intersection() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var checkArr = [];
    var res = [];
    for (var i = 1; i < arguments.length; i++) {
        checkArr.push.apply(checkArr, arguments[i]);
    }
    arguments[0].forEach(function (item) {
        if (checkArr.includes(item))
            res.push(item);
    });
    return res;
}
// console.log(intersection([2, 1], [2, 3]))
// console.log(_.intersection([2, 1], [2, 3]))
//join
function join(arr, separator) {
    if (separator === void 0) { separator = ','; }
    var res = '';
    arr.forEach(function (item) {
        res += (item + separator);
    });
    return res.slice(0, -1);
}
// console.log(join(['a', 'b', 'c'], '~'))
// console.log(_.join(['a', 'b', 'c'], '~'))
//last
var last = function (arr) { return arr[arr.length - 1]; };
// console.log(last([1, 2, 3]))
// console.log(_.last([1, 2, 3]))
//nth
function nth(arr, n) {
    if (n === void 0) { n = 0; }
    if (n >= 0) {
        return arr[n];
    }
    else {
        return arr[arr.length - Math.abs(n)];
    }
}
// console.log(nth([1, 2, 3, 8, 12], -2))
// console.log(nth([1, 2, 3, 8, 12]))
// console.log(_.nth([1, 2, 3, 8, 12], -2))
// console.log(_.nth([1, 2, 3, 8, 12]))
//pull
function pull(arr) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var res = [];
    arr.forEach(function (item) {
        if (!__spreadArray([], values, true).includes(item)) {
            res.push(item);
        }
    });
    return res;
}
// const array = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log(pull(array, 'a', 'c'))
// console.log(_.pull(array, 'a', 'c'))
//pullAll
function pullAll(arr, values) {
    var res = [];
    arr.forEach(function (item) {
        if (!values.includes(item)) {
            res.push(item);
        }
    });
    return res;
}
// const array = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log(pullAll(array, ['a', 'c']))
// console.log(_.pullAll(array, ['a', 'c']))
//pullAt
function pullAt(arr, values) {
    var res = [];
    var i = 0;
    Array.isArray(values) ? values : values = [values];
    values.forEach(function (item) {
        var n = arr.splice(item - i, 1);
        res.push.apply(res, n);
        i++;
    });
    return res;
}
// const array = ['a', 'b', 'c', 'd']
// const array2 = ['a', 'b', 'c', 'd']
// const pulled = pullAt(array, [1, 3])
// const pulled2 = _.pullAt(array2, [1, 3])
// console.log(array, pulled)
// console.log(array2, pulled2)
//remove
function remove(arr, func) {
    var res = [];
    arr.forEach(function (item, index, arr) {
        if (func(item, index, arr)) {
            var x = arr.splice(index, 1);
            res.push.apply(res, x);
        }
    });
    return res;
}
// const array = [1, 2, 3, 4]
// const array2 = [1, 2, 3, 4]
// const evens = remove(array, function(n) {
// 	return n % 2 == 0;
// });
// const evens2 = _.remove(array2, function(n) {
// 	return n % 2 == 0;
// });
// console.log(array, evens)
// console.log(array2, evens2)
//reverse
var reverse = function (arr) { return arr.reverse(); };
// const arr = [1, 2, 3]
// const arr2 = [1, 2, 3]
// console.log(reverse(arr), arr)
// console.log(_.reverse(arr2), arr2)
//slice
function slice(arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length; }
    return arr.slice(start, end);
}
// const arr = [1, 2, 3, 4, 5, 6]
// console.log(slice(arr, 1, 3))
// console.log(_.slice(arr, 1, 3))
//sortedIndex
function sortedIndex(arr, value) {
    var pos = -1;
    arr.forEach(function (item, index) {
        if (item >= value && pos < 0) {
            pos = index;
        }
    });
    return pos;
}
// console.log(sortedIndex([30, 50], 40))
// console.log(_.sortedIndex([30, 50], 40))
//sortedIndexOf
function sortedIndexOf(arr, value) {
    var pos = -1;
    arr.forEach(function (item, index) {
        if (item === value && pos < 0) {
            pos = index;
        }
    });
    return pos;
}
// console.log(sortedIndexOf([4, 5, 5, 5, 6], 5))
// console.log(_.sortedIndexOf([4, 5, 5, 5, 6], 5))
//sortedLastIndex
function sortedLastIndex(arr, value) {
    var pos = null;
    arr.forEach(function (item, index) {
        if (item > value && !pos) {
            pos = index;
        }
    });
    pos === null ? pos = arr.length : null;
    return pos;
}
// console.log(sortedLastIndex([4, 5, 5, 5, 6], 5))
// console.log(_.sortedLastIndex([4, 5, 5, 5, 6], 5))
//sortedLastIndexOf
function sortedLastIndexOf(arr, value) {
    var pos = -1;
    arr.forEach(function (item, index) {
        if (item === value) {
            pos = index;
        }
    });
    return pos;
}
// console.log(sortedLastIndexOf([4, 5, 5, 5, 6], 5))
// console.log(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5))
//sortedUniq
function sortedUniq(arr) {
    var res = [];
    arr.forEach(function (item) {
        if (!res.includes(item)) {
            res.push(item);
        }
    });
    return res;
}
// console.log(sortedUniq([1, 1, 2]))
// console.log(_.sortedUniq([1, 1, 2]))
//sortedUniqBy
function sortedUniqBy(arr, func) {
    var res = [];
    var check = [];
    arr.forEach(function (item) {
        if (!check.includes(func(item))) {
            res.push(item);
            check.push(func(item));
        }
    });
    return res;
}
// console.log(sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor))
// console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor))
//tail
var tail = function (arr) { return arr.slice(1, arr.length); };
// console.log(tail([1, 2, 3]))
// console.log(_.tail([1, 2, 3]))
//take
var take = function (arr, n) {
    if (n === void 0) { n = 1; }
    return arr.slice(0, n);
};
// console.log(take([1, 2, 3], 2))
// console.log(_.take([1, 2, 3], 2))
//takeRight
var takeRight = function (arr, n) {
    if (n === void 0) { n = 1; }
    return arr.slice(-n);
};
// console.log(takeRight([1, 2, 3], 2))
// console.log(_.takeRight([1, 2, 3], 2))
//union
function union() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var res = [];
    var all = [];
    arr.forEach(function (item) {
        all.push.apply(all, item);
    });
    all.forEach(function (item) {
        if (!res.includes(item)) {
            res.push(item);
        }
    });
    return res;
}
// console.log(union([2], [1, 2]))
// console.log(_.union([2], [1, 2]))
//uniq
function uniq(arr) {
    var res = [];
    arr.forEach(function (item) {
        if (!res.includes(item)) {
            res.push(item);
        }
    });
    return res;
}
// console.log(uniq([2, 1, 2]))
// console.log(_.uniq([2, 1, 2]))
//uniqBy
function uniqBy(arr, func) {
    var res = [];
    var check = [];
    arr.forEach(function (item) {
        if (!check.includes(func(item))) {
            res.push(item);
            check.push(func(item));
        }
    });
    return res;
}
// console.log(uniqBy([2.1, 1.2, 2.3], Math.floor))
// console.log(_.uniqBy([2.1, 1.2, 2.3], Math.floor))
//zip
function zip() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var res = [];
    var max = 0;
    arr.forEach(function (item) {
        if (item.length > max) {
            max = item.length;
        }
    });
    var _loop_1 = function (i) {
        var a = [];
        arr.forEach(function (item) {
            a.push(item[i]);
        });
        res.push(a);
    };
    for (var i = 0; i < max; i++) {
        _loop_1(i);
    }
    return res;
}
// console.log(zip(['a', 'b'], [1, 2, 3], [true, false, 3]))
// console.log(_.zip(['a', 'b'], [1, 2, 3], [true, false, 3]))
//unzip
function unzip() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var res = [];
    var max = 0;
    arr[0].forEach(function (item) {
        if (item.length > max) {
            max = item.length;
        }
    });
    var _loop_2 = function (i) {
        var a = [];
        arr[0].forEach(function (item) {
            a.push(item[i]);
        });
        res.push(a);
    };
    for (var i = 0; i < max; i++) {
        _loop_2(i);
    }
    return res;
}
// const zipped = zip(['a', 'b'], [1, 2], [true, false])
// console.log(unzip(zipped))
// console.log(_.unzip(zipped))
//without
function without(arr) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var res = [];
    arr.forEach(function (item) {
        if (!values.includes(item)) {
            res.push(item);
        }
    });
    return res;
}
// console.log(without([2, 1, 2, 3], 1, 2))
// console.log(_.without([2, 1, 2, 3], 1, 2))
//xor
function xor() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var all = [];
    var res = [];
    var check = [];
    var repeat = [];
    arr.forEach(function (el) {
        all.push.apply(all, el);
    });
    all.forEach(function (el, i) {
        if (!check.includes(el)) {
            check.push(el);
        }
        else {
            repeat.push(el);
        }
    });
    all.forEach(function (el) {
        if (!repeat.includes(el)) {
            res.push(el);
        }
    });
    return res;
}
// console.log(xor([2, 1], [2, 3]))
// console.log(_.xor([2, 1], [2, 3]))
//zipObject
function zipObject(props, values) {
    var entries = [];
    props.forEach(function (el, i) {
        entries.push([props[i], values[i]]);
    });
    return Object.fromEntries(entries);
    ;
}
// console.log(zipObject(['a', 'b'], [1, 2]));
// console.log(_.zipObject(['a', 'b'], [1, 2]));
///////////////////////////STRINGS
//capitalize
function capitalize(str) {
    var first = str.charAt(0).toUpperCase();
    var slised = str.slice(1).toLowerCase();
    return first + slised;
}
// console.log(capitalize('FRED'))
// console.log(_.capitalize('FRED'))
//endsWith
function endsWith(str, target, pos) {
    if (pos === void 0) { pos = str.length; }
    return str[pos - 1] === target ? true : false;
}
// console.log(endsWith('abc', 'c'))
// console.log(_.endsWith('abc', 'c'))
//lowerFirst
function lowerFirst(str) {
    var first = str.charAt(0).toLowerCase();
    var slised = str.slice(1).toUpperCase();
    return first + slised;
}
// console.log(lowerFirst('FRED'))
// console.log(_.lowerFirst('FRED'))
//repeat
function repeat(str, n) {
    if (n === void 0) { n = 1; }
    var res = '';
    for (var i = 0; i < n; i++) {
        res += str;
    }
    return res;
}
// console.log(repeat('abc', 2))
// console.log(_.repeat('abc', 2))
