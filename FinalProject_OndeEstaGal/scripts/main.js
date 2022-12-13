function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

document.getElementById('play').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('audio').play();
});