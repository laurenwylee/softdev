var c = document.getElementById("playground"); // GET CANVAS
var dotButton = document.getElementById("buttonCircle"); // GET DOT BUTTON
var stopButton = document.getElementById("buttonStop"); // GET STOP BUTTON

var ctx = c.getContext("2d");

ctx.fillStyle = "blue";

var requestID; // init global var for use with animation frames

var clear = (e) => {
    ctx.clearRect(0, 0, c.width, c.height);
};

var radius = 0;
var growing = true;

var drawDot = () => {
    clear();
    window.cancelAnimationFrame(requestID);
    requestID = window.requestAnimationFrame(drawDot);
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, radius, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    if (growing == true) {
        if (radius > c.width / 2) {
            growing = false;
        }
        radius ++;
        console.log(radius)
    }
    if (growing == false) {
        if (radius == 1) {
            growing = true;
        }
        radius --;
        console.log(radius)
    }
}

//var stopIt = function() {
var stopIt = () => {
    console.log("stopIt invoked...");
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);