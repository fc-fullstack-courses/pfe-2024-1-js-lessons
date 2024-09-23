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
  price: 45000,
  isOn: true,
  color: 'red',
  callSomebody: function () {
    alert('дзвонимо комусь. Туту будуть гудки');
  },
};

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

// зчитування об'єктів (Read)
console.log(user);

// alert(user); // приводить об'єкт до рядка що зазвичай є проблемою

console.log(user + '');

// отримання даних з об'єкта
// назваОб'єкта.назваВластивості
console.log( user.email );

// console.log( console );


// Оновлення значень (Update)

// Видалення значень (Delete)
