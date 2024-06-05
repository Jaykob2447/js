/*
Змініть приклад із заняття по замиканню (counter) так, щоб при кожному виклику значення лічильника змінювалося не на 1,
 а на передане користувачем число (передати його при виклику зовнішньої функції customCounter).

Приклад використання:
const myCounter = customCounter1(5);
const result1 = myCounter(); // => 5
const result2 = myCounter(); // => 10
const result3 = myCounter(); // => 15

Або:

* Змініть приклад із заняття по замиканню (counter) так, щоб користувач задавав початкове значення лічильника
 (у прикладі із заняття це 0) і крок зміни лічильника (у прикладі із заняття це 1).

Приклад використання:
const myCounter = customCounter2 (1, 5);
const result1 = myCounter(); // => 6
const result2 = myCounter(); // => 11
const result3 = myCounter(); // => 16

У ДЕБАГЕРІ відстежити змінні, які перебувають у Замиканні (Closure).
*/
function customCounter(n) {
  return +prompt("на скільки збільшити число?", n);
}

function counter() {
  let count = 0;
  function counterIn() {
    count += customCounter(5);
    return count;
  }
  return counterIn;
}

// //or
// function counter(count, n) {
//   function counterIn() {
//     return (count += n);
//   }
//   return counterIn;
// }

const myCounter = counter();
const result1 = myCounter(); // => 5
const result2 = myCounter(); // => 10
const result3 = myCounter(); // => 15
console.log(result1, result2, result3);
