// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, ref, get, update, child } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

let listArray = [];
let difficultyScores, difficultyNames, isOffline, difficultyScoreList, number, name, scores, b;
let index = 0, n = 0;

const firebaseConfig = {
  apiKey: "AIzaSyBXSptTREJ4JvPwhmwX1JdYcYBhgOrIVn8",
  authDomain: "whack-a-mole-9bdcc.firebaseapp.com",
  projectId: "whack-a-mole-9bdcc",
  storageBucket: "whack-a-mole-9bdcc.appspot.com",
  messagingSenderId: "774401565017",
  appId: "1:774401565017:web:3300cd36256d4afffdec48",
  measurementId: "G-RWN641EXW2"
};

const app = initializeApp(firebaseConfig);

const dbRef = ref(getDatabase());
get(child(dbRef, `/`)).then((snapshot) => {
  if (snapshot.exists()) {
      listArray = Object.values(snapshot.val());
      constructLeaderboard(listArray);
      isOffline = false;
  } else {
      document.getElementsByClassName("error-message")[0].style.height = "100%";
      document.querySelector(".error-message h3").textContent = "No data available";
  }
}).catch((error) => {
  document.getElementsByClassName("error-message")[0].style.height = "100%";
  document.querySelector(".error-message h3").innerHTML = error.message;
  console.log(error)
  isOffline = true;
});


const constructLeaderboard = () => {
  for (let b = 0; b < 15; b++){
      let score = document.createElement("div");
      score.className = "score";
      document.getElementsByClassName("scorer-main")[0].appendChild(score);

      for (let z = 0; z < 10; z++){
          let scorer = document.createElement("div");
          scorer.className = "scorer";
          document.getElementsByClassName("score")[b].appendChild(scorer);
      }

      let title = document.createElement("div");
      title.className = "title";
      document.getElementsByClassName("titles-main")[0].appendChild(title);

      for (let z = 0; z < 3; z++){
          let titles = document.createElement("h1");
          document.getElementsByClassName("title")[b].appendChild(titles);
      }
  }

  for (let b = 0; b < document.querySelectorAll(".title h1").length; b++){
      if (b % 3 == 0){
          document.querySelectorAll(".title h1")[b].textContent = "High Scores";
      } else if ((b % 3 == 2) && (Math.floor(b/3) < 5)){
          document.querySelectorAll(".title h1")[b].textContent = "(Easy)";
      } else if ((b % 3 == 2) && (((Math.floor(b/3) >= 5)) && ((Math.floor(b/3) < 10)))){  
          document.querySelectorAll(".title h1")[b].textContent = "(Medium)";
      } else if ((b % 3 == 2) && (((Math.floor(b/3) >= 10)) && ((Math.floor(b/3) < 15)))){
          document.querySelectorAll(".title h1")[b].textContent = "(Hard)";
      } else if (b == 1 || b == 16 || b == 31){
          document.querySelectorAll(".title h1")[b].textContent = "30s";
      } else if (b == 4 || b == 19 || b == 34) {
          document.querySelectorAll(".title h1")[b].textContent = "60s";
      } else if (b == 7 || b == 22 || b == 37) {
          document.querySelectorAll(".title h1")[b].textContent = "120s";
      } else if (b == 10 || b == 25 || b == 40) {
          document.querySelectorAll(".title h1")[b].textContent = "180s";
      } else if (b == 13 || b == 28 || b == 43) {
          document.querySelectorAll(".title h1")[b].textContent = "240s";
       }
  }

  for (let a = 0; a < document.getElementsByClassName("scorer").length; a++){  
      number =  document.createElement("h4");  
      if (a % 10 == 0){
        index = 0; 
      }
      number.innerHTML = index + 1;
      document.getElementsByClassName("scorer")[a].appendChild(number);

      name = document.createElement("h4");
      name.className = "name";
      document.getElementsByClassName("scorer")[a].appendChild(name);

      scores = document.createElement("h5");
      document.getElementsByClassName("scorer")[a].appendChild(scores);
      index++;
  }

  for (let i = 0; i < listArray.length; i++){
      attachListToBoard(listArray[i])
  }
}

