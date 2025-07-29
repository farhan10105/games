let coins = 0;
let username = "";
let score = 0;

function login() {
  username = document.getElementById("username").value;
  if (!username) return alert("Enter your name to continue!");
  coins = 100;
  document.getElementById("player-name").textContent = username;
  document.getElementById("coins").textContent = coins;
  document.getElementById("login-section").style.display = "none";
  document.getElementById("game-section").style.display = "block";
}

function logout() {
  location.reload();
}

function showMinesGame() {
  document.getElementById("mines-game").style.display = "block";
  document.getElementById("score-game").style.display = "none";
  createMinesGrid();
}

function showScoreGame() {
  document.getElementById("mines-game").style.display = "none";
  document.getElementById("score-game").style.display = "block";
  score = 0;
  document.getElementById("score").textContent = score;
}

function createMinesGrid() {
  const grid = document.getElementById("mines-grid");
  grid.innerHTML = "";
  const mineIndex = Math.floor(Math.random() * 25);
  for (let i = 0; i < 25; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = function () {
      if (tile.classList.contains("safe") || tile.classList.contains("mine")) return;
      if (i === mineIndex) {
        tile.classList.add("mine");
        tile.textContent = "💥";
        alert("Boom! You hit a mine.");
      } else {
        tile.classList.add("safe");
        tile.textContent = "+10";
        coins += 10;
        document.getElementById("coins").textContent = coins;
      }
    };
    grid.appendChild(tile);
  }
}

function resetMines() {
  createMinesGrid();
}

function increaseScore() {
  score++;
  document.getElementById("score").textContent = score;
}

function finishScoreGame() {
  const earned = score * 2;
  coins += earned;
  alert("You earned " + earned + " coins!");
  document.getElementById("coins").textContent = coins;
  score = 0;
  document.getElementById("score-game").style.display = "none";
}
