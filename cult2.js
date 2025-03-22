let member_2 = document.getElementById("member_2");
let leaders_2 = document.getElementById("leaders_2");
let ends_2 = document.getElementById("ends_2");

let member_2_p = document.getElementById("member_2_p");
let leaders_2_p = document.getElementById("leaders_2_p");
let ends_2_p = document.getElementById("ends_2_p");
//functions
function show_member_2(){
  member_2_p.style.display = "block";
}
function show_leaders_2(){
  leaders_2_p.style.display = "block";
}
//buttons for in-screen changes
member_2.onclick = show_member_2;
leaders_2.onclick = show_leaders_2;
function show_ends_2(){
  ends_2_p.style.display = "block";
}
ends_2.onclick = show_ends_2;