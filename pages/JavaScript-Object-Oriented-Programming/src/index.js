// From https://www.w3resource.com/javascript-exercises/oop/index.php

// 1. Write a JavaScript program to create a class called "Person" with properties for name, 
// age and country. Include a method to display the person's details. Create two instances
// of the 'Person' class and display their details. 
class Person {
    #name;
    #age;
    #country;

    constructor(name, age, country) {
        this.#name = name;
        this.#age = age;
        this.#country = country;
    }

    showDetails() {
        console.log(`Name: ${this.#name}, Age: ${this.#age}, Country: ${this.#country}`);
    }
}

// 2. Write a JavaScript program to create a class called 'Rectangle' with properties for width
// and height. Include two methods to calculate rectangle area and perimeter. Create an instance
// of the 'Rectangle' class and calculate its area and perimeter. 

class Rectangle {
    #width;
    #height;

    constructor(width, height) {
        this.#width = width;
        this.#height = height;
    }

    calculateArea() {
        return this.#width * this.#height;
    }

    calculatePerimeter() {
        return 2 * (this.#width + this.#height);
    }
}

// 3. Write a JavaScript program that creates a class called 'Vehicle' with properties for make,
// model, and year. Include a method to display vehicle details. Create a subclass called 'Car'
// that inherits from the 'Vehicle' class and includes an additional property for the number of
// doors. Override the display method to include the number of doors. 

class Vehicle {
    #make;
    #model;
    #year;
    constructor(make, model, year) {
        this.#make = make;
        this.#model = model;
        this.#year = year;
    }

    showDetails() {
        console.log(`Make: ${this.#make}, Model: ${this.#model}, Year: ${this.#year}`);
    }

    get make() {
        return this.#make;
    }

    get model() {
        return this.#model;
    }

    get year() {
        return this.#year;
    }
}

class Car extends Vehicle {
    #doors;
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.#doors = doors;
    }

