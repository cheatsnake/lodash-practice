import _ from 'lodash'; //need for tests

//add
function add(augend: number, addend: number): number {
	return augend + addend;
}

// console.log(add(6, 4))
// console.log(_.add(6, 4))

//ceil
function ceil(number: number, precision = 0): number {
	const integer = Math.ceil(Number(`${number}e${precision}`)); //5e2 in JS = 5*10^2 = 500
	if (precision < 0) {
		return Number(`${integer}e${Math.abs(precision)}`);
	}
	return Number(`${integer}e-${precision}`);
}

// console.log(ceil(6.004, 2))
// console.log(_.ceil(6.004, 2))
// console.log(ceil(6040, -2))
// console.log(_.ceil(6040, -2))

//divide
function divide(dividend: number, divisor: number): number {
	return dividend / divisor;
}

// console.log(divide(6, 4))
// console.log(_.divide(6, 4))

//floor
function floor(number: number, precision = 0): number {
	const integer = Math.floor(Number(`${number}e${precision}`)); //5e2 in JS = 5*10^2 = 500
	if (precision < 0) {
		return Number(`${integer}e${Math.abs(precision)}`);
	}
	return Number(`${integer}e-${precision}`);
}

// console.log(floor(0.046, 2))
// console.log(_.floor(0.046, 2))
// console.log(floor(4060, -2))
// console.log(_.floor(4060, -2))


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
	return arr.reduce((total, current) => total + current) / arr.length;
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

//round
function round(number: number, precision = 0): number {
	const integer = Math.round(Number(`${number}e${precision}`));
	if (precision < 0) {
		return Number(`${integer}e${Math.abs(precision)}`);
	}
	return Number(`${integer}e-${precision}`);
}

// console.log(round(4.006, 2));
// console.log(_.round(4.006, 2));


//subtract
function subtract(subtract: number, subtrahend: number): number {
	return subtract - subtrahend;
}

// console.log(subtract(6, 4))
// console.log(_.subtract(6, 4))

//sum
function sum(arr: number[]): number {
	return arr.reduce((total, current) => total + current);
}

// console.log(sum([4, 2, 8, 6]))
// console.log(_.sum([4, 2, 8, 6]))
