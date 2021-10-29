import _ from 'lodash'; //need for tests

//capitalize
function capitalize(str: string):string {
	const first = str.charAt(0).toUpperCase();
	const slised = str.slice(1).toLowerCase();

	return first + slised
}

// console.log(capitalize('FRED'))
// console.log(_.capitalize('FRED'))

//endsWith
function endsWith(str: string, target: string, pos = str.length): boolean {
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
function repeat (str: string, n = 1): string {
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
function split (str: string, separator: string, limit = str.length): any[] {
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

//startsWith
function startsWith(str: string, target: string, pos = 0): boolean {
	return str[pos] === target ? true : false;
}

// console.log(startsWith('abc', 'b'))
// console.log(startsWith('abc', 'b', 1))
// console.log(_.startsWith('abc', 'b'))
// console.log(_.startsWith('abc', 'b', 1))

//toLower
const toLower = (str:string): string => str.toLowerCase();

// console.log(toLower('--Foo-Bar--'))
// console.log(_.toLower('--Foo-Bar--'))

//toUpper
const toUpper = (str: string): string => str.toUpperCase();

// console.log(toUpper('__foo_bar__'))
// console.log(_.toUpper('__foo_bar__'))

//trim
function trim(str: string, chars = ' '): string {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if (!chars.includes(str[i])) {
			newStr += str[i];
		}
	}
	return newStr;
}

// console.log(trim('-_-abc-_-', '_-'))
// console.log(_.trim('-_-abc-_-', '_-'))

//trimEnd
function trimEnd(str: string, chars = ' '): string {
	let newStr = str;
	for (let i = str.length - 1; i > 0; i--) {
		if (chars.includes(str[i])) {
			newStr = str.slice(0, i);
		} else {
      		return newStr;
    	}
	}
	return newStr;
}

// console.log(trimEnd('str---', '-'))
// console.log(_.trimEnd('str---', '-'))

//trimStart
function trimStart(str: string, chars = ' '): string {
	let newStr = str;
	for (let i = 0; i < str.length; i++) {
		if (chars.includes(str[i])) {
			newStr = str.slice(i + 1, str.length);
		} else {
      		return newStr;
    	}
	}
	return newStr;
}

// console.log(trimStart('-_-_-abc-_-', '_-'))
// console.log(_.trimStart('-_-_-abc-_-', '_-'))

//truncate
function truncate(str = '', {
	length = 30, 
	omission = '...', 
	separator = ''
}): string {
	let newStr = str;
	if (str.length > length) {
		newStr = str.slice(0, length - omission.length);
		if (separator.length) newStr = newStr.slice(0, newStr.lastIndexOf(separator))
		newStr += omission;
	}
	return newStr;
}

// console.log(_.truncate('hi-diddly-ho there, neighborino', {'length': 18, 'separator': ' '}))
// console.log(_.truncate('hi-diddly-ho there, neighborino', {'length': 18}))
// console.log(truncate('hi-diddly-ho there, neighborino', {'length': 18, 'separator': ' '}))
// console.log(truncate('hi-diddly-ho there, neighborino', {'length': 18}))

//upperFirst
function upperFirst(str = ''): string {
	const first = str.charAt(0).toUpperCase();
	const slised = str.slice(1);

	return first + slised;
}

// console.log(upperFirst('fred'))
// console.log(upperFirst('FRED'))
// console.log(_.upperFirst('fred'))
// console.log(_.upperFirst('FRED'))