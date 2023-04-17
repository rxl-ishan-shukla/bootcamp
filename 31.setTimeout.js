// Execution priority of JS engines is like this
// 1. Call Stack
// 2. MicroTask queue
// 3. Callback queue

// This example shows when setTimeout will fail
// Since setTimeout uses callback queue it will
// not be executed until call stack gets empty
// and microtask queue is empty.

console.log("Start");

setTimeout(() => {
    console.log("Callback")
}, 5000)

let startDate = new Date().getTime();

while(new Date().getTime() <= startDate+10000){

}

console.log("End");
