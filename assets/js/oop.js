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
class Animal {
  constructor (nickname, type) {
    this.nickname = nickname;
    this.type = type;
  }

  sleep() {
    console.log(`тваринка спить`);
  }

  eat () {
    console.log(`тваринка їсть`);
  }

  move () {
    console.log(`тваринка рухається`);
  }
}

class Panther extends Animal {
  constructor (nickname){
    super(nickname, 'panther');
  }

  eat() {
    console.log(`Пантера їсть якесь м'ясо`);
  }

  move() {
    console.log(`Пантера швидко біжить`);
  }
}

class Snake extends Animal {
  constructor (nickname){
    super(nickname, 'snake');
  }

  eat () {
    console.log(`Змія їсть якогось хом'ячків`);
  }

  move () {
    console.log(`Змія повільно повзе`);
  }
}

const panther1 = new Panther('1');
const snake1 = new Snake('2');
