'use strict';

const car = {
  color: 'Black',
  model: 'Bugatti Chiron Super Sport',
  brand: 'Bugatti',
  capacity: 8,
  maxQuantityPassengers: 2,
  speed: 0,
  maxSpeed: 350,

  accelerate: function(kmh) {
    if(typeof kmh !== 'number' || isNaN(kmh)) {
      throw new TypeError('kmh must be a number');
      // return null;
    }

    if (kmh < 0) {
      throw new RangeError('kmh must not be negative');
      // return null;
    }

    let newSpeed = kmh + this.speed;

    return this.speed = newSpeed > this.maxSpeed ? this.maxSpeed : newSpeed;
  },

  deaccelerate: function(kmh) {
    if(typeof kmh !== 'number' || isNaN(kmh)) {
      throw new TypeError('kmh must be a number');
    }

    if (kmh < 0) {
      throw new RangeError('kmh must not be negative');
    }

    let newSpeed = this.speed - kmh;

    return this.speed = newSpeed > 0 ? newSpeed : 0;
  },

  stop: function() {
    this.speed = 0;
    return this.speed;
  },
}


const carPrototypeMethods = {
  accelerate: function(kmh) {
    if(typeof kmh !== 'number' || isNaN(kmh)) {
      throw new TypeError('kmh must be a number');
    }

    if (kmh < 0) {
      throw new RangeError('kmh must not be negative');
    }

    let newSpeed = kmh + this.speed;

    return this.speed = newSpeed > this.maxSpeed ? this.maxSpeed : newSpeed;
  },

  deaccelerate: function(kmh) {
    if(typeof kmh !== 'number' || isNaN(kmh)) {
      throw new TypeError('kmh must be a number');
    }

    if (kmh < 0) {
      throw new RangeError('kmh must not be negative');
    }

    let newSpeed = this.speed - kmh;

    return this.speed = newSpeed > 0 ? newSpeed : 0;
  },

  stop: function() {
    this.speed = 0;
    return this.speed;
  },
}

function CarConstructor(color, model, brand, capacity, maxQuantityPassengers, maxSpeed) {
  this.color = color;
  this.model = model;
  this.brand = brand;
  this.capacity = capacity;
  this.maxQuantityPassengers = maxQuantityPassengers;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
}

CarConstructor.prototype = carPrototypeMethods;

const toyota = new CarConstructor('Green', 'Toyota Supra', 'Toyota', 6, 4, 240);