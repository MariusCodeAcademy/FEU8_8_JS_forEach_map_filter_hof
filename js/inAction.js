'use strict';
console.log('inAction.js file was loaded');

const listEl = document.getElementById('list');

const mixedArr = [
  4,
  true,
  23,
  7,
  'hello',
  ['strin', 'bulves'],
  39,
  -19,
  0,
  -9,
  14,
];

// atrinkti i nauja masyva tik skaicius is numsArr su xxxx
const numsOnlyPleaseArr = mixedArr.filter((el) => typeof el === 'number');
console.log('numsOnlyPleaseArr ===', numsOnlyPleaseArr);

// atrinkti skaicius
// prideti prie kievieno sk 10
const add10 = numsOnlyPleaseArr.map((sk) => sk + 10);
console.log('add10 ===', add10);
// paversti sk i html li el
// const strinLiElArr = add10.map((sk) => {
//   const rezString = `<li>${sk}</li>`;
//   return rezString;
// });
const strinLiElArr = add10.map((sk) => `<li>${sk}</li>`);
console.log('strinLiElArr ===', strinLiElArr);
// patalpinti dom
strinLiElArr.forEach((liString) => (listEl.innerHTML += liString));

// ir forEach
const atrinktiArr = [];
mixedArr.forEach((el) => {
  if (typeof el === 'number') {
    // atrinkti
    atrinktiArr.push(el);
  }
});
// console.log('atrinktiArr ===', atrinktiArr);

// masyvo metodu grandine, chainning

let strLiElements1 = mixedArr
  .filter((el) => typeof el === 'number')
  .map((sk) => sk + 10)
  .map((sk) => `<li>${sk}</li>`)
  .forEach((liString) => (listEl.innerHTML += liString));

console.log('strLiElements1 ===', strLiElements1);
