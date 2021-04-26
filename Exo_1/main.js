var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "lightblue";
ctx.fillRect(125, 300, 250, 300);

ctx.beginPath();
ctx.fillStyle = "orange";
ctx.lineTo(125,300);
ctx.lineTo(250,150);
ctx.lineTo(370,300);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "grey";
ctx.fillRect(150,350, 50, 50);

ctx.beginPath();
ctx.fillStyle = "grey";
ctx.fillRect(300,350, 50, 50);


ctx.beginPath();
ctx.fillStyle = "grey";
ctx.fillRect(215,450, 70, 150);
