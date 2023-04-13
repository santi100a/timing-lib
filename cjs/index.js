"use strict";
exports.__esModule = true;
exports.promises = exports.createTimer = exports.Timer = void 0;
var opts = {
    enumerable: false,
    writable: true
};
var LABELS = [];
function __includes(arr, item) {
    return arr.indexOf(item) !== -1;
}
var Timer = /** @class */ (function () {
    /**
     * Creates a new instance of {@link Timer}.
     * @param label An optional label for this timer. Must be unique to this timer.
     */
    function Timer(label) {
        if (label === void 0) { label = null; }
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (label !== null && label !== undefined && typeof label !== 'string')
            throw new TypeError("The label, if specified, must be of type \"string\". Got ".concat(label, " of type ").concat(typeof label, "."));
        this.__startTime = -1;
        this.__stopTime = -1;
        this.__diff = -1;
        this.__isClosed = false;
        this.__isStarted = false;
        this.__isStopped = false;
        this.__label = label;
        this.__startCb = null;
        this.__stopCb = null;
        this.__closeCb = null;
        if (label !== null && __includes(LABELS, label))
            throw new Error("This timer's label must be unique.");
        if (this.__label !== null)
            LABELS.push(this.__label);
        (_a = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _a === void 0 ? void 0 : _a.call(Object, this, '__startTime', opts);
        (_b = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _b === void 0 ? void 0 : _b.call(Object, this, '__stopTime', opts);
        (_c = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _c === void 0 ? void 0 : _c.call(Object, this, '__diff', opts);
        (_d = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _d === void 0 ? void 0 : _d.call(Object, this, '__isClosed', opts);
        (_e = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _e === void 0 ? void 0 : _e.call(Object, this, '__isStarted', opts);
        (_f = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _f === void 0 ? void 0 : _f.call(Object, this, '__isStopped', opts);
        (_g = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _g === void 0 ? void 0 : _g.call(Object, this, '__label', opts);
        (_h = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _h === void 0 ? void 0 : _h.call(Object, this, '__startCb', opts);
        (_j = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _j === void 0 ? void 0 : _j.call(Object, this, '__stopCb', opts);
        (_k = Object === null || Object === void 0 ? void 0 : Object.defineProperty) === null || _k === void 0 ? void 0 : _k.call(Object, this, '__closeCb', opts);
    }
    /**
     * Resets the starting time, ending time, and difference.
     *
     * @returns `this` object for chaining.
     */
    Timer.prototype.reset = function () {
        this.__startTime = -1;
        this.__stopTime = -1;
        this.__diff = -1;
        this.__isStarted = false;
        this.__isStopped = false;
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
     * @returns `this` object for chaining.
     */
    Timer.prototype.registerStopCb = function (cb) {
        this.__stopCb = cb;
        return this;
    };
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is closed.
     * @returns `this` object for chaining.
     */
    Timer.prototype.registerCloseCb = function (cb) {
        this.__closeCb = cb;
        return this;
    };
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is started.
     * @returns `this` object for chaining.
     */
    Timer.prototype.registerStartCb = function (cb) {
        this.__startCb = cb;
        return this;
    };
    /**
     * Starts the timer.
     * @returns `this` object for chaining.
     */
    Timer.prototype.start = function () {
        var _a;
        if (this.__isClosed)
            throw new Error('This timer has been closed.');
        if (this.__isStarted)
            throw new Error('This timer has already been started.');
        this.__startTime = Date.now();
        this.__isStopped = false;
        this.__isStarted = true;
        (_a = this.__startCb) === null || _a === void 0 ? void 0 : _a.call(this, this);
        return this;
    };
    /**
     * Stops the timer.
     * @returns `this` object for chaining.
     */
    Timer.prototype.stop = function () {
        var _a;
        if (this.__isClosed)
            throw new Error('This timer has been closed.');
        if (this.__isStopped)
            throw new Error('This timer has already been stopped.');
        this.__stopTime = Date.now();
        this.__isStopped = true;
        this.__isStarted = false;
        (_a = (this.__stopCb)) === null || _a === void 0 ? void 0 : _a(this);
        return this;
    };
    /**
     * Computes the time elapsed between the start and end of the timer (in milliseconds).
     *
     * @returns `this` object for chaining.
     */
    Timer.prototype.computeDifference = function () {
        if (!this.__isStopped)
            throw new Error("This timer hasn't been stopped.");
        if (this.__diff === -1)
            this.__diff = this.__stopTime - this.__startTime;
        return this;
    };
    /**
     * Returns the time elapsed between the start and end of the timer.
     * @returns The time elapsed (in milliseconds).
     */
    Timer.prototype.getDifference = function () {
        if (this.__diff === -1)
            this.computeDifference();
        return this.__diff;
    };
    /**
     * Returns the time elapsed between the start and end of the timer in seconds
     * instead of milliseconds.
     *
     * @returns The time (in seconds) elapsed between the start and end of the timer.
       Differs from {@link Timer.prototype.getDifference} because it retrieves the diff in
       seconds, as opposed to milliseconds.
     */
    Timer.prototype.getDifferenceSeconds = function () {
        if (this.__diff === -1)
            this.computeDifference();
        return this.__diff / 1000;
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
        if (this.__isClosed)
            throw new Error('This timer has already been closed.');
        this.__isClosed = true;
        (_a = this.__closeCb) === null || _a === void 0 ? void 0 : _a.call(this, this);
        return this;
    };
    /**
     * Checks whether or not this timer is closed and can't be used anymore.
     * @returns Whether or not this timer is closed.
     */
    Timer.prototype.isClosed = function () {
        return this.__isClosed;
    };
    /**
     * Checks whether or not this timer is started right now.
     * @returns Whether or not this timer is started.
     */
    Timer.prototype.isStarted = function () {
        return this.__isStarted;
    };
    /**
     * Checks whether or not this timer is stopped right now.
     * @returns Whether or not this timer is stopped.
     */
    Timer.prototype.isStopped = function () {
        return this.__isStopped;
    };
    /**
     * Returns a JSON string representation of this timer.
     *
     * @param beautify Whether or not to beautify (add indentation, whitespace, and line break
     * characters to the returned text) the output, in order to make it easier to read.
     * @returns A JSON representation of the timer's important metadata (see {@link SerializedTimerMetadata}).
     */
    Timer.prototype.toString = function (beautify) {
        if (beautify === void 0) { beautify = false; }
        if (typeof beautify !== 'boolean')
            throw new TypeError("\"beautify\", if specified, must be of type \"boolean\". Got ".concat(beautify, " of type ").concat(typeof beautify, "."));
        var meta = {
            serialization_time: Date.now(),
            metadata: {
                start_time: this.__startTime,
                stop_time: this.__stopTime,
                diff: this.__diff,
                is_closed: this.__isClosed,
                label: this.__label
            }
        };
        return beautify ? JSON.stringify(meta, null, 4) : JSON.stringify(meta);
    };
    /**
     * Reconstructs a timer from its JSON string representation (see {@link SerializedTimerMetadata}).
     *
     * @param str The output from {@link Timer.prototype.toString} (see {@link SerializedTimerMetadata}).
     * @returns A brand-new timer, whose internal state is retrieved from `str`.
     */
    Timer.fromString = function (str) {
        if (typeof str !== 'string')
            throw new TypeError("\"str\" must be of type \"string\". Got \"".concat(str, "\" of type \"").concat(typeof str, "\"."));
        var _a = JSON.parse(str), metadata = _a.metadata, serialization_time = _a.serialization_time;
        if (!(metadata instanceof Object))
            throw new TypeError("\"metadata\" must be an Object. Got \"".concat(metadata, "\" of type \"").concat(typeof metadata, "\"."));
        if (typeof serialization_time !== 'number')
            throw new TypeError("\"serialization_time\" must be of type \"number\". Got \"".concat(serialization_time, "\" of type \"").concat(typeof serialization_time, "\"."));
        if (typeof metadata.diff !== 'number')
            throw new TypeError("\"metadata.diff\" must be of type \"number\". Got \"".concat(metadata.diff, "\" of type \"").concat(typeof metadata.diff, "\"."));
        if (typeof metadata.is_closed !== 'boolean')
            throw new TypeError("\"metadata.is_closed\" must be of type \"boolean\". Got \"".concat(metadata.is_closed, "\" of type \"").concat(typeof metadata.is_closed, "\"."));
        if (metadata.label !== null && typeof metadata.label !== 'string')
            throw new TypeError("\"metadata.label\", if specified, must be of type \"string\". Got \"".concat(metadata.label, "\" of type \"").concat(typeof metadata.label, "\"."));
        if (typeof metadata.start_time !== 'number')
            throw new TypeError("\"metadata.start_time\" must be of type \"number\". Got \"".concat(metadata.start_time, "\" of type \"").concat(typeof metadata.start_time, "\"."));
        if (typeof metadata.stop_time !== 'number')
            throw new TypeError("\"metadata.stop_time\" must be of type \"number\". Got \"".concat(metadata.stop_time, "\" of type \"").concat(typeof metadata.stop_time, "\"."));
        // End error handling
        var timer = new this(metadata.label);
        timer.__isClosed = metadata.is_closed;
        timer.__diff = metadata.diff;
        timer.__startTime = metadata.start_time;
        timer.__stopTime = metadata.stop_time;
        return timer;
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
