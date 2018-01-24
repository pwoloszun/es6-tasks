const name = 'module';

function outer() {
  const name = 'outer local';

  function inner1() {
    const name = 'inner1 local';

    function inner2() {
      const name = 'inner2 local';
    }
  }
}

console.log('after outer', name);
