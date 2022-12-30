const PROMISES = require('../promises.js');
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
    const timer = new AsyncTimer();
    const diff = await timer.start()
    .then(t => t.stop())
    .then(t => t.getDifference());
   expect(diff)
        .toBe(0); 
});