/*
var declared variables are not block-scoped, but are scoped to the 
containing function, and the effects of setting them persist beyond
the block itself.

This scoping effect can be mitigated by using let or const.
*/

var x = 1;
{
    var x = 2;
}
console.log(x); // 2

let y = 3;
{
    let y = 4;
}
console.log(y); // 3

const z = 7;
{
    const z = 8;
}
console.log(z); // 7