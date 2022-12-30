import { Timer } from './index';
/**
 * Waits ```ms``` milliseconds to resolve the promise.
 * @param ms Milliseconds to wait.
 */
declare function delay(ms: number): Promise<void>;

declare class AsyncTimer extends Timer {
    /**
     * Returns an instance of {@link AsyncTimer}.
     */
    constructor();
    /**
     * Starts the timer.
     * @returns {Promise<AsyncTimer>} ```this``` object for chaining.
     */
    // @ts-expect-error
    start(): Promise<AsyncTimer>;
    /**
     * Stops the timer.
     * @returns {Promise<AsyncTimer>} ```this``` object for chaining.
     */
    // @ts-expect-error
    stop(): Promise<AsyncTimer>;
    /**
     * Gets the difference. Function version of getter ```Timer.prototype.difference```.
     * @returns {Promise<number>} The time elapsed.
     */
    // @ts-expect-error
    getDifference(): Promise<number>;
}

export { delay, AsyncTimer };