const axios = require('axios');
/*const prueba = [
  {
    href: 'https://www.google.com/intl/es-419/gmail/about/',
    text: 'gmail',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md'
}
];*/
//fn que recibe un  1 objeto con las características .href, .text, .file
const linkStatus = (object) => {
  return axios.get(object.href)
    .then((result) => {
      // console.log(result.status)
      return { href: object.href, text: object.text, file: object.file, status: result.status, ok: result.statusText };
    })
    .catch((error) => {
      // console.log('BANDERA')
      return { href: object.href, text: object.text, file: object.file, status: error.response.status, ok: error.response.statusText };
    });
};
//fn que recibe un array con varios objetos con .href, .text y .file
const allLinkStatus = (arrayLinks) => {
  const arrayAllLinks = arrayLinks.map(link => {
    return linkStatus(link);
  });
  return Promise.all(arrayAllLinks);
};
module.exports = { allLinkStatus,linkStatus };
