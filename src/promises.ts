const opts = {
	enumerable: false,
	writable: true,
};
export interface SerializedTimerMetadata {
	start_time: number;
	stop_time: number;
	diff: number;
	is_closed: boolean;
	label: string | null;
}
export interface SerializedTimer {
	serialization_time: number;
	metadata: SerializedTimerMetadata;
}
export type AsyncTimerCallback<T = void> =
	| (<R extends Promise<any> = Promise<T>>(timer: AsyncTimer) => R)
	| null;
const LABELS: string[] = [];
function __includes<T = any>(arr: T[], item: T) {
	return arr.indexOf(item) !== -1;
}

/**
 * Creates a new `Promise` that resolves after `ms` milliseconds.
 *
 * @param ms The amount of milliseconds to wait (default is 0).
 * @returns A `Promise` that resolves after `ms` milliseconds.
 */
export async function delay(ms: number = 0): Promise<void> {
	if (typeof ms !== 'number') {
		throw new TypeError('Parameter must be a number.');
	}
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export class AsyncTimer<T = void> {
	private __label: string | null;

	private __startTime: number;
	private __stopTime: number;
	private __diff: number;

	private __isClosed: boolean;
	private __isStarted: boolean;
	private __isStopped: boolean;

	private __startCb: AsyncTimerCallback<T>;
	private __stopCb: AsyncTimerCallback<T>;
	private __closeCb: AsyncTimerCallback<T>;

	/**
	 * Creates a new instance of {@link AsyncTimer}.
	 * @param label An optional label for this timer. Must be unique to this timer.
	 */
	constructor(label: string | null = null) {
		if (label !== null && label !== undefined && typeof label !== 'string')
			throw new TypeError(
				`The label, if specified, must be of type "string". Got ${label} of type ${typeof label}.`
			);

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
		if (this.__label !== null) LABELS.push(this.__label);

		Object?.defineProperty?.(this, '__startTime', opts);
		Object?.defineProperty?.(this, '__stopTime', opts);
		Object?.defineProperty?.(this, '__diff', opts);
		Object?.defineProperty?.(this, '__isClosed', opts);
		Object?.defineProperty?.(this, '__isStarted', opts);
		Object?.defineProperty?.(this, '__isStopped', opts);
		Object?.defineProperty?.(this, '__label', opts);
		Object?.defineProperty?.(this, '__startCb', opts);
		Object?.defineProperty?.(this, '__stopCb', opts);
		Object?.defineProperty?.(this, '__closeCb', opts);
	}
	/**
	 * Resets the starting time, ending time, and difference.
	 *
	 * @returns A `Promise` of the `this` object for chaining.
	 */
	async reset() {
		this.__startTime = -1;
		this.__stopTime = -1;
		this.__diff = -1;
		this.__isStarted = false;
		this.__isStopped = false;

		return this;
	}
	/**
	 * Delete the callback for the stopping of the timer.
	 * @returns A `Promise` of the `this` object for chaining.
	 */
	async deleteStopCb() {
		this.__stopCb = null;

		return this;
	}
	/**
	 * Delete the callback for the starting of the timer.
	 * @returns A `Promise` of the `this` object for chaining.
	 */
	async deleteStartCb() {
		this.__startCb = null;

		return this;
	}
	/**
	 * Delete the callback for the closure of the timer.
	 * @returns A `Promise` of the `this` object for chaining.
	 */
	async deleteCloseCb() {
		this.__closeCb = null;

		return this;
	}
	/**
	 * Register the callback for the stopping of the timer.
	 *
	 * @param cb A callback function, which will be invoked after the timer is stopped.
	 * @returns A `Promise` of the `this` object for chaining.
	 */
	async registerStopCb(cb: AsyncTimerCallback<T>) {
		this.__stopCb = cb;

		return this;
	}
	/**
	 * Register the callback for the closure of the timer.
	 *
	 * @param cb A callback function, which will be invoked after the timer is closed.
	 * @returns A `Promise` of the `this` object for chaining.
	 */
	async registerCloseCb(cb: AsyncTimerCallback<T>) {
		this.__closeCb = cb;

		return this;
	}
	/**
	 * Register the callback for the closure of the timer.
	 *
	 * @param cb A callback function, which will be invoked after the timer is started.
	 * @returns A `Promise` of the `this` object for chaining.
	 */
	async registerStartCb(cb: AsyncTimerCallback<T>) {
		this.__startCb = cb;

		return this;
	}
	/**
	 * Starts the timer.
	 * @returns A `Promise` of the `this` object for chaining.
	 */
	async start() {
		if (this.__isClosed) throw new Error('This timer has been closed.');
		if (this.__isStarted)
			throw new Error('This timer has already been started.');
		this.__startTime = Date.now();
		this.__isStopped = false;
		this.__isStarted = true;
		this.__startCb?.(this);

		return this;
	}

	/**
	 * Stops the timer.
	 * @returns A `Promise` of the `this` object for chaining.
	 */
	async stop() {
		if (this.__isClosed) throw new Error('This timer has been closed.');
		if (this.__isStopped)
			throw new Error('This timer has already been stopped.');
		this.__stopTime = Date.now();
		this.__isStopped = true;
		this.__isStarted = false;
		this.__stopCb<Promise<T>>?.(this);
		return this;
	}

	/**
	 * Computes the time elapsed between the start and stop of the timer (in milliseconds).
	 *
	 * @returns A `Promise` of the `this` object for chaining.
	 */
	async computeDifference() {
		if (!this.__isStopped) throw new Error("This timer hasn't been stopped.");
		if (this.__diff === -1) this.__diff = this.__stopTime - this.__startTime;

		return this;
	}

	/**
	 * Returns A `Promise` of the time elapsed between the start and end of the timer.
	 * @returns A `Promise` of the time elapsed (in milliseconds).
	 */
	async getDifference() {
		if (this.__diff === -1) await this.computeDifference();
		return this.__diff;
	}
	/**
	 * Returns  A `Promise` of the time elapsed between the start and end of the timer in seconds
	 * instead of milliseconds.
	 * 
	 * @returns A `Promise` of the time elapsed (in seconds) between the start and end of the timer.
	   Differs from {@link Timer.prototype.getDifference} because it retrieves the diff in 
	   seconds, as opposed to milliseconds.
	 */
	async getDifferenceSeconds() {
		if (this.__diff === -1) await this.computeDifference();

		return this.__diff / 1_000;
	}
	/**
	 * Reads this timer's label.
	 * @returns A `Promise` of this timer's label.
	 */
	async getLabel() {
		return this.__label;
	}

	/**
	 * Closes the timer so it can no longer be used.
	 * @returns A `Promise` of the `this` object for chaining.
	 */
	async close() {
		if (this.__isClosed) throw new Error('This timer has already been closed.');
		this.__isClosed = true;
		this.__closeCb?.(this);
		return this;
	}
	/**
	 * Checks whether or not this timer is closed and can't be used anymore.
	 * @returns A `Promise` of whether or not this timer is closed.
	 */
	async isClosed() {
		return this.__isClosed;
	}
	/**
	 * Checks whether or not this timer is started right now.
	 * @returns A `Promise` of whether or not this timer is started.
	 */
	async isStarted() {
		return this.__isStarted;
	}
	/**
	 * Checks whether or not this timer is stopped right now.
	 * @returns A `Promise` of whether or not this timer is stopped.
	 */
	async isStopped() {
		return this.__isStopped;
	}
	/**
	 * Returns A `Promise` of a JSON string representation of this timer.
	 *
	 * @param beautify Whether or not to beautify (add indentation, whitespace, and line break
	 * characters to the returned text) the output, in order to make it easier to read.
	 * @returns A `Promise` of a JSON representation of the timer's important metadata 
       (see {@link SerializedTimerMetadata}).
	 */
	async toString(beautify = false) {
		if (typeof beautify !== 'boolean')
			throw new TypeError(
				`"beautify", if specified, must be of type "boolean". Got ${beautify} of type ${typeof beautify}.`
			);
		const meta: SerializedTimer = {
			serialization_time: Date.now(),
			metadata: {
				start_time: this.__startTime,
				stop_time: this.__stopTime,
				diff: this.__diff,
				is_closed: this.__isClosed,
				label: this.__label,
			},
		};
		return beautify ? JSON.stringify(meta, null, 4) : JSON.stringify(meta);
	}
	/**
	 * Reconstructs a timer from its JSON string representation (see {@link SerializedTimerMetadata}).
	 *
	 * @param str The output from {@link Timer.prototype.toString} (see {@link SerializedTimerMetadata}).
	 * @returns A `Promise` of a brand-new timer, whose internal state is retrieved from `str`.
	 */
	static async fromString(str: string) {
		if (typeof str !== 'string')
			throw new TypeError(
				`"str" must be of type "string". Got "${str}" of type "${typeof str}".`
			);
		const { metadata, serialization_time } = JSON.parse(str) as SerializedTimer;
		if (!(metadata instanceof Object))
			throw new TypeError(
				`"metadata" must be an Object. Got "${metadata}" of type "${typeof metadata}".`
			);
		if (typeof serialization_time !== 'number')
			throw new TypeError(
				`"serialization_time" must be of type "number". Got "${serialization_time}" of type "${typeof serialization_time}".`
			);
		if (typeof metadata.diff !== 'number')
			throw new TypeError(
				`"metadata.diff" must be of type "number". Got "${
					metadata.diff
				}" of type "${typeof metadata.diff}".`
			);
		if (typeof metadata.is_closed !== 'boolean')
			throw new TypeError(
				`"metadata.is_closed" must be of type "boolean". Got "${
					metadata.is_closed
				}" of type "${typeof metadata.is_closed}".`
			);
		if (metadata.label !== null && typeof metadata.label !== 'string')
			throw new TypeError(
				`"metadata.label", if specified, must be of type "string". Got "${
					metadata.label
				}" of type "${typeof metadata.label}".`
			);
		if (typeof metadata.start_time !== 'number')
			throw new TypeError(
				`"metadata.start_time" must be of type "number". Got "${
					metadata.start_time
				}" of type "${typeof metadata.start_time}".`
			);
		if (typeof metadata.stop_time !== 'number')
			throw new TypeError(
				`"metadata.stop_time" must be of type "number". Got "${
					metadata.stop_time
				}" of type "${typeof metadata.stop_time}".`
			);
		// End error handling
		const timer = new this<any>(metadata.label);
		timer.__isClosed = metadata.is_closed;
		timer.__diff = metadata.diff;
		timer.__startTime = metadata.start_time;
		timer.__stopTime = metadata.stop_time;

		return timer;
	}
}
