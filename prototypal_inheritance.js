// Person constructor
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
	return `Hello there ${this.firstName} ${this.lastName}`
}

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
	Person.call(this, firstName, lastName);
	this.phone = phone;
	this.membership = membership;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Customer greeting
Customer.prototype.greeting = function () {
	return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}

const person1 = new Person('John', 'Doe');
console.log(person1);
console.log(person1.greeting());

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);
console.log(customer1.greeting()); 