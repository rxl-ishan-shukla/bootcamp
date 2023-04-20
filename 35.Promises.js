// Now we will use Promises to fix this nesting problem.
// Let’s change our function to use Promises

// We can see that it still looks pretty similar.
// We will wrap the whole function in a Promise,
// and instead of calling the callback, we call resolve
// (or reject if there is an error).
// The function returns this Promise object.
const print = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve(string);
    }, Math.floor(Math.random() * 100) + 1);
  });
};

// Lets try to print them when called asynchronously with Promises.

function printAll() {
  print("A")
    .then(() => print("B"))
    .then(() => print("C"))
    .then(() => print("D"));
}
printAll();

// Here we encountered a Promise Chain. We can see that the code
// returns the result of the function (which will be a Promise),
// and this gets sent to the next function in the chain. Now the 
// code is no longer nested but it still looks messy with unnecessary
// parenthesis.