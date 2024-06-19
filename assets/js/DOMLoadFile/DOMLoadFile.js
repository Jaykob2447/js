/*
1) Зробити запит даних до одного із серверів (одного з API) на вибір, використовуючи fetch()
2) Відобразити дані на сторінці за допомогою DOM
3) * Прикрасити стилями за потребою

Варіанти серверів (API):

- Випадкове зображення собаки https://dog.ceo/api/breeds/image/random
Наприклад, при натисканні на кнопку або саме зображення змінювати зображення на нове рандомне.
*/

const linkToDog = "https://dog.ceo/api/breeds/image/random";
const reservImgDog =
  "https://macreports.com/wp-content/uploads/2020/06/cannot-load-photo.png";

function addLoadNewDog() {
  fetch(linkToDog)
    .then((response) => response.json())
    .then((data) => dogImage(data))
    .catch((err) => {
      console.log("err", err);
      dogImage(reservImgDog);
    });

  function dogImage(dogLink) {
    const { message } = dogLink;
    divDog.innerHTML = `<img src=${message} alt="some dog" style="width:600px; height:500px; object-fit: contain;">`;
  }
}
const btnCrengeDogEl = document.querySelector("#createDog");
const divDog = document.querySelector(".dog");

btnCrengeDogEl.addEventListener("click", addLoadNewDog);

// v0
// fetch(linkToDog)
//   .then((response) => response.json())
//   .then((data) => dogImage(data))
//   .catch((err) => console.log(`link to api bads(${err})`));

// const divDog = document.querySelector(".dog");

// btnCrengeDogEl.addEventListener("click", dogImage);

// function dogImage(data) {
//   const { message } = data;
//   divDog.innerHTML = `
//         <img src=${message} alt="some dog">
//         `;
// }
