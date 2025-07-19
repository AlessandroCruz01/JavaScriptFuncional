const fs = require("fs").promises;
const path = require("path");
const dirPath = path.resolve(__dirname, "..", "Files", "legendas");

async function readDirectory(dirPath) {
  try {
    const files = await fs.readdir(dirPath, { withFileTypes: true });
    return files;
  } catch (error) {
    console.log(error);
  }
}

readDirectory(dirPath)
  .then((data) => {
    return data.filter((file) => file.name.endsWith(".srt"));
  })
  .then((filterData) => {
    return filterData.map((data) => data.path + "\\" + data.name);
  })
  .then((paths) => {
    return Promise.all(
      paths.map((filePath) => {
        return fs.readFile(filePath);
      })
    );
  })
  .then((listPhrases) => {
    return Promise.all(
      listPhrases.map(
        (content) =>
          content
            .toString()
            .replace('"', "")
            .match(/\b[a-zA-Z]+(?:['’][a-zA-Z]+)?\b/g) || []
      )
    );
  })
  .then((listWords) => {
    const wordCount = {};

    listWords.flat().forEach((word) => {
      const lowerWord = word.toLowerCase();

      wordCount[lowerWord] = (wordCount[lowerWord] || 0) + 1;
    });

    const sortedWordCount = Object.fromEntries(
      Object.entries(wordCount).sort((a, b) => b[1] - a[1])
    );

    // Se quiser salvar o JSON em arquivo:
    return fs.writeFile(
      path.resolve(__dirname, "wordCount.json"),
      JSON.stringify(sortedWordCount, null, 2)
    );
  })
  .catch((error) => console.error(error));
