var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }
  gazeAtVictim(victim) {
    var statue = new Statue(victim.name);
    if (this.statues.length < 3) {
      this.statues.push(statue);
    }
    else {
      this.statues.push(statue);
      var freePerson = new Person(this.statues.shift().name);
      freePerson.mood = `relieved`;
      return freePerson;
    }
  }
}

module.exports = Medusa;
