# Changelog

## Version 1.0.6
- Added support for direct import of the `cjs` submodule.
- Added the `close()`, `computeDifference()`, `isClosed()`, `isStarted()` and `isStopped()` methods.
- Dropped support for `Timer.prototype.difference` and `AsyncTimer.prototype.difference`.
- Made `AsyncTimer` its own separate class.
- Used `Object.defineProperty()` instead of `Symbol`s, for improved ES3 compliance.