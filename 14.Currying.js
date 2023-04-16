/*
Currying suimply means evaluating functions with multiple arguments
and decomposing them into a sequence of functions with a single argument.

In other terms, currying is when a function instead of taking all 
arguments at one time takes the first one and returns a new function,
which takes the third one, etc. until all arguments are completed.

Why Currying?
    -It is a checking method to make sure that you get everything you 
    need before you proceed.
    -It helps to avoid passing the same variable again and again.
    -It divides function into multiple smaller function that can handle
    one responsibility.
    -It makes function pure and less prone to errors and side effects.
    -It is used to create higher-order function.
*/

// Uncurried Function

const normal = (a, b, c) => {
  return a + b + c;
};

console.log(normal(1, 2, 3));

// Basic Currying

const curried = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(curried(10)(20)(30));

// Advanced Currying

const curry = (fn) => {
  return cur = (...args) => {
    if (fn.length !== args.length) {
      return cur.bind(null, ...args);
    }
    return fn(...args);
  };
};

const advcurried = curry(normal);

console.log(advcurried(3)(5)(2));

// Modern ES6 Currying

const arrowcurry = (a) => (b) => (c) => a + b + c;

console.log(arrowcurry(3)(5)(7));
