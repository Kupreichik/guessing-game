class GuessingGame {
    constructor(min, max, mid) {
        this.min = min;
        this.max = max;
        this.mid = mid
    }

    setRange(min, max) {
        this.min = min;
        this.max = max
    }

    guess() {
        return this.mid = Math.round((this.max - this.min) / 2 + this.min)
    }

    lower() {
        this.max = this.mid
    }

    greater() {
        this.min = this.mid
    }
}

module.exports = GuessingGame;
