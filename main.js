//MENU STUFF

/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "flex";
  }
  
/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
} 

//HEADER

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.backgroundColor = "#84e6c7";
    document.getElementById("headerLogo").style.visibility = "visible";
  } else {
    document.getElementById("header").style.backgroundColor = "inherit";
    document.getElementById("headerLogo").style.visibility = "hidden";
  }
}