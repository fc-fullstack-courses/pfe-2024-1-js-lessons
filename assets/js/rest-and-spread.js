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

console.log(sum(1,2,3));

// console.dir(sum);

// const arrow = () => {};

// console.dir(arrow);