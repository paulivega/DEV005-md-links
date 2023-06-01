// importar las funciones
const { getAbsolutePath } = require('./route.js');
const {isFileOrDirectory } = require('./isFileOrDirectory.js');
const {getAllLinks} = require('./extractLinks.js');
const {allLinkStatus} = require('./linkStatus.js');
// construir la función md links.
const mdLinks = (userPath, options) => {
  return new Promise((resolve, reject) => {
      // constante que ejecuta la función que valida la ruta
      //const absolutePath = getAbsolutePath(userPath);
      const path = getAbsolutePath(userPath);
      if (path === 'false') {
          reject('Error, la ruta no existe.');
      }
      const mdFiles = isFileOrDirectory(path);
      if (options.validate === true) {
        getAllLinks(mdFiles)
            .then((result) => {
                const finalArray = [].concat(...result);
                allLinkStatus(finalArray)
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            })
            .catch((err) => {
                reject(err);
            });
    }else{
        //retorna array con href, file y path
        getAllLinks(mdFiles)
            .then((result) => {
                const finalArray = [].concat(...result);
                resolve(finalArray); 
            })
            .catch((err) => {
                reject(err);
            });
    };
  });
};
module.exports = {
  mdLinks,
};