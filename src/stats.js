const { colors } = require('colors')

const stats = (arrayObjects) => {
    return {
      Total: arrayObjects.length,
      Uniques: new Set(arrayObjects.map((link) => link.href)).size,
      Broken:(arrayObjects.filter(element => element.ok === 'Not Found')).length,
    };
      }
module.exports = {
  stats,
};
