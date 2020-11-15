// const createTuple = (a, b, c, d, ...args) => {
//   console.log(args);
//   return [
//     [a, c],
//     [b, d],
//   ];
// };

function createTuple(a, b, c, d) {
  console.log(arguments);
  return [
    [a, c],
    [b, d],
  ];
}

createTuple("It", "be", "could", "anyone", "no one");
