const game=()=>{
    let pScore=0;
    let cScore=0;

    //start game
    const startGame=()=>{
        const playBtn=document.querySelector('.intro button');
        const introScreen=document.querySelector('.intro');
        const match=document.querySelector('.match');
        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }
    startGame();
    
}

//call the function
game();
