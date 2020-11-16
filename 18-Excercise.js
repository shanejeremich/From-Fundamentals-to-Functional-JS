import _ from "lodash";

const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false },
    ],
  },
];

const notInRoom = suspect => {
  // return an array of all the falses
  const emptyRooms = _.reduce(
    suspect.rooms,
    (room, memo) => {
      if (room === false) memo.push(room);
      return memo;
    },
    []
  );
  console.log(emptyRooms);
  return emptyRooms;
};

const notInRooms = _.map(newDevelopment, notInRoom);
console.log(notInRooms);
const solution = _.intersection(...notInRooms);
console.log("Solution", solution);
// ["living Room", "Bathroom"]

// Did not solve the problem
