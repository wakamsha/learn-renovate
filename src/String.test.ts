import { isValidEmail } from "./String";

describe('String.ts', () => {
  describe(isValidEmail.name, () => {
    test(`${isValidEmail.name}('john.lennon@example.com') is valid`, () => {
      expect(isValidEmail('john.lennon@example.com')).toBeTruthy();
    });

    test(`${isValidEmail.name}('john_lennon@example.com') is valid`, () => {
      expect(isValidEmail('john_lennon@example.com')).toBeTruthy();
    });

    test(`${isValidEmail.name}('john-lennon@example.com') is valid`, () => {
      expect(isValidEmail('john-lennon@example.com')).toBeTruthy();
    });

    // cSpell:disable
    test(`${isValidEmail.name}('Ｊｏｈｎ．ｌｅｎｎｏｎ＠ｅｘａｍｐｌｅ．ｃｏ．ｊｐ') is invalid`, () => {
      expect(isValidEmail('Ｊｏｈｎ．ｌｅｎｎｏｎ＠ｅｘａｍｐｌｅ．ｃｏ．ｊｐ')).toBeFalsy();
    });
    // cSpell:enable

    test(`${isValidEmail.name}('john.example.com') is invalid`, () => {
      expect(isValidEmail('john.example.com')).toBeFalsy();
    });

    test(`${isValidEmail.name}('john@example.') is invalid`, () => {
      expect(isValidEmail('john@example.')).toBeFalsy();
    });

    test(`${isValidEmail.name}('') is invalid`, () => {
      expect(isValidEmail('')).toBeFalsy();
    });
  });
})
