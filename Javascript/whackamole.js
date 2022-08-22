let playy;
let pausee;

let counter = 0;
let isClicked = [false, false, false, false, false, false, false, false, false];

const mole = ["mole1", "mole2", "mole3", "mole4", "mole5", "mole6", "mole7", "mole8", "mole9"];
const x = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9"];

// for (let i = 0; i < 9; i++){
//     document.getElementById(mole[i]).addEventListener("click", () => {
//         isClicked[i] = true;
//         if (document.getElementById(mole[i]).style.visibility == "visible" && pausee != true){
//             counter += 1;
//             var audio1 = new Audio('/Sound Effects/splat.mp3');
//             audio1.play();
//             document.getElementById(mole[i]).style.animationName = "";
//             document.getElementById(x[i]).style.display = "flex";
//             setTimeout(()=>{
//                 document.getElementById(mole[i]).style.visibility = "hidden";
//                 document.getElementById(x[i]).style.display = "none";
//                 document.getElementById(mole[i]).style.animationName = "";
//                 isClicked[i] = false;
//             }, 300);
//         } 
//     })
// }

// const moles = (num) => {
//     let finalNum = num - 1;
//     document.getElementById(mole[finalNum]).style.visibility = "visible";
//     document.getElementById(mole[finalNum]).style.animationName = "mole-popping";

//     if (isClicked[finalNum] == false){
//         setTimeout(()=>{
//             document.getElementById(mole[finalNum]).style.animationName = "";
//             document.getElementById(mole[finalNum]).style.visibility = "hidden";
//         }, 1500)
//     }
// }


const popping = () => {
    let num;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    if (time > 0 && pausee != true){
        var value = arr[Math.floor(Math.random()*arr.length)]
    } 

switch (value){
    case 1:
        num = 1;
        moles(num);
        break;
    case 2:
        num = 2;
        moles(num);
        break;
    case 3:
        num = 3;
        moles(num);
        break;
    case 4:
        num = 4;
        moles(num);
        break;
    case 5:
        num = 5;
        moles(num);
        break;
    case 6:
        num = 6;
        moles(num);
        break;
    case 7:
        num = 7;
        moles(num);
        break;
    case 8:
        num = 8;
        moles(num);
        break;
    case 9:
        num = 9;
        moles(num);
        break;
}

document.getElementById("counter").innerHTML = counter;
document.getElementById("output").innerHTML = counter;
}

let counts, timeds, countingDown, difficulty, count, time, popss;
let countdown = 3;
let highscore = [];
let isClicked2 = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
let difficult = document.getElementById("difficulty");
let easy1 = document.getElementById("easy");
let medium1 = document.getElementById("medium");
let hard1 = document.getElementById("hard");
let thirty1 = document.getElementById("thirty");
let sixty1 = document.getElementById("sixty");
let onetwenty1 = document.getElementById("onetwenty");
let twoforty1 = document.getElementById("twoforty");
let oneeighty1 = document.getElementById("oneeighty");


const begin = () => {
    document.getElementById("timer").textContent = time;
    countingDown = setInterval(countDown, 1000);
    document.getElementById("delay").style.display = "flex";
    // timeds = setInterval(timer, 1000);
    // popss = setInterval(popping, 500); /* Use this to set how fast the mole will be spawned */ /*change back to number to "difficulty"*/
    document.getElementById("game").style.display = "flex";
    document.getElementById("introduction").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("instructions12").style.display = "none";
    // document.getElementById("results").style.display = "none";
    // selection(); /*This function set a difficulty level under the high scores*/
}
document.getElementById("begin").addEventListener("click", () => {
    if (count == undefined || counts == undefined){
        alert("Please select both a difficulty level and timelimit")
    } else {
        begin();
    }
})

const countDown = () => {
    setTimeout(()=>{
        countdown--;
        document.getElementById("countdown").textContent = countdown;
        if (countdown == 0){
            clearInterval(countingDown)
            setTimeout(()=>{
                document.getElementById("delay").style.display = "none";
                timeds = setInterval(timer, 1000);
            }, 1000)
        }
    }, 300)
}

