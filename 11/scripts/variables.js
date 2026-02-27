//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Varriables---                                                 //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------files---------------------------------------------------------------------------------------------

        let files = {
          "TOS.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms of Service</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        h1 {
            text-align: center;
        }
        h2 {
            color: #333;
        }
        p {
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>Terms of Service</h1>

    <h2>1. Storage of Files in LocalStorage</h2>
    <p>We reserve the right to store files and data in the LocalStorage of your browser. This may include, but is not limited to, configuration data, user preferences, and other related information.</p>

    <h2>2. Responsibility and Risk</h2>
    <p>You acknowledge and agree that all data and information processed, stored, or otherwise handled through this service may be lost, corrupted, or otherwise compromised. You are 100% responsible for any and all consequences, damages, or losses that may arise from using this service, including but not limited to data loss, hardware damage, or any other issues.</p>

    <h2>3. No Warranty</h2>
    <p>The service is provided "as-is" with no warranty, express or implied. We do not guarantee that the service will be error-free, secure, or uninterrupted. You use the service entirely at your own risk, and we are not liable for any damages, losses, or issues that may occur as a result of using the service.</p>

    <h2>4. Modification of Terms</h2>
    <p>We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting. It is your responsibility to review these terms periodically to stay informed of any updates.</p>

</body>
</html>

		  `,

          "Folder MGR.fsys": `foldermgr()`,
		
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