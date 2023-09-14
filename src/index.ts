import ModuleTimer = require('./timer'); 
import createTimer = require('./create-timer');
import * as promises from './promises';

class Timer extends ModuleTimer {
    static promises = promises;
    static createTimer = createTimer;
}

export = Timer;