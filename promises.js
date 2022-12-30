const { Timer } = require('./index');

async function delay(ms) {
    return new Promise(
        (resolve, reject) => {
            if (typeof ms !== 'number')
                reject(new TypeError('Parameter must be a number.'))
            else 
                setTimeout(resolve, ms);
        }
    )
}
class AsyncTimer extends Timer {
    async start() {
        return super.start();
    }
    async stop() {
        return super.stop();
    }
    async getDifference() {
        return super.difference;
    }
}

exports.AsyncTimer = AsyncTimer;
exports.delay = delay;

