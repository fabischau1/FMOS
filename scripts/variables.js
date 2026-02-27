//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Varriables---                                                 //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------files---------------------------------------------------------------------------------------------

let files = {
    "Folder MGR.fsys": `showFolderMGR()`,
  
    "Caculator.fsys": `caculator()`,
  
    "Browser.fexe": `openURLInIframe()`,

    "game.js": `let minNumber = 1;
  let maxNumber = 100;
  let targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  let userGuess;

  function playGame() {
    userGuess = prompt("Guess the number between " + minNumber + " and " + maxNumber);

    if (userGuess === null) {
      return;
    }

    userGuess = parseInt(userGuess);

    if (isNaN(userGuess)) {
      alert("This is not a number.");
      playGame();
    } else if (userGuess < minNumber || userGuess > maxNumber) {
      alert("This is not a number between " + minNumber + " and " + maxNumber + ".");
      playGame();
    } else if (userGuess < targetNumber) {
      alert("Too low!");
      playGame();
    } else if (userGuess > targetNumber) {
      alert("Too high!");
      playGame();
    } else {
      alert("Right! The number was " + targetNumber + ".");
    }
  }

  playGame();`,

    "FA_AntiVira.py": `let passwordGenerator = {
    generatePassword: function(length) {
      let password = "";
      for (let i = 0; i < length; i++) {
        password += Math.random().toString(36).substr(2, 1);
     }
      return password;
    }
  };

  alert(passwordGenerator.generatePassword(12));`,

    "terminal.fexe": `executeJSInTerminal()`
  };

const systemName = "FMOS 14"

  let folders = {};
  let foldermgrfiles = {};
  let selectedFile = null;
  let currentDraggedFile = null;
  let exedircontent = null;
  let content = null;
  let jsonFiles = null;
  let dircontent = null;
  let windowCount = 0;
  const openedWindows = [];
  let processManagerVisible = false;
  let desktoppathdirfull = 'FMOSfolder/desktop';
  let desktoppathdir = '/desktop';
