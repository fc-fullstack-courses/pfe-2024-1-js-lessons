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
function calculateDiagonal(monitor) {
  // const width = monitor.sizes.width.value;
  // const height = monitor.sizes.height.value;
  const {
    sizes: {
      width: { value: width },
      height: { value: height },
    },
  } = monitor;

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
  email: 'johnDoe123@gmail.com',
  password: '12345admin'
}

// rest у деструктуризації об'єкта створює новий об'єкт 
// в якому будуть усі недеструктуровані дані 
const { password, ...userWithoutPassword } = user;