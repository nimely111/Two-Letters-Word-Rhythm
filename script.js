const numberOfSpeechButtons = document.querySelectorAll('.speech');
// console.log(numberOfSpeechButtons);

numberOfSpeechButtons.forEach(button => {
  button.addEventListener("click", function(){
    let buttonContentClick = this.innerHTML;
    console.log(buttonContentClick);
    // calling the make sound function
    makeSound(buttonContentClick);
    // calling the button animation function
    buttonAnimation(buttonContentClick);
    
});
})

// add keypress event
document.addEventListener('keypress', () => {
    //invoking the make sound function
    makeSound(Event.key);
    //invoking the makeSound buttonAnimation function
    makeSound(Event.key);
});


//definition of the makeSound function
const makeSound = key => {
    // initializing switch case for all letter's button
    switch(key){
        case "so":
        let So = new Audio("sounds/s-o.wav");
        So.play();
        break;

      case "go":
      let Go = new Audio("sounds/g-o.wav");
      Go.play();
      break;

      case "lo":
      let Lo = new Audio('sounds/Lo.mp3');
      Lo.play();
      break;

      case "no":
      let No = new Audio('sounds/n-o.wav');
      No.play();
      break;

      case "he":
      let He = new Audio('sounds/He.mp3');
      He.play();
      break;

      case "be":
      let Be = new Audio('sounds/Be.mp3');
      Be.play();
      break;

      case "me":
      let Me = new Audio('sounds/Me.mp3');
      Me.play();
      break;

      case "we":
      let We = new Audio('sounds/We.mp3');
      We.play();
      break;

      case "at":
        var At = new Audio('sounds/At.mp3');
        At.play();
        break;
  
      case "am":
        var Am = new Audio('sounds/Am.mp3');
        Am.play();
        break;
  
      case "an":
        var An = new Audio('sounds/An.mp3');
        An.play();
        break;
  
        case "as":
        var As = new Audio('sounds/As.mp3');
        As.play();
        break;
    
        case "it":
          var It = new Audio('sounds/It.mp3');
          It.play();
          break;
    
        case "in":
          var In = new Audio('sounds/In.mp3');
          In.play();
          break;
    
        case "on":
          var On = new Audio('sounds/On.mp3');
          On.play();
          break;
    
        case "or":
          var Or = new Audio('sounds/or.mp3');
          Or.play();
          break;

          case "of":
            var Of = new Audio('sounds/Of.mp3');
            Of.play();
            break;
      
            case "ox":
              var Ox = new Audio('sounds/ox.mp3');
              Ox.play();
              break;
        
            case "us":
              var Us = new Audio('sounds/us.mp3');
              Us.play();
              break;
        
            case "up":
              var Up = new Audio('sounds/up.mp3');
              Up.play();
              break;

              case "by":
          var By = new Audio('sounds/By.mp3');
          By.play();
          break;

          case "my":
            var My = new Audio('sounds/My.mp3');
            My.play();
            break;
      
            case "to":
              var To = new Audio('sounds/To.mp3');
              To.play();
              break;
        
            case "do":
              var Do = new Audio('sounds/Do.mp3');
              Do.play();
              break;

    default: console.log(key);

    }
}

// definition of the buttonAnimation function
const buttonAnimation = currentKey => {
    let activeButton = document.querySelector("." + currentKey);
    //add animation to all buttons
    activeButton.classList.add('pressed');
    //initialize timer for key press
    setTimeout(() => activeButton.classList.remove("pressed"), 1000);
}
