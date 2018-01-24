export class Monkey {
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

export function propertiesMethodsApp() {
  const coco = new Monkey('Coco', 3);
  coco.setAge(15);
  console.log('monkey', coco.getName(), coco.name, coco.age);
}
