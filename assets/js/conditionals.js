// умовні конструкції - конструкції коду які дозволяють
// виконувати певні дії за певних умов

// console.log('блок коду 1');

/*
  if ( умова ) {
    // дія
  }

  дія буде виконана тільки тоді, коли
  умова буде правдивою. if завжди приведе
  умову до булевого значення перед прийняттям 
  рішення про запуск / ігнорування дії
*/

// let text = prompt('Write yes to run блок коду 2');

let text = '';

if (text) {
  // відбудется при правдивій умові
  // console.log('блок коду 2');
} else {
  // відбудется якщо всі умови були брехливими
  // console.log('блок коду 3');
}

// let number = +prompt('Enter number');

// if (number > 0) {
//   console.log('Number is positive');
// } else if (number < 0) {
//   console.log('Number is negative');
// } else if (number === 0) {
//   console.log('Number is zero');
// } else {
//   console.log('Number is Not a Number');
// }

// тернарний оператор
// це спеціальний оператор який може замінита вам конструкцію if(умова) {} else {}
/*
  if(умова) {
  // дія 1
  } else {
  // дія 2
  }

  умова ? дія 1 : дія 2;
*/

// const userName = prompt('Введіть ваше ім`я');

// if(userName) {
//   alert('Привіт, ' + userName);
// } else {
//   alert('Привіт, гість');
// }

// userName ? alert('Привіт, ' + userName) : alert('Привіт, гість');

const getUserPrompt1 = function () {
  const userPrompt = prompt('Введіть щось');

  // if(userPrompt) {
  //   return userPrompt;
  // } else {
  //   return 'Користувач нічого не ввів';
  // }
  // debugger;
  return userPrompt ? userPrompt : 'Користувач нічого не ввів';
};

// const res1 = getUserPrompt1();

// console.log(res1);

// const userName = prompt('Введіть ваше ім`я');
// let greetingMessage;

// if(userName) {
//   greetingMessage = 'Привіт, ' + userName;
// } else {
//   greetingMessage = 'Привіт, гість';
// }

// greetingMessage = userName ? 'Привіт, ' + userName : 'Привіт, гість';

// const greetingMessage = userName ? 'Привіт, ' + userName : 'Привіт, гість';

// alert(greetingMessage);

// const userName = prompt('Введіть ваше ім`я');

// if(userName) {
//   alert('Привіт, ' + userName);
// } else {
//   alert('Привіт, гість');
// }

// alert( userName ? 'Привіт, ' + userName : 'Привіт, гість' );

// конструкція switch ... case
/*
  може бути зручною коли ви хочете виконати
  певні дії виходячи з конкретнх значень
  певної змінної або виразу


  switch (змінна_або_вираз) {
    case значення_А: {
      // блок коду А
    }
    case значення_B: {
      // блок коду B
    }
    default: {
      // виконається якщо всі кейси зверху
      // не підійдуть
    }
  }

  порівняння проводитсья у вигляді 
    змінна_або_вираз === значення_А 
    для кожного кейсу до першої правди
*/

// let value = 1;

// // debugger;
// switch (value) {
//   case 1: {
//     alert('value прийняло значення 1');

//     // зупиняє виконання світча після себе
//     break;
//   }
//   case 2: {
//     alert('value прийняло значення 2');
//     break;
//   }
//   case 'test': {
//     alert('value прийняло значення test');
//     break;
//   }
//   default: {
//     alert('Значення value не підтримується');
//   }
// }

// let cardLevel = 'basic';

const getCardCashbackPercenage = function (cardLevel) {
  let cashbackPercentage;

  switch (cardLevel) {
    case 'basic':
    case 'basic+':
    case 'basic++': {
      cashbackPercentage = 1.2;
      break;
    }
    case 'pro': {
      cashbackPercentage = 1.5;
      break;
    }
    case 'gold': {
      cashbackPercentage = 2.5;
      break;
    }
    case 'platinum': {
      cashbackPercentage = 6;
      break;
    }
    default: {
      cashbackPercentage = 0;
    }
  }

  return cashbackPercentage;
};

/*
  Написати функцію яка приймає рядок з назвою місяця або номер місяця
  функція за допомогою конструкції switch ... case має повернути назву
  сезону (весна, літо. осінь, зима)

  getSeason('квітень') -> 'весна'
  getSeason(12) -> 'зима'
*/

const getSeason = function (month) {
  switch (month) {
    case 'December':
    case 'January':
    case 'February':
    case 1:
    case 2:
    case 12:
      return 'Winter';
    case 'March':
    case 'April':
    case 'May':
    case 3:
    case 4:
    case 5:
      return 'Spring';
    case 'June':
    case 'July':
    case 'August':
    case 6:
    case 7:
    case 8:
      return 'Summer';
    case 'Spetember':
    case 'October':
    case 'November':
    case 9:
    case 10:
    case 11:
      return 'Autumn';
    default:
      return 'Невідомий місяць';
  }
};
