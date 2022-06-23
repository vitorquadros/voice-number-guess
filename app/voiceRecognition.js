const guessElement = document.querySelector('#guess');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = lang === 'en-US' ? 'en-US' : 'pt-BR';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
  const guess = event.results[0][0].transcript;
  showGuess(guess);
  isGuessValid(guess);
}

function showGuess(guess) {
  guessElement.innerHTML =
    lang === 'en-US'
      ? `<div>You said</div>
                            <span class="box">${guess}</span>`
      : `<div>Você falou</div>
                            <span class="box">${guess}</span>`;
}

recognition.addEventListener('end', () => recognition.start());
