/*
 * Calls function fn for each element of array
 * */
function each(fn) {
}

function eachTest() {
  [1, 2, 3].each(function (i) {
    console.log(i);
  }); // => logs on console: 1, 2, 3

  ['Bob', 'Kate'].each(function (name) {
    console.log(name);
  }); // => logs on console: 'Bob', 'Kate'
}

// TODO: map
function map(list, mapper) {
}

function testMap() {
  const names = ['Bob', 'Ed', 'Kate'];
  const mapper = (name) => {
    return 'Hello, ' + name;
  };
  const greetings = map(names, mapper);
  console.log('map:', greetings);
}

// TODO: filter
function filter(list, filteringAlgorithm) {
}

function testFilter() {
  const names = ['Bob', 'Ed', 'Brian', 'Ben', 'Kate'];
  const startingWithB = (name) => {
    return name[0].toUpperCase() === 'B';
  };
  const namesStartingWithB = filter(names, startingWithB);
  console.log('filter:', namesStartingWithB);
}

// TODO: merge
function merge(destination, source) {
}

function testMerge() {
  // should return => {xxx: 'qq', yyy: 2, zzz: 3}
  console.log('merge:', merge({ xxx: 1, yyy: 2 }, { xxx: 'qq', zzz: 3 }));
}

// TODO: reduce
function reduce(list, iterator) {
}

function testReduce() {
  const sumFn = function (memo, item, index, list) {
    return memo + item;
  };
  // should return => 14
  console.log('reduce 1:', reduce([2, 5, 7], sumFn));

  const mergeFn = function (memo, item, index, list) {
    return merge(memo, item);
  };
  // should return => {name: 'bob', age: 12, sex: 'M'}
  console.log('reduce 2:', reduce([{ name: 'bob' }, { age: 12 }, { sex: 'M' }], mergeFn));
}

// TODO: all
function all(list, test) {
}

function testAll() {
  // should return => false
  const greaterThanZero = function (item, index) {
    return item > 0;
  };
  console.log('all 1:', all([3, 5, -1, 9], greaterThanZero));

  // should return => true
  const firstLetterIsB = function (item, index) {
    return item[0] === 'B';
  };
  console.log('all 2:', all(['Bob', 'Ben', 'Beth'], firstLetterIsB));
}

// TODO: groupBy
function groupBy(list, iterator) {
}

function testGroupBy() {
  const names = ['Bob', 'Ed', 'Kate', 'Bo', 'Ann', 'Eve'];

  // should return => {2: ['Ed', 'Bo'], 3: ['Bob', 'Ann', 'Eve'], 4: ['Kate']}
  const byLength = function (item) {
    return item.length;
  };
  console.log('groupBy 1:', groupBy(names, byLength));

  // should return => {A: ['Ann'], B: ['Bob', 'Bo'], E: ['Ed', 'Eve'], K: ['Kate']}
  const byFirstLetter = function (item) {
    return item[0];
  };
  console.log('groupBy 2:', groupBy(names, byFirstLetter));
}


/*
 * Returns first (from left) element which satisfy boolean function fn
 * */
function find(list, fn) {
}

function uniq(list, fn) {
}

export default function closuresApp() {
  testAll();
  testFilter();
  testGroupBy();
  testMap();
  testMerge();
  testReduce();
}
