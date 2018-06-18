// TODO: use for-of & string templates

// Given the data in the starting code, use a template string to produce the
// following string. Make sure the numbers, names, and team name actually come
// from the data:
//
//     "There are 4 people on the tooling team.
//     Their names are Jennie, Ronald, Martin, Anneli."
function toTeamSentence(teamName, people) {

}

function testTeamSentence() {
  const teamName = 'tooling';
  const people = [
    { name: 'Jennie', role: 'senior' },
    { name: 'Ronald', role: 'junior' },
    { name: 'Martin', role: 'senior' },
    { name: 'Anneli', role: 'junior' },
  ];

  const message = toTeamSentence(teamName, people);
  console.log(message);
}


export function templatesTaskApp() {
  testTeamSentence();
}
