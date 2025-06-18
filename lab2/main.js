const prompt = require('prompt');

prompt.start();

const properties = [
  {
    name: 'userSelection',
    description: 'Choose [R]OCK, [P]APER, or [S]CISSORS',
    validator: /^(R|P|S)$/i,
    warning: 'Must be either [R]OCK, [P]APER, or [S]CISSORS',
    required: true
  }
];

const ROCK = '✊ rock';
const PAPER = '✋ paper';
const SCISSORS = '✌️ scissors';

prompt.get(properties, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  
  // convert user input to uppercase for consistency
  let userSelection = result.userSelection.toUpperCase();

  // map user input to full words
  if (userSelection === 'R') {
    userSelection = ROCK;
  } else if (userSelection === 'P') {
    userSelection = PAPER;
  } else if (userSelection === 'S') {
    userSelection = SCISSORS;
  }
  
  const randomNumber = Math.random();
  let computerSelection;
  
  if (randomNumber >= 0 && randomNumber <= 0.34) {
    computerSelection = PAPER;
  } else if (randomNumber >= 0.35 && randomNumber <= 0.67) {
    computerSelection = SCISSORS;
  } else {
    computerSelection = ROCK;
  }
  
  console.log(`User chose: ${userSelection}`);
  console.log(`Computer chose: ${computerSelection}`);
  
  // determine the winner
  if (userSelection === computerSelection) {
    console.log("🤝 It's a tie");
  } else if (
    (userSelection === ROCK && computerSelection === SCISSORS) ||
    (userSelection === PAPER && computerSelection === ROCK) ||
    (userSelection === SCISSORS && computerSelection === PAPER)
  ) {
    console.log("🧔 User Wins");
  } else {
    console.log("🤖 Computer Wins");
  }
});