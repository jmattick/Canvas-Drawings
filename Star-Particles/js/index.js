var canvas = document.querySelector("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var c = canvas.getContext("2d");

var mouse = {
  x: undefined,
  y: undefined
};
//star stuff
var maxH = 40;
var minH = 8;
var a1 = 18 * Math.PI / 180;
var a2 = Math.PI / 2 - a1;
var a3 = 36 * Math.PI / 180;
var colorArray = ["#940f15", "#a4b6c1", "#2e598f", "#0c2141"];
var colorOutline = ["#0900ff", "#ff0000", "#ffffff", "#ff0000", "#0900ff"];
window.addEventListener("mousemove", function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse);
});
window.addEventListener("resize", function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

//star object
function Star(x, y, dx, dy, h) {
  this.x = x;
  this.y = y;
  this.dx1 = dx1;
  this.dy1 = dy1;
  this.h = h;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.colorOut = colorOutline[Math.floor(Math.random() * colorOutline.length)];

  this.draw = function() {
    c.beginPath();
    c.strokeStyle = this.color;
    //a
    c.moveTo(this.x, this.y);
    //b
    c.lineTo(this.x + this.h * Math.sin(a1), this.y + this.h * Math.cos(a1));
    c.stroke();
    //c
    c.lineTo(
      this.x + this.h * Math.sin(a1) + this.h,
      this.y + this.h * Math.cos(a1)
    );
    c.stroke();
    //d
    c.lineTo(
      this.x + this.h * Math.sin(a1) + this.h * Math.sin(a3) / Math.tan(a2),
      this.y + this.h * Math.cos(a1) + this.h * Math.sin(a3)
    );
    c.stroke();
    //e
    c.lineTo(
      this.x +
        this.h * Math.sin(a1) +
        this.h * Math.sin(a3) / Math.tan(a2) +
        this.h * Math.cos(a2),
      this.y +
        this.h * Math.cos(a1) +
        this.h * Math.sin(a3) +
        this.h * Math.sin(a2)
    );
    c.stroke();
    //f
    c.lineTo(
      this.x,
      this.y +
        this.h * Math.cos(a1) +
        this.h * Math.sin(a3) +
        this.h * Math.sin(a2) -
        this.h * Math.sin(a3)
    );
    c.stroke();
    //g
    c.lineTo(
      this.x -
        (this.h * Math.sin(a1) +
          this.h * Math.sin(a3) / Math.tan(a2) +
          this.h * Math.cos(a2)),
      this.y +
        this.h * Math.cos(a1) +
        this.h * Math.sin(a3) +
        this.h * Math.sin(a2)
    );
    c.stroke();
    //h
    c.lineTo(
      this.x - (this.h * Math.sin(a1) + this.h * Math.sin(a3) / Math.tan(a2)),
      this.y + this.h * Math.cos(a1) + this.h * Math.sin(a3)
    );
    c.stroke();
    //i
    c.lineTo(
      this.x - (this.h * Math.sin(a1) + this.h),
      this.y + this.h * Math.cos(a1)
    );
    c.stroke();
    //j
    c.lineTo(this.x - this.h * Math.sin(a1), this.y + this.h * Math.cos(a1));
    c.stroke();
    //a
    c.lineTo(this.x, this.y);
    c.stroke();
    c.fillStyle = this.color;
    c.fill();
  }; //end draw function
  this.update1 = function() {
    if (this.x + this.h > innerWidth || this.x - h < 0) {
      this.dx1 = -this.dx1;
    }
    this.x += this.dx1;
    if (this.y + this.h > innerHeight || this.y - h < 0) {
      this.dy1 = -this.dy1;
    }
    this.y += this.dy1;

    //interactivity
    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.h < maxH) {
        this.h += 3;
      }
    } else if (this.h > minH) {
      this.h -= 3;
    }
    this.draw();
  };
}
//end star object
var starArray = [];
var amount;
if (canvas.width < 480) {
  amount = 200;
} else {
  amount = 600;
}
for (var i = 0; i < amount; i++) {
  var x = Math.random() * (innerWidth - h * 2) + h;
  var dx1 = (Math.random() - 0.5) * 4;
  var y = Math.random() * (innerHeight - h * 2) + h;
  var dy1 = (Math.random() - 0.5) * 4;
  var h = Math.random() * 20 + 5;
  starArray.push(new Star(x, y, dx1, dy1, h));
}

console.log(starArray);

var fontBase = 1000, // selected default width for canvas
  fontSize = 70; // default size for font

function getFont() {
  var ratio = fontSize / fontBase; // calc ratio
  var size = canvas.width * ratio; // get font size based on current width
  return (size | 0) + "px Sigmar One"; // set font
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < starArray.length; i++) {
    starArray[i].update1();
  }
  c.font = getFont();
  c.fillStyle = "#940f15";
  c.strokeStyle = "#0c2141";
  c.lineWidth = 2;
  c.textAlign = "center";
  c.fillText("Happy 4th of July!", canvas.width / 2, canvas.height / 2);
  c.strokeText("Happy 4th of July!", canvas.width / 2, canvas.height / 2);
}

animate();