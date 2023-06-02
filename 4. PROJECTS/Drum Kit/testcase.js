var numofdrumbutt = document.querySelectorAll(".drum").length;  //lenght is meant to calculate number of buttons under the class ".drum"
//here w a s d j k l drum classes commonly have drum so we called just .drum istead of calling w drum and rest of the class name.

for (var i = 0; i<numofdrumbutt; i++) //for loop is utilized to add a click event listener to each of the drum buttons.
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() //click is a event mothod which allows to execute the resp. fun.
  {
 
    var buttonInnerHTML = this.innerHTML;  //'this' refers to a button element in the HTML document. 

    makeSound(buttonInnerHTML);  //makenoice() and buttonAnimation() is created to generate sound and animation when respective buttons are clicked to produce respective noice.

    buttonAnimation(buttonInnerHTML);  //functions are called with the button's innerHTML as the argument.
  });
    
}

document.addEventListener("keypress", function(event)
{
    
    makeSound(event.key); //key is property of event
    //to generate different noises event.key parameter is created under makenoice() fumction i.e., makenoice(event.key)   

    buttonAnimation(event.key);  
    //to generate different animation event.key parameter is created under buttontrasition() fumction i.e., buttontrasition(event.key)
});

function makeSound(key) //enables to produce respective sounds 
{
   switch (key) 
   {
     case "w": //name of the button
       var tom1 = new Audio("tom-1.mp3");
       tom1.play();
       break;
   
     case "a":  //name of the button
        var tom2 = new Audio("tom-2.mp3");  //new Audio is used to add sound
        tom2.play(); //enables to play the sound and play() is property of event
        break;
  
     case "s":  //name of the button
        var tom3 = new Audio("tom-3.mp3");  //new Audio is used to add sound
        tom3.play(); //enables to play the sound and play() is property of event
        break;
  
     case "d":  //name of the button
        var tom4 = new Audio("tom-4.mp3"); //new Audio is used to add sound
        tom4.play(); //enables to play the sound and play() is property of event
        break;
  
     case "j":  //name of the button
        var snare = new Audio("snare.mp3");  //new Audio is used to add sound
        snare.play();  //enables to play the sound and play() is property of event
        break;
  
     case "k":  //name of the button
        var crash = new Audio("crash.mp3");  //new Audio is used to add sound
        crash.play();  //enables to play the sound and play() is property of event
        break;
  
     case "l":  //name of the button
        var kick = new Audio("kick-bass.mp3");  //new Audio is used to add sound
        kick.play();  //enables to play the sound and play() is property of event
        break;
  
     
     default: console.log(key);    
        break;
   }   
}


function buttonAnimation(currentKey)   //buttonAnimation() function takes the current key as an argument and adds a "pressed" class to the drum button with that key.
{
  var activeButton = document.querySelector("." + currentKey);  //currentkey is a event's method

  activeButton.classList.add("pressed");  //pressed is a property of event
    
  setTimeout(function() {activeButton.classList.remove("pressed");}, 100);  //The class is then removed after a delay of 100ms using setTimeout()
}