/*
Literals represent values in JavaScript. These are fixed values not
variables.
*/

// 1. Array Literals

const color = ["red", "blue", "green"];
const caught = ["Lion", , "Tiger"];
// In the above example note that the second item is "empty",
// which is not exactly the same as the actual undefined value.
// When using array-traversing methods like Array.prototype.map,
// empty slots are skipped. However, index-accessing caught[1] still
// returns undefined.

const cars = ["Audi", "BMW", "Bentley"];
// In the above example note that there is a trailing comma at the end
// of the list of elements, the comma is ignored.

console.log(color);      // [ 'red', 'blue', 'green' ]
console.log(caught);     // [ 'Lion', <1 empty item>, 'Tiger' ]
console.log(caught[1]);  // undefined
console.log(cars);       // [ 'Audi', 'BMW', 'Bentley' ]

/*
However, when writing your own code, you should explicitly declare 
the missing elements as undefined, or at least insert a comment to 
highlight its absence. Doing this increases your code's clarity and 
maintainability.
*/

// 2. Boolean Literals

// 3. Numeric Literals

// 4. Floating Point Literals

// Syntax: [digits].[digits][(E|e)[(+|-)]digits]

// 5. Object Literals

// 6. RegExp Literals

// 7. String Literals
