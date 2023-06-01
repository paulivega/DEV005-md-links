//1.- importar la función
const { linkStatus } = require('../src/linkStatus.js');
//2.-  importar dependencias
const axios = require('axios')
// 3.- mockear dependecias
const testObject = 
  {
    href: 'https://www.google.com/intl/es-419/gmail/about/',
    text: 'gmail',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md'
  };
  const testResolve = {
    href: 'https://www.google.com/intl/es-419/gmail/about/',
    text: 'gmail',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md',
    status: 200,
    ok: 'OK'
  }
  const testReject = {
    href: 'https://www.google.com/intl/es-419/gmail/about/',
    text: 'gmail',
    file: '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md',
    status: 404,
    ok: 'Not Found'
  }
jest.mock('axios', () => {
  return {
    get: jest.fn()
  }
});
// 4.- describe
describe('linkStatus', () => {
  it('Is a function', () => {
    expect(typeof linkStatus).toBe('function');
  });
  it('Calls axios and return an object with status and ok', () => {
    //paso la dependecia con el valor esperado
    axios.get.mockReturnValue(Promise.resolve({status:200, ok:'OK'}));
    // ejecuto la función
    linkStatus(testObject).then(testResolve)
    //llamar a axios
    expect(axios.get).toHaveBeenCalled();
    //expect(linkStatus(testObject)).toEqual(testResolve)
  
  });
  it('should return a error case and object with properties of status.error and error message', ()=> {
    axios.get.mockReturnValue(Promise.reject({
      response: {
        status: 404,
        ok: 'Not Found'
      }
    }));
    linkStatus(testObject).catch(testReject)
  });
  
});