// String Global Object is a constructor for strings or a sequence of Characters
// Using a string primitive, typeof(name1) returns string
const name1 = 'Jeff';
// Using the String constructor. typeof(name2) returns object
const name2 = new String('Jeff');

// Strict equality comparison between name2 and 'Jeff' (name2 === 'Jeff') returns false as the type is different

// Number Global Object
// typeof(num1) returns number
const num1 = 5;
// typeof(num2) returns object
const num2 = new Number(5);

// Boolean Global Object
// type boolean
const bool1 = true;
// type object
const bool2 = new Boolean(true);


// Function
// type function, there is no primitive function type
const getSum1 = function (x, y) {
	return x + y;
}
// type function
const getSum2 = new Function('x', 'y', 'return x + y') // Very odd looking syntax


// Object
// type object
const john1 = { name: "John" };
// type object
const john2 = new Object({ name: "John" });


// Arrays
// type object
const arr1 = [1, 2, 3, 4];
// type object
const arr2 = new Array(1, 2, 3, 4);

// Regular Expressions
const re1 = /\w+/; // 1 or more word characters
const re2 = new RegExp('\\w+') // backslash required to escape \