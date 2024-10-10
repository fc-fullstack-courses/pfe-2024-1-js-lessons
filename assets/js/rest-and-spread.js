// об'єкт arguments
/**
 * Функція суми необмеженої кількості значень
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function sum (num1, num2) {
  console.log(num1);
  console.log(num2);

  // масивоподібний об'єкт
  // немає методів масиву
  console.log(arguments);

  let resultingSum = num1 + num2;

  for(let i = 0; i < arguments.length; i++) {
    resultingSum += arguments[i];
  }

  return resultingSum;
}

// const arr1 = [1,2,34];

// приймає необмежену кількість аргументів
// arr1.push();

// console.log(sum(1,2,3));

// console.dir(sum);

// const arrow = () => {};

// console.dir(arrow);


// rest-оператор (оператор залишкових параметрів)
/**
 * Функція суми необмеженої кількості значень
 * @param {number} num1 
 * @param {number} num2 
 * @param {...number} numbers - масив аргументів - чисел починаючи з третього аргументу
 * @param {number[]} numbers - масив аргументів - чисел починаючи з третього аргументу
 * @returns {number}
 */
const sumWithRestOperator = (num1, num2, ...numbers) => {
  let resultingSum = num1 + num2;

  numbers.forEach((number) => {
    resultingSum += number;
  });

  return resultingSum;
}

console.log(sumWithRestOperator(1,2,3));

const sumWithRestOperator2 = (...numbers) => {
  let resultingSum = 0;

  numbers.forEach((number) => {
    resultingSum += number;
  });

  return resultingSum;
}
