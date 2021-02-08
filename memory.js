//create a new game screen
const start = document.querySelector("#startScreen");
const nav = document.querySelector("#nav");
nav.classList.add("hidden");

window.addEventListener("click", (e) => {
  if (e) {
    start.classList.add("hidden");
    nav.classList.remove("hidden");
  }
});
//shulffe card random
const arrback = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

function shuffle(array) {
  var currentIndex = array.length,
    tempValue,
    randomIndex;
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
let randomCards = shuffle(arrback);
console.log(randomCards);

//create cardlist interface
const cardHtml = randomCards.map(
  (item) => `
<div class='flip-card' data-target='${item}'>
${item}
    <div class="flip-card-inner" >

        <div class="flip-card-front data-target='${item}">
        
        </div>
        <div class="flip-card-back data-target='${item}">
        
        </div>  
    </div>
</div>`
);
document.querySelector("#cardContainer").innerHTML = cardHtml.join("");

//add animation to card when click it to flip
const cardContainer = document
  .querySelector("#cardContainer")
  .addEventListener("click", function (e) {
    e.preventDefault();
    let currentFlipCard = e.target.dataset.target;
    console.log(currentFlipCard);
  });
// set timer
function start_timer() {
  let timer = document.querySelector("#timer").innerHTML;
  let arr = timer.split(":");
  let h = 00;
  let m = 05;
  let s = 00;
  if (s == 0) {
    if (m == 0) {
      if (h == 0) {
        alert("Time Out!");
        window.location.reload();
        return;
      }
      h--;
      m = 60;
      if (h < 10) {
        h = "0" + h;
      }
    }
    m--;
    m = 60;
    if (m < 10) {
      m = "0" + m;
    }
    s = 59;
  } else {
    s--;
    if (s < 10) {
      s = "0" + s;
    }
    document.querySelector("#timer").innerHTML = h + ":" + m + ":" + s;
    setTimeout(start_timer, 1000);
  }
}
start_timer();
