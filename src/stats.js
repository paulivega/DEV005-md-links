
const prueba = [
  {
    href: 'https://www.google.com/intl/es-419/gmail/about/',
    text: 'gmail',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md',
    status: 200,
    ok: 'OK'
  },
  {
    href: 'https://www.google.com/intl/es-419/gmail/about/',
    text: 'otrogmail',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md',
    status: 200,
    ok: 'OK'
  },
  {
    href: 'https://github.com/Laboratoria/DEV005-md-links',
    text: 'https://github.com/Laboratoria/DEV005-md-links',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/moreFiles/third.md',
    status: 200,
    ok: 'OK'
  },
  {
    href: 'https://www.laboratoria.la/',
    text: 'laboratoria',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/moreFiles/third.md',
    status: 200,
    ok: 'OK'
  },
  {
    href: 'https://v8.dev/sdfskdjfs%C3%B1ldfjslkdfj',
    text: 'no funciona de mdlinks',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/moreFiles/third.md',
    status: 404,
    ok: 'Not Found'
  },
  {
    href: 'https://es-la.facebook.com/',
    text: 'facebook',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/second.md',
    status: 200,
    ok: 'OK'
  },
  {
    href: 'https://social-network-8a6da.web.app/',
    text: 'playverse',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/second.md',
    status: 200,
    ok: 'OK'
  }
]


const stats = (arrayObjects, hasStatus) => {
  return new Promise((resolve, reject) => {
    const result = {
      Total: arrayObjects.length,
      uniques: new Set(arrayObjects.map((link) => link.href)).size,
    };
    if (hasStatus) {
      result.broken = (arrayObjects.filter(element => element.ok === 'Not Found')).length;
    }
    resolve(result);
  });
};
//console.log(stats(prueba))
module.exports = {
  stats,
};
