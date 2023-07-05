'use strict';
console.log('forEach.js file was loaded');
//               0  1    2  3   4   5 6   7
const numsArr = [4, 23, 7, 39, 19, 0, 9, 14];
console.log('numsArr ===', numsArr);

// for
for (let idx = 0; idx < numsArr.length; idx++) {
  const sk = numsArr[idx];
  // console.log(`index: ${idx}, skaicius: ${sk}`);
}

// for of
for (let sk of numsArr) {
  // console.log('sk for of ===', sk);
}

// array.forEach((currentValue, index, arr) => {})
// kazka padaryti su kiekvina reikme
numsArr.forEach(function (sk, idx, arr) {
  // console.log('sk ===', sk);
  console.log(`index: ${idx}, skaicius: ${sk}`);
});

let double = [];
let filered = [];
numsArr.forEach(function (sk, idx, arr) {
  // console.log('sk ===', sk);
  // console.log(`index: ${idx}, skaicius: ${sk}`);
  if (sk > 5) {
    filered.push(sk);
  }
  double.push(sk * 2);
});
console.log('filered ===', filered);
console.log('double ===', double);
