// demo 4
// JS event propagation

// Name the collections of TDs, TRs, and overall table
var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];


var clicky = function(e) {
  alert( this.innerHTML );
  //Q: What will happen when next line is uncommented?
  //A: Only the <table> alert appears.
  //Prediction: the alert will not appear and an error will appear in the console.
  //e.stopPropagation();
};


//Q: Does the order in which the event listeners are attached matter?
//A: No, the order does not matter.

//Predict, then test...
//Q: What effect does the boolean arg have in each?
//A: The boolean arg, when true, makes the alerts prioritize the outermost tags first.
//Prediction: The order in which the event listeners are attached matters and would change the order of the alerts.
//   (Leave exactly 1 version uncommented to test...)

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky, true);
  //tds[x].addEventListener('click', clicky, false);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky, true);
  //trs[x].addEventListener('click', clicky, false);
}

table.addEventListener('click', clicky, true);
//table.addEventListener('click', clicky, false);