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
const myFirstFunction = function(firstNumber, secondNumber) {
  // тіло функції - блок коду який буде виконано 
  // коли функція запуститься
  // console.log('Hello from first function');
  // console.log('you can do anything you wan here');
  // console.log('Ви передали функціі на вхід наступне значення: ' + firstParam);

  const sumResult = firstNumber + secondNumber;
  
  // return каже функції її підсумковий результат роботи
  // після першого виконаного рядка з return функція зупиняє свою роботу
  // return firstNumber + secondNumber;
  return sumResult;

  console.log(sumResult);
}

const result = myFirstFunction(10, 50);

alert('Result is: ' + result);
// const result1 = myFirstFunction(10);
// myFirstFunction('this is firstParam');
// myFirstFunction();

// console.log(result1);

// const consoleLogRes = console.log();
// const alertRes = alert();

// console.log(consoleLogRes);
// console.log(alertRes);