MyApp.Models.Timer = (function() {

  function _stopTimingEvent() {
    clearInterval(this._intervalId);
    this._running = false;
  }

  function _trigger(eventName, args, context) {
    var listeners = this._events[eventName] || [], listener;
    for (var i = 0; i < listeners.length; i++) {
      listener = listeners[i];
      listener.apply(this, args);
    }
  }

  function Timer(params) {
    this._duration = params.duration || Number.POSITIVE_INFINITY;
    this._step = params.step || 1;
    this._events = {};
    this._currentTime = 0;
    this._running = false;
  }

  Timer.prototype.on = function(eventName, listener) {
    if (!this._events[eventName])
      this._events[eventName] = [];
    this._events[eventName].push(listener);
  };

  Timer.prototype.start = function() {
    if (this._running)
      return;
    this._running = true;
    _trigger.call(this, "start", [this._currentTime]);

    var that = this;
    this._intervalId = setInterval(function() {
      if (that._currentTime >= that._duration) {
        that.stop();
      } else {
        that._currentTime += that._step;
        _trigger.call(that, "tick", [that._currentTime]);
      }
    }, 1000 * this._step);
  };

  Timer.prototype.stop = function() {
    _stopTimingEvent.call(this);
    _trigger.call(this, "stop", [this._currentTime]);
    this._currentTime = 0;
  };

  Timer.prototype.pause = function() {
    _stopTimingEvent.call(this);
    _trigger.call(this, "pause", [this._currentTime]);
  };

  return Timer;
})();
