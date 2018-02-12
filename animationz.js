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
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
}

var assign = function(e){
    counter = !counter;
    //window.cancelAnimationFrame(id);
    window.requestAnimationFrame(grownshrink);
}

var grownshrink = function(){
  if (counter){
    if (size < 300){
      size ++;
      drawDot(x, y, size)
    }
    else{
      counter = !counter;
      size --;
      drawDot(x, y, size);
    }
  }
  else{
    if (size > 5){
      size --;
      drawDot(x, y, size)
    }
    else{
      counter = !counter;
      size ++;
      drawDot(x, y, size);
    }
  }
  window.cancelAnimationFrame(id);
  id = window.requestAnimationFrame(grownshrink);
  console.log(id);
}


var multX = 1;
var multY = 1;
var logo;

var imageBuilder = function(){
  logo = new Image();
  logo.src = "dvdlogo.jpg";//PATH TO IMAGE FILE;
}

var dvd = function(){
    imageBuilder();
    ctx.clearRect(0,0,600, 600)
    ctx.drawImage(logo, x, y, 100, 50);
    if(x <= 0 || x >= 540){
        multX *= -1;
    }
    if(y <= 0 || y >= 540){
        multY *= -1;
    }
    var speed = 4;

    x += speed * multX;
    y += speed * multY;
    //window.cancelAnimationFrame(id2);
    id2 = window.requestAnimationFrame(dvd);
}

//clear function
var stop = function(e){
    window.cancelAnimationFrame(id);
    window.cancelAnimationFrame(id2)
}

//adding event listenera
shrink.addEventListener("click", assign);
c.addEventListener("click", place);
stopIt.addEventListener("click", stop);
bounce.addEventListener("click", dvd);
