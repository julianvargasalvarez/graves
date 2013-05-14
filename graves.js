var canvas = document.getElementById("canvas");
var width = parseInt(window.document.documentElement.clientWidth) / 2;
var height = parseInt(window.document.documentElement.clientHeight) / 2;
canvas.width = width;
canvas.height = height;

var context = canvas.getContext('2d');

var x = width / 2;
var y = height / 2;
var radius = width * 5 / 100;
var incrementX = 1;
var incrementY = 1;
var barPositionY = height * 0.9;
var barHeight = height * 0.05;
var barWidth = 2 * radius;

setInterval(function() {
  if(x + radius > width  || x - radius < 0) incrementX *= -1;
  if(y + radius > barPositionY || y - radius < 0) incrementY *= -1;

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

  context.fillStyle = '#FFFF00';
  context.fillRect(x-radius, barPositionY, barWidth, barHeight);

}, 0);
