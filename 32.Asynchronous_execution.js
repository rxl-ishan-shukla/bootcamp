// In JavaScript, asynchronous execution comes in multiple forms.

// Example 1
// In this scenario asynchronous code will be executed
// after the main thread is completed or call stack is empty.
const execute = () => {
  setTimeout(() => console.log("I am an asynchronous message"), 0);
};
execute();
console.log("I am a synchronous message");

// Example 2
let counter = 0;
const timer = setInterval(() => {
  console.log("I am an asynchronous message");
  if (++counter >= 5) {
    clearInterval(timer);
  }
}, 1000);
console.log("I am a synchronous message");

// Asynchronous programming is an essential concept in JavaScript
// that allows a code to run in the background without
// blocking the execution of other code. we as a developer can
// create more efficient and responsive applications by using 
// features like callbacks, async/await, and promises.

// Downsides of callbacks
// 1. Inversion of code
//    For example your code relies on a 3rd part function and you
//    send your callback function to them for execution and since 
//    you don't know about its implementation it is not safe and
//    might produce unwanted results by taking control of that
//    callback function.
//
// 2. Pyramid of DOOM (Callback Hell)
//    Checkout the callback given below:
//       job1(function() {
//           doSomething1();
//           job2(function() {
//               doSomething2();
//               job3(function() {
//                   doSomething3();
//                   job4(function() {
//                       doSomething4();
//                   });
//               });
//           });
//       });