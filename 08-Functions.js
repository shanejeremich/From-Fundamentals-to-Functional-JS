const CreateSuspectObjects = name => {
	return {
		name: name,
		color: name.split(" ")[1],
		speak() {
			console.log(`My name is ${name}`);
		},
	};
};

const suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

const suspectsList = [];

for (let i = 0; i < suspects.length; i++) {
	suspectsList.push(CreateSuspectObjects(suspects[i]));
}

console.log(suspectsList);
