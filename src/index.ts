const opts = {
	enumerable: false,
	writable: true,
};
const LABELS: string[] = [];
function __includes<T = any>(arr: T[], item: T) {
	return arr.indexOf(item) !== -1;
}

type TimerCallback<T = void> = (<R = T>(timer: Timer) => R) | null;
class Timer<T = void> {
	private __start: number;
	private __end: number;
	private __diff: number;
	private __closed: boolean;
	private __started: boolean;
	private __stopped: boolean;
	private __label: string | null;
	private __startCb: TimerCallback<T>;
	private __stopCb: TimerCallback<T>;
	private __closeCb: TimerCallback<T>;

	/**
	 * Creates a new instance of {@link Timer}.
	 * @param label An optional label for this timer. Must be unique to this timer.
	 */
	constructor(label: string | null = null) {
		if (label !== null && label !== undefined && typeof label !== 'string')
			throw new TypeError(
				`The label, if specified, must be of type "string". Got ${label} of type ${typeof label}.`
			);
		this.__start = -1;
		this.__end = -1;
		this.__diff = -1;
		this.__closed = false;
		this.__started = false;
		this.__stopped = false;
		this.__label = label;
		this.__startCb = null;
		this.__stopCb = null;
		this.__closeCb = null;
		if (label !== null && __includes(LABELS, label))
			throw new Error("This timer's label must be unique.");
		if (this.__label !== null) LABELS.push(this.__label);

		Object?.defineProperty?.(this, '__start', opts);
		Object?.defineProperty?.(this, '__end', opts);
		Object?.defineProperty?.(this, '__diff', opts);
		Object?.defineProperty?.(this, '__closed', opts);
		Object?.defineProperty?.(this, '__started', opts);
		Object?.defineProperty?.(this, '__stopped', opts);
		Object?.defineProperty?.(this, '__label', opts);
		Object?.defineProperty?.(this, '__startCb', opts);
		Object?.defineProperty?.(this, '__stopCb', opts);
		Object?.defineProperty?.(this, '__closeCb', opts);
	}
	/**
	 * Resets the starting time, ending time, and difference.
	 *
	 * @returns `this` object for chaining.
	 */
	reset() {
		this.__start = -1;
		this.__end = -1;
		this.__diff = -1;
		this.__started = false;
		this.__stopped = false;

		return this;
	}
	/**
	 * Delete the callback for the stopping of the timer.
	 * @returns `this` object for chaining.
	 */
	deleteStopCb() {
		this.__stopCb = null;

		return this;
	}
	/**
	 * Delete the callback for the starting of the timer.
	 * @returns `this` object for chaining.
	 */
	deleteStartCb() {
		this.__startCb = null;

		return this;
	}
	/**
	 * Delete the callback for the closure of the timer.
	 * @returns `this` object for chaining.
	 */
	deleteCloseCb() {
		this.__closeCb = null;

		return this;
	}
	/**
	 * Register the callback for the stopping of the timer.
	 *
	 * @param cb A callback function, which will be invoked after the timer is stopped.
	 * @returns `this` object for chaining.
	 */
	registerStopCb(cb: TimerCallback<T>) {
		this.__stopCb = cb;

		return this;
	}
	/**
	 * Register the callback for the closure of the timer.
	 *
	 * @param cb A callback function, which will be invoked after the timer is closed.
	 * @returns `this` object for chaining.
	 */
	registerCloseCb(cb: TimerCallback<T>) {
		this.__closeCb = cb;

		return this;
	}
	/**
	 * Register the callback for the closure of the timer.
	 *
	 * @param cb A callback function, which will be invoked after the timer is started.
	 * @returns `this` object for chaining.
	 */
	registerStartCb(cb: TimerCallback<T>) {
		this.__startCb = cb;

		return this;
	}
	/**
	 * Starts the timer.
	 * @returns `this` object for chaining.
	 */
	start() {
		if (this.__closed) throw new Error('This timer has been closed.');
		if (this.__started) throw new Error('This timer has already been started.');
		this.__start = Date.now();
		this.__stopped = false;
		this.__started = true;
		this.__startCb?.(this);

		return this;
	}

	/**
	 * Stops the timer.
	 * @returns `this` object for chaining.
	 */
	stop() {
		if (this.__closed) throw new Error('This timer has been closed.');
		if (this.__stopped) throw new Error('This timer has already been stopped.');
		this.__end = Date.now();
		this.__stopped = true;
		this.__started = false;
		this.__stopCb<T>?.(this);
		return this;
	}

	/**
	 * Computes the time elapsed between the start and end of the timer.
	 *
	 * @returns `this` object for chaining.
	 */
	computeDifference() {
		if (this.__diff === -1) {
			this.__diff = this.__end - this.__start;
		}
		this.__started = false;
		return this;
	}

	/**
	 * Returns the time elapsed between the start and end of the timer.
	 * @returns The time elapsed.
	 */
	getDifference() {
		if (this.__diff === -1) {
			this.__diff = this.__end - this.__start;
		}
		this.__started = true;
		return this.__diff;
	}
	/**
	 * Reads this timer's label.
	 * @returns This timer's label.
	 */
	getLabel() {
		return this.__label;
	}

	/**
	 * Closes the timer so it can no longer be used.
	 * @returns `this` object for chaining.
	 */
	close() {
		if (this.__closed) throw new Error('This timer has already been closed.');
		this.__closed = true;
		this.__closeCb?.(this);
		return this;
	}
	/**
	 * Checks whether or not this timer is closed and can't be used anymore.
	 * @returns Whether or not this timer is closed.
	 */
	isClosed() {
		return this.__closed;
	}
	/**
	 * Checks whether or not this timer is started right now.
	 * @returns Whether or not this timer is started.
	 */
	isStarted() {
		return this.__started;
	}
	/**
	 * Checks whether or not this timer is stopped right now.
	 * @returns Whether or not this timer is stopped.
	 */
	isStopped() {
		return this.__stopped;
	}
}
/**
 * Creates a new instance of {@link Timer}.
 * @param label An optional label. See {@link Timer}.
 * @returns A new instance of `Timer`.
 */
function createTimer<T = void>(label?: string) {
	return new Timer<T>(label);
}

export default Timer;
export { Timer, createTimer };
export * as promises from './promises';
