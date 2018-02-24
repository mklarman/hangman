var choices = ["loop", "conditional", "function", "parent", "child", "framework", "console"]
var hints = ['used to check an array', '"if" is a type of these', 'another word for method', 'the first instance', 'son or daughter', 'built in structure', 'debug on this']
var puzzleWord = Math.floor(Math.random() * choices.length)
var chosenWord = choices[puzzleWord]
var checkWord = chosenWord.split("")
var playerLife = 4
var wordLife = checkWord.length
var winMessage = 'You won. I demand a rematch!'
var loseMessage = 'You are really stupid.'
var myBool = false
var lettersInPuzzle;

var playersLetter = document.getElementById('input')
var submit = document.getElementById('submit')
var wordToGuess = document.getElementById('wordToGuess')
var hintBox = document.getElementById('hintBox')
var usedLetters = document.getElementById('usedLetters')
var playerMsg = document.getElementById('playerMsg')
var lifeLeft = document.getElementById('lifeleft')
var hiddenLetters = document.createElement('div')
var answerLetter; 
hiddenLetters.setAttribute('class', 'letter')

hintBox.innerHTML = hints[puzzleWord]

for(i=0; i<checkWord.length; i++){
	hiddenLetters = document.createElement('div') 
  hiddenLetters.setAttribute("class", "letter")
	hiddenLetters.style.height = '10px'
	hiddenLetters.style.width = '10px'
	hiddenLetters.style.borderBottom = 'solid black'
	hiddenLetters.style.display = 'inLineBlock'
	wordToGuess.appendChild(hiddenLetters)
  // hiddenLetters.innerHTML = " ";//  This is also kinda debugging
}

submit.addEventListener('click', function(){
  usedLetters.innerHTML += playersLetter.value + ' '
    
    for(i=0; i<checkWord.length; i++){

      if(playersLetter.value == (checkWord[i])){
        console.log('in if#1')
        console.log(playersLetter.value)
        var answerLetter = document.getElementsByClassName('letter')[i]
        answerLetter.innerHTML = playersLetter.value
        console.log(answerLetter)
        wordLife-- 
       }
       if(wordLife <= 0){
        playerMsg.innerHTML = winMessage
       }
      
    }

    function scoreLetter(value){
      return (checkWord.indexOf(value) === -1) ? false : true   
  }

    if(scoreLetter(playersLetter.value)== false){
      playerLife--
      alert("You have " + playerLife + ' ' + 'lives left')
    }
    if(playerLife <= 0){
      playerMsg.innerHTML = loseMessage
    }

})

