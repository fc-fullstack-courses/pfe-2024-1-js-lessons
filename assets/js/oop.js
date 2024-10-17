// Концепції ООП (об'єктно-орієнтованого програмування)

// 1. Успадкування
// class Animal {
//   constructor (nickname, weight = 1, type = 'animal') {
//     this.nickname = nickname;
//     this.weight = weight;
//     this.type = type;
//   }

//   sleep () {
//     console.log(`${this.nickname} is sleeping`);
//   }

//   eat () {
//     console.log(`${this.nickname} is eating`);
//   }
// }

// const mouse = new Animal('Jerry');
// const dog = new Animal('Bulldog');

// class Bird {
//   constructor (nickname, weight = 1) {
//     this.nickname = nickname;
//     this.weight = weight;
//   }

//   sleep () {
//     console.log(`${this.nickname} is sleeping`);
//   }

//   eat () {
//     console.log(`${this.nickname} is eating`);
//   }

//   fly () {
//     console.log(`${this.nickname} is flying`);
//   }
// }


// class Bird extends Animal {
//   constructor (nickname, weight = 1, wingspan = 0.7) {
//     // запуск батьківського конструктора ( зараз Animal)
//     // має бути запущений до роботи с this
//     // та до повертання підсумкового об'єкту
//     super(nickname, weight, 'bird');

//     // this.nickname = nickname;

//     this.wingspan = wingspan;
//   }

//   fly () {
//     console.log(`${this.nickname} is flying`);
//   }
// }

// const parrot1 = new Bird('Kesha', 2, 0.8);
// const parrot2 = new Bird('NotKesha', 0.5, 1);

/*
  Створити клас User
    з властивостями
      firstName
      lastName
      age
      isBanned
    
    а також з методом:
      createMessage
      deleteMessage
  
  Створити клас Moderator який має успадковуватися від класу User
    він також має мати додаткову властивість
      subforumList (масив)
    
    модератор також має наступні методи:
      createSubforum
      deleteSubFoum
*/
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isBanned = false;
  }

  createMessage () {
    console.log('message created');
  }

  deleteMessage () {
    console.log('message deleted');
  }

  static isUser (value) {
    return value instanceof User;
  }
}

const user1 = new User('Test', 'Testenko', 12);

class Moderator extends User {
  constructor(firstName, lastName, age ) {
    super(firstName, lastName, age);
    this.subForumList = [];
  }

  createSubForum(forumName) {
    this.subForumList.push(forumName);
  }

  deleteSubForum (forumName) {
    // const newSubForumList = this.subForumList.filter((currentForum) => currentForum !== forumName);

    // this.subForumList = newSubForumList;

    this.subForumList = this.subForumList.filter((currentForum) => currentForum !== forumName);
  }
}

const moder1 = new Moderator('Moder', 'the Great', 35);

/*
  Створити клас Admin який буде успадковуватися від класу Moderator
    у адміністратора буде наступна валстивість:
      contactEmail

    у нього буде методи:
      ban - банить користувача
      unban - розбанює користувача

*/
class Admin extends Moderator {
  constructor (firstName, lastName, age, contactEmail) {
    super(firstName, lastName, age);
    this.contactEmail = contactEmail;
  }

  ban (user) {
    if(!User.isUser(user)) {
      throw new TypeError('user must be instance of User class');
    }

    if(Admin.isAdmin(user)) {
      throw new TypeError('user must not be an admin');
    }

    if(user.isBanned) {
      return user;
    }

    user.isBanned = true;
    return user;
  }

  unban (user) {
    if(!User.isUser(user)) {
      throw new TypeError('user must be instance of User class');
    }

    if(!user.isBanned) {
      return user;
    }

    user.isBanned = false;
    return user;
  }

  static isAdmin (value) {
    return value instanceof Admin;
  }
}

const admin1 = new Admin('Tiran', 'Dykatorovich', 215, 'tiran@gmail.com');

// admin1.ban(admin1);

// /**
//  * 
//  * @param {number} a 
//  */
// function getAreaOfFigure(a) {
//   return a * a;
// }

// /**
//  * 
//  * @param {number} a 
//  * @param {number} b 
//  */
// function getAreaOfFigure (a, b) {
//   return a * b;
// }

// getAreaOfFigure(2); // 4
// getAreaOfFigure(3,8); // 24

// 2. Поліморфізм - можливість методів успадкованих класів працювати по різному
class Figure {
  constructor (name) {
    this.name = name;
  }

  getArea () {
    console.log(`this function will calculate area of ${this.name}`);
    return NaN;
  }

  static isFigure (value) {
    return value instanceof Figure;
  }
}

class Rectangle extends Figure {
  constructor(a, b) {
    super('rectangle');
    this.a = a;
    this.b = b;
  }

