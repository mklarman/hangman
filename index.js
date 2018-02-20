// function guessingGame(){

var choices = ["loop", "conditional", "function", "parent", "child", "framework", "console"]
var hints = ['used to check an array', '"if" is a type of these', 'another word for method', 'the first instance', 'son or daughter', 'built in structure', 'debug on this']
var puzzleWord = Math.floor(Math.random() * choices.length);
console.log(puzzleWord)
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
var hiddenLetters = document.createElement('div')
hintBox.innerHTML = hints[puzzleWord]

for(i=0; i<checkWord.length; i++){
	hiddenLetters = document.createElement('div') 
	hiddenLetters.style.height = '10px'
	hiddenLetters.style.width = '10px'
	hiddenLetters.style.borderBottom = 'solid black'
	hiddenLetters.style.display = 'inLineBlock'
	wordToGuess.appendChild(hiddenLetters)

  hiddenLetters.setAttribute("class", "letter"); // Sets Attribute of class so we can access it later
  hiddenLetters.innerHTML = " ";//  This is also kinda debugging


	console.log( "This is i " + i);
}

submit.addEventListener('click', function(){
    console.log("clicked");
    usedLetters.innerHTML += playersLetter.value + ' ';
    
    if(scoreLetter(playersLetter.value) == true){
      var index = callLetter(playersLetter.value);
      console.log("index is:", index);
      // var hl = document.getElementsByClassName("letter")[index];
      //console.log(hl);
      // hl.innerHTML = playersLetter.value.toLowerCase();
      console.log("In if statement");

      for(let i = 0; i < checkWord.length; i++){//  Goes through loop again
        if(playersLetter.value == (checkWord[i])){//  Checks if there is this letter in the word
          var hl = document.getElementsByClassName("letter")[i];//  Gets the class 
          hl.innerHTML = playersLetter.value.toLowerCase();// Replaces the innerHTML
          wordLife--;// This is in the forloop to take account of multiple letters
        }
        // if(playersLetter.value != (checkWord[i])){
        //   playerLife--
        
      }
    }

      console.log(wordLife);

    if(scoreLetter(playersLetter.value) == false){
      playerLife--
    }
  
    if(playerLife <= 0){
        playerMsg.innerHTML = loseMessage

    }


    if(wordLife == 0){
      playerMsg.innerHTML = winMessage
    }
    // if(playerLife == 0){
    //   playerMsg.innerHTML = loseMessage
    // }
})


function scoreLetter(value){// To check if the letter is actually in the word
  for(let i = 0; i < checkWord.length; i++){
    if(value == (checkWord[i])){
      return true;
    
     }
     return false
      // playerLife--
      // console.log(playerLife)
      // return false
      // if(playerLife == 0){
      //   console.log("in if")
      //   playerMsg.innerHTML = loseMessage
      // }
     }
  }


function callLetter(value){//  To get the index (may not need it)
  for(let i = 0; i < checkWord.length; i++){
    if(value == (checkWord[i])){
      return i;
    }
  }
}

// function scoreLetter(value){
//   for(i=0; i < checkWord.length; i++)
//     if(value)
// }

// submit.addEventListener('click', function(){
//        for (i = 0; i < checkWord.length; i++) {
//        	if(playersLetter.value == lettersInPuzzle){
//           console.log("In if2 statement");
//        	   wordLife--
//        	   console.log(wordLife)
//        	   myBool = true
//        	}
       

//         if(wordLife == 0){
//         	playerMsg.innerHTML = winMessage
//         }
//       }

//         if(myBool == false){
//         	playerLife--
//         }

//         if(playerLife <= 0){
//         	playerMsg.innerHTML = loseMessage
//         }
//         myBool = false


// })

        
    
	
  

// }












// 

// 

// var word = 

// var puzzleWord = []

// var lettersLeft = word.length

// var chances = 5

// for(i=0; i<word.length; i++){
// 	puzzleWord.push('_')
// }

// document.getElementById("word").textContent = puzzleWord.join(' ');

// var letterGuessed = prompt('Enter a single letter')

// for(i=0; i<word.length; i++)
//    if(letterGuessed === word[i]){
//    	puzzleWord[i] == word[i]
//    }else
//       chances--
//       alert('You have ' + chances + 'left')
// var container = document.getElementById('container')

// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// for(let i=0;i<letters.length;i++){
// 	container.innerHTML += letters[i];
// 	container.style.display = 'inlineBlock'
// 	container.style.fontSize = '35px'

// }

// letters[i].addEventListener('click', function(){
// 	showLetters(i)
// })

// function showLetters(arrayIndex){

// }


// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// var playerGuess = prompt('Guess a letter or click cancel to stop play')

// while(lettersLeft>0){


//    if(playerGuess === null){
// 	     break
//     }else if (playerGuess.length !==1){
// 	alert('Please enter a single letter')
//     } else{
// 	    for(g=0; g<word.length; g++){
// 		    if(word[g] === playerGuess){
// 			puzzleWord[g] = playerGuess
// 			remainingLetters--
// 		}
// 	}
//   }
// }


// // var div = document.getElementsByClassName('box')[0];

// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
// for(let i=0;i<letters.length;i++){
	
// 	// var prLetters = document.createTextNode(letters[i])

// 	div.innerHTML += letters[i] + '<br>';
// 	// document.body.appendChild(div)
// 	// letters[i].addEventListener('click', function(){
// 	// 			lettersPicked(i)
// 	// })
// }

// var usedLetters = document.getElementById('used')
// function lettersPicked(arrayIndex){
// 	usedLetters.innerHTML = letters[arrayIndex]
// }
