class Magician {
  constructor(magician = {name: name, assistant: assistant, clothing: clothing}) {
    this.name = `The Great ${magician.name}`;
    this.assistant = magician.assistant;
    if (!magician.clothing) {
      this.favoriteAccessory = "top hat";
    }
    else {
      this.favoriteAccessory = magician.clothing;
    }
    this.confidencePercentage = 10;
  }
  performIncantation(incant) {
    return `${incant.toUpperCase()}!`;
  }
  performTrick() {
    this.confidencePercentage += 10

    if (this.favoriteAccessory === "top hat") {
      return `PULL RABBIT FROM TOP HAT`;
    }
    else {
      return `PULL DOVE FROM SLEEVE`;
    }
  }
  performShowStopper() {
    if (this.confidencePercentage < 100 || !this.assistant) {
      return `Oh no, this trick is not ready!`;
    }
    else {
      return `WOW! The magician totally just sawed that person in half!`;
    }
  }
}

module.exports = Magician;
