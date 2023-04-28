// demo 2
// JS event propagation

var tds = document.getElementsByTagName('td');
var trs = document.getElementsByTagName('tr');
var table = document.getElementsByTagName('table')[0];

var clicky = function(e) {
  alert( this.innerHTML ); //Prediction: An alert will appear.
};

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky); //Prediction: Shows an alert of everything enclosed in the <td> tag individually.
}

for (x=0; x < trs.length; x++) {
  trs[x].addEventListener('click', clicky); //Prediction: Shows an alert of everything enclosed in the <tr> tag at the same time.
}

table.addEventListener('click', clicky); //Prediction: Shows an alert of the entire table.


// Q: When user clicks on a cell, in what order will the pop-ups appear?
// A: The pop-ups appear in the order of the tags in the HTML file: <td>, then <tr>, and finally <table> (inside-out).