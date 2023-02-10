var scoreMessage = document.getElementById('score-message');
var initials = document.getElementById('initials');
var saveHighscore = document.getElementById('saveHighscore');
var homeBtn = document.getElementById('homeBtn')
var newScore = localStorage.getItem('newScore')
var playerName = document.getElementById('player-name')
var scores = document.getElementById('highscores-scores')

var highscore = JSON.parse(localStorage.getItem("newScore")) || [];

scoreMessage.innerText = "Your score is " + newScore;

playerName.addEventListener("keydown", () => {
    saveHighscore.disabled = !playerName.value;
});

saveHighscore = e => {
    e.preventDefault();
    var score = {
        score: newScore,
        name: playerName.value
    };
    highscore.push(score);
    highscore.sort((a, b) => b.score - a.score);
    highscore.splice(5);

    localStorage.setItem("highscore", JSON.stringify(highscore));
    window.location.assign("highscore.html");
}

scores.innerHTML = highscore.map(score => {
    return `<li class="highscore">${score.name} - ${score.score}</li>`;
}).join("");