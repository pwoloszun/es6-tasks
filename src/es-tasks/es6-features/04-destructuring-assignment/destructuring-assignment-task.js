// The detectCollision function searches through an array of rectangles and
// returns the first rectangle that the given point is inside of.

// Use destructuring and a higher-order function to make this code cleaner.
// You might want to use the new array method find, which takes a function as
// argument, and returns the first element in the array (the element, not its
// index) for which the function returns true.

// TODO: use destructuring
function doesCollideWith(object, point) {
// TODO
}

// TODO: use for-of
// TODO: re-use doesCollideWith
function detectCollision(objects, point) {
  for (let i = 0; i < objects.length; i++) {
    const object = objects[i];
    if (point.x >= object.x && point.x <= object.x + object.width &&
      point.y >= object.y && point.y <= object.y + object.height) {
      return object;
    }
  }
}

function testDetectCollision() {
  const myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 }
  ];

  console.log(detectCollision(myObjects, { x: 4, y: 2 }));
}

// TODO 2
function deepDestructure() {
  /* Use object destructuring to capture the twitter link of the profile object
 * */
  const profile = {
    fname: 'Ryan',
    lname: 'Cromwell',
    social: {
      twitter: 'https://twitter.com/hearsparkbox',
      instagram: 'https://www.facebook.com/seesparkbox'
    }
  };

  const twitter = profile.social.twitter;

  console.log(twitter); // https://twitter.com/hearsparkbox
}

export function destructuringSssignmentTaskApp() {
  testDetectCollision();
  deepDestructure();
}
