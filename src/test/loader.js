var should = chai.should();

describe('Loader', function() {

  describe('constructor', function() {
    it('creates with no arguments, sets vals to defaults', function() {
      var loader = new Loader();
      loader.paths.should.be.an.instanceof(Object);
      loader.proms.should.be.an.instanceof(Array);
      loader.assets.should.be.an.instanceof(Object);
    });
  });

  describe('.load(url)', function() {
    var loader = new Loader();
    it('returns a Promise', function() {
      loader.load('../assets/bricks/brown.png').should.be.an.instanceof(Promise);
    });
    it('returned Promise resolves to Image', function(done) {
      loader.load('../assets/paddles/orange.png')
      .then(function(img) {
        img.should.be.an.instanceof(Image);
        done();
      });
    });
    it('Image should have an assigned src property', function(done) {
      loader.load('../assets/bullets/blue.png').then(function(img) {
        var testURL = 'canvas-game/src/assets/bullets/blue.png';
        img.should.have.property('src');
        img.src.should.be.a('string');
        var imgURL = img.src.split('/').slice(8).join('/');
        imgURL.should.equal(testURL);
        done();
      });
    });
  });

  describe('.loadAll()', function() {
    beforeEach(function() {
      this.loader = new Loader({
        bricks: ['../assets/bricks/blue.png','../assets/bricks/brown.png', '../assets/bricks/gray.png'],
        bullets: ['../assets/bullets/blue.png', '../assets/bullets/brown.png', '../assets/bullets/gray.png'],
        paddles: ['../assets/paddles/blue.png', '../assets/paddles/brown.png', '../assets/paddles/gray.png']
      });
    });
    it('returns a Promise', function() {
      this.loader.loadAll().should.be.an.instanceof(Promise);
    });
    it('resolves into an Object of assets', function(done) {
      this.loader.loadAll().then(assets => {
        var colors = ['blue', 'brown', 'gray'];
        var types = ['bricks', 'bullets', 'paddles'];
        types.forEach(type => {
          assets.should.have.property(type);
          colors.forEach(color => {
            assets[type].should.have.property(color);
            assets[type][color].should.be.an.instanceof(Image);
          });
        });
        done();
      });
    });
  });
});
