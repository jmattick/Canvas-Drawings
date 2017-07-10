var canvas = document.querySelector("canvas");
var cw = window.innerWidth;
var ch = window.innerHeight;
canvas.width = cw;
canvas.height = ch;
var c = canvas.getContext("2d");

var mouse = {
  x: undefined,
  y: undefined
};
var cond = false;
window.addEventListener("click", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  cond = true;
  console.log(mouse);
});

var gravity = 100;
var gravitySpeed;

function Swing(x, y, x1, y1, l, angle, da) {
  this.x = x;
  this.y = y;
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = this.x1 + this.l * Math.sin(this.angle * Math.PI / 180);
  this.y2 = this.y1 + this.l * Math.cos(this.angle * Math.PI / 180);
  this.l = l;
  this.angle = angle;
  this.da = da;
  this.cond = cond;
  this.gravity = gravity;
  this.gravitySpeed = gravitySpeed;
  this.mouse = mouse;

  this.draw = function() {
    if (this.mouse.x === undefined) {
      this.x1 = this.x;
      this.y1 = this.y;
    } else if (
      this.mouse.x != undefined &&
      Math.sqrt(
        Math.pow(this.mouse.x - this.x, 2) + Math.pow(this.mouse.y - this.y, 2)
      ) < l
    ) {
      this.x1 = this.mouse.x;
      this.y1 = this.mouse.y;
      this.l =
        ch / 2 -
        Math.sqrt(
          Math.pow(this.mouse.x - this.x, 2) +
            Math.pow(this.mouse.y - this.y, 2)
        ); ///fix this line.
    } else {
      this.x1 = this.x;
      this.y1 = this.y;
    }
    c.beginPath();
    c.moveTo(this.x, this.y);
    c.lineTo(this.x1, this.y1);
    c.stroke();
    c.lineTo(
      this.x1 + this.l * Math.sin(this.angle * Math.PI / 180),
      this.y1 + this.l * Math.cos(this.angle * Math.PI / 180)
    );
    c.lineWidth = 2;
    c.strokeStyle = "black";
    c.stroke();
    c.beginPath();
    c.arc(
      this.x1 + this.l * Math.sin(this.angle * Math.PI / 180),
      this.y1 + this.l * Math.cos(this.angle * Math.PI / 180),
      10,
      0,
      Math.PI * 2,
      false
    );
    c.fill();
    c.stroke();
  };
  this.update = function() {
    if (this.angle > -angle) {
      this.da = -this.da;
    } else if (this.angle < angle) {
      this.da = -this.da;
    } else if (this.angle === 0) {
    }

    this.angle += this.da; //this.angle-this.gravity/this.l*Math.sin(this.angle*Math.PI/180);
    this.draw();

    //interactivity
    this.x1 = mouse.x;
    this.y1 = mouse.y;
  };
}
var swingArray = [];
var x = cw / 2;
var y = ch / 4;
var x1 = x;
var y1 = y;
var l = ch / 2;
var angle = -45;
var da = 1;
swingArray.push(new Swing(x, y, x1, y1, l, angle, da));

console.log(swingArray);

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, cw, ch);
  for (var i = 0; i < swingArray.length; i++) {
    swingArray[i].update();
  }
}
animate();