/* Define a static method to the Dragon class. The method should be named getDragons
 accept any number of instances of the Dragon class that are passed into it as separate arguments.
 The getDragons static method should return an array of all the dragon names
from the instances that were passed into it as arguments.
*/

// Define dragon class
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  // Define instance method that returns a string
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    let dragonNames = dragons.map(function(dragon) {
      return dragon.name;
    })
    return dragonNames;
  }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
