class MyButtonComponent {
  onClick(fn) {
    this.fn = fn;
  }

  click() {
    this.fn();
  }
}

class UserDetailsComponent {
  constructor(user) {
    this.user = user;
    this.logUserAge = this.logUserAge.bind(this);

    this.initButtons();
  }

  clickName() {
    this.nameBtn.click();
  }

  clickAge() {
    this.ageBtn.click();
  }

  logUserAge() {
    console.log('age', this.user.age);
  }

  initButtons() {
    // TODO
  }
}


export function fatArrowTaskApp() {
  const user = {
    name: 'bob',
    age: 34,
    sex: 'M',
    weight: 91,
  };
  const component = new UserDetailsComponent(user);
  // TODO: uncomment
  // component.clickName();
  // component.clickAge();
}
