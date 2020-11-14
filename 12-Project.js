import { _ } from "./00-underscore.js";
import { videoData } from "./11-Filter.js";

const suspects = _.filter(videoData, suspectObject => suspectObject.present);

const suspectsName = _.map(suspects, suspect => {
  return suspect.name;
});

console.log(suspects);
console.log(suspectsName);