const attachListToBoard = (listArray) => {
    difficultyScoreList = Object.values(listArray);
    overallSorting(difficultyScoreList);
}

const overallSorting = (difficultyScoreList) => {
    for (let i = 0; i < difficultyScoreList.length; i++){
        switch (i){
            case 0:
                scoreSorting(difficultyScoreList[i]);
                nameSorting(difficultyScoreList[i]);
                    for (let a = 0; a < difficultyScores.length; a++){
                        if (n == 0){
                            b = a;
                        } else if (n == 1){
                            b = a + 50;
                        } else if (n == 2){
                            b = a + 100;
                        }
                        document.querySelectorAll(".scorer h5")[b].textContent = difficultyScores[a];
                        document.getElementsByClassName("name")[b].textContent = difficultyNames[a];
                    }
                break;
            case 1:
                scoreSorting(difficultyScoreList[i]);
                nameSorting(difficultyScoreList[i]);
                for (let a = 0; a < difficultyScores.length; a++){
                    if (n == 0){
                        b = a + 10;
                    } else if (n == 1){
                        b = a + 60;
                    } else if (n == 2){
                        b = a + 110;
                    }
                    document.querySelectorAll(".scorer h5")[b].textContent = difficultyScores[a];
                    document.getElementsByClassName("name")[b].textContent = difficultyNames[a];
                }
                break;
            case 2:
                scoreSorting(difficultyScoreList[i]);
                nameSorting(difficultyScoreList[i]);
                for (let a = 0; a < difficultyScores.length; a++){
                    if (n == 0){
                        b = a + 20;
                    } else if (n == 1){
                        b = a + 70;
                    } else if (n == 2){
                        b = a + 120;
                    }
                    document.querySelectorAll(".scorer h5")[b].textContent = difficultyScores[a];
                    document.getElementsByClassName("name")[b].textContent = difficultyNames[a];
                }
                break;
            case 3:
                scoreSorting(difficultyScoreList[i]);
                nameSorting(difficultyScoreList[i]);
                for (let a = 0; a < difficultyScores.length; a++){
                    if (n == 0){
                        b = a + 30;
                    } else if (n == 1){
                        b = a + 80;
                    } else if (n == 2){
                        b = a + 130;
                    }
                    document.querySelectorAll(".scorer h5")[b].textContent = difficultyScores[a];
                    document.getElementsByClassName("name")[b].textContent = difficultyNames[a];
                }
                break;
            case 4:
                scoreSorting(difficultyScoreList[i]);
                nameSorting(difficultyScoreList[i]);
                for (let a = 0; a < difficultyScores.length; a++){
                    if (n == 0){
                        b = a + 40;
                    } else if (n == 1){
                        b = a + 90;
                    } else if (n == 2){
                        b = a + 140;
                    }
                    document.querySelectorAll(".scorer h5")[b].textContent = difficultyScores[a];
                    document.getElementsByClassName("name")[b].textContent = difficultyNames[a];
                }
                break;
        }
    }
    n++;
}

const scoreSorting = (difficultyScoreList) => {
  difficultyScores = Object.keys(difficultyScoreList);
  difficultyScores.reverse(); //Reaarranges the scores from back to front instead
}

const nameSorting = (difficultyScoreList) => {
  difficultyNames = Object.values(difficultyScoreList);
  difficultyNames.reverse();  //Reaarranges the names from back to front instead
}

/*Sound System*/

let LIMIT = 1; // Allows the program to start playing the audio only once as there are other sound buttons
let audioBackgroundMusic = new Audio('/Sound Effects/backgroundmusic.mp3');
audioBackgroundMusic.volume = 0.02;
audioBackgroundMusic.loop = true;

