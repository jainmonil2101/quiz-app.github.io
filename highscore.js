const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map((score) => {
    return `<li class="high-score">${score.name[0].toUpperCase() + score.name.slice(1, )} - ${score.score}</li>`;
  })
  .join("");
