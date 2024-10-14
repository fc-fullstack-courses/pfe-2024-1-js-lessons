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
} // const housePrototype = {
//   getFullHouseData : function () {
//     return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentsPerFloor} apartments on each floor. Each apartment costs ${this.priceOfApartment}`;
//   }
// }

function HousePrototype() {
  this.getFullHouseData = function () {
    return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentsPerFloor} apartments on each floor. Each apartment costs ${this.priceOfApartment}`;
  };
}

const housePrototype = new HousePrototype();

const house1 = new OldHouse(3, 4, 'test street 1', 1200);

OldHouse.prototype = housePrototype;

const house2 = new OldHouse();

// клас - новий синтаксис написання функцій-конструкторів
class House {
  constructor(
    floors = 1,
    apartmentsPerFloor = 4,
    address = 'DEFAULT ADDRESS, CHANGE IT',
    priceOfApartment = 15000
  ) {
    this.floors = floors;
    this.apartmentsPerFloor = apartmentsPerFloor;
    this.address = address;
    this.priceOfApartment = priceOfApartment;
  }

  getFullHouseData () {
    return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentsPerFloor} apartments on each floor. Each apartment costs ${this.priceOfApartment}`;
  }
}

const house3 = new House();
const house4 = new House(4,4, 'test address 2', 25000);
