//1. importar funciones
const {isFileOrDirectory} = require ('../src/isFileOrDirectory.js')
//2. importar dependencias
const pathModules = require('path');
const fsModules = require('fs');
// 3. mockear dependencias
jest.mock('path', () => {
  return{
    extname: jest.fn()
  }
});
// definiendo que una dependencia se transforme en una fn jest
jest.mock('fs', () => {
  return{
      lstatSync: jest.fn()
  }
});

describe('isFileOrDirectory', () => {
  it('Is a function', () => {
    expect(typeof isFileOrDirectory).toBe('function');
  });
  it('should push absolute path if it is an mdfile', () => {
    const isFileMock = jest.fn()
    //definiendo lo que hace la fn jest (mock)
    fsModules.lstatSync.mockReturnValue({isFile: isFileMock });
    isFileMock.mockReturnValue(true);
    // definir comportamiento path
    pathModules.extname.mockReturnValue('.md')
    const path = '/some/path';
    //ejecuto la función
    expect(isFileOrDirectory(path)[0]).toEqual(path);
  });
});

