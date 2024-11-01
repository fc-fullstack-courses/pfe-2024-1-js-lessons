/*
  Деструктуризація - особливий спосіб ствоення змінних
*/

const monitor = {
  price: 9999.99,
  manufacturer: 'LG',
  model: '321asd131rgfr',
  color: 'black',
  isInStock: true,
  sizes: {
    height: {
      value: 32,
      unitOfMeasure: 'cm',
    },
    width: {
      value: 68,
      unitOfMeasure: 'cm',
    },
  },
};

// колір монітору
console.log(monitor.color);

// значення ширини монітора
console.log(monitor.sizes.width.value);

// створити функцію, яка рахує діагональ монітора
function calculateDiagonal({
  sizes: {
    width: { value: width },
    height: { value: height },
  },
}) {
  // const width = monitor.sizes.width.value;
  // const height = monitor.sizes.height.value;

  // const {
  //   sizes: {
  //     width: { value: width },
  //     height: { value: height },
  //   },
  // } = monitor;

  return Math.sqrt(width * width + height * height);
}

const car = {
  price: 51651651516,
  model: 'XL-456',
};

const model = car.model;

// деструктуризація об'єктів

const {
  color,
  price,
  model: monitorModel,
  sizes: {
    width: { value: width },
  },
  sizes,
} = monitor;

// const color = monitor.color;
// const monitorModel = monitor.model;

// const width = monitor.sizes.width.value;

console.log(color); // === monitor.color
console.log(price); // 9999.99
console.log(monitorModel); // 321asd131rgfr

// bad
// const { sizes } = monitor;
// const { width: monitorWidthObj } = sizes;
// const { value: width } = monitorWidthObj;

// good
// const {
//   sizes: {
//     width: { value: width },
//   },
// } = monitor;
console.log(width); // 68

const user = {
  id: 24,
  firstName: 'John',
  lastName: 'Doe',
  password: '12345admin',
  emails: ['johnDoe123@gmail.com', 'jd123@gmail.com', 'sandsaijd@.sadsa'],
};

// rest у деструктуризації об'єкта створює новий об'єкт
// в якому будуть усі недеструктуровані дані
const {
  password,
  emails: [personalEmail],
  ...userWithoutPassword
} = user;

// деструктуризація масивів / ітерабельних об'єктів

const numbers = [50, 700, -312.5, 4, 0, NaN, -2];

// створити змінну у яку покласти 1 елемент масиву
// const firstElem = numbers[0];

const [firstElem, secondElem] = numbers;

// якщо елемент треба пропустити то просто ставте кому без назви
const [, , thirdElem, fourthElem] = numbers;

// rest оператор завжди стоврить масив з недеструктуризованими елементами
const [firstNumber, , ...restNumbers] = numbers;

const testMap = new Map([
  ['user1', { name: 'Test User' }],
  ['user2', { name: 'Null Undefined' }],
]);

// for (const entry of testMap) {
//   const [key, value] = entry;

// const key = entry[0];
// const value = entry[1];
for (const [key, { name }] of testMap) {
  // const { name } = value;

  console.log(key);
  console.log(name);
}
