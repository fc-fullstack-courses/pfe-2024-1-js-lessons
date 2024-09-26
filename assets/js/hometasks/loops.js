// let answer;
// while (answer !== 6) {
//   answer = +prompt('Solve this (2 + 2 * 2)');
//   if (answer === 6) {
//     alert('You are right');
//   } else {
//     alert('You are wrong. Please try again');
//   }
// }

for (let answer; answer !== 6; ) {
  answer = +prompt('Solve this (2 + 2 * 2)');

  if (answer === 6) {
    alert('You are right');
  } else {
    alert('You are wrong. Please try again');
  }
}
