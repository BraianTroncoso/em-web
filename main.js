//ImgFlayer

function myFunction() {
  var element = document.getElementById("imgLive");
  element.classList.add("animate__pulse");
  element.addEventListener("animationend", function() {
    element.classList.remove("animate__pulse");
  });
}
var element = document.getElementById("imgLive");
element.addEventListener("mouseover", myFunction);


// Cards

var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
  card.addEventListener('mouseover', function() {
    card.classList.add('animate__animated', 'animate__bounceIn');
  });
  card.addEventListener('animationend', function() {
    card.classList.remove('animate__animated', 'animate__bounceIn');
  });
});