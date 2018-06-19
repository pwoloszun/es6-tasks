// TODO: use destructuring:
// object -> const destruct
// point -> parameter destruct
function doesCollideWith(object, point) {
// TODO
  return point.x >= object.x &&
    point.x <= object.x + object.width &&
    point.y >= object.y &&
    point.y <= object.y + object.height;
}

function testDetectCollision() {
  const myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 }
  ];

  for (let obj of myObjects) {
    console.log('testDetectCollision', doesCollideWith(obj, { x: 4, y: 2 }));
  }
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
