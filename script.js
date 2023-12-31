var time = 60;
var score = 0
function makeBubble()
{
    var clutter = ``;
    for(var i=1 ; i<=101 ; i++)
    {
      clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    var bottom = document.querySelector(".pbottom");
     bottom.innerHTML=clutter;
}
function runTimer(){
var timer = setInterval(function(){
    if(time>0)
    {
      time--;
      document.querySelector(".elem .boxit").textContent = time;
    }
    else
    {
      clearInterval(timer);
      bottom = document.querySelector(".pbottom").innerHTML =`<h1>Game Over!</h1>`;
    }
  },1000);
}
function getNewHit(){
  var random = Math.floor(Math.random()*10);
  document.querySelector(".boxih").textContent = random;
}
function updateScore(){
  score +=10;
  document.querySelector(".boxis").textContent = score;
}
makeBubble();
runTimer();
getNewHit();
var panelbtm = document.querySelector(".pbottom");
var toHit = document.querySelector(".elem .boxih")

panelbtm.addEventListener("click",function(event){
   if(event.target.textContent == toHit.textContent)
    {
      updateScore();
      makeBubble();
      getNewHit();
    }
      
})


