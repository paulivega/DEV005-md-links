const { mdLinks } = require('./index.js');
// argumento de mdLinks
const userPath = process.argv[2];
const option = process.argv[3];

// Para consumir la función md link, primero ejecutar y pasar el argumento.
mdLinks(userPath)
//luego van las acciones del then y el catch
.then((result) => {
  console.log('saliendo por el then', result);
})
.catch((error) => {
  console.log('saliendo por el catch:', error);
  process.exit()
});
