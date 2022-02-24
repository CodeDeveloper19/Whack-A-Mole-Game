var playy;
var pausee;

function mole1() {
    document.getElementById("mole1").style.visibility = "visible";
    document.getElementById("mole2").style.visibility = "hidden";
    document.getElementById("mole3").style.visibility = "hidden";
    document.getElementById("mole4").style.visibility = "hidden";
    document.getElementById("mole5").style.visibility = "hidden";
    document.getElementById("mole6").style.visibility = "hidden";
    document.getElementById("mole7").style.visibility = "hidden";
    document.getElementById("mole8").style.visibility = "hidden";
    document.getElementById("mole9").style.visibility = "hidden";
} 
function mole2() {
    document.getElementById("mole1").style.visibility = "hidden";
    document.getElementById("mole2").style.visibility = "visible";
    document.getElementById("mole3").style.visibility = "hidden";
    document.getElementById("mole4").style.visibility = "hidden";
    document.getElementById("mole5").style.visibility = "hidden";
    document.getElementById("mole6").style.visibility = "hidden";
    document.getElementById("mole7").style.visibility = "hidden";
    document.getElementById("mole8").style.visibility = "hidden";
    document.getElementById("mole9").style.visibility = "hidden";
} 
function mole3() {
    document.getElementById("mole1").style.visibility = "hidden";
    document.getElementById("mole2").style.visibility = "hidden";
    document.getElementById("mole3").style.visibility = "visible";
    document.getElementById("mole4").style.visibility = "hidden";
    document.getElementById("mole5").style.visibility = "hidden";
    document.getElementById("mole6").style.visibility = "hidden";
    document.getElementById("mole7").style.visibility = "hidden";
    document.getElementById("mole8").style.visibility = "hidden";
    document.getElementById("mole9").style.visibility = "hidden";
} 
function mole4() {
    document.getElementById("mole1").style.visibility = "hidden";
    document.getElementById("mole2").style.visibility = "hidden";
    document.getElementById("mole3").style.visibility = "hidden";
    document.getElementById("mole4").style.visibility = "visible";
    document.getElementById("mole5").style.visibility = "hidden";
    document.getElementById("mole6").style.visibility = "hidden";
    document.getElementById("mole7").style.visibility = "hidden";
    document.getElementById("mole8").style.visibility = "hidden";
    document.getElementById("mole9").style.visibility = "hidden";
} 
function mole5() {
    document.getElementById("mole1").style.visibility = "hidden";
    document.getElementById("mole2").style.visibility = "hidden";
    document.getElementById("mole3").style.visibility = "hidden";
    document.getElementById("mole4").style.visibility = "hidden";
    document.getElementById("mole5").style.visibility = "visible";
    document.getElementById("mole6").style.visibility = "hidden";
    document.getElementById("mole7").style.visibility = "hidden";
    document.getElementById("mole8").style.visibility = "hidden";
    document.getElementById("mole9").style.visibility = "hidden";
} 
function mole6() {
    document.getElementById("mole1").style.visibility = "hidden";
    document.getElementById("mole2").style.visibility = "hidden";
    document.getElementById("mole3").style.visibility = "hidden";
    document.getElementById("mole4").style.visibility = "hidden";
    document.getElementById("mole5").style.visibility = "hidden";
    document.getElementById("mole6").style.visibility = "visible";
    document.getElementById("mole7").style.visibility = "hidden";
    document.getElementById("mole8").style.visibility = "hidden";
    document.getElementById("mole9").style.visibility = "hidden";
} 
function mole7() {
    document.getElementById("mole1").style.visibility = "hidden";
    document.getElementById("mole2").style.visibility = "hidden";
    document.getElementById("mole3").style.visibility = "hidden";
    document.getElementById("mole4").style.visibility = "hidden";
    document.getElementById("mole5").style.visibility = "hidden";
    document.getElementById("mole6").style.visibility = "hidden";
    document.getElementById("mole7").style.visibility = "visible";
    document.getElementById("mole8").style.visibility = "hidden";
    document.getElementById("mole9").style.visibility = "hidden";
}
function mole8() {
    document.getElementById("mole1").style.visibility = "hidden";
    document.getElementById("mole2").style.visibility = "hidden";
    document.getElementById("mole3").style.visibility = "hidden";
    document.getElementById("mole4").style.visibility = "hidden";
    document.getElementById("mole5").style.visibility = "hidden";
    document.getElementById("mole6").style.visibility = "hidden";
    document.getElementById("mole7").style.visibility = "hidden";
    document.getElementById("mole8").style.visibility = "visible";
    document.getElementById("mole9").style.visibility = "hidden";
} 
function mole9() {
    document.getElementById("mole1").style.visibility = "hidden";
    document.getElementById("mole2").style.visibility = "hidden";
    document.getElementById("mole3").style.visibility = "hidden";
    document.getElementById("mole4").style.visibility = "hidden";
    document.getElementById("mole5").style.visibility = "hidden";
    document.getElementById("mole6").style.visibility = "hidden";
    document.getElementById("mole7").style.visibility = "hidden";
    document.getElementById("mole8").style.visibility = "hidden";
    document.getElementById("mole9").style.visibility = "visible";
} 

