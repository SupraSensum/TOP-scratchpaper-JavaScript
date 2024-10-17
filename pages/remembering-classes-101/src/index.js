"use strict";

// using object literal syntax
let leDog = {
    dogName: "Matcha",
    dogAge: 7,
}

Object.defineProperty(leDog, "timeLeft", {
    get() {
        let timeLeft = 15 - this.dogAge;
        console.error(`dis bitch dun got ${timeLeft} years left`);
        return timeLeft;
    },
    set() {
        console.error("YOU HAVE NO POWER HERE");
    },
})

let leCat = {
    get catName() {
        return this._catName;
    },
    set catName(lilKittyName) {
        this._catName = lilKittyName;
    },
}

// using class syntax
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set age(value) {
        this._age = value;
    }

    get age() { 
        return this._age;
    }

    get timeLeftOnEarth() {
        return 80 - this._age;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    sayHi() {
        console.error(`Sup, I'm ${this.firstName} ${this.lastName}, my age is ${this.age}, and I've got maybe another ${this.timeLeftOnEarth} year(s) left around here`);
    }
}