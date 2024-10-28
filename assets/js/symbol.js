// Symbol (символ) - примітивний тип даних. Є унікальним та незмінним типом даних

// створення символів
const symbol = Symbol();
const symbol2 = Symbol();

console.log(symbol === symbol2); // false

// ніколи не можна створювати символи через new
// const symbol3 = new Symbol(); // error

// ви можете дати опис символа щоб краще показати що він має робити
const symbol4 = Symbol('Тут може бути ваш опис');

const obj1 = {
  value: 'public data',
  private: 'secret data here',
  important: 'very important data',
  important: 'bad data'
}

const obj2PrivateSymbol = Symbol('private');

const obj2 = {
  value: 'public data',
  obj2PrivateSymbol: 'bad symbol usage',
  // додавання символу при створенні об'єкту
  [obj2PrivateSymbol]: 'secret data here'
}

// додавання символу до існуючого об'єкту
const obj2ImportantSymbol = Symbol('important');

obj2[obj2ImportantSymbol] = 'very important data';

// отримання значення з ключем-симоволом
console.log(obj2[obj2PrivateSymbol]);

// отримати масив симовлів які є ключами об'єкту
const symbolsArr = Object.getOwnPropertySymbols(obj2);
console.log(symbolsArr[0] === obj2PrivateSymbol); // true

// Symbol.iterator - спеціальний символ який дає доступ до функції створення ітератору
// якогось ітерованого об'єкту

/*
  ітератори існують у:
    масивів
    рядків
    Map (не метод масиву)
    Set
    arguments
    ...
*/

const array = ['elem 1', 'elem 2', 'elem 3'];

// отримання ітератору масиву:
const arrayIterator = array[Symbol.iterator]();
const arrayIterator2 = array[Symbol.iterator]();
/*
  використання ітератору JS:
    1. допомогає у роботі спред-оператора
    2. дозволяє використовувати цикл for ... of
    3. Використовуються при деструктуризації
*/

console.log(...array);

const myArray1 = {
  0: 'elem 1',
  1: 'elem 2',
  2: 'elem 3',
  length: 3
}

// console.log(...myArray1); // error

// for ... in - дозволяє ходити по властивостям об'єкта (окрім символів)

array[Symbol('test')] = 'test';

for(const key in array) {
  console.log(key); // ключі об'єкту
  console.log(array[key]);
}
console.log('==========================');

for(const key in myArray1) {
  console.log(key); // ключі об'єкту
  console.log(array[key]);
}

// for ... of - цикл, що використовує ітератори
console.log('==========================');
// декларативний цикл for
for(const elem of array) {
  console.log(elem); // значення об'єкта
}

// імперативний цикл for
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log('==========================');
// for(const elem of myArray1) {
//   console.log(elem); // значення об'єкта
// }
