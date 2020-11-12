var person = []

person.name = "Mrs. White"

var who = person.name

person[0] = "I was not in the Billiards room"
console.log("person.name -", person.name)
console.log(`person.["name"] -`, person["name"])
console.log("person[0] -", person[0])
console.log("person -", person)

var plea = "wouldShe"

person[plea] = "I would never!"

console.log("person -", person)
console.log("person.wouldShe -", person.wouldShe)
console.log("person.length -", person.length)

person[10] = "new array"
console.log("person.length -", person.length)

let newArr = person.map(i => {
	console.log("i", i)
})

console.log(newArr)
console.log("person -", person)
console.log("person.length -", person.length)
