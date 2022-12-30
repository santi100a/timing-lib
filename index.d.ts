/**
 * Timer class.
 */
declare class Timer {
    /**
     * Returns an instance of {@link Timer}.
     */
    constructor();
    /**
     * Starts the timer.
     * @returns {Timer} ```this``` object for chaining.
     */
    start(): Timer;
    /**
     * Stops the timer.
     * @returns {Timer} ```this``` object for chaining.
     */
    stop(): Timer;
    /**
     * Difference between starting and ending time (time elapsed).
     */
    get difference(): number;
    /**
     * Gets the difference. Function version of getter ```Timer.prototype.difference```.
     * @returns {number} The time elapsed.
     */
    getDifference(): number;
}
export { Timer };