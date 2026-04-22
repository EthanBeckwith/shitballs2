let money = 0;
let clickValue = 1;
  let sound = new Audio("shitballs.mp3");


function move(){
     
     sound.play();
    let container = document.querySelector('.container');
    let containerWidth = parseInt(getComputedStyle(container).width);
    let containerHeight = parseInt(getComputedStyle(container).height);
    let box = document.getElementById('theBox');
    let boxWidth = parseInt(getComputedStyle(box).width);
    let boxHeight = parseInt(getComputedStyle(box).height);
    let maxX = containerWidth - boxWidth;
    let maxY = containerHeight - boxHeight;
    let x = Math.floor(Math.random() * maxX);
    let y = Math.floor(Math.random() * maxY);
        document.getElementById("theBox").style.transform = `translate(${x}px, ${y}px)`;
    let r = Math.floor(Math.random() * 255);
     let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      document.getElementById("theBox").style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      let shape = Math.floor(Math.random() * 51);
       document.getElementById("theBox").style.borderRadius = `${shape}px`;
       money += clickValue;
    updatemoney();   

}

function updatemoney() {
    document.getElementById("collection").innerHTML = ` collected ${money}`;
}
    function purchase() {
    if (money >= 50) {
        money -= 50;
        updatemoney();
        document.getElementById("mona").style.display = "block";
       
    } else {
        alert("Not enough money!");
    }
    document.getElementById("Art2Button").style.display = "block";
}
function upgrade() {
    for(let i = 0; i < 100; i++) {
  
    sound.play();
    }

    if (money >= 10) {
        money -= 10;
        if (clickValue < 5) {
        updatemoney();
        clickValue += 4;
    }
    else {
        updatemoney();
        clickValue += 5;
    }
}

}
    function purchase2() {
    if (money >= 250) {
        money -= 250;
        updatemoney();
        document.getElementById("scream").style.display = "block";
       
    } else {
        alert("Not enough money!");
    }
    document.getElementById("Art3Button").style.display = "block";
}
function purchase3() {
    if (money >= 500) {
        money -= 500;
        updatemoney();
        document.getElementById("art3").style.display = "block";
       
    } else {
        alert("Not enough money!");
    }
    document.getElementById("Art4Button").style.display = "block";
}
function purchase4() {
    if (money >= 1000) {
        money -= 1000;
        updatemoney();
        document.getElementById("art4").style.display = "block";
       
    } else {
        alert("Not enough money!");
    }
}