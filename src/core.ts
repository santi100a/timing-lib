export const opts = {
	enumerable: false,
	writable: true
};
export const LABELS: string[] = [];
export function __includes<T = unknown>(arr: T[], item: T) {
	return arr.indexOf(item) !== -1;
}
export type TimerCallback<T = void> =
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	(<_ = unknown>(timer: import('./timer')<T>) => T) | null;
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
