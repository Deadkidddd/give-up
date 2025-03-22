//types text
document.getElementById("cult_1_screen").innerHTML = "Cult 1";

document.getElementById("cult_2_screen").innerHTML = "Cult 2";

document.getElementById("home_btn").innerHTML = "Home";

document.getElementById("conclusion_btn").innerHTML = "conclusion";

//buttons for screen switches
document.getElementById("conclusion_btn").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "conclusion.html"; }, 1000);
};

document.getElementById("home_btn").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "index.html"; }, 1000);
};

document.getElementById("cult_1_screen").onclick = function chang_cult_1(){
  glitch();
  setTimeout( function() { window.location.href = "cult1description.html"; }, 1000);
}

document.getElementById("cult_2_screen").onclick = function chang_cult_1(){
  glitch();
  setTimeout( function() { window.location.href = "cult2description.html"; }, 1000);
}

//transition between screens animation
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

//defs
//screen 1
let member_1 = document.getElementById("member_1");
let leaders_1 = document.getElementById("leaders_1");
let ends_1 = document.getElementById("ends_1");

let member_1_p = document.getElementById("member_1_p");
let leaders_1_p = document.getElementById("leaders_1_p");
let ends_1_p = document.getElementById("ends_1_p");

//screen 2
let member_2 = document.getElementById("member_2");
let leaders_2 = document.getElementById("leaders_2");
let ends_2 = document.getElementById("ends_2");

let member_2_p = document.getElementById("member_2_p");
let leaders_2_p = document.getElementById("leaders_2_p");
let ends_2_p = document.getElementById("ends_2_p");

//conclusion
let sources = document.getElementById("sources");
let sources_list = document.getElementById("sources_list");

//functions
//screen 1
function show_member_1(){
  member_1_p.style.display = "block";
}
function show_leaders_1(){
  leaders_1_p.style.display = "block";
}
function show_ends_1(){
  ends_1_p.style.display = "block";
}

//screen 2
function show_member_2(){
  member_2_p.style.display = "block";
}
function show_leaders_2(){
  leaders_2_p.style.display = "block";
}
function show_ends_2(){
  ends_2_p.style.display = "block";
}
//conclusion
function show_sources_list(){
  sources_list.style.display = "block";
}

//buttons for in-screen changes
//screen 1
member_1.onclick = show_member_1;
leaders_1.onclick = show_leaders_1;
ends_1.onclick = show_ends_1;

//screen 2
member_2.onclick = show_member_2;
leaders_2.onclick = show_leaders_2;
ends_2.onclick = show_ends_2;

//conclusion
sources.onclick = show_sources_list;