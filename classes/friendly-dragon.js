const Dragon = require("./dragon");

class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }

  hasLifeGoals() {
    let dragonName = this.name;
    this.lifeGoals.forEach(function(lifegoal) {
      console.log(`${dragonName} likes to ${lifegoal}`);
    });
  }

  helpsPeople() {
    return `${this.name} helps their friend ${this.friend}`;
  }

}


/****************************************************************************/

module.exports = FriendlyDragon;
