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

document.getElementById("cult_1_screen").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "cult1description.html"; }, 1000);
}

document.getElementById("cult_2_screen").onclick = function(){
  glitch();
  setTimeout(function() { window.location.href = "cult2description.html"; }, 1000);
}

//transition between screens animation
let glitched_cat = document.getElementById("glitched_cat");
let body_glitch = document.getElementById("body");

function glitch(){
  if(glitched_cat) {
    glitched_cat.style.animation = "glitched_cat_animation 1s infinite";
  }
}

//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("cat_slideshow");
  if(slides.length === 0) return;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

let dropdownMenu = document.getElementById("dropdown");
let background = document.getElementById("background");

function showDropdown() {
  if(dropdownMenu && background) {
    dropdownMenu.style.display = "block";
    background.style.display = "block";
  }
}

// Add dropdown triggers only if elements exist
let catSlides = document.getElementsByClassName("cat_slideshow");
for(let i = 0; i < catSlides.length; i++) {
  catSlides[i].onclick = showDropdown;
}

// Initialize page-specific elements
function initCult1Page() {
  let member1 = document.getElementById("member_1");
  let leaders1 = document.getElementById("leaders_1");
  let ends1 = document.getElementById("ends_1");

  if(member1) member1.onclick = () => document.getElementById("member_1_p").style.display = "block";
  if(leaders1) leaders1.onclick = () => document.getElementById("leaders_1_p").style.display = "block";
  if(ends1) ends1.onclick = () => document.getElementById("ends_1_p").style.display = "block";
}

function initCult2Page() {
  let member2 = document.getElementById("member_2");
  let leaders2 = document.getElementById("leaders_2");
  let ends2 = document.getElementById("ends_2");

  if(member2) member2.onclick = () => document.getElementById("member_2_p").style.display = "block";
  if(leaders2) leaders2.onclick = () => document.getElementById("leaders_2_p").style.display = "block";
  if(ends2) ends2.onclick = () => document.getElementById("ends_2_p").style.display = "block";
}

function initConclusionPage() {
  let sources = document.getElementById("sources");
  if(sources) {
    sources.onclick = () => document.getElementById("sources_list").style.display = "block";
  }
}

// Initialize based on current page
if(window.location.pathname.includes("cult1description")) {
  initCult1Page();
} else if(window.location.pathname.includes("cult2description")) {
  initCult2Page();
} else if(window.location.pathname.includes("conclusion")) {
  initConclusionPage();
}