// save context:
// 1. default context
// 2. closure
// 3. bind
// 4. fat arrow function

class MyPerson {
  constructor() {
    this.name = null;
    this.delay = 1000;
  }

  setNameDefaultContext(name) {
    const fn = function () {
      this.name = name;
    };
    setTimeout(fn, this.delay);
  }

  setNameClosure(name) {
    const that = this;
    const fn = function () {
      that.name = name;
    };
    setTimeout(fn, this.delay);
  }

  setNameBind(name) {
    const fn = function () {
      this.name = name;
    };
    const bindedFn = fn.bind(this);
    setTimeout(bindedFn, this.delay);
  }

  setNameFatArrowFunction(name) {
    const fn = () => {
      this.name = name;
    };
    setTimeout(fn, this.delay);
  }
}

export default function saveContextApp() {
  const bob1 = new MyPerson();
  const bob2 = new MyPerson();
  const bob3 = new MyPerson();
  const bob4 = new MyPerson();

  bob1.setNameDefaultContext('Bob I');
  bob2.setNameClosure('Bob II');
  bob3.setNameBind('Bob III');
  bob4.setNameFatArrowFunction('Bob IV');

  setTimeout(function () {
    console.log('bob1.name', bob1.name);
    console.log('bob2.name', bob2.name);
    console.log('bob3.name', bob3.name);
    console.log('bob4.name', bob4.name);
  }, 2000);
}

