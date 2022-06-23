const guessElement = document.querySelector('#guess');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
  const guess = event.results[0][0].transcript;
  showGuess(guess);
  isGuessValid(guess);
}

function showGuess(guess) {
  guessElement.innerHTML = `<div>You said</div>
                            <span class="box">${guess}</span>`;
}
