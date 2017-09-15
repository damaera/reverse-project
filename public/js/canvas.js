function canvasAnimation() {
  
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),
    width = window.innerWidth,
    height = window.innerHeight;

canvas.width = width;
canvas.height = height;

function update() {
    var points = [],
        power = 64,
        displacement = Math.random() * 100;

    points[0] = Math.random() * displacement;
    points[power] = points[0];

    for (var i = 1; i < power; i *= 2) {
        for (var j = (power / i) / 2; j < power; j += power / i) {
            points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2) + (Math.random() * -displacement + displacement);
        }
        displacement *= 0;
    }
    return points;
}

var points = update(),
    pointsMorph = update(),
    grads = [],
    cycle = 3.8,
    angle = 0,
    radius = 10,
    offset = -80,
    offsetY = height / 2,
    lastMorph = 0,
    morphDelay = 1000,
    angleY = 0;

function ribbonAnimation() {
    angle -= 0.01;
    offset++;
    
    if (offset > width + 100) {
        offset = -80;
        offsetY += 25;
        ctx.strokeStyle = colorCycle();
    }
    
    
    ctx.save();
    ctx.translate(offset - radius, (offsetY - radius) + Math.sin(angleY += 0.01) * 50);
    ctx.transform(1, 0, 0.8, 1, 0, 0);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(radius, radius + points[0]);

    for (var i = 0; i <= points.length; i++) {
        ctx.rotate((Math.PI * 2) / points.length);
        ctx.lineTo(radius, radius + points[i]);
        if (points[i] !== pointsMorph[i]) {
            if (points[i] > pointsMorph[i]) {
                points[i] -= 0.2;
            } else {
                points[i] += 0.2;
            }
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    if (Date.now() > lastMorph + morphDelay) {
        lastMorph = Date.now();
        pointsMorph = update();
    }

}

function render(){
  for(var i = 0; i < 5; i++){
    ribbonAnimation();
  }
  requestAnimationFrame(render);
}

function colorCycle(offset) {
    offset = offset || 0;

    cycle += 3;
    if (cycle > 100) {
        cycle = 0;
    }

    return "rgba(13,18,22,0.4)";
}

// some people said it only showed in the top left, wait a bit to get dimensions
setTimeout(function(){
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;
  
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.strokeStyle = colorCycle();
  ctx.globalCompositeOperation = "lighter";
  
  render();
}, 200);


}