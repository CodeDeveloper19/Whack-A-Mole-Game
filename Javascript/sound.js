let LIMIT = 1; // Allows the program to start playing the audio only once
let audioBackgroundMusic = new Audio('/Sound Effects/backgroundmusic.mp3');
let audioClick = new Audio('./Sound Effects/click.mp3');

let icon = document.getElementsByTagName("i");

for (let i = 0; i < document.getElementsByClassName("sound").length; i++ ){
    document.getElementsByClassName("sound")[i].addEventListener("mouseover", () => {
        document.getElementsByClassName("circle-image")[i].src = "./images/circle slab hover.png";
    })
    
    document.getElementsByClassName("sound")[i].addEventListener("mouseout", () => {
        document.getElementsByClassName("circle-image")[i].src = "./images/circle slab.png";
    })
    
    document.getElementsByClassName("sound")[i].addEventListener("click", () => {
        if (LIMIT == 1){
            audioBackgroundMusic.play();
            audioBackgroundMusic.loop = true;
            audioBackgroundMusic.volume = 0.1;
            LIMIT += 1;
        }
    
        if (icon[0].classList[1] == "fa-volume-xmark") {
            for(let i = 0; i < document.getElementsByClassName("sound").length; i++){
                icon[i].classList.replace("fa-volume-xmark", "fa-volume-high")
            }
            audioBackgroundMusic.muted = false;
        } else {
            for(let i = 0; i < document.getElementsByClassName("sound").length; i++){
                icon[i].classList.replace("fa-volume-high", "fa-volume-xmark")
            }
            audioBackgroundMusic.muted = true;
        }
    })
}


for (let i = 0; i < document.getElementsByClassName("button").length; i++){
    document.getElementsByClassName("button")[i].addEventListener("click", () => {
        audioClick.play();
    })
}

document.getElementById("start").addEventListener("click", () => {
    audioClick.play();
})

