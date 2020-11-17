// const newClue = name => {
//   const length = name.length;

//   return weapon => {
//     let clue = length + weapon.length;
//     return !!(clue % 2);
//   };
// };

// const didGreenDoItWithA = newClue("Green");

// console.log(didGreenDoItWithA);
// console.log(didGreenDoItWithA("candlestick"));

function countClues1() {
  var n = 0;
  return {
    count: function () {
      return ++n;
    },
    reset: function () {
      return (n = 0);
    },
  };
}

//ES6 equivalent

const countClues2 = () => {
  let n = 0;

  return {
    count: () => n++,
    reset: () => (n = 0),
  };
};

const countClues3 = () => {
  let n = 0;

  return {
    count: () => n++,
    reset: () => (n = 0),
  };
};

const c = countClues3(),
  d = countClues3();

c.count();
d.count();
c.reset();
c.count();
d.count();

// What is a closure?
/*
    closure happens when you put two functions inside of a function. And you could take advantage of that by returning a function that retains access to it's parent function even after it has been executed, so that's a closure.
 */

const findSomeone = () => {
  const speak = () => {
    console.log(who);
  };

  let who = "Why hello there, Prof Plum!";

  return speak;
};
const someoneSpeak = findSomeone();
console.log(someoneSpeak());

/**
 * Stop Watch
 */
const makeTimer = () => {
  let elapsed = 0;

  const stopwatch = () => {
    return elapsed;
  };

  const increase = () => elapsed++;

  setInterval(increase, 1000);

  return stopwatch;
};

let timer = makeTimer();
console.log(timer());

/**
 * Stop Watch - w/ console.logs
 */
// const makeTimer = () => {
//   console.log("initialized");
//   let elapsed = 0;
//   console.log(elapsed);

//   const stopwatch = () => {
//     console.log("stopwatch");
//     return elapsed;
//   };

//   const increase = () => elapsed++;

//   setInterval(increase, 1000);

//   return stopwatch;
// };

// const timer = makeTimer();
