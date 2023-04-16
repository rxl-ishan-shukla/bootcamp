const marks = [10, 13, 52, 62];

// Without destructuring
const ram = marks[0];
const kisan = marks[1];
const shyam = marks[2];
const mohan = marks[3];

// With destructuring

const [jay, veru, gapu, raj] = marks;

// You can also swap with destructuring

let a = 10;
let b = 20;

console.log("a: ",a);
console.log("b: ",b);

[a,b] = [b,a];

console.log("a: ",a);
console.log("b: ",b);

