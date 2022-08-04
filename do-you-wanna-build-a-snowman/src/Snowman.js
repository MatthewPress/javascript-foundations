class Snowman {
  constructor(snowmen) {
    this.carrots = snowmen.carrots;
    this.coal = snowmen.coal;
    this.buttons = snowmen.buttons;
    this.snowballs = snowmen.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if (this.coal >= 2 && this.buttons >= 5 && this.carrots && this.snowballs >= 2) {
      this.magicHat = true;
    }
  }
}

module.exports = Snowman;
