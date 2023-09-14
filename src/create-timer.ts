import Timer = require('./timer');

/**
 * Creates a new instance of {@link Timer}.
 * @param label An optional label. See {@link Timer}.
 * @returns A new instance of `Timer`.
 */

function createTimer<T = void>(label?: string) {
	return new Timer<T>(label);
}
createTimer.createTimer = createTimer; // for backward compatiblity

export = createTimer;