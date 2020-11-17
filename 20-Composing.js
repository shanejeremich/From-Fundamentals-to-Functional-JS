import { createRequire } from "module";
const require = createRequire(import.meta.url);
const compose = require("lodash/fp/compose");

const consider = name => `I think it could be... ${name}`;

const exclaim = statement => `${statement.toUpperCase()}!`;

const blame = compose(consider, exclaim);

console.log(blame("you"));
