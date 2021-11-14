import _ from 'lodash'; //need for tests

//castArray
function castArray(value?: any): any[] {
    return arguments.length ? (Array.isArray(value) ? value : [value]) : []; 
}

// console.log(castArray({ 'a': 1 }))
// console.log(_.castArray({ 'a': 1 }))
// console.log(castArray())
// console.log(_.castArray())

//clone
const clone = (value: any): any => value;

// const objects = [{ 'a': 1 }, { 'b': 2 }]
// const test1 = clone(objects)
// const test2 = _.clone(objects)
// console.log(test1[0] === objects[0])
// console.log(test2[0] === objects[0])

//gt
const gt = (value: number, other: number): boolean =>
    value > other ? true : false;

// console.log(gt(3, 3))
// console.log(_.gt(3, 3))
// console.log(gt(3, 2))
// console.log(_.gt(3, 2))

//gte
const gte = (value: number, other: number): boolean =>
    value >= other ? true : false;

// console.log(gte(3, 4))
// console.log(_.gte(3, 4))
// console.log(gte(3, 3))
// console.log(_.gte(3, 3))

//isArray
const isArray = (value: any): boolean => Array.isArray(value);

// console.log(isArray([1, 2, 3]))
// console.log(_.isArray([1, 2, 3]))
// console.log(isArray('abc'))
// console.log(_.isArray('abc'))
// console.log(isArray(null))
// console.log(_.isArray(null))

//isArrayLike
const isArrayLike = (value: any): boolean => 
    typeof(value) !== 'function' && value !== null
    ? true
    : false;

// console.log(isArrayLike([1, 2, 3]))
// console.log(_.isArrayLike([1, 2, 3]))
// console.log(isArrayLike('abc'))
// console.log(_.isArrayLike('abc'))
// console.log(isArrayLike(null))
// console.log(_.isArrayLike(null))

//isBoolean
const isBoolean = (value: any): boolean =>
    typeof(value) === 'boolean' ? true : false;

// console.log(isBoolean(false))
// console.log(_.isBoolean(false))
// console.log(isBoolean(null))
// console.log(_.isBoolean(null))

//lt
const lt = (value: number, other: number): boolean =>
    value < other ? true : false;

// console.log(lt(2, 3));
// console.log(_.lt(2, 3));

//lte
const lte = (value: number, other: number): boolean =>
    value <= other ? true : false;

// console.log(lte(3, 3));
// console.log(_.lte(3, 3));