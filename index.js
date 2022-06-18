function abc() {
  var loc1 = Math.floor(Math.random() * 5);
  var loc2 = 4;
  var loc3 = 5;
  var guess;
  var hits = 0;
  var guesses = 0;
  var isSunk = false;

  while (isSunk == false) {
    guess = prompt("ready, aim, fire! (enter a number from 0-6: ");
    if (guess < 0 || guess > 6) {
      alert("Please enter a valid cell number!");
    } else {
      guesses = guesses + 1;

      if (guess == loc1 || guess == loc2 || guess == loc3) {
        alert("HIT!");
        hits = hits + 1;
        if (hits == 3) {
          isSunk = true;
          alert("You sank my battleShip!");
        }
      } else {
        alert("MISS");
      }
    }
  }
  var stats =
    "You took " +
    guesses +
    " guesses to sink the battleship," +
    " which means your shooting accuracy was " +
    (3 / guesses) * 100 +
    "%";

  alert(stats);
}
abc();
