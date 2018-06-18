function personExample() {
  const person = {
    _name: 'bob',
    get name() {
      return this._name.toUpperCase();
    },
    set name(value) {
      this._name = value;
    }
  };

  console.log('1st person name', person.name);
  person.name = 'ed';
  console.log('2nd person name', person.name);
}

export function gettersSettetrsApp() {
  personExample();
}
