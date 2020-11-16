export const _ = {};

_.each = function (list, cb) {
  //
  if (Array.isArray(list)) {
    // loop through array
    for (let i = 0; i < list.length; i++) {
      cb(list[i], i, list);
    }
    // call the callback with a list item
  } else {
    // loop through object
    for (const key in list) {
      cb(list[key], key, list);
    }
  }
};

_.map = (list, cb) => {
  // create an empty array to store
  const storage = [];
  // iterate through list
  _.each(list, (v, i, list) => {
    storage.push(cb(v, i, list));
  });
  // for (let i = 0; i < list.length; i++) {
  // 	const listItem = list[i];
  // cb(element) > push to empty array
  return storage;
};

// _.filter = (arr, cb) => {
//   // create a new array
//   const storage = [];
//   //loop through arr
//   for (let i = 0; i < arr.length; i++) {
//     // check if cb returns true
//     if (cb(arr[i], i, arr) === true) {
//       // push into array
//       storage.push(arr[i]);
//     }
//   }
//   //return arr
//   return storage;
// };

_.filter = (arr, cb) => {
  const storage = [];
  _.each(arr, function (item, i, list) {
    if (cb(item, i, list)) storage.push(item);
  });
  return storage;
};

_.from = arr => {
  return Array.prototype.slice.call(arr);
};

// _.reduce(
//   [1, 2],
//   function (sum, n) {
//     return sum + n;
//   },
//   0
// );
// => 3

// _.reduce(
//   { a: 1, b: 2, c: 1 },
//   function (result, value, key) {
//     (result[value] || (result[value] = [])).push(key);
//     return result;
//   },
//   {}
// );
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)

_.reduce = (list, cb, initial) => {
  //loop through list
  let prev = initial;
  for (let i = 0; i < list.length; i++) {
    i === 0 && prev === undefined ? (prev = list[0]) : (prev = cb(list[i], prev));
  }
  return prev;
};
