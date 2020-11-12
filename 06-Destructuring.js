var obj = { first: "Gavin", last: "Kirlin" }
var firstName = obj.first
var lastName = obj.last

console.log(obj)
console.log(firstName)
console.log(lastName)

const { first, second } = { second: 10, first: 15 }
console.log(first)
console.log(second)

const { name, weapon, room } = {
	name: "Rusty",
	room: "kitchen",
	weapon: "candlestick",
}

console.log(name, weapon, room)

const [a, , b] = [1, 2, 3]
console.log(a, b)

const [c, ...d] = [1, 2, 3]
console.log("d", d)
console.log(c, d)
