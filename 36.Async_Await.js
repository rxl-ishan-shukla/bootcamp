// Async/Await is basically syntactic sugar for Promises.
// It makes our asynchronous code look more like synchronous
// or procedural code, which is easier for humans to understand.
const print = (string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(string);
      resolve(string);
    }, Math.floor(Math.random() * 100) + 1);
  });
};

// Lets try to print them when called asynchronously with Async/Await.

async function printAll() {
  await print("A")
  await print("B")
  await print("C")
  await print("D")
}
printAll();
