let user = {
   name: "John",
   surname: "Smith",

   get fullName() {
      return `${this.name} ${this.surname}`;
   }
};

console.log(user.fullName); // John Smith

user.fullName = "Patrick Blackmore"; // error since setter not yet created