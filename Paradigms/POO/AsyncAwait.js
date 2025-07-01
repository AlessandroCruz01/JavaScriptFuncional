const fs = require("fs");
class OOAsync {
  pathRout;
  constructor(pathUrl) {
    this.pathRout = pathUrl;
  }

  async readFile() {
    await fs.readFile(this.pathRout, {}, (err, data) => {
      console.log(data.toString());
    });
  }
}

const pathRote = "./Files/data.txt";
const readFile = new OOAsync(pathRote);
readFile.readFile();
