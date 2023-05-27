const axios = require('axios');

const prueba = [
  {
    href: 'https://www.google.com/intl/es-419/gmail/about/',
    text: 'gmail',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md'
}
,
  {
    href: 'https://www.google.com/intl/es-419/gmail/about/',
    text: 'otrogmail',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md'
 }
 ,
 {
  href: 'https://v8.dev/sdfskdjfs%C3%B1ldfjslkdfj',
  text: 'no funciona de mdlinks',
  file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/moreFiles/third.md'}
]


const linkStatus = (object) => {
  return axios.get(object.href)
  
  .then((result) => {
    // console.log(result.status)
  return { href: object.href , text: object.text, file: object.file, status: result.status, ok: result.statusText}
  })
  .catch((error) => {
    // console.log('BANDERA')
  return { href: object.href , text: object.text, file: object.file, status: error.response.status, ok: error.response.statusText }
  })
};

  const allLinkStatus = (arrayLinks) => {
    const arrayAllLinks = arrayLinks.map(link => {
      return linkStatus(link)
    })
    return Promise.all(arrayAllLinks);
  };
  // linkStatus('https://v8.dev/sdfskdjfs%C3%B1ldfjslkdfj')
  // .then((res) => {
  //   console.log(res)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })
  //console.log(linkStatus('https://v8.dev/sdfskdjfs%C3%B1ldfjslkdfj'))
  // allLinkStatus(prueba)
  // .then((res) => {
  //   console.log(res)
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })

module.exports = {allLinkStatus};
