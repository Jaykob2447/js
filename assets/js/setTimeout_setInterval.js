/*
1. Напишіть функцію printNumbers(from, to, interval), яка послідовно виводить у консоль
 цілі числа, починаючи з from і закінчуючи to, з інтервалом між виведенням сусідніх чисел у interval мс.
Реалізуйте перший або обидва варіанти рішення:
- Використовуючи setInterval.
- *Використовуючи рекурсивний setTimeout (https://uk.javascript.info/settimeout-setinterval).

2. *Виводити посилання через певний час після завантаження сторінки. Поки посилання
 не відображається, на його місці виводити зворотній відлік "Зачекайте хвилин:секунд".
*/

function printNumbers(from, to, interval) {
  if (to > from) {
    console.log((from += interval));
    setTimeout(printNumbers, 2000, from, to, interval);
  } else {
    clearInterval(timeout);
  }
}

const timeout = setTimeout(printNumbers, 2000, 5, 10, 1);

let fromInterval = 5;
function printNumbers(from, to, interval) {
  if (to > fromInterval) {
    fromInterval += interval;
    console.log(fromInterval);
  } else {
    clearInterval(interval);
  }
}

const interval = setInterval(printNumbers, 2000, fromInterval, 10, 1);

console.log(22);
const divEl = document.createElement("div");
divEl.style = "width:150px; height:75px; border:solid 1px black; margin:30px;";
divEl.textContent = "Зачекайте хвилин:секунд";

const bodyEl = document.querySelector("body");

bodyEl.append(divEl);

function delay(divEl) {
  divEl.textContent = "Ви зачекали хвилин:секунд";
}

setTimeout(delay, 10000, divEl);
