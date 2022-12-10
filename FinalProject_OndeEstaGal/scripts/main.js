function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

document.querySelector("#1_DivinoMaravilhoso_GAL.svg").onclick = function(e) {
  e.preventDefault();
  const audio = new Audio("assets/tunes/DivinoMaravilhoso.mp3");
  audio.play();
}