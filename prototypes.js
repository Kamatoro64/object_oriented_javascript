// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {

	this.firstName = firstName;
	this.lastName = lastName;
	this.birthday = new Date(dob);
	/*
	this.calculateAge = function () {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	*/
}

// Adding methods to the Prototype property

// When a function (constructor) is created in JavaScript JavaScript engine adds a prototype property to the function.
// This prototype property is an object (called a prototype object) which has a constructor property by default.
// The constructor property points back tp the function on which prototype object is a property

// Calculate age
Person.prototype.calculateAge = function () {
	const diff = Date.now() - this.birthday.getTime();
	const ageDate = new Date(diff);
	return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function () {
	return `${this.firstName} ${this.lastName}`;
}

// Gets married (Object data manipulation)
Person.prototype.getsMarried = function (newLastName) {
	this.lastName = newLastName;
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary.calculateAge());


console.log(mary.getFullName());
mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));

// Since this method was added to the prototype object, even though we can access it it is not a property of the Person constructor
console.log(mary.hasOwnProperty('getFullName'));