//? immediately invoked function expression (IIFE)
//*syntax
// (
//   function(){
//     some code
//   }
// )
//* IIFE called
// ();

//*examples

//IIFE without parameter
(function () {
  console.log("Hello World");
})();

//IIFE with parameter
(function (name) {
  console.log("Hello " + name);
})("Aakash");


//?modules are wrapped as IIFE when exported and parameters are added by node during export.
//* Module is wrapped like this
// (function (exports, require, module, __filename, __dirname) {
//   console.log("Hello World");
// })();
