const isContainsBraces = (str: string) => {
  return str.includes("{") || str.includes("}");
};

export const isValidBracketString = (str: string) => {
  str = str.replace("{}", "");
  let str2 = str;
  const reg = /\{([^}]+)\}/g;

  // For string not contains any braces
  if (!isContainsBraces(str)) return true;

  // Match with regex for extract {string}
  let matchesData = str.match(reg);

  if (matchesData && matchesData.length) {
    let isValid = true;
    matchesData.forEach((x) => {
      str2 = str2.replace(x, "");
      x = x.replace("{", "").replace("}", "");

      // Check after extract  contains any braces or not
      if (isContainsBraces(x)) {
        isValid = false;
        return;
      }
    });

    if (!isValid) return false;

    if (isContainsBraces(str2)) return false;
  } else {
    if (isContainsBraces(str)) return false;
  }

  return true;
};
