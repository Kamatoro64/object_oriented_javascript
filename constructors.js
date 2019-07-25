// Person constructor
function Person(name, dob) {

	// Pay attention to the this keyword. this refers to the current instance of an object
	this.name = name;

	// We are using the built in Date constructor
	this.birthday = new Date(dob);

	// A method is function in an object
	this.calculateAge = function () {
		// Both Date.now() and getTime() returns milliseconds since 1 January 1970 00:00:00 so diff is in milliseconds
		const diff = Date.now() - this.birthday.getTime();

		// Construct a date based on this millisecond difference
		const ageDate = new Date(diff);

		// Get the year of the constructed date and subtrace 1970 from it
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

}

// Construct a Person objects and pass in the date of birth
const brad = new Person('Brad', '9-10-1981');

// Call the calculateAge() method
console.log(brad.calculateAge());
