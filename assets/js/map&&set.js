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

console.log(set1);

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
