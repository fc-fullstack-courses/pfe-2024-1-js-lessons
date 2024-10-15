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