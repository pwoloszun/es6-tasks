const ENCODING_STR = 'imba!';
const NEXT_UUID = 0;

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
 * - encodePassword(passwd) (encoded using private static property ENCODING_STR)
 * Private static properties:
 * - NEXT_UUID
 * - ENCODING_KEY
 * Private static methods:
 * - generateUuid() (generates next uniq UUID)
 * */
export default function adminTaskApp() {
  const login = 'Bob';
  const passwd = '#secret!';

  // const admin = new Admin({
  //   login,
  //   password,
  // });
  //
  // console.assert(admin.uuid === 0);
  // console.assert(admin.getLogin() === login);
  // login = 'kate';
  // admin.setLogin(login);
  // console.assert(admin.getLogin() === login);
  // console.assert(admin.getEncodedPassword() === passwd + 'imba!');
  // console.log('adminTest passed');
}
