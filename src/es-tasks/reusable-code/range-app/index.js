import Range from './Range';

export default function rangeApp() {
  /*
   * Range represents a (start..end) range
   * Constructor takes two params: start, end
   * */
  const range = new Range(10, 99);
  const otherRange = new Range(-10, 20);

  /* include(number) returns true if number ranges from start to end */
  console.log('incl 21', range.include(21));
  console.log('incl 100', range.include(100));

  /* length() returns length of range */
  console.log('length', range.length());

  /* intersectsith(otherRange) returns true if intersection of both ranges is not empty */
  // range.intersectsWith(otherRange); // => true

  /* equal(otherRange) returns true if both ranges start and end are same */
  // range.equal(otherRange); // => false

  // intersection(otherRange) returns new Range instance that represents
  // intersection of original ranges */
  // range.intersection(otherRange); // => newRange (== new Range(10, 20))

  /* covers(otherRange) returns true if range covers otherRange */
  // range.covers(otherRange); // => false
}
