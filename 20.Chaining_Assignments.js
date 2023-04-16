/*
Note: chaining variables should be avoided 
because it creates implicit global variables in 
sloppy mode and in strict mode they are invalid 
references to nonexistent variables.
*/
let x;
const f = () => {
    return 10;
}

const y = x = f();

console.log(x); // 10
console.log(y); // 10


// bad usage
const a = () => {
    let p = q = r = 10;
    // Here only p is let
    // q & r become global variables.
    // Because JavaScript interprets it as
    // let p = (q = (r = 10));
}

a();

// console.log(p); // ReferenceError
console.log(q); // 10
console.log(r); // 10