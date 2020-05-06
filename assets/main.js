const currentWordElement = document.querySelector('#word-to-guess')

const guessElement = document.querySelector('#letter-input')
const submitButton = document.querySelector('#letter-submit-button')
const  guessedElement = document.querySelector('#letters-attempted')

let guessCountElement = document.querySelector("#guess-count")
let guessesRemaining = 5

let finalWord = currentWordElement.innerHTML
let hiddenChar = "-"
let guessedLetters = ""

currentWordElement.innerHTML = hiddenChar.repeat(finalWord.length)

submitButton.addEventListener("click", function () {
    let guessedLetter = guessElement.value
    if(!guessedLetters.includes(guessedLetter)){
        guessedElement.innerHTML += guessedLetter
        guessedLetters += guessedLetter
    } else {
        alert("letter already guessed")
    }
    if(finalWord.includes(guessedLetter)){
        // update currentword element
        let prevWord = currentWordElement.innerHTML
        let finalString = ""

        let count = 0
        while(count < finalWord.length){
            if(prevWord[count]===hiddenChar && finalWord[count]===guessedLetter){
                finalString+=guessedLetter
            } else if (prevWord[count]===hiddenChar){
                finalString+=hiddenChar
            } else {
                finalString+=prevWord[count]
            }
            count++
        }
        currentWordElement.innerHTML = finalString
        if(finalString===finalWord){
            document.body.innerHTML += "<img src='https://media.giphy.com/media/xLsaBMK6Mg8DK/giphy.gif'>"
        }
    } else {
        guessesRemaining--
        guessCountElement.innerHTML = "guesses left:"+guessesRemaining
        if(guessesRemaining===0){
            document.body.innerHTML += "<img src='https://media.giphy.com/media/10h8CdMQUWoZ8Y/giphy.gif'>"
            submitButton.disabled = true
        }
    }
})