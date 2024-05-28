/*
0 Створити числовий масив та проініціалізувати його (*випадковими числами).
1 Видалити останній і початковий елемент з масиву, додати елемент до початку і кінця.
2 Вивести розмір масиву.
3 Зробити копію масиву.

// Не використовувати методи перебору масивів (forEach, filter, map, findIndex), а використати цикли

4 Вивести елементи з парними індексами.
5 Знайти добуток елементів масиву.
6 Задано масив з описом телефонів з полями id, brand, model, color, price, RAM, ... (можна обрати будь-яку іншу сутність). Можна згенерувати дані за допомогою ШІ.
- Сформувати розмітку для карток. (*Застилізувати картки.) 
- Знайти середню ціну телефонів.
- *Знайти кількість телефонів з RAM 4, 6, 8, 12 ГБ (можна спробувати накопичити дані в об'єкт вигляду: ключ - обсяг RAM, значення - кількість телефонів з цим обсягом RAM).

// Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter
9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map
10 Вивести елементи масиву, зведені у куб. // forEach
11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex
12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами). // every
13 *Перевірити, чи є у масиві бодай один від'ємний елемент. // some
*/

function getRandomInt(max) {
  return 2 + Math.floor(Math.random() * max);
}
let arr = [];
for (let i = 0; i < 15; i++) {
  arr.push(getRandomInt(10));
}
//1
arr.push(5);
arr.unshift(5);
arr.pop();
arr.shift();
//2
console.log(arr.length);
//3
const arr2 = arr.concat();

//4
for (let i = 0; i < arr.length; i += 2) {
  i != 0 ? console.log(arr[i], `index ${i}`) : {};
}
//5
function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArr(arr));

//6

function addPhone(id, brand, model, color, price, RAM) {
  (this.id = id),
    (this.brand = brand),
    (this.model = model),
    (this.color = color),
    (this.price = price),
    (this.RAM = RAM);
}
let phons = [];
for (let i = 0; i < 6; i++) {
  phons.push(
    new addPhone(
      i,
      "brand",
      "model",
      "color",
      getRandomInt(4000),
      getRandomInt(12)
    )
  );
}
console.log(phons);
let htmlPhone = ``;
for (let i = 0; i < phons.length; i++) {
  htmlPhone += `<artikle class="cardPhon">`;
  for (let el in phons[i]) {
    switch (el) {
      case "brand":
        htmlPhone += `<p class='brandPhone'>${el}: ${phons[i][el]}</p>`;
        break;
      case "model":
        htmlPhone += `<p class="modelPhone">${el}: ${phons[i][el]}</p>`;
        break;
      case "color":
        htmlPhone += `<p class="colorPhone">${el}: ${phons[i][el]}</p>`;
        break;
      case "price":
        htmlPhone += `<p class="pricePhone">${el}: ${phons[i][el]}</p>`;
        break;
      case "RAM":
        htmlPhone += `<p class="RAMPhone">${el}: ${phons[i][el]}</p>`;
        break;
    }
  }
  htmlPhone += `</artikle>`;
}
document.write(htmlPhone);

let sum = 0;
for (let i = 0; i < phons.length; i++) {
  for (let el in phons[i]) {
    if (el === "price") {
      sum += phons[i][el];
    }
  }
}
console.log("середня ціна телефонів", sum / phons.length);

let ram4 = 0,
  ram6 = 0,
  ram8 = 0,
  ram12 = 0;
for (let i = 0; i < phons.length; i++) {
  for (let el in phons[i]) {
    if (el === "RAM" && phons[i][el] === 4) {
      ram4++;
    } else if (el === "RAM" && phons[i][el] === 6) {
      ram6++;
    } else if (el === "RAM" && phons[i][el] === 8) {
      ram8++;
    } else if (el === "RAM" && phons[i][el] === 12) {
      ram12++;
    }
  }
}
console.log("кількість з рам 4, 6, 8, 12", ram4, ram6, ram8, ram12);

/*
// Методи перебору масивів (forEach, filter, map, findIndex, *some, *every).
8 Отримати новий масив із заданого, який міститиме лише ненульові числа (-1, 5, 0, 9, -10 => -1, 5, 9, -10). // filter
9 Отримати новий масив їх заданого, який міститиме всі елементи вихідного, поділені на 100 (99, 5, 0, 9, 30 => 0.99, 0.05, 0, 0.09, 0.3). // map
10 Вивести елементи масиву, зведені у куб. // forEach
11 Визначити індекс елемента, квадрат якого дорівнює 100, і видалити його, або видати діагностичне повідомлення, якщо такого елементу не існує. // findIndex
12 *Перевірити, чи всі елементи масиву є парними числами (* або простими числами). // every
13 *Перевірити, чи є у масиві бодай один від'ємний елемент. // some
*/

function isSimple(count) {
  for (let i = 2; i < count; i++) {
    if (count % i === 0) return false;
  }
  return count > 1;
}
const listTest = [7, 3, 5, 17, 18, 20];
const list = [0, 2, 5, 8, -2, 12, 10, -11, 0, 4, 0];
const list1 = list.filter((n) => n === 0);
const list2 = list.map((n) => n / 100);
list.forEach((n) => console.log("10 task", n ** 2));
const index = list.findIndex((n) => n ** 2 === 100);
console.log(listTest.every((n) => n % 2 === 0 || isSimple(n)));
console.log(list.some((n) => n < 0));
