var canvas = document.querySelector("canvas");
canvas.height = $(".center").height();
canvas.width = $(".center").width();

var c = canvas.getContext("2d");
//back head hair
c.beginPath();
c.fillStyle = "rgba(109,71,48)";
c.fillRect(38, 150, 224, 200);
c.beginPath();
c.arc(150, 150, 110, 0, 2 * Math.PI, false);
c.fillStyle = "rgba(109,71,48)";
c.fill();
c.strokeStyle = "rgba(109,71,48)";
c.stroke();

//neck
c.fillStyle = "rgba(235,171,127)";
c.fillRect(125, 225, 50, 75);

//head
c.beginPath();
c.arc(150, 150, 100, 0, 2 * Math.PI, false);
c.fillStyle = "rgba(235,171,127)";
c.fill();
c.strokeStyle = "rgba(211,153,114)";
c.stroke();

//
//
//eyes

//whites of eye
//left-bottom
c.beginPath();
c.arc(115, 110, 30, Math.PI / 4, 3 * Math.PI / 4, false);
c.fillStyle = "white";
c.fill();

//left-top
c.beginPath();
c.arc(115, 153, 30, 7 * Math.PI / 4, 5 * Math.PI / 4, true);
c.fillStyle = "white";
c.fill();
//right-bottom
c.beginPath();
c.arc(185, 110, 30, Math.PI / 4, 3 * Math.PI / 4, false);
c.fillStyle = "white";
c.fill();

//right-top
c.beginPath();
c.arc(185, 153, 30, 7 * Math.PI / 4, 5 * Math.PI / 4, true);
c.fillStyle = "white";
c.fill();

//iris-left
c.beginPath();
c.arc(115, 130, 10, 0, 2 * Math.PI, false);
c.fillStyle = "rgba(109,71,48)";
c.fill();
//iris-right
c.beginPath();
c.arc(185, 130, 10, 0, 2 * Math.PI, false);
c.fillStyle = "rgba(109,71,48)";
c.fill();
//pupil-left
c.beginPath();
c.arc(115, 130, 5, 0, 2 * Math.PI, false);
c.fillStyle = "black";
c.fill();
//pupil-right
c.beginPath();
c.arc(185, 130, 5, 0, 2 * Math.PI, false);
c.fillStyle = "black";
c.fill();
//topeyelid-left
c.beginPath();
c.arc(115, 150, 30, 7 * Math.PI / 4, 5 * Math.PI / 4, true);
c.strokeStyle = "rgba(211,153,114)";
//c.strokeStyle="rgba(235,171,127)";
c.lineWidth = 3;
c.stroke();
//topeyelid-right
c.beginPath();
c.arc(185, 150, 30, 7 * Math.PI / 4, 5 * Math.PI / 4, true);
c.strokeStyle = "rgba(211,153,114)";
//c.strokeStyle="rgba(235,171,127)";
c.lineWidth = 3;
c.stroke();
//top eyeliner-left
c.beginPath();
c.arc(115, 152, 30, 7 * Math.PI / 4, 5 * Math.PI / 4, true);
c.strokeStyle = "black";
c.lineWidth = 3;
c.stroke();
//top eyeliner-right
c.beginPath();
c.arc(185, 152, 30, 7 * Math.PI / 4, 5 * Math.PI / 4, true);
c.strokeStyle = "black";
c.lineWidth = 3;
c.stroke();
//top eyelashes-left
c.beginPath();
c.moveTo(97, 130);
c.lineTo(90, 125);
c.stroke();
c.beginPath();
c.moveTo(100, 125);
c.lineTo(95, 120);
c.stroke();
//top eyelashes-right
c.beginPath();
c.moveTo(203, 130);
c.lineTo(210, 125);
c.stroke();
c.beginPath();
c.moveTo(200, 125);
c.lineTo(205, 120);
c.stroke();

//eyebrow-left
c.beginPath();
c.arc(115, 165, 60, 4.2, 5, false);
c.strokeStyle = "rgba(109,71,48)";
c.lineWidth = 5;
c.stroke();
//eyebrow-right
c.beginPath();
c.arc(185, 165, 60, 4.4, 5.2, false);
c.strokeStyle = "rgba(109,71,48)";
c.lineWidth = 5;
c.stroke();

//end eyes
//
//
//nose
c.beginPath();
c.moveTo(151, 140);
c.lineTo(160, 170);
c.strokeStyle = "rgba(211,153,114)";
c.stroke();
c.beginPath();
c.arc(154, 164, 10, Math.PI / 4, 3 * Math.PI / 4, false);
c.stroke();
//end nose
//
//
//mouth

//bottom lip
c.beginPath();
c.arc(150, 160, 60, Math.PI / 3, 2 * Math.PI / 3, false);
//c.strokeStyle="maroon";
c.lineWidth = 5;
c.stroke();
c.fillStyle = "maroon";
//c.fill();

//
//
//front head hair
c.beginPath();
c.arc(150, 150, 110, 3 * Math.PI / 2, 2 * Math.PI, false);
c.fillStyle = "rgba(109,71,48)";
c.fill();
c.strokeStyle = "rgba(109,71,48)";
c.stroke();

c.beginPath();
c.arc(150, 150, 110, Math.PI, 5 * Math.PI / 3, false);
c.fillStyle = "rgba(109,71,48)";
c.fill();
c.strokeStyle = "rgba(109,71,48)";
c.stroke();
//
//
//clothing
c.beginPath();
c.fillStyle = "blue";
c.fillRect(100, 275, 100, 25);
//left sleeve
c.beginPath();
c.arc(100, 300, 24, 0, 2 * Math.PI, false);
c.fillStyle = "blue";
c.fill();
c.strokeStyle = "blue";
c.lineWidth = 1;
c.stroke();
//right sleeve
//left sleeve
c.beginPath();
c.arc(200, 300, 24, 0, 2 * Math.PI, false);
c.fillStyle = "blue";
c.fill();
c.strokeStyle = "blue";
c.lineWidth = 1;
c.stroke();
//v-neck
c.beginPath();
c.moveTo(125, 275);
c.lineTo(150, 285);
c.strokeStyle = "rgba(235,171,127)";
c.stroke();
c.lineTo(175, 275);
c.stroke();
c.lineTo(125, 275);
c.stroke();
c.fillStyle = "rgba(235,171,127)";
c.fill();