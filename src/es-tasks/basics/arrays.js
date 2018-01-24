/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-use-before-define */

// mutator
function insertAt(array, index, object) {
}

function testInsertAt() {
  let names = ['bob', 'ed', 'joe'];
  names = insertAt(names, 1, 'XXX');
  console.log('testInsertAt', names);
}

// mutator
function deleteAt(array, index) {
}

function testDeleteAt() {
  let names = ['bob', 'ed', 'joe'];
  names = deleteAt(names, 2);
  console.log('testDeleteAt', names);
}

// TODO: pluck
function pluck(list, propertyName) {
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


export default function arraysApp() {
  testInsertAt();
  testDeleteAt();
  testPluck();
}
