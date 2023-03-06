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
    test('it must handle errors correctly', () => {
        const timer = new Timer();
        timer.close();
        expect(() => timer.start())
            .toThrowError(Error);
        expect(() => timer.stop())
            .toThrowError(Error);
        expect(() => timer.close())
            .toThrowError(Error);
    });
    test('getDifference and computeDifference should produce identical output', () => {
        const timer = new Timer();
        timer.start();
        timer.stop(); 
        const diff1 = timer.getDifference();
        const diff2 = timer.computeDifference().getDifference();

        expect(diff1).toBe(diff2);
    });
})