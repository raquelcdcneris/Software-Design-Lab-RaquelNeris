document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}


//window.addEventListener("scroll", () => {
//console.log("The Code Creative");
//})

window.addEventListener("scroll", dispatchEvent);

function dispatchEvent() {
  alert("You scrolled!");
  
}
