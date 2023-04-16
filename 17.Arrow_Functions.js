/*
An arrow function has a shorter syntax compared to function expressions
and does not have its own this, arguments, super, or new.target and Arrow
functions are always anonymous.
*/

const obj = {
    // Does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function(){
        console.log(this.i, this);
    }
};

obj.b(); // undefined {}
obj.c(); // 10 { i: 10, b: [Function: b], c: [Function: c] }