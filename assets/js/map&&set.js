// Set (множина) - коллекція, яка зберігає всередині себе унікальні значення

// створення множин
const set1 = new Set();

// створення заповненної множини
const set2 = new Set([10, 200, 3, 3, 4, 5]);

// додавання елементів до існуючого сету
set1.add(10);
set1.add('test');
set1.add(false);

set1.add('10');
set1.add([1, 2, 3]);
set1.add([1, 2, 3]);

set1.add({});
set1.add({});

const user = { name: 'test' };
const sameUser = user;
set1.add(user);
set1.add(user);
set1.add(sameUser);

// console.log(set1);

// видалення конкретного значення
const deleteResult = set1.delete('10');
/*
  deleteResult 
    true якщо елемент був видалений
    false якщо елемента у сеті не було
*/
set1.delete({});
set1.delete(user);

// повністю очистити сет
set1.clear();

// перевірити наявність елементу у сеті
const hasResult1 = set2.has(3); // true
const hasResult2 = set2.has(30000); // false

// обхід по сету
set2.forEach((elem, alsoElem, set) => {
  // console.log(`elem is ${elem}`);
  // console.log(`alsoElem is ${alsoElem}`);
  // console.log(`set is ${set}`);
});

const arrWithDuplicates = [1,2,3,5,7,1,9,8,10,8,2];

const set3 = new Set(arrWithDuplicates);

const arrWithUniqueNumbers = [...set3];

const arrWithUniqueNumbers2 = [...new Set([1,2,3,5,7,1,9,8,10,8,2])];

/*
  створіть 2 масиви з іменами
  за допомогою Set отримайте з них один масив з унікальними іменами
  деякі імена мають бути присутні у обох початкових масивах 
*/
const names1 = ['John', 'Peter', 'Jane', 'Alice', 'Karl'];
const names2 = ['Victoria', 'Victor', 'John', 'Karl', 'James'];

// const uniqueNamesSet = new Set();

// for(const name of names1) {
//   uniqueNamesSet.add(name);
// }

// for(const name of names2) {
//   uniqueNamesSet.add(name);
// }

// const uniqueNamesSet = new Set([...names1, ...names2]);

const uniqueNames = [...new Set([...names1, ...names2])];

// Map (мапа, карта, словник, асоціативний масив) - колекція, яка зберігає пари
// ключ - значення

const obj = {
  key: 'value',
  0: 'test',
  [Symbol('private')]: true
}

for(const key in obj) {
  // console.log(key);
}

/*
  відмінності мапи від об'єкта:
    1. мапа запам'ятовує порядок вставки даних
    2. мапа може використовувати будь-який тип даних у якості ключа
    3. мапа знає скільки елементів в ній знаходиться
    4. є ітератор тобто легше пройтися по всім елементам мапи
    5. швидше працює при додаванні або видаленні значень
*/

// створення пустої мапи
const map1 = new Map();

// створення заповненної мапи
const map2 = new Map([
  // кортежі (tuples)
  // масиви з конкретною кількістю елементів
  // та певним порядком розміщення цих елементів
  ['key', 'value'],
  ['other key', 1000],
  [500, false],
  [{name: 'User'}, [1,2,3,4,5]]
]);

// додавання або перезаписує елементів до мапи
map1.set('key', 10000);
map1.set(123, 'some value');
map1.set('123', true);

map1.set('123', [1,4,6]);

const sum = (...numbers) => numbers.reduce((acc, num) => acc +=num);

map1.set(sum, 'my key is a function');

map1.set({}, 1);
map1.set({}, 2);

const user1 = {};

map1.set(user1, 3);
map1.set(user1, 4);

// отримання значень з мапи

const value1 = map1.get(user1);
const value2 = map1.get('123');
const value3 = map1.get(sum);

const value4 = map1.get(-123423423); // undefined

// переревірити наявність елемента по ключу
const has123Key = map1.has(123);
const has4Key = map1.has(4);

// видалення запису по ключу
const deleteRes = map1.delete(123);
const deleteRes2 = map1.delete(4);

// очистка мапи
// map1.clear();

// розмір мапи
// console.log(map1.size);

// forEach
map1.forEach((value, key, map) => {
  // console.log(`value is`);
  // console.log(value);
  // console.log(`key is`);
  // console.log(key);
  // console.log(`map is`);
  // console.log(map);
});

// cache
// уявна функція яка довго працює
function expensiveCalculations(user) {

  // якісь складі довгі обчислення
  for(let i = 0; i < 4_000_000_000; i++) {}

  user.salary = user.salary ? user.salary + 10 : 100;

  return user;
}

// console.log(expensiveCalculations(5));

const cache = new Map();

function effectiveCalculations(user) {
  // debugger;
  if(cache.has(user)) {
    return cache.get(user);
  }

  const result = expensiveCalculations(user);
  cache.set(user, result);

  return result;
}

// const res1 = effectiveCalculations(user1);

// console.log(res1);

// const user2 = {
//   salary: 20
// };

// const res2 = effectiveCalculations(user2);

// console.log(res2);

// const res3 = effectiveCalculations(user1);

// console.log(res3);

/*
  Створити функцію яка буде приймати рядок
  функція має створювати мапу та повертати її як свй результат
  у мапі мають бути наступні дані:
    ключами мапи будуть символи рядка
    значеннями мапи кількість цих символів у рядку
  
    мапа має ігнорувати симовли яки не є буквами або цифрами (пробіли, коми, крапки ...)

  const str = 'test, text.';

  const map = calculateLetters(str);

  map:
    t => 4,
    e => 2,
    s => 1,
    x => 1
*/

function createLettersMap(string, ignoredSymbols = [' ', ',', '.', '!', '-']) {
  const letterMap = new Map();

  // for(const letter of string) {
  //   if(letterMap.has(letter)) {
  //     const oldValue = letterMap.get(letter);
  //     letterMap.set(letter, oldValue + 1);
  //   } else {
  //     letterMap.set(letter, 1);
  //   }
  // }

  // const ignoredSymbols = [' ', ',', '.', '!', '-'];

  for(const letter of string) {
    // if(letterMap.has(letter)) {
    //   letterMap.set(letter, letterMap.get(letter) + 1);
    // } else {
    //   letterMap.set(letter, 1);
    // }

    if(!ignoredSymbols.includes(letter)) {
      letterMap.set(letter, letterMap.has(letter) ? letterMap.get(letter) + 1: 1);
    }
  }

  return letterMap;
}

const str = 'test, text.';

const letterMap1 = createLettersMap(str);

