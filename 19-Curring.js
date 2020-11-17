import _ from "lodash";

const abc = (a, b, c) => [a, b, c];

const curried = _.curry(abc);

console.log("First", curried(1)(2)(3));
console.log("Second", curried(1, 2)(3));
