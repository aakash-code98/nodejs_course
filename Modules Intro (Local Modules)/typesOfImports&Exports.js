//?Types of import and export

//*1st
// //add.js code
// const add = (a, b) => {
//   return a + b;
// }
// module.exports = add;
// //index.js code
// const add = require("./add.js");
// console.log(add(2, 5));

//*2nd
// //add.js code
// module.exports = (a, b) => {
//   return a + b;
// }
// module.exports = add;
// //index.js code
// const add = require("./add.js");
// console.log(add(2, 5));

//*3rd
// //add.js code
// const add = (a, b) => {
//   return a + b;
// }
// const subtract = (a, b) => {
//   return a - b;
// }
// module.exports = {
//   add,
//   subtract,
// };
// //index.js code
// const math = require("./add.js");
// console.log(math.add(2, 5))
// console.log(math.subtract(6, 5))

//*4th
// //add.js code
// const add = (a, b) => {
//   return a + b;
// }
// const subtract = (a, b) => {
//   return a - b;
// }
// module.exports = {
//   add,
//   subtract,
// };
// //index.js code
// const math = require("./add.js");
// const { add, subtract} = math;
// console.log(add(2, 5))
// console.log(subtract(6, 5))

//*5th
// //add.js code
// const module.exports.add = (a, b) => {
//   return a + b;
// }
// const module.exports.subtract = (a, b) => {
//   return a - b;
// }
// //index.js code
// const math = require("./add.js");
// const { add, subtract} = math;
// console.log(add(2, 5))
// console.log(subtract(6, 5))

//*6th
// //add.js code
// const exports.add = (a, b) => {
//   return a + b;
// }
// const exports.subtract = (a, b) => {
//   return a - b;
// }
// //index.js code
// const math = require("./add.js");
// const { add, subtract} = math;
// console.log(add(2, 5))
// console.log(subtract(6, 5))