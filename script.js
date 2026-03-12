const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event){
if(event.code === "Space"){
jump();
}
});

function jump(){
if(!dino.classList.contains("jump")){
dino.classList.add("jump");

setTimeout(function(){
dino.classList.remove("jump");
},500);
}
}

let checkDead = setInterval(function(){

let dinoBottom = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));
let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));

if(cactusLeft > 520 && cactusLeft < 560 && dinoBottom < 50){
alert("Game Over!");
cactus.style.animation = "none";
}

},10);  