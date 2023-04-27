// Team Dark Lord Chuckles the Silly Pig :: Lauren Lee, Thomas Zhang, Diana Akhmedova  
// SoftDev pd7
// K29 -- Getting more comfortable with the dev console and the DOM
// 2023-04-20r
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)

console.log("AYO"); // prints "AYO" in the console

var i = "hello"; // creates a variable i with the String "hello"
var j = 20; // creates a variable j with the integer 20


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30; // creates a variable j with the integer 30
  return j+x; // returns the sum of j and x
};


//instantiate an object
var o = { 'name' : 'Thluffy',               // creates a dictionary object o, containing...
          age : 1024,                       // an integer value for the age
          items : [10, 20, 30, 40],         // an array of items
          morestuff : {a : 1, b : 'ayo'},   // a dictionary of morestuff
          func : function(x) {              // a function func that returns the sum of x and 30
            return x+30;
          }
        };


var addItem = function(text) {
  var list = document.getElementById("thelist"); // gets the ordered list with the id "thelist" and sets it to a variable called list
  var newitem = document.createElement("li"); // creates a list element (<li>) and sets it equal to newitem
  newitem.innerHTML = text; // sets newitem equal to text
  list.appendChild(newitem); // appends newitem to the end of the ordered list,
};                           // which generates the next number on the list with the corresponding text


var removeItem = function(n) {
  var listitems = document.getElementsByTagName('li'); // gets the items with the <li> tag and sets them to a variable called listitems
  listitems[n].remove(); // removes the nth item in the ordered list,
};                       // then each number on the ordered list changes correspondingly


var red = function() { // sets a variable red equal to a new function
  var items = document.getElementsByTagName("li"); // gets the items with the <li> tag and sets them to a variable called items
  for(var i = 0; i < items.length; i++) { // for loop iterates from zero to the end of the ordered list
    items[i].classList.add('red'); // adds a class named "red" to each item in the ordered list
  }
};


var stripe = function() { // sets a variable stripe equal to a new function
  var items = document.getElementsByTagName("li"); // gets the items with the <li> tag and sets them to a variable called items
  for(var i = 0; i < items.length; i++) { // for loop iterates from zero to the end of the ordered list
    if (i%2==0){ // if i is divisble by 2,
      items[i].classList.add('red'); // adds a class named "red" to each item in the ordered list
    } else {
      items[i].classList.add('blue'); // otherwise, adds a class named "blue" to each item in the ordered list
    }
  }
};


//insert your implementations here for...
// FIB
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

var fibB = document.getElementById("fibButton");

function runFib() {
  var fibT = document.getElementById("fibText");
  fibT = fibT.value;
  document.getElementById("fibPara").innerHTML = fib(fibT);
}

fibB.addEventListener("click", () => runFib());


// FAC
function fac(n) {
  if (n < 2) {
      return 1;
  } return (n * fac(n - 1));
}
console.log("\nRETURNING FACT...");
console.log(fac(1));
console.log(fac(3));
console.log(fac(5));

var facB = document.getElementById("facButton");

function runFac() {
  var facT = document.getElementById("facText");
  facT = facT.value;
  document.getElementById("facPara").innerHTML = fac(facT);
}

facB.addEventListener("click", () => runFac());


// GCD
function gcd(a, b) {
  if (a == 0 || b == 0) {
    return 0;
  } if (a == 1 || b == 1) {
    return 1;
  } if (a == b) {
    return a;
  } if (a > b) {
    return gcd(a - b, a);
  } return gcd(a, b - a);
}
console.log("\nRETURNING GCD...");
console.log(gcd(0, 3));
console.log(gcd(5, 1));
console.log(gcd(7, 7));
console.log(gcd(28, 40));
console.log(gcd(121, 66));

var gcdB = document.getElementById("gcdButton");

function runGcd() {
  var gcdT_1 = document.getElementById("gcdText1");
  var gcdT_2 = document.getElementById("gcdText2");
  gcdT_1 = gcdT_1.value;
  gcdT_2 = gcdT_2.value;
  document.getElementById("gcdPara").innerHTML = gcd(gcdT_1, gcdT_2);
}

gcdB.addEventListener("click", () => runGcd());


// In addition to the style shown above,
//  you are encouraged to test drive the "arrow function syntax" as shown below.
//  Note anything notable.
const dist = (param1, param2) => {
  retVal = Math.abs(param1 - param2);
  return retVal;
};
console.log("\nRETURNING DIST...")
console.log(dist(2, 3));
console.log(dist(10, 7));
console.log(dist(28, 99));