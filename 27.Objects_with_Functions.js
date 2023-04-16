function createPerson(name) {
  // This object will be returned with all data.
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const Ishan = createPerson("Ishan");
Ishan.introduceSelf();

// This works fine but is a bit long-winded: 
// we have to create an empty object, initialize it, 
// and return it. A better way is to use a constructor. 
// A constructor is just a function called using the new keyword. 
// When you call a constructor, it will:
//      1. create a new object
//      2. bind this to the new object, so you can refer to this in your constructor code
//      3. run the code in the constructor
//      4. return the new object.

// Using Constructors
function Person(name) {
    this.name = name;
    this.intro = function(){
        console.log(`Hi! I'm ${this.name}`);
    };
}

const Ishmit = new Person("Ishmit");
Ishmit.intro();
