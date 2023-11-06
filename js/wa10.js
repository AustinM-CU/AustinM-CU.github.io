const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertX = ["Lionel The Great", "CJ Stroud","Your Mom"];
const insertY = ["The Mecca","The C4C","H-Town"];
const insertZ = ["spontaneously cried of greif","ran all the way back to Ohio","sat down and smiled"]

randomize.addEventListener('click', result);

let newStory = storyText;
const xItem = randomValueFromArray(insertX)
const yItem = randomValueFromArray(insertY)
const zItem = randomValueFromArray(insertZ)

newStory = newStory.replaceAll(":insertx:",xItem)
newStory = newStory.replace(":inserty:",yItem)
newStory = newStory.replace(":insertz:",zItem)

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob",name)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + "Stone" ;
    newStory = newStory.replace("pounds",weight)
    const temperature =  Math.round((94-32)*(5/9)) + "centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}