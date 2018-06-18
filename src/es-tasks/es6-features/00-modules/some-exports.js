function myPrivateFn() {
  console.log('...some priv operations');
}


function greet(name) {
  console.log(`Hello ${name}!`);
}

const CREATE_ITEM = 'list/CREATE_ITEM';

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

export {
  CREATE_ITEM,
  Person,
};

export default greet;
