//*module cashing
//modules are cashed when the are require() in the file.
//so export class instead of a instance.

//*car.js code
// class Car {
//   #carName;
//   #modelYear;
//   constructor() {
//     (this.#carName = "maruti"), (this.#modelYear = "2017");
//   }
//   getCarName() {
//     return this.#carName;
//   }
//   setCarName(name) {
//     this.#carName = name;
//   }
//   getModelYear() {
//     return this.#modelYear;
//   }
//   setModelYear(year) {
//     this.#modelYear = year;
//   }
// }
//*exported as an object
// module.exports = new Car;

//*exported as class
// module.exports = Car;


//*index.js code for exported as object
// // when object is exported from ./cars.
//   const objectRequired = require("./car.js");

//   console.log(objectRequired.getCarName());
//   objectRequired.setCarName("honda");
//   console.log(objectRequired.getCarName());

// // when class is exported from ./cars.
//   const objectRequiredAgain = require("./car.js");
//   console.log(objectRequiredAgain.getCarName());


//*index.js code for exported as class
// // when class is exported from ./cars.
// const classRequired = require("./car.js");

// // first object
// const firstObject = new classRequired();

// console.log(firstObject.getCarName());
// firstObject.setCarName("honda");
// console.log(firstObject.getCarName());

// // when class is exported ./cars.
// const classRequiredAgain = require("./car.js");
// // second object
// const secondObject =  new classRequiredAgain;
// console.log(secondObject.getCarName());
