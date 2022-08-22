let LIMIT = 1; // Allows the program to start playing the audio only once as there are other sound buttons
let audioBackgroundMusic = new Audio('/Sound Effects/backgroundmusic.mp3');
audioBackgroundMusic.volume = 0.02;
audioBackgroundMusic.loop = true;

let audioClick = new Audio('./Sound Effects/click.mp3');
let audioGameOver =  new Audio('./Sound Effects/Gameover.mp3');

let aCtx = new AudioContext(); // here is the real audioBuffer to sound part
let icon = document.getElementsByTagName("i");

document.getElementById("start").addEventListener("click", () => {
    document.getElementById("instructions").style.display = "flex";
    document.getElementById("introduction").style.display = "none";
    
    if (LIMIT == 1){
        audioBackgroundMusic.play();
        // audioPointCounting.play();
        LIMIT += 1;
    }
})

let xhr = new XMLHttpRequest();
xhr.onload = function() {
  aCtx.decodeAudioData(this.response, ondecoded);
};
xhr.onerror = console.log("File Not Found");
xhr.responseType = 'arraybuffer';
xhr.open('get', './Sound Effects/ES_Video Game Score Tally.mp3');
xhr.send();

function ondecoded(buf) {
    var source = aCtx.createBufferSource();
    source.buffer = buf;
    source.loop = true;
    source.connect(aCtx.destination);
    source.start(0);
}    

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
            for(let i = 2; i < 7; i++){
                icon[i].classList.replace("fa-volume-xmark", "fa-volume-high");
            }
            audioBackgroundMusic.muted = false;
        } else {
            for(let i = 2; i < 7; i++){
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
                    audioBackgroundMusic.volume = audioBackgroundMusic.volume + 0.02;
                    break;
                case 1:
                    audioClick.volume = audioClick.volume + 0.1;
                    audioGameOver.volume = audioGameOver.volume + 0.1;
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
                    audioBackgroundMusic.volume = audioBackgroundMusic.volume - 0.02;
                    break;
                case 1:
                    audioClick.volume = audioClick.volume + 0.1;
                    audioGameOver.volume = audioGameOver.volume - 0.1;
                    break;
            }
        }
    })
}

/*Gameover Sounds*/
let timeds, time, pausee;

document.getElementById("pause-container").addEventListener("click", () => {
    if (document.querySelector("#pause-container i").classList[1] == "fa-pause"){
        pausee = true;
    } else if (document.querySelector("#pause-container i").classList[1] == "fa-play"){
        pausee = false;
    }
})

document.getElementById("begin").addEventListener("click", () => {
    setTimeout(()=>{
        time = document.getElementById("timer").innerHTML;
    }, 1000)        
    setTimeout(()=>{
        audioGameOver.muted = false;
        timeds = setInterval(timer, 1000);
    }, 4300)
})

const timer = () => {
    if (time > 0 && !pausee) {
        time--;
    }
    if (time == 0) {
        audioGameOver.play();
        setTimeout(()=>{
            setTimeout(() => {
                ondecoded();
                playerScoreAnimation();
            }, 200);

            setTimeout(()=>{
                highScoreAnimation();
            }, 400)
        }, 800)
        clearInterval(timeds);
    }
}

const playerScoreAnimation = () => {
    let score = 0;
    let playerScore = 20;

    let playerInterval = setInterval(()=>{
        if (score <= playerScore){
            score++;
        } else if (score > playerScore){
            clearInterval(playerInterval);
        }
    }, 80)
}

const highScoreAnimation = () => {
    let score = 0;
    let highScore = 40;

    let playerInterval = setInterval(()=>{
        if (score <= highScore){
            score++;
        } else if (score > highScore){
            clearInterval(playerInterval);
        }
    }, 80)
}

/*Sound Effects*/
document.getElementById("ball2").addEventListener("click", () => {
    if (audioClick.muted == false || audioGameOver.muted == false){
        audioClick.muted = true;
        audioGameOver.muted = true;
        document.getElementById("ball2").style.right = "39px";
        document.getElementById("ball2").src = "./Images/off.png";
    } else{
        audioClick.muted = false;
        audioGameOver.muted = false;
        document.getElementById("ball2").style.right = "15px";
        document.getElementById("ball2").src = "./Images/on.png";
    }
})
