import ModuleTimer = require('./timer');
import createTimer = require('./create-timer');
import * as promises from './promises';
declare class Timer extends ModuleTimer {
    static promises: typeof promises;
    static createTimer: typeof createTimer;
}
export = Timer;
