import { isValidBracketString } from "./GenericUtils";

describe("Checking entered string is valid curly brackets or not", () => {
  test("Pass parameter as '{}' should be TRUE", () => {
    const result = isValidBracketString("{}");

    // Test passed when its true
    expect(result).toBeTruthy();
  });
  test("Pass parameter as '}{' should be FALSE", () => {
    const result = isValidBracketString("}{");

    // Test passed when its false
    expect(result).toBeFalsy();
  });
  test("Pass parameter as '{{}' should be FALSE", () => {
    const result = isValidBracketString("{{}");

    // Test passed when its false
    expect(result).toBeFalsy();
  });
  test('Pass parameter as "" should be FALSE', () => {
    const result = isValidBracketString('""');

    // Test passed when its true
    expect(result).toBeTruthy();
  });
  test("Pass parameter as '{abc...xyz}' should be TRUE", () => {
    const result = isValidBracketString("{abc...xyz}");

    // Test passed when its true
    expect(result).toBeTruthy();
  });
  test("Pass parameter as '{Hello} {Abc} Good morning.' should be TRUE", () => {
    const result = isValidBracketString("{Hello} {Abc} Good morning.");

    // Test passed when its true
    expect(result).toBeTruthy();
  });
  test("Pass parameter as '{Hello} how are you {{John}?' should be TRUE", () => {
    const result = isValidBracketString("{Hello} how are you {{John}?");

    // Test passed when its false
    expect(result).toBeFalsy();
  });
  test("Pass parameter as 'Hello John?' should be TRUE", () => {
    const result = isValidBracketString("Hello John");

    // Test passed when its true
    expect(result).toBeTruthy();
  });
});
