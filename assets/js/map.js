/*
Нехай даний масив масивів ([[1,"first"], [3,"third"]]).
Створіть колекцію Map з цього масиву (по суті, вона співставляє значенням чисел їх порідковий числівник).
Отримайте кількість елементів.
Додати та видалити елемент.
Здійсніть пошук за ключом.
Перевірити, чи є в мапі числівник для числа 2.
Отримайте список ключів та значень окремо.

*Написати функцію, яка перероблятиме текст з числами
"This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents."
 на текст з порядковими числівниками за допомогою мапи вище:
"This year I will enter the first grade. I have two brothers. I am the third child of my parents."
*/
"use strict";
const list = [
  [1, "first"],
  [3, "third"],
];
const numTranslate = new Map();
list.forEach((e) => numTranslate.set(e[0], e[1]));
console.log(numTranslate.size);

numTranslate.set("add", "element");
numTranslate.delete("add");
console.log(numTranslate.has(1));

console.log(findInMap("second ", numTranslate));

function findInMap(find, map) {
  const findTrim = find.trim();
  for (const count of map) {
    if (count[1] === findTrim) {
      return true;
    }
  }
  return false;
}
//
const [list1 = [key0, val0], list2 = [key1, val1]] = numTranslate;
console.log(list1, list2);
//

const valList = [];
numTranslate.forEach((e) => valList.push(e));

numTranslate.keys();
numTranslate.values();

function tranlateNum(text, map) {
  const textList = text.split(" ");
  const newText = textList.map(cb);
  function cb(curVal) {
    for (const iterator of map) {
      if (String(iterator[0]) === curVal) {
        return iterator[1];
      }
      return curVal;
    }
  }
  return newText.join(" ");

  // first try

  // forWords: for (const words of textList) {
  //   for (const iterator of map) {
  //     if (String(iterator[0]) === words) {
  //       newText.push(iterator[1]);
  //       continue forWords;
  //     }
  //   }
  //   newText.push(words);
  // }
  // return newText.join(" ");
}
console.log(
  tranlateNum(
    "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.",
    numTranslate
  )
);
