function isGuessValid(guess) {
  const number = Number(guess);

  // check if guess is a number
  if (Number.isNaN(number)) {
    guessElement.innerHTML += '<div>Invalid value</div>';
  }

  // Check if the guess is between 1 and 100
  if (number > maxValue || number < minValue) {
    guessElement.innerHTML += `<div>The secret number must be between ${minValue} and ${maxValue}</div>`;
  }

  // Check if the guess is correct
  if (number === secretNumber) {
    document.body.innerHTML = `
        <h2>That's it!</h2>
        <h3>The secret number was ${secretNumber}</h3>
    `;
  }
}
