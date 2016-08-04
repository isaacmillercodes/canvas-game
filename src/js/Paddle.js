function Paddle(color) {
  color = color || 'blue';
  this.pos = {x: 288, y: 460};
  this.sprite = 'assets/paddles/' + color + '.png';
  this.size = {x: 64, y: 416};
  this.loaded = false;
  this.image = {};
  this.dx = 25;
}

Paddle.prototype.draw = function(ctx) {
  if (!this.loaded) {
    var image = new Image();
    image.src = this.sprite;
    image.onload = () => {
      ctx.drawImage(image, this.pos.x, this.pos.y);
    };
  }
  else {
    ctx.drawImage(this.image, this.pos.x, this.pos.y);
  }
};

Paddle.prototype.move = function (dir) {
  if (dir === 'left') {
    this.pos.x += -this.dx;
  }
  else if (dir === 'right') {
    this.pos.x += this.dx;
  }
}
