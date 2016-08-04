function Brick (opts) {
  opts = opts || {};
  this.active = opts.active || true;
  this.pos = opts.pos || {x: 0, y: 0};
  this.sprite = this.getSprite(opts.sprite) || this.getSprite('green');
}
//color can be: blue, brown, gray, green, orange, purple, red

Brick.prototype.getSprite = function (color) {
  return 'assets/bricks/' + color + '.png'
};

//Draw a Brick

Brick.prototype.draw = function(ctx, img) {
  var image = new Image();
  image.src = this.sprite;
  image.onload = () => {
    ctx.drawImage(image, this.pos.x, this.pos.y);
  };
};
