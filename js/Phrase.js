class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    //spliting each phrase to single letters
    addPhraseToDisplay() {
            const divPhrase = document.querySelector('#phrase ul');
            const emptyString = ' ';
            this.phrase.split('').forEach(letter => {
                let newLiElement = document.createElement('li');
                newLiElement.innerHTML = letter;
                divPhrase.append(newLiElement);
                newLiElement.classList.add('hide');
                if (letter === emptyString) {
                    newLiElement.classList.add('space');
                } else {
                    newLiElement.classList.add('letter');
                }
            });
        }
        //checking if letter is correct
    checkLetter(letter) {
        console.log(this.phrase);
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }
    showMatchedLetter(letter) {
        const li = document.getElementsByClassName('letter');
        for (let i = 0; i < li.length; i++) {
            if (li[i].innerHTML === letter) {
                li[i].className = 'letter show';
            }
        }
    }
}