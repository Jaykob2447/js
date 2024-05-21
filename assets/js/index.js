/*
Функції
1) Реалізувати функцію isWorkingAgePerson, яка буде перевіряти, чи працездатного людина віку (наприклад, від 16 до 64).
Функція приймає в якості параметра вік людини і повертає значення булевого типу.

Очікуваний результат:
isWorkingAgePerson(20); // true
isWorkingAgePerson(4); // false
isWorkingAgePerson(88); // false

2) Реалізувати функцію checkMultiplicity, яка приймає два числа і перевіряє, чи ділиться перше на друге націло (без залишку):

checkMultiplicity(25, 5) // true
checkMultiplicity(15, 3) // true
checkMultiplicity(15, 5) // true
checkMultiplicity(15, 4) // false

Функція має повертати булеве значення: true, якщо ділиться без залишку, false - не ділиться без залишку.
Примітка: використати оператор знаходження залишку від ділення %.

3) Перевірка можливості існування трикутника.
Реалізувати функцію, яка приймає довжини трикутника; функція повертає true, якщо трикутник можливий,
 і false, якщо ні (див. умови існування трикутника, наприклад https://zkan.com.ua/rizne/jak-pereviriti-chi-isnue-trikutnik.html).

4) Реалізувати функції розрахунку площі (або поверхні) наступної фігури (тіла): трикутника,
 прямокутника (або конуса, паралелепіпеда) в залежності від переданих розмірів фігури.
  Функція повинна повернути обчислене значення. Мінімум для однієї фігури на вибір.

Наприклад, для розрахунку площі квадрата функція має приймати довжину сторони, а площі прямокутника -- довжини двох сторін.

5) *Реалізувати функцію, яка приймає число і повертає булеве значення, чи воно просте
 (просте число ділитися без залишку тільки на себе і на одиницю).

6) *Реалізувати функцію для формування розмітки картки товару. Функція має приймати
адресу зображення товару (по дефолту, наприклад, взяти https://cdn-icons-png.flaticon.com/512/1170/1170679.png), 
назву, 
короткий опис, 
ціну, 
ціну зі знижкою (якщо undefined - то не виводити, якщо знижка є - то иввести нову ціну,
   стару ціну закреслити і порахувати і вивести розмір знижки у відсотках (округлити до цілого))


2 функції на вибір реалізувати у форматі функціонального виразу (function expression),
 інші у формі оголошення функції (function declaration).

Буде плюсом використовувати JSDoc (на вибір 2 функції).

*/

// 1
const isWorkingAgePerson = function (age) {
  return age >= 16 && age <= 64;
};

console.log("task 1", isWorkingAgePerson(16));
/*
console.log(
  "Чи працездатного віку людына:",
  isWorkingAgePerson(+prompt("Вкажить вік"))
    ? "Працездатного"
    : "Не працездатного"
);
*/
//вивід у двох варіантах, швикому та розгорнутому

// 2

const checkMultiplicity = function (num1, num2) {
  return num1 % num2 === 0;
};

console.log("task 2", checkMultiplicity(15, 5));

// 3

function isCouldBeATriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0;
}
console.log("task 3", isCouldBeATriangle(15, 15, 15));

// 4
function areaByTriangle(a, b, corner, sin = true) {
  return (1 / 2) * a * b * Math.sin(sin ? (corner * Math.PI) / 180 : corner);
}
console.log("task 4.1", areaByTriangle(15, 15, 15));
/*
//є і такий спосіб бо результат буде однаковий 
function areaByQuadrilateral(d1, d2, alpha, sin = true) {
  return areaByTriangle(d1, d2, alpha, (sin = true));
}
*/

function areaByQuadrilateral(a, b, c, d, r) {
  return ((a + b + c + d) / 2) * r;
}
console.log("task 4.2", areaByQuadrilateral(15, 15, 15, 15, 15));

function areaBySquare(d) {
  return (1 / 2) * Math.pow(d, 2);
}
console.log("task 4.3", areaBySquare(15));

// 5

function isSimple(count) {
  for (let i = 2; i < count; i++) {
    if (count % i === 0) return false;
  }
  return count > 1;
}

console.log("task 5", isSimple(3));

// 6
/* Функція має приймати адресу зображення товару (по дефолту, наприклад, взяти https://cdn-icons-png.flaticon.com/512/1170/1170679.png), 
назву, 
короткий опис, 
ціну, 
ціну зі знижкою (якщо undefined - то не виводити, якщо знижка є - то вивести нову ціну,
стару ціну закреслити і порахувати і вивести розмір знижки у відсотках (округлити до цілого)) */

const wareImgSrc2 =
  "https://content1.rozetka.com.ua/goods/images/big/435920576.jpg";
const wareName2 = "Пральний порошок Ariel Аква-Пудра Color";
const wareShortAbaut2 =
  "Пральний порошок Ariel усуває складні плями, включно з неприємним запахом, як-от запах поту та тіла.";
const warePrice2 = 1349;
const discount2 = false;

const wareImgSrc = "https://cdn-icons-png.flaticon.com/512/1170/1170679.png";
const wareName = "Headphone !nouname";
const wareShortAbaut = "best headphone for nouone";
const warePrice = 569;
const discount = false;

function addWare(
  name,
  abaut,
  price,
  imgSrc = "https://cdn-icons-png.flaticon.com/512/1170/1170679.png",
  discount = false
) {
  const countDiscount = 0.05;
  const div = document.createElement("div");
  const inFuncName = `<h3>${name}</h3>`;
  const inFuncabaut = `<p>${abaut}</p>`;
  const priceWithDiscount = price - countDiscount * price;
  inFuncPrice = ``;
  if (!discount) {
    inFuncPrice = `<span class="priceWare"><span class="priceWithDiscount">${Math.round(
      priceWithDiscount
    )}₴ </span> <span class="crossed_out">${price}₴</span>  
    <br>Discount ${countDiscount * 100}%</span>`;
  } else {
    inFuncPrice = `<span class="priceWare">${price}₴</span>`;
  }
  const inFuncimgSrc = `<img src=${imgSrc} alt="${name}"/>`;
  div.className = "wareCard";
  div.innerHTML = inFuncimgSrc + inFuncName + inFuncabaut + inFuncPrice;
  document.body.append(div);
}

addWare(wareName, wareShortAbaut, warePrice, wareImgSrc, discount);
addWare(wareName2, wareShortAbaut2, warePrice2, wareImgSrc2, discount2);
