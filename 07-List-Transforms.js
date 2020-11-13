const suspects = [
	{
		name: "Rusty",
		color: "orange",
	},
	{
		name: "Miss Scarlet",
		color: "red",
	},
];

const [orangeVar, redVar] = [suspects[0].color, suspects[1].color];
console.log(orangeVar, redVar);

const [{ color: color1 }, { color: color2 }] = suspects;
console.log(color1, color2);

const [firstColor, secondColor] = suspects;
console.log(firstColor, secondColor);

const game = {
	suspects: [
		{
			name: "Rusty",
			color: "orange",
		},
		{
			name: "Miss Scarlet",
			color: "red",
		},
	],
};

const gameLoop = () => {
	for (let i = 0; i < game.suspects.length; i++) {
		console.log("outer loop");
		for (const key in game.suspects[i]) {
			console.log("inner loop");
			if (game.suspects[i][key] === "Rusty") {
				console.log("found 'em !");
			} else {
				console.log("next time!");
			}
		}
	}
};
gameLoop();

const foo = () => {
	for (let i = 0; i < game.suspects.length; i++) {
		console.log(game.suspects[i]);
	}
};

foo();

const bar = () => {
	for (let suspects in game) {
		game[suspects];
		console.log(game[suspects]);
	}
};

bar();
