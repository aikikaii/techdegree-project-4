class Game {
    constructor() {
            this.missed = 0;
            this.phrases = this.createPhrases();
            this.activePhrase = null;
        }
        //filling property phrases with object of class Phrase
    createPhrases() {
            this.phrases = [
                new Phrase('never give up'),
                new Phrase("dont give up on your dreams"),
                new Phrase("your limitation it is only your imagination"),
                new Phrase("great things never come from comfort zones"),
                new Phrase("dream big")
            ];
            return this.phrases;
        }
        //getting random phrase
    getRandomPhrase() {
            const getRandom = Math.floor(Math.random() * this.phrases.length);
            return this.phrases[getRandom];
        }
        //starting game
    startGame() {
        const divOverlay = document.getElementById('overlay');
        divOverlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    handleInteraction(button) {

            button.disabled = true;
            const check = game.activePhrase.checkLetter(button.textContent);
            if (!check) {
                button.className = "wrong";
                this.removeLife();
            } else {
                button.className = "chosen";
                game.activePhrase.showMatchedLetter(button.textContent);

                if (this.checkForWin()) {
                    this.gameOver(true);
                }
            }

        }
        //did player revealed all letters 
    checkForWin() {
            const letter = document.querySelectorAll('.letter').length;
            const show = document.querySelectorAll('.show').length;
            if (letter === show) {
                return true;
            } else {
                return false;
            }

        }
        //removing life and heart image replacing with other heart image
    removeLife() {
        const life = document.getElementsByClassName('tries');
        life[this.missed].innerHTML = "<img src='images/lostHeart.png' alt='Heart Icon' height='35' width='30'>"
        this.missed++;
        console.log('lost life' + this.missed);
        if (this.missed === 5) {
            this.gameOver(this.checkForWin());
        }
    }
    gameOver(won) {
        const divOverlay = document.getElementById('overlay');
        let gameOverMessage = document.getElementById('game-over-message');
        divOverlay.style.display = '';
        if (won) {
            gameOverMessage.innerHTML = 'YOU WON';
            divOverlay.className = 'win';
        } else {
            gameOverMessage.innerHTML = 'YOU LOST';
            divOverlay.className = 'lose';
        }

        this.reset();
    }

    //reset game, gameboard, remove all li elements, reset heart images
    reset() {
        const li = document.querySelector('#phrase ul');
        const buttons = document.querySelectorAll('#qwerty button');
        const life = document.querySelectorAll('#scoreboard img');

        li.innerHTML = '';
        buttons.forEach(item => {
            item.removeAttribute('disabled');
            item.classList.remove('wrong', 'chosen');
        });
        life.forEach(item => {
            item.setAttribute('src', 'images/liveHeart.png');
        });
    }

}