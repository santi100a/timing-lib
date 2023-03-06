const PROMISES = require('../cjs/promises.js');
const { delay, AsyncTimer } = PROMISES;
const ERROR_MS = 10;
const DELAY = 500;

describe('promises module test suite', () => {
    test('the delay and async timer must be valid', () => {
        expect(typeof delay)
            .toBe('function');
        expect(typeof AsyncTimer)
            .toBe('function');
    });
    test('the async delay function must wait around 1/2 seconds (±10ms)', async () => {
        const a = Date.now();
        await delay(DELAY);
        const b = Date.now();
        const c = b - a;
       expect(c <= DELAY + ERROR_MS || c >= DELAY - ERROR_MS)
            .toBe(true);
    });

});