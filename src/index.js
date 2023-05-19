// importar las funciones
const { getAbsolutePath } = require('./route.js');
const {isFileOrDirectory } = require('./isFileOrDirectory.js')
const {getAllLinks} = require('./extractLinks.js')
// construir la función md links.

const mdLinks = (userPath) => {
  return new Promise((resolve, reject) => {
    // constante que ejecuta la función que valida la ruta
    //const absolutePath = getAbsolutePath(userPath);
    const mdFiles = isFileOrDirectory(getAbsolutePath(userPath));
    const links = getAllLinks(mdFiles)
    if(userPath === false){
      reject(err);
    }
    if(links){
      // si es true resuelvo mostrando la ruta en consola
      //console.log(userPath);
      resolve(links);
      
    }else{
      //si es false, salgo del programa
      reject()
    }
  });
};
module.exports = {
  mdLinks,
};

