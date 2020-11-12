var box = {}

box["material"] = "cardboard"
box[0] = "meow"
box["^&*"] = "testing 123"

var test = box["^&*"]

console.log(box)
console.log(test)
console.log(box[0])

box[2 + 2] = true
console.log(box)
