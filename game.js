function handleStartClick() {
    console.log("pressed");
    const output = document.getElementById("outputArea");
    output.textContent = "Welcome to Erentram...";
}

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", handleStartClick);


