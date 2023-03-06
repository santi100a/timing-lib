const PROMISES = require('../cjs/promises.js');
const { delay, AsyncTimer } = PROMISES;

test('the async delay function must wait around 1/2 seconds (±10ms)', async () => {
    const a = Date.now();
    await delay(500);
    const b = Date.now();
    const c = b - a;
   expect(c <= 510 || c >= 490)
        .toBe(true);
});
test('the async timer must measure no time between calls', async() => {
    for (let i = 0; i < 20; i++) {
        const timer = new AsyncTimer();
        const timer2 = await timer.start();
        const timer3 = await timer2.stop();
        const diff = await timer3.getDifference();

        expect(diff)
        .toBe(0); 
    }
}); 