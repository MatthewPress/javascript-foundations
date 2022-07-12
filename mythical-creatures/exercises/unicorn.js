class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || "white";
  }
  //What is this test actually asking?
  isWhite() {
    return false;
  }
  says(message) {
    return `**;* ${message} *;**`;
  }
}

module.exports = Unicorn;
