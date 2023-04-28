// demo 3
// JS event propagation

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

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky);
}

//Predict, then test...
//Q: What effect does the boolean arg have?
//A: The boolean arg priortizes the Event Listener with the "true" boolean argument.
//Prediction: When the boolean is true, the alert appears; when the boolean is false, the alert does not appear.
//   (Leave exactly 1 version uncommented to test...)

table.addEventListener('click', clicky, true);
//table.addEventListener('click', clicky, false);

// Q: When user clicks on a cell, in what order will the pop-ups appear?
// A: First the <table> alert, then the <td> alert, and finally the <tr> alert (if the boolean is true).