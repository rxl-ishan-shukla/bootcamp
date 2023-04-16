const f = () => {
    console.log("F!");
    return 10;
}

const g = () => {
    console.log("G!");
    return 20;
}

let x, y;

// Example 1
y = x = f();
/*
y = x = f() is equivalent to y = (x = f()), 
because the assignment operator = is right-associative. 
However, it evaluates from left to right:

1. y = x =  f()
2. x = f()
3. f()
4. log "F!"
5. return 10
6. x = 10
7. y = 10
*/

console.log(x);
console.log(y);

// Example 2
y = [f(), x = g()]
/*
It also evaluates from left to right:

1. y = [f(), x = g()]
2. [f(), x = g()]
3. f()
4. log "F!"
5. return 10
6. x = g()
7. g()
8. log "G!"
9. return 20
10. x = 20
11. [f(), x = g()] is now [10, 20]
12. y = [10, 20]
*/
console.log(x);
console.log(y);

// Example 3
x[f()] = g();
console.log(x);

// Example 4
x = {};
x[f()] = g();
console.log(x);