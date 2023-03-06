/**
 * Creates a new `Promise` that resolves after `ms` milliseconds.
 *
 * @param ms The amount of milliseconds to wait (default is 0).
 * @returns A `Promise` that resolves after `ms` milliseconds.
 */
declare function delay(ms?: number): Promise<void>;
declare class AsyncTimer {
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
     * @returns A promise of the `this` object for chaining.
     */
    start(): Promise<this>;
    /**
     * Stops the timer.
     * @returns A promise of the `this` object for chaining.
     */
    stop(): Promise<this>;
    /**
     * Computes the time elapsed between the start and end of the timer.
     *
     * @returns A promise of the `this` object for chaining.
     */
    computeDifference(): Promise<this>;
    /**
     * Returns the time elapsed between the start and end of the timer.
     * @returns The time elapsed.
     */
    getDifference(): Promise<number>;
    /**
     * Closes the timer so it can no longer be used.
     * @returns A promise of the `this` object for chaining.
     */
    close(): Promise<this>;
    /**
     * Checks whether or not this timer is closed and can't be used anymore.
     * @returns Whether or not this timer is closed.
     */
    isClosed(): Promise<boolean>;
    /**
     * Checks whether or not this timer is started right now.
     * @returns Whether or not this timer is started.
     */
    isStarted(): Promise<boolean>;
    /**
     * Checks whether or not this timer is stopped right now.
     * @returns Whether or not this timer is stopped.
     */
    isStopped(): Promise<boolean>;
}
export { AsyncTimer, delay };
