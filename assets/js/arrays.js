// Масиви (arrays) - структури даних для збереження великої кількості
// (зазвичай) однотипних даних

// const vipEmail1 = 'asdiusd@gmail.com';
// const vipEmail2 = 'njdi34@hotmail.com';
// const vipEmail3 = 'ahfddf443@gmail.com';

// const vipEmails = {
//   user1: 'asdiusd@gmail.com',
//   user2: 'njdi34@hotmail.com',
//   user3: 'ahfddf443@gmail.com',
//   user3: 'asdn4232@hotmail.com'
// };

// const vipEmails = {
//   0: 'asdiusd@gmail.com',
//   1: 'njdi34@hotmail.com',
//   2: 'ahfddf443@gmail.com',
//   3: 'asdn4232@hotmail.com',
// };

//
const vipEmails = new Array(
  'asdiusd@gmail.com',
  'njdi34@hotmail.com',
  'ahfddf443@gmail.com',
  'asdn4232@hotmail.com'
);

console.log(typeof vipEmails); // object
console.log(vipEmails);
// довжина масива
console.log(vipEmails.length); 

// елемент з індексом 2
console.log(vipEmails[2]); // 'ahfddf443@gmail.com'
