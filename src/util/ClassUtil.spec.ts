import { ClassUtil } from './ClassUtil';

describe('ClassUtil', () => {
  describe('makeCUIClass', () => {
    const cases = [
      ['my-class', 'cui-my-class'],
      ['', ''],
      ['my-class my-class2', 'cui-my-class cui-my-class2'],
    ];

    test.each(cases)('given a class name of %p, returns %p', (firstArg, expectedResult) => {
      const className = ClassUtil.makeCUIClass(firstArg);
      expect(className).toEqual(expectedResult);
    });
  });
});
