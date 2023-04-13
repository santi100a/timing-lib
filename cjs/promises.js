"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.AsyncTimer = exports.delay = void 0;
var opts = {
    enumerable: false,
    writable: true
};
var LABELS = [];
function __includes(arr, item) {
    return arr.indexOf(item) !== -1;
}
/**
 * Creates a new `Promise` that resolves after `ms` milliseconds.
 *
 * @param ms The amount of milliseconds to wait (default is 0).
 * @returns A `Promise` that resolves after `ms` milliseconds.
 */
function delay(ms) {
    if (ms === void 0) { ms = 0; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (typeof ms !== 'number') {
                throw new TypeError('Parameter must be a number.');
            }
            return [2 /*return*/, new Promise(function (resolve) { return setTimeout(resolve, ms); })];
        });
    });
}
exports.delay = delay;
var AsyncTimer = /** @class */ (function () {
    /**
     * Creates a new instance of {@link AsyncTimer}.
     * @param label An optional label for this timer. Must be unique to this timer.
     */
    function AsyncTimer(label) {
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
     * @returns A `Promise` of the `this` object for chaining.
     */
    AsyncTimer.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.__startTime = -1;
                this.__stopTime = -1;
                this.__diff = -1;
                this.__isStarted = false;
                this.__isStopped = false;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Delete the callback for the stopping of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    AsyncTimer.prototype.deleteStopCb = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.__stopCb = null;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Delete the callback for the starting of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    AsyncTimer.prototype.deleteStartCb = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.__startCb = null;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Delete the callback for the closure of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    AsyncTimer.prototype.deleteCloseCb = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.__closeCb = null;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Register the callback for the stopping of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is stopped.
     * @returns A `Promise` of the `this` object for chaining.
     */
    AsyncTimer.prototype.registerStopCb = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.__stopCb = cb;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is closed.
     * @returns A `Promise` of the `this` object for chaining.
     */
    AsyncTimer.prototype.registerCloseCb = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.__closeCb = cb;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is started.
     * @returns A `Promise` of the `this` object for chaining.
     */
    AsyncTimer.prototype.registerStartCb = function (cb) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.__startCb = cb;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Starts the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    AsyncTimer.prototype.start = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (this.__isClosed)
                    throw new Error('This timer has been closed.');
                if (this.__isStarted)
                    throw new Error('This timer has already been started.');
                this.__startTime = Date.now();
                this.__isStopped = false;
                this.__isStarted = true;
                (_a = this.__startCb) === null || _a === void 0 ? void 0 : _a.call(this, this);
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Stops the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    AsyncTimer.prototype.stop = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (this.__isClosed)
                    throw new Error('This timer has been closed.');
                if (this.__isStopped)
                    throw new Error('This timer has already been stopped.');
                this.__stopTime = Date.now();
                this.__isStopped = true;
                this.__isStarted = false;
                (_a = (this.__stopCb)) === null || _a === void 0 ? void 0 : _a(this);
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Computes the time elapsed between the start and stop of the timer (in milliseconds).
     *
     * @returns A `Promise` of the `this` object for chaining.
     */
    AsyncTimer.prototype.computeDifference = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.__isStopped)
                    throw new Error("This timer hasn't been stopped.");
                if (this.__diff === -1)
                    this.__diff = this.__stopTime - this.__startTime;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Returns A `Promise` of the time elapsed between the start and end of the timer.
     * @returns A `Promise` of the time elapsed (in milliseconds).
     */
    AsyncTimer.prototype.getDifference = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.__diff === -1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.computeDifference()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.__diff];
                }
            });
        });
    };
    /**
     * Returns  A `Promise` of the time elapsed between the start and end of the timer in seconds
     * instead of milliseconds.
     *
     * @returns A `Promise` of the time elapsed (in seconds) between the start and end of the timer.
       Differs from {@link Timer.prototype.getDifference} because it retrieves the diff in
       seconds, as opposed to milliseconds.
     */
    AsyncTimer.prototype.getDifferenceSeconds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.__diff === -1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.computeDifference()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.__diff / 1000];
                }
            });
        });
    };
    /**
     * Reads this timer's label.
     * @returns A `Promise` of this timer's label.
     */
    AsyncTimer.prototype.getLabel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.__label];
            });
        });
    };
    /**
     * Closes the timer so it can no longer be used.
     * @returns A `Promise` of the `this` object for chaining.
     */
    AsyncTimer.prototype.close = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                if (this.__isClosed)
                    throw new Error('This timer has already been closed.');
                this.__isClosed = true;
                (_a = this.__closeCb) === null || _a === void 0 ? void 0 : _a.call(this, this);
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Checks whether or not this timer is closed and can't be used anymore.
     * @returns A `Promise` of whether or not this timer is closed.
     */
    AsyncTimer.prototype.isClosed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.__isClosed];
            });
        });
    };
    /**
     * Checks whether or not this timer is started right now.
     * @returns A `Promise` of whether or not this timer is started.
     */
    AsyncTimer.prototype.isStarted = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.__isStarted];
            });
        });
    };
    /**
     * Checks whether or not this timer is stopped right now.
     * @returns A `Promise` of whether or not this timer is stopped.
     */
    AsyncTimer.prototype.isStopped = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.__isStopped];
            });
        });
    };
    /**
     * Returns A `Promise` of a JSON string representation of this timer.
     *
     * @param beautify Whether or not to beautify (add indentation, whitespace, and line break
     * characters to the returned text) the output, in order to make it easier to read.
     * @returns A `Promise` of a JSON representation of the timer's important metadata
       (see {@link SerializedTimerMetadata}).
     */
    AsyncTimer.prototype.toString = function (beautify) {
        if (beautify === void 0) { beautify = false; }
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                if (typeof beautify !== 'boolean')
                    throw new TypeError("\"beautify\", if specified, must be of type \"boolean\". Got ".concat(beautify, " of type ").concat(typeof beautify, "."));
                meta = {
                    serialization_time: Date.now(),
                    metadata: {
                        start_time: this.__startTime,
                        stop_time: this.__stopTime,
                        diff: this.__diff,
                        is_closed: this.__isClosed,
                        label: this.__label
                    }
                };
                return [2 /*return*/, beautify ? JSON.stringify(meta, null, 4) : JSON.stringify(meta)];
            });
        });
    };
    /**
     * Reconstructs a timer from its JSON string representation (see {@link SerializedTimerMetadata}).
     *
     * @param str The output from {@link Timer.prototype.toString} (see {@link SerializedTimerMetadata}).
     * @returns A `Promise` of a brand-new timer, whose internal state is retrieved from `str`.
     */
    AsyncTimer.fromString = function (str) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, metadata, serialization_time, timer;
            return __generator(this, function (_b) {
                if (typeof str !== 'string')
                    throw new TypeError("\"str\" must be of type \"string\". Got \"".concat(str, "\" of type \"").concat(typeof str, "\"."));
                _a = JSON.parse(str), metadata = _a.metadata, serialization_time = _a.serialization_time;
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
                timer = new this(metadata.label);
                timer.__isClosed = metadata.is_closed;
                timer.__diff = metadata.diff;
                timer.__startTime = metadata.start_time;
                timer.__stopTime = metadata.stop_time;
                return [2 /*return*/, timer];
            });
        });
    };
    return AsyncTimer;
}());
exports.AsyncTimer = AsyncTimer;
