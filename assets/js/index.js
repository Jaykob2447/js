/*
Кожне завдання вирішити циклами while, do..while, for.

1. Вивести числа від 25 до 0 (порядок зменшення).

2. Вивести числа від 10 до 50, які кратні 5.

3. *Знайти суму чисел в межах від 1 до 100.
*/
for (let i = 25; i !== -1; i--) {
  console.log(i);
}

for (let i = 10; i <= 51; i++) {
  if (Number.isInteger(i / 5)) {
    console.log(i, " є кратним 5");
  }
}

let sum = 0;
let sistSum = [];
for (let i = 1; i <= 100; i++) {
  sistSum.push((sum += i));
}
console.log(sistSum);
// зробив трішки зручніше для перегляду
