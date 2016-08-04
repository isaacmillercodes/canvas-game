// add scripts

$(document).on('ready', function() {
  var loader = new Loader({
    bricks: ['assets/bricks/blue.png','assets/bricks/brown.png', 'assets/bricks/gray.png', 'assets/bricks/green.png', 'assets/bricks/orange.png', 'assets/bricks/purple.png', 'assets/bricks/red.png'],
    bullets: ['assets/bullets/blue.png', 'assets/bullets/brown.png', 'assets/bullets/gray.png', 'assets/bullets/green.png', 'assets/bullets/orange.png', 'assets/bullets/purple.png', 'assets/bullets/red.png'],
    paddles: ['assets/paddles/blue.png', 'assets/paddles/brown.png', 'assets/paddles/gray.png', 'assets/paddles/green.png', 'assets/paddles/orange.png', 'assets/paddles/purple.png', 'assets/paddles/red.png']
  });
  loader.loadAll().then(assets => console.log(assets));
});
