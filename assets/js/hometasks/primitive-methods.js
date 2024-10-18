'use strict';

// task 1
function getCapitalizeString(str) {
  if (typeof str !== 'string' || !str.trim()) {
    throw new TypeError('Type of data is incorrect! Enter a valid string!');
  }

  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}

console.log(getCapitalizeString('test string'));

// task 2
function getVowelsNumber(str, vowelArray = ['a', 'e', 'i', 'o', 'u']) {
  if (typeof str !== 'string' || !str.trim()) {
    throw new TypeError('Type of data is incorrect! Enter a valid string!');
  }

  let vowelCount = 0;
  let lowerCaseStr = str.toLowerCase();

  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (vowelArray.includes(lowerCaseStr[i])) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(getVowelsNumber('tEst string'));