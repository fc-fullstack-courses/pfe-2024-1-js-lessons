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

let counter = 0;
// debugger;
while (counter < 50) {
  // виконання тіла циклу називається ітерацією
  counter++;
  console.log(counter);
}


