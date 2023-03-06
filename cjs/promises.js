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
exports.delay = exports.AsyncTimer = void 0;
var opts = {
    enumerable: false,
    writable: true
};
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
     * Creates a new instance of {@link Timer}.
     */
    function AsyncTimer() {
        this.__start = -1;
        this.__end = -1;
        this.__diff = -1;
        this.__closed = false;
        this.__started = false;
        this.__stopped = false;
        Object.defineProperty(this, '__start', opts);
        Object.defineProperty(this, '__end', opts);
        Object.defineProperty(this, '__diff', opts);
        Object.defineProperty(this, '__closed', opts);
        Object.defineProperty(this, '__started', opts);
        Object.defineProperty(this, '__stopped', opts);
    }
    /**
     * Starts the timer.
     * @returns A promise of the `this` object for chaining.
     */
    AsyncTimer.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.__closed)
                    throw new Error('This timer has been closed.');
                if (this.__started)
                    throw new Error('This timer has already been started.');
                this.__start = Date.now();
                this.__stopped = false;
                this.__started = true;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Stops the timer.
     * @returns A promise of the `this` object for chaining.
     */
    AsyncTimer.prototype.stop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.__closed)
                    throw new Error('This timer has been closed.');
                if (this.__stopped)
                    throw new Error('This timer has already been stopped.');
                this.__end = Date.now();
                this.__stopped = true;
                this.__started = false;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Computes the time elapsed between the start and end of the timer.
     *
     * @returns A promise of the `this` object for chaining.
     */
    AsyncTimer.prototype.computeDifference = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.__diff === -1) {
                    this.__diff = this.__end - this.__start;
                }
                this.__started = false;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Returns the time elapsed between the start and end of the timer.
     * @returns The time elapsed.
     */
    AsyncTimer.prototype.getDifference = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.__diff === -1) {
                    this.__diff = this.__end - this.__start;
                }
                this.__started = false;
                return [2 /*return*/, this.__diff];
            });
        });
    };
    /**
     * Closes the timer so it can no longer be used.
     * @returns A promise of the `this` object for chaining.
     */
    AsyncTimer.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.__closed)
                    throw new Error('This timer has already been closed.');
                this.__started = false;
                this.__stopped = false;
                this.__closed = true;
                return [2 /*return*/, this];
            });
        });
    };
    /**
     * Checks whether or not this timer is closed and can't be used anymore.
     * @returns Whether or not this timer is closed.
     */
    AsyncTimer.prototype.isClosed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.__closed];
            });
        });
    };
    /**
     * Checks whether or not this timer is started right now.
     * @returns Whether or not this timer is started.
     */
    AsyncTimer.prototype.isStarted = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.__started];
            });
        });
    };
    /**
     * Checks whether or not this timer is stopped right now.
     * @returns Whether or not this timer is stopped.
     */
    AsyncTimer.prototype.isStopped = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.__stopped];
            });
        });
    };
    return AsyncTimer;
}());
exports.AsyncTimer = AsyncTimer;
