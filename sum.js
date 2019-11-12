const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let upperBound;
let lowerBound;

do {
  lowerBound = readlineSync.question("Lower bound: ");
  upperBound = readlineSync.question("Upper bound: ");
} while (lowerBound >= upperbound || lowerBound < MIN || upperBound < MIN || lowerBound > MAX)
