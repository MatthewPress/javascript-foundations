var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(person) {
    // To Do: turn person object just created into a statue
    var statue = new Statue(person);
    this.statues.push(statue);
  }
}

module.exports = Medusa;
