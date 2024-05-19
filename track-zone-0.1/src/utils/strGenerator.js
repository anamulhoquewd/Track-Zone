/**
 * uniqe string generator
 * @param {number} stringLength
 * @returns {string}
 */

function strGenerator(strLength) {
  const length =
    typeof strLength === "number" && strLength > 0 ? strLength : false;

  if (length) {
    const possibleCarecters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const possibleCarectersLength = possibleCarecters.length;

    let output = "";
    for (let i = 0; i < length; i++) {
      const generateToken = possibleCarecters.charAt(
        Math.floor(Math.random() * possibleCarectersLength)
      );
      output += generateToken;
    }
    return output;
  } else {
    return false;
  }
}

export default strGenerator;
