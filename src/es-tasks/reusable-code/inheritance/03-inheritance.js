class User {
  constructor(login) {
    this.login = login;
  }

  getLogin() {
    return this.login;
  }
}

class SuperUser extends User {
  constructor(login, password) {
    super(login);
    this.password = password;
  }

  getPassword() {
    return this.password;
  }
}

class Root extends SuperUser {
  constructor(login, permissions, password) {
    super(login, password);
    this.permissions = permissions;
  }

  getLogin() {
    return 'ROOT: ' + super.getLogin();
  }

  getPermissions() {
    return this.permissions;
  }
}

export default function inheritanceApp() {
  let login;
  let passwd;

  // User class
  login = 'ed';
  const user = new User(login);
  console.assert(user.getLogin() === login);

  // SuperUser class
  login = 'ed';
  passwd = '#secret!';

  const su = new SuperUser(login, passwd);
  console.assert(su.getLogin() === login); // inherited from User
  console.assert(su.getPassword() === passwd);

  // Root class
  login = 'the Boss';
  passwd = 'imba haha!';
  const perms = ['Read', 'Write', 'Update', 'Delete'];
  const root = new Root(login, perms, passwd);

  console.assert(root.getLogin() === 'ROOT: ' + login);
  console.assert(root.getPassword() === passwd);
  console.assert(root.getPermissions() === perms);

  console.log('Inheritance test passed');
}
