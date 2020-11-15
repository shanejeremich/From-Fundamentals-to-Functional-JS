const increment = n => n + 1;
const square = n => n * n;
const doMathSoIDontHaveTo = (n, func) => func(n);

console.log(doMathSoIDontHaveTo(5, square));
console.log(doMathSoIDontHaveTo(4, increment));
