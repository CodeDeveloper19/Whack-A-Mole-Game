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

let time; /* Use this to set timelimit*/
let count;
let difficulty;  /* Use this to set how fast the mole will be spawned (difficulty*/
let counts;
let timeds;
let highscore = [];
let popss;
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
    // timeds = setInterval(timer, 1000);
    // popss = setInterval(popping, 500); /* Use this to set how fast the mole will be spawned */ /*change back to number to "difficulty"*/
    document.getElementById("game").style.display = "flex";
    document.getElementById("introduction").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("instructions12").style.display = "none";
    // document.getElementById("results").style.display = "none";
    selection(); /*This function set a difficulty level under the high scores*/
    difficulty = undefined; //refreshes the selections of the game options when clicking the menu button
    time = undefined; //refreshes the selections of the game options when clicking the menu button
    count = undefined; //refreshes the selections of the game options when clicking the menu button
    counts = undefined; //refreshes the selections of the game options when clicking the menu button
}
document.getElementById("begin").addEventListener("click", () => {
    if (count == undefined || counts == undefined){
        alert("Please select both a difficulty level and timelimit")
    } else {
        begin();
    }
})

// document.getElementById("pause").addEventListener("click", () => {
//     pausee = true;
// })

// document.getElementById("play").addEventListener("click", () => {
//     pausee = false;
// })

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
    const scores = ["score1", "score2", "score3", "score4", "score5", "score6", "score7", "score8", "score9", "score10"];
    const timeAndDifficulty = [thirty1, sixty1, onetwenty1, oneeighty1, twoforty1, easy1, medium1, hard1];

    for(let i = 0; i < scores.length; i++){
        document.getElementById(scores[i]).innerHTML = ""; 
    }

    for (let i = 0; i < timeAndDifficulty.length; i++){
        timeAndDifficulty[i].classList.remove("change");
    }

    highscore = [];
}

// const mainmenu = () => {
//     reset();
//     document.getElementById("instructions").style.display = "flex";
//     document.getElementById("instructions12").style.display = "flex";
// }

// document.getElementById("mainmenu").addEventListener("click", () => {
//     mainmenu();
// })

// document.getElementById("mainmenu2").addEventListener("click", () => {
//     mainmenu();
//     clearInterval(timeds);
//     clearInterval(popss);
// })

// document.getElementById("end").addEventListener("click", () => {
//     reset();
//     document.getElementById("introduction").style.display = "flex";
//     document.getElementById("instructions").style.display = "flex";
//     document.getElementById("instructions1").style.display = "flex";
// })


// const timer = () => {
//     if (time > 0 && pausee != true) {
//         time -=1;
//         document.getElementById("timer").innerHTML = time;
//     }
//     if (time == 0) {
//         clearInterval (timeds);
//         clearInterval (popss);
//         document.getElementById("results").style.display = "flex";
//         highscores();
//     }
// }

// document.getElementById("retry").addEventListener("click", () => {
//     document.getElementById("results").style.display = "none";
//     counter = 0;

//     switch(count){
//         case 1: 
//             time = 30;
//             break;
//         case 2:
//             time = 60;
//             break;
//         case 3:
//             time = 120;
//             break;
//         case 4:
//             time = 180;
//             break;
//         case 5:
//             time = 240;
//             break;
//     }

//     switch(counts){
//         case 1: 
//             difficulty = 1000;
//             break;
//         case 2:
//             difficulty = 750;
//             break;
//         case 3:
//             difficulty = 350;
//             break;
//     }

//     begin();
// })

// const highscores = () => {
//     highscore.push(counter);
//     highscore = highscore.sort((a,b)=>b-a);

//     const scores = ["score1", "score2", "score3", "score4", "score5", "score6", "score7", "score8", "score9", "score10"];

//     for (let i = 0; i < scores.length; i++){
//         if (highscore[i] != undefined){
//             document.getElementById(scores[i]).innerHTML = highscore[i]
//         }
//     }
// }

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

const scoreSorting = (d) => {
    difficultyScores = Object.keys(d);
    difficultyScores.reverse(); //Reaarranges the scores from back to front instead
}

const nameSorting = (d) => {
    difficultyNames = Object.values(d);
    difficultyNames.reverse();  //Reaarranges the names from back to front instead
}

const attachListToBoard = (v) => {
    difficultyScoreList = Object.values(v);
    overallSorting(difficultyScoreList);
}


const overallSorting = (d) => {
    for (let i = 0; i < difficultyScoreList.length; i++){
        switch (i){
            case 0:
                scoreSorting(d[i]);
                nameSorting(d[i]);
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
                scoreSorting(d[i]);
                nameSorting(d[i]);
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
                scoreSorting(d[i]);
                nameSorting(d[i]);
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
                scoreSorting(d[i]);
                nameSorting(d[i]);
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
                scoreSorting(d[i]);
                nameSorting(d[i]);
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
                scoreSorting(d[i]);
                nameSorting(d[i]);
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


