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
  constructor (name, price, amount, isForAdult) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.isForAdult = isForAdult;
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

console.log(`Загальна вартість всіх одиниць товару '${product1.name}' = ${product1.getPriceOfAllProduct()} грн`);

//
// if(owner1.balance >= (product1.price * product1.amount)) {
if(owner1.balance === product1.getPriceOfAllProduct()) {
  console.log('Owner 1 може купити все морозиво');
} else {
  console.log('Owner 1 не може купити все морозиво, бо йому бракує коштів');
}

