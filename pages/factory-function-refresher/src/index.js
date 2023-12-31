// Just goofing

// 
// Here's our first factory function with a private variable
// 

function createUser(name) {
   const discordName = "@" + name;

   let reputation = 0;
   const getReputation = () => reputation;
   const giveReputation = () => reputation++;

   return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
   discordName: josh.discordName,
   reputation: josh.getReputation()
});
// logs { discordName: "@josh", reputation: 2 }

// 
// But what if we don't need more than a single instance of a particular,
// but we still want the advantages of private variables and whatnot?
// 
// Enter, the module pattern!
// 
// To create it, we simply wrap a factory function inside of an IIFE
// 
// Behold, le calcuhlaeyteur
// 

// Here's our factory function
const old_calculator = function () {
   const add = (a, b) => a + b;
   const sub = (a, b) => a - b;
   const mul = (a, b) => a * b;
   const div = (a, b) => a / b;

   return {
      add,
      sub,
      mul,
      div
   };
};

// And here's our final version of it wrapped in a purty lil IIFE, turning it
// into a module pattern!
// 
// While this particular module pattern doesn't implement any private variables
// or functions, it could. And if we did, we would then be leveraging
// `encapsulation`, which then enables `namespacing` to avoid naming collisions.
// Very handy.
// 
// Expanding on the previous point, and ripping directly from the lesson:
// It’s very easy to imagine a scenario where you can accidentally create
// multiple functions with the name `add`. What does `add` do - does it simply add
// two numbers? Strings? Does it take its input directly from the DOM and
// display the result? What would you name the functions that do these things?
// Instead, we can easily encapsulate them inside a module called `calculator`
// which generates an object with that name, allowing us to explicitly call
// `calculator.add(a, b)` or `calculator.sub(a, b)`.
const calculator = (function () {
   const add = (a, b) => a + b;
   const sub = (a, b) => a - b;
   const mul = (a, b) => a * b;
   const div = (a, b) => a / b;

   return {
      add,
      sub,
      mul,
      div
   };
})();

// 
// Quick practice following this tutorial on closure:
// https://youtu.be/80O6L2Ez3GM?si=BTasd2XGws8Amb0x
// 
// We're going to check out how we can use closures to protect data from manipulation.
// In the example below, `points` is vulnerable to manipulation
// 
let points = 0;

let score = function() {
   points++;

   return points;
}

console.log(score());
console.log(score());
console.log(score());

points += 100; // Manipulating/attacking the variable to hack a fake score

console.log(score());
console.log(score());
console.log(score());

// Keeping the points variable effectively global opens it up to "attack".
// So, let's make it private by implementing a closure

let scoreNew = function() {
   let pointsNew = 0;

   return function() {
      pointsNew++;

      return pointsNew;
   }
}(); // Remember, this needs to be immediately invoked

console.log(scoreNew());
console.log(scoreNew());
console.log(scoreNew());

// pointsNew += 100; // Will cause error since variable has been made private

console.log(scoreNew());
console.log(scoreNew());
console.log(scoreNew());