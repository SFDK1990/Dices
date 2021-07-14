'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

//Starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); //Select class from CSS and to be desapear

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

//Rolling dice funcionality
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1; //make random the daice
  diceEl.classList.remove('hidden'); //quitamos la funcion CSS de ignorar la figura del dado
  diceEl.src = `dice-${dice}.png`; //Mostramos el dado dependiendo el numero random q nos den(De esta manera podemos señalar los dados que queresmos)
  if (dice != 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore; //Alternamos el jugador y mostramos en CURRENT los dados que hemos sumado
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; //si el jugador activo es el 0 lo cambiamos al 1 y si es 1 lo cambiamos a 0
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore; //score [1] = score[1] + currentScore;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
});
