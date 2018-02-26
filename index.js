var choices = ["loop", "conditional", "function", "parent", "child", "framework", "console"]
var hints = ['used to check an array', '"if" is a type of these', 'another word for method', 'the first instance', 'son or daughter', 'built in structure', 'debug on this']
var puzzleWord = Math.floor(Math.random() * choices.length)
var chosenWord = choices[puzzleWord]
var checkWord = chosenWord.split("")
var playerLife = 4
var wordLife = checkWord.length
var winMessage = "What? You think you're better than me? You solved the word, so what?  You think that makes you better than me? Think again, pal."
var loseMessage = 'This was actually an aptitude test and our software shows your best fit for employment is in an entry level fast food position.'
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
var pic1 = document.getElementById('pic1')
var pic2 = document.getElementById('pic2') 
hiddenLetters.setAttribute('class', 'letter')

hintBox.innerHTML = hints[puzzleWord]

for(i=0; i<checkWord.length; i++){
	hiddenLetters = document.createElement('div') 
  hiddenLetters.setAttribute("class", "letter")
	hiddenLetters.style.height = '35px'
	hiddenLetters.style.width = '35px'
	hiddenLetters.style.borderBottom = 'solid white'
	hiddenLetters.style.display = 'inLine-block'
  hiddenLetters.style.marginLeft = '15px'
  hiddenLetters.style.marginTop = '27px'
  hiddenLetters.style.fontSize = '23'
  hiddenLetters.style.textAlign = 'center'
	wordToGuess.appendChild(hiddenLetters)
  }

 submit.addEventListener('click', function(){
    usedLetters.innerHTML += playersLetter.value + ' '
    
    for(i=0; i<checkWord.length; i++){

      if(playersLetter.value == (checkWord[i])){
        var answerLetter = document.getElementsByClassName('letter')[i]
        answerLetter.innerHTML = playersLetter.value
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
      alert("Wrong letter. You have " + playerLife + ' ' + 'lives left')
    }
    if(playerLife <= 0){
      playerMsg.innerHTML = loseMessage
      pic2.style.height = '270px'
      pic2.style.width = '270px'
      pic2.style.marginTop = '-271px'
      pic2.style.backgroundColor = 'red'
      pic2.style.backgroundImage = "url('idiot.jpeg')";
      pic1.style.backgroundImage = "url('losepic.jpg')";
      
    }

})