    showDetails() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Doors: ${this.doors}`);
    }

    get doors() {
        return this.#doors;
    }
}

// 4. Write a JavaScript program that creates a class called "BankAccount" with properties
// for account number and balance. Include methods to deposit and withdraw money from the
// account. Create some instances of the "BankAccount" class, deposit some money, and
// withdraw a portion of it.

class BankAccount1 {
    #accountNumber;
    #balance;

    constructor(accountNumber, balance) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            console.warn("Invalid amount");
            return;
        } else {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.warn("Invalid amount");
            return;
        } else if (amount > this.#balance) {
            console.warn("Insufficient funds");
            return;
        } else {
            this.#balance -= amount;
        }
    }

    get balance() {
        return this.#balance;
    }

    get accountNumber() {
        return this.#accountNumber;
    }
}

// 5. Write a JavaScript program that creates a class called 'Shape' with a method to
// calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit
// from the 'Shape' class and override the area calculation method. Create an instance
// of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class. 

class Shape {
    calculateArea() {
        return 0;
    }
}

class Circle extends Shape {
    #radius;
    constructor(radius) {
        super();
        this.#radius = radius;
    }

    calculateArea() {
        return Math.PI * this.#radius * this.#radius;
    }
}

class Triangle extends Shape {
    #base;
    #height;
    constructor(base, height) {
        super();
        this.#base = base;
        this.#height = height;
    }

    calculateArea() {
        return 0.5 * this.#base * this.#height;
    }
}

// 6. Write a JavaScript program that creates a class called 'Employee' with properties for
// name and salary. Include a method to calculate annual salary. Create a subclass called
// 'Manager' that inherits from the 'Employee' class and adds an additional property for department.
// Override the annual salary calculation method to include bonuses for managers. Create two
// instances of the 'Manager' class and calculate their annual salary.

class Employee {
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }

    get name() { return this.#name }

    get salary() { return this.#salary }

    calculateAnnualSalary() {
        return this.#salary * 12;
    }
}

class Manager extends Employee {
    #department;
    #bonuses;

    constructor(name, salary, department, bonuses) {
        super(name, salary);
        this.#department = department;
        this.#bonuses = bonuses;
    }

    calculateAnnualSalary() {
        return super.calculateAnnualSalary() + this.#bonuses;
    }

    get department() { return this.#department }

    get bonuses() { return this.#bonuses }
}

// 7. Write a JavaScript program that creates a class `Book` with properties for title,
// author, and publication year. Include a method to display book details. Create a
// subclass called 'Ebook' that inherits from the 'Book' class and includes an additional
// property for book price. Override the display method to include the book price. Create
// an instance of the 'Ebook' class and display its details. 

class Book {
    #title;
    #author;
    #publicationYear;

    constructor(title, author, pubYear) {
        this.#title = title;
        this.#author = author;
        this.#publicationYear = pubYear;
    }

    get title() { return this.#title }

    get author() { return this.#author }

    get publicationYear() { return this.#publicationYear }

    displayDetails() {
        console.log(`title: ${this.title}`)
        console.log(`author: ${this.author}`)
        console.log(`publication year: ${this.publicationYear}`)
    }
}

class Ebook extends Book {
    #bookPrice;

    constructor(title, author, pubYear, bookPrice) {
        super(title, author, pubYear);
        this.#bookPrice = bookPrice;
    }

    get bookPrice() { return this.#bookPrice }

    displayDetails() {
        super.displayDetails();
        console.log(`book price: ${this.bookPrice}`);
    }
}

// 8. Write a JavaScript program that creates a class called 'Animal' with properties
// for species and sound. Include a method to make the animal's sound. Create a subclass
// called 'Dog' that inherits from the 'Animal' class and adds an additional property
// for color. Override the make sound method to include the dog's color. Create an
// instance of the 'Dog' class and make it make its sound. 

class Animal {
    #species;
    #sound;

    constructor(species, sound) {
        this.#species = species;
        this.#sound = sound;
    }

    get species() { return this.#species } 

    get sound() { return this.#sound }

    makeSound() { return this.sound }
}

class Dog extends Animal {
    #color;

    constructor(species, sound, color) {
        super(species, sound);
        this.#color = color;
    }

    get color() { return this.#color }

    makeSound() { return `The ${this.color} dog says ${super.makeSound()}` }
}

// 9. Write a JavaScript program that creates a class called Bank with properties
// for bank names and branches. Include methods to add a branch, remove a branch,
// and display all branches. Create an instance of the Bank class and perform
// operations to add and remove branches. 

class Bank {
    #name;
    #branches = [];

    constructor(name, branches) {
        this.#name = name;
        this.#branches = branches;
    }

    get name() { return this.#name }

    get branches() { return this.#branches }

    displayBranches() {
        console.log(`Current branches in ${this.name}: `);
        for (const branch of this.branches) {
            console.log(branch);
        }
    }

    addBranch(branchName) {
        this.#branches.push(branchName);
        console.log(`Branch ${branchName} added to ${this.name}`);
        this.displayBranches();
    }

    removeBranch(branchName) {
        const index = this.#branches.indexOf(branchName);
        if (index !== -1) {
            this.#branches.splice(index, 1);
            console.log(`Branch ${branchName} removed from ${this.name}`);
            this.displayBranches();
        } else {
            console.log(`Branch ${branchName} not found in ${this.name}`);
        }
    }
}

// 10. Write a JavaScript program that creates a class called Product with properties
// for product ID, name, and price. Include a method to calculate the total price by
// multiplying the price by the quantity. Create a subclass called PersonalCareProduct
// that inherits from the Product class and adds an additional property for the warranty
// period. Override the total price calculation method to include the warranty period.
// Create an instance of the PersonalCareProduct class and calculate its total price. 

class Product {
    #productId;
    #name;
    #price;

    constructor(productId, name, price) {
        this.#productId = productId;
        this.#name = name;
        this.#price = price;
    }

    get productId() { return this.#productId }

    get name() { return this.#name }

    get price() { return this.#price }

    calculateTotalPrice(quantity) {
        return this.price * quantity;
    }
}

class PersonalCareProduct extends Product {
    #warrantyPeriod;

    constructor(productId, name, price, warrantyPeriod) {
        super(productId, name, price);
        this.#warrantyPeriod = warrantyPeriod;
    }

    get warrantyPeriod() { return this.#warrantyPeriod }

    calculateTotalPrice(quantity) {
        console.log(`Total price: ${super.calculateTotalPrice(quantity)}`);
        console.log(`Warranty period: ${this.warrantyPeriod}`);
    }
}

// 11. Write a JavaScript program that creates a class called BankAccount with properties
// for account number, account holder name, and balance. Include methods to deposit, withdraw,
// and transfer money between accounts. Create multiple instances of the BankAccount class
// and perform operations such as depositing, withdrawing, and transferring money. 

class BankAccount2 {
    #accountNumber;
    #accountHolderName;
    #balance;

    constructor(accountNumber, accountHolderName, balance) {
        this.#accountNumber = accountNumber;
        this.#accountHolderName = accountHolderName;
        this.#balance = balance;
    }

    get accountNumber() { return this.#accountNumber }

    get accountHolderName() { return this.#accountHolderName }

    get balance() { return this.#balance }

    set balance(value) {
        this.#balance = value;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        } 
        
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero");
        }

        if (amount > this.balance) {
            throw new Error("Insufficient funds to complete withdrawal");
        }

        this.balance -= amount;
    }

    transfer(destinationAccount, amount) {
        if (amount <= 0 || amount > this.balance) {
            throw new Error("Invalid amount");
        }
        this.withdraw(amount);
        destinationAccount.deposit(amount);
        console.log(`Transferred ${amount} from ${this.accountHolderName} to ${destinationAccount.accountHolderName}`);
        console.log(`New balance for ${this.accountHolderName}: ${this.balance}`);
        console.log(`New balance for ${destinationAccount.accountHolderName}: ${destinationAccount.balance}`);
    }
}

// This is a remake where I just test using static methods

class BankAccount3 {
    static transfer(originAcc, destAcc, amount) {
        if(amount <= 0 || amount > originAcc.balance) {
            throw new Error("Invalid amount");
        }
        originAcc.withdraw(amount);
        destAcc.deposit(amount);
        console.log(`Transferred ${amount} from ${originAcc.accountHolderName} to ${destAcc.accountHolderName}`);
        console.log(`New balance for ${originAcc.accountHolderName}: ${originAcc.balance}`);
        console.log(`New balance for ${destAcc.accountHolderName}: ${destAcc.balance}`);
    }

    #accountNumber;
    #accountHolderName;
    #balance;

    constructor(accountNumber, accountHolderName, balance) {
        this.#accountNumber = accountNumber;
        this.#accountHolderName = accountHolderName;
        this.#balance = balance;
    }

    get accountNumber() { return this.#accountNumber }

    get accountHolderName() { return this.#accountHolderName }

    get balance() { return this.#balance }

    set balance(value) {
        this.#balance = value;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        } 
        
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be greater than zero");
        }

        if (amount > this.balance) {
            throw new Error("Insufficient funds to complete withdrawal");
        }

        this.balance -= amount;
    }
}

// 12. Write a JavaScript program that creates a class called University with
// properties for university name and departments. Include methods to add a
// department, remove a department, and display all departments. Create an
// instance of the University class and add and remove departments. 

class University {
    #universityName;
    #departments = [];

    constructor(universityName) {
        this.#universityName = universityName;
    }

    get departments() { return this.#departments }

    set departments(value) {
        this.#departments = value;
    }

    get universityName() { return this.#universityName }

    displayDepartments() {
        console.log("Departments:");
        for (const department of this.departments) {
            console.log(department);
        }
    }
    
    addDepartment(department) {
        this.departments.push(department);
        this.displayDepartments();
    }

    removeDepartment(department) {
        const index = this.departments.indexOf(department);
        if (index !== -1) {
            this.departments.splice(index, 1);
        }
        this.displayDepartments();
    }
}