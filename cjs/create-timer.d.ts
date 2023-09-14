import Timer = require('./timer');
/**
 * Creates a new instance of {@link Timer}.
 * @param label An optional label. See {@link Timer}.
 * @returns A new instance of `Timer`.
 */
declare function createTimer<T = void>(label?: string): Timer<T>;
declare namespace createTimer {
    var createTimer: typeof import("./create-timer");
}
export = createTimer;
