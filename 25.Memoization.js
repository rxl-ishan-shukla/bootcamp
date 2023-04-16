function add(n){
    console.log("Processing:",n+100);
    return;
}

add(5); // Processing: 105
add(5); // Processing: 105
add(5); // Processing: 105

// Memoized Way
function memoizedAdd(){
    let cache = {}
    return function(n){
        if(n in cache){
        }else{
            cache[n] = n+100;
            console.log("Processing:",cache[n]);
        }
        return cache[n];
    }
}

const memoized = memoizedAdd();
// Processing: 105
// 1 105
console.log("1", memoized(5));
// 2 105
console.log("2", memoized(5));
// Processing: 107
// 3 107
console.log("3", memoized(7));
// 4 105
console.log("4", memoized(5));