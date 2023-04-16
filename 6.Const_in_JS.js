/*
We can create a read-only, named constant with the const keyword.
The syntax of a constant identifier is the same as any variable 
identifier: it must start with a letter, underscore, or dollar 
sign ($), and can contain alphabetic, numeric, or underscore 
characters.

A constant cannot change value through assignment or be re-declared 
while the script is running. It must be initialized to a value.

However, the properties of objects assigned to constants are not 
protected. Also, the contents of an array are not protected.
*/

// Example 1
const obj = {
    name: "Ishan"
}

console.log(obj);
obj.name = "Ishan Shukla"
console.log(obj);

// Example 2
const arr = [10, 20];
arr.push(30);
arr.push("end");
console.log(arr);