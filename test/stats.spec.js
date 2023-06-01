// 1.- importar la función a testear
const { stats } = require('../src/stats.js');
// 2.- importar dependencias
// 3.- mockear dependencias
const testObjects = [
  {
    href: 'https://www.google.com/intl/es-419/gmail/about/',
    text: 'gmail',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md'
  },
  {
    href: 'https://www.google.com/intl/es-419/gmail/about/',
    text: 'otrogmail',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md'
  },
  {
    href: 'https://v8.dev/sdfskdjfs%C3%B1ldfjslkdfj',
    text: 'no funciona de mdlinks',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/moreFiles/third.md'
  },
 
]
// 4.- describe
describe('stats', () => {
  // que sea una función
  it('Is a function', () => {
    expect(typeof stats).toBe('function');
  });
  it('Has to return an Object with Total, Uniques and Broken links', () => {
    const arrayObjects = testObjects
    expect(stats(arrayObjects)).toEqual({ Total: 3, Uniques: 2, Broken: 0 })
  });
});