// importar las funciones
const { getAbsolutePath } = require('./road.js');
const {isFileOrDirectory } = require('./isFileOrDirectory.js')
// construir la función md links.

const mdLinks = (userPath) => {
  return new Promise((resolve, reject) => {
    // constante que ejecuta la función que valida la ruta
    //const absolutePath = getAbsolutePath(userPath);
    const mdFiles = isFileOrDirectory(getAbsolutePath(userPath));
    if(mdFiles){
      // si es true resuelvo mostrando la ruta en consola
      //console.log(userPath);
      resolve(console.log(mdFiles));
      
    }else{
      //si es false, salgo del programa
      reject()
    }
  });
};
module.exports = {
  mdLinks,
};

