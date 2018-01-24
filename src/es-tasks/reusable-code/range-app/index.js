function rangeExampleUsage(Range) {
  /*
   * Range represents a (start..end) range
   * Constructor takes two params: start, end
   * */
  var range = new Range(10, 99);
  var otherRange = new Range(-10, 20);

  /* include(number) returns true if number ranges from start to end */
  range.include(21); // => true
  range.include(100); // => false

  /* length() returns length of range */
  range.length(); // => 89

  /* intersectsith(otherRange) returns true if intersection of both ranges is not empty */
  range.intersectsWith(otherRange); // => true

  /* equal(otherRange) returns true if both ranges start and end are same */
  range.equal(otherRange); // => false

  /*intersection(otherRange) returns new Range instance that represents intersection of original ranges */
  range.intersection(otherRange); // => newRange (== new Range(10, 20))

  /* covers(otherRange) returns true if range covers otherRange */
  range.covers(otherRange); // => false
}

rangeExampleUsage(MyApp.Models.Range);

function rangeIntersectsWithTest(Range) {
  var range = new Range(10, 20);

  assertEqual(range.intersectsWith(new Range(9, 11)), true);
  assertEqual(range.intersectsWith(new Range(19, 21)), true);
  assertEqual(range.intersectsWith(new Range(11, 19)), true);
  assertEqual(range.intersectsWith(new Range(9, 21)), true);
  assertEqual(range.intersectsWith(new Range(1, 2)), false);
  assertEqual(range.intersectsWith(new Range(21, 22)), false);
}

rangeIntersectsWithTest(MyApp.Models.Range);
