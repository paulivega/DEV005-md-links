// // 1.- importar la función a testear
const { convertMdtoHtml } = require('../src/extractLinks');
const { getAllLinks } = require('../src/extractLinks')
const { getLinksFromHtml } = require('../src/extractLinks');
const { readMdFile } = require('../src/extractLinks');
// 2.- importar dependencias de la fn
const { marked } = require('marked');
const { JSDOM } = require('jsdom');
//3.- mockear dependencias de la función
jest.mock('marked', () => {
  return {
    marked: jest.fn()
  };
});
jest.mock('jsdom', () => {
  return {
    JSDOM: jest.fn()
  };
});
const testPath = '/Users/pauli/laboratoria/DEV005-md-links/src/files'
const testMdText = 'El segundo link, es la página de [laboratoria](https://www.laboratoria.la/)lugar al que nunca más entré desde que abrí mi cuenta para postular.';
const testHtml = '<p>El segundo link, es la página de <a href="https://www.laboratoria.la/">laboratoria</a>lugar al que nunca más entré desde que abrí mi cuenta para postular.</p>'
// 4.- describe
describe('convertMdtoHtml', () => {
  it('Is a function', () => {
    expect(typeof convertMdtoHtml).toBe('function');
  });
  //a. llamar a marked
  it('should call marked', () => {
    //file es la lectura del md, por lo tanto es un string.
    marked.mockReturnValue(testHtml);
    JSDOM.mockImplementation(() => {
      return {
        window: {
          document: {
            getElementsByTagName: jest.fn()
          }
        }
      };
    })
    convertMdtoHtml(testMdText);
    expect(marked).toHaveBeenCalled();
  });
  // b. llame a new JSDOM
  it('should call JSDOM', ()=> {
    expect(JSDOM).toHaveBeenCalled();
  });
  it('should invoke getElementsByTagName and return it ', ()=> {
    const mockGetElementsByTagName = jest.fn()
    JSDOM.mockImplementation(() => {
      return {
        window: {
          document: {
            getElementsByTagName: mockGetElementsByTagName
          }
        }
      };
    })
    const mockReturnConvertMdtoHtml = 'This is an HTML Collection'; 
    mockGetElementsByTagName.mockReturnValue(mockReturnConvertMdtoHtml);

    const mockConvertMdtoHtml = convertMdtoHtml(testMdText)
    
    expect(mockConvertMdtoHtml).toEqual(mockReturnConvertMdtoHtml)
  });
});
describe('getLinksFromHtml', ()=> {
  it('Is a function', () => {
    expect(typeof getLinksFromHtml).toBe('function');
  });
  it('Return and object array',()=>{
    const htmlColectionTest = [{href:'testhref', textContent : 'testTextContent'}];
    const testResultingArray = [
      {
        href: 'testhref',
        text: 'testTextContent',
        file: testPath
      }
    ]
    expect(getLinksFromHtml(htmlColectionTest,testPath)).toEqual(testResultingArray)
  });
});
describe('getAllLinks', () => {
    it('Is a function', () => {
      expect(typeof getAllLinks).toBe('function');
    });
  });
  describe('readMdFile', ()=> {
    it('should be a function', ()=>{
      expect(typeof readMdFile).toBe('function')

    });
  });