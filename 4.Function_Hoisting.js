/*
Functions are hoisted if they're defined using function declarations
but functions are not hoisted if they're defined using function expressions
*/

// Using Function declaration

foo(); // foo

function foo(){
    console.log("foo");
}

// Using Function Expression

// console.log(bar);// Undefined
// console.log(baz);// ReferenceError
// console.log(bak);// ReferenceError

// bar(); // TypeError: bar is not a function
// baz();// ReferenceError
// bak(); // ReferenceError

var bar = function(){
    console.log("bar");
}

let baz = function(){
    console.log("baz");
}

const bak = function(){
    console.log("bak");
}

bar(); // bar
baz(); // baz
bak(); // bak