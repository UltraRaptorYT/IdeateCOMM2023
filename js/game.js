let currentPos = 0;

for (let block of document.querySelectorAll(".block")) {
  if (block.dataset.pos == String(currentPos)) {
    block.innerHTML = `  
<div id="player" class="text-primary">
  <i class="fa-solid fa-dog"></i>
</div>`;
    break;
  }
}

var elDiceOne = document.getElementById("dice1");
var elDiceTwo = document.getElementById("dice2");

function rollDice() {
  document.getElementById("roll").innerHTML = 0;
  var diceOne = Math.floor(Math.random() * 6 + 1);
  var diceTwo = Math.floor(Math.random() * 6 + 1);

  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove("show-" + i);
    if (diceOne === i) {
      elDiceOne.classList.add("show-" + i);
    }
  }

  for (var k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove("show-" + k);
    if (diceTwo === k) {
      elDiceTwo.classList.add("show-" + k);
    }
  }
  setTimeout(() => {
    document.getElementById("roll").innerHTML = diceOne + diceTwo;
    currentPos += diceOne + diceTwo;
    if (currentPos >= 36) {
      sessionStorage.setItem(
        "point",
        parseInt(sessionStorage.getItem("point")) + 100
      );
      setTimeout(() => {
        alert("Earned 100 points!");
      }, 700);
    }
    setTimeout(() => {
      $("#diceModal").modal("hide");
      currentPos %= 36;
      setTimeout(() => {
        movePlayer(currentPos);
      }, 500);
      for (var i = 1; i <= 6; i++) {
        elDiceOne.classList.remove("show-" + i);
        if (diceOne === 1) {
          elDiceOne.classList.add("show-" + i);
        }
      }

      for (var k = 1; k <= 6; k++) {
        elDiceTwo.classList.remove("show-" + k);
        if (diceTwo === 1) {
          elDiceTwo.classList.add("show-" + k);
        }
      }
    }, 700);
  }, 1000);
}

function roll() {
  setTimeout(() => {
    rollDice();
  }, 250);
}

function movePlayer(pos) {
  for (let block of document.querySelectorAll(".block")) {
    if (block.dataset.pos == String(pos)) {
      block.innerHTML = `  
<div id="player" class="text-primary">
  <i class="fa-solid fa-dog"></i>
</div>`;
    } else {
      block.innerHTML = "";
    }
  }
}
