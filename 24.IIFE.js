/*
Immediately Invoked Function Expression or more simply IIFE is a JavaScript function
that runs as soon as it is defined. Can also be referred to as a Self-Executing Anonymous
Function.
*/

// Grouping Operator () creates a lexical scope
(function(){
    console.log("Hello World");
})();
// Immediately invokes the function with the 2nd set of ()

!function(){
    console.log("Hello World");
}();
~function(){
    console.log("Hello World");
}();
-function(){
    console.log("Hello World");
}();
+function(){
    console.log("Hello World");
}();
