export class GenericUtils {
  private static isContainsBraces = ({ input }: { input: string }): boolean => {
    return input.includes("{") || input.includes("}");
  };

  public static isValidBracketString = ({
    input,
  }: {
    input: string;
  }): boolean => {
    let text = input;

    input = input.replace("{}", "");
    const reg = /\{([^}]+)\}/g;

    if (!this.isContainsBraces({ input })) return true;

    const matchesData = input.match(reg);

    if (matchesData && matchesData.length) {
      let isValid = true;
      matchesData.forEach((x) => {
        text = text.replace(x, "");
        x = x.replace("{", "").replace("}", "");

        if (this.isContainsBraces({ input: x })) {
          isValid = false;
          return;
        }
      });

      if (!isValid) return false;
    } else {
      if (this.isContainsBraces({ input })) return false;
    }

    return true;
  };
}
