// 1.- importo la función a testear
const { getAbsolutePath } = require('../src/route.js');
// 2.- importar dependencias de esa función
const pathModules = require('path');
const fsModules = require('fs');
// 2.1- declarar constantes (opcional)
const userPath = '/Users/pauli/laboratoria/DEV005-md-links/src/files/first.md';
const userRelativePath = 'DEV005-md-links/src/files/first.md';
// 3.- mockear dependencias del sujeto de pruebas, is absolute y resolve son métodos de path
jest.mock('path', () => {
  return {
    isAbsolute: jest.fn(),
    resolve: jest.fn(),
  };
});
jest.mock('fs', () => {
  return {
    existsSync: jest.fn(),
  };
});
// 4.- describe
describe('Verify if the Path is absolute', () => {
  it('Is a function', () => {
    // 5.4.- validas correcto comportamiento de la función(expect)
    expect(typeof getAbsolutePath).toBe('function');
  });
  it('userPath do not exist', () => {
    // validar que getAbsolutePath retorne false
    fsModules.existsSync.mockReturnValue(false);
    getAbsolutePath(userPath);
    expect(fsModules.existsSync).toHaveBeenCalled();
  });
  it('userPath is absolute return userPath', () => {
    // 5.2.- definir comportamiento de mocks de este 'it' (mock.mockReturnValue)
    // cuando llamo a pathModules.isAbsolute(any), retorna true
    // fsModules.existsSync.mockReturnValue(true);
    fsModules.existsSync.mockReturnValue(true);
    pathModules.isAbsolute.mockReturnValue(true);
    // 5.3.- llamar a la función
    getAbsolutePath(userPath);
    // 5.4.- validas correcto comportamiento de la función (expect)
    expect(pathModules.isAbsolute).toHaveBeenCalled();
    expect(getAbsolutePath(userPath)).toEqual(userPath);
  });
  it('userPath is not absolute, has to call resolve', () => {
    pathModules.isAbsolute.mockReturnValue(false);
    getAbsolutePath(userRelativePath);
    expect(pathModules.resolve).toHaveBeenCalled();
  });
});