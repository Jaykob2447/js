/*
1. Для рекурсивної функції піднесення числа до степеня pow(base, exponent) реалізувати валідацію значень, що передаються,
 і генерацію помилок відповідних типів.
Виклик функції вкласти в блок try з відловом виняткових ситуацій (помилок) різних типів з оповіщенням користувача про тип помилки.

Для спрощення замість рекурсивного алгоритму можна реалізувати повернення значення base**exponent, основу base вважайте
 цілим числом, показник exponent -- додатнім, реалізувати тільки те, що стосується роботи з помилками.

2. *Реалізувати функцію для валідації імейлу. Імейл має бути рядком і містити символ "@", цей символ не має бути першим або останнім.
*/

function pow(base, exponent) {
  if (typeof base !== "number") {
    throw new TypeError("базове число не є числом");
  }
  if (!Number.isInteger(base)) {
    throw new TypeError("база не є цілим числом");
  }
  if (
    base < 0 ||
    base <= Number.MIN_SAFE_INTEGER ||
    base >= Number.MAX_SAFE_INTEGER
  ) {
    throw new RangeError("база за межами допустимих чисел");
  }
  if (typeof exponent !== "number") {
    throw new TypeError("exponent не є числом");
  }
  if (!Number.isInteger(exponent)) {
    throw new TypeError("exponent не є цілим числом");
  }
  if (
    exponent < 0 ||
    exponent >= Number.MAX_SAFE_INTEGER ||
    exponent <= Number.MIN_SAFE_INTEGER
  ) {
    throw new RangeError(
      "exponent за межами допустимих значень або не є додатнім числом"
    );
  }
  // за для корректності помилки перевіряю кожну змінну, якщо би їх було більше або безліч то спростив обьеднаши перевірку або виніс у іншу функцію

  // return base**exponent
  if (base == 1 || base == 0) return base;
  if (exponent > 1) return base * pow(base, --exponent);
  if (exponent < 1) return (1 / base) * pow(base, ++exponent);

  return base;
}

try {
  console.log(pow(2, 2));
} catch (err) {
  console.log("err", err);
}

const someMail = "  someMail@somegmail.com  ";

function validMail(mail) {
  if (typeof mail != "string") {
    throw new TypeError("Ел. адресса не є строкою");
  }
  const mailTrim = mail.trim();
  if (mailTrim[0] === "@" || mailTrim[mailTrim.length - 1] === "@") {
    throw new SyntaxError("не коретне введення пошти");
  }
  return mailTrim;
}

try {
  validMail(someMail);
} catch (err) {
  console.log("err", err);
}
