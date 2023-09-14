import { TimerCallback } from './core';
declare class Timer<T = void> {
    static 'default': typeof Timer;
    static Timer: typeof Timer;
    private __label;
    private __startTime;
    private __stopTime;
    private __diff;
    private __isClosed;
    private __isStarted;
    private __isStopped;
    private __startCb;
    private __stopCb;
    private __closeCb;
    /**
     * Creates a new instance of {@link Timer}.
     * @param label An optional label for this timer. Must be unique to this timer.
     */
    constructor(label?: string | null);
    /**
     * Resets the starting time, ending time, and difference.
     *
     * @returns `this` object for chaining.
     */
    reset(): this;
    /**
     * Delete the callback for the stopping of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    deleteOnStop(): this;
    /**
     * Delete the callback for the starting of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    deleteOnStart(): this;
    /**
     * Delete the callback for the closure of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    deleteOnClose(): this;
    /**
     * Register the callback for the stopping of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is stopped.
     * @returns A `Promise` of the `this` object for chaining.
     */
    onStop(cb: TimerCallback<T>): this;
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is closed.
     * @returns A `Promise` of the `this` object for chaining.
     */
    onClose(cb: TimerCallback<T>): this;
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is started.
     * @returns A `Promise` of the `this` object for chaining.
     */
    onStart(cb: TimerCallback<T>): this;
    /**
     * Delete the callback for the stopping of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     * @deprecated Use {@link deleteOnStop} instead.
     */
    deleteStopCb(): this;
    /**
     * Delete the callback for the starting of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     * @deprecated Use {@link deleteOnStart} instead.
     */
    deleteStartCb(): this;
    /**
     * Delete the callback for the closure of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     * @deprecated Use {@link deleteOnClose} instead.
     *
     */
    deleteCloseCb(): this;
    /**
     * Register the callback for the stopping of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is stopped.
     * @returns A `Promise` of the `this` object for chaining.
     * @deprecated Use {@link onStop} instead.
     *
     */
    registerStopCb(cb: TimerCallback<T>): this;
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is closed.
     * @returns A `Promise` of the `this` object for chaining.
     * @deprecated Use {@link onClose} instead.
     */
    registerCloseCb(cb: TimerCallback<T>): this;
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is started.
     * @returns A `Promise` of the `this` object for chaining.
     * @deprecated Use {@link onStart} instead.
     */
    registerStartCb(cb: TimerCallback<T>): this;
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
     * Computes the time elapsed between the start and end of the timer (in milliseconds).
     *
     * @returns `this` object for chaining.
     */
    computeDifference(): this;
    /**
     * Returns the time elapsed between the start and end of the timer.
     * @returns The time elapsed (in milliseconds).
     */
    getDifference(): number;
    /**
     * Returns the time elapsed between the start and end of the timer in seconds
     * instead of milliseconds.
     *
     * @returns The time (in seconds) elapsed between the start and end of the timer.
       Differs from {@link Timer.prototype.getDifference} because it retrieves the diff in
       seconds, as opposed to milliseconds.
     */
    getDifferenceSeconds(): number;
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
    /**
     * Returns a JSON string representation of this timer.
     *
     * @param beautify Whether or not to beautify (add indentation, whitespace, and line break
     * characters to the returned text) the output, in order to make it easier to read.
     * @returns A JSON representation of the timer's important metadata (see {@link SerializedTimerMetadata}).
     */
    toString(beautify?: boolean): string;
    /**
     * Reconstructs a timer from its JSON string representation (see {@link SerializedTimerMetadata}).
     *
     * @param str The output from {@link Timer.prototype.toString} (see {@link SerializedTimerMetadata}).
     * @returns A brand-new timer, whose internal state is retrieved from `str`.
     */
    static fromString(str: string): Timer<never>;
}
export = Timer;
