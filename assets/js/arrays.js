// Масиви (arrays) - структури даних для збереження великої кількості
// (зазвичай) однотипних даних

// const vipEmail1 = 'asdiusd@gmail.com';
// const vipEmail2 = 'njdi34@hotmail.com';
// const vipEmail3 = 'ahfddf443@gmail.com';

// const vipEmails = {
//   user1: 'asdiusd@gmail.com',
//   user2: 'njdi34@hotmail.com',
//   user3: 'ahfddf443@gmail.com',
//   user3: 'asdn4232@hotmail.com'
// };

// const vipEmails = {
//   0: 'asdiusd@gmail.com',
//   1: 'njdi34@hotmail.com',
//   2: 'ahfddf443@gmail.com',
//   3: 'asdn4232@hotmail.com',
// };

//
const vipEmails = new Array(
  'asdiusd@gmail.com',
  'njdi34@hotmail.com',
  'ahfddf443@gmail.com',
  'asdn4232@hotmail.com'
);

// console.log(typeof vipEmails); // object
// console.log(vipEmails);
// довжина масива
// console.log(vipEmails.length);

// елемент з індексом 2
// console.log(vipEmails[2]); // 'ahfddf443@gmail.com'

// створення масивів

// 1. Через конструктор
// пустий масив
const arr1 = new Array();

// масив з якимись елементами
const arr2 = new Array(50, 515, 8478, 4456);

// пустий масив з певною довжиною
const arr3 = new Array(5);

// 2. Через літерал
// пустий масив
const arr4 = [];

// масив з якимись елементами
const arr5 = [50, 515, 8478, 4456];

console.log(arr5[2]);

arr5[4] = Infinity;

// arr5[7] = NaN;

// додавання елементів у кінець масиву
arr5.push('first');

arr5.push(null, {}, 67, undefined, 'bla-bla-bla');

// повертає довжину масиву після вставки
const newArr5Length = arr5.push(1500000);