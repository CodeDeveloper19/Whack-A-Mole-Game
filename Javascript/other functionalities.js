/*Hovering of Button*/

for(let i = 0; i < document.getElementsByClassName("okay-button").length; i++){
    document.getElementsByClassName("okay-button")[i].addEventListener("mouseover", () =>{
        document.getElementsByClassName("okay-image")[i].src = "./Images/screen 2 hover.svg";
    })

    document.getElementsByClassName("okay-button")[i].addEventListener("mouseout", () => {
        document.getElementsByClassName("okay-image")[i].src = "./Images/screen 2.svg";
    })
}

for (let i = 0; i < document.getElementsByClassName("reduce").length; i++){
    document.getElementsByClassName("reduce")[i].addEventListener("mouseover", () => {
        document.getElementsByClassName("reduce-image")[i].src = "./Images/stone minus hover.svg";
    })
    
    document.getElementsByClassName("reduce")[i].addEventListener("mouseout", () => {
        document.getElementsByClassName("reduce-image")[i].src = "./Images/stone minus.svg";
    }) 
}

for (let i = 0; i < document.getElementsByClassName("increase").length; i++){
    document.getElementsByClassName("increase")[i].addEventListener("mouseover", () => {
        document.getElementsByClassName("increase-image")[i].src = "./Images/cross stone hover.svg";
    })
    
    document.getElementsByClassName("increase")[i].addEventListener("mouseout", () => {
        document.getElementsByClassName("increase-image")[i].src = "./Images/cross stone.svg";
    }) 
}

for (let i = 9; i < document.getElementsByClassName("button").length; i++){
    document.getElementsByClassName("button")[i].addEventListener("mouseover", () => {
        document.getElementsByClassName("image")[i].src = "./Images/slab hover.png";
    })
    
    document.getElementsByClassName("button")[i].addEventListener("mouseout", () => {
        document.getElementsByClassName("image")[i].src = "./Images/normal slab.png";
    }) 
}

/*For the start button at the how-to-play section*/
document.getElementsByClassName("button")[0].addEventListener("mouseover", () => {
document.getElementsByClassName("image")[0].src = "./Images/slab hover.png";
})

document.getElementsByClassName("button")[0].addEventListener("mouseout", () => {
document.getElementsByClassName("image")[0].src = "./Images/normal slab.png";
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

/*This is for the buttons that are in the game screen*/

for (let i = 0; i < document.getElementsByClassName("button2").length; i++){
    document.getElementsByClassName("button2")[i].addEventListener("mouseover", () => {
        switch(i){
            case 1: 
            case 4:
                document.getElementsByClassName("image2")[i].src = "./Images/Stones[Converted]2hover.png";
                break;
            case 2:
            case 5:
                document.getElementsByClassName("image2")[i].src = "./Images/Stones[Converted]hover.png";
                break;
            case 0:
                document.getElementsByClassName("image2")[i].src = "./Images/Stones[Converted]3hover.png";
                break;
            case 3:
                document.getElementsByClassName("image2")[i].src = "./Images/Stones[Converted]4hover.png";
                break;
            case 6:
                document.getElementsByClassName("image2")[i].src = "./Images/left arrow hover.png";
                break;
            case 7:
                document.getElementsByClassName("image2")[i].src = "./Images/right arrow hover.png";
                break;
        }
    })
        
    document.getElementsByClassName("button2")[i].addEventListener("mouseout", () => {
        switch(i){
            case 1:
            case 4: 
                document.getElementsByClassName("image2")[i].src = "./Images/Stones[Converted]2.png";
                break;
            case 2:
            case 5:
                document.getElementsByClassName("image2")[i].src = "./Images/Stones[Converted].png";
                break;
            case 0:
                document.getElementsByClassName("image2")[i].src = "./Images/Stones[Converted]3.png";
                break;
            case 3:
                document.getElementsByClassName("image2")[i].src = "./Images/Stones[Converted]4.png";
                break;
            case 6:
                document.getElementsByClassName("image2")[i].src = "./Images/left arrow.png";
                break;
            case 7:
                document.getElementsByClassName("image2")[i].src = "./Images/right arrow.png";
                break;
        }
    })
}

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

document.getElementById("credits-button").addEventListener("click", () => {
    document.getElementById("credits").style.display = "flex";
})

for(let i = 0; i < document.getElementsByClassName("okay-button").length; i++){
document.getElementsByClassName("okay-button")[i].addEventListener("click", () =>{
    if (i == 0){
        document.getElementById("settings").style.display = "none";
    } else if (i == 1){
        document.getElementById("credits").style.display = "none";
    }
})
}

document.getElementById("settings-container").addEventListener("click", () => {
    document.getElementById("settings").style.display = "flex";
})


/*Score Switch*/
document.getElementById("ball1").addEventListener("click", () => {
    if (document.getElementById("blackboard-container").style.display == "none"){
        document.getElementById("blackboard-container").style.display = "block";
        document.getElementById("ball1").src = "./Images/on.png";
        document.getElementById("ball1").style.right = "15px";
    } else{
        document.getElementById("blackboard-container").style.display = "none"; 
        document.getElementById("ball1").src = "./Images/off.png";
        document.getElementById("ball1").style.right = "39px";
    }
})
