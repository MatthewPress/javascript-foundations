var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    };
    this.builtSnowmen;
  }
  gatherMaterials(stuff, amount) {
    if (stuff === "carrots") {
      this.materials.carrots += amount;
    }
    if (stuff === "buttons") {
      this.materials.buttons += amount;
    }
    if (stuff === "coal") {
      this.materials.coal += amount;
    }
    if (stuff === "snowballs") {
      this.materials.snowballs += amount;
    }
  }
  buildASnowman() {
    var blah = new Snowman(this.materials);
    this.builtSnowmen = blah;
    return blah;
  }
  placeMagicHat() {
    if (this.builtSnowmen.magicHat) {
      return 'Woah, this snowman is coming to life!';
    } else {
      return 'I guess I didn\'t build it correctly.';
    }
  }
}

module.exports = Human;
