const _ = require('lodash'); //need for tests

///////////////ARRAY

//chunk
function chunk(arr: any[], size: number): any[] {
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
const compact = (arr: any[]):any[] => arr.filter(item => item);

// console.log(compact([0, 1, false, 2, '', 3]))
// console.log(_.compact([0, 1, false, 2, '', 3]))

//concat
function concat(arr: any[], ...values: any): any[] {
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
function difference(arr: any[], values: any[]): any[] {
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
function drop(arr: any[], n: number = 1): any[] {
	arr.splice(0, n);
	return arr;
}

// console.log(drop([1, 2, 3, 4], 2))
// console.log(_.drop([1, 2, 3, 4], 2))

//dropRight
function dropRight(arr: any[], n: number = 1): any[] {
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

//last
const last = (arr: any[]): any => arr[arr.length - 1];

// console.log(last([1, 2, 3]))
// console.log(_.last([1, 2, 3]))

//nth
function nth(arr: any[], n: number = 0): any {
	if (n >= 0) {
		return arr[n];
	} else {
		return arr[arr.length - Math.abs(n)];
	}
}

// console.log(nth([1, 2, 3, 8, 12], -2))
// console.log(nth([1, 2, 3, 8, 12]))
// console.log(_.nth([1, 2, 3, 8, 12], -2))
// console.log(_.nth([1, 2, 3, 8, 12]))

//pull
function pull(arr: any[], ...values: any): any[] {
	const res = [];
	arr.forEach(item => {
		if (![...values].includes(item)) {
			res.push(item);
		}
	})
	return res;
}

// const array = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log(pull(array, 'a', 'c'))
// console.log(_.pull(array, 'a', 'c'))

//pullAll
function pullAll(arr: any[], values: any[]): any[] {
	const res = [];
	arr.forEach(item => {
		if (! values.includes(item)) {
			res.push(item);
		}
	})
	return res;
}

// const array = ['a', 'b', 'c', 'a', 'b', 'c'];
// console.log(pullAll(array, ['a', 'c']))
// console.log(_.pullAll(array, ['a', 'c']))


//pullAt
function pullAt(arr: any[], values: number | number[] ): any[] {
	const res = [];
	let i = 0;
	Array.isArray(values) ? values : values = [values];
	values.forEach(item => {
		const n = arr.splice(item - i, 1);
		res.push(...n);
		i++;
	})
	return res;
}

// const array = ['a', 'b', 'c', 'd']
// const array2 = ['a', 'b', 'c', 'd']
// const pulled = pullAt(array, [1, 3])
// const pulled2 = _.pullAt(array2, [1, 3])
// console.log(array, pulled)
// console.log(array2, pulled2)


//remove
function remove(arr: any[], func: (...any) => boolean): any[] {
	const res = [];
	arr.forEach((item, index, arr) => {
		if (func(item, index, arr)) {
			const x = arr.splice(index, 1);
			res.push(...x);
		}
	})
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
const reverse = (arr: any[]): any[] => arr.reverse();

// const arr = [1, 2, 3]
// const arr2 = [1, 2, 3]
// console.log(reverse(arr), arr)
// console.log(_.reverse(arr2), arr2)

//slice
function slice(arr: any[], start: number = 0, end: number = arr.length): any[] {
	return arr.slice(start, end);
}

// const arr = [1, 2, 3, 4, 5, 6]
// console.log(slice(arr, 1, 3))
// console.log(_.slice(arr, 1, 3))

//sortedIndex
function sortedIndex(arr: any[], value: any): number {
	let pos = -1;
	arr.forEach((item, index) => {
		if (item >= value && pos < 0) {
			pos = index;
		}
	});
	return pos;
}

// console.log(sortedIndex([30, 50], 40))
// console.log(_.sortedIndex([30, 50], 40))

//sortedIndexOf
function sortedIndexOf(arr: any[], value: any): number {
	let pos = -1;
	arr.forEach((item, index) => {
		if (item === value && pos < 0) {
			pos = index;
		}
	})
	return pos;
}

// console.log(sortedIndexOf([4, 5, 5, 5, 6], 5))
// console.log(_.sortedIndexOf([4, 5, 5, 5, 6], 5))

//sortedLastIndex
function sortedLastIndex(arr: any[], value:any): number {
	let pos = null;
	arr.forEach((item, index) => {
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
function sortedLastIndexOf(arr: any[], value: any): number {
	let pos = -1;
	arr.forEach((item, index) => {
		if (item === value) {
			pos = index;
		}
	});
	return pos;
}

// console.log(sortedLastIndexOf([4, 5, 5, 5, 6], 5))
// console.log(_.sortedLastIndexOf([4, 5, 5, 5, 6], 5))

//sortedUniq
function sortedUniq(arr: any[]): any[] {
	const res = [];
	arr.forEach(item => {
		if (!res.includes(item)) {
			res.push(item);
		}
	})
	return res;
}

// console.log(sortedUniq([1, 1, 2]))
// console.log(_.sortedUniq([1, 1, 2]))

//sortedUniqBy
function sortedUniqBy(arr: any[], func: (item: any) => any): any[] {
	const res = [];
	const check = [];
	arr.forEach(item => {
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
const tail = (arr: any[]): any[] => arr.slice(1, arr.length);

// console.log(tail([1, 2, 3]))
// console.log(_.tail([1, 2, 3]))

//take
const take = (arr: any[], n: number = 1): any[] => arr.slice(0, n);

// console.log(take([1, 2, 3], 2))
// console.log(_.take([1, 2, 3], 2))

//takeRight
const takeRight = (arr: any[], n: number = 1): any[] => arr.slice(-n);

// console.log(takeRight([1, 2, 3], 2))
// console.log(_.takeRight([1, 2, 3], 2))

//union
function union(...arr: any[]): any[] {
	const res = [];
	const all = [];
	arr.forEach(item => {
		all.push(...item)
	});
	all.forEach(item => {
		if (!res.includes(item)) {
			res.push(item);
		}
	});
	return res;
}

// console.log(union([2], [1, 2]))
// console.log(_.union([2], [1, 2]))

//uniq
function uniq (arr: any[]): any[] {
	const res = [];
	arr.forEach(item => {
		if (!res.includes(item)) {
			res.push(item);
		}
	});
	return res;
}

// console.log(uniq([2, 1, 2]))
// console.log(_.uniq([2, 1, 2]))

//uniqBy
function uniqBy (arr: any[], func: Function): any[]  {
	const res = [];
	const check = [];
	arr.forEach(item => {
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
function zip (...arr: any[]): any[] {
	const res = [];
	let max = 0;
	arr.forEach(item => {
		if (item.length > max) {
			max = item.length;
		}
	});
	for (let i = 0; i < max; i++) {
		const a = [];
		arr.forEach(item => {
			a.push(item[i]);
		})
		res.push(a);
	}
	return res;
}

// console.log(zip(['a', 'b'], [1, 2, 3], [true, false, 3]))
// console.log(_.zip(['a', 'b'], [1, 2, 3], [true, false, 3]))

//unzip
function unzip (...arr: any[]): any[] {
	const res = [];
	let max = 0;
	arr[0].forEach(item => {
		if (item.length > max) {
			max = item.length;
		}
	});
	for (let i = 0; i < max; i++) {
		const a = [];
		arr[0].forEach(item => {
			a.push(item[i]);
		})
		res.push(a);
	}
	return res;
}

// const zipped = zip(['a', 'b'], [1, 2], [true, false])
// console.log(unzip(zipped))
// console.log(_.unzip(zipped))

//without
function without(arr: any[], ...values: any): any[] {
	const res = [];
	arr.forEach(item => {
		if (!values.includes(item)) {
			res.push(item)
		}
	});
	return res;
}

// console.log(without([2, 1, 2, 3], 1, 2))
// console.log(_.without([2, 1, 2, 3], 1, 2))

//xor
function xor(...arr: any[]): any[] {
	const all = [];
	const res = [];
	const check = [];
	const repeat = [];

	arr.forEach(el => {
		all.push(...el);
	});

	all.forEach((el, i) => {
		if (!check.includes(el)) {
			check.push(el);
		} else {
			repeat.push(el);
		}
	});

	all.forEach(el => {
		if(!repeat.includes(el)) {
			res.push(el);
		}
	});

	return res;
}

// console.log(xor([2, 1], [2, 3]))
// console.log(_.xor([2, 1], [2, 3]))

//zipObject
function zipObject (props: any[], values: any[]): Object {
	const entries = [];
	props.forEach((el, i) => {
		entries.push([props[i], values[i]]);
	});

	return Object.fromEntries(entries);;
}

// console.log(zipObject(['a', 'b'], [1, 2]));
// console.log(_.zipObject(['a', 'b'], [1, 2]));


///////////////////////////STRINGS

//capitalize
function capitalize(str: string):string {
	const first = str.charAt(0).toUpperCase();
	const slised = str.slice(1).toLowerCase();

	return first + slised
}

// console.log(capitalize('FRED'))
// console.log(_.capitalize('FRED'))

//endsWith
function endsWith(str: string, target: string, pos: number = str.length): boolean {
	return str[pos - 1] === target ? true : false;
}

// console.log(endsWith('abc', 'c'))
// console.log(_.endsWith('abc', 'c'))

//lowerFirst
function lowerFirst(str: string): string {
	const first = str.charAt(0).toLowerCase();
	const slised = str.slice(1).toUpperCase();

	return first + slised;
}

// console.log(lowerFirst('FRED'))
// console.log(_.lowerFirst('FRED'))

//repeat
function repeat (str: string, n: number = 1): string {
	let res = '';
	for (let i = 0; i < n; i++) {
		res += str;
	}
	return res;
}

// console.log(repeat('abc', 2))
// console.log(_.repeat('abc', 2))

//replace
function replace(
	str: string = '', 
	pat: string, 
	repl: string | Function
	): string {

	const index = str.indexOf(pat);
	const len = pat.length;

	let newStr = str.slice(0, index);
	newStr += repl;
	newStr += str.slice(index + len, str.length);

	return newStr;
}

// console.log(replace('Hi Fred', 'Fred', 'Barney'))
// console.log(_.replace('Hi Fred', 'Fred', 'Barney'))

//split
function split (str: string, separator: string, limit: number = str.length): any[] {
	const res = [];
	let elem = '';
	for (let i = 0; i <= str.length && res.length <= limit; i++) {
		if (str[i] === separator || i === str.length) {
			res.push(elem);
			elem = '';
		} else {
			elem += str[i];
		}
	}
	return res;
}

// console.log(_.split('-helo-fjeij---fef', '-', 3));
// console.log(split('-helo-fjeij---fef', '-', 3));