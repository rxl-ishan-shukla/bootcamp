// JS has 3 kinds of variable declarations
var a = 1;
let b = 2;
const c = 3;

// Dereferencing of object to variable
const obj = {
    x:10,
    y:20,
    z:30
}

// Named dereferencing only
let {z} = obj;

console.log(z);

// A variable declared using the var or let statement with no 
// assigned value specified has the value of undefined

// An attempt to access an undeclared variable results in a ReferenceError
// exception being thrown.

