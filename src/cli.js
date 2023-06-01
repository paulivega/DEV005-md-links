#!/usr/bin/env node
const { mdLinks } = require('./index.js');
const  process  = require('process');
const {stats} = require('./stats.js');
const { colors } = require('colors')
// argumento de mdLinks
const userPath = process.argv[2];
//const UserOptions = process.argv[3];
const options = process.argv;
let optionsObj = {
  validate: false,
  stats: false,
};
// const [,,, opt1, opt2] = process.argv;
// stats es verdader
if (options.includes('--validate') && (!options.includes('--stats'))) {
  optionsObj.validate = true;
}
else if (!options.includes('--validate') && (options.includes('--stats'))) {
  optionsObj.stats = true;
}// solo validate verdadero
else if (options.includes('--validate') && (options.includes('--stats'))) {
  optionsObj.validate = true;
  optionsObj.stats = true;
  // validate falso
} else {
  optionsObj.validate = false;
  optionsObj.stats = false;
}
mdLinks(userPath, optionsObj)
  .then((res) => {
    if(optionsObj.stats === true){

      const allStats = stats(res);
      console.log('');
      console.log(`Total: ${allStats.Total} Uniques: ${allStats.Uniques} ${allStats.Broken ? `Broken: ${allStats.Broken}`.red  : ''} `.green);
    }else if (optionsObj.validate && !optionsObj.stats){
      //console.log(res)
      res.forEach((element) => {
        console.log('');
        console.log(`URL: ${element.href}`.green);
        console.log(`Text: ${element.text}`.blue);
        console.log(`Path: ${element.file}`.magenta);
        console.log(`Status: ${element.status}`.cyan);
        console.log(`Status Text: ${element.ok}`.yellow);
        console.log('');
      })
    }else {
      res.forEach((element) => {
        console.log('');
        console.log(`URL: ${element.href}`.green);
        console.log(`Text: ${element.text}`.blue);
        console.log(`Path: ${element.file}`.magenta);
        console.log('');

      })
    }
  })
  .catch((error) => {
    console.log(`${error}`);
    process.exit(1)
  })


//stats con validate
// retorna ({total, broken y unique})
// solo stats

// retorna ({total, uniques})




  