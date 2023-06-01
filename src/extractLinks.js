const { JSDOM } = require('jsdom');
const fsModules = require('fs');
const { marked } = require('marked');
// fn convierte contenido .md a html y extraer los elementos anchor 
const text = 'El segundo link, es la página de [laboratoria](https://www.laboratoria.la/)lugar al que nunca más entré desde que abrí mi cuenta para postular.';

const convertMdtoHtml = (file) => {
  // pasar .md a html usando la librería markedn retorna un htmlColecction
  const htmlText = marked(file,
    {
      headerIds: false,
      mangle: false
    },);
  // extraer los anchors usando JSDOM
  const dom = new JSDOM(htmlText);
  const elementsAnchor = dom.window.document.getElementsByTagName('a');
  return elementsAnchor;
};
// fn obtiene los links desde HTMLCollection
  const getLinksFromHtml = (elementsAnchor, fileRoute) => {
  // element Anchor(HTMLCollection) se transforma array
  const arrayAnchor = Array.from(elementsAnchor);
  //recorrer el arreglo y me entrega el :href y .text de cada anchor
  const anchor = arrayAnchor.map((anchor) => ({
    href: anchor.href,
    text: anchor.textContent.substring(0,50),
    file: fileRoute,
  }));
  return anchor;
};
//Declaración de la promesa que leer archivo.md
const readMdFile = (fileRoute) => {
  return new Promise((resolve, reject) => {
    fsModules.readFile(fileRoute, 'utf-8', (err, file) => {
      if (err) {
        reject(err);
      } else {
        const convertToHtml = convertMdtoHtml(file);
        const getLinks = getLinksFromHtml(convertToHtml, fileRoute);
        resolve(getLinks);
      }
    });
  });
};
// recorrer arreglo ArrayFilesMD y ejecutar readMdFile a cada archivo usando .map
const getAllLinks = (arrayFilesMd) => {
  const arrayLinks = arrayFilesMd.map(file => {
    return readMdFile(file);
  });
  return Promise.all(arrayLinks);
};
module.exports = { getAllLinks, convertMdtoHtml, getLinksFromHtml, readMdFile };
const testPath = '/Users/pauli/laboratoria/DEV005-md-links/src/files'

//console.log(getLinksFromHtml(convertMdtoHtml(text), testPath) )
//node src/extractLinks.js
