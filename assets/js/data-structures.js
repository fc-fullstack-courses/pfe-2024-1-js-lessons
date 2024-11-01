class LinkedListNode {
  #next;
  #prev;
  constructor(data) {
    this.data = data;
    this.next = null; // вказівник на наступний вузол у списку
    this.prev = null; // вказівник на попередній вузол у списку
  }

  get next() {
    return this.#next;
  }

  get prev() {
    return this.#prev;
  }

  set next(node) {
    if (node === null || LinkedListNode.isLinkedListNode(node)) {
      this.#next = node;
      return;
    }

    throw new TypeError('Invalid node value');
  }

  set prev(node) {
    if (node === null || LinkedListNode.isLinkedListNode(node)) {
      this.#prev = node;
      return;
    }

    throw new TypeError('Invalid node value');
  }

  static isLinkedListNode(value) {
    return value instanceof LinkedListNode;
  }
}

class DoubleLinkedList {
  #head;
  #tail;
  constructor() {
    this.head = null; // перший вузол у списку
    this.tail = null; // останній вузол у списку
    this.length = 0; // довжина списку
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  set head(node) {
    if (node === null || LinkedListNode.isLinkedListNode(node)) {
      this.#head = node;
      return;
    }

    throw new TypeError('Invalid node value');
  }

  set tail(node) {
    if (node === null || LinkedListNode.isLinkedListNode(node)) {
      this.#tail = node;
      return;
    }

    throw new TypeError('Invalid node value');
  }

  // вставка значення у кінець списку
  push(data) {
    /*
      1. створити новий вузол списку
      2. вставити вузол у список
        2.1 якщо список пустий то зробити вузол 
            і головою і хвостом списку
        2.2 якщо список не пустий то 
            2.2.1 новий вузол має вказувати на попередній хвіст
            2.2.2 попередній хвіст має вказувати на новий вузол як на насутпний вузол
            2.2.3 маємо зміними хвіст на новий елемент
      3. збільшити довжину списку
      4. повернути довжину списка
    */

    // 1. створити новий вузол списку
    const newNode = new LinkedListNode(data);

    // 2.1 якщо список пустий то зробити вузол
    // і головою і хвостом списку
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this.length;
  }

  // видалення останнього вузла зі списку
  pop() {
    /*
      1. якщо список пустий то нічого не робимо взагалі
      2. якщо він не пустий то:
        2.1 зберігаємо останній вузол в окрему змінну
        2.2 змінюємо хвіст на передостанній елемент
        2.3 перевіряємо чи існує передостанній елемент (чи довжина дорівнює 1)
          2.3.1 якщо не існує то head встановлюємо в null
          2.3.2 якщо існує то передостанньому елементу змінюемо next на null
              (опціонально витираємо останнюому елементу prev)
      3. зміеншиємо довжину
      4. повертаємо вузол який видалили зі списку
    */

    // 1. якщо список пустий то нічого не робимо взагалі
    if (this.length === 0) {
      return undefined;
    }

    // 2.1 зберігаємо останній вузол в окрему змінну
    const deletedNode = this.tail;
    const prevNode = deletedNode.prev;
    // 2.2 змінюємо хвіст на передостанній елемент
    this.tail = prevNode;
    // 2.3 перевіряємо чи існує передостанній елемент (чи довжина дорівнює 1)
    if (this.length === 1) {
      // 2.3.1 якщо не існує то head встановлюємо в null
      this.head = null;
    } else {
      // 2.3.2 якщо існує то передостанньому елементу змінюемо next на null
      //         (опціонально витираємо останнюому елементу prev)
      prevNode.next = null;
      deletedNode.prev = null;
    }

    // 3. зміеншиємо довжину
    this.length--;
    // 4. повертаємо вузол який видалили зі списку
    return deletedNode;
  }

  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

class LinkedListIterator {
  constructor(list) {
    this.list = list;
    this.currentNode = null;
  }

  next() {
    this.currentNode = this.currentNode
      ? this.currentNode.next
      : this.list.head;

    return {
      done: !this.currentNode,
      value: this.currentNode,
    };
  }
}

const list1 = new DoubleLinkedList();

list1.push('first');
list1.push('second');
list1.push('last');

console.log(list1);

// list1[Symbol.iterator] = function () {

//   let currentNode = null;

//   const iterator = {
//     next: function () {

//       if(currentNode) {
//         currentNode = currentNode.next;
//       } else {
//         currentNode = list1.head;
//       }

//       const obj = {
//         done: !currentNode,
//         value: currentNode
//       }

//       return obj;
//     }
//   };

//   return iterator;
// }

// const listIterator = list1[Symbol.iterator]();

for (const node of list1) {
  console.log(node);
}

const [fisrtNodem, ...restNodes] = list1;
