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

//eachTest();

/*
 * Maps each array element, using function fn
 * */
function map(fn) {
}

function testMap() {
  [1, 2, 3, 4].map(function (i) {
    return i % 2 === 0;
  }); // => [2, 4]

  ['Kate', 'Bob', 'Ed'].map(function (name) {
    return 'Hello ' + name;
  }); // => ['Hello Kate', 'Hello Bob', 'Hello Ed']
}


/*
 * Filters array using boolean function fn and returns new instance
 * containing only filtered elements
 * */
function filter(fn) {
}

function testFilter() {
  [1, 2, 3, 4].filter(function (i) {
    return i > 2.4;
  }); // => [3, 4]

  ['Kate', 'Bob', 'Ed', 'Ben'].filter(function (name) {
    return name[0] === 'B';
  }); // => ['Bob', 'Ben']
}

// TODO: all
function all(list, test) {
  return false;
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

// const obj = {name: 'bob'};
// for (const propertyName in obj) {
//   const value = obj[propertyName];
// }

// TODO: merge
function merge(destination, source) {
}

function testMerge() {
  // should return => {xxx: 'qq', yyy: 2, zzz: 3}
  console.log('merge:', merge({ xxx: 1, yyy: 2 }, { xxx: 'qq', zzz: 3 }));
}

// TODO: reduce
function reduce(list, accumulatorFn, startValue) {
  return [];
}

function testReduce() {
  const sumFn = function (memo, item, index, list) {
    return memo + item;
  };
  // should return => 10
  console.log('reduce 1:', reduce([2, 5, 7], sumFn, -4));

  const mergeFn = function (memo, item, index, list) {
    return merge(memo, item);
  };
  // should return => {name: 'bob', age: 12, sex: 'M'}
  const objs = [{ name: 'bob' }, { age: 12 }, { sex: 'M' }];
  const results = reduce(objs, mergeFn, {});
  console.log('reduce 2:', results);
}

// TODO: pluck
function pluck(list, propertyName) {
  return [];
}

function testPluck() {
  const people = [
    { name: 'Bob', age: 12, sex: 'M' },
    { name: 'Kate', age: 22, sex: 'F' },
    { name: 'Ed', age: 34, sex: 'M' },
  ];
  // should return => ['Bob', 'Kate', 'Ed']
  console.log('pluck 1:', pluck(people, 'name'));

  // should return => ['M', 'F', 'M']
  console.log('pluck 2:', pluck(people, 'sex'));
}

// TODO: groupBy
function groupBy(list, groupingFn) {
  return {};
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

export function closuresApp() {
  testAll();
  testFilter();
  testGroupBy();
  testMap();
  testMerge();
  testPluck();
  testReduce();
}
