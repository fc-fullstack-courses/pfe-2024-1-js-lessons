// Створити масив [ 1, 2, 3 ]. Додати до нього в кінець наступні значення : 6, 5 , 4. Після цього до нього же додати у початок значення: -3, -2, -1

const numbers = [1, 2, 3];
console.log(numbers);

numbers.push(6, 5, 4);
console.log(numbers);

numbers.unshift(-3, -2, -1);
console.log(numbers);

// Створити масив [ 100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10 ]. Видалити перші два та остані три елементи цього масиву.

const numbers1 = [100, -273.15, 0, 1, 2, 3, 4, 5, 6, 9, 10];
console.log(numbers1);

numbers1.shift();
numbers1.shift();
console.log(numbers1);

numbers1.pop();
numbers1.pop();
console.log(numbers1);

// Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на [1, 4, 5].

const numbers2 = [1, 2, 3, 4, 5];
console.log(numbers2);
numbers2.splice(1, 2);
console.log(numbers2);

// Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice записати у новий масив елементи [2, 3, 4].

const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3);

const spliceResult = numbers3.splice(1, 3);
console.log(spliceResult);

// Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

const numbers4 = [1, 2, 3, 4, 5];
console.log(numbers4);

numbers4.splice(3, 0, 'a', 'b', 'c');
console.log(numbers4);

// Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const numbers5 = [1, 2, 3, 4, 5];
console.log(numbers5);

numbers5.splice(1, 0, 'a', 'b');

numbers5.splice(-1, 0, 'c');

numbers5.splice(numbers5.length, 0, 'e');

console.log(numbers5);

// Створити масив [1, 2, 3, 4, 5]. За допомогою методу slice зробити копію масива зі значеннями [4, 5]

const numbers6 = [1, 2, 3, 4, 5];
console.log(numbers6);

// const copyNumbers6 = numbers6.slice(3, 5);

// const copyNumbers6 = numbers6.slice(-2, 5);

const copyNumbers6 = numbers6.slice(-2);
console.log(copyNumbers6);


// Створити масив ['first', 'second', 'third', 'fourth', 'last']. Зробити копію зі значеннями  ['second', 'third'].

const stringNumbers = ['first', 'second', 'third', 'fourth', 'last'];
console.log(stringNumbers);

const copyStringNumbers = stringNumbers.slice(1, 3);
console.log(copyStringNumbers);

// Створити масив ['first', 'second', 'third', 'fourth', 'last']. Перетворити його на масив ['last', 'fourth', 'third', 'second', 'first']

const reverseNumbers = ['first', 'second', 'third', 'fourth', 'last'];
console.log(reverseNumbers);
reverseNumbers.reverse();
console.log(reverseNumbers);

// Створити масив [1, 2, [3, 4, [5]], 6, 7]. Створити на його основі масив [1, 2, 3, 4, 5, 6, 7]

const arrNumbers = [
  1, 2,
  [3, 4, [5]],
  6, 7];
console.log(arrNumbers);

const arrNumbersFlat = arrNumbers.flat(Infinity);
console.log(arrNumbersFlat);

// Створити масив з довільними значенням та перевірити, чи є у ньому елемент, який є рядком 'secret string'.

const food = ['salad', 'tomato', 'kebab'];
console.log(food);
const isSecretString = food.includes('secret string');
console.log(isSecretString);

// Створити масив ['first', 'second', 'third', 'fourth', 'last']. Створити новий масив методом concat якому передати наступні параметри: 
// 1000, 2000, [true, false];

const numsString = ['first', 'second', 'third', 'fourth', 'last'];
console.log(numsString);

const nums = numsString.concat(1000, 2000, [true, false]);
console.log(nums);

/* 
  Створити масив з довільними елементами. За допомогою циклу вивести всі елементи масиву послідовно в консоль
*/

const forArr = ['first', 10, true, null, 'data'];

for(let i = 0; i < forArr.length; i++) {
  console.log(forArr[i]);
}

/* 
  Створити масив з довільними елементами. 
  За допомогою циклу вивести всі елементи масиву з парними індексами послідовно в консоль
*/

for(let i = 0; i < forArr.length; i++) {
  if(i % 2 === 0) {
    console.log(forArr[i]);
  }
}

for(let i = 0; i < forArr.length; i+=2) {
  // if(i % 2 === 0) {
    console.log(forArr[i]);
  // }
}

// обхід масиву по циклу від кінця до початку
for (let i = forArr.length - 1; i >= 0; i--) {
  console.log(forArr[i]);
}