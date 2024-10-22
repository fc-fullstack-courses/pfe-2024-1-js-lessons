// Алгоритми - певна послідовність дій які дають бажаний кінцевий результат

// 1. прийняти рядок тексту та масив голосних
function getVowelsNumber(str, vowelArray = ['a', 'e', 'i', 'o', 'u']) {
  // 2. переконатися що нам дали саме рядок тексту
  // if (typeof str !== 'string' || !str.trim()) {
  //   throw new TypeError('Type of data is incorrect! Enter a valid string!');
  // }

  // 3. створити лічільник голосних у рядку
  let vowelCount = 0;
  let lowerCaseStr = str.toLowerCase();

  // 4. пройтись циклом по рядку і для кожної літери перевірити че є вона у масиві голосних
  for (let i = 0; i < lowerCaseStr.length; i++) {
    // 4.1 якщо літера є у списку то збільшити лічільник
    if (vowelArray.includes(lowerCaseStr[i])) {
      vowelCount++;
    }
  }

  // 5. повернути значення лічільника
  return vowelCount;
}

/*
  оцінка швидкості алогритму у часі робиться по кількості його операцій
  оцінка алогритму по займаній пам'яті 

  y = х (лінійна функція)
  y = х ^ 2 (квадратична)
  y = log х (логаріфмічна)
  y = 2 ^ х (експоненціальна)
  y = х! (факторіал)

  при оцінці алгоритмів по часу:
    y - кількість операцій
    x - вхідні дані

  y = x^2 + 5x + 15
  y = 2^x + 55

  x = 1
  y = 1^2 + 5*1 + 15 = 21
  y = 1 + 55 = 56

  x = 8
  y = 8^2 + 5*8 + 15 = 119 операцій
  y = 2^8 + 55 = 311 операцій

  x = 200
  y = 40000 + 1000 + 15 = 41015
  y = 1.6 * 1000000000000000000000000000000000000000000000000000 + 55

  Розрахунок складності алгоритмів
  x -> n (вхідні дані )
  y = n -> O(n)
  y = 2^n -> O(2^n)
*/

// O(1) - константна складність
const arr1 = [1,5,7,20,50, -50];
function getElemOfArray (array, elemIndex) {
  return array[elemIndex];
}

// O(n) - лінійна складність
function getElemIndex (array, elemValue) {

  for(let i = 0; i < array.length; i++) {
    if(array[i] === elemValue) {
      return i;
    }
  }

  return -1;
}

getElemIndex(arr1, 50);

// O(n^2) - квадратична складність
/*
  1. проходимось по масиву та порівюємо два сусідних елементи
  2. якщо в першого значення більше ніж у другого то міняємо їх місцями
  3. повторюємо ці дії поки навйбільші значення не опиняться в кінці масиву
    а найменші у початку
*/
function bubbleSort(array) {
  // debugger;
  for(let i = 0; i < array.length; i++) {
    // O (n * n) = O(n^2)
    for(let j = 0; j < array.length; j++) {
      let value1 = array[j];
      let value2 = array[j + 1];

      if(value1 > value2) {
        array[j + 1] = value1;
        array[j] = value2;
      }
      // O (n * n * n) = O(n^3)
      // for(let k = 0; k < array.length; k++) {

      // }
    }
  }

  // O (n + n) = O(2n) = O(n)
  // for(let k = 0; k < array.length; k++) {

  // }

  return array;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const numbers = new Array(8000).fill(null).map(() => getRandomArbitrary(-5000, 5000));

console.log('start');
// bubbleSort(numbers);
console.log('end');

// О(log N) - логарифмічна складність
/*
  Бінарний пошук
    Масив обов'язково має бути відсортованим
    1. знаходимо середину масиву і перевіряємо значення у ній
    2.1 якщо співпало то кінець
    2.2 якщо значення меньше то відсікаємо ліву частину включно з серединю
    2.3 якщо значення більше то відсікаємо праву частину включно з серединю
    повторюємо все з п1 поки не знайемо хзначення або елементи не скінчаться
*/
function binarySearch (array, targetElem) {
  // debugger;
  let startingIndex = 0;
  let lastIndex = array.length - 1;

  while(startingIndex <= lastIndex) {
    let middleIndex = Math.floor((startingIndex + lastIndex) / 2);

    if(array[middleIndex] === targetElem) {
      return middleIndex;
    }

    if(array[middleIndex] < targetElem) {
      startingIndex = middleIndex + 1;
    } else {
      lastIndex = middleIndex - 1;
    }
  }

  return -1;
}

const numbers1 = [-2000, -791, -303, -50, 2, 15, 34, 38, 101, 186, 215, 798];
