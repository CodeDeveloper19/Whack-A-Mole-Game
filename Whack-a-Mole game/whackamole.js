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
        music();
        document.getElementById("mole1").style.visibility = "hidden";
    }
}

function two(){
    if (document.getElementById("mole2").style.visibility == "visible" && pausee != true){
        counter += 1;
        music();
        document.getElementById("mole2").style.visibility = "hidden";
    }
}

function three(){
    if (document.getElementById("mole3").style.visibility == "visible" && pausee != true){
        counter += 1;
        music();
        document.getElementById("mole3").style.visibility = "hidden";
    }
}

function four(){
    if (document.getElementById("mole4").style.visibility == "visible" && pausee != true){
        counter += 1;
        music();
        document.getElementById("mole4").style.visibility = "hidden";
    }
}

function five(){
    if (document.getElementById("mole5").style.visibility == "visible" && pausee != true){
        counter += 1;
        music();
        document.getElementById("mole5").style.visibility = "hidden";
    }
}

function six(){
    if (document.getElementById("mole6").style.visibility == "visible" && pausee != true){
        counter += 1;
        music();
        document.getElementById("mole6").style.visibility = "hidden";
    }
}

function seven(){
    if (document.getElementById("mole7").style.visibility == "visible" && pausee != true){
        counter += 1;
        music();
        document.getElementById("mole7").style.visibility = "hidden";
    }
}

function eight(){
    if (document.getElementById("mole8").style.visibility == "visible" && pausee != true){
        counter += 1;
        music();
        document.getElementById("mole8").style.visibility = "hidden";
    }
}

function nine(){
    if (document.getElementById("mole9").style.visibility == "visible" && pausee != true){
        counter += 1;
        music();
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
var popss;
var audio1 = new Audio('splat.mp3');
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

function end(){
    close();
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
    difficulty = 550;
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

function mainmenu(){
    difficulty = undefined;
    count = undefined;
    counts = undefined;
    time = undefined;
    counter = 0;
    document.getElementById("instructions").style.visibility = "visible";
    document.getElementById("instructions12").style.visibility = "visible";

    thirty1.classList.remove("change");
    sixty1.classList.remove("change");
    onetwenty1.classList.remove("change");
    oneeighty1.classList.remove("change");
    twoforty1.classList.remove("change");

    easy1.classList.remove("change");
    medium1.classList.remove("change");
    hard1.classList.remove("change");
}

function timer() {
    if (time > 0 && pausee != true) {
        console.log("B");
        time -=1;
        document.getElementById("timer").innerHTML = time;
    }
    if (time == 0) {
        clearInterval (timeds);
        clearInterval (popss);
        document.getElementById("results").style.visibility = "visible"
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
            difficulty = 550;
            break;
    }

    begin();
}


function music() {
    audio1.play();
}

