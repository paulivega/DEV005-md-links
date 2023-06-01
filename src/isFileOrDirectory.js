const pathModules = require('path');
const fsModules = require('fs');
//construir función recursiva
const isFileOrDirectory = (absolutePath) => {
  let arrayFilesMd = [];
  if (fsModules.lstatSync(absolutePath).isFile() && pathModules.extname(absolutePath) === '.md') {
    arrayFilesMd.push(absolutePath);
  } else if (fsModules.lstatSync(absolutePath).isDirectory()) {
    let contentArray = fsModules.readdirSync(absolutePath);
    contentArray.forEach((item) => {
      const newRoute = pathModules.join(absolutePath, item);
      arrayFilesMd = arrayFilesMd.concat(isFileOrDirectory(newRoute));
    });
  }
  return arrayFilesMd;
};
module.exports = { isFileOrDirectory, };
