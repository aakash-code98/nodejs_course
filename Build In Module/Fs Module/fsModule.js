const fs = require("node:fs");

//* read file synchronously
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

//* read file asynchronously
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

//* write file synchronously
fs.writeFileSync("./greet.txt", "Hello World!");

//* write file asynchronously
fs.writeFile("./greet.txt", " Hello World!", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File Written.");
  }
});

// //?fs promises
// const fs = require("node:fs/promises");

// //*using then and catch
// fs.readFile("file.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// //*using try catch
// async function readFile() {
//   try {
//     const data = await fs.readFile("file.txt", "utf-8");
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// readFile();
