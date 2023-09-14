export declare const opts: {
    enumerable: boolean;
    writable: boolean;
};
export declare const LABELS: string[];
export declare function __includes<T = unknown>(arr: T[], item: T): boolean;
export type TimerCallback<T = void> = (<_ = unknown>(timer: import('./timer')<T>) => T) | null;
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
