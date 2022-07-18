let playy;
let pausee;

let counter = 0;
let isClicked = [false, false, false, false, false, false, false, false, false];

const mole = ["mole1", "mole2", "mole3", "mole4", "mole5", "mole6", "mole7", "mole8", "mole9"];
const x = ["x1", "x2", "x3", "x4", "x5", "x6", "x7", "x8", "x9"];

for (let i = 0; i < 9; i++){
    document.getElementById(mole[i]).addEventListener("click", () => {
        isClicked[i] = true;
        if (document.getElementById(mole[i]).style.visibility == "visible" && pausee != true){
            counter += 1;
            var audio1 = new Audio('/Sound Effects/splat.mp3');
            audio1.play();
            document.getElementById(mole[i]).style.animationName = "";
            document.getElementById(x[i]).style.display = "flex";
            setTimeout(()=>{
                document.getElementById(mole[i]).style.visibility = "hidden";
                document.getElementById(x[i]).style.display = "none";
                document.getElementById(mole[i]).style.animationName = "";
                isClicked[i] = false;
            }, 300);
        } 
    })
}

const moles = (num) => {
    let finalNum = num - 1;
    document.getElementById(mole[finalNum]).style.visibility = "visible";
    document.getElementById(mole[finalNum]).style.animationName = "mole-popping";

    if (isClicked[finalNum] == false){
        setTimeout(()=>{
            document.getElementById(mole[finalNum]).style.animationName = "";
            document.getElementById(mole[finalNum]).style.visibility = "hidden";
        }, 1500)
    }
}


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
    timeds = setInterval(timer, 1000);
    popss = setInterval(popping, 500); /* Use this to set how fast the mole will be spawned */ /*change back to number to "difficulty"*/
    document.getElementById("game").style.display = "flex";
    document.getElementById("introduction").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("instructions12").style.display = "none";
    document.getElementById("results").style.display = "none";
    selection(); /*This function set a difficulty level under the high scores*/
}
// document.getElementById("begin").addEventListener("click", () => {
//     if (count == undefined || counts == undefined){
//         alert("Please select both a difficulty level and timelimit")
//     } else {
//         begin();
//     }
// })

document.getElementById("pause").addEventListener("click", () => {
    pausee = true;
})

document.getElementById("play").addEventListener("click", () => {
    pausee = false;
})

document.getElementById("start").addEventListener("click", () => {
    document.getElementById("instructions").style.display = "flex";
    document.getElementById("introduction").style.display = "none";
})

document.getElementById("next").addEventListener("click", () => {
    document.getElementById("instructions1").style.display = "none";
    document.getElementById("instructions12").style.display = "flex";
})

document.getElementById("previous").addEventListener("click", () => {
    document.getElementById("instructions12").style.display = "none";
    document.getElementById("instructions1").style.display = "flex";
})

easy1.addEventListener("click", () => {
    easy1.classList.add("change");
    medium1.classList.remove("change");
    hard1.classList.remove("change");
    counts = 1;
    difficulty = 1000;
})

medium1.addEventListener("click", () => {
    easy1.classList.remove("change");
    medium1.classList.add("change");
    hard1.classList.remove("change");
    counts = 2;
    difficulty = 750;
})

hard1.addEventListener("click", () => {
    easy1.classList.remove("change");
    medium1.classList.remove("change");
    hard1.classList.add("change");
    counts = 3;
    difficulty = 350;
})

thirty1.addEventListener("click", () => {
    thirty1.classList.add("change");
    sixty1.classList.remove("change");
    onetwenty1.classList.remove("change");
    oneeighty1.classList.remove("change");
    twoforty1.classList.remove("change");
    count = 1;
    time = 30;
})

sixty1.addEventListener("click", () => {
    thirty1.classList.remove("change");
    sixty1.classList.add("change");
    onetwenty1.classList.remove("change");
    oneeighty1.classList.remove("change");
    twoforty1.classList.remove("change");
    count = 2;
    time = 60; 
})

onetwenty1.addEventListener("click", () => {
    thirty1.classList.remove("change");
    sixty1.classList.remove("change");
    onetwenty1.classList.add("change");
    oneeighty1.classList.remove("change");
    twoforty1.classList.remove("change");
    count = 3;
    time = 120; 
})

oneeighty1.addEventListener("click", () => {
    thirty1.classList.remove("change");
    sixty1.classList.remove("change");
    onetwenty1.classList.remove("change");
    oneeighty1.classList.add("change");
    twoforty1.classList.remove("change");
    count = 4;
    time = 180; 
})

twoforty1.addEventListener("click", () => {
    thirty1.classList.remove("change");
    sixty1.classList.remove("change");
    onetwenty1.classList.remove("change");
    oneeighty1.classList.remove("change");
    twoforty1.classList.add("change");
    count = 5;
    time = 240;
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

const mainmenu = () => {
    reset();
    document.getElementById("instructions").style.display = "flex";
    document.getElementById("instructions12").style.display = "flex";
}

document.getElementById("mainmenu").addEventListener("click", () => {
    mainmenu();
})

document.getElementById("mainmenu2").addEventListener("click", () => {
    mainmenu();
    clearInterval(timeds);
    clearInterval(popss);
})

document.getElementById("end").addEventListener("click", () => {
    reset();
    document.getElementById("introduction").style.display = "flex";
    document.getElementById("instructions").style.display = "flex";
    document.getElementById("instructions1").style.display = "flex";
})


const timer = () => {
    if (time > 0 && pausee != true) {
        time -=1;
        document.getElementById("timer").innerHTML = time;
    }
    if (time == 0) {
        clearInterval (timeds);
        clearInterval (popss);
        document.getElementById("results").style.display = "flex";
        highscores();
    }
}

document.getElementById("retry").addEventListener("click", () => {
    document.getElementById("results").style.display = "none";
    counter = 0;

    switch(count){
        case 1: 
            time = 30;
            break;
        case 2:
            time = 60;
            break;
        case 3:
            time = 120;
            break;
        case 4:
            time = 180;
            break;
        case 5:
            time = 240;
            break;
    }

    switch(counts){
        case 1: 
            difficulty = 1000;
            break;
        case 2:
            difficulty = 750;
            break;
        case 3:
            difficulty = 350;
            break;
    }

    begin();
})

const highscores = () => {
    highscore.push(counter);
    highscore = highscore.sort((a,b)=>b-a);

    const scores = ["score1", "score2", "score3", "score4", "score5", "score6", "score7", "score8", "score9", "score10"];

    for (let i = 0; i < scores.length; i++){
        if (highscore[i] != undefined){
            document.getElementById(scores[i]).innerHTML = highscore[i]
        }
    }
}

const selection = () => {
    switch(counts){
        case 1: 
            difficult.innerHTML = "(Easy)";
            break;
        case 2:
            difficult.innerHTML = "(Medium)";
            break;
        case 3:
            difficult.innerHTML = "(Hard)";
            break;
    }
}

/*Hovering of Button*/

for (let i = 0; i < document.getElementsByClassName("button").length; i++){
    document.getElementsByClassName("button")[i].addEventListener("mouseover", () => {
        document.getElementsByClassName("image")[i].src = "./images/slab hover.png";
    })
    
    document.getElementsByClassName("button")[i].addEventListener("mouseout", () => {
        document.getElementsByClassName("image")[i].src = "./images/normal slab.png";
    }) 
}


// document.getElementById("hard").childNodes[0].src = "./images/hole.png";

// alert(document.getElementById("hard").childNodes.length);

