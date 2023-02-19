"use strict";
exports.__esModule = true;
exports.Timer = void 0;
var Timer = /** @class */ (function () {
    function Timer() {
        this.startTime = -1;
        this.endTime = -1;
        this.difference = -1;
        this._diff = -1;
    }
    Timer.prototype.start = function () {
        this.startTime = Date.now();
        return this;
    };
    Timer.prototype.stop = function () {
        this.endTime = Date.now();
        return this;
    };
    Timer.prototype.getDifference = function () {
        return this.endTime !== -1 ? this.endTime - this.startTime : -1;
    };
    return Timer;
}());
exports.Timer = Timer;
Object.defineProperty(Timer.prototype, 'difference', {
    get: (function () {
        console.warn('"Timer.prototype.difference" is deprecated. Use "Timer.prototype.getDifference()" instead.');
        var diff = this.getDifference();
        return diff;
    }).bind(Timer.prototype),
    set: function (v) {
        // How can I make this actually set the value of this.difference?
    }
});
