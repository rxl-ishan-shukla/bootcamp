/*
The delete operator deletes an object's property.

If the delete operator succeeds, it removes the property 
from the object. Trying to access it afterwards will yield 
undefined. The delete operator returns true if the 
operation is possible; it returns false if the operation 
is not possible.
*/

console.log(delete Math.PI); // False

const obj = {
    name: "Ishan Shukla",
    age: 21
}

console.log(obj);
console.log(delete obj.age); // True
console.log(obj);
console.log(delete obj.name); // True
console.log(obj);

/*
Deleting Array Elements

Since arrays are just objects, it's technically possible to 
delete elements from them. This is however regarded as a bad 
practice, try to avoid it. When you delete an array property, 
the array length is not affected and other elements are not 
re-indexed. To achieve that behavior, it is much better to 
just overwrite the element with the value undefined.
*/

const arr = [10, 20, 30, 40,];

console.log(delete arr[2]); // True
console.log(arr);