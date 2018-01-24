// private static props
const ENCRYPTION_KEY = 'imba!';
let NEXT_UUID = 0;

// private static method
const _generateUuid = function () {
  return NEXT_UUID++;
};

// private method
const _encodePassword = function () {
  return this.password + ENCRYPTION_KEY;
};

class Admin {
  constructor({ login, password }) {
    this.login = login;
    this.password = password;
  }

  getLogin() {
    return this.login;
  }

  setLogin(value) {
    this.login = value;
  }

  getEncodedPassword() {
    return _encodePassword.call(this);
  }
}

/*
 * new Admin(params) class:
 * Public properties:
 * + uuid (generated using private static property NEXT_UUID)
 * + login
 * + password
 * Public methods:
 * + getLogin()
 * + setLogin(value)
 * + getEncodedPassword()
 * Private methods:
 * - _encodePassword(passwd) (encoded using private static property ENCODING_STR)
 * Private static properties:
 * - NEXT_UUID
 * - ENCODING_KEY
 * Private static methods:
 * - _generateUuid() (generates next uniq UUID)
 * */
function adminApp() {
  let login = 'Bob';
  const password = '#secret!';

  const admin = new Admin({
    login,
    password,
  });

  console.assert(admin.uuid, 0);
  console.assert(admin.getLogin(), login);
  login = 'kate';
  admin.setLogin(login);
  console.assert(admin.getLogin(), login);
  console.assert(admin.getEncodedPassword(), password + 'imba!');
}
