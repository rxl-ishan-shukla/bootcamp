/*
In expressions involving numeric and string values with the + 
operator, JavaScript converts numeric values to strings.
*/

let x = 'The answer is ' + 42 // "The answer is 42"
let y = 42 + ' is the answer' // "42 is the answer"
let z = '37' + 7 // "377"

console.log(x);
console.log(y);
console.log(z);

/*
With all other operators, JavaScript does not convert numeric values 
to strings.
*/

let a = '37' - 7;
let b = '2' * 5;
let c = '123' / 10;
let d = '16' % 7;
let e = '1a3' - 3;

console.log(a); // 30
console.log(b); // 10
console.log(c); // 12.3
console.log(d); // 2
console.log(e); // NaN

// misc
let f = '10.1' + '1.10';
let g = +'10.1' + +'1.10';
let h = +'45' + 5

console.log(f); // 10.11.10
console.log(g); // 11.2
console.log(h); // 50