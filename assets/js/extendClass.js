/*
Реалізувати ієрархію класів:
ПасажирськийТранспорт (PassengerTransport) =>ТранспортнийЗасіб (Vehicle)
(За бажанням:) Вантажний Транспорт (FreightTransport) => ТранспортнийЗасіб (Vehicle).


Для базового класу Vehicle реалізувати:

- властивості:
--- dimensions - габарити (об'єкт із довжиною, шириною, висотою),
--- brand - марка,
--- model - модель,
--- manufactureDate - дата виробництва (використовувати вбудований об'єкт Date).

- методи:
--- getFullInfo() - повертає рядок з інформацією про транспортний засіб: бренд, модель, вік;
--- getAge() - повертає кількість років із дня виробництва (буде плюсом реалізувати геттером).


Дочірній клас PassengerTransport розширюється:

- властивостями:
--- passengerLimit - максимальна кількість пасажирських місць,
--- passengerCount - кількість зайнятих пасажирських місць,

- методом addPassenger() - додає ще одного пасажира, якщо ще є вільні місця; повертає true (якщо пасажир доданий) або false (якщо не доданий, тобто вже не було вільних місць).

Перевизначити метод getFullInfo: повертає рядок з інформацією про транспортний засіб: 
бренд, 
модель, 
вік, 
максимальна кількість пасажирських місць.

(За бажанням:) 
Дочірній клас FreightTransport розширюється:

- властивістю:
--- capacity - вантажопідйомність,

- методом checkLoadingPossibility(weight) - перевіряє, чи можна завантажити масу weight. Повертає boolean.

Перевизначити метод getFullInfo:
бренд, 
модель, 
вік,
вантажопідйомність.


Створити об'єкти всіх класів ієрархії, протестувати роботу методів.
*/

class Vehicle {
  constructor(dimensions, brand, model, manufactureDate) {
    this.dimensions = dimensions;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = new Date(manufactureDate);
  }
  getFullInfo() {
    return [this.brand, this.model, this.age].join(", ");
  }

  get age() {
    let countYaer =
      new Date().getFullYear() - this.manufactureDate.getFullYear();
    if (!(new Date().getMonth() - this.manufactureDate.getMonth() >= 0)) {
      countYaer--;
    } else {
      if (new Date().getMonth() === this.manufactureDate.getMonth()) {
        if (new Date().getDate() < this.manufactureDate.getDate()) {
          countYaer--;
        }
      }
    }
    return countYaer;
  }
}

const car1 = new Vehicle("gabarit", "brand(no bmw)", "miata", "2001-05-05");

class PassengerTransport extends Vehicle {
  constructor(
    dimensions,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(dimensions, brand, model, manufactureDate);
    this.passengerLimit = Number(passengerLimit);
    this.passengerCount = Number(passengerCount);
  }
  addPassenger() {
    if (this.passengerLimit >= this.passengerCount + 1) {
      this.passengerCount++;
      return true;
    }
    return false;
  }
  getFullInfo() {
    return `${this.brand}, ${this.model}, ${this.age}, ${this.passengerLimit}`;
  }
}
const car2 = new PassengerTransport(
  "gabarit",
  "brand(no bmw)",
  "miata",
  "2001-05-05",
  50,
  40
);

class FreightTransport extends Vehicle {
  constructor(dimensions, brand, model, manufactureDate, capacity) {
    super(dimensions, brand, model, manufactureDate);
    this.capacity = capacity;
  }
  getFullInfo() {
    return `${this.brand}, ${this.model}, ${this.age}, ${this.capacity}`;
  }
  checkLoadingPossibility(weight) {
    return weight <= this.capacity;
  }
}
const car3 = new FreightTransport(
  "gabarit",
  "brand(no bmw)",
  "miata",
  "2001-05-05",
  505
);
