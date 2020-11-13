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

_.each(suspects, suspectName => {
	let suspectObj = CreateSuspectObjects(suspectName);
	suspectsList.push(suspectObj);
});

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
	// celebrate
};

_.each[("Sally", "Georgie", "Porgie")],
	(name, i, list) => {
		if (list[i + 1]) {
			console.log(name, "is younger than", list[i + 1]);
		} else {
			console.log(name, "is the oldest");
		}
	};
