const fs = require("fs");

module.exports = function (source) {
  fs.appendFileSync("view-source-loader.txt", source);
  return source;
};
