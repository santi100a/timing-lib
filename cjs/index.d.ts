type TimerCallback<T = void> = null | (<R = T>(timer: Timer) => R);
declare class Timer<T = void> {
    private __start;
    private __end;
    private __diff;
    private __closed;
    private __started;
    private __stopped;
    private __label;
    private __startCb;
    private __stopCb;
    private __closeCb;
    /**
     * Creates a new instance of {@link Timer}.
     * @param label An optional label for this timer. Must be unique to this timer.
     */
    constructor(label?: string);
    /**
     * Resets the starting time, ending time, and difference.
     *
     * @returns `this` object for chaining.
     */
    reset(): this;
    /**
     * Delete the callback for the stopping of the timer.
     * @returns `this` object for chaining.
     */
    deleteStopCb(): this;
    /**
     * Delete the callback for the starting of the timer.
     * @returns `this` object for chaining.
     */
    deleteStartCb(): this;
    /**
     * Delete the callback for the closure of the timer.
     * @returns `this` object for chaining.
     */
    deleteCloseCb(): this;
    /**
     * Register the callback for the stopping of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is stopped.
     */
    registerStopCb(cb: TimerCallback<T>): this;
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is closed.
     */
    registerCloseCb(cb: TimerCallback<T>): void;
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is started.
     */
    registerStartCb(cb: TimerCallback<T>): void;
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
     * Reads this timer's label.
     * @returns This timer's label.
     */
    getLabel(): string | null;
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
/**
 * Creates a new instance of {@link Timer}.
 * @param label An optional label. See {@link Timer}.
 * @returns A new instance of `Timer`.
 */
declare function createTimer<T = void>(label?: string): Timer<T>;
export default Timer;
export { Timer, createTimer };
export * as promises from './promises';
