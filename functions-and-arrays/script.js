// console.log('functions');

// function declaration - this is hoisted
// function greet() {
// 	console.log('this is the greet function');
// }


// function expression
// const greet = function () {
// 	console.log('this is the greet function');
// }

// greet();

function greet(greeting, name) {
	// const str = greeting + ' ' + name + '!'
	// return str

	return greeting + ' ' + name + '!'
}

const greeting = 'hi';
const name = 'katka'

const message = greet(greeting, name);

console.log(message);


function sum(a, b) {
	// const res = a + b;
	// return res
	return a + b
}

const result = sum(3, 5); // -> 8
console.log(result)

console.clear();


// Arrays - an ordered collection of different values

const numbers = [1, 2, 3, 4, 5];
// console.log(numbers[1]);

const empty = [];

empty[0] = 'a';
empty[5] = 'b';
console.log(empty.length) // -> 6

console.clear();

const chars = [];
// push -> adds elements to the end of the array
chars.push('x');
const l = chars.push('y'); // -> returns the length
console.log(l)
// pop() -> removes an element from the end of the array
const removedElement = chars.pop()
console.log(removedElement);
console.log(chars)

// adding and removing elements from the beginning of the array
// undhift() and shift()
chars.unshift('j');
chars.shift('j');

console.log(chars)
const letters = ['f', 'g', 'h'];
console.log(letters.indexOf('x'))
console.clear()

// splice()
const countries = ['usa', 'france', 'uruguay', 'england', 'poland'];
countries.splice(1, 1, 'spain');
console.log(countries);

console.clear()
// write a function that gets the countries array and 
// removes all countries starting with 'u'
function filterCountries(arr) {
	// create the result array
	const filtered = []
	// iterate over countries
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i][0])
		// check if the country we are at starts with a 'u'
		if (arr[i][0] === 'u') {
			// if yes add this country to the result array
			filtered.push(arr[i])
		}
	}
	// return the result array
	return filtered

}
const filteredArray = filterCountries(countries)
console.log(filteredArray)