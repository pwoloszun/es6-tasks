/* eslint-disable prefer-const */
let name = 'module';

function outer() {
  let name = 'outer';

  function inner1() {
    let name = 'inner1';

    function inner2() {
      let name = 'inner2';
    }

    inner2();
  }

  inner1();
}

outer();
console.log('after outer()', name);
