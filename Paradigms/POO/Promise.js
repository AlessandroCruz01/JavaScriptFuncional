const fs = require("fs");

class ReadFile {
  pathRout;
  constructor(pathRout) {
    this.pathRout = pathRout;
  }

  readFileAndWrite() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.pathRout, {}, (err, data) => {
        if (data) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  }
}

const pathRote = "./Files/data.txt";
const read = new ReadFile(pathRote);
read.readFileAndWrite().then((data) => console.log(data.toString()));
