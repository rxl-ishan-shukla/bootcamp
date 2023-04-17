// GET: The get syntax binds an object property to a
// function that will be called when that property is looked up.
// SET: The set syntax binds an object property to a function
// to be called when there is an attempt to set that property.

// Example 1
const obj = {
  log: [1, 2, 3, 4, 5, 6],
  get data() {
    return this.log;
  },
  set data(value) {
    this.log.push(value);
  },
};

obj.data = 7;
console.log(obj.data);

// Example 2
class Caches {
  log;
  constructor() {
    this.log = [];
  }
  get data() {
    return this.log[this.log.length - 1];
  }

  set data(value) {
    this.log.push(value);
  }

  get full() {
    return this.log;
  }

  set full(valueArr) {
    for (const value of valueArr) {
      this.log.push(value);
    }
  }
}

const cache = new Caches();
console.log(cache.full);
cache.data = 1;
cache.data = 2;
cache.data = 3;
console.log(cache.data);
console.log(cache.full);
cache.full = [4,5,6,7];
console.log(cache.full);

