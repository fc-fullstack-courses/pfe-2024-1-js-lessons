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
  key1 : 'value 1',
  key2 : 100,
  key3 : true,
  // метод - властивість об'єкта, значенням якої є функція
  key4: function () {
  }
};

const citramon = {
  type: 'таблетки',
  doze: 2,
  price: 150,
  isSoldFree: true,
  maxAmount: 20,
  amount: 14
}

const phone = {
  brand: 'Samsung',
  model: 'Galaxy Note 25',
  price: 45000,
  isOn: true,
  color: 'red',
  callSomebody: function () {
    alert('дзвонимо комусь. Туту будуть гудки');
  }
}