// Select all elements with the class 'drum' (representing drum buttons)
var drumButtons = document.querySelectorAll(".drum");
var totalDrumButtons = drumButtons.length;

// Add click event listeners to each drum button
for (var i = 0; i < totalDrumButtons; i++) {
  drumButtons[i].addEventListener("click", function () {
    
    // Get the button's inner text (which corresponds to a sound key)
    var buttonKey = this.innerHTML;

    // Play sound and animate the button based on the key
    playDrumSound(buttonKey);
    animateButton(buttonKey);
  });
}

// Listen for keydown events on the entire document (keyboard interaction)
document.addEventListener("keydown", function (event) {

  // Capture the key that was pressed
  var pressedKey = event.key;

  // Play sound and animate the button based on the key
  playDrumSound(pressedKey);
  animateButton(pressedKey);
});

function playDrumSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      // Optional: Log if an undefined key is pressed
      console.log("No drum sound assigned for key:", key);
  }
}

function animateButton(currentKey) {
  // Select the button corresponding to the pressed key
  var activeButton = document.querySelector("." + currentKey);

  // Only proceed if such a button exists
  if (activeButton) {
    // Add the 'pressed' class to trigger CSS animation
    activeButton.classList.add("pressed");

    // Remove the class after a short delay to reset animation
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
