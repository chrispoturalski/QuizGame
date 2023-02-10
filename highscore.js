const scoreMessage = document.getElementById('score-message');
const initials = document.getElementById('initials');
const saveHighscore = document.getElementById('saveHighscore');
const homeBtn = document.getElementById('homeBtn');
const newScore = localStorage.getItem('newScore');
const playerName = document.getElementById('player-name');
const scores = document.getElementById('highscores-scores');

const highscore = JSON.parse(localStorage.getItem("newScore")) || [];

scoreMessage.innerText = newScore;


playerName.addEventListener("keydown", () => {
    saveHighscore = !playerName.value;
    console.log(score)
});

saveHighscore = e => {
    e.preventDefault();
    const score = {
        score: newScore,
        name: playerName.value
    };
    highscore.push(score);
    highscore.sort((a, b) => {
        return b.score - a.score
    });
    highscore.splice(5);

    localStorage.setItem("highscore", JSON.stringify(highscore));
    window.location.assign("highscore.html");
}

// scores.innerHTML = highscore.map(score => {
//     return `<li class="highscore">${score.name} - ${score.score}</li>`;
// }).join("");