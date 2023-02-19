# Santi's Timing Library

This is a library to keep track of time. It provides a class to create timer objects.
It also provides a submodule called `promises`, with an asynchronous version of such a class, and 
a promise-based time-out to wait.

## Functions
### Main (`index.js`) module
- `class Timer` **(class):** Timer class.
- `new Timer` **(constructor):** Returns an instance of Timer.
- `Timer.prototype.start(): Timer` **(function):** Starts the timer. 
Returns `this` object for chaining.
- `Timer.prototype.stop(): Timer` **(function):** Stops the timer.
Returns `this` object for chaining.
- ~~`get Timer.prototype.difference(): number`~~ **(DEPRECATED value):** Difference between starting and 
ending time (time elapsed). 
**This will be removed at any time, so stop using it.**
- `Timer.prototype.getDifference(): number` **(function):** Returns the time elapsed between the call to `start` and the call to `end`.
### Async (`promises.js`) module
- `class AsyncTimer` **(class):** Timer class.
- `new AsyncTimer` **(constructor):** Returns an instance of AsyncTimer.
- `AsyncTimer.prototype.start(): Promise<AsyncTimer>` **(function):** Starts the async timer. 
Returns a promise of the `this` object for chaining.
- `AsyncTimer.prototype.stop(): Promise<AsyncTimer>` **(function):** Stops the async timer.
Returns a promise of the `this` object for chaining.
- ~~`get AsyncTimer.prototype.difference(): number`~~ **(DEPRECATED value):** 
Difference between starting and ending time (time elapsed). 
It's a non-promise, since it's inherited from ```Timer```. 
**This will be removed at any time, so stop using it.**
- `AsyncTimer.prototype.getDifference(): Promise<number>` **(function):** Gets the difference as 
a promise. Returns the time elapsed.
