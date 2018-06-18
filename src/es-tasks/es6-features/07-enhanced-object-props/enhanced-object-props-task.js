function defineObjectWithProp(propName, value) {
  //TODO
}

function defineObjectWithMethod(methName, fn) {
  //TODO
}

function testSimple() {
  console.log('obj with prop', defineObjectWithProp('age', 45));

  const fn = function () {
    console.log('method impl');
    return 'bob';
  };
  console.log('obj with meth', defineObjectWithMethod('getName', fn));
}

function defineObjectWithPropGetterSetter(propName, value) {
  // TODO: setter validates new propName value: throws error if undefined or null
}

function testSetterGetter() {
  const obj = defineObjectWithPropGetterSetter('name', 'ed');
  console.log('setter/getter', obj.name);
  obj.name = 'kate';
  console.log('setter/getter', obj.name);
  try {
    obj.name = undefined;
  } catch (e) {
    console.log('setter/getter', e.message);
  }
}


export function enhancedTaskApp() {
  testSetterGetter();
}
