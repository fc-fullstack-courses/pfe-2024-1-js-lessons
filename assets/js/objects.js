// Об'єкти
'use strict';
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
    amount: 45000,
  },
  isOn: true,
  color: 'red',
  callSomebody: function () {
    alert('дзвонимо комусь. Туту будуть гудки');
  },
};

// console.log(phone.price.amount);
// console.log(phone.cpu); // undefined
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
  },
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

// const user2 = {
//   firstName: 'Jane',
//   lastName: 'Doe',
//   age: 42,
//   // gender: 'male',
//   isMale: true,
//   email: 'user@gmail.com',
//   password: 'jaisdi23234OIJD*3423',
//   eat: function () {
//     console.log('om-nom-nom');
//   },
//   getFullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// }

/*
  зробити користувачу метод
  метод має повертати рядок який буде містити ім'я та прізвище цього користувача
    наприклад : "John Doe"
  усередині метода заборонено напряму звертитися до об'єкта користувача
*/

/*
  Створити функцію у синтаксисі function declaration
  вона має приймати об'єкт користувача
  і має повертати рядок у форматі:
  "Hello, John Doe!"
  ім'я та прізвище має отримуватися з переданого об'єкта
*/

function greetUser(userObj) {
  return 'Hello, ' + userObj.firstName + ' ' + userObj.lastName + '!';
}

const greeting1 = greetUser(user);
// console.log(greeting1);

function test1() {
  // this - контекст виконання функції (хто її запускає)
  console.log(this); // об'єкт Window (стандартно) || undefined (суворий режим)
}

// test1();

const testObj = {
  key1: 'value 1',
  key2: 10000,
  key3: false,
  test: function () {
    // debugger;
    // this у методах об'єктів напряму надає вам доступ до вашого об'єкту
    // (той, хто іде до останньої крапочки)
    console.log(this);
    // console.log(testObj.key1); // погано
    console.log(this.key1); // добре
  },
};

// testObj.test();

// зчитування об'єктів (Read)
// console.log(user);

// alert(user); // приводить об'єкт до рядка що зазвичай є проблемою

// console.log(user + '');

// отримання даних з об'єкта
// назваОб'єкта.назваВластивості
// console.log(user.address);

// console.log( console );

// Оновлення значень (Update)

// let email = 'test@gmail.com';

// email = 'test1@gmail.com';

// let age = 40;

// age += 2;

// age++;

user.email = 'johnDoe@gmail.com';
// console.log(user.email);

user.age += 2;

// console.log(user.age);
user.age++;
// console.log(user.age);

// додавати нові властивіості до існуючого об'єкта

user.accountBalance = 15000;

// console.log(user);

// user = {

// }

// Видалення значень об'єкта (Delete)
// 1 через delete
delete user.accountBalance;

// console.log(user);
// console.log(user.accountBalance);

// 2 присвоєення undefined
user.age = undefined;

// console.log(user);
// console.log(user.age);
// console.log(user.asgfdkfdhfvifbdsufs);

const video1 = {
  title: 'Titan submersible is ...',
  views: 866173,
  author: 'BBC News',
  addView: function () {
    this.views++;
  },
};

const video2 = {
  title: 'Title 2',
  views: 155,
  author: 'Test User',
  addView: function () {
    this.views++;
  },
};

const video3 = {
  title: 'Title 3',
  vievs: 454654847,
  author: 'Test User 2',
  addView: function () {
    this.views++;
  },
};

const video4 = {
  title: 'Title 3',
  vievs: 454654847,
  author: 'Test User 2',
  addView: function () {
    this.views++;
  },
};

const video5 = {
  title: 'Title 5',
  vievs: 12327,
  author: 'Test User 5',
  addView: function () {
    this.views++;
  },
};

// function addView () {
//   this; // undefined || Window
// }

// video5.addView();
// addView();

// Функції - конструктори
// створюють об'єкт з певною структурою
// function createVideoObject (title, views, author) {
function Video(title, views, author) {
  // debugger;
  // const newVideoObject = {};

  // newVideoObject.title = title;
  // newVideoObject.views = views;
  // newVideoObject.author = author;

  // newVideoObject.addView = function () {
  //   this.views++;
  // }

  // return newVideoObject;

  // this - для функцій запущених з new - пустий об'єкт завжди
  // також повертається навіть якщо не писати return

  this.title = title;
  this.views = views;
  this.author = author;

  this.addView = function () {
    this.views++;
  };

  // return newVideoObject;
}