let audioGameOver =  new Audio('./Sound Effects/Gameover.mp3'), audioVictory = new Audio("./Sound Effects/victory.mp3"), audioClick = new Audio('./Sound Effects/click.mp3');


let icon = document.getElementsByTagName("i");

document.getElementById("start").addEventListener("click", () => {
    document.getElementById("instructions").style.display = "flex";
    document.getElementById("introduction").style.display = "none";
    
    if (LIMIT == 1){
        audioBackgroundMusic.play();
        LIMIT += 1;
    }
})

// let aCtx = new AudioContext(); // here is the real audioBuffer to sound part


// let xhr = new XMLHttpRequest();
// xhr.onload = function() {
//   aCtx.decodeAudioData(this.response, ondecoded);
// };
// xhr.responseType = 'arraybuffer';
// xhr.open('get', './Sound Effects/ES_Video Game Score Tally.mp3');
// xhr.send();

// const ondecoded = (buf) => {
//     let source = aCtx.createBufferSource();
//     source.buffer = buf;
//     source.loop = true;
//     source.connect(aCtx.destination);
//     source.start(0);
//     let tempInterval = setInterval(()=>{
//         if (isStillCounting == false){
//             source.stop(0);
//             clearInterval(tempInterval);
//         }
//     }, 10)
// }    

for (let i = 0; i < document.getElementsByClassName("circle-sound").length; i++){
    document.getElementsByClassName("circle-sound")[i].addEventListener("mouseover", () => {
        document.getElementsByClassName("circle-image")[i].src = "./images/circle slab hover.svg";
    })
    
    document.getElementsByClassName("circle-sound")[i].addEventListener("mouseout", () => {
        document.getElementsByClassName("circle-image")[i].src = "./images/circle slab.svg";
    })
}

for (let i = 0; i < document.getElementsByClassName("sound").length; i++ ){    
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



/*Game Logic and Mechanics*/
let counts, timeds, countingDown, difficulty, count, time, popss, highScore, scoreArray, scorePosition, playerName, alphabet, playerScore;
let arrayOfScores, arrayOfNames;
let newArrayOfNamesAndScores = {};
let difficultySetting = document.getElementById("difficultysetting");
let timeSetting = document.getElementById("timesetting");
let easy1 = document.getElementById("easy");
let medium1 = document.getElementById("medium");
let hard1 = document.getElementById("hard");
let thirty1 = document.getElementById("thirty");
let sixty1 = document.getElementById("sixty");
let onetwenty1 = document.getElementById("onetwenty");
let twoforty1 = document.getElementById("twoforty");
let oneeighty1 = document.getElementById("oneeighty");
let ranking = document.getElementById("ranking");
let isPaused = false, isStillCounting = true;
let counter = 0, countdown = 3, score = 0;
let isClicked = [false, false, false, false, false, false, false, false, false], isClicked2 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];

for (let i = 0; i < 9; i++){
    document.getElementsByClassName("mole")[i].addEventListener("click", () => {
        isClicked[i] = true;
        if (document.getElementsByClassName("mole")[i].classList[1] == "mole-popping" && isPaused != true){
            counter += 1;
            document.getElementById("counter").textContent = counter;
            moleDieingSound();
            document.getElementsByClassName("mole")[i].classList.remove("mole-popping");
            document.getElementsByClassName("x")[i].style.display = "flex";
            setTimeout(()=>{
                document.getElementsByClassName("mole")[i].style.visibility = "hidden";
                document.getElementsByClassName("x")[i].style.display = "none";
                isClicked[i] = false;
            }, 300);
        } 
    })
}


const moles = (value) => {
    document.getElementsByClassName("mole")[value].classList.add("mole-popping");

    if (isClicked[value] == false){
        setTimeout(()=>{
            document.getElementsByClassName("mole")[value].classList.remove("mole-popping");
        }, 1500)
    }
}


