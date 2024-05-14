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

//4 isLogin

function myFunc() {
  const isLogin = true;
  const buttonRegLog = document.getElementById("buttonRegLog");
  const avatarIcon = document.getElementById("avatarIcon");
  const isMale = true;
  if (isLogin) {
    buttonRegLog.setAttribute("style", "display: none;");
    if (isMale) {
      avatarIcon.setAttribute("style", "border-color: blue;");
    } else if (isMale === undefined) {
      avatarIcon.setAttribute("style", "border-color: grey;");
    } else if (!isMale) {
      avatarIcon.setAttribute("style", "border-color: red;");
    }
  } else {
    avatarIcon.setAttribute("style", "display: none;");
  }
}
// у разі якщо потрібно буде

/*
📋 Завдання на switch..case

1. Запитати у користувача номер дня тижня та вивести відповідну повну рядкову назву 
(наприклад, якщо користувач вводить 7 – виводиться повідомлення "неділя"). Передбачити обробку 
помилкового введення номера дня тижня (в гілка default, з повідомленням "дня з таким номером не існує").

2. (за бажанням) У змінній day лежить якесь число з інтервалу від 1 до 31. Визначте, до 
якої декади місяця потрапляє це число (до першої, другої чи третьої). Наприклад, число 1 - це перша декада, 20 - друга, 25 - третя.

*/
// 1
do {
  switch (
    (currentNumber = Number(
      prompt("Введіть номер дня тижня для того щоб дізнатися день тижня")
    ))
  ) {
    case 1:
      console.log("1 день понеділок");
      break;
    case 2:
      console.log("2 день вівторок");
      break;
    case 3:
      console.log("3 день середа");
      break;
    case 4:
      console.log("4 день четверг");
      break;
    case 5:
      console.log("5 день пьятниця");
      break;
    case 6:
      console.log("6 день суббота");
      break;
    case 7:
      console.log("7 день неділя");
      break;
    default:
      console.log("дня з таким номером не існує");
  }
} while (isNaN(currentNumber) || currentNumber >= 8 || currentNumber <= 0);

// 2
do {
  switch (
    (currentDay = Number(
      prompt("Введіть номер дня місяця для того щоб дізнатися декаду")
    ))
  ) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      console.log("Перша декада");
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      console.log("Друга декада");
      break;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
      console.log("Третя декада");
      break;
    default:
      console.log("дня з таким номером у місяці не існує");
  }

  /*       
 // Трішки коротший варіант 
  currentDay = Number(
    prompt("Введіть номер дня місяця для того щоб дізнатися декаду")
  );
  if (currentDay >= 1 && currentDay <= 10) {
    console.log("Перша декада");
  } else if (currentDay >= 11 && currentDay <= 20) {
    console.log("Друга декада");
  } else if (currentDay >= 21 && currentDay <= 31) {
    console.log("Третя декада");
  } else {
    console.log("дня з таким номером у місяці не існує");
  }
 */
} while (isNaN(currentDay) || currentDay >= 31 || currentDay <= 0);
