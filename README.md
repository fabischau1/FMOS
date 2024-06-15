working programms:

Caculator:

// Taschenrechner für FM OS 2.0

let zahl1, zahl2, operator, ergebnis;

function calculate() {
  zahl1 = parseFloat(prompt("Erste Zahl:"));
  operator = prompt("Operator (+, -, *, /):");
  zahl2 = parseFloat(prompt("Zweite Zahl:"));

  if (isNaN(zahl1) || isNaN(zahl2)) {
    alert("Bitte geben Sie gültige Zahlen ein.");
    return;
  }

  switch (operator) {
    case "+":
      ergebnis = zahl1 + zahl2;
      break;
    case "-":
      ergebnis = zahl1 - zahl2;
      break;
    case "*":
      ergebnis = zahl1 * zahl2;
      break;
    case "/":
      if (zahl2 === 0) {
        alert("Fehler: Division durch Null");
        return;
      }
      ergebnis = zahl1 / zahl2;
      break;
    default:
      alert("Fehler: Ungültiger Operator");
      return;
  }

  alert("Ergebnis: " + ergebnis);
}

calculate();

Explorer:

let fileExplorer = {
  listFiles: function() {
    console.log("Dateien im aktuellen Verzeichnis:");
    for (let file in files) {
      console.log(file);
    }
  },
  openFile: function(fileName) {
    if (files[fileName]) {
      console.log("Inhalt von " + fileName + ":");
      console.log(files[fileName]);
    } else {
      console.log("Datei nicht gefunden!");
    }
  }
};

fileExplorer.listFiles();

Game:

// Ratespiel für FM OS 2.0

const minNumber = 1;
const maxNumber = 100;
const targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let userGuess;

function playGame() {
  userGuess = prompt(`Ich habe mir eine Zahl zwischen ${minNumber} und ${maxNumber} gedacht. Versuchen Sie, sie zu erraten.`);

  if (userGuess === null) {
    return;
  }

  userGuess = parseInt(userGuess);

  if (isNaN(userGuess)) {
    alert("Bitte geben Sie eine gültige Zahl ein.");
    playGame();
  } else if (userGuess < minNumber || userGuess > maxNumber) {
    alert("Bitte geben Sie eine Zahl zwischen " + minNumber + " und " + maxNumber + " ein.");
    playGame();
  } else if (userGuess < targetNumber) {
    alert("Zu niedrig!");
    playGame();
  } else if (userGuess > targetNumber) {
    alert("Zu hoch!");
    playGame();
  } else {
    alert("Richtig! Die Zahl war " + targetNumber + ".");
  }
}

playGame();

Malware :

for (let i = 0; i < 90; i++) {
  let fileName = Math.random().toString(36).substr(2, 8); // Random filename
  let fileExtension;
  let randomChance = Math.random();

  if (randomChance < 0.2) {
    fileExtension = '.zfp';
  } else if (randomChance < 0.4) {
    fileExtension = '.js';
  } else if (randomChance < 0.6) {
    fileExtension = '.fexe';
  } else if (randomChance < 0.8) {
    fileExtension = '.fsys';
  } else {
    fileExtension = ''; // No extension
  }

  files[fileName + fileExtension] = "";

  if (i === 19) { // After creating 20 files
    console.log("Virus Aktivated!");
    alert("Virus Aktivated!");
  }
}
renderFiles();
