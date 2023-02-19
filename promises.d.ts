import { Timer } from './index';
declare function delay(ms?: number): Promise<void>;
declare class AsyncTimer extends Timer {
    stop(): Promise<this>;
    start(): Promise<this>;
    getDifference(): Promise<unknown>;
    /**
     * @deprecated Use {@link AsyncTimer.prototype.getDifference} instead.
     */
    difference: number;
}
export { AsyncTimer, delay };
