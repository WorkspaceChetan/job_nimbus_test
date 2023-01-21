import { GenericUtils } from "./GenericUtils";

describe("Checking entered string is valid curly brackets or not", () => {
  test("Pass parameter as '{}' should be TRUE", () => {
    const result = GenericUtils.isValidBracketString({ input: "{}" });

    expect(result).toBeTruthy();
  });
  test("Pass parameter as '}{' should be FALSE", () => {
    const result = GenericUtils.isValidBracketString({ input: "}{" });

    expect(result).toBeFalsy();
  });
  test("Pass parameter as '{{}' should be FALSE", () => {
    const result = GenericUtils.isValidBracketString({ input: "{{}" });

    expect(result).toBeFalsy();
  });
  test('Pass parameter as "" should be FALSE', () => {
    const result = GenericUtils.isValidBracketString({ input: '""' });

    expect(result).toBeTruthy();
  });
  test("Pass parameter as '{abc...xyz}' should be TRUE", () => {
    const result = GenericUtils.isValidBracketString({ input: "{abc...xyz}" });

    expect(result).toBeTruthy();
  });
  test("Pass parameter as '{Hello} {Abc} Good morning.' should be TRUE", () => {
    const result = GenericUtils.isValidBracketString({
      input: "{Hello} {Abc} Good morning.",
    });

    expect(result).toBeTruthy();
  });
  test("Pass parameter as '{Hello} how are you {{John}?' should be TRUE", () => {
    const result = GenericUtils.isValidBracketString({
      input: "{Hello} how are you {{John}?",
    });

    expect(result).toBeFalsy();
  });
  test("Pass parameter as 'Hello John?' should be TRUE", () => {
    const result = GenericUtils.isValidBracketString({ input: "Hello John" });

    expect(result).toBeTruthy();
  });
});
