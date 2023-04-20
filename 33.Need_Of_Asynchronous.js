// Consider this scenario
// We want to print 4 letters A, B, C & D
// in the same order but their is a catch
// function used for printing them will print
// them in a random amount of time

const print = (string) => {
  setTimeout(() => console.log(string), Math.floor(Math.random() * 100) + 1);
};

// Lets try to print them when called synchronously.

function printAll() {
  print("A");
  print("B");
  print("C");
  print("D");
}
printAll();

// With this most of the time order will not be maintained
