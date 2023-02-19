const Timer = require('../cjs/index.js').Timer;

test('it must measure no time between calls', () => {
    const timer = new Timer().start().stop();
    const time = timer.getDifference();
   expect(time)
        .toBe(0);
});