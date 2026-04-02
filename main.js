/**
 * The main application function that converts a number from the decimal numeral system to the binary numeral system.
 * It validates the supported input and output systems and returns the converted value as a string.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  if (inputNumberSystem !== 10 || outputNumberSystem !== 2) {
    throw new Error("Only conversion from decimal to binary is supported.");
  }

  let input = Number.parseInt(inputNumber, 10);

  if (input < 0) {
    throw new Error("Input number must be non-negative.");
  }

  if (input === 0) {
    return "0";
  }

  let output = "";

  while (input > 0) {
    let remaider = input % 2;
    output = remaider + output;
    input = Math.floor(input / 2);
  }

  return output;
}

/**
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
  return [10];
}

/**
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
  return [2];
}
