"use strict";
exports.__esModule = true;
exports.promises = exports.createTimer = exports.Timer = void 0;
var opts = {
    enumerable: false,
    writable: true
};
var LABELS = [];
function __includes(arr, item) {
    if (arr.hasOwnProperty('includes'))
        return arr.includes(item);
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        if (el === item)
            return true;
    }
    return false;
}
var Timer = /** @class */ (function () {
    /**
     * Creates a new instance of {@link Timer}.
     * @param label An optional label for this timer. Must be unique to this timer.
     */
    function Timer(label) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.__start = -1;
        this.__end = -1;
        this.__diff = -1;
        this.__closed = false;
        this.__started = false;
        this.__stopped = false;
        this.__label = label || null;
        this.__startCb = null;
        this.__stopCb = null;
        this.__closeCb = null;
        if (__includes(LABELS, label))
            throw new Error("This timer's label must be unique.");
        if (this.__label)
            LABELS[LABELS.length] = this.__label;
        (_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, this, '__start', opts);
        (_b = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _b === void 0 ? void 0 : _b.call(Object, this, '__end', opts);
        (_c = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _c === void 0 ? void 0 : _c.call(Object, this, '__diff', opts);
        (_d = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _d === void 0 ? void 0 : _d.call(Object, this, '__closed', opts);
        (_e = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _e === void 0 ? void 0 : _e.call(Object, this, '__started', opts);
        (_f = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _f === void 0 ? void 0 : _f.call(Object, this, '__stopped', opts);
        (_g = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _g === void 0 ? void 0 : _g.call(Object, this, '__label', opts);
    }
    /**
     * Resets the starting time, ending time, and difference.
     *
     * @returns `this` object for chaining.
     */
    Timer.prototype.reset = function () {
        this.__start = -1;
        this.__end = -1;
        this.__diff = -1;
        this.__started = false;
        this.__stopped = false;
        return this;
    };
    /**
     * Delete the callback for the stopping of the timer.
     * @returns `this` object for chaining.
     */
    Timer.prototype.deleteStopCb = function () {
        this.__stopCb = null;
        return this;
    };
    /**
     * Delete the callback for the starting of the timer.
     * @returns `this` object for chaining.
     */
    Timer.prototype.deleteStartCb = function () {
        this.__startCb = null;
        return this;
    };
    /**
     * Delete the callback for the closure of the timer.
     * @returns `this` object for chaining.
     */
    Timer.prototype.deleteCloseCb = function () {
        this.__closeCb = null;
        return this;
    };
    /**
     * Register the callback for the stopping of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is stopped.
     */
    Timer.prototype.registerStopCb = function (cb) {
        this.__stopCb = cb;
        return this;
    };
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is closed.
     */
    Timer.prototype.registerCloseCb = function (cb) {
        this.__closeCb = cb;
    };
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is started.
     */
    Timer.prototype.registerStartCb = function (cb) {
        this.__startCb = cb;
    };
    /**
     * Starts the timer.
     * @returns `this` object for chaining.
     */
    Timer.prototype.start = function () {
        var _a;
        if (this.__closed)
            throw new Error('This timer has been closed.');
        if (this.__started)
            throw new Error('This timer has already been started.');
        this.__start = Date.now();
        this.__stopped = false;
        this.__started = true;
        (_a = this.__startCb) === null || _a === void 0 ? void 0 : _a.call(this, this);
        return this;
    };
    /**
     * Stops the timer.
     * @returns `this` object for chaining.
     */
    Timer.prototype.stop = function () {
        var _a;
        if (this.__closed)
            throw new Error('This timer has been closed.');
        if (this.__stopped)
            throw new Error('This timer has already been stopped.');
        this.__end = Date.now();
        this.__stopped = true;
        this.__started = false;
        (_a = (this.__stopCb)) === null || _a === void 0 ? void 0 : _a(this);
        return this;
    };
    /**
     * Computes the time elapsed between the start and end of the timer.
     *
     * @returns `this` object for chaining.
     */
    Timer.prototype.computeDifference = function () {
        if (this.__diff === -1) {
            this.__diff = this.__end - this.__start;
        }
        this.__started = false;
        return this;
    };
    /**
     * Returns the time elapsed between the start and end of the timer.
     * @returns The time elapsed.
     */
    Timer.prototype.getDifference = function () {
        if (this.__diff === -1) {
            this.__diff = this.__end - this.__start;
        }
        this.__started = true;
        return this.__diff;
    };
    /**
     * Reads this timer's label.
     * @returns This timer's label.
     */
    Timer.prototype.getLabel = function () {
        return this.__label;
    };
    /**
     * Closes the timer so it can no longer be used.
     * @returns `this` object for chaining.
     */
    Timer.prototype.close = function () {
        var _a;
        if (this.__closed)
            throw new Error('This timer has already been closed.');
        this.__closed = true;
        (_a = this.__closeCb) === null || _a === void 0 ? void 0 : _a.call(this, this);
        return this;
    };
    /**
     * Checks whether or not this timer is closed and can't be used anymore.
     * @returns Whether or not this timer is closed.
     */
    Timer.prototype.isClosed = function () {
        return this.__closed;
    };
    /**
     * Checks whether or not this timer is started right now.
     * @returns Whether or not this timer is started.
     */
    Timer.prototype.isStarted = function () {
        return this.__started;
    };
    /**
     * Checks whether or not this timer is stopped right now.
     * @returns Whether or not this timer is stopped.
     */
    Timer.prototype.isStopped = function () {
        return this.__stopped;
    };
    return Timer;
}());
exports.Timer = Timer;
/**
 * Creates a new instance of {@link Timer}.
 * @param label An optional label. See {@link Timer}.
 * @returns A new instance of `Timer`.
 */
function createTimer(label) {
    return new Timer(label);
}
exports.createTimer = createTimer;
exports["default"] = Timer;
exports.promises = require("./promises");
