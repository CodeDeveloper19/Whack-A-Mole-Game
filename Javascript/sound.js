let LIMIT = 1; // Allows the program to start playing the audio only once as there are other sound buttons
let audioBackgroundMusic = new Audio('/Sound Effects/backgroundmusic.mp3');
audioBackgroundMusic.volume = 0.1;
audioBackgroundMusic.loop = true;


let audioClick = new Audio('./Sound Effects/click.mp3');

let icon = document.getElementsByTagName("i");

for (let i = 0; i < document.getElementsByClassName("sound").length; i++ ){
    document.getElementsByClassName("sound")[i].addEventListener("mouseover", () => {
        document.getElementsByClassName("circle-image")[i].src = "./images/circle slab hover.svg";
    })
    
    document.getElementsByClassName("sound")[i].addEventListener("mouseout", () => {
        document.getElementsByClassName("circle-image")[i].src = "./images/circle slab.svg";
    })
    
    document.getElementsByClassName("sound")[i].addEventListener("click", () => {
        if (LIMIT == 1){
            audioBackgroundMusic.play();
            LIMIT += 1;
        }
    
        if (icon[2].classList[1] == "fa-volume-xmark") {
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


for (let i = 0; i < document.getElementsByClassName("click").length; i++){
    document.getElementsByClassName("click")[i].addEventListener("click", () => {
        audioClick.play();
    })
}

/*Sound Settings*/
let positionOfBall = [22.5, 220.5]

for(let i = 0; i < document.getElementsByClassName("reduce").length; i++){
    document.getElementsByClassName("increase")[i].addEventListener("click", () => {
        if (positionOfBall[i] < 220.5){
            positionOfBall[i] = positionOfBall[i] + 22;
            document.getElementsByClassName("circle")[i].style.left = positionOfBall[i].toString() + "px";
            audioClick.play();
            switch(i){
                case 0:
                    audioBackgroundMusic.volume = audioBackgroundMusic.volume + 0.1;
                    break;
                case 1:
                    audioClick.volume = audioClick.volume + 0.1;
                    break;
            }
        }
    })

    document.getElementsByClassName("reduce")[i].addEventListener("click", () => {
        if (positionOfBall[i] > 22.5){
            positionOfBall[i] = positionOfBall[i] - 22;
            document.getElementsByClassName("circle")[i].style.left = positionOfBall[i].toString() + "px";
            audioClick.play();
            switch(i){
                case 0:
                    audioBackgroundMusic.volume = audioBackgroundMusic.volume - 0.1;
                    break;
                case 1:
                    audioClick.volume = audioClick.volume - 0.1;
                    break;
            }
        }
    })
}

/*Sound Effects*/
document.getElementById("ball2").addEventListener("click", () => {
    if (audioClick.muted == false){
        audioClick.muted = true;
        document.getElementById("ball2").style.right = "39px";
        document.getElementById("ball2").src = "./Images/off.png";
    } else{
        audioClick.muted = false; 
        document.getElementById("ball2").style.right = "15px";
        document.getElementById("ball2").src = "./Images/on.png";
    }
})