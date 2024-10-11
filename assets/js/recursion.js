// рекурсивна функція - функція, яка в процесі свого виконання може викликати саму себе

// погана рекурсивна sum
// function sum(num1 = 2, num2= 2) {
  
//   // alert();

//   // console.log(num1 + num2);
//   sum();
// }


// sum();

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// function countdown (number) {
//   console.log(number);

//   // рекурсивний випадок
//   if(number > 0) {
//     countdown(number - 1);
//   }

//   // базовий випадок
//   return undefined;
// }

function countdown (number) {
  console.log(number);
  
  // базовий випадок  
  if(number <= 0) {
    return undefined;
  }


  // рекурсивний випадок
  countdown(number - 1);
}

// debugger;
countdown(5);

/*
  Етапи роботи рекурсивної функції
    1. функція рекурсивно робить якусь дію та запускає саму себе в колл стаці
    2. якась з запуссків функцій доходить до базового випадку (не запускаї іншу функцію до свого завершення)
    3. всі інші функці завершують свою роботу
*/
