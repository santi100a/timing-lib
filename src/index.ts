const opts = {
    enumerable: false,
    writable: true
};

class Timer {
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
     * @returns `this` object for chaining.
     */
    start() {
        if (this.__closed) throw new Error('This timer has been closed.');
        if (this.__started) throw new Error('This timer has already been started.');
        this.__start = Date.now();
        this.__stopped = false;
        this.__started = true;

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
     * Closes the timer so it can no longer be used.
     * @returns `this` object for chaining.
     */
    close() {
        if (this.__closed) throw new Error('This timer has already been closed.');
        this.__closed = true;

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

export default Timer;
export { Timer };
export * as promises from './promises'; 