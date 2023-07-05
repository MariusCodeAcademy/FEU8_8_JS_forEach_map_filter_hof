'use strict';
console.log('map.js file was loaded');

// Array.prototype.map((el, i, arr) => {})
// array.map(function(currentValue, index, arr) {})
// skirtas pakeisti elemetnu strukturai, kazka atlikti
// su kiekviena reiksme ir grazinti pakeista masyva
// panasus i forEach tik jis grazina nauja masyva.
// visada grazina tiek elementu kiek yra masyve kuriam iskviestas map

//               0  1   2   3   4  5  6  7
const numsArr = [4, 23, 7, 39, 19, 0, 9, 14];
console.log('numsArr ===', numsArr);

let double = numsArr.map((el, idx) => {
  return el * 2;
});

console.log('numsArr ===', numsArr);
console.log('double ===', double);
