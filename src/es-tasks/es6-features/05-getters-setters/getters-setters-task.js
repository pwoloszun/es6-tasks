function testRegister() {
  const register = {
    balance: 0,
    deposit(value) {
      this.balance += value;
    },
    withdraw(value) {
      this.balance -= value;
    }
  };

  // The balance can be manipulated with unsanitized input:
  register.deposit(1);
  register.deposit('0');
  register.deposit('00000');

  console.log('register ballance', register.balance);

// update the register object to use getters and setters. Throw an error
// if the user sets a value that is not a positive integer
}

export function gettersSettersTaskApp() {
  testRegister();
}
