//Lyd for hopping

const jumpSound = new Audio('./gameSounds/jumpsound.wav');
const coinSound = new Audio('./gameSounds/coinSound.mp3');
const deathSound = new Audio('./gameSounds/deathSound.mp3');

// {/* <audio id="jumpSound" src="/gameSounds/jumpsound.wav" preload="auto"></audio> */}

// var jumpSound = document.getElementById('jumpSound');

document.addEventListener('keydown', function(event) {
    if (event.key === 'Space') {
        playJumpSound();
    }
});


function playJumpSound() {
    if (!jumpSound.paused) {
    }
    jumpSound.play();
}

function playCoinSound() {
  if (!coinSound.paused) 
    coinSound.pause();
  }

  function playDeathSound() {
    if (!deathSound.paused) 
      deathSound.pause();
    }
    




