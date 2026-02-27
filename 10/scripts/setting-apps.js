function changeDesktopBackground() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/back.jpg')";
}

function changeDesktopBackground2() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/123.jpg')";
}

function changeDesktopBackground3() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/flower.jpg')";
}

function changeDesktopBackground4() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/lightning.jpg')";
}

function changeDesktopBackground6() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/abstract.webp')";
}

function changeDesktopBackground30() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/col.jpg')";
}

function changeDesktopBackground40() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/fmoss.png')";
}

function changeDesktopBackground5() {
  const userInput = prompt("Enter a custom image URL:");
  if (userInput) {
    const bodyElement = document.querySelector('body');
    const desktopElement = bodyElement.querySelector('.desktop');
    desktopElement.style.backgroundImage = `url('${userInput}')`;
  }
}

function changeTerminalBackground() {
  // Prompt the user for the URL of a background image
  const imageUrl = prompt("Enter the URL of a background image:");

  // Check if the user entered a valid URL
  if (imageUrl) {
    // Update the CSS style for .terminal-window
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `.terminal-window { background-image: url(${imageUrl}); }`;
    document.head.appendChild(styleElement);
  } else {
    alert("Invalid URL. Please enter the URL of a valid image file.");
  }
}

function changeTerminalBackground2() {
  // Update the CSS style for.terminal-window
  const styleElement = document.createElement("style");
  styleElement.innerHTML = `.terminal-window { background-image: url('icons/back.jpg'); }`;
  document.head.appendChild(styleElement);
}

function changeTerminalBackground3() {
  // Update the CSS style for.terminal-window
  const styleElement = document.createElement("style");
  styleElement.innerHTML = `.terminal-window { background-image: url('icons/abstract.webp'); }`;
  document.head.appendChild(styleElement);
}

function setTaskbarTransparent() {
  const taskbar = document.querySelector('.taskbar');
  taskbar.style.backgroundColor = 'transparent';
}

function getAndSetTaskbarBackgroundColor() {
  const taskbar = document.querySelector('.taskbar');
  const color = prompt("Enter a color (e.g. #FF0000, red, rgba(255, 0, 0, 0.5)): ");
  if (color) {
    taskbar.style.backgroundColor = color;
  } else {
    alert("No color entered. Current color: " + taskbar.style.backgroundColor);
  }
}

function resetTaskbarBackgroundColor() {
  const taskbar = document.querySelector('.taskbar');
  taskbar.style.backgroundColor = '#333';
}

function toggleSelectionWindow() {
  const selectionWindow = document.getElementById('selection-window');
  selectionWindow.classList.toggle('active');
}