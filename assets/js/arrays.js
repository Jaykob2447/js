/*
Для
function User(id, name, surname, age, isMale, email, isSubscribed) {
  this.id = id;
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
    i + 1,
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() < 0.5,
    `useremail${i}@gmail.com`,
    Math.random() < 0.5
  );
  users.push(user);
}

* прописати метод getFullName() (повертає рядок з повним ім'ям) для користувача. Загальну логіку (тобто зазначений метод) винести в прототип.

Реалізувати мінімум 4 завдання:
Отримати масив користувачів, які не підписані (not subscribed).
Вивести список повних імен користувачів.
Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
Видалити з масиву користувача з email  useremail5@gmail.com.
Змінити email користувачу з id 2 (можна спробувати використати find).
*Визначити, який відсоток користувачів підписані (subscribed).
*Знайти середній вік користувачів (спробувати використати reduce).
*Визначити, який відсоток користувачів підписані (subscribed).
*Впорядкувати користувачів за віком (sort).
*Перевірити, чи є серед користувачів користувач з email`ом useremail7@gmail.com.
*Перевірити, чи всі користувачі підписані (subscribed).
*/

function User(id, name, surname, age, isMale, email, isSubscribed) {
  this.id = id;
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 10; i++) {
  const user = new User(
    i + 1,
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() < 0.5,
    `useremail${i}@gmail.com`,
    Math.random() < 0.5
  );
  users.push(user);
}
console.log(users);
///
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

function getFullName(array, id = undefined) {
  const newArr = [];
  for (const el in array) {
    if (array[el].id === id) {
      return `${array[el].firstName} ${array[el].lastName}`;
    }
    newArr.push(`${array[el].firstName} ${array[el].lastName}`);
  }
  return newArr;
}
///

// Отримати масив користувачів, які не підписані (not subscribed).

const unSabUsers = [];
users.forEach((el) => {
  if (!el.isSubscribed) {
    return unSabUsers.push(el);
  }
});
console.log(unSabUsers);

// Вивести список повних імен користувачів.
getFullName(users);
// Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).

// users.push({
//   id: 8,
//   firstName: "Username7",
//   lastName: "Usersurname7",
//   age: 17,
//   isMale: false,
//   email: "useremail7@gmail.com",
//   isSubscribed: true,
// });

function getTeenFemale(arr) {
  const newArr = [];
  for (const el of arr) {
    if (!el.isMale) {
      if (el.age >= 6 && el.age <= 18) {
        newArr.push(`${el.firstName} ${el.lastName}`);
      }
    }
  }
  return newArr;
}
console.log(getTeenFemale(users));

// Видалити з масиву користувача з email  useremail5@gmail.com.

function deleteFromEmail(arr, email) {
  let index = undefined;
  for (const i in arr) {
    if (arr[i].email === email) {
      index = i;
    }
  }
  return arr;
}

// for (const i in users) {
//   if (users[i].email === "useremail5@gmail.com") {
//     users.splice(i, 1);
//   }
// }
// console.log(users);

console.log(deleteFromEmail(users, "useremail5@gmail.com"));

// Змінити email користувачу з id 2 (можна спробувати використати find).

users.find((el) => {
  if (el.id === 2) {
    el.email = "useremailTwo@gmail.com";
    return true;
  }
  return false;
});

// *Визначити, який відсоток користувачів підписані (subscribed).
function subscribProcent(arr) {
  let count = 0;
  for (const el of arr) {
    if (el.isSubscribed) {
      count++;
    }
  }
  console.log(arr.length, count);
  return `${(count / arr.length) * 100}% subs`;
}
console.log(subscribProcent(users));
// *Знайти середній вік користувачів (спробувати використати reduce).

// let sumAge = 0;
// for (const el of users) {
//   sumAge += el.age;
// }
// console.log(sumAge / users.length);

const avrAge = users.map((el) => el.age);
console.log(avrAge.reduce((sum, count) => sum + count) / users.length);

// *Визначити, який відсоток користувачів підписані (subscribed). (завдання дублюються)

// *Впорядкувати користувачів за віком (sort).

users.sort((a, b) => {
  if (a.age > b.age) return 1;
  if (a.age === b.age) return 0;
  if (a.age < b.age) return -1;
});
// *Перевірити, чи є серед користувачів користувач з email`ом useremail7@gmail.com.
console.log(users.find((el) => el.email === "useremail7@gmail.com"));
// *Перевірити, чи всі користувачі підписані (subscribed).

console.log(users.every((el) => el.isSubscribed));
