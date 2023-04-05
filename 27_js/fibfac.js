// Team Dark Lord Chuckles the Silly Pig :: Lauren Lee, Thomas Zhang, Diana Akhmedova 
// SoftDev pd7
// K27 -- Basic functions in JavaScript
// 2023-04-04t
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn


// FORMULA: fact(n) = n * fact(n - 1) OR n! = n * (n - 1)!
function fact(n) {
    if (n < 2) {
        return 1;
    } return (n * fact(n - 1));
}

console.log("RETURNING FACT...");
console.log(fact(1));
console.log(fact(3));
console.log(fact(5));


// FORMULA: fib(n) = fib(n - 1) + f(n - 2)
function fib(n) {
    if (n == 0) {
        return 0;
    } if (n == 1) {
        return 1;
    } return (fib(n - 1) + fib(n - 2));
}

console.log("\nRETURNING FIB...");
console.log(fib(0));
console.log(fib(1));
console.log(fib(5));


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.