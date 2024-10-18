// 1. Дан масив ['test', false, 12345, undefined, 'secret', NaN,true, 0, 100, null ] Залогувати в консолі кожен елемент масиву з непарним індексом
let arr = ['test', false, 12345, undefined, 'secret', NaN, true, 0, 100, null];

arr.forEach(function (elem, i) {
  if(i % 2 !== 0) {
    console.log(elem);
  }
});

/*
2. Дан наступний масив ['test', false, 2345, null]
Зробити масив, елементи якого будуть рядками, зробленими за наступним шаблоном : Item with index X has value Y
де X - індекс елемента у масиві, Y - значення елементу
*/
let arr2 = ['test', false, 2345, null];

const dataArr = arr2.map(function(currentValue, index) {
  return 'Item with index ' + index + ' has value ' + currentValue;
});

// 3. Дан масив, який складається з наступних об'єктів. Отримати на його основі масив повнолітніх користувачів
const users = [
  { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
  { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
  { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
  { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
  { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
  { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' }
];

const data = users.filter(function (user){
  return user.age >= 18;
});

// 4. Використовуючи початковий масив з завдання 3 знайти індекс першої жінки у массиві

const firstWomanIndex = users.findIndex(function(user) {
  return user.gender === 'female';
});

// 5. Використовуючи початковий масив з завдання 3 перевірити чи всі користувачі в ньому є повнолітніми чоловіками

const isEveryUserMale = users.every(function(user) {
  return user.gender === 'male' && user.age >= 18;
});
