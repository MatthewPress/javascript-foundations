class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color;
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
