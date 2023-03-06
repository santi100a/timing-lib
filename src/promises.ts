const opts = {
  enumerable: false,
  writable: true
};

/**
 * Creates a new `Promise` that resolves after `ms` milliseconds.
 * 
 * @param ms The amount of milliseconds to wait (default is 0).
 * @returns A `Promise` that resolves after `ms` milliseconds.
 */
async function delay(ms: number = 0): Promise<void> {
    if (typeof ms !== 'number') {
      throw new TypeError('Parameter must be a number.');
    }
    return new Promise(resolve => setTimeout(resolve, ms));
  }

class AsyncTimer {
    private __start: number;
    private __end: number;
    private __diff: number;
    private __closed: boolean;
    private __started: boolean;
    private __stopped: boolean;

    /**
     * Creates a new instance of {@link Timer}.
     */
    constructor() {
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
    async start() {
        if (this.__closed) throw new Error('This timer has been closed.');
        if (this.__started) throw new Error('This timer has already been started.');
        this.__start = Date.now();
        this.__stopped = false;
        this.__started = true;

        return this;
    }

    /**
     * Stops the timer.
     * @returns A promise of the `this` object for chaining.
     */
    async stop() {
        if (this.__closed) throw new Error('This timer has been closed.');
        if (this.__stopped) throw new Error('This timer has already been stopped.');
        this.__end = Date.now();
        this.__stopped = true;
        this.__started = false;
        return this;
    }    

    /**
     * Computes the time elapsed between the start and end of the timer.
     * 
     * @returns A promise of the `this` object for chaining.
     */
    async computeDifference() {
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
    async getDifference() {
        if (this.__diff === -1) {
            this.__diff = this.__end - this.__start;
        }
        this.__started = false;
        return this.__diff;
    }
    /**
     * Closes the timer so it can no longer be used.
     * @returns A promise of the `this` object for chaining.
     */
    async close() {
        if (this.__closed) throw new Error('This timer has already been closed.');
        this.__started = false;
        this.__stopped = false;
        this.__closed = true;

        return this;
    }
    /**
     * Checks whether or not this timer is closed and can't be used anymore.
     * @returns Whether or not this timer is closed.
     */
    async isClosed() {
        return this.__closed;
    }
    /**
     * Checks whether or not this timer is started right now.
     * @returns Whether or not this timer is started.
     */
    async isStarted() {
        return this.__started;
    }
    /**
     * Checks whether or not this timer is stopped right now.
     * @returns Whether or not this timer is stopped.
     */
    async isStopped() {
        return this.__stopped;
    }
}
export { AsyncTimer, delay }; 