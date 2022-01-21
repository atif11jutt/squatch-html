let squatch_list = [
  { name: 'squatch_1', img: "images/slider/one.png" },
  { name: 'squatch_2', img: "images/slider/two.png" },
  { name: 'squatch_3', img: "images/slider/three.png" },
  { name: 'squatch_4', img: "images/slider/four.png" },
  { name: 'squatch_5', img: "images/slider/five.png" },
  { name: 'squatch_6', img: "images/slider/six.png" },
  { name: 'squatch_7', img: "images/slider/seven.png" },
  { name: 'squatch_8', img: "images/slider/eight.png" },
  { name: 'squatch_9', img: "images/slider/nine.png" },
  { name: 'squatch_10', img: "images/slider/ten.png" }
]

for (i = 0; i < squatch_list.length; i++) {
  $(".slider-container").append('<div class="slider"><img src="' + squatch_list[i].img + '"></div>')
}

$(".main_nav a").click(function (event) {
  event.preventDefault();
  let action = $(this.hash).offset().top;
  $("html,body").animate({
    scrollTop: action
  }, 500);
})

$("#myTopnav a").click(function (event) {
  event.preventDefault();
  let action = $(this.hash).offset().top;
  $("html,body").animate({
    scrollTop: action
  }, 500);
  myFunction();
})


$("#reveal").click(function(){
  if($(this).hasClass("active")){
    $(this).text("REVEAL LORE")
    $(".main-info-container").removeClass("reveal")
  }else{
    $(this).text("HIDE LORE")
    $(".main-info-container").addClass("reveal")
  }

  $(this).toggleClass("active")
})


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}