document.getElementById("cult_1_screen").innerHTML = "Cult 1";

document.getElementById("cult_2_screen").innerHTML = "Cult 2";

document.getElementById("cult_1_screen").onclick = function chang_cult_1(){
  glitch();
  setTimeout( function() { window.location.href = "cult1description.html"; }, 1000);
}

document.getElementById("cult_2_screen").onclick = function chang_cult_1(){
  glitch();
  setTimeout( function() { window.location.href = "cult2description.html"; }, 1000);
}

let glitched_cat = 
  document.getElementById("glitched_cat");
let body_glitch = document.getElementById("body");

function glitch(){
  glitched_cat.style.animation = "glitched_cat_animation 1s infinite";
}


//THANKYOU W3SCHOOLSSSSS
//makes slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("cat_slideshow");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let dropdownMenu = document.getElementById("dropdown");
let background = document.getElementById("background");

function showDropdown() {
  dropdownMenu.style.display = "block";
  background.style.display = "block";
}

document.getElementById("cat_slideshow_1").onclick = showDropdown;
document.getElementById("cat_slideshow_2").onclick = showDropdown;
document.getElementById("cat_slideshow_3").onclick = showDropdown;

document.getElementById("home_btn").innerHTML = "Home";
document.getElementById("home_btn").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "index.html"; }, 1000);
};

