"use strict";
var Timer = require("./timer");
/**
 * Creates a new instance of {@link Timer}.
 * @param label An optional label. See {@link Timer}.
 * @returns A new instance of `Timer`.
 */
function createTimer(label) {
    return new Timer(label);
}
createTimer.createTimer = createTimer; // for backward compatiblity
module.exports = createTimer;
