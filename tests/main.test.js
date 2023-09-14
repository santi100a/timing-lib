const Timer = require('../cjs/timer');

describe('Timer class test suite', () => {
	test('it must measure no time between calls', () => {
		for (let i = 0; i < 20; i++) {
			const timer = new Timer().start().stop();
			const time = timer.getDifference();
			expect(time).toBeLessThanOrEqual(1);
		}
	});
	test('getDifference and computeDifference should produce identical output', () => {
		const timer = new Timer();
		timer.start();
		timer.stop();
		const diff1 = timer.getDifference();
		const diff2 = timer.computeDifference().getDifference();

		expect(diff1).toBe(diff2);
	});
	describe('error handling', () => {
		const timer = new Timer();
		test('throws an error if you attempt to start twice', () => {
			expect(() => timer.start().start()).toThrow(Error);
		});
		test('throws an error if you attempt to stop twice', () => {
			expect(() => timer.stop().stop()).toThrow(Error);
		});
		test('throws an error if you try to operate after closure', () => {
			expect(() => timer.close().start()).toThrow(Error);
			expect(() => timer.close().stop()).toThrow(Error);
		});
		test('throws an error if specified a non-string as a label', () => {
			expect(() => new Timer(5)).toThrow(TypeError);
			expect(() => new Timer(true)).toThrow(TypeError);
			expect(() => new Timer(false)).toThrow(TypeError);
			expect(() => new Timer({})).toThrow(TypeError);
			expect(() => new Timer([])).toThrow(TypeError);
		});
		test('throws an error if tried to make more than one timer with the same label', () => {
			expect(() => {
				(() => {})(new Timer('label'), new Timer('label'));
			}).toThrow(new Error("This timer's label must be unique."));
		});
	});
	describe('serialization and deserialization', () => {
		const timer = new Timer();
		timer.start();
		timer.stop();
		test('it can recontruct an object from .toString', () => {
			const rep = timer.toString();
			const regeneratedTimer = Timer.fromString(rep);
			expect(regeneratedTimer).toEqual(timer);
		});
	});
});
