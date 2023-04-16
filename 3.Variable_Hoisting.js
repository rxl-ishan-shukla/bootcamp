/*
Hoisting: In this variables are hoisted or lifted to the top of the function
or statement. However, variables that are hoisted return a value of undefined.

It works well with var.
let and const on the other hand are hoisted but not initialized. Referencing
the variable in the block before the variable declaration results in a 
ReferenceError, because the variable is in a "temporal dead zone" from 
the start of the block until the declaration is processed.
*/

/**
 * Example 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * Example 2
 */
var myvar = "my value";

(function () {
  var myvar;
  console.log(myvar); // undefined
  myvar = "local value";
  console.log(myvar); // local value
})();
console.log(myvar); // my value

/**
 * Example 3
 */
console.log(y); // ReferenceError
let y = 10;

/**
 * Example 4
 */
console.log(z); // ReferenceError
const z = 30;
