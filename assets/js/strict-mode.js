// суворий режим виконання JS
"use strict"; // вмикає суворий режим для файла

// let publicInfo = 'всі побачать';

// if (true) {
//   var secret = 'dont look';

//   console.log(publicInfo);
//   console.log(secret);
// }

// console.log(publicInfo);
// console.log(secret);


function thisTest () {
  console.log(this);

  console.log(this.fetch);

  this.fetch = 'nfidsnfdsifnd';

  console.log(this.fetch);

  this.alert = 10;
}

thisTest();

// alert('test');

// alert = 'Anton';

// console.log(alert);
// console.log(window);