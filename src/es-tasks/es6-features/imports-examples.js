import greet, { Person } from './exports/some-exports';

const bob = new Person('Bob');

greet(bob.getName());

