const _ = require('lodash'); //need for tests

//chunk
function chunk(arr: Array<any>, size: number): Array<any> {
	if (size >= arr.length) {
		return [arr];
	} else if (size <= 0) {
		return [];
	} else {
		let res = [];
		while (arr.length > size) {
			let a = [];		
			for(let i = 0; i < size; i++) {
				a.push(arr.shift());
			}
			res.push(a);
		}
		if (arr.length && arr.length <= size) {
			return [...res, arr];
		} 
		return res;
	}
}

// console.log(chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2))
// console.log(_.chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2))

//compact
const compact = (arr: Array<any>):Array<any> => arr.filter(item => item);

// console.log(compact([0, 1, false, 2, '', 3]))
// console.log(_.compact([0, 1, false, 2, '', 3]))

//concat
function concat(arr: Array<any>, ...values: any): Array<any> {
	let res = [];
	for (let key in arguments) {
		if (Array.isArray(arguments[key])) {
			res.push(...arguments[key]);
		} else {
			res.push(arguments[key]);
		}
	}
	res.shift();
	return [...arr, ...res];
}

// const array = [1];
// console.log(concat(array, 2, [3], [[4]]));
// console.log(_.concat(array, 2, [3], [[4]]));

//difference
function difference(arr: Array<any>, values: Array<any>): Array<any> {
 	let res = [];
	arr.forEach(item => {
	    	!values.find(elem => elem === item) ? res.push(item) : null;
	    }
  	);
	return res;
}

// console.log(difference([2, 1, 4, 4], [2, 3]))
// console.log(_.difference([2, 1, 4, 4], [2, 3]))

//drop
function drop(arr: Array<any>, n: number = 1): Array<any> {
	arr.splice(0, n);
	return arr;
}

// console.log(drop([1, 2, 3, 4], 2))
// console.log(_.drop([1, 2, 3, 4], 2))

//dropRight
function dropRight(arr: Array<any>, n: number = 1): Array<any> {
	return arr.slice(0, -n);
}

// console.log(dropRight([1, 2, 3]))
// console.log(_.dropRight([1, 2, 3]))

//fill
function fill(
	arr: any[],
	value: any, 
	start: number = 0, 
	end: number = arr.length)
: any[] {
	return arr.map((elem, i) => i >= start && i < end ? value : elem);
}

// console.log(fill([4, 6, 8, 10], '*', 1, 3))
// console.log(_.fill([4, 6, 8, 10], '*', 1, 3))

//head
function head(arr: any[]): any {
	return arr[0];
}

// console.log(head([1, 2, 3]))
// console.log(_.head([1, 2, 3]))

//flatten
function flatten(arr: any[]): any[] {
	let res = [];
	arr.forEach(elem => {
		Array.isArray(elem) ? res.push(...elem) : res.push(elem);
	});
	return res;
}

// console.log(flatten([1, [2, [3, [4]], 5]]))
// console.log(_.flatten([1, [2, [3, [4]], 5]]))

//flattenDeep
function flattenDeep(arr: any[]): any[] {
	let res = [];
	function deep(elem) {
		elem.forEach(i => {
			Array.isArray(i) ? deep(i) : res.push(i);
		});
	}
	deep(arr);
	return res;
}

// console.log(flattenDeep([1, [2, [3, [4]], 5]]))
// console.log(_.flattenDeep([1, [2, [3, [4]], 5]]))

//indexOf
function indexOf(arr: any[], value: any, fromIndex: number = 0): number {
	let res = -1;
	for (let i = fromIndex; i < arr.length; i++) {
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
function initial (arr: any[]): any[] {
	arr.splice(arr.length - 1, 1);
	return arr;
}

// console.log(initial([1, 2, 3]));
// console.log(_.initial([1, 2, 3]));

//intersection
function intersection(...arr: any[]): any[] {
	const checkArr = [];
	let res =[];
	for(let i = 1; i < arguments.length; i++) {
		checkArr.push(...arguments[i]);
	}
	arguments[0].forEach(item => {
		if (checkArr.includes(item)) res.push(item);
	})
	return res;
}

// console.log(intersection([2, 1], [2, 3]))
// console.log(_.intersection([2, 1], [2, 3]))

//join
function join(arr: any[], separator: string = ','): string {
	let res = '';
	arr.forEach(item => {
		res += (item + separator);
	})
	return res.slice(0, -1);
}

// console.log(join(['a', 'b', 'c'], '~'))
// console.log(_.join(['a', 'b', 'c'], '~'))