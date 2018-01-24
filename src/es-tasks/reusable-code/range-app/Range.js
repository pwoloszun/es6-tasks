MyApp.Models.Range = (function() {

  var EMPTY_RANGE = new Range(0, 0);

  function Range(start, end) {
    this._start = start;
    this._end = end;
  }

  Range.prototype.length = function() {
    return Math.max(this._end - this._start, 0);
  };

  Range.prototype.include = function(value) {
    return this._start < value && value < this._end;
  };

  Range.prototype.intersectsWith = function(otherRange) {
    if (otherRange.isEmpty() || this.isEmpty())
      return false;
    else
      return !((otherRange._end < this._start) || (this._end < otherRange._start));
  };

  Range.prototype.intersection = function(otherRange) {
    if (this.intersectsWith(otherRange))
      return new Range(Math.max(this._start, otherRange._start), Math.min(this._end, otherRange._end));
    else
      return EMPTY_RANGE;
  };

  Range.prototype.equal = function(otherRange) {
    return this._start === otherRange._start && this._end === otherRange._end;
  };

  Range.prototype.covers = function(otherRange) {
    if (otherRange.isEmpty() || this.isEmpty())
      return false;
    else
      return this.include(otherRange._start) && this.include(otherRange._end);
  };

  Range.prototype.isEmpty = function() {
    return this.length() === 0;
  };

  return Range;
})();


