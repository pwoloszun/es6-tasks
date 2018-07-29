function xxx(name, age) {
  console.log('xxx fun', arguments);
}

export function testSpreadOperator() {
  // array.splice(index, toDeleteCount, o1, o2, o3, o4);

  const names = ['bob', 'ed', 'kate'];
  const copy = ['greg', ...names, 'batman'];

  const bob = {
    name: 'bob',
    age: 67,
    children: [],
  };
  const bobBis = {
    lastName: 'smith',
    ...bob,
    name: 'bobbyy',
    father: {}
  };

  const args = ['bob', 12, null];
  xxx(...args);
  xxx(args[0], args[1], args[2]);
}

