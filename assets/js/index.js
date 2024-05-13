/*
1. Задане значення isDay (true - зараз день, false - зараз ніч).
Вивести напис
"Світла тема", якщо зараз день,
"Темна тема", якщо зараз ніч.
*Стилізувати фразу:
темний текст на світлому тлі, якщо зараз день,
світлий текст на темному тлі, якщо зараз ніч.
2. Відомо, чи користувач онлайн (isOnline).
Якщо користувач НЕ онлайн, то вивести попередження "Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет"

3. Користувач вводить суму покупки.
Обчислити та вивести остаточну суму покупки з урахуванням знижки.
Знижка 3% надається, якщо сума покупки більша за 500 грн., а знижка 5% - якщо сума покупки більша за 800 грн.

4. *(за бажанням) Задане значення змінної isLogin (залогінився користувач чи ні).
Сформувати header наступним чином:
зліва - логотип (зображення на ваш смак). Класично лого є посиланням на головну сторінку.
справа - або кнопки Login та Register (якщо користувач не залогінився) або фото і ім'я користувача (якщо користувач залогінився)
*додатково застилізувати фото користувача: за значанням isMale для чоловіка зробити синю рамку,
 для жінки червону, при незаданому значенні isMale - сіру.
Примітки:
змінні, які не мають змінюватися впродовж роботи скрипта, оголошувати як const.
де доречно, використовувати тернарний оператор, шаблонний літерал.
при рогзалуженнях тестувати коректність роботи кожної гілки (+ граничні значення, якщо вони є).
замість порівняння isSomething === false прописувати !isSomething.
📋 Завдання на switch..case

Познайомитись з оператором множинного вибору
switch..case
-- альтернативою для
if (умова1)
    інструкція1
else if (умова2)
    інструкція2
else if (умова3)
    інструкція3
...
else
    інструкція

1. Запитати у користувача номер дня тижня та вивести відповідну повну рядкову назву 
(наприклад, якщо користувач вводить 7 – виводиться повідомлення "неділя"). Передбачити обробку 
помилкового введення номера дня тижня (в гілка default, з повідомленням "дня з таким номером не існує").

2. (за бажанням) У змінній day лежить якесь число з інтервалу від 1 до 31. Визначте, до 
якої декади місяця потрапляє це число (до першої, другої чи третьої). Наприклад, число 1 - це перша декада, 20 - друга, 25 - третя.
*/

// 1,2 завдання на колір теми, перевірку умови бул.
// значення(запитувати у користувача не буду, щоб не навантажувати купою запитань при старті і в умові немає),
// також чи онлайн, для читабильності додам дві змінні

let mainTheme = true;
let isOnlain = true;

const themeStyle = mainTheme
  ? '<p style="color:black; background-color:white; padding:0.5rem;">"Світла тема"'
  : '<p style="color:white; background-color:black;padding:0.5rem;">"Темна тема"';

if (!isOnlain) {
  document.write(
    `${themeStyle} "Ваше повідомлення буде відправлено при підє'днанні до мережі Інтернет"</p>`
  );
} else {
  document.write(`${themeStyle} </p>`);
}

// 3

const currentSum = Number(prompt("Ввудіть суму покупки", 1000));

if (currentSum >= 500 && currentSum <= 799) {
  const sum = currentSum - currentSum * 0.03;
  console.log("Сума зі знижкою(3%)", sum);
} else if (currentSum >= 800) {
  const sum = currentSum - currentSum * 0.05;
  console.log("Сума зі знижкою(5%)", sum);
} else {
  console.log("Сума не достатня для знижки(або не коректно задане значення)");
}

// оскільки результат який ми повернули за умовою ми ніде не використовуємо розрахунок виконуємо
// в середені умови, навіть мінімальна валідация використана
