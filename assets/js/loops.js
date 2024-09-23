// Цикли
/*
  використовуються для виконання однаковіх або дуже скожих дій
  певну кількість разів
*/
// цикл while
/*

while(умова_продовження) {
  // тіло циклу
}

чи треба виконати цикл? 
  Якщо так то виконує тіло циклу 1 раз
    Після кожного виконання знову дивимося чи треба виконати тіло ще раз
  Якщо ні то цикл не виконується
*/
// приклад безкінечного циклу
// while (true) {
//   alert('тіло циклу виконано');
// }

// let counter = 0;
// // debugger;
// while (counter < 50) {
//   // виконання тіла циклу називається ітерацією
//   counter++;
//   console.log(counter);
// }

// let counter = 0;
// debugger;
// while (true) {
//   alert('iteration');
//   if(counter++ > 3) {
//     // зупиняє виконання циклу
//     break;
//   }
// }

// let shouldContinue = true;
// while(shouldContinue) {
//   alert('iteration');
//   shouldContinue = confirm('Чи треба продовжувати?');
// }

/*
  за допомогою циклу виводити в консоль 
  всі непарні числа від 0 до 10

  1
  3
  5
  7
  9
*/
// let counter1 = 0;
// debugger;
// while(counter1 < 10) {
//   if(counter1 % 2 !== 0) {
//     console.log(counter1);
//   }
//   counter1++;
// }

// let counter1 = 1;
// debugger;
// while(counter1 < 10) {
//   if(counter1 % 2 !== 0) {
//     console.log(counter1);
//   }
//   counter1 += 2;
// }

// let count = 0;
// debugger;

// while(true) {
// let count = 0;
//   count++;
//   if(count % 2 === 0) {
//     // достроково переходить на нове коло (ітерацію)
//     continue;
//   }

//   if(count >= 10) {
//     break;
//   }

//   console.log(count);

// }

// цикл do ... while
/*
  цикл do ... while завжди відпрацює 
  мінімум 1 раз

do {
  // тіло циклу
} while (умова)
*/

// let counter2 = 0;
// debugger;
// do {
//   alert('iteration');
//   counter2++;
// } while (1000000000 < 0);

// цикл for
/*
  for( зонаПочатку ;зонаУмови ; зонаКроку ) {
    // тіло циклу
  }

  у зоніПочатку ви можете сторити внутрішні змінні для цього циклу
  у зоніУмови ви пишете умову продовження циклу
  у зоніКроку ви вказуєте дію або дії які треба зробити після кожної ітерації
*/
debugger;
// for (let counter = 0, x = 'test'; counter < 10; counter++) {
//   console.log(counter);
// }
// i, j ...
// debugger;
// безкінечна варіація for
// for(;;) {
//   alert('це буде повторюватися безкінечно');
// }