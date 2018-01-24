/* eslint-disable prefer-rest-params */

/*
 * Returns an Array instance containing all arguments passed to function
 * */
function argsToArray() {
}

function argsToArrayTest() {
  const result = argsToArray(1, null, 'imba'); // => [1, null, 'imba']
  console.log(result);
}

/*
 * Calls function passed as first parameter fn, with every other param passed to it
 * Usage:
 * callWithArgs(myFunction, 1, 'xxx') => myFunction(1, 'xxx')
 * callWithArgs(myFunction, [], 'a', 123) => myFunction([], 'a', 123)
 * */
function callWithArgs(fn) {
}

function callWithArgsTest(fn) {
  function myFn() {
    console.log(arguments);
    return 'qq';
  }

  const result = callWithArgs(myFn, 1, 'xxx'); // => myFn(1, 'xxx')
  console.log('1st result', result);
  callWithArgs(myFn, [], 'a', 123); // => myFn([], 'a', 123)
  console.log('2nd result', result);
}

export default function functionsApp() {
  argsToArrayTest();
  callWithArgsTest();
}
