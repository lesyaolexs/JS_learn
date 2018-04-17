
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordsArray = ['cappuccino', 'dog', 'present', 'fanny', 'street', 'head'];
var word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
var leaves = 6;


//create buttons for alphabet letters
function buttons() {
    for (i = 0; i < alphabet.length; i++) {
        var buttons_letters = document.createElement('button');
        buttons_letters.appendChild(document.createTextNode(alphabet[i]));
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

function guesses(t) {
    var guess_letter = t.innerHTML;
    for (i = 0; i < word.length; i++ ){
        if (word[i] === guess_letter){
            document.getElementById('guess_word').children[i].innerHTML = guess_letter;



        }
    }
    for (j = 0; j < document.getElementById('guess_word').children.length; j++){
        if(document.getElementById('guess_word').children[j].innerHTML !== '_'){
            document.getElementById('game_over').innerHTML = 'Winner!';
        }
        else {
            leaves-- ;
            document.getElementById('images_hangman').src= 'hangman_image/part'+ 6-leaves + '.jpg';
            if (leaves === 0){
                document.getElementById('game_over').innerHTML = 'Loser';
            }

        }
        t.disabled = true
    }



}











