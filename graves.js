var canvas = document.getElementById("canvas");
var width = parseInt(window.document.documentElement.clientWidth);
var height = parseInt(window.document.documentElement.clientHeight);
canvas.width = width;
canvas.height = height;

var context = canvas.getContext('2d');

var x = width / 2;
var y = height / 2;
var radius = width * 5 / 100;
var incrementX = 1;
var incrementY = 1;

setInterval(function() {
  if(x + radius > width  || x - radius < 0) incrementX *= -1;
  if(y + radius > height || y - radius < 0) incrementY *= -1;

  x += incrementX * 10;
  y += incrementY * 10;

  context.fillStyle = '#CC2222';
  context.fillRect(0,   0, width, height);

  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = 'green';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#003300';
  context.stroke();

}, 0);
