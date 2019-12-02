import { findAndReplace } from './findAndReplace';

describe('Given: find http, replace to https, text http://www.onet.pl', () => {
  it('should return URL with https', () => {
    const result = findAndReplace('http:', 'https:', 'http://www.onet.pl');
    expect(result).toBe('https://www.onet.pl');
  });
});

describe('Given: find http, replace to https, text https://www.onet.pl', () => {
  it('should not change URL', () => {
    const result = findAndReplace('http:', 'https:', 'https://www.onet.pl');
    expect(result).toBe('https://www.onet.pl');
  });
});
