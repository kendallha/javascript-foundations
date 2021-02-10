var timesEaten = 0;
class Dragon {
  constructor(name, rider, hungry, timesEaten) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;

  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    timesEaten++;
    if (timesEaten >= 3) {
      this.hungry = false;
    }
  }
}


module.exports = Dragon;
