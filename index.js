
var choices = ["loop", "conditional", "function", "parent", "child", "framework", "console"];

var word = choices[Math.floor(Math.random() * choices.length)];

var blank = []

for(i=0; i<word.length; i++){
	blank.push('_')
}

document.getElementById("word").textContent = blank.join(' ');

var letters = document.getElementsByClassName('letters')[0]
letters.addEventListener('click', function(){
	letters.style.fontColor = 'red'
})