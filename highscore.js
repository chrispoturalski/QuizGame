var scoreMessage = document.getElementById('score-message');
var initials = document.getElementById('initials');
var saveHighscore = document.getElementById('saveHighscore');
var homeBtn = document.getElementById('homeBtn')
var newScore = localStorage.getItem('newScore')
var playerName = document.getElementById('player-name')
var score = newScore

function saveHighscore() {
    saveHighscore.addEventListener('click', function(event) {
        event.preventDefault();

        var highscore = {
            playerName: playerName.value,
            score: score.value,
        };
        

        localStorage.setItem("highscore", JSON.stringify(highscore));
        showLastScore();
    })
}

function showLastScore() {
    var lastScore = JSON.parse(localStorage.getItem("newScore"));
    if (lastScore !==  null) {
        playerName.innerHTML = playerName.value;
        newScore.innerHTML = newScore.value;
    } else {
        return;
    }
}
