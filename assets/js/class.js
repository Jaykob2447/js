/* 
1. Реалізувати клас Post (наприклад, описує пост в соц. мережі).

Властивості:
id, 
назва, 
автор, 
текст, 
дата додавання, 
кількість вподобайок,
*зображення,
*список хештегів, 
можна використати додаткові властивості за бажанням.
Методи:
змінити текст поста на інший.
збільшити кількість вподобайок на 1 / зменшити кількість вподобайок на 1.
render для отримання розмітки для посту (*в методі деструктуризувати інформацію з this).
*сеттер з валідацією для кількості вподобайок та відповідний ґеттер. *Для перевірки,
 чи належить кількість вподобайок певному діапазону, можна використати клас нижче.
*додавання хештеґу. Хештеґів у поста може бути максимум 6. Можливі значення обмежені
 певним переліком (наприклад, ['web', 'javascript', 'fullstack', 'education', тощо]). 
*Різні хештеги підсвічувати різним кольором. Як варіант, для доступу до кольору хештегу зручно використовувати конструкцію 
const TAG_COLORS = {
    web: 'green',
    javascript: 'yellow',
    ...
}
Перелік хештеґів та кольорів для них обрати на ваш розсуд.
Створити екземпляр класу, перевірити роботу методів.

*Створити масив постів (достатньо 2-3), тобто елементами масиву будуть екземпляри класу. Відрендерити ці пости (перебравши масив).


2. *Реалізувати клас RangeValidator.
Клас призначений для валідації потрапляння числового значення в діапазон
 (тобто якщо діапазон {from: 0, to: Infinity}, то невід'ємні числа потрапляють в діапазон, а від'ємні - ні). 

Границі діапазону є властивостями:
■ from (типу number);
■ to (типу number);
(from <= to)

Реалізувати getter'и та setter'и для обох властивостей.

*Реалізувати getter range, який повертатиме масив із двома числами діапазону
 (тобто ґеттер повертає не властивість, а масив із двома елементами, які є властивостями)

Реалізувати метод isValid, який прийматиме число і перевірятиме, чи входить число у вказаний діапазон (повертає boolean).

Приклади роботи:

// Конструктор (+сеттери)
const range1 = new RangeValidator(1, 5.5) // Відпрацьовує
const range1 = new RangeValidator(10, 5.5) // ПОМИЛКА! (оскільки має бути from <= to)

// Робота сетерів
range1.from = 5; // Відпрацьовує
range1.from = 200; // ПОМИЛКА! (оскільки не має бути більше заданого вище в конструкторі to: 5.5)

range1.to = 80; // Відпрацьовує
range1.to = -55; // ПОМИЛКА! (оскільки не має бути менше заданого вище from

// Робота гетерів
console.log(range1.from) // => 5
console.log(range1.to) // => 80

// Робота геттера range
console.log(range1.range) // => [5, 80]

// Робота validate
console.log(range1.isValid(10)) // => true (оскільки належить діапазону [5, 80])
console.log(range1.isValid(100)) // => false (оскільки не належить діапазону [5, 80])
*/

// 1
/*
Властивості:
id, 
назва, 
автор, 
текст, 
дата додавання, 
кількість вподобайок,
*зображення,
*список хештегів,
*/
"use strict";
class Post {
  constructor(id, title, autor, text, addDate, likes, img, heshtegList) {
    (this._id = id),
      (this._title = title),
      (this._autor = autor),
      (this.text = text),
      (this._addDate = addDate),
      (this._likes = likes),
      (this._img = img),
      (this._heshtegList = heshtegList);
  }
  set text(val) {
    this._text = val;
  }
  set changeLikes(val) {
    this._likes += val ? 1 : -1;
  }
  render() {
    document.write(`
          <article>
          <img src=${this._img} alt=${this._title}>
          <h2>${this._title}</h2>
          <p>${this._text}</p>
          <p>date: ${this._addDate}</p>
          <p>likes: ${this._likes}<p>
          <span>${this._heshtegList.join(" ")}</span>
          </article>
          `);
  }
  //   render() {
  //     document.write(`
  //         <article>
  //         <img src=${_img} alt=${_title}>
  //         <h2>${_title}</h2>
  //         <p>${_text}</p>
  //         <p>date: ${_addDate}</p>
  //         <p>likes: ${_likes}<p>
  //         <span>${_heshtegList.join(" ")}</span>
  //         </article>
  //         `);
  //   }
}

const heshList = ["#da", "#dadaja", "#vottakvot", "#meme"];
let posts = [];
for (let i = 1; i < 4; i++) {
  posts.push(
    new Post(
      i,
      "tit",
      "auto",
      "text",
      "08.09.2001",
      90 + i,
      "img.jpg",
      heshList
    )
  );
}
posts.forEach((el) => el.render());
// const post1 = new Post(
//   1,
//   "tit",
//   "auto",
//   "text",
//   "08.09.2001",
//   90,
//   "img.jpg",
//   heshList
// );

// 2

class RangeValidator {
  constructor(from, to) {
    (this.from = from), (this.to = to);
  }

  set from(val) {
    if (typeof val !== "number") {
      throw new TypeError(`значення ${val} не є числом`);
    }
    if (Number.MAX_SAFE_INTEGER < val || Number.MIN_SAFE_INTEGER > val) {
      throw new RangeError(
        `число ${val} не є MIN_SAFE_INTEGER або MAX_SAFE_INTEGER`
      );
    }
    if (val > this._to) {
      throw new RangeError(`число ${val} не є менше чим ${this._to}`);
    }

    this._from = val;
  }
  set to(val) {
    if (typeof val !== "number") {
      throw new TypeError(`значення ${val} не є числом`);
    }
    if (Number.MAX_SAFE_INTEGER < val || Number.MIN_SAFE_INTEGER > val) {
      throw new RangeError(
        `число ${val} не є MIN_SAFE_INTEGER або MAX_SAFE_INTEGER`
      );
    }
    if (val < this._from) {
      throw new RangeError(`число ${val} не є більшим чим ${this._from}`);
    }
    this._to = val;
  }
  isValid(count) {
    return count >= this._from && count <= this._to;
  }
  range() {
    return [this._from, this._to];
  }
}

try {
  const range1 = new RangeValidator(-5, 10);
  console.log(range1.isValid(5));
  console.log(range1.range());
  console.log(range1);
} catch (err) {
  console.log(err);
}
const list = [...heshList];
