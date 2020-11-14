import { _ } from "./00-underscore.js";

const weapons = ["candlestick", "lead pipe", "revolver"];

const makeBroken = function (item) {
  return `broken ${item}`;
};

const brokenWeapons = _.map(weapons, makeBroken);

console.log(brokenWeapons);

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

const suspectsList = _.map(suspects, name => {
  return CreateSuspectObjects(name);
});

console.log("Suspects", suspectsList);
