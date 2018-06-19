function defineObjectWithProp(propName, value) {
  //TODO
}

function testDepProp() {
  console.log('obj with prop', defineObjectWithProp('age', 45));
}

function defineObjectWithMethod(methName, fn) {
  //TODO
}

function testDefMeth() {
  const fn = function () {
    console.log('method impl');
    return 'bob';
  };
  const obj = defineObjectWithMethod('getName', fn);
  console.log('obj with meth', obj.getName());
}

function defineObjectWithPropGetterSetter(propName, value) {
  // TODO: setter validates new propName value: throws error if undefined or null
  // throw new Error('jakis tam opis bledu');
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
  testDepProp();
  testDefMeth();
  testSetterGetter();
}
