const fs = require("fs");
const path = require("path");

const pathRote = path.join("./Files/data.txt");

const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. API endpoints quantum flux retry logic compile, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut algo rhythmus ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in error stack trace qui officia deserunt mollit anim id est laborum.";

fs.writeFileSync(pathRote, loremIpsum, {}); // Create File

fs.readFile(pathRote, {}, (err, data) => {
  if (data) {
    console.log(data.toString());
  }
});
