var obj = { first: "Gavin", last: "Kirlin" };
var firstName = obj.first;
var lastName = obj.last;

console.log(obj);
console.log(firstName);
console.log(lastName);

const { first, second } = { second: 10, first: 15 };
console.log(first);
console.log(second);

const { name, weapon, room } = {
	name: "Rusty",
	room: "kitchen",
	weapon: "candlestick",
};
console.log(name, weapon, room);

// Destructuring === Arrays
const [a, b] = [1, 2];
console.log(a, b);

// Omit certain values
const [c, , d] = [1, 2, 3];
console.log(a, b);

// Combine with spread/rest operator easily without temp
const [e, ...f] = [1, 2, 3];
console.log(e, f);

// Swap variables easily with/without temp
let g = 1,
	h = 2;
console.log(g, h);

// with temp
let temp = g;
g = h;
h = temp;

// without temp
// [h, g] = [g, h];
console.log(g, h);
