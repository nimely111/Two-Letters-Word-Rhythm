const numberOfSpeechButtons = document.querySelectorAll('.speech').length;
console.log(numberOfSpeechButtons);

for(let i = 0; i < numberOfSpeechButtons; i++){
    document.querySelectorAll(".speech")[i].addEventListener("click", function(){
        let buttonContentClick = this.innerHTML;
        console.log(buttonContentClick);

        // calling the make sound function
        makeSound(buttonContentClick);
        // calling the button animation function
        buttonAnimation(buttonContentClick);
        
    });
}

// add keypress event
document.addEventListener('keypress', function(){
    //invoking the make sound function
    makeSound(Event.key);

    //invoking the makeSound buttonAnimation function
    makeSound(Event.key);
});


//definition of the makeSound function
function makeSound(key){
    
}