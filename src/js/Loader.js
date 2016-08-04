/* Loader class
 * accepts an object with keys referring to the types
 * of images (bricks, paddles, bullets) that each hold an array
 * of the pngs that need to be loaded
 */
function Loader(urls) {
  urls = urls || {};
  this.paths = urls;
  this.proms = [];
  this.assets = {
    bricks: {},
    bullets: {},
    paddles: {}
  };
}

/* Creates an Image object and sets its src attribute
 * to the passed URL.
 */
Loader.prototype.load = function (url) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.src = url;
    img.onload = resolve(img);
    img.onerror = resolve;
  });
};

Loader.prototype.loadAll = function () {
  for (var type in this.paths) {
    this.paths[type].forEach(path => {
      this.proms.push(this.load(path));
    });
  }
  return Promise.all(this.proms).then(proms => {
    proms.forEach(prom => {
      var pathArr = prom.src.split('/');
      var indexes = {
        type: pathArr.length - 2,
        color: pathArr.length - 1
      };
      // type is 2nd to last elem in the split url array
      var type = pathArr[indexes.type];
      // color is part of filename, so strip .png
      var color = pathArr[indexes.color].replace('.png', '');
      this.assets[type][color] = prom;
    });
    return this.assets;
  });
};
