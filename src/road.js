//importar modulo path
const pathModules = require('path');

//validar si es absoluto o pasar a absoluto
const getAbsolutePath = (userPath) => {
  if (pathModules.isAbsolute(userPath)) {
    return userPath
  } else {
    return pathModules.resolve(userPath);
  }
};

//exportar las funciones
module.exports = {
  getAbsolutePath,
};