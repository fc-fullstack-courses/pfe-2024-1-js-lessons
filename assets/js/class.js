/**
 *
 */
function OldHouse(
  floors = 1,
  apartmentsPerFloor = 4,
  address = 'DEFAULT ADDRESS, CHANGE IT',
  priceOfApartment = 15000
) {
  this.floors = floors;
  this.apartmentsPerFloor = apartmentsPerFloor;
  this.address = address;
  this.priceOfApartment = priceOfApartment;

  // this.getFullHouseData = function () {
  //   return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentsPerFloor} apartments on each floor. Each apartment costs ${this.priceOfApartment}`;
  // }
} 
// const housePrototype = {
//   getFullHouseData : function () {
//     return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentsPerFloor} apartments on each floor. Each apartment costs ${this.priceOfApartment}`;
//   },
//   id : NaN;
// }

function HousePrototype() {
  this.getFullHouseData = function () {
    return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentsPerFloor} apartments on each floor. Each apartment costs ${this.priceOfApartment}`;
  };

  this.id = NaN;
}

const housePrototype = new HousePrototype();

const house1 = new OldHouse(3, 4, 'test street 1', 1200);

OldHouse.prototype = housePrototype;

const house2 = new OldHouse();

// клас - новий синтаксис написання функцій-конструкторів

// вираз класу
const Test = class {

}

function someWeirdFunction (classFunc) {

}

someWeirdFunction(Test);

function classGenerator (...args) {

  return class {
    
  }
}

// декларація класу
class House {
  // тіло класу
  // весь код автоматично виконується у суворому режимі

  // функція - конструктор, запускається при створенні через new
  // у класі може бути не більше 1 constructor
  constructor (floors = 1, apartmentsPerFloor = 2, address = 'test address', priceOfApartment = 1000) {
    this.floors = floors;
    this.apartmentsPerFloor = apartmentsPerFloor;
    this.address = address;
    this.priceOfApartment = priceOfApartment;
    // this.id = NaN;
  }

  // методи прототипу
  getFullHouseData () {
    return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentsPerFloor} apartments on each floor. Each apartment costs ${this.priceOfApartment}`;
  }

  // властивість прототипу (спілньна однакова властивість всіх будинків)
  id = NaN;
}

const house3 = new House();
const house4 = new House(4,4, 'test address 2', 25000);

// створення екземпляра без new завжди викликає помилку
// const house5 = House(4,4, 'test address 2', 25000); // ERROR

/*
  Створити клас Product (товар)
    у нього мають бути наступні властивості
      назва
      ціна
      кількість (на складі)
      чи товар для дорослих

    має бути метод який поверне загальну ціну усіх одиниць товару на складі
*/
class Product {
  /**
   * 
   * @constructor
   * @param {string} name 
   * @param {number} price 
   * @param {number} amount 
   * @param {boolean} isForAdult 
   */
  constructor (name, price, amount, isForAdult) {

    this.name = name; // це вже використовується сеттер name
    this.price = price;
    this.amount = amount;
    this.isForAdult = isForAdult;

    // _ означає що розробник не рекомендує напряму лізти до цих властивостей
    // this._name = name;
    // this._price = price;
    // this._amount = amount;
    // this._isForAdult = isForAdult;

    this.setterTarget = null;
  }

  // геттер - псевдовластивість яка повертає якесь значення
  get test () {
    return `some test value`;
  }

  // просто повертаємо значення службової властивості
  get name () {
    return this._name;
  }

  get price () {
    return this._price;
  }

  get amount () {
    return this._amount;
  }

  get isForAdult () {
    return this._isForAdult;
  }

  // сеттер (встановлювач) - створює якусь псевдовластивіть при спробі записати яку
  // змінюєтся якась інша властивість 
  set setterName (x) {
    if(typeof x !== 'string') {
      throw new TypeError('bad type');
    }

    this.setterTarget = x;
  }

  // встановлюємо нове значення для службової властивості
  // product.name = 12356;
  set name (newName) {
    if(typeof newName !== 'string' || newName.trim().length === 0) {
      throw new TypeError('name of a product must be string');
    }

    this._name = newName; // тут з'являєсться _name у об'єкті продукта
  }

  set price (newPrice) {
    if(typeof newPrice !== 'number' || isNaN(newPrice)) {
      throw new TypeError('price of a product must be numeric');
    }

    if(newPrice < 0) {
      throw new RangeError('price must not be negative number');
    }

    this._price = newPrice;
  }

  set amount (newAmount) {
    if(typeof newAmount !== 'number' || isNaN(newAmount)) {
      throw new TypeError('amount of a product must be numeric');
    }

    if(newAmount < 0) {
      throw new RangeError('amount must not be negative number');
    }

    this._amount = newAmount;
  }

  set isForAdult (newIsForAdult) {
    if(typeof newIsForAdult !== 'boolean') {
      throw new TypeError('isForAdult of a product must be boolean');
    }

    this._isForAdult = newIsForAdult;
  }

  getPriceOfAllProduct () {
    // return `Загальна вартість всіх одиниць товару '${this.name}' = ${this.price * this.amount} грн`;
    return this.price * this.amount;
  };
};

const product1 = new Product('ice cream', 40, 10, false);
const product2 = new Product('water', 20, 30, false);
const product3 = new Product('beer', 100, 5, true);

const owner1 = {
  name: 'Owner 1',
  email: 'owner1@gmail.com',
  balance: 5000,
  age: 13
}

// console.log(`Загальна вартість всіх одиниць товару '${product1.name}' = ${product1.getPriceOfAllProduct()} грн`);

//
// if(owner1.balance >= (product1.price * product1.amount)) {
// if(owner1.balance === product1.getPriceOfAllProduct()) {
//   console.log('Owner 1 може купити все морозиво');
// } else {
//   console.log('Owner 1 не може купити все морозиво, бо йому бракує коштів');
// }

const product4 = new Product('12334354', 5, 2000, false);

console.log(product4.getPriceOfAllProduct());

// product4.amount = 'test';

// console.log(product4.getPriceOfAllProduct()); 

