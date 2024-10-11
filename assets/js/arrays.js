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

// перевірка чи є об'єкт масивом
const isVipEmailsArray = Array.isArray(vipEmails);
// console.log(isVipEmailsArray);

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

// console.log(arr5[2]);

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

// console.log(popRes); // undefined

/*
  1. у масив з іменами в кінець вставити 1 ім'я
  2. у цей же масив в кінець вставити ще 2 ім'я

  3. з цього масиву видалити останнє ім'я 
      та вивести його у консоль
*/
const names = ['Anton', 'Olesya', 'Anna', 'Petro'];

// 1
names.push('John');
// console.log(names);
// 2
names.push('Jane', 'Joshua');
// console.log(names);

// 3
const deletedName = names.pop();
// console.log(deletedName);
// console.log(names);

// додавання елементів у початок масиву
// console.log(arr5);

arr5.unshift({
  test: true,
});

// console.log(arr5);

arr5.unshift(-1000, 'test 1235', null);

// console.log(arr5);

// додати на початок масиву з іменами 2 імені
// стірі імена при цьому не мають зникнути
names.unshift('Test', 'User');

// видалення першого елементу масиву
const previousFirstElem = arr5.shift();
// console.log(arr5);
// console.log(previousFirstElem);

// видалити перше ім'я з масиву та покажіть його у консолі
// console.log(names.shift());

// видалення та вставка елементів у будь-яку точку масиву
/*
  приймає необмежену кількість вхідних параметрів
  перший параметр - індекс з якого розпочинаємо зміну масиву
  другий параметр - число, яке каже скільки елементів, починаючи з індексу треба видалити
  всі параметри після цього будуть вставлені на вказаний індекс після видалення елементів
*/
// console.log(arr5);
const deletedItemsArr = arr5.splice(-3, 1, 'splice sent me', 'hello there');
// console.log(arr5);
// console.log(deletedItemsArr);

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
// console.log(copy6[1] === arr5[2]);

// метод join
/*
  перетворює масив на рядок
  елементи розмежуються або комами або 
  рядком який передали як параметр
*/

const joinTest = ['Name 1', 'Name 2', true, 1000];

const stringFromArr = joinTest.join();
const stringFromArr2 = joinTest.join('===');

// обертання елементів у масиві
const reverseArr = [100, 5000, -2.5, 15];

// console.log(reverseArr);
reverseArr.reverse();
// console.log(reverseArr);

// includes - перевіряє чи є якийсь елемент у масиві
const names2 = ['Kyrylo', 'Anton', 'Olena', 'Anna'];

const isOlenaInArray = names2.includes('Olena');
// console.log(isOlenaInArray);
const isPetroInArray = names2.includes('Petro');
// console.log(isPetroInArray);

// flat
// створює масив всередені якого розрівнює вкладені масиви
// на вказану кількість рівнів
const onionArr = [
  'first',
  'second',
  [100, 200, 300],
  'test',
  [true, true, false, ['deep stuff'], false],
];

// console.log(onionArr[4][3][0]);
const flatted1 = onionArr.flat(1);

const flatted2 = onionArr.flat(10);

const flatted3 = onionArr.flat(Infinity);

// concat
/*
  повертає новий масив, який формується зі старого масиву
  + всі параметри методу concat
*/
const nums1 = [1, 2, 3, 4, 5];

const nums2 = nums1.concat(100, 200, 300);

const nums3 = nums1.concat(100, 200, 300, [1000, 2000, [10000]]);

/*
  мутуючі методи:
    push
    pop
    unshift
    shift
    splice
    reverse
  немутуючи методи:
    includes
    join
    slice
    flat
    concat
    map
*/

/*
  Методи обходу масиву

    завжди обходять масив з початку до кінця
    кожен з методів обходу буде приймати спеціальну функцію, яку називають
    callback (функція зворотнього виклику)
*/

// function printSomeData (printFunction, dataToPrint) {
//   printFunction(dataToPrint);
// }

