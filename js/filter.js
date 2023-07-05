'use strict';
console.log('filter.js file was loaded');

const numsArr = [1, -5, 0, -4, 10, -3, 15];
console.log('numsArr ===', numsArr);

// array.filter(function(currentValue, index, arr) {})
// metodas skirtas tik atrinki i nauja masyva reikmes
// attitinkancias salyga.
// jei vidine funkcija grazina true tai ta reiksme atrenkama

// atrinkti teigiamas reikmes

const positivesArr = numsArr.filter((sk) => sk === 10);

const positivesArr1 = numsArr.filter((sk) => {
  if (sk > 0) {
    return true;
  }
});
console.log('positivesArr1 ===', positivesArr1);
console.log('positivesArr ===', positivesArr);

// skiriasi nuo filter, grazina rasta objekta, ir sustoja rades
const found = numsArr.find((sk) => sk === 100);
if (!found) {
  console.warn('neradau 100');
}
console.log('found ===', found);
