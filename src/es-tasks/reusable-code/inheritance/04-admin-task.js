const ENCODING_STR = 'imba!';
let NEXT_UUID = 0;

class Admin {
  constructor(params) {
    this.uuid = Admin.generateUuid();
    this.login = params.login;
    this.password = params.password;
    this.encodedPassword = this.encodePassword();
  }

  getLogin() {
    return this.login;
  }

  setLogin(login) {
    this.login = login;
  }

  getEncodedPassword() {
    return this.encodedPassword;
  }

  static generateUuid() {
    return NEXT_UUID++;
  }

  encodePassword() {
    return this.password + ENCODING_STR;
  }
}


/*
 * new Admin(params) class:
 * Public properties:
 * + uuid (generated using private static property NEXT_UUID)
 * Private properties:
 * - login
 * - password
 * Public methods:
 * + getLogin()
 * + setLogin(value)
 * + getEncodedPassword()
 * Private methods:
 * - encodePassword(passwd) (encoded using private static property ENCODING_STR)
 * Private static properties:
 * - NEXT_UUID
 * - ENCODING_KEY
 * Private static methods:
 * - generateUuid() (generates next uniq UUID)
 * */
export default function adminTaskApp() {
  let login = 'Bob';
  let passwd = '#secret!';

  let admin = new Admin({
    login,
    password,
  });

  console.assert(admin.uuid === 0);
  console.assert(admin.getLogin() === login);
  login = 'kate';
  admin.setLogin(login);
  console.assert(admin.getLogin() === login);
  console.assert(admin.getEncodedPassword() === passwd + 'imba!');
  console.log('adminTest passed');
}
