// Constructor functions technically are regular functions
// But they should be executed with new keyword.

// When a function is executed with new, it does the following:
//  1. A new empty object is created and assigned to <this>.
//  2. The function body executes. Usually it modifies <this>
//     adds new properties to it.
//  3. The value of <this> is returned.

// Example 1
function Person(firstName, lastName) {
  // this = {}; (implicilty)
  this.firstName = firstName;
  this.lastName = lastName;
  // return this; (implicitly)
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia); // Person { firstName: 'Lydia', lastName: 'Hallie' }
console.log(sarah); // undefined

// Example 2
function User() {
  console.log(new.target);
}

const A = new User(); // [Function: User]
const B = User(); // undefined

// Example 3
function UserWithCheck() {
  // you run without new
  if (!new.target) {
    return new UserWithCheck(); // I will add it for you
  }
}

console.log(new UserWithCheck()); // UserWithCheck {}
console.log(UserWithCheck()); // UserWithCheck {}

// Usually, constructors do not have a return statement.
// Their task is to write all necessary stuff into <this>,
// and it automatically becomes the result.
// But if there is a return statement, then the rule is simple:
//    1. If return is called with an object, then the object
//       is returned instead of <this>.
//    2. If return is called with a primitive, it's ignored.

// Example 4
function Name() {
  this.name = "Ishan";
  return { name: "Ishan Shukla" };
}

console.log(new Name);
console.log(new Name());

// Example 5
function Greet(name){
  this.name = name;
  this.sayHi = function(){
    console.log(`Hello ${this.name}`);
  }
}

let E = new Greet("Sam");
E.sayHi();