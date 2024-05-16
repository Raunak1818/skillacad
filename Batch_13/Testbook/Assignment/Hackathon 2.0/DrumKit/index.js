var numberOfButtons = document.querySelectorAll(".button").length;
for(let i = 0 ; i < numberOfButtons;i++){
    document.querySelectorAll(".button")[i].addEventListener("click",function(){
    let innerHtml = this.innerHTML;
    makeSound(innerHtml)
    buttonAnimation(innerHtml);

    });
}

function makeSound(key){
    switch (key) {
        case "w":
            var img1 = new Audio("sound/img1.mp3");
            img1.play();
            
            break;
            case "a":
                var img2 = new Audio("sound/img2.mp3");
                img2.play();
                
                break;
           
        
            case "s":
            var img3 = new Audio("sound/img3.mp3");
            img3.play();
            
            break;
     
            case "d":
            var img4= new Audio("sound/img4.mp3");
            img4.play();
            
            break;

            case "j":
            var img5 = new Audio("sound/img5.mp3");
            img5.play();
            
            break;
            case "k":
            var img6 = new Audio("sound/img6.mp3");
            img6.play();
            
            break;
          
             case "l":
             var img7 = new Audio("sound/img7.mp3");
             img7.play();    
             break;
        
        
        
        
                    default:
                        console.log("Default Case");
            break;
    }
}
function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
    
}
