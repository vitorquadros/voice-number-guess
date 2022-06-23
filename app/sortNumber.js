function getSecretNumber() {
  return parseInt(Math.random() * (maxValue + 1));
}

const secretNumber = getSecretNumber();
console.log('Secret number: ', secretNumber);

const minValueElement = document.querySelector('#min-value');
const maxValueElement = document.querySelector('#max-value');
minValueElement.innerHTML = minValue;
maxValueElement.innerHTML = maxValue;
