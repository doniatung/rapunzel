//Donia Tung
//SoftDev2 pd7
//2018-02-09

//retrieve node in DOM via ID
var c = document.getElementById("slate");
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");
//declare variables
var shrink = document.getElementById("shrink");
var stopIt = document.getElementById("stop")
var bounce = document.getElementById("bounce")

var shape = 0;
var x, y;
var id;
var size = 30;
var counter = true;

var canvasX = c.width;
var canvasY = c.height;
var counterX, counterY;

var place = function(e){
  x = e.offsetX;
  y = e.offsetY;
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
}

//draw function
var drawDot = function(x, y, r){
  ctx.beginPath();
  //ctx.clearRect(0, 0, c.width, c.height);
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
}

var assign = function(e){
    counter = !counter;
    window.requestAnimationFrame(grownshrink);
}

var grownshrink = function(){
  if (counter){
    size ++;
    drawDot(x, y, size)
  }
  else{
    size --;
    drawDot(x, y, size)
  }
  id = window.requestAnimationFrame(grownshrink);
  console.log(id);
}

var dvdX = 150;
var dvdY = 300;
var multX = 1;
var multY = 1;

var dvd = function(){
    ctx.clearRect(0,0,600, 600)
    ctx.beginPath();
    ctx.arc(y, y, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    console.log(x);
    console.log(y);
    if(x <= 30 || x >= 570){
        multX *= -1;
    }

    if(y <= 30 || y >= 570){
        multY *= -1;
    }

    var speed = 4;

    x += speed * multX;
    y += speed * multY;

    id2 = window.requestAnimationFrame(dvd);
}

//clear function
var stop = function(e){
  if (id){
    window.cancelAnimationFrame(id);
  }
  else{
    window.cancelAnimationFrame(id2)
  }
}

//adding event listenera
shrink.addEventListener("click", assign);
c.addEventListener("click", place);
stopIt.addEventListener("click", stop);
bounce.addEventListener("click", dvd);
