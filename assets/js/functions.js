// Функції - блоки коду які можно повторно використовувати

/*
  параметри функції - речі які передаємо всередину 
                      як додаткову інформацію 
*/
// let text = 'test';
// console.log(text, 123);

// let userName;

// alert(userName);

// const userName = prompt('Enter your name');

// const greetingText = 'Hello ' + userName + '!';

// alert(greetingText);

// const num1 = prompt("Enter first number");
// const num2 = prompt("Enter second number");

// alert(+num1 + +num2);

// const num1 = +prompt("Enter first number");
// const num2 = +prompt("Enter second number");

// alert(num1 + num2);
// alert(num1 + 50);
// alert(num2 + 40005465);

// const input1 = prompt("Enter first number");
// const input2 = prompt("Enter second number");

// const num1 = +input1;
// const num2 = +input2;

// alert(num1 + num2);

// const result = prompt();

// console.log(result);

// Створення функцій

// functional expression (функціональний вираз)
const getSumOfTwoNumbers = function (firstNumber, secondNumber) {
  // тіло функції - блок коду який буде виконано
  // коли функція запуститься

  // завершити функцію якщо параметри не є нормальними числами
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    return null;
  }

  // if(firstNumber !== firstNumber || secondNumber !== secondNumber) {

  // правда = NaN, брехня - нормальне значення
  // const isNaNResult = isNaN(firstNumber - secondNumber);

  // if(isNaNResult) {
  //   return null;
  // }

  if (isNaN(firstNumber - secondNumber)) {
    return null;
  }

  // if(typeof secondNumber !== 'number') {
  //   return null;
  // }

  // const firstNumber = +prompt("Enter first number");
  // const secondNumber = +prompt("Enter second number");

  const sumResult = firstNumber + secondNumber;

  // return каже функції її підсумковий результат роботи
  // після першого виконаного рядка з return функція зупиняє свою роботу
  // return firstNumber + secondNumber;
  return sumResult;

  // це недосяжний блок коду
  console.log(sumResult);
};

// const firstNumber = prompt("Enter first number");
// const secondNumber = prompt("Enter second number");

// const result = getSumOfTwoNumbers(1000, 500);

// console.log('Result is: ' + result);

// const num1 = +prompt("Enter first number");
// const num2 = +prompt("Enter second number");

const result2 = getSumOfTwoNumbers(NaN, 10);

console.log('Result2 is: ' + result2);

// alert('Result is: ' + result);
// const result1 = myFirstFunction(10);
// myFirstFunction('this is firstParam');
// myFirstFunction();

// console.log(result1);

// const consoleLogRes = console.log();
// const alertRes = alert();

// console.log(consoleLogRes);
// console.log(alertRes);


// func1(); // error

func2(); // result 2

const func1 = function (param1) {
  console.log('func1');
  return 'result 1';
}

// function declaration (об'явлення функції)
function func2 (param1) {
  console.log('func2');
  return 'result 2';
}

// func1(); // result 1

// func2() // result 2
