function game(counter){
  
  function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
      return alert("Draw!");
    }
	else if ((playerSelection === "paper" && computerSelection === "rock") 
             || (playerSelection === "scissors" && computerSelection === "paper")
             ||(playerSelection === "rock" && computerSelection === "scissors")){
      return alert("You win!")
    }
    else{
      return alert(`Computer win! (${computerSelection}) `);
    }
  }
  
  for(let i = 0; i <= counter; i++){   
    const regex = /^[a-z]+$/;
    let playerSelection = prompt("rock, scissors or paper?");
    if(playerSelection === "rock" || playerSelection  === "paper" 
       || playerSelection === "scissors"){     
      const computerSelection = "rock";
      playRound(playerSelection, computerSelection);
    }else{
      alert("wrong user input! Please choose ONE from rock, scissors or paper");
      game()
    }
        
  }
  
}

game(5);