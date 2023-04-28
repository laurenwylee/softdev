// demo 1
// JS event propagation

var tds = document.getElementsByTagName('td');

var clicky = function(e) {
  alert( this.innerHTML ); //Prediction: An alert will appear.
};                         //Prediction: An alert appears for every name clicked.

for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}
