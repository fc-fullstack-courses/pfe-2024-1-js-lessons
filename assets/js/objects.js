// Об'єкти

// приклад даних користувача
// ПОГАНО
const user1Name = 'testUser';
const user1Email = 'test@test.test';
const user1Age = 37;

// приклад об'єкта
const object1 = {
  // об'єкт - набір властивостей
  // приклад властивості об'єкту
  // ключами можуть бути тільки рядки або символи
  // значеннями можуть бути будь-які типи даних
  key1: 'value 1',
  key2: 100,
  key3: true,
  // метод - властивість об'єкта, значенням якої є функція
  key4: function () {},
};

const citramon = {
  type: 'таблетки',
  doze: 2,
  price: 150,
  isSoldFree: true,
  maxAmount: 20,
  amount: 14,
};

const phone = {
  brand: 'Samsung',
  model: 'Galaxy Note 25',
  // cpu: {
  //   brand: 'Qualcom',
  //   model: 'Snapdragon 860',
  //   frequency: 4000
  // },
  price: {
    currency: 'UAH',
    amount: 45000
  },
  isOn: true,
  color: 'red',
  callSomebody: function () {
    alert('дзвонимо комусь. Туту будуть гудки');
  },
};

console.log(phone.price.amount);
console.log(phone.cpu); // undefined
// console.log(phone.cpu.model); // error

// створення об'єктів (Create)
const obj1 = {}; // найчастіше, літерал
const obj2 = Object(); // рідко
const obj3 = new Object(); // достатньо часто,
// використовується при створенні об'єктів зі спефічною структурою

const cat = {
  name: 'Pushok',
  furColor: 'white',
  eyeColor: 'green',
  breed: 'British',
  isSleeping: false,
  age: 3,
};

/*
  Створити об'єкт користувача (user)
    у користувача мають бути наступні властивості:
      ім'я
      прізвище
      вік
      стать
      електроннаПошта
      пароль

      Також додайте метод який буде імітувати харчування

*/

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 42,
  // gender: 'male',
  isMale: true,
  email: 'user@gmail.com',
  password: 'jaisdi23234OIJD*3423',
  eat: function () {
    console.log('om-nom-nom');
  }
}

/*
  Створити функцію у синтаксисі function declaration
  вона має приймати об'єкт користувача
  і має повертати рядок у форматі:
  "Hello, John Doe!"
  ім'я та прізвище має отримуватися з переданого об'єкта
*/

function greetUser (userObj) {
  return "Hello, " + userObj.firstName + " " + userObj.lastName + "!";
}

const greeting1 = greetUser(user);
console.log(greeting1);

function test1 () {
  // this - контекст виконання функції (хто її запускає)
  console.log(this); // об'єкт Window (стандартно) || undefined (суворий режим)
}

// test1();

const testObj = {
  key1 : 'value 1',
  key2 : 10000,
  key3: false,
  test : function () {
    debugger;
    // this у методах об'єктів напряму надає вам доступ до вашого об'єкту
    // (той, хто іде до останньої крапочки)
    console.log(this);
    // console.log(testObj.key1); // погано
    console.log(this.key1); // добре
  }
}

testObj.test();

// зчитування об'єктів (Read)
// console.log(user);

// alert(user); // приводить об'єкт до рядка що зазвичай є проблемою

// console.log(user + '');

// отримання даних з об'єкта
// назваОб'єкта.назваВластивості
console.log( user.address );

// console.log( console );


// Оновлення значень (Update)

// let email = 'test@gmail.com';

// email = 'test1@gmail.com';

// let age = 40;

// age += 2;

// age++;

user.email = 'johnDoe@gmail.com';
console.log( user.email );

user.age += 2;

console.log( user.age );
user.age++;
console.log( user.age );

// додавати нові властивіості до існуючого об'єкта

user.accountBalance = 15000;

console.log(user);

// user = {

// }


// Видалення значень об'єкта (Delete)
// 1 через delete
delete user.accountBalance;

console.log(user);
console.log(user.accountBalance);

// 2 присвоєення undefined
user.age = undefined;

console.log(user);
console.log(user.age);
console.log(user.asgfdkfdhfvifbdsufs);