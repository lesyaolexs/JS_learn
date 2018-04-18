
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordsArray = ['cappuccino', 'dog', 'present', 'fanny', 'street', 'head'];
var word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var overAttempt = 6;
var attempt = overAttempt;


//create buttons for alphabet letters
function buttons() {
    for (i = 0; i < alphabet.length; i++) {
        var buttons_letters = document.createElement('button');
        buttons_letters.appendChild(document.createTextNode(alphabet[i]));
        buttons_letters.setAttribute('onclick','guess(this)');
        document.getElementById("buttons_alphabet").appendChild(buttons_letters);
    }

}

// show guess word
function guessWord() {
    for (i = 0; i < word.length; i++) {
        var guess_word = document.createElement('ul');
        guess_word.appendChild(document.createTextNode('_'));
        document.getElementById('guess_word').appendChild(guess_word);

    }
}

//open guessed letters, changes the image to fail

function guess(buttonElement) {

    var guess_letter = buttonElement.innerHTML;

    buttonElement.disabled = true;

    for (i = 0; i < word.length; i++) {
        if (word[i] === guess_letter) {
            document.getElementById('guess_word').children[i].innerHTML = guess_letter;
        }
    }

    if (document.getElementById('guess_word').innerHTML.indexOf(guess_letter) === -1) {
                attempt--;
                document.getElementById('images_hangman').src = 'hangman_image/part' + (overAttempt - attempt) + '.jpg';
                document.getElementById('game_over').innerHTML = 'Try again!';
    }


    if (attempt===0){
                document.getElementById('game_over').innerHTML = 'Loser';
    }
    else if ('_' in document.getElementById('guess_word').innerHTML === false){
            document.getElementById('game_over').innerHTML = 'Win!';
    }

}

//create restart button

var buttonRestart = document.createElement('button');
buttonRestart.document.getElementById('buttonRestart');