  getArea () {
    return this.a * this.b;
  }
}

class Triangle extends Figure {
  constructor(a, h) {
    super('triangle');
    this.a = a;
    this.h = h;
  }

  getArea() {
    return this.a * this.h * 0.5;
  }
}

const figure1 = new Figure('some random figure');
const rect1 = new Rectangle(2,5);
const tri1 = new Triangle(2,5);

function getAreaOfFigure (figure) {
  if(Figure.isFigure(figure)) {
    return figure.getArea();
  }

  throw new TypeError('figure must be instance of Figure');
}

/*
  Створити клас Animal
    його екземпляри мають вміти пересуватися, їсти та спати за допомогою
    спеціальних методів. Кожна тваринка має мати ім'я та тип (кіт, собака ...)

  Успадкувати від класу тварин класи Змія та Пантера
    і пантери і змії мають рухатися та їсти по своєму

  всі методи можна робити на консоль логах
*/
// class Animal {
//   constructor (nickname, type) {
//     this.nickname = nickname;
//     this.type = type;
//   }

//   sleep() {
//     console.log(`тваринка спить`);
//   }

//   eat () {
//     console.log(`тваринка їсть`);
//   }

//   move () {
//     console.log(`тваринка рухається`);
//   }
// }

// class Panther extends Animal {
//   constructor (nickname){
//     super(nickname, 'panther');
//   }

//   eat() {
//     console.log(`Пантера їсть якесь м'ясо`);
//   }

//   move() {
//     console.log(`Пантера швидко біжить`);
//   }
// }

// class Snake extends Animal {
//   constructor (nickname){
//     super(nickname, 'snake');
//   }

//   eat () {
//     console.log(`Змія їсть якогось хом'ячків`);
//   }

//   move () {
//     console.log(`Змія повільно повзе`);
//   }
// }

// const panther1 = new Panther('1');
// const snake1 = new Snake('2');

// 3. Інкапсуляція - приховування внутрішнього стану та методів об'єкту ві дзовнішнього світу
class Animal {
  // створення приватної властивості
  #secret;
  #hunger;
  #mood;
  #energy;

  constructor (nickname, type) {
    this.nickname = nickname;
    this.type = type;

    // 0 (голодна) - 100 (сита)
    this.#hunger = 50;

    // 0 (стомлена) - 100 (повна сил)
    this.#energy = 50;

    // 0 (роззлючена) - 100 (задоволена)
    this.#mood = 50;

    this.#secret = 'try find be';
  }

  get hunger () {
    return this.#hunger;
  }

  get energy () {
    return this.#energy;
  }

  get mood () {
    return this.#mood;
  }

  // приватні методи - можна запускати тількі в коді всередені класу
  #setMood (newMood) {
    if(typeof newMood !== 'number' || isNaN(newMood)) {
      throw new TypeError('you must give number');
    }

    if(newMood <= 100 && newMood >= 0) {
      this.#mood = newMood;
    } else if(newMood < 0) {
      this.#mood = 0;
    } else if(newMood > 100) {
      this.#mood = 100;
    }
  }

  #setHunger (newHunger) {
    if(typeof newHunger !== 'number' || isNaN(newHunger)) {
      throw new TypeError('you must give number');
    }

    if(newHunger <= 100 && newHunger >= 0) {
      this.#hunger = newHunger;
    } else if(newHunger < 0) {
      this.#hunger = 0;
    } else if(newHunger > 100) {
      this.#hunger = 100;
    }
  }

  #setEnergy (newEnergy) {
    if(typeof newEnergy !== 'number' || isNaN(newEnergy)) {
      throw new TypeError('you must give number');
    }

    if(newEnergy <= 100 && newEnergy >= 0) {
      this.#energy = newEnergy;
    } else if(newEnergy < 0) {
      this.#energy = 0;
    } else if(newEnergy > 100) {
      this.#energy = 100;
    }
  }

  sleep() {
    // console.log(this.#secret);

    this.energy = this.energy + 50;
    console.log(`тваринка спить`);
  }

  eat () {
    const hungerSated = 5;

    this.hunger += hungerSated;

    this.mood += 10;

    console.log(`тваринка їсть`);
  }

  move () {
    this.#setEnergy(this.energy - 4);
    this.#setHunger(this.hunger - 3);

    console.log(`тваринка рухається`);
  }
}

const animal1 = new Animal('Мурзик', 'кіт');

// animal1.hunger = 10;

// console.log(animal1.#secret); // error

// animal1.#setMood();

class Dog extends Animal {
  constructor(nickname) {
    super(nickname, 'dog');
  }

  sleep () {
    // this.#setEnergy(this.energy - 5); // error
  }
}

const dog1 = new Dog('dog1234');
