// Let's create a class using everything (or as much as we can recall) we've learned so far, just for shits 'n giggles

// What's this class gonna be about? Well, let's use something we're familiar with: people

// A person has:
class Person {
   constructor(name, dob, nationality) {
      this.name = name;
      this.dob = dob;
      this.nationality = nationality;
   }

   set name(value) {
      if (value.length < 4) {
         console.log("Name must be at least 4 characters");
         return;
      }
      
      this._name = value;
   }

   get name() {
      return this._name;
   }
}