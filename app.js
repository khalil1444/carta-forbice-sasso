const game=()=>{
    let pScore=0;
    let cScore=0;

    //start game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
    
        playBtn.addEventListener("click", () => {
          introScreen.classList.add("fadeOut");
          match.classList.add("fadeIn");
        });
      };
    
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");
        //computer choice
        const computerOptions=["rock","paper","scissors"];
        options.forEach(option=>{
            option.addEventListener("click",function(){
                const computerNumber=Math.floor(Math.random()*3);
                const computerChoise=computerOptions[computerNumber];
               
                
                compareHands(this.textContent,computerChoise);
                updateScore();

                playerHand.src=`/assets/${this.textContent}.png`;
                computerHand.src=`/assets/${computerChoise}.png`;
                playerHand.style.animation="shakePlayer 2s ease";
                computerHand.style.animation="shakeComputer 2s ease";
            })
        })
};   


const updateScore=()=>{
    const palyerScore=document.querySelector('.player-score p');
    const computerScore=document.querySelector('.computer-score p');
    palyerScore.textContent=pScore;
    computerScore.textContent=cScore;
};



const compareHands=(playerChoice,computerChoise)=>{
    const winner=document.querySelector('.winner')
    if(playerChoice===computerChoise){
        winner.textContent='It is a tie';
        return;
    } 
    if(playerChoice==='rock'){
        if(computerChoise==='scissors'){
            winner.textContent='Player wins';
            pScore++;
            return;
        } else{
            winner.textContent='Computer wins';
            cScore++;
            return;
        }
    }
    if(playerChoice==='paper'){
        if(computerChoise==='rock'){
            winner.textContent='Player wins';
            pScore++;
            return;
        } else{
            winner.textContent='Computer wins';
            cScore++;
            return;
        }
    }
    if(playerChoice==='scissors'){
        if(computerChoise==='paper'){
            winner.textContent='Player wins';
            pScore;
            return;
        } else{
            winner.textContent='Computer wins';
            cScore;
            return;
        }
    }

}



startGame();
playMatch();
}




//call the function
game();

