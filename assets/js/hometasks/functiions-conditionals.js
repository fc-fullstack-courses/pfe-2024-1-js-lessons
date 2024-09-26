const getSmallestNumber = function (singleDigitNum1, singleDigitNum2) {
  if (
    typeof singleDigitNum1 !== 'number' ||
    typeof singleDigitNum2 !== 'number' ||
    isNaN(singleDigitNum1 * singleDigitNum2)
  ) {
    return null;
  }

  if (singleDigitNum1 > singleDigitNum2) {
    return singleDigitNum2;
  } else {
    return singleDigitNum1;
  }
};

const getSmallerOfTwoNumbers = function (firstNum, secondNum) {
  if (
    !isNaN(firstNum + secondNum) &&
    typeof firstNum === 'number' &&
    typeof secondNum === 'number'
  ) {
    return firstNum > secondNum ? secondNum : firstNum;
  }

  return null;
};

const generalSuma = function (price) {
  if (isNaN(price)) {
    return null;
  }

  // let discount;

  // if (price >= 1500) {
  //   discount = price * 0.1;
  // } else {
  //   discount =  price * 0.05;
  // }

  const discount = price >= 1500 ? price * 0.1 : price * 0.05;

  return price - discount;
};

const isAdult = function (age) {
  if (typeof age !== 'number' || isNaN(age)) {
    return null;
  }
  // debugger;
  //   if (age >= 18) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return age >= 18;
};

const res1 = isAdult(25);

// if(res1) {
//   console.log('User is adult');
// }

// if(res1) {
//   alert('User is adult');
// }

const getPriceWithDiscount = function (price) {
  if (typeof price !== 'number' || isNaN(price)) {
    return null;
  }

  if (price >= 1500) {
    return price - (price / 100) * 10;
  } else {
    return price - (price / 100) * 5;
  }
};

const isEven = function (number) {
  if (typeof number !== 'number' || isNaN(number)) {
    return null;
  }
  // if (number % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }

  return number % 2 === 0;
};
