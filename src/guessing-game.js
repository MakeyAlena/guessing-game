class GuessingGame {
    constructor() {
      this.max = 0;
      this.min = 0;
    }
    devideInterval() {
      return Math.round((this.max+this.min)/2);
    }
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
        return this.devideInterval();
    }

    lower() {
      this.max = this.devideInterval();
    }

    greater() {
      this.min = this.devideInterval();
    }
}

module.exports = GuessingGame;
