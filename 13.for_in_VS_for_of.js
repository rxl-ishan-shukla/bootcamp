/*
The for...in statement iterates a specified variable over all the 
enymerable properties of an object.

The for..of statement creates a loop iterating over iterable objects
(Including Array, Map, Set, arguments object and so on.), invoking a
custom iteration hook with statements to be executed for the value of
each distinct property.
*/

const obj = {
  firstName: "Sunil",
  MiddleName: "Kumar",
  LastName: "Shukla",
};

const arr = [1, 2, 3, 5, 7, 13];

// For...in

for (const key in obj) {
  if (Object.hasOwn(obj, key)) {
    const element = obj[key];
    console.log(`${key} : ${element}`);
  }
}

for (const key in arr) {
  if (Object.hasOwn(arr, key)) {
    const element = arr[key];
    console.log(`${key} : ${element}`);
  }
}

// For...of

for (const iterator of arr) {
  console.log(iterator);
}
