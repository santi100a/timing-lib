const Timer = require('../index.js').Timer;

test('it must measure no time between calls', () => {
    const timer = new Timer().start().stop();
    const time = timer.difference;
   expect(time)
        .toBe(0);
});