// перевод функції в режим конструктора
// this в цьому режимі буде пустим об'єктом з яким можна працювати
// завжди повертає об'єкт
// якщо в тілі функції повертається не об'єкт
// то воно повертає об'єкт this
const video6 = new Video('Funny cats compilation 10', 895552121, 'Me');
const video7 = new Video('Funny cats compilation 11', 145, 'Me');

// особливості роботи з ключами
//

const testObject = {
  key: 'value',
  'key 1': 'test 1',
  // key 2 : 'test 2',
  3: 'value 3',
  'obj 1': {
    0: true,
    1: null,
    2: 'test',
  },
};

// console.log(testObject.key); // value
// console.log(testObject.key 1); // error
// console.log(testObject.'key 1'); // error
// console.log(testObject.3); // error

// оператор доступу до властивості об'єкта
// з обчисленням
/*
  obj[key]
*/

// console.log(testObject['key']); // value
// console.log(testObject['key 1']); // test 1
// console.log(testObject[3]); // value 3
// console.log(testObject['3']); // value 3

// // const userInput = prompt('Enter some phone key');
// const userInput = 'brand';

// console.log(phone[userInput]);
// console.log(testObject['obj 1'][2]);
// console.log(phone.price['currency']);

// const key = prompt('Enter key');
// const value = prompt('Enter value');

// testObject[key] = value;

// console.log(testObject);

// console.log(testObject[key], testObj['obj 1'], phone.isOn);

// особливості порівняння об'єктів у JS
const testStr1 = 'test string';
const testStr2 = 'test string';
const testStr3 = 'teststring';

// console.log(testStr1 === testStr2); // true
// console.log(testStr1 === testStr3); // false

const testObj1 = {
  firstName: 'John',
};

const testObj2 = {
  firstName: 'Jane',
};

const testObj3 = {
  firstName: 'Jane',
};

// console.log(testObj1 === testObj2); // false
// console.log(testObj2 === testObj3); // false
// console.log(testObj2 === testObj2); // true

const testObj4 = testObj2;
// console.log(testObj2 === testObj4); // true

testObj4.lastName = 'Test';

// console.log(testObj4);
// console.log(testObj2);

function changeObject(obj) {
  obj.newProperty = 'we changed object';

  return obj;
}

const testObj5 = changeObject(testObj4);

const message1 = {
  id: 0,
  author: 'User Userenko',
  messageText: 'Lorem Ipsum ...',
  likes: 0,
  dislikes: 0,
  // addLike: function () {
  //   this.likes++;
  // },
  // addDislike: function () {
  //   this.dislikes++;
  // },
  // removeLike: function () {
  //   this.likes--;
  // }
}

const message2 = {
  id: 1,
  author: 'Test Doe',
  messageText: 'Bla Bla Bla.',
  likes: 10,
  dislikes: 3,
  
}

// console.log(message1.addDislike === message2.addDislike); // false

const arr1 = [];
const arr2 = [null];

// console.log(arr1.push === arr2.push); // true

// Прототипи

/*
  Прототип - спеціальний об'єкт, який зберігає певні властивості та методи
  які мають бути спільними для ваших об'єктів.
*/

const messagePrototype = {
  addLike: function () {
    this.likes++;
  },
  addDislike: function () {
    this.dislikes++;
  },
  removeLike: function () {
    this.likes--;
  },
  removeDislike: function () {
    console.log('dislike removed');
  },
  test: function () {
    console.log('this value is:');
    console.log(this);
    return 10;
  }
}

// додаємо прототип об'єкту
message1.__proto__ = messagePrototype;
message2.__proto__ = messagePrototype;

// message1.test();
// message2.test();
// messagePrototype.test();

// console.log(message2.removeDislike === message1.removeDislike) // true
// console.log(message1.__proto__ === message2.__proto__); // true
// message1.removeDislike();

/*
  Створити 2 об'єкти ріних видів твринок (котик та собака)
    у кожного об'єкту тваринки буде її ім'я (як властивість)

  Створити об'єкт - прототип animal 
    у нього має бути метод, який консоль логом імітує сон

  додати тваринкам прототип animal і виконати метод сну

  переробити метод сну таким чином щоб він виводив рядок виду:

    ім'яТваринки спить
*/

const mouse = {
  name: 'Jerry'
}

const dog = {
  name: 'Bulldog'
}

const parrot = {
  name: 'Kesha'
}

const animalPrototype = {
  sleep: function () {
    console.log(this.name + ' is sleeping');
  }
}

const birdPrototype = {
  fly: function () {
    console.log(this.name + ' is flying');
  }
}

mouse.__proto__ = animalPrototype;
dog.__proto__ = animalPrototype;
parrot.__proto__ = birdPrototype;
birdPrototype.__proto__ = animalPrototype;

// mouse.sleep();
// dog.sleep();
