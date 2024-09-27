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

console.log(typeof vipEmails); // object

// перевірка чи є об'єкт масивом
const isVipEmailsArray = Array.isArray(vipEmails);
console.log(isVipEmailsArray);

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

// видалення останнього елемента масиву
const deletedValue = arr5.pop();

const emptyArr = [];

emptyArr.pop();
emptyArr.pop();
emptyArr.pop();
emptyArr.pop();
const popRes = emptyArr.pop();

console.log(popRes); // undefined

/*
  1. у масив з іменами в кінець вставити 1 ім'я
  2. у цей же масив в кінець вставити ще 2 ім'я

  3. з цього масиву видалити останнє ім'я 
      та вивести його у консоль
*/
const names = ['Anton', 'Olesya', 'Anna', 'Petro'];

// 1
names.push('John');
console.log(names);
// 2
names.push('Jane', 'Joshua');
console.log(names);

// 3
const deletedName = names.pop();
console.log(deletedName);
console.log(names);

// додавання елементів у початок масиву
console.log(arr5);

arr5.unshift({
  test: true
});

console.log(arr5);

arr5.unshift(-1000, 'test 1235', null);

console.log(arr5);

// додати на початок масиву з іменами 2 імені
// стірі імена при цьому не мають зникнути
names.unshift('Test', 'User');


// видалення першого елементу масиву
const previousFirstElem = arr5.shift();
console.log(arr5);
console.log(previousFirstElem);

// видалити перше ім'я з масиву та покажіть його у консолі
console.log(names.shift());

// видалення та вставка елементів у будь-яку точку масиву
/*
  приймає необмежену кількість вхідних параметрів
  перший параметр - індекс з якого розпочинаємо зміну масиву
  другий параметр - число, яке каже скільки елементів, починаючи з індексу треба видалити
  всі параметри після цього будуть вставлені на вказаний індекс після видалення елементів
*/
console.log(arr5);
const deletedItemsArr = arr5.splice(-3, 1, 'splice sent me', 'hello there');
console.log(arr5);
console.log(deletedItemsArr);


// копіювання частини масиву у новий масив
/*
  перший параметр - вказує початковий індекс
  другий параметр - вказує перед яким індексом треба зупинитися
*/
const copy1 = arr5.slice(3, 7);
// повна копія масиву
const copy2 = arr5.slice();
// копіює від 3 індексу до кінця
const copy3 = arr5.slice(3);
// негатівні індексу теж працюють
const copy4 = arr5.slice(-4, -2);
const copy5 = arr5.slice(-4, 2);

const copy6 = arr5.slice(1, 5);

copy6[1].newProp = 'wifi';
console.log(copy6[1] === arr5[2]);

// метод join
/*
  перетворює масив на рядок
  елементи розмежуються або комами або 
  рядком який передали як параметр
*/

const joinTest = ['Name 1', 'Name 2', true, 1000];

const stringFromArr = joinTest.join();
const stringFromArr2 = joinTest.join('===');
