/*
 * Calls given function fn in context of object contextObj, with every
 * other parameter passed to function
 * */
function callInContext(fn, contextObj) {
}

function callInContextTest() {
  function myFn() {
    console.log('Context', this, 'Args', arguments);
  }

  const bob = { name: 'Bob' };
  callInContext(myFn, bob, 1, 'xxx', []);
}

//callInContextTest();

/*
 * console.log() shortcut
 * */
function log() {
}

function logTest() {
  console.log(1, 'qq', []);
  log(1, 'qq', []);
}

//logTest();

/*
 * Binds function fn to context contextObj, and returns binded function
 * Each time binded function is called, its called in context of contextObj
 * */
function bind(contextObj, fn) {
}

function bindTest() {
  const bob = { name: 'Bob' };
  const fn = function () {
    console.log('Context', this, 'Args', arguments);
    return 123;
  };

  const bindedFn = bind(bob, fn);

  const result = bindedFn(31, new Date());
  console.log('first result', result); // => 123
  setTimeout(bindedFn, 1000);// => Bob
  const kate = { name: 'KAte' };
  bindedFn.call(kate, 12, new Date('1970-03-22')); // => Bob
  console.log('second result', result); // => 123
}

//bindTest();

export default function contextApp() {
  callInContextTest();
  // logTest();
  // bindTest();
}
