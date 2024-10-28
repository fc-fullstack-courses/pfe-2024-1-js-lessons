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
