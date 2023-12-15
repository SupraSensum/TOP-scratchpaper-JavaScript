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

// Make classes dynamically
console.log("First, we create a factory function that dynamically creates classes");
function makeClass(phrase) {
   return class {
      sayHi() {
         console.log(phrase);
      }
   };
}

console.log("Then, we create a kind class");
const KindUser = makeClass("Why, hello there!");
console.log("And a rude class");
const RudeUser = makeClass("Fuck you want?");

console.log("And from the kind class we create a kind user");
const StPete = new KindUser();
console.log("and a rude user from the rude class");
const Patrick = new RudeUser();

console.log("Let's see what they have to say...");
console.log("St. Pete says:");
StPete.sayHi();
console.log("Patrick says:");
Patrick.sayHi();

// Alright, now let's test with setters and getters

class User_withSetGet {

   constructor(name) {
      // invokes the setter
      this.name = name;
   }

   get name() {
      return this._name;
   }

   set name(value) {
      if (value.length < 4) {
         console.log("Name is too short.");
         return;
      }
      this._name = value;
   }

}

let user_withSetGet = new User_withSetGet("John");
console.log(user_withSetGet.name); // John

user_withSetGet = new User_withSetGet(""); // Name is too short.

// Now let's practice using the tasks at the bottom of that article

// This is the original, and I need to format it into "class" syntax
function Clock({ template }) {

   let timer;

   function render() {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = template
         .replace('h', hours)
         .replace('m', mins)
         .replace('s', secs);

      console.log(output);
   }

   this.stop = function () {
      clearInterval(timer);
   };

   this.start = function () {
      render();
      timer = setInterval(render, 1000);
   };

}

let clock = new Clock({ template: 'h:m:s' });
clock.start();

// Here's my attempt... TBD

class Clock {
   constructor({ template }) {
      this.render(template);
   }

   render({ template }) {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = template
         .replace('h', hours)
         .replace('m', mins)
         .replace('s', secs);

      console.log(output);
   }

   

   this.stop = function () {
      clearInterval(timer);
   };

   this.start = function () {
      render();
      timer = setInterval(render, 1000);
   };
}