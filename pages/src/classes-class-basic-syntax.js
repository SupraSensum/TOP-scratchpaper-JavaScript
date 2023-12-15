// Following this lesson:
// https://javascript.info/class

// No comma between class methods
// 
// A common pitfall for novice developers is to put a comma between class methods, which would result in a syntax error.
// The notation here is not to be confused with object literals.Within the class, no commas are required.
class User {
   constructor(name) {
      this.name = name;
   }

   sayHi() {
      console.log(`Hi, I'm ${this.name}`);
   }
}

let user = new User ("John");
user.sayHi();

// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
let User_namedClassExpression = class MyClass {
   sayHi() {
      console.log(MyClass); // MyClass name is visible only inside the class
   }
};

let user_namedClassExpression = new User_namedClassExpression()
user_namedClassExpression.sayHi(); // works, shows MyClass definition

// console.log(MyClass); // error, MyClass name isn't visible outside of the class