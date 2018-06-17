import { Evented } from './src/Evented';

export function eventedExampleUsageApp() {
  const bob = new Evented();
  const other = new Evented();
  const eventName = 'xxx:yyy';
  const listener = function (...params) {
    console.log('1st listener triggered', params);
  };

  // assign many listeners to single event
  bob.on(eventName, listener);
  bob.on(eventName, function (...params) {
    console.log('2nd listener triggered...', params);
  });
  other.on(eventName, listener);

  // trigger event
  bob.trigger(eventName, 1, 'qq'); // log msg on console IMPORTANT: should NOT trigger any event on other

  // remove all event listeners
  bob.off(eventName);

  // trigger event
  bob.trigger(eventName, 1, 'qq'); // nothing logged
  console.log('eventedExampleUsage() END');
}
