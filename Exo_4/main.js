var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.fillStyle = "white";
ctx.moveTo(150, 200);
ctx.bezierCurveTo(150, 100, 250, 100, 250, 200);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "lightgrey";
ctx.moveTo(50,250);
ctx.bezierCurveTo(100, 200, 220, 140, 350, 250);
ctx.bezierCurveTo(220, 400, 25, 240, 50, 250);
ctx.stroke();
ctx.fill();

//with quadraticCurveTo
//ctx.beginPath();
//ctx.strokeStyle = "white";
//ctx.moveTo(160, 160);
//ctx.quadraticCurveTo(200, 80, 240, 160);
//ctx.moveTo(240, 160);
//ctx.quadraticCurveTo(200, 140, 160, 160);
//ctx.stroke();
//ctx.fillStyle = "white";
//ctx.fill();

//ctx.beginPath();
//ctx.fillStyle = "lightgrey";
//ctx.moveTo(100, 200);
//ctx.quadraticCurveTo(200, 100, 300, 200);
//ctx.fill();

//ctx.beginPath();
//ctx.fillStyle = "lightgrey";
//ctx.moveTo(100, 200);
//ctx.quadraticCurveTo(200, 300, 300, 200);
//ctx.fill();
