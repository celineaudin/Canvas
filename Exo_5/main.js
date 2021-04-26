var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//the head
ctx.beginPath();
ctx.fillStyle = "#996600";
ctx.arc(200, 100, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill()

//the body
ctx.beginPath();
ctx.fillStyle = "#996600";
ctx.fillRect(150, 130, 100, 160);

ctx.beginPath();
ctx.fillStyle = "#996600";
ctx.fillRect(250, 130, 80, 40);

ctx.beginPath();
ctx.fillStyle = "#996600";
ctx.fillRect(70, 130, 80, 40);

ctx.beginPath();
ctx.fillStyle = "#996600";
ctx.fillRect(150, 200, 40, 160);

ctx.beginPath();
ctx.fillStyle = "#996600";
ctx.fillRect(210, 200, 40, 160);

//Feet
ctx.beginPath();
ctx.fillStyle = "#996600";
ctx.moveTo(210,350);
ctx.bezierCurveTo(210, 380, 250, 380, 250, 350);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#996600";
ctx.moveTo(150,350);
ctx.bezierCurveTo(150, 380, 190, 380, 190, 350);
ctx.stroke();
ctx.fill();

//right hand
ctx.beginPath();
ctx.fillStyle = "#996600";
ctx.moveTo(330,130);
ctx.quadraticCurveTo(360,150, 330, 170);
ctx.stroke();
ctx.fill();

//left hand
ctx.beginPath();
ctx.fillStyle = "#996600";
ctx.moveTo(70,170);
ctx.quadraticCurveTo(30,150, 70, 130);
ctx.stroke();
ctx.fill();

//entre-jambe
ctx.beginPath();
ctx.fillStyle = "lightgrey";
ctx.moveTo(190,300);
ctx.bezierCurveTo(190, 280, 210, 280, 210, 300);
ctx.stroke();
ctx.fill();

//left eye
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(180, 90, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill()

//right eye
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(220, 90, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill()

//mouth
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(180,110);
ctx.bezierCurveTo(180, 135, 220, 135, 220, 110);
ctx.stroke();

//mouth
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(180,110);
ctx.bezierCurveTo(180, 128, 220, 128, 220, 110);
ctx.stroke();


//eyebrow left
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(170,70);
ctx.bezierCurveTo(170,65,190,65,190, 70);
ctx.stroke();

//eyebrow right
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(210,70);
ctx.bezierCurveTo(210,65,230,65,230, 70);
ctx.stroke();

//button1
ctx.beginPath();
ctx.fillStyle = "purple";
ctx.arc(200, 180, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill()

//button2
ctx.beginPath();
ctx.fillStyle = "purple";
ctx.arc(200, 210, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill()
