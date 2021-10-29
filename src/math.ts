import _ from 'lodash'; //need for tests

//add
function add(augend: number, addend: number): number {
	return augend + addend;
}

// console.log(add(6, 4))
// console.log(_.add(6, 4))

//divide
function divide(dividend: number, divisor: number): number {
	return dividend / divisor;
}

// console.log(divide(6, 4))
// console.log(_.divide(6, 4))

//max
function max(arr: number[]): number {
	let max = arr[0];
	for(let i = 1; i < arr.length; i++) {
		if(arr[i] > max) max = arr[i];
	}
	return max;
}

// console.log(max([4, 2, 8, 6]))
// console.log(_.max([4, 2, 8, 6]))

//mean
function mean (arr: number[]): number {
	let total = 0;
	for(let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total / arr.length;
}

// console.log(mean([4, 2, 8, 6]))
// console.log(_.mean([4, 2, 8, 6]))

//min
function min(arr: number[]): number {
  let m = arr[0]
  for(let i = 1; i < arr.length; i++) {
    if (m > arr[i]) m = arr[i]
  }
  return m
}

// console.log(min([4, 2, 8, 6]))
// console.log(_.min([4, 2, 8, 6]))

//multiply
function multiply(multiplier: number, multiplicand: number): number {
  return multiplier * multiplicand
}

// console.log(multiply(7, 5))
// console.log(_.multiply(7, 5))