document.getElementById("pause-container").addEventListener("click", () => {
    if (document.querySelector("#pause-container i").classList[1] == "fa-pause"){
        pausee = true;
        document.querySelector("#pause-container i").classList.replace("fa-pause", "fa-play");
    } else if (document.querySelector("#pause-container i").classList[1] == "fa-play"){
        pausee = false;
        document.querySelector("#pause-container i").classList.replace("fa-play", "fa-pause");
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
    difficulty = undefined;
    count = undefined;
    counts = undefined;
    time = undefined;
    counter = 0;
    countdown = 3; 
    clearInterval (timeds);
    document.getElementById("timer").textContent = "0";
    document.getElementById("countdown").textContent = "3";
    if (document.querySelector("#pause-container i").classList[1] == "fa-play"){
        pausee = false;
        document.querySelector("#pause-container i").classList.replace("fa-play", "fa-pause");
    }
}



const timer = () => {
    if (time > 0 && pausee != true) {
        time--;
        document.getElementById("timer").textContent = time;
    }
    if (time == 0) {
        clearInterval (timeds);
        document.getElementById("gameover").style.display = "flex";
        document.getElementById("score").textContent = 
        setTimeout(()=>{
            document.querySelector(".gameover h1").style.display = "flex";
            document.getElementsByClassName("gameover-content")[0].style.display = "flex";
            document.getElementsByClassName("gameoverbuttons")[0].style.display = "flex";

            setTimeout(() => {
                playerScoreAnimation();
            }, 200);

            setTimeout(()=>{
                highScoreAnimation();
            }, 400)

        }, 800)
    }
}

const playerScoreAnimation = () => {
    let score = 0;
    let playerScore = 20;

    let playerInterval = setInterval(()=>{
        if (score <= playerScore){
            document.getElementById("score").textContent = score;
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
            document.getElementById("highscore").textContent = score;
            score++;
        } else if (score > highScore){
            clearInterval(playerInterval);
        }
    }, 80)
}

const selection = () => {
    // switch(counts){
    //     case 1: 
    //         difficult.innerHTML = "(Easy)";
    //         break;
    //     case 2:
    //         difficult.innerHTML = "(Medium)";
    //         break;
    //     case 3:
    //         difficult.innerHTML = "(Hard)";
    //         break;
    // }
}
const menu = () => {
    reset();
    document.getElementById("instructions").style.display = "flex";
    document.getElementById("instructions-0").style.display = "none";
    document.getElementById("instructions12").style.display = "flex";
    document.getElementById("game").style.display = "none";

    for (let i = 0; i < document.getElementsByClassName("image").length; i++){
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png";
    }
}

document.getElementById("menu-container").addEventListener("click", () => {
    menu();
})

document.getElementById("menu").addEventListener("click", () => {
    menu();
    document.getElementById("gameover").style.display = "none";
})


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
  import { getDatabase, ref, get, set, child } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

  let listArray = [];
  let difficultyScores, difficultyNames;
  let number, name, scores, b;
  let index = 0;
  let n = 0;
  let difficultyScoreList;

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
    } else {
        document.getElementsByClassName("error-message")[0].style.height = "100%";
        document.querySelector(".error-message h3").textContent = "No data available";
    }
  }).catch((error) => {
    document.getElementsByClassName("error-message")[0].style.height = "100%";
    document.querySelector(".error-message h3").innerHTML = error.message;
  });


const constructLeaderboard = () => {
    for (let b = 0; b < 18; b++){
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
        } else if ((b % 3 == 2) && (Math.floor(b/3) < 6)){
            document.querySelectorAll(".title h1")[b].textContent = "(Easy)";
        } else if ((b % 3 == 2) && (((Math.floor(b/3) >= 6)) && ((Math.floor(b/3) < 12)))){
            document.querySelectorAll(".title h1")[b].textContent = "(Medium)";
        } else if ((b % 3 == 2) && (((Math.floor(b/3) >= 12)) && ((Math.floor(b/3) < 18)))){
            document.querySelectorAll(".title h1")[b].textContent = "(Hard)";
        } else if (b == 1 || b == 19 || b == 37){
            document.querySelectorAll(".title h1")[b].textContent = "30s";
        } else if (b == 4 || b == 22 || b == 40) {
            document.querySelectorAll(".title h1")[b].textContent = "60s";
        } else if (b == 7 || b == 25 || b == 43) {
            document.querySelectorAll(".title h1")[b].textContent = "120s";
        } else if (b == 10 || b == 28 || b == 46) {
            document.querySelectorAll(".title h1")[b].textContent = "180s";
        } else if (b == 13 || b == 31 || b == 49) {
            document.querySelectorAll(".title h1")[b].textContent = "240s";
         }else if (b == 16 || b == 34 || b == 52) {
            document.querySelectorAll(".title h1")[b].textContent = "360s";
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

const scoreSorting = (difficultyScoreList) => {
    difficultyScores = Object.keys(difficultyScoreList);
    difficultyScores.reverse(); //Reaarranges the scores from back to front instead
}

const nameSorting = (difficultyScoreList) => {
    difficultyNames = Object.values(difficultyScoreList);
    difficultyNames.reverse();  //Reaarranges the names from back to front instead
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
                            b = a + 60;
                        } else if (n == 2){
                            b = a + 120;
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
                        b = a + 70;
                    } else if (n == 2){
                        b = a + 130;
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
                        b = a + 80;
                    } else if (n == 2){
                        b = a + 140;
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
                        b = a + 90;
                    } else if (n == 2){
                        b = a + 150;
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
                        b = a + 100;
                    } else if (n == 2){
                        b = a + 160;
                    }
                    document.querySelectorAll(".scorer h5")[b].textContent = difficultyScores[a];
                    document.getElementsByClassName("name")[b].textContent = difficultyNames[a];
                }
                break;
            case 5:
                scoreSorting(difficultyScoreList[i]);
                nameSorting(difficultyScoreList[i]);
                for (let a = 0; a < difficultyScores.length; a++){
                    if (n == 0){
                        b = a + 50;
                    } else if (n == 1){
                        b = a + 110;
                    } else if (n == 2){
                        b = a + 170;
                    }
                    document.querySelectorAll(".scorer h5")[b].textContent = difficultyScores[a];
                    document.getElementsByClassName("name")[b].textContent = difficultyNames[a];
                }
                break;
        }
    }
    n++;
}


