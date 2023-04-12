const Timer = require('../cjs/index.js').Timer;

describe('Timer class test suite', () => {
    test('it must measure no time between calls', () => {
        for (let i = 0; i < 20; i++) {
            const timer = new Timer().start().stop();
            const time = timer.getDifference();
           expect(time)
                .toBe(0);
        };
    });
    test('getDifference and computeDifference should produce identical output', () => {
        const timer = new Timer;
        timer.start();
        timer.stop(); 
        const diff1 = timer.getDifference();
        const diff2 = timer.computeDifference().getDifference();

        expect(diff1).toBe(diff2);
    });
    describe('error handling', () => {
        const timer = new Timer;
        test('throws an error if you attempt to start twice', () => {
            expect(() => timer.start().start())
                .toThrowError(Error);
        });
        test('throws an error if you attempt to stop twice', () => {
            expect(() => timer.stop().stop())
                .toThrowError(Error);
        });
        test('throws an error if you try to operate after closure', () => {
            expect(() => timer.close().start())
                .toThrowError(Error);
            expect(() => timer.close().stop())
                .toThrowError(Error);
        });
        test('throws an error if specified a non-string as a label', () => {
            expect(() => new Timer(5))
                .toThrowError(TypeError);
            expect(() => new Timer(true))
                .toThrowError(TypeError);
            expect(() => new Timer(false))
                .toThrowError(TypeError);
            expect(() => new Timer({}))
                .toThrowError(TypeError);
            expect(() => new Timer([]))
                .toThrowError(TypeError);
        });
        test('throws an error if tried to make more than one timer with the same label', () => {
            expect(() => {
                const _ = new Timer('label');
                const __ = new Timer('label');
            })
                .toThrow(new Error("This timer's label must be unique."));
        });
    });
});