var counter = 0;

function one(){
    if (document.getElementById("mole1").style.visibility == "visible" && pausee != true){
        counter += 1;
        var audio1 = new Audio('splat.mp3');
        audio1.play();
        document.getElementById("mole1").style.visibility = "hidden";
    }
}

function two(){
    if (document.getElementById("mole2").style.visibility == "visible" && pausee != true){
        counter += 1;
        var audio2 = new Audio('splat.mp3');
        audio2.play();
        document.getElementById("mole2").style.visibility = "hidden";
    }
}

function three(){
    if (document.getElementById("mole3").style.visibility == "visible" && pausee != true){
        counter += 1;
        var audio3 = new Audio('splat.mp3');
        audio3.play();
        document.getElementById("mole3").style.visibility = "hidden";
    }
}

function four(){
    if (document.getElementById("mole4").style.visibility == "visible" && pausee != true){
        counter += 1;
        var audio4 = new Audio('splat.mp3');
        audio4.play();
        document.getElementById("mole4").style.visibility = "hidden";
    }
}

function five(){
    if (document.getElementById("mole5").style.visibility == "visible" && pausee != true){
        counter += 1;
        var audio5 = new Audio('splat.mp3');
        audio5.play();
        document.getElementById("mole5").style.visibility = "hidden";
    }
}

function six(){
    if (document.getElementById("mole6").style.visibility == "visible" && pausee != true){
        counter += 1;
        var audio6 = new Audio('splat.mp3');
        audio6.play();
        document.getElementById("mole6").style.visibility = "hidden";
    }
}

function seven(){
    if (document.getElementById("mole7").style.visibility == "visible" && pausee != true){
        counter += 1;
        var audio7 = new Audio('splat.mp3');
        audio7.play();
        document.getElementById("mole7").style.visibility = "hidden";
    }
}

function eight(){
    if (document.getElementById("mole8").style.visibility == "visible" && pausee != true){
        counter += 1;
        var audio8 = new Audio('splat.mp3');
        audio8.play();
        document.getElementById("mole8").style.visibility = "hidden";
    }
}

function nine(){
    if (document.getElementById("mole9").style.visibility == "visible" && pausee != true){
        counter += 1;
        var audio9 = new Audio('splat.mp3');
        audio9.play();
        document.getElementById("mole9").style.visibility = "hidden";
    }
}


function popping(){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    if (time > 0 && pausee != true){
        var value = arr[Math.floor(Math.random()*arr.length)]
    } 

switch (value){
    case 1:
        mole1();
        break;
    case 2:
        mole2();
        break;
    case 3:
        mole3();
        break;
    case 4:
        mole4();
        break;
    case 5:
        mole5();
        break;
    case 6:
        mole6();
        break;
    case 7:
        mole7();
        break;
    case 8:
        mole8();
        break;
    case 9:
        mole9();
        break;
}

document.getElementById("counter").innerHTML = counter;
document.getElementById("output").innerHTML = counter;
}

var time; /* Use this to set timelimit*/
var count;
var difficulty;  /* Use this to set how fast the mole will be spawned (difficulty*/
var counts;
var timeds;
var highscore = [];
var popss;
var difficult = document.getElementById("difficulty");
var easy1 = document.getElementById("easy");
var medium1 = document.getElementById("medium");
var hard1 = document.getElementById("hard");
var thirty1 = document.getElementById("thirty");
var sixty1 = document.getElementById("sixty");
var onetwenty1 = document.getElementById("onetwenty");
var twoforty1 = document.getElementById("twoforty");
var oneeighty1 = document.getElementById("oneeighty");


function begin (){
    if (count == undefined || counts == undefined){
        alert("Please select both a difficulty level and timelimit")
    } else {
        timeds = setInterval(timer, 1000);
        popss = setInterval(popping, difficulty); /* Use this to set how fast the mole will be spawned */
        document.getElementById("instructions").style.visibility = "hidden";
        document.getElementById("instructions12").style.visibility = "hidden";
        document.getElementById("results").style.visibility = "hidden";
        document.getElementById("timers").style.visibility = "visible";
        document.getElementById("main").style.visibility = "visible";
        selection(); /*This function set a difficulty level under the high scores*/
    }
}


function pause(){   /* Function for the pause button */
    pausee = true;
}

function play(){    /* Function for the play button */
    pausee = false;
}

function start(){
    document.getElementById("introduction").style.visibility = "hidden";
    document.getElementById("instructions").style.visibility = "visible";
}

function next(){
    document.getElementById("instructions1").style.visibility = "hidden";
    document.getElementById("instructions12").style.visibility = "visible";
}

