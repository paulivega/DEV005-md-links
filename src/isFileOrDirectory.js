const pathModules = require('path');
const fsModules = require('fs');

//construir función recursiva
const isFileOrDirectory = (absolutePath) => {
  let arrayFilesMd = [];
  if (fsModules.lstatSync(absolutePath).isFile() && pathModules.extname(absolutePath) === '.md') {
    arrayFilesMd.push(absolutePath);
    //console.log('es file.md');
    //console.log(arrayFilesMd);
  } else if (fsModules.lstatSync(absolutePath).isDirectory()) {
    //console.log('es directorio');
    let contentArray = fsModules.readdirSync(absolutePath);
    //console.log(contentArray);
    contentArray.forEach((item) => {
      const newRoute = pathModules.join(absolutePath, item);
      arrayFilesMd = arrayFilesMd.concat(isFileOrDirectory(newRoute));
    });
  } else {
  }
  return arrayFilesMd;
};
module.exports = { isFileOrDirectory, };