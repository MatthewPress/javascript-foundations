class Centaur {
  constructor(name) {
    this.name = name;
    this.breed = "Palomino";
    this.shootbow = "excellent";
    this.crankyLevel = 0;
    if (this.crankyLevel >= 3) {
      this.cranky = true;
    } else {
    this.cranky = false;
    }
    this.standing = true;
  }
  run() {
    if (this.cranky) {
      return "NO!";
    } else {
      this.crankyLevel += 1;
      return "Clop clop clop clop!!!";
    }
  }
  shootBow() {
    if (this.cranky) {
      return "NO!";
    } else {
      this.crankyLevel += 1;
      return "Twang!!!";
    }
  }
  sleep() {

  }
}
module.exports = Centaur;
