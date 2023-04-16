/*
The arguments of a function are maintained in an array-like object.

The arguments variable is "array-like", but not an array. 
It is array-like in that it has a numbered index and a length 
property. However, it does not possess all of the array-manipulation 
methods.
*/

function fun(a,b,c){
    console.log(arguments);
    return a + b + c;
}

let ans = fun(1,2,3);