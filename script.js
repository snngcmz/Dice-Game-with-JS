'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll'); // +
const btnHold = document.querySelector('.btn--hold');
// console.log(diceEl);

let scores, currentScore, activePlayer, playing;

//  player0El.classList.remove('player--active');
// player1El.classList.remove('player--active'); 

const init = function(){
    console.log("btn: NEW");
    scores = [0,0];
    // console.log(scores);

    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    // console.log(score1El);

    diceEl.classList.add('hidden');

    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    // player0El.classList.remove('player--active');
    // player1El.classList.remove('player--active'); 
    
    // console.log(player0El);
};

init ();

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0; 
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1:0;
    if(activePlayer == 0)
    {
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');
        console.log(player0El);
    }
    else
    {
        player1El.classList.add('player--active');
        player0El.classList.remove('player--active');
        console.log(player0El);
    }    
    // console.log(player1El);
};

btnRoll.addEventListener('click', function(){      
    console.log('btn: AT');
    if(playing){
        // console.log(playing);
        const dice = Math.trunc(Math.random()*6+1);
        // console.log(dice);

        diceEl.classList.remove('hidden');
        diceEl.src = `zar/zar${dice}.jpg`;
        // console.log(diceEl);

        if(dice != 1){
            // console.log(currentScore);
            currentScore += dice;
            // console.log(currentScore); 
            // console.log(activePlayer);    
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else{
            switchPlayer();
        }
    }    
});

btnHold.addEventListener('click', function(){
    console.log('btn: SAVE');
    if(playing){
        // console.log(playing);
        scores[activePlayer] += currentScore;
        // console.log(scores[activePlayer]);
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        
        if(scores[activePlayer] >= 100){
            playing = false;           
            diceEl.classList.add('hidden');                  
        
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        }
        else
        {
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click',init);
