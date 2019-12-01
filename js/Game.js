class Game {
    constructor() {
            this.missed = 0;
            this.phrases = this.createPhrases();
            this.activePhrase = null;
        }
        //filling property phrases with object od class Phrase
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
    checkForWin() {
        const letter = document.querySelectorAll('.letter').length;
        const show = document.querySelectorAll('.show').length;
        if (letter === show) {
            return true;
        } else {
            return false;
        }
    }
    removeLife() {

    }

}