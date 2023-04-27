//access canvas and buttons via DOM (update HTML source to align)
var c = document.getElementById("playground");
var dotButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");

var ctx = c.getContext("2d");

ctx.fillStyle = "blue";

var requestID; // init global var for use with animation frames

var clear = function(e) {
    //e.preventDefault(); //Q:whatdis?
    ctx.clearRect(0, 0, 500, 500);
}

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

//600 width 400 height
// how much is it displaced horizontally + vertically ?

var dvdLogoSetup = function() {
    window.cancelAnimationFrame(requestID);
    
    var rectWidth = 60; // ???
    var rectHeight = 40; // ???
    ctx.beginPath();
    ctx.rect(100, 100, rectWidth, rectHeight);
    ctx.fill();
    ctx.stroke();

    // var rectX = ; //construct for selecting random valid xcor
    // var rectY = ; //construct for selecting random valid ycor

    // var xVel = ; // ???
    // var yVel = ; // ???

    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    // var dvdLogo = function() {
    //     ctx.clearRect(0, 0, c.width, c.height);
    //     //ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
    //     ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    //     if ( /* bounce criteria */ ) {
    //         xVel = ; // ???
    //     }
    //     if ( /* bounce criteria */ ) {
    //         yVel = ; // ???
    //     }
    //     rectX = ; // ???
    //     rectY = ; // ???
    //     requestID = window.requestAnimationFrame( /* ??? */ );
    // }
}

//var stopIt = function() {
var stopIt = () => {
    console.log("stopIt invoked...");
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
}

dotButton.addEventListener("click", drawDot);
dvdButton.addEventListener("click", dvdLogoSetup);
stopButton.addEventListener("click", stopIt);