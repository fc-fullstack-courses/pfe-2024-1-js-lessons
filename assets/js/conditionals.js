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

let number = +prompt('Enter number');

if (number > 0) {
  console.log('Number is positive');
} else if (number < 0) {
  console.log('Number is negative');
} else if (number === 0) {
  console.log('Number is zero');
} else {
  console.log('Number is Not a Number');
}
