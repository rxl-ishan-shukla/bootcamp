/*
The following values evaluate to false condition
*/

false
undefined
null
0
NaN
""

let count = 0;
if(false){
    ++count;
}else if(undefined){
    ++count;
}else if(null){
    ++count;
}else if(0){
    ++count;
}else if(NaN){
    ++count;
}else if(""){
    ++count;
}else{
    console.log("No Condition executed");
}
console.log(count); // 0

// All other values including all objects evaluate to true

const flag = new Boolean(false);

if(flag){
    console.log("It executed because flag is an object");
}

if(flag == true){
    // It will be false
}else if(flag == false){
    console.log("Flag is false");
}