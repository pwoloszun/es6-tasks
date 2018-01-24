const MILSEC_IN_YEAR = 1000 * 60 * 60 * 24 * 365;

class Robot {
  constructor(name, dob = '1976-01-01T00:00:00') {
    this.name = name;
    this.dob = dob;
    this.age = this.calculateAge();
  }

  getName() {
    return this._name;
  }

  calculateAge() {
    const dt = new Date(this.dob);
    return dt.getTime() / MILSEC_IN_YEAR;
  }
}

export default Robot;
