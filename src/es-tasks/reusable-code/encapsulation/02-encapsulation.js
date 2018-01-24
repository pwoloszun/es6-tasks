const DEFAULT_NAME = '[no name]';

const generateNumberFor = (serialNo) => {
  return 'ABX-' + serialNo;
};

class Robot {
  constructor(_name, serialNo) {
    this.serialNo = generateNumberFor(serialNo);
    this._createdAt = Robot.now();
  }

  getName() {
    return this._name;
  }

  getCreatedAt() {
    return this._createdAt;
  }

  static now() {
    return new Date();
  }
}
