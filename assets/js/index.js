// тут можна писати js код

// однорядковий коментар

/*
  багаторядковий 
  коментар
*/

// тип даних String
'приклад тексту';
"приклад тексту";
`приклад тексту`;



// тип даних Number
10;
-50;
7.23;
0;

// тип даних BigInt
1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n;

// тип даних Boolean
true;
false;

// тип даних null (пусте значення)
null;

// тип даних undefined (відсутність значення)
undefined;

// тип даних Symbol
// new Symbol('приклад символу');

// функція
// alert('якісь вхідні дані');
// console.log(10);
// console.log('10');
// console.log('test string');

// змінні
// створення пустої змінної (оголошення змінної)
let age;

// присвоєння значення змінній
age = 50;

// console.log(age);

// ініціалізація змінної (оголошення + присвоєння одразу)
let otherUserAge = 99;

// console.log(otherUserAge);

/*
  Подивитися на різницю між змінними створеними через let та const

    1. Проініціалізуйте let змінну username1 з якимось текстом
    2. Подивіться через console.log на вміст username1
    3. Змінить вміст username1
    4. Знову подивіться через console.log на вміст username1

    5. Проініціалізуйте const змінну username2 з якимось текстом
    6. Подивіться через console.log на вміст username2
    7. Змінить вміст username2
    8. Знову подивіться через console.log на вміст username2
*/

// помилка - неможна звертатися до змінної перед її створенням
// console.log(username1);

let username1 = 'User 1';

console.log(username1);

username1 = false;

//  помилка - неможна перестворити існуючу змінну
// let username1 = 50;

console.log(username1);

// помилка const обов'язково має бути проініціалізований
// const username2;
const username2 = 'User 2';

console.log(username2);

// помилка - перезапис константи
// username2 = 'Test user 2';

let user3 = 'new user';

console.log(user3);

console.log(0.1 + 0.2);