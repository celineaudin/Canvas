var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(100, 200, 450, 100);

ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(175, 125, 300, 75);

ctx.beginPath();
ctx.fillStyle = "gray";
ctx.arc(200, 340, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill()


ctx.beginPath();
ctx.fillStyle = "gray";
ctx.arc(450, 340, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill()
