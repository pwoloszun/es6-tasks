function testDefaultOperator() {
  const myRide = {
    make: 'Ford',
    model: 'Mondeo',
    location: 'the Office',
    driveTo(place) {
      // TODO
    }
  };

  myRide.driveTo('Walmart');
  console.log('1st ride', myRide.location); // should be 'Walmart'

  myRide.driveTo();
  console.log('2nd ride', myRide.location); // should be 'Home'
}

export function defaultOperatorTaskApp() {
  testDefaultOperator();
}
