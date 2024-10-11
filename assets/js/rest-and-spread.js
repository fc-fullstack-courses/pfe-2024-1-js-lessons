// об'єкт arguments
/**
 * Функція суми необмеженої кількості значень
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function sum(num1, num2) {
  console.log(num1);
  console.log(num2);

  // масивоподібний об'єкт
  // немає методів масиву
  console.log(arguments);

  let resultingSum = num1 + num2;

  for (let i = 0; i < arguments.length; i++) {
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
};

// console.log(sumWithRestOperator(1, 2, 3));

const sumWithRestOperator2 = (...numbers) => {
  let resultingSum = 0;

  numbers.forEach((number) => {
    resultingSum += number;
  });

  return resultingSum;
};

const sum = (...numbers) => numbers.reduce((acc, num) => acc + num);

// spread - оператор (оператор розширення)

const numbers = [20, 35, 15, 7, 2, -10, 0, 100, -0.5];

// const minNumber = Math.min(
//   numbers[0],
//   numbers[1],
//   numbers[2],
//   numbers[3],
//   numbers[4],
//   numbers[5],
//   numbers[6],
//   numbers[7],
//   numbers[8],
//   10000
// );
// console.log(minNumber);

const minNumber = Math.min(...numbers, 10000);
console.log(minNumber);

const nums1 = [2, 4, 6, 8, 10];
const nums2 = [1, 3, 5, 7, 9];

const allNums = [...nums1, 1000000000, ...nums2, -1000];

const sumOfAllNums = sumWithRestOperator2(...allNums);
