function Bullet(color) {
  color = color || 'blue';
  this.pos = {x: 320, y: 400};
  this.sprite = 'assets/bullets/' + color + '.png';
  this.size = {x: 8, y: 8};
  this.dx = 2;
  this.dy = -2;
  this.loaded = false;
  this.image = {};
};

Bullet.prototype.draw = function(ctx, dx, dy) {
  ctx.clearRect(0, 0, 640, 480);
  // var dx = 2;
  // var dy = -2;
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
  //collision
  if (this.pos.y + 4 <= 0) {
    this.dy = -this.dy;
  }
  if (this.pos.x + 4 >= 640 || this.pos.x - 4 <= 0) {
    this.dx = -this.dx;
  }
  this.pos.x += this.dx;
  this.pos.y += this.dy;
};
