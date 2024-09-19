// області видимості
// позначаются {}, але не у випадку коли ви присвоюєте {} змінній


let number = 10;

// console.log(number); // 10

const testFunc = function() {
  let number = 5;

  console.log(number); // 5

  if(true) {
    let number2 = 100;

    console.log(number); // 5
    console.log(number2); // 100
  }

  // console.log(number2); // error
}

// console.log(number); // 10

// testFunc();

// console.log(number); // 10
// console.log(number2); // error

// це не область видимості
// let test = {};

// Чому var поганий

var varVarible1 = 'var 1';

console.log(varVarible1); // 'var 1'

varVarible1 = 'changed var 1';

console.log(varVarible1); // 'changed var 1'

const varTestingFunction = function () {
  var varVarible1 = 5;

  console.log(varVarible1); // 5

  if(true) {
    var varVarible2 = 'var 2';

    console.log(varVarible1); // 5
    console.log(varVarible2); // 'var 2'
  }

  console.log(varVarible2); // 'var 2'
}

// varTestingFunction();

console.log(varVarible1); // 'changed var 1'

// console.log(varVarible2); // error