var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "orange";
ctx.lineTo(370,300);
ctx.lineTo(250,650);
ctx.lineTo(125,300);
ctx.fill();

//ctx.beginPath();
//ctx.fillStyle = "purple";
//ctx.arc(250, 300, 120, 3.1, 2 * Math.PI);
//ctx.stroke();
//ctx.fill();

ctx.beginPath();
ctx.fillStyle = "purple";
ctx.moveTo(370, 300);
ctx.bezierCurveTo(370, 100, 250, 50, 125, 300 );
ctx.fill();
