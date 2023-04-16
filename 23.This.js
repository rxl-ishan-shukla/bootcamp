/*
"this" is the "object" that the "function" is a property of 
*/

function whichName() {
  console.log(this);
  console.log(this.name);
}
const obj1 = {
  name: "Obj 1",
  whichName,
};
const obj2 = {
  name: "Obj 2",
  whichName,
};

whichName(); // undefined
obj1.whichName(); // Obj 1
obj2.whichName(); // Obj 2
