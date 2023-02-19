class Timer {
    startTime: number;
    endTime: number;
    
    /**
     * @deprecated Use {@link Timer.prototype.getDifference} instead.
     */
    difference: number;
    _diff: number;

    constructor() {
        this.startTime = -1;
        this.endTime = -1;
        this.difference = -1;
        this._diff = -1;
    }

    start() {
        this.startTime = Date.now();
        return this;
    }

    stop() {
        this.endTime = Date.now();
        return this;
    }

    getDifference() {
        return this.endTime !== -1 ? this.endTime - this.startTime : -1;
    }
}

Object.defineProperty(Timer.prototype, 'difference', {
    get: (function(this: typeof Timer.prototype) {
        console.warn('"Timer.prototype.difference" is deprecated. Use "Timer.prototype.getDifference()" instead.');
        const diff = this.getDifference();
        return diff;
    }).bind(Timer.prototype),
    set: function(v) {
        // How can I make this actually set the value of this.difference?
    }
});


export { Timer };
