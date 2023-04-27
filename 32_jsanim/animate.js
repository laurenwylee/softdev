//access canvas and buttons via DOM (update HTML source to align)
var c = document.getElementById("playground");
var dotButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");

var ctx = c.getContext("2d");

ctx.fillStyle = "blue";

var requestID; //init global var for use with animation frames

var clear = function(e) {
    //e.preventDefault(); //Q: Whatdis? A: Prevents the Animaniac and DVD buttons from running.
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

var dvdLogoSetup = function() {
    clear();
    window.cancelAnimationFrame(requestID);
    
    var rectWidth = 60; //width of the logo
    var rectHeight = 40; //height of the logo

    var rectX = Math.floor(Math.random() * c.width); //construct for selecting random valid xcor
    var rectY = Math.floor(Math.random() * c.height); //construct for selecting random valid ycor

    var xVel = -1; //initial x direction
    var yVel = -1; //intial y direction

    var logo = new Image();
    logo.src = "logo_dvd.jpg";

    var dvdLogo = function() {
        ctx.clearRect(0, 0, c.width, c.height);
        //ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
        ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
        /* 
            left: xVel neg -> pos
            right: xVel pos -> neg
            up: yVel neg -> pos
            down: yVel pos -> neg
        */
        if ( rectX < 0 || rectX > (c.width - rectWidth)) {
            xVel *= -1; //change x direction
        }
        if ( rectY < 0 || rectY > (c.height - rectHeight)) {
            yVel *= -1; //change y direction
        }
        rectX += xVel; //add x velocity to x position
        rectY += yVel; //add y velocity to y position
        requestID = window.requestAnimationFrame(dvdLogo);
    }
    dvdLogo();
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