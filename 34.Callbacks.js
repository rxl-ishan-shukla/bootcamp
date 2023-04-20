// Now we will use callbacks to solve previous issue

const print = (string, callback) => {
  setTimeout(() => {
    console.log(string);
    callback();
  }, Math.floor(Math.random() * 100) + 1);
};

// Lets try to print them when called asynchronously with callbacks.

function printAll() {
  print("A", () => {
    print("B", () => {
      print("C", () => {
        print("D", () => {});
      });
    });
  });
}
printAll();

// Well, the code is a lot uglier now, but at least it works! 
// Each time when we will call printAll, we will get the same result.
