var reversePreload = function (){
  "use strict";
  var textSize = 10;
  var glitcher = {

  init: function () {
    setTimeout((function () {
      this.canvas = document.getElementById('stage');
      this.context = this.canvas.getContext('2d');
      this.canvas.height = 170;
      this.initOptions();
      this.resize();
      this.tick();
    }).bind(this), 100);
  },

  initOptions: function () {

    this.textSize = Math.floor(this.width / 7);
    if (this.textSize > this.height) {
      this.textSize = Math.floor(this.height/1.5); }
    this.font = '300 ' + 14 + 'px "Montserrat"';
    this.context.font = this.font;
    this.text = "REVERSE PROJECT";
    this.textWidth = (this.context.measureText(this.text)).width;

    this.fps = 40;

    this.channel = 0;
    this.compOp = 'lighter';
    this.phase = 0.0;
    this.phaseStep = 0.05;
    this.amplitude = 0.0;
    this.amplitudeBase = 2.0;
    this.amplitudeRange = 2.0;
    this.alphaMin = 0.8;

    this.glitchAmplitude = 20.0;
    this.glitchThreshold = 0.9;
    this.scanlineBase = 40;
    this.scanlineRange = 40;
    this.scanlineShift = 15;

  },

  tick: function () {
    setTimeout((function () {
      this.phase += this.phaseStep;

      if (this.phase > 1) {
        this.phase = 0.0;
        this.channel = (this.channel === 2) ? 0 : this.channel + 1;
        this.amplitude = this.amplitudeBase + (this.amplitudeRange * Math.random());
      }

      this.render();
      this.tick();

    }).bind(this), 1000 / this.fps);
  },

  render: function () {
    var x0 = this.amplitude * Math.sin((Math.PI * 2) * this.phase) >> 0,
      x1, x2, x3;

    if (Math.random() >= this.glitchThreshold) {
      x0 *= this.glitchAmplitude;
    }

    x1 = this.width - this.textWidth >> 1;
    x2 = x1 + x0;
    x3 = x1 - x0;


    this.context.clearRect(0, 0, this.width, this.height);
    this.context.globalAlpha = this.alphaMin + ((1 - this.alphaMin) * Math.random());

    switch (this.channel) {
      case 0:
        this.renderChannels(x1, x2, x3);
        break;
      case 1:
        this.renderChannels(x2, x3, x1);
        break;
      case 2:
        this.renderChannels(x3, x1, x2);
        break;
    }
      this.renderScanline();
      if (Math.floor(Math.random() * 2) > 1) {
        this.renderScanline();
      }
  },

  renderChannels: function (x1, x2, x3) {
    this.context.font = this.font;
    this.context.fillStyle = "rgb(255,0,0)";
    this.context.fillText(this.text, x1, this.height / 2);

    this.context.globalCompositeOperation = this.compOp;

    this.context.fillStyle = "rgb(0,255,0)";
    this.context.fillText(this.text, x2, this.height / 2);
    this.context.fillStyle = "rgb(0,0,255)";
    this.context.fillText(this.text, x3, this.height / 2);
  },

  renderScanline: function () {
    var y = 250 * Math.random() >> 0,

      o = this.context.getImageData(0, y, this.width, 1),
      d = o.data,
      i = d.length,
      s = this.scanlineBase + this.scanlineRange * Math.random() >> 0,
      x = -this.scanlineShift + this.scanlineShift * 2 * Math.random() >> 0;

    while (i-- > 0) {
      d[i] += s;
    }

    this.context.putImageData(o, x, y);
  },

  resize: function () {
    this.width = document.documentElement.offsetWidth;
    this.height = 170;
    if (this.canvas) {
      this.canvas.height = this.height;
      this.canvas.width = this.width;
      this.textSize = Math.floor(this.canvas.width / 7);
      if (this.textSize > this.height) {
      this.textSize = Math.floor(this.canvas.height/1.5); }
      this.font = '700 ' + 28 + 'px "Montserrat"';
      this.context.font = this.font;
    }
  }
  };

document.onload = glitcher.init();
};

reversePreload();
