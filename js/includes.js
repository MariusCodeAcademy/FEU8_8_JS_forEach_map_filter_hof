'use strict';
console.log('includes.js file was loaded');

const numsArr = [1, -5, 0, -4, 10, -3, 15];
console.log('numsArr ===', numsArr);

// array.includes(element)

// ar -4 yra masyve
let arYraM4 = numsArr.includes(-4);
console.log('arYraM4 ===', arYraM4);

let arYraM4Some = numsArr.some((sk) => sk < -14);
console.log('arYraM4Some ===', arYraM4Some);

// ar visos reiksmes yra daugiau uz 0
const allPositives = numsArr.every((sk) => sk > 0);
console.log('allPositives ===', allPositives);
