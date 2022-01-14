let squatch_list = [
    {name:'squatch_1', img:"images/slider/1.png"},
    {name:'squatch_2', img:"images/slider/2.png"},
    {name:'squatch_3', img:"images/slider/3.png"},
    {name:'squatch_4', img:"images/slider/4.png"},
    {name:'squatch_5', img:"images/slider/5.png"},
    {name:'squatch_6', img:"images/slider/6.png"},
    {name:'squatch_7', img:"images/slider/7.png"},
    {name:'squatch_8', img:"images/slider/8.png"},
    {name:'squatch_9', img:"images/slider/9.png"},
    {name:'squatch_10', img:"images/slider/10.png"},
    {name:'squatch_11', img:"images/slider/11.png"},
    {name:'squatch_12', img:"images/slider/12.png"},
    {name:'squatch_13', img:"images/slider/13.png"},
    {name:'squatch_14', img:"images/slider/14.png"},
    {name:'squatch_15', img:"images/slider/15.png"},
    {name:'squatch_17', img:"images/slider/17.png"},
    {name:'squatch_18', img:"images/slider/18.png"},
    {name:'squatch_19', img:"images/slider/19.png"},
    {name:'squatch_20', img:"images/slider/20.png"},
]
parent_object = document.getElementsByClassName("slider-container")[0];

function add_division(){
    let new_division = document.createElement("div");
    new_division.classList.add("slider");

    
    
    let js_generated_img = document.createElement('img');
    js_generated_img.src = squatch_list[i].img;
    new_division.appendChild(js_generated_img);

    parent_object.appendChild(new_division);
}
for(i=0; i<19; i++)
{
    add_division(parent_object, i);
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
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