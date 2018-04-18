
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordsArray = ['cappuccino', 'dog', 'present', 'funny', 'street', 'head'];
var word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var maxAttempt = 6;
var attemptsLeft = maxAttempt;


//create buttons for alphabet letters
function buttons() {
    for (i = 0; i < alphabet.length; i++) {
        var alphabetChar = document.createElement('button');
        alphabetChar.appendChild(document.createTextNode(alphabet[i]));
        alphabetChar.setAttribute('onclick','guess(this)');
        document.getElementById("buttonsAlphabet").appendChild(alphabetChar);
    }
}

// show guess word
function guessWord() {
    for (i = 0; i < word.length; i++) {
        var guessChar = document.createElement('ul');
        guessChar.appendChild(document.createTextNode('_'));
        document.getElementById('guessWord').appendChild(guessChar);
    }
}

//open guessed letters, changes the image to fail

function guess(buttonElement) {

    var guessLetter = buttonElement.innerHTML;

    buttonElement.disabled = true;

    for (i = 0; i < word.length; i++) {
        if (word[i] === guessLetter) {
            document.getElementById('guessWord').children[i].innerHTML = guessLetter;
        }
    }


    if (document.getElementById('guessWord').innerHTML.indexOf(guessLetter) === -1) {
        attemptsLeft--;
        document.getElementById('imagesHangman').src = 'hangman_image/part' + (maxAttempt - attemptsLeft) + '.jpg';
        document.getElementById('gameOver').innerHTML = 'Try again!';
    }


    if (attemptsLeft===0){
        document.getElementById('gameOver').innerHTML = 'Loser';
    }
    else if (document.getElementById('guessWord').innerHTML.indexOf('_') === -1 ){
        document.getElementById('gameOver').innerHTML = 'Win!';
    }

}

//create restart button

var buttonRestart = document.createElement('button');
buttonRestart.document.getElementById('buttonRestart');