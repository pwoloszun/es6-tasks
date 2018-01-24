class Monkey {
  constructor(name, age = 12) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  setAge(age) {
    this.age = age;
  }
}

function propertiesMethodsApp() {
  const coco = new Monkey('Coco', 3);
  coco.setAge(15);

  const tytus = new Monkey('Tytus', 5);
  tytus.getName();

  console.log('monkey', coco.getName(), coco.name, coco.age);
}

export {
  Monkey,
  propertiesMethodsApp,
};
