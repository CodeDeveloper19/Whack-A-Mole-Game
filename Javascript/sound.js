let LIMIT = 1; // Allows the program to start playing the audio only once
let audio = new Audio('/Sound Effects/backgroundmusic.mp3');

let icon = document.getElementsByTagName("i");

console.log(document.getElementsByClassName("sound"))


for (let i = 0; i < 3; i++ ){
    document.getElementsByClassName("sound")[i].addEventListener("click", () => {
        if (LIMIT == 1){
            audio.play();
            audio.loop = true;
            LIMIT += 1;
        }
    
        if (icon[0].classList[1] == "fa-volume-xmark") {
            for(let i = 0; i < 3; i++){
                icon[i].classList.replace("fa-volume-xmark", "fa-volume-high")
            }
            audio.muted = false;
        } else {
            for(let i = 0; i < 3; i++){
                icon[i].classList.replace("fa-volume-high", "fa-volume-xmark")
            }
            audio.muted = true;
        }
    })
}


