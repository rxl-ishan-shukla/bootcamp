/*
JavaScript is a lightweight, interpreted or just in time compiled 
Programming language with first-class functions. It is a prototype-based,
multi-paradigm, single-threaded, dynamic language, supporting object-
oriented, and declarative styles.

First-Class Function: A language is said to have First-Class functions
when function in that language are treated like any other variable.
*/

// Assigning a function to a variable
// Here an anonymous function is assigned in a variable
const foo = () => {
  console.log("foobar");
};
foo();

// Passing a function as an argument
function printHello() {
  return "Hello, ";
}

// A function that returns a function or takes other functions as
// arguments is called a higher-order function.
function greet(prefix, name) {
  console.log(prefix() + name);
}

greet(printHello, "Ishan");
