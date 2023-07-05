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
  let skDouble = el * 2;
  return skDouble;
});

console.log('numsArr ===', numsArr);
console.log('double ===', double);

// gauti nauja masyva kuriame viso numArr reiksmes yra neigiamos

const negatives = numsArr.map((sk) => {
  return sk * -1;
});
console.log('negatives ===', negatives);
// grazinti objektu masyva su viena property "value" kurios reiksme yra sk
// [{value: 4}, {value: 23}...]

// grazinti string tipo duomenis su 'px' textu po reikme
let pxArr = numsArr.map((sk) => {
  if (sk === 0) {
    return sk.toString();
  }
  const stringFromSk = `${sk}px`;
  return stringFromSk;
});
console.log('pxArr ===', pxArr);

const liElArr = numsArr.map((sk) => {
  const liEl = document.createElement('li');
  liEl.textContent = sk;
  return liEl;
});
console.log('liElArr ===', liElArr);

liElArr.map((htmlEl) => {
  document.body.append(htmlEl);
});

// grazinti objektu masyva su viena property "value" kurios reiksme yra sk
// [{value: 4}, {value: 23}...]

const arrayOfObjects = numsArr.map((sk) => {
  let newObj = { value: sk };
  return newObj;
});
console.log('arrayOfObjects ===', arrayOfObjects);

// rasti objekta kurio value === 19
let found = arrayOfObjects.find((oneArrayMemberObj) => {
  console.log('oneArrayMemberObj ===', oneArrayMemberObj);
  if (oneArrayMemberObj.value === 19) {
    return true;
  }
});
console.log('found ===', found);