// debugger;
// printSomeData(alert, 'test');
// printSomeData(console.log, 'test');

// forEach - виконую функцію-коллбек для кожного елемента у масиві
/*
    function callback (currentValue, index, array) {
      currentValue - поточний елемент масиву
      index - індекс поточного елементу масиву
      array - посилання на масив по якому ви робити обхід
    }
*/

const forEachTestArray = [100, 200, 300, 400];

// function forEachCallbackExample (currentValue, index, array) {
//   console.log('current value is:');
//   console.log(currentValue);
//   console.log('index value is:');
//   console.log(index);
//   console.log('array value is:');
//   console.log(array);
// }

// forEachTestArray.forEach(forEachCallbackExample);

forEachTestArray.forEach(function (number, i, array) {
  // console.log(number);
  // console.log(i);
  // console.log(array);
});

// map - на основі результатів роботи коллбек-функції
// та старого масиву створює новий масив

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const newArray = [];

// numbers.forEach(function (number) {
//   newArray.push(number * number);
// });

// console.log(newArray);

const squaredNumbers = numbers.map(function (number, i) {
  // конкретний результат роботи коллбеку буде кластися у новий масив на поточний індекс
  // на якому зараз знаходится обхід
  // console.log(number * number);
  // console.log(i);
  return number * number;
});

// console.log(squaredNumbers);

// filter - створює новий масив, та заповнює його елементами, які пройшли
// перевірку (повернули правдиве значення) при виклику для них коллбека

const oddNumbers = numbers.filter(function (number) {
  // if(number % 2 !== 0) {
  //   // елемент опинится у новому масиві
  //   return true;
  // } else {
  //   // елемента не буде у новому масиві
  //   return false;
  // }
  return number % 2 !== 0;
});

// console.log(oddNumbers);

// some - повертає правду якщо хоч один з елементів масиву пройшов
// перевірку у коллбкеці (коллбек повернув правду). повертає брехню інакше

const numbers2 = [1, 3, 2.5, 7, 9.99, 10.00001, 5];

const isThereEvenNumbers = numbers2.some(function (number) {
  // if(number % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return number % 2 === 0;
});

// console.log(isThereEvenNumbers);

// every - повертає правду якщо всі елементи масиву пройшли
// перевірку у коллбкеці (коллбек повернув правду). повертає брехню інакше

const isAllNumbersOdd = numbers2.every(function (number) {
  // if(number % 2 !== 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return number % 2 !== 0;
});

// console.log(isAllNumbersOdd);

// find - повертає перший елемент, який пройшов перевірку з коллбеку
// якщо жоден елемент не пройде перевірку повертає undefined

const numbers3 = [1, 4, 5, 7, 100, 10, -5, 12, 4, 9];

const negativeNumber = numbers3.find(function (number) {
  // if(number < 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return number < 0;
});

// console.log(negativeNumber);

// findIndex - повертає перший індекс елементу, який пройшов перевірку з коллбеку
// якщо жоден елемент не пройде перевірку повертає -1

const names3 = ['Anton', 'User', 'Oksana', 'Petro', 'Dmytro', 'John', 'Oksana'];

const oksanaIndex = names3.findIndex(function (name) {
  return name === 'Oksana';
});

const janeIndex = names3.findIndex(function (name) {
  return name === 'Jane';
});

// console.log(oksanaIndex);

// console.log(janeIndex);

// reduce - метод обходу масиву який на основі елементів масиву може отримати якесь одне значення
// на основі коллбек функції, яку називають редюсером
const numbers4 = [10, 2, 3, 4, 5, 6, 7, 8];

// const result = numbers4.reduce((accumulator, number, index, array) => {
//   console.log(accumulator);
//   console.log(number);
//   return `new accumulator ${number}`;
// }, 0);
// debugger;
const numbers4TotalSum = numbers4.reduce((acc, num) => acc + num, 0);

const sum = (...numbers) => numbers.reduce((acc, num) => acc + num);