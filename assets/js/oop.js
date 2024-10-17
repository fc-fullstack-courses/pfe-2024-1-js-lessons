// Концепції ООП (об'єктно-орієнтованого програмування)

// 1. Успадкування
class Animal {
  constructor (nickname, weight = 1, type = 'animal') {
    this.nickname = nickname;
    this.weight = weight;
    this.type = type;
  }

  sleep () {
    console.log(`${this.nickname} is sleeping`);
  }

  eat () {
    console.log(`${this.nickname} is eating`);
  }
}

const mouse = new Animal('Jerry');
const dog = new Animal('Bulldog');

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


class Bird extends Animal {
  constructor (nickname, weight = 1, wingspan = 0.7) {
    // запуск батьківського конструктора ( зараз Animal)
    // має бути запущений до роботи с this
    // та до повертання підсумкового об'єкту
    super(nickname, weight, 'bird');

    // this.nickname = nickname;

    this.wingspan = wingspan;
  }

  fly () {
    console.log(`${this.nickname} is flying`);
  }
}

const parrot1 = new Bird('Kesha', 2, 0.8);
const parrot2 = new Bird('NotKesha', 0.5, 1);

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
