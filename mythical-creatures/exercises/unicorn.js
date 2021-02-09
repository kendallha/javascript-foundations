class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (!color) {
      this.color = "white";
    } else {
    this.color = color;
    }
  }
    isWhite() {
      if (this.color !== "white") {
        return false;
      }
    }
    says(message) {
      return `**;* ${message} *;**`;
    }
  }



module.exports = Unicorn;

//read the test
//ask yourself if it will fail and why
//run the test
//make it pass
