const numberOfSpeechButtons = document.querySelectorAll('.speech').length;
console.log(numberOfSpeechButtons);

for(let i = 0; i < numberOfSpeechButtons; i++){
    numberOfSpeechButtons[i].addEventListener('click', function(){
        let buttonContentClick = this.innerHTML;
        console.log(buttonContentClick);
    })
}