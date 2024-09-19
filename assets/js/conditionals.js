// умовні конструкції - конструкції коду які дозволяють
// виконувати певні дії за певних умов

console.log('блок коду 1');

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
  console.log('блок коду 2');
} else {
  // відбудется якщо всі умови були брехливими
  console.log('блок коду 3');
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
}

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


const userName = prompt('Введіть ваше ім`я');

// if(userName) {
//   alert('Привіт, ' + userName);
// } else {
//   alert('Привіт, гість');
// }

alert( userName ? 'Привіт, ' + userName : 'Привіт, гість' );
