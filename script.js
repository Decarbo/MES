var wordsToType = document.querySelector('span[words]').getAttribute('words').split(','),
	typer = document.querySelector('span[words]'),
	typingSpeed = parseInt(typer.getAttribute('typing-speed')) || 70,
	typingDelay = parseInt(typer.getAttribute('typing-delay')) || 700;

var currentWordIndex = 0,
	currentCharacterIndex = 0;

function type() {
	var wordToType = wordsToType[currentWordIndex % wordsToType.length];

	if (currentCharacterIndex < wordToType.length) {
		typer.innerHTML += wordToType[currentCharacterIndex++];
		setTimeout(type, typingSpeed);
	} else {
		setTimeout(erase, typingDelay);
	}
}
function erase() {
	var wordToType = wordsToType[currentWordIndex % wordsToType.length];
	if (currentCharacterIndex > 0) {
		typer.innerHTML = wordToType.substr(0, --currentCharacterIndex - 1);
		setTimeout(erase, typingSpeed);
	} else {
		currentWordIndex++;
		setTimeout(type, typingDelay);
	}
}

window.onload = function () {
	type();
};

const hamb = document.querySelector('.ham');
const navtext = document.querySelector('.navtext');
const listItems = document.querySelectorAll('.navtext ul li');
const cross = document.querySelector('.cross');
	let flag = true;
	hamb.addEventListener('click',()=>{
		flag=!flag
	})
hamb.addEventListener('click', () => {
    navtext.classList.toggle('hidden');

	 if(flag==true){
		hamb.innerHTML='☰'
	 }
	 if(flag==false){
		hamb.innerHTML='x'

	 }
});

listItems.forEach((item)=>{
item.addEventListener('click',()=>{
	navtext.classList.toggle('hidden')
	flag=true
 if(flag==true){
		hamb.innerHTML='☰'
	 }
})
})

