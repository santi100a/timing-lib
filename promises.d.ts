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
export type AsyncTimerCallback<T = void> = (<R extends Promise<any> = Promise<T>>(timer: AsyncTimer) => R) | null;
/**
 * Creates a new `Promise` that resolves after `ms` milliseconds.
 *
 * @param ms The amount of milliseconds to wait (default is 0).
 * @returns A `Promise` that resolves after `ms` milliseconds.
 */
export declare function delay(ms?: number): Promise<void>;
export declare class AsyncTimer<T = void> {
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
     * Creates a new instance of {@link AsyncTimer}.
     * @param label An optional label for this timer. Must be unique to this timer.
     */
    constructor(label?: string | null);
    /**
     * Resets the starting time, ending time, and difference.
     *
     * @returns A `Promise` of the `this` object for chaining.
     */
    reset(): Promise<this>;
    /**
     * Delete the callback for the stopping of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    deleteStopCb(): Promise<this>;
    /**
     * Delete the callback for the starting of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    deleteStartCb(): Promise<this>;
    /**
     * Delete the callback for the closure of the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    deleteCloseCb(): Promise<this>;
    /**
     * Register the callback for the stopping of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is stopped.
     * @returns A `Promise` of the `this` object for chaining.
     */
    registerStopCb(cb: AsyncTimerCallback<T>): Promise<this>;
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is closed.
     * @returns A `Promise` of the `this` object for chaining.
     */
    registerCloseCb(cb: AsyncTimerCallback<T>): Promise<this>;
    /**
     * Register the callback for the closure of the timer.
     *
     * @param cb A callback function, which will be invoked after the timer is started.
     * @returns A `Promise` of the `this` object for chaining.
     */
    registerStartCb(cb: AsyncTimerCallback<T>): Promise<this>;
    /**
     * Starts the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    start(): Promise<this>;
    /**
     * Stops the timer.
     * @returns A `Promise` of the `this` object for chaining.
     */
    stop(): Promise<this>;
    /**
     * Computes the time elapsed between the start and stop of the timer (in milliseconds).
     *
     * @returns A `Promise` of the `this` object for chaining.
     */
    computeDifference(): Promise<this>;
    /**
     * Returns A `Promise` of the time elapsed between the start and end of the timer.
     * @returns A `Promise` of the time elapsed (in milliseconds).
     */
    getDifference(): Promise<number>;
    /**
     * Returns  A `Promise` of the time elapsed between the start and end of the timer in seconds
     * instead of milliseconds.
     *
     * @returns A `Promise` of the time elapsed (in seconds) between the start and end of the timer.
       Differs from {@link Timer.prototype.getDifference} because it retrieves the diff in
       seconds, as opposed to milliseconds.
     */
    getDifferenceSeconds(): Promise<number>;
    /**
     * Reads this timer's label.
     * @returns A `Promise` of this timer's label.
     */
    getLabel(): Promise<string | null>;
    /**
     * Closes the timer so it can no longer be used.
     * @returns A `Promise` of the `this` object for chaining.
     */
    close(): Promise<this>;
    /**
     * Checks whether or not this timer is closed and can't be used anymore.
     * @returns A `Promise` of whether or not this timer is closed.
     */
    isClosed(): Promise<boolean>;
    /**
     * Checks whether or not this timer is started right now.
     * @returns A `Promise` of whether or not this timer is started.
     */
    isStarted(): Promise<boolean>;
    /**
     * Checks whether or not this timer is stopped right now.
     * @returns A `Promise` of whether or not this timer is stopped.
     */
    isStopped(): Promise<boolean>;
    /**
     * Returns A `Promise` of a JSON string representation of this timer.
     *
     * @param beautify Whether or not to beautify (add indentation, whitespace, and line break
     * characters to the returned text) the output, in order to make it easier to read.
     * @returns A `Promise` of a JSON representation of the timer's important metadata
       (see {@link SerializedTimerMetadata}).
     */
    toString(beautify?: boolean): Promise<string>;
    /**
     * Reconstructs a timer from its JSON string representation (see {@link SerializedTimerMetadata}).
     *
     * @param str The output from {@link Timer.prototype.toString} (see {@link SerializedTimerMetadata}).
     * @returns A `Promise` of a brand-new timer, whose internal state is retrieved from `str`.
     */
    static fromString(str: string): Promise<AsyncTimer<any>>;
}
