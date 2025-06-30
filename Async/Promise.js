const fs = require("fs");
const path = require("path");

const pathRote = path.join("./Files/data.txt");
const pathRotePromise = path.join("./Files/dataPromise.txt");

let a = 1;
console.log(a);

let p = new Promise((resolve) => {
  resolve(3);
});

console.log(p);
console.log(typeof p);

p.then((value) => {
  console.log(value);
});

const getCep = new Promise((resolve, reject) => {
  // Operação assíncrona
});

// Desafio - Ler o documento usando o readFile
function readFileAndWrite(pathFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathRote, {}, (err, data) => {
      resolve(data);
    });
  });
}

readFileAndWrite(pathRote).then((data) => {
  fs.writeFileSync(pathRotePromise, data, {});
});
