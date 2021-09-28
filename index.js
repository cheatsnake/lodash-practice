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
var array = [1];
console.log(concat(array, 2, [3], [[4]]));
console.log(_.concat(array, 2, [3], [[4]]));
console.log(concat(array, 2, [[3, 5, 6]], [[4]]));
console.log(_.concat(array, 2, [[3, 5, 6]], [[4]]));
