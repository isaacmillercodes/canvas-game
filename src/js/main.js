// add scripts
$(document).ready(function() {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');

  // drawAllRows(ctx, 20);
  // var bullet = new Bullet('blue');
  // bullet.draw(ctx);
  // var paddle = new Paddle('red');
  // paddle.draw(ctx);
  //
  // setInterval(() => {bullet.draw(ctx);}, 1000/60);

  var bullet = new Bullet('green');
  var paddle = new Paddle('green');

  //setInterval(draw, 10);

  function draw() {
    drawAllRows(ctx, 20);
    bullet.draw(ctx);
    paddle.draw(ctx);
  };

  $(document).on('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      paddle.move('left');
    }

    if (e.key === 'ArrowRight') {
      paddle.move('right');
    }

  });

});

function drawRow(ctx, gutterX, gutterY) {
  //should create Brick objs for a row
  //loop over bricks
  //draw them next to each other
  var offset = 42;
  var bricks = [];
  for (var i = 0; i < 11; i++) {
    bricks.push(new Brick({
      pos: {x: offset, y: gutterY},
      sprite: 'purple'
    }));
    offset += 32 + gutterX;
  }
  bricks.forEach(brick => brick.draw(ctx));
}

function drawAllRows(ctx, gutterX) {
  var yOffset = 20;
  for (var i = 0; i < 6; i++) {
    drawRow(ctx, gutterX, yOffset);
    yOffset += 26;
  }
};
