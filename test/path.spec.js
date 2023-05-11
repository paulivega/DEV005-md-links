// 1.- importo la función a testear
const { getAbsolutePath } = require('../src/road.js');
// 2.- importar dependencias de esa función
const pathModules = require('path');
// 2.1- declarar constantes (opcional)
const userPath = '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md';
// 3.- mockear dependencias del sujeto de pruebas, is absolute y resolve son métodos de path
jest.mock('path', () => {
  return {
    isAbsolute: jest.fn(),
    resolve: jest.fn(),
  }
});

// 4.- describe
describe('Verify if the Path is absolute', () => {
  it('Is a function', () => {
    // 5.4.- validas correcto comportamiento del sujeto (expect)
    expect(typeof getAbsolutePath).toBe('function');
  });
  it('userPath is absolute return userPath', () => {
    // 5.2.- definir comportamiento de mocks de este 'it' (mock.mockReturnValue)
    // cuando llamo a pathModules.isAbsolute(any), retorna true
    pathModules.isAbsolute.mockReturnValue(true);
    // 5.3.- llamar a la función
    getAbsolutePath(userPath);
    // 5.4.- validas correcto comportamiento de la función (expect)
    expect(pathModules.isAbsolute).toHaveBeenCalled();
    expect(isAbsolutePath(userPath)).toEqual(userPath)
  });
  it('userPath is not absolute, has to call resolve', () => {
    pathModules.isAbsolute.mockReturnValue(false);
    isAbsolutePath(userPath);
  
    expect(pathModules.resolve).toHaveBeenCalled();
  });
});