function previous(){
    document.getElementById("instructions12").style.visibility = "hidden";
    document.getElementById("instructions1").style.visibility = "visible";
}

function easy(){
    easy1.classList.add("change");
    medium1.classList.remove("change");
    hard1.classList.remove("change");
    counts = 1;
    difficulty = 1000;
}

function medium(){
    easy1.classList.remove("change");
    medium1.classList.add("change");
    hard1.classList.remove("change");
    counts = 2;
    difficulty = 750;
}

function hard(){
    easy1.classList.remove("change");
    medium1.classList.remove("change");
    hard1.classList.add("change");
    counts = 3;
    difficulty = 350;
}

function thirty(){
    thirty1.classList.add("change");
    sixty1.classList.remove("change");
    onetwenty1.classList.remove("change");
    oneeighty1.classList.remove("change");
    twoforty1.classList.remove("change");
    count = 1;
    time = 30; 
}

function sixty(){
    thirty1.classList.remove("change");
    sixty1.classList.add("change");
    onetwenty1.classList.remove("change");
    oneeighty1.classList.remove("change");
    twoforty1.classList.remove("change");
    count = 2;
    time = 60; 
}

function onetwenty(){
    thirty1.classList.remove("change");
    sixty1.classList.remove("change");
    onetwenty1.classList.add("change");
    oneeighty1.classList.remove("change");
    twoforty1.classList.remove("change");
    count = 3;
    time = 120; 
}

function oneeighty(){
    thirty1.classList.remove("change");
    sixty1.classList.remove("change");
    onetwenty1.classList.remove("change");
    oneeighty1.classList.add("change");
    twoforty1.classList.remove("change");
    count = 4;
    time = 180; 
}

function twoforty(){
    thirty1.classList.remove("change");
    sixty1.classList.remove("change");
    onetwenty1.classList.remove("change");
    oneeighty1.classList.remove("change");
    twoforty1.classList.add("change");
    count = 5;
    time = 240; 
}

function reset(){
    difficulty = undefined;
    count = undefined;
    counts = undefined;
    time = undefined;
    counter = 0;

    document.getElementById("score1").innerHTML = ""
    document.getElementById("score2").innerHTML = ""
    document.getElementById("score3").innerHTML = ""
    document.getElementById("score4").innerHTML = ""
    document.getElementById("score5").innerHTML = ""
    document.getElementById("score6").innerHTML = ""
    document.getElementById("score7").innerHTML = ""
    document.getElementById("score8").innerHTML = ""
    document.getElementById("score9").innerHTML = ""
    document.getElementById("score10").innerHTML = ""
    highscore = [];

    thirty1.classList.remove("change");
    sixty1.classList.remove("change");
    onetwenty1.classList.remove("change");
    oneeighty1.classList.remove("change");
    twoforty1.classList.remove("change");

    easy1.classList.remove("change");
    medium1.classList.remove("change");
    hard1.classList.remove("change");
}

function mainmenu(){
    reset();
    document.getElementById("instructions").style.visibility = "visible";
    document.getElementById("instructions12").style.visibility = "visible";
}

function mainmenu2(){
    mainmenu();
    clearInterval (timeds);
    clearInterval (popss);
}

function end(){
    reset();
    document.getElementById("introduction").style.visibility = "visible";
    document.getElementById("instructions").style.visibility = "visible";
    document.getElementById("instructions1").style.visibility = "visible";
}

function timer() {
    if (time > 0 && pausee != true) {
        time -=1;
        document.getElementById("timer").innerHTML = time;
    }
    if (time == 0) {
        clearInterval (timeds);
        clearInterval (popss);
        document.getElementById("results").style.visibility = "visible"
        highscores();
    }
}

function retry(){
    document.getElementById("results").style.visibility = "hidden";
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
}

function music2(){
    audio2.play();
}

function highscores(){
    highscore.push(counter);
    highscore = highscore.sort((a,b)=>b-a);

    if (highscore[0] != undefined){
        document.getElementById("score1").innerHTML = highscore[0];
    }
    if (highscore[1] != undefined){
        document.getElementById("score2").innerHTML = highscore[1];
    }
    if (highscore[2] != undefined){
        document.getElementById("score3").innerHTML = highscore[2];
    }
    if (highscore[3] != undefined){
        document.getElementById("score4").innerHTML = highscore[3];
    }
    if (highscore[4] != undefined){
        document.getElementById("score5").innerHTML = highscore[4];
    }
    if (highscore[5] != undefined){
        document.getElementById("score6").innerHTML = highscore[5];
    }
    if (highscore[6] != undefined){
        document.getElementById("score7").innerHTML = highscore[6];
    }
    if (highscore[7] != undefined){
        document.getElementById("score8").innerHTML = highscore[7];
    }
    if (highscore[8] != undefined){
        document.getElementById("score9").innerHTML = highscore[8];
    }
    if (highscore[9] != undefined){
        document.getElementById("score10").innerHTML = highscore[9];
    }
}

function selection(){
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



