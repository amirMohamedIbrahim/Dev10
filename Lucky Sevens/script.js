//Declare variables
var userInput = document.getElementById('bet');
var play = document.getElementById('play');
var errorMessage = document.getElementById('errorMessage');
var gameOver = document.getElementById('gameOver');
var playAgain = document.getElementById('playAgain');

//add event listener to trigger error message and reset error message
play.addEventListener("click", verifyUserInput, true);
userInput.addEventListener("blur", rightBet, true);
playAgain.addEventListener("click", luckySevens, true);

function luckySevens() {
  var dice = 0;
  var rolls = 0;
  var maxAmount = 0;
  var rollsAtMaxAmount = 0;
  var money = userInput.value;

  if (userInput.value <= 0) {
    return false;
  }
  //start dice loop
  while (money > 0) {
    var die1 = Math.floor(Math.random() * 6 + 1);
    var die2 = Math.floor(Math.random() * 6 +1);
    dice = die1 + die2;
    rolls++;
    /***************************************************
    Check whether the dice add up to #7
    If total dice equal #7  award $4
    If total dice greater than or less than 7 subtract
    ***************************************************/
      if (dice == 7) {
        money = +money + 4;
          //Assign highest value in the rolls
          if (maxAmount < money) {
            maxAmount = money;
            //Roll count at this instance
            rollsAtMaxAmount = rolls;
          }
      }else {
        money--;
      }
  }
  gameOver.style.display = "block";
  document.getElementById('results').style.display = "block";
  document.getElementById('betAmount').innerHTML = "$" + userInput.value + ".00";
  document.getElementById('totalRolls').innerHTML = rolls;
  if (maxAmount > userInput.value) {
    document.getElementById('rollsAtMaxAmount').innerHTML = rollsAtMaxAmount;
    document.getElementById('maxWin').innerHTML = "$" + (maxAmount - userInput.value) + ".00";
  }else {
    document.getElementById('rollsAtMaxAmount').innerHTML = "None";
    document.getElementById('maxWin').innerHTML = "No Win"

  }
  //switch button
  document.getElementById('play').style.display = "none";
  document.getElementById('playAgain').style.display = "block";
}
//Set alert message if input value is not acceptable
function verifyUserInput(){
  if (userInput.value <= 0) {
    alert("The betting value cannot be less than or equal to zero.");
    errorMessage.innerHTML = "*Please enter a value greater than zero"
  }
}
//Remove error message
function rightBet() {
  errorMessage.innerHTML = "";
}
