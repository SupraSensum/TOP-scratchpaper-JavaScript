// Following this tutorial:
// https://javascript.info/property-accessors

let user = {
   name: "John",
   surname: "Smith",

   get fullName() {
      return `${this.name} ${this.surname}`;
   },
};

console.log(user.fullName); // John Smith

user.fullName = "Patrick Blackmore"; // Only works if setter exists

console.log(user.fullName); // John Smith

// 
// So let's add the setter
// 

let user2 = {
   name: "John",
   surname: "Smith",

   get fullName() {
      return `${this.name} ${this.surname}`;
   },

   set fullName(value) {
      [this.name, this.surname] = value.split(" ");
   },
};

console.log(user2.fullName); // John Smith

user2.fullName = "Patrick Blackmore"; // Only works if setter exists

console.log(user2.fullName); // John Smith
