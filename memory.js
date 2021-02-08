//create a new game screen
window.addEventListener("click", e => {
    if (e) { 
     //document.body.innerHTML = "<h1 id='gameOn'>GAME ON!!!</h1>"
      //document.body.innerHTML=`<div id='cardContainer'></div>`
    }
  })
//shulffe card random
 const arrback = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]

 function shuffle(array) {
    var currentIndex = array.length, tempValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    return array;
  }
let randomCards = shuffle(arrback)
console.log(randomCards)

//create cardlist interface
const cardHtml=randomCards.map(item=>`
<div class='flip-card' data-target='${item}'>
${item}
    <div class="flip-card-inner" >

        <div class="flip-card-front">
        
        </div>
        <div class="flip-card-back">
        
        </div>  
    </div>
</div>`)
document.querySelector('#cardContainer').innerHTML = cardHtml.join('')


//add animation to card when click it to flip
const cardContainer=document.querySelector('#cardContainer').addEventListener('click',function(e){
    e.preventDefault()
    let currentFlipCard = e.target.dataset.target
    console.log(currentFlipCard)
})
// set timer
// let hour,minute,second
//     hour=minute=second=0
// function start()
// {
//   int=setInterval(timer,50)
// }
// function timer()
// {
//   if(second>=60)
//   {
//     second=0;
//     minute=minute+1;
//   }

//   if(minute>=60)
//   {
//     minute=0;
//     hour=hour+1;
//   }
//   document.querySelector('#timetext').value=hour+':'+minute +':'+second

// }

