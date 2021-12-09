let computerNum = 0;
let playButton =document.getElementById("play-button");
let userInput =document.getElementById("user-input");
let resultArea =document.getElementById("result-area");
let resetButton =document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea=document.getElementById("chance-area");
let history=[];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus",function(){
  userInput.value="";
});

function pickRandomNum() {
  computerNum = Math.floor(Math.random()*100)+1;
  console.log("answer", computerNum);
}

function play() {
 let userValue = userInput.value;

 if(userValue<1 || userValue > 100) {
   resultArea.textContent ="type between 1~100 number";
   return;
 }

 if(history.includes(userValue)) {
   resultArea.textContent="you already had this number! another number again!"
   return;
 }

 chances --;
 chanceArea.textContent=`remaining chances:${chances}times`;
 if(userValue < computerNum){
  resultArea.textContent ="Up!";
 }else if(userValue > computerNum){
  resultArea.textContent ="Down!";
 }else {
  resultArea.textContent ="Awesome!! Correct!";
  gameOver = true;
 }

 history.push(userValue);
 
 if(chances < 1) {
   gameOver = true;
 }

 if(gameOver == true) {
   playButton.disabled = true;
 }
}

function reset() {
  userInput.value="";
  pickRandomNum();
  resultArea.textContent="**coming out the result here!**";
  chances = 5;
  playButton.disabled = false;
  chanceArea.textContent="remaining chances:5";
}

pickRandomNum()