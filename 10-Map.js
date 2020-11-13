import _ from "underscore";

const weapons = ["candlestick", "lead pipe", "revolver"];

const makeBroken = function (item) {
	return `broken ${item}`;
};

const brokenWeapons = _.map(weapons, makeBroken);

console.log(brokenWeapons);
