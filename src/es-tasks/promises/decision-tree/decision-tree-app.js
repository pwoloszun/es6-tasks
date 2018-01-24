/* eslint-disable no-alert */
/* eslint-disable no-else-return */

function alertPromise(text) {
  // always resolves to true
}

function confirmPromise(text) {
  return new Promise((resolve) => {
    resolve(window.confirm(text));
  });
  // always resolves to: text
}

function promptPromise(text) {
  // always resolves to received text
}

function selectPromise(text, firstResp, secondResp) {
  // always resolves to one of given responses: first/second
}


export default function decisionTreeApp() {
  // build decision tree
}
