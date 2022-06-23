const minValue = 1;
const maxValue = 100;

function getSecretNumber() {
  return parseInt(Math.random() * (maxValue + 1));
}

const secretNumber = getSecretNumber();

const minValueElement = document.querySelector('#min-value');
const maxValueElement = document.querySelector('#max-value');
minValueElement.innerHTML = minValue;
maxValueElement.innerHTML = maxValue;
