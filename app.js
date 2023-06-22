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
               
            })
        })
};   
const compareHands=(playerChoice,computerChoise)=>{
    const winner=document.querySelector('.winner')
    if(playerChoice===computerChoise){
        winner.textContent='It is a tie';
        return;
    } 
    if(playerChoice==='rock'){
        if(computerHand==='scissors'){
            winner.textContent='Player wins';
            return;
        } else{
            winner.textContent='Computer wins';
            return;
        }
    }
    if(playerChoice==='paper'){
        if(computerHand==='rock'){
            winner.textContent='Player wins';
            return;
        } else{
            winner.textContent='Computer wins';
            return;
        }
    }
    if(playerChoice==='scissors'){
        if(computerHand==='paper'){
            winner.textContent='Player wins';
            return;
        } else{
            winner.textContent='Computer wins';
            return;
        }
    }

}



startGame();
playMatch();
}




//call the function
game();

