/*
This are collections of data which are ordered by an 
index value.This includes arrays and array-like constructs
such as Array objects and TypedArray objects.
*/
let arr = Array.from(Array(10), (_, x) => x + 2);
console.log(arr);
arr = Array.from(arr, (e, i) => e + i);
console.log(arr);
