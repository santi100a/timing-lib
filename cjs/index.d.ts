declare class Timer {
    private __start;
    private __end;
    private __diff;
    private __closed;
    private __started;
    private __stopped;
    /**
     * Creates a new instance of {@link Timer}.
     */
    constructor();
    /**
     * Starts the timer.
     * @returns `this` object for chaining.
     */
    start(): this;
    /**
     * Stops the timer.
     * @returns `this` object for chaining.
     */
    stop(): this;
    /**
     * Computes the time elapsed between the start and end of the timer.
     *
     * @returns `this` object for chaining.
     */
    computeDifference(): this;
    /**
     * Returns the time elapsed between the start and end of the timer.
     * @returns The time elapsed.
     */
    getDifference(): number;
    /**
     * Closes the timer so it can no longer be used.
     * @returns `this` object for chaining.
     */
    close(): this;
    /**
     * Checks whether or not this timer is closed and can't be used anymore.
     * @returns Whether or not this timer is closed.
     */
    isClosed(): boolean;
    /**
     * Checks whether or not this timer is started right now.
     * @returns Whether or not this timer is started.
     */
    isStarted(): boolean;
    /**
     * Checks whether or not this timer is stopped right now.
     * @returns Whether or not this timer is stopped.
     */
    isStopped(): boolean;
}
export default Timer;
export { Timer };
export * as promises from './promises';
