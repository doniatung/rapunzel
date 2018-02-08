//Donia Tung
//SoftDev2 pd7
//2018-02-07

//retrieve node in DOM via ID
var c = document.getElementById("slate");
//instantiate a CanvasRenderingContext2D object
var ctx = c.getContext("2d");
//declare variables
var moveB = document.getElementById("animate");
var shape = 0;
var x, y;
var id;
var size = 30;
var counter = true;
//draw function
var drawDot = function(){
  ctx.beginPath();
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
  if (counter){
    size ++;
  }
  else{
    size --;
  }
  id = window.requestAnimationFrame(drawDot);
  console.log(id);
}

var assign = function(e){
    counter = !counter;
    window.requestAnimationFrame(drawDot);
}

var place = function(e){
  x = e.offsetX;
  y = e.offsetY;
  ctx.arc(x, y, 30, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
}

//adding event listener to the canvas
moveB.addEventListener("click", assign);
c.addEventListener("click", place);
//clear function
var stop = function(e){
  if (id){
    window.cancelAnimationFrame(id);
  }
}
//adding event listener to the clear button
var stopIt = document.getElementById("stop")
stopIt.addEventListener("click", stop);
