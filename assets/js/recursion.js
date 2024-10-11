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
// total: 51
const tree = {
  value: 2,
  left: {
    value: 7,
    left: {
      value: 2
    },
    right: {
      value: 6,
      left: {
        value: 5
      },
      right: {
        value: 11
      }
    }
  },
  right: {
    value: 5,
    right: {
      value: 9,
      left: {
        value: 4
      }
    }
  }
}

/**
 * Функція для обходу та отримання суми двійкового дерева
 * @param {object} tree об'єкт дерева
 * @param {number} tree.value значення вершини дерева
 * @param {object} [tree.left] ліва гілка
 * @param {object} [tree.right] права гілка
 * @returns {number} сума вершин дерева
 */
function reduceTree (tree) {
  let result = tree.value;

  // якщо є ліва гілка треба розрахувати її суму і додати до result
  if(tree.left) {
    result += reduceTree(tree.left);
  }

  // якщо є права гілка треба розрахувати її суму і додати до result
  if(tree.right) {
    result += reduceTree(tree.right);
  }

  // базовий випадок
  return result;
}

// debugger;
// reduceTree(tree);