const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

let lowerBound = Number(readlineSync.question("\nLower bound: "));
let upperBound = Number(readlineSync.question("\nUpper bound: "));

const range = (lowerBound, upperBound, rangeLength = upperBound - lowerBound) =>
  Array.from({ rangeLength }, (_, i) => lowerBound + i)

const sumRange = 0;

while (upperBound <= lowerBound || lowerBound < MIN || upperBound > MAX || Number.isNan(lowerBound) || Number.isNaN(upperBound) ) {
  lowerBound = console.log("Lower bound: ");
  upperBound = console.log("Upper bound: ");
} for (i % 2 == 0) {
  i+= i;
  sumRange = i;
}

console.log(sumRange);
