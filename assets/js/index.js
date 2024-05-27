/*
1. Створити об'єкт customer, що містить такі властивості:
ім'я, 
прізвище, 
електронна адреса, 
password,
номер телефона,
адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира) ; 
методи: 
виведення адреси, 
зміна номера телефону (метод повинен приймати як параметр рядок з новим номером телефону).
Додати об'єкту властивість isMale (для позначення статі, true - male, false - female).
Видалити у об'єкта властивість адреса.

Зробити копії об'єкту customer двома різними способами.

* Реалізувати картку з відомостями про customer, 

2. Перебрати і вивести властивості об'єкту cat
{   
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,

}
циклом for..in.

3. Створити функцію-конструктор для створення об'єктів книг з властивостями:
автор, 
назва, 
рік видання, 
видавництво (рядок або *об'єкт з властивостями місто, назва), 
ціна.
   Передбачити методи: (* в прототип)
для обчислення віку книги (у роках),
для зміни ціни книги.

*/
const customer = {
  name: "mikhael",
  surName: "no",
  email: "no_mikhael_no@nonreplay.dot",
  password: "*********",
  phoneNum: "+380 8 800 555 3 5 3 5",
  adress: { city: "Misto", street: "Vulucha", house: "0" },
  getAdress() {
    console.log(this.adress);
  },
  changePhoneNum(newNum = prompt("Введіть новий номер")) {
    this.phoneNum = newNum;
  },
  addIsMale(getIsMale = true) {
    this["isMale"] = getIsMale; //не будемо питати у користувача варіантів
  },
  deleteAdress() {
    delete this.adress;
  },
};

const customer2 = customer; // зробили копію посилання на обьект
const customer3 = Object.create(customer); // створили пустий обьект прототипом якого є "customer"
const customer4 = Object.assign({}, customer); // копіюемо усі властивості обьекта customer та присвоюємо до customer4

// 2.

const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};

for (let key in cat) {
  console.log(key, cat[key]);
}

// 3.
/*
автор, 
назва, 
рік видання, 
видавництво (рядок або *об'єкт з властивостями місто, назва), 
ціна.
   Передбачити методи: (* в прототип)
для обчислення віку книги (у роках),
для зміни ціни книги.
*/
const date = new Date();
const dateYear = date.getFullYear();
const publishing = { city: "Big city", name: "Big publish" };
function addBoock(autor, name, year, price, publishing) {
  (this.autor = autor),
    (this.name = name),
    (this.year = year),
    (this.price = price),
    (this.publishing = publishing);
}

addBoock.prototype.howOld = function () {
  console.log("Скільки років книжці", dateYear - this.year);
};

addBoock.prototype.editPrice = function (
  newPrice = prompt("Введіть нову ціну")
) {
  this.price = newPrice;
};

const boock = new addBoock(
  "J. Rowling",
  "Harry Potter and philosoph stone",
  2001,
  4500,
  publishing
);
