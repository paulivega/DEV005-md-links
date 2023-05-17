//importar modulo path
const pathModules = require('path');
const fsModules = require('fs');
const userPath = process.argv[2];
//validar si es absoluto o pasar a absoluto
const getAbsolutePath = (userPath) => {
  if (!fsModules.existsSync(userPath)){
    return false
  }
  if (pathModules.isAbsolute(userPath)) {
    return userPath
  } else {
    return pathModules.resolve(userPath);
  }
};
console.log (getAbsolutePath(userPath));
//exportar las funciones
module.exports = {getAbsolutePath,};
