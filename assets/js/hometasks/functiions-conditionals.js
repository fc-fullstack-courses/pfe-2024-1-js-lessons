const getSmallestNumber = function (singleDigitNum1, singleDigitNum2) {
  if (singleDigitNum1 > singleDigitNum2) {
    return singleDigitNum2;
  } else {
    return singleDigitNum1;
  }
};

const isAdult = function (age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
};

const res1 = isAdult(25);

// if(res1) {
//   console.log('User is adult');
// }

// if(res1) {
//   alert('User is adult');
// }

const getPriceWithDiscount = function (price) {
  if (price >= 1500) {
    return price - (price / 100 * 10);
  } else {
    return price - (price / 100 * 5);
  }
};

const isEven = function (number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
