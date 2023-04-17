const Name1 = {
    firstName: "Ishan",
    lastName: "Shukla",
    printFunction: function () {
      console.log(this.firstName + " " + this.lastName);
    },
    // This won't work because arrow function do not have this.
    arrowFunction: () => {
      console.log(this.firstName + " " + this.lastName);
    },
  };
  
  Name1.arrowFunction();
  Name1.printFunction();
  
  // To create a similar new object we need to rewrite it all
  const Name2 = {
    firstName: "Ishmit",
    lastName: "Shukla",
  };
  
  // Function Borrowing
  const printFullName = function (city, state) {
    console.log(`${this.firstName} ${this.lastName} from ${city} (${state})`);
  };
  
  const Name3 = {
    firstName: "Monika",
    lastName: "Shukla",
  };
  
  // With Call Method
  printFullName.call(Name3, "Indore", "M.P.");
  
  // With apply Method
  printFullName.apply(Name3, ["Indore", "M.P."]);
  
  // With bind Method
  const printNameWhenNeeded = printFullName.bind(Name3);
  
  printNameWhenNeeded("Indore", "M.P.");
  
  // Polyfill for bind Method (Custom Bind Method)
  Function.prototype.customBind = function (...args1) {
    const obj = this;
    const params = args1.slice(1);
    return function (...args2) {
      obj.apply(args1[0], [...params, ...args2]);
    };
  };
  
  const customBind = printFullName.customBind(Name3, "Indore");
  customBind("M.P.");
  