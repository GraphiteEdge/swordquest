const start = document.getElementById("start");
const outputArea = document.getElementById("outputArea");

start.addEventListener("click", function() {
  console.log("StartGame");
  outputArea.textContent = "Welcome to Erentram...";
});
