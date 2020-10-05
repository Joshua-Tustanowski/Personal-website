// --------------- navigation bar toggle --------------- //
var clicks = 0;
function openSlideMenu(x) {
  if (clicks % 2 == 0) {
    document.getElementById("menu").style.width = "12rem";
    document.getElementById("content").style.marginLeft = "12rem";
  } else {
    document.getElementById("menu").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
  }
  if (clicks == 10) {
    clicks = 0;
  }
  clicks++;
  x.classList.toggle("open");
}

// --------------- profession swapper --------------- //
var prof = document.getElementById("demo-to-view");
professions = ["Software Developer", "Physicist", "Crossword enthusiast"];
var i = 1;

setInterval(() => {
  prof.innerText = professions[i];
  i = (i + 1) % professions.length;
}, 1300);
