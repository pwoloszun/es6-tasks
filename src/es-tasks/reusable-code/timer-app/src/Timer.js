const intervalId = setInterval(function () {
  // this === window/undefined
  console.log('a qq!', this);
}, 2000);

clearInterval(intervalId);


// TODO: impl Timer class, which inherits from Evented

export function Timer() { // TODO: remove
}
