declare class Timer {
    startTime: number;
    endTime: number;
    /**
     * @deprecated Use {@link Timer.prototype.getDifference} instead.
     */
    difference: number;
    _diff: number;
    constructor();
    start(): this;
    stop(): this;
    getDifference(): number;
}
export { Timer };
