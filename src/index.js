// importar las funciones
const { getAbsolutePath } = require('./road.js');

//obtener el argumento entregado por el usuario
const userPath = process.argv[2];
//const userValidate = process.argv[3];

const absolutePath = getAbsolutePath(userPath);
/*
const mdLinks = () => {
  return new Promise((resolve, reject) => {
    if(pathElements.isAbsolutePath(userPath)){
      
      //devolver el userPath ingresado
      resolve(userPath)
    }else{
      //pasar la relativa a absouluta
      reject('ohoh')
    }
  });
};*/

// crear objeto options:
// const options = new Object();
// options.validate = false;
// options.stats = false;



