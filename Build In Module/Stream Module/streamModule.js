//? 4 types of streams
//* 1 READABLESTREAM
//* 2 WRITEABLESTREAM
//* 3 DUPLEX STREAM
//* 4 TRANSFORM STREAM

// const fs = require("node:fs");

// const readableStream = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// });

// const writeableStream = fs.createWriteStream("./file2.txt");

// //* connecting readableStream and writeableStream manually
// // readableStream.on("data", (chunk) => {
// //   console.log(chunk);
// //   writeableStream.write(chunk);
// // });

// //? Pipe
// //* reduces the work for connecting readableStream and writeableStream
// readableStream.pipe(writeableStream);

//? using zlib for making transformed stream (zip file)

const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip();

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

//* pipe(gzip) gives transformed file
readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