const popping = () => {
    let value, tempvalue;
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    
    if (time > 0 && isPaused != true){
        tempvalue = arr[Math.floor(Math.random()*arr.length)];
        if (tempvalue != value){
            value = tempvalue;
        } else {
            tempvalue = arr[Math.floor(Math.random()*arr.length)];
            value = tempvalue;
        }
    }

    switch (value){
        case 0:
            moles(value);
            break;
        case 1:
            moles(value);
            break;
        case 2:
            moles(value);
            break;
        case 3:
            moles(value);
            break;
        case 4:
            moles(value);
            break;
        case 5:
            moles(value);
            break;
        case 6:
            moles(value);
            break;
        case 7:
            moles(value);
            break;
        case 8:
            moles(value);
            break;
    }
}

const begin = () => {
    audioGameOver.muted = false;
    document.getElementById("counter").textContent = 0;
    document.getElementById("timer").textContent = time;
    countingDown = setInterval(countDown, 1000);
    document.getElementById("delay").style.display = "flex";
    document.getElementById("game").style.display = "flex";
    document.getElementById("introduction").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("instructions12").style.display = "none";
}

const countDown = () => {
    setTimeout(()=>{
        countdown--;
        document.getElementById("countdown").textContent = countdown;
        if (countdown == 0){
            clearInterval(countingDown);
            setTimeout(()=>{
                document.getElementById("delay").style.display = "none";
                timeds = setInterval(timer, 1000);
                popss = setInterval(popping, difficulty);
            }, 1000)
        }
    }, 300)
}

const pause = () => {
    if (document.querySelector("#pause-container i").classList[1] == "fa-pause"){
        isPaused = true;
        document.querySelector("#pause-container i").classList.replace("fa-pause", "fa-play");
    } else if (document.querySelector("#pause-container i").classList[1] == "fa-play"){
        isPaused = false;
        document.querySelector("#pause-container i").classList.replace("fa-play", "fa-pause");
    }
}

const selectHighScore = (listArray) => {
    switch(counts){
        case 1:
            selectHighScoreAsTime(Object.values(listArray[0]));
            break;
        case 2:
            selectHighScoreAsTime(Object.values(listArray[1]));
            break;
        case 3:
            selectHighScoreAsTime(Object.values(listArray[2]));
            break;
    }
}

const selectHighScoreAsTime = (v) => {
    switch(count){
        case 1:
            highScore = Object.keys(v[0])[0];
            break;
        case 2:
            highScore = Object.keys(v[1])[0];
            break;
        case 3:
            highScore = Object.keys(v[2])[0];
            break;
        case 4:
            highScore = Object.keys(v[3])[0];
            break;
        case 5:
            highScore = Object.keys(v[4])[0];
            break;
    }
}

document.getElementById("begin").addEventListener("click", () => {
    if (count == undefined || counts == undefined){
        alert("Please select both a difficulty level and timelimit")
    } else {
        if (isOffline){
            highScore = null;
        } else if (isOffline == false){
            selectHighScore(listArray);
        }
        begin();
    }
})

document.getElementById("pause-container").addEventListener("click", () => {
    pause();
})

document.getElementById("settings-container").addEventListener("click", () => {
    if (isPaused == false){
        pause();
    }
    document.getElementById("settings").style.display = "flex";
})

document.getElementById("info-container").addEventListener("click", () => {
    if (isPaused == false){
        pause();
    }
})

/*This is for the buttons that are option for the difficulty*/
for (let i = 1; i < 4; i++){
document.getElementsByClassName("button")[i].addEventListener("mouseover", () => {
    document.getElementsByClassName("image")[i].src = "./Images/slab hover.png";
})

document.getElementsByClassName("button")[i].addEventListener("mouseout", () => {
    if ((!difficulty)){ 
    document.getElementsByClassName("image")[i].src = "./Images/normal slab.png";
    } else if (difficulty && isClicked2[i] == false) {
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png";
    }
}) 
}

