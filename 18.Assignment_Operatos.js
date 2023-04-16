
const f = () => {
  return 10;
};

let x = undefined;


// 1.
x = f(); // 10

// 2.
x += f(); // 20

// 3. 
x -= f(); // 10

// 4. 
x *= f();

// 5. 
x /= f();

// 6. 
x %= f();

// 7. 
x **= f();

// 8.
x <<= f();

// 9.
x >>= f();

// 10.
x >>>= f();

// 11.
x &= f();

// 12.
x |= f();

// 13.
x ^= f();

// 14.
x ??= f(); // x ?? (x = f())
// Its called Logical nullish assignment operator
// it only assigns if x is nullish(null or undefined)

// 15. 
x &&= f(); // x && (x = f())

// 16.
x ||= f(); // x || (x = f())


console.log(x);


// if ((x &&= f())) {
//   console.log(x);
// } else {
//   console.log("False ", x);
// }
