<!-- <h1>Hello World</h1> -->
<script>
   function getComputerChoice(){
       let choices = ['rock', 'paper', 'scissor']
       let random = choices[Math.floor(Math.random() * choices.length)]
       return random;
      
   }
   
  function playRound(playerSelection, computerSelection) {    
      if(playerSelection =='scissor' && computerSelection =='rock'){
       console.log ("you lose, computer Won, Rock beats scissor") 
      }else if (playerSelection=='paper' && computerSelection =='scissor'){
           return 'computer won, you lose'
      }else if(playerSelection=='rock' && computerSelection =='paper'){
       return 'computer won, paper beats rock'
      }else if(playerSelection=='rock' && computerSelection =='scissor'){
       return 'you won, rock beats scissor'
      }else if (playerSelection=='scissor' && computerSelection =='paper'){
       return 'you won, scissor beats the paper'
      }else if(playerSelection=='paper' && computerSelection =='rock'){
       return 'You Won, Paper beats the rock'
      }else if (playerSelection == computerSelection){
       return "Tie"
      }

   }

function game() {
for (let i = 0; i < 5; i++) {
let playerSelection = prompt("Enter Rock, Paper or Scissors").toLocaleLowerCase();
// playerSelection.toLowerCase();
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
}
}
game();