/*This is for the buttons that are the options for time*/
for (let i = 4; i < 9; i++){
document.getElementsByClassName("button")[i].addEventListener("mouseover", () => {
    document.getElementsByClassName("image")[i].src = "./Images/slab hover.png";
})

document.getElementsByClassName("button")[i].addEventListener("mouseout", () => {
    if ((!time)){ 
    document.getElementsByClassName("image")[i].src = "./Images/normal slab.png";
    } else if (time && isClicked2[i] == false) {
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png";
    }
}) 
}

easy1.addEventListener("click", () => {
    counts = 1;
    difficulty = 1000;
    for(let i = 1; i < 4; i++){
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png"; 
        isClicked2[i] = false;
    }
    document.getElementsByClassName("image")[counts].src = "./Images/slab hover.png";
    isClicked2[counts] = true;
})

medium1.addEventListener("click", () => {
    counts = 2;
    difficulty = 750;
    for(let i = 1; i < 4; i++){
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png"; 
        isClicked2[i] = false;
    }
    document.getElementsByClassName("image")[counts].src = "./Images/slab hover.png";
    isClicked2[counts] = true;      
})

hard1.addEventListener("click", () => {
    counts = 3;
    difficulty = 350;
    for(let i = 1; i < 4; i++){
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png"; 
        isClicked2[i] = false;
    }
    document.getElementsByClassName("image")[counts].src = "./Images/slab hover.png";
    isClicked2[counts] = true; 
})

thirty1.addEventListener("click", () => {
    count = 1;
    time = 30;
    for(let i = 4; i < 9; i++){
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png"; 
        isClicked2[i] = false;
    }
    document.getElementsByClassName("image")[count + 3].src = "./Images/slab hover.png";
    isClicked2[count + 3] = true; 
})

sixty1.addEventListener("click", () => {
    count = 2;
    time = 60;
    for(let i = 4; i < 9; i++){
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png"; 
        isClicked2[i] = false;
    }
    document.getElementsByClassName("image")[count + 3].src = "./Images/slab hover.png";
    isClicked2[count + 3] = true;     
})

onetwenty1.addEventListener("click", () => {
    count = 3;
    time = 120;
    for(let i = 4; i < 9; i++){
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png"; 
        isClicked2[i] = false;
    }
    document.getElementsByClassName("image")[count + 3].src = "./Images/slab hover.png";
    isClicked2[count + 3] = true;     
})

oneeighty1.addEventListener("click", () => {
    count = 4;
    time = 180;
    for(let i = 4; i < 9; i++){
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png"; 
        isClicked2[i] = false;
    }
    document.getElementsByClassName("image")[count + 3].src = "./Images/slab hover.png";
    isClicked2[count + 3] = true;     
})

twoforty1.addEventListener("click", () => {
    count = 5;
    time = 240;
    for(let i = 4; i < 9; i++){
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png"; 
        isClicked2[i] = false;
    }
    document.getElementsByClassName("image")[count + 3].src = "./Images/slab hover.png";
    isClicked2[count + 3] = true; 
})

const reset = () => {
    counter = 0;
    countdown = 3; 
    clearInterval(timeds);
    clearInterval(popss);
    document.getElementById("score").textContent = "0";
    document.getElementById("countdown").textContent = "3";
    document.getElementById("timer").textContent = "0";
    document.getElementById("highscore").textContent = "0";
    for(let i = 0; i < document.getElementsByClassName("g-option").length; i++){
        document.getElementsByClassName("g-option")[i].classList.remove("fadein");
    }
    if (document.querySelector("#pause-container i").classList[1] == "fa-play"){
        isPaused = false;
        document.querySelector("#pause-container i").classList.replace("fa-play", "fa-pause");
    }
}

const moleDieingSound = () => {
    let audio1 = new Audio('/Sound Effects/splat.mp3');
    // audio1.volume = 0.2;
    audio1.play();
}

