for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    

    // part which play sound when button is pressed on the screen
    document.querySelectorAll("button")[i].addEventListener('click', function () {
        
        buttonInnerHtml = this.innerHTML
        play(buttonInnerHtml);
        
        ButtonAnimation(buttonInnerHtml);
    })
    
    // part which play sound when keyword's button is pressed
    document.addEventListener("keydown", function (event) {
        play(event.key);
        ButtonAnimation(event.key);
    })
    
    // function which take parameter from the above two methods
    function play(key) {
        switch (key) {
            case "w":
                new Audio('./sounds/tom-1.mp3').play()
                break;
            case "a":
                new Audio('./sounds/tom-2.mp3').play()
                break;
            case "s":
                new Audio('./sounds/tom-3.mp3').play()
                break;
            case "d":
                new Audio('./sounds/tom-4.mp3').play()
                break;
            case "j":
                new Audio('./sounds/snare.mp3').play()
                break;
            case "k":
                new Audio('./sounds/crash.mp3').play()
                break;
            case "l":
                new Audio('./sounds/kick-bass.mp3').play()
                break;

        
            default:
                break;
        }
        
    }

    function ButtonAnimation(currentKey) {
        document.querySelector("." + currentKey).classList.add("pressed");
        
        setTimeout(function () { document.querySelector("." + currentKey).classList.remove("pressed"); }, 100)
    }
}