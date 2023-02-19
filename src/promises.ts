import { Timer } from './index';

async function delay(ms: number = 0): Promise<void> {
    if (typeof ms !== 'number') {
      throw new TypeError('Parameter must be a number.');
    }
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  

class AsyncTimer extends Timer {
    // @ts-expect-error
    async stop() {
        return super.stop();
    }
    // @ts-expect-error
    async start() {
        return super.start();
    }
    // @ts-expect-error
    async getDifference() {
        return super.getDifference();
    }
    /**
     * @deprecated Use {@link AsyncTimer.prototype.getDifference} instead.
     */
    difference: number = -1;
}
Object.defineProperty(AsyncTimer.prototype, 'difference', {
  get: (function(this: typeof AsyncTimer.prototype) {
      console.warn('"Timer.prototype.difference" is deprecated. Use "Timer.prototype.getDifference()" instead.');
      const diff = this.getDifference();
      return diff;
  }).bind(AsyncTimer.prototype),
  set: function(v) {
      // How can I make this actually set the value of this.difference?
  }
});
export { AsyncTimer, delay };