const gameOverAnimation = () => { 
    setTimeout(()=>{
        document.getElementById("gameover").style.display = "flex";
    }, 200)
    setTimeout(()=>{
        document.querySelector(".gameover h1").style.display = "flex";
        document.getElementsByClassName("gameoverbuttons")[0].style.display = "flex";
        document.querySelector(".gameover h1").classList.add("blinking");
        setTimeout(()=>{
            document.querySelector(".gameover h1").classList.remove("blinking");
            document.getElementsByClassName("gameoverscore")[0].classList.add("fadein");
            playerScoreAnimation();
            setTimeout(()=>{
                document.getElementsByClassName("gameoverhighscore")[0].classList.add("fadein");
                highScoreAnimation();
                setTimeout(()=>{
                    document.getElementsByClassName("gameoverdifficulty")[0].classList.add("fadein");
                    setTimeout(()=>{
                        document.getElementsByClassName("gameovertime")[0].classList.add("fadein");
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1500)
}

const gameOver = () => {
    if (document.getElementById("counter").innerHTML < highScore || isOffline == true){
        audioGameOver.play();
        gameOverAnimation();
    } else if (document.getElementById("counter").innerHTML > highScore){
        audioVictory.play();
        gameOverAnimation();
        checkLeaderboard();
        document.getElementById("second-score").innerHTML = document.getElementById("counter").innerHTML;
        setTimeout(() => {
            document.getElementById("congratulations").style.display = "flex";
        }, 7000);
    }
}

const timer = () => {
    if (time > 0 && !isPaused) {
        document.getElementById("timer").textContent = time;
        time--;
    }
    if (time == 0) {
        clearInterval(timeds);
        clearInterval(popss);
        selection();
        gameOver();
    }
}

const checkLeaderboard = () => {
    switch(counts){
        case 1:
            getScoreList(Object.values(listArray[0]));
            break;
        case 2:
            getScoreList(Object.values(listArray[1]));
            break;
        case 3:
            getScoreList(Object.values(listArray[2]));
            break;
    }
}

const getScoreList = (v) => {
    switch(count){
        case 1:
            scoreArray = Object.keys(v[0]);
            isBigger(scoreArray);
            break;
        case 2:
            scoreArray = Object.keys(v[1]);
            isBigger(scoreArray);
            break;
        case 3:
            scoreArray = Object.keys(v[2]);
            isBigger(scoreArray);
            break;
        case 4:
            scoreArray = Object.keys(v[3]);
            isBigger(scoreArray);
            break;
        case 5:
            scoreArray = Object.keys(v[4]);
            isBigger(scoreArray);
            break;
    }
}

const isBigger = (scoreArray) => {
    scoreArray.reverse();
    for (let i = 0; i < scoreArray.length; i++){
        if (parseFloat(document.getElementById("counter").innerHTML) >= parseFloat(scoreArray[i])){
            scorePosition = i;
            assignRanking(scorePosition);
            break;
        }
    }
}
 
const assignRanking = (scorePosition) => {
    switch(scorePosition){
        case 0:
            ranking.textContent = "1st";
            break;
        case 1:
            ranking.textContent = "2nd";
            break;
        case 2:
            ranking.textContent = "3rd";
            break;
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            ranking.textContent = `${scorePosition + 1}th`;
            break;
    }
}

const retrieveScoreAndNames = () => {
    playerScore = document.getElementById("counter").textContent; 
    const dbRef = ref(getDatabase());
    get(child(dbRef, '/' + counts + '/'+ alphabet)).then((snapshot) => {
    if (snapshot.exists()) {
        arrayOfNames = Object.values(snapshot.val());
        arrayOfScores = Object.keys(snapshot.val());
        insertScoreAndName();
        createNewJSON();
        updateDatabase();
        updateUserTable();
    }
    }).catch((error) => {
        console.log(error);
    });
}

const insertScoreAndName = () => {
    arrayOfNames.reverse();
    arrayOfScores.reverse();
    arrayOfScores.splice(scorePosition, 1, playerScore);
    arrayOfNames.splice(scorePosition, 1, playerName);
}

const createNewJSON = () => {
    for (let i = 0; i < arrayOfScores.length; i++) {
        newArrayOfNamesAndScores[arrayOfScores[i]] = arrayOfNames[i];
    }
}

const updateDatabase = () => {
    const db = getDatabase();
    const updates = {};
    updates['/' + counts + '/' + alphabet] = newArrayOfNamesAndScores;
    return update(ref(db), updates);
}

const updateUserTable = () => {
    console.log("A work in progress")
}

const playerScoreAnimation = () => {
    setTimeout(() => {
        // ondecoded();
        let playerInterval = setInterval(()=>{
            if (score <= document.getElementById("counter").innerHTML){
                document.getElementById("score").textContent = score;
                score++;
            } else if (score > document.getElementById("counter").innerHTML){
                score = 0;
                clearInterval(playerInterval);
                if (isStillCounting != false && highScore < document.getElementById("counter").innerHTML){
                    isStillCounting = false;
                }
            }
        }, 100)
    }, 200);
}

const highScoreAnimation = () => {
    setTimeout(()=>{
        if (highScore == null){
            document.getElementById("highscore").textContent = "-";
        } else {
            let playerInterval = setInterval(()=>{
                if (score <= highScore){
                    document.getElementById("highscore").textContent = score;
                    score++;
                } else if (score > highScore){
                    score = 0;
                    clearInterval(playerInterval);
                    if (isStillCounting != false && highScore > document.getElementById("counter").innerHTML){
                        isStillCounting = false;
                    }
                }
            }, 100)
        }
    }, 400)
}

const menu = () => {
    reset();
    difficulty = undefined;
    count = undefined;
    counts = undefined;
    time = undefined;
    document.getElementById("instructions").style.display = "flex";
    document.getElementById("instructions-0").style.display = "none";
    document.getElementById("instructions12").style.display = "flex";
    document.getElementById("game").style.display = "none";

    for (let i = 0; i < document.getElementsByClassName("image").length; i++){
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png";
    }
}

const selection = () => {
    switch(counts){
        case 1:
            difficultySetting.innerHTML = "Easy";
            break;
        case 2:
            difficultySetting.innerHTML = "Medium";
            break;
        case 3:
            difficultySetting.innerHTML = "Hard";
            break;
    }

    switch(count){
        case 1:
            timeSetting.innerHTML = "30s";
            alphabet = "A";
            break;
        case 2:
            timeSetting.innerHTML = "60s";
            alphabet = "B";
            break;
        case 3:
            timeSetting.innerHTML = "120s";
            alphabet = "C";
            break;
        case 4:
            timeSetting.innerHTML = "180s";
            alphabet = "D";
            break;
        case 5:
            timeSetting.innerHTML = "240s";
            alphabet = "E";
            break;
    }
}

document.getElementById("menu-container").addEventListener("click", () => {
    menu();
})

document.getElementById("playagain").addEventListener("click", () => {
    document.getElementById("gameover").style.display = "none";
    switch(count){
        case 1:
            time = 30;
            break;
        case 2:
            time = 60;
        case 3:
            time = 120;
            break;
        case 4:
            time = 18;
            break;
        case 5:
            time = 240;
            break;
    }
    reset();
    begin();
})

document.getElementById("menu").addEventListener("click", () => {
    menu();
    document.getElementById("gameover").style.display = "none";
})

document.getElementsByClassName("sure")[0].addEventListener("click", () => {
    document.getElementById("congratulations").style.display = "none";
    document.getElementsByClassName("congratulation-list")[0].style.left = "0%";
    playerName = document.getElementById("playername").value;
    retrieveScoreAndNames();
})