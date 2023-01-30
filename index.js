let homeScore = 0;
let guestScore = 0;

function addOne() {
    
  let AddScore = 1;
  homeScore += AddScore;
  document.getElementById("totalHome").innerHTML = homeScore;

}

function addTwo() {
    
  let AddScore = 2;
  homeScore += AddScore;
  document.getElementById("totalHome").innerHTML = homeScore;

}

function addThree() {
    
  let AddScore = 3;
  homeScore += AddScore;
  document.getElementById("totalHome").innerHTML = homeScore;

}

function addOneG() {
    
  let AddScore = 1;
  guestScore += AddScore;
  document.getElementById("totalGuest").innerHTML = guestScore;

}

function addTwoG() {
    
  let AddScore = 2;
  guestScore += AddScore;
  document.getElementById("totalGuest").innerHTML = guestScore;

}

function addThreeG() {
    
  let AddScore = 3;
  guestScore += AddScore;
  document.getElementById("totalGuest").innerHTML = guestScore;

}