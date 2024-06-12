/*
Розширена версія. Дана інформація про користувача в об'єкті:
const user = {
    firstName: 'Test',
    lastName: 'Testovych',
    profilePhoto: 'https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg&#39;,
    birthday: new Date('2000-05-16'),
    nickname: 'super dev',
    likesCount: 10,
}

Реалізувати обробку наступних подій:
- при натисканні на кнопку "Завантажити" додати інфо про користувача в <article></article>
- при натисканні на сердечко перефарбувати його в червоний колір.
- при наведенні на дату народження показувати кількість повних років.

* стилізувати картку
*/
"use strict";
const user = {
  firstName: "Test",
  lastName: "Testovych",
  profilePhoto: `https://images.pexels.com/photos/4902634/pexels-photo-4902634.jpeg`,
  birthday: new Date("2000-05-16"),
  nickname: "super dev",
  likesCount: 10,
};

const createUser = document.querySelector(".user");
const button = document.querySelector("#createUser");

/**
 * @param user - obj user
 * @param createUser - html tag to add user marcup
 * @returns create marcup in 2th param
 */
function appCardUser(
  { firstName, lastName, profilePhoto, birthday, nickname, likesCount },
  tag
) {
  tag.innerHTML = `<img src=${profilePhoto} >
  <div><p>${firstName} ${lastName}</p> <p>${nickname}</p></div>
  <p title="Full age: ${getFullAge(birthday)}">${birthday.getFullYear()}.${
    birthday.getMonth() + 1
  }.${birthday.getDate()}</p>
<div> <i class="fa-regular fa-heart" id="heartLikes"></i> <p>${likesCount}</p></div>
  `;
  const heart = document.querySelector("#heartLikes");
  heart.onclick = (e) =>
    heart.setAttribute("class", "fa-solid fa-heart colorRed");
}

button.onclick = (e) => appCardUser(user, createUser);

function getFullAge(birthday) {
  let countYaer = new Date().getFullYear() - birthday.getFullYear();
  if (!(new Date().getMonth() - birthday.getMonth() >= 0)) {
    countYaer--;
  } else {
    if (new Date().getMonth() === birthday.getMonth()) {
      if (new Date().getDate() < birthday.getDate()) {
        countYaer--;
      }
    }
  }
  return countYaer;
}
