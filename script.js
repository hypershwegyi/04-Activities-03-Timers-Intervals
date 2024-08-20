var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
'Mainggalarpar. Welcome to our gold shop. We are very grateful to all those who came and supported me.';
  var words = message.split(' ');

function countdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } 
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    }   
     else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  var wordCount = 0;

  var msgInterval = setInterval(function () {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();