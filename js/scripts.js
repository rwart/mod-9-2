function addUniques(arr, item) {
  'use strict';
  if (arr.indexOf(item) === -1) {
    arr.push(item);
  }

  return arr;
}

function main() {
  'use strict';
  var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
  var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

  var allNames = femaleNames.concat(maleNames);
  console.log('allNames: ' + allNames.join(', '));
  var newName = 'Marian';

  if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
  }

  console.log('allNames after adding ' + newName + ' : ' + allNames.join(', '));

  /* the same with function */

  var allNamesNew = addUniques(allNames, newName);
  console.log('function: Add again ' + newName + ' : ' + allNamesNew.join(', '));
  newName = 'Ania';
  allNamesNew = addUniques(allNames, newName);
  console.log('function: Add ' + newName + ' : ' + allNamesNew.join(', '));
}

main();
