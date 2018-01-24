function calculateAge() {
}

class Person {
  constructor(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }

  getName() {
    return this.name;
  }

  getAge() {
    const dob = new Date(this.dateOfBirth);
    const ageInMs = Date.now() - dob.getTime();
    return new Date(ageInMs).getUTCFullYear() - 1970;
  }
}
