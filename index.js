const START_SYMBOL = Symbol('startTime');
const END_SYMBOL = Symbol('endTime');
const DIFFERENCE_SYMBOL = Symbol('difference');

class Timer {
    constructor() {
        this[START_SYMBOL] = null;
        this[END_SYMBOL] = null;
        this[DIFFERENCE_SYMBOL] = null;
    }
    start() {
        this[START_SYMBOL] = Date.now();

        return this;
    }
    stop() {
        this[END_SYMBOL] = Date.now();
        this[DIFFERENCE_SYMBOL] = 
        this[END_SYMBOL] - this[START_SYMBOL];

        return this;
    }
    get difference() {
        return this[DIFFERENCE_SYMBOL];
    }
    getDifference() {
        return this.difference;
    }
}
exports.Timer = Timer;