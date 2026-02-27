        let files = {
          "VM.html": `<!DOCTYPE html>
          <html lang="de">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="refresh" content="0; URL='https://fabischau1.github.io/BIOS/'">
              <title>Weiterleitung</title>
          </head>
          <body>
          </body>
          </html>
		  `,

          "explorer.fsys": `let fileExplorer = {
          listFiles: function() {
            console.log("Files:");
            for (let file in files) {
              console.log(file);
              alert(file);
            }
          },
          openFile: function(fileName) {
            if (files[fileName]) {
              console.log("Inhalt von " + fileName + ":");
              console.log(files[fileName]);
              alert(files[fileName]);
            } else {
              console.log("Datei nicht gefunden!");
              alert("File not found!");
            }
          }
        };

        fileExplorer.listFiles();`,
		
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

        let folders = {};

        let selectedFile = null;
        let currentDraggedFile = null;