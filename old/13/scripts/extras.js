//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Extras---                                                     //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

function downloadAllFiles() {
  for (const file in files) {
    const fileContent = files[file];
    const fileType = getFileType(file);
    const blob = new Blob([fileContent], { type: fileType.mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file;
    a.click();
    URL.revokeObjectURL(url);
  }
}

function getFileType(fileName) {
  const fileExtensions = {
    '.js': { mime: 'application/javascript' },
    '.fexe': { mime: 'application/octet-stream' },
    '.fsys': { mime: 'application/octet-stream' },
	'.fak': { mime: 'application/html' },
    '.py': { mime: 'text/x-python' },
    '.zfp': { mime: 'application/zip' },
    '.html': { mime: 'text/html' },
    '.url': { mime: 'text/html' },
  };
  const fileExtension = Object.keys(fileExtensions).find((ext) => fileName.endsWith(ext));
  return fileExtensions[fileExtension];
}

function openDiscordLink() {
        const url = 'https://discord.gg/XnPCx68ZN3';
        window.open(url, '_blank');
    }
		
		function restartOS() {
			window.location.href = "https://fabischau1.github.io/FMOS";
		}
		
		function err003() {
			window.location.href = "https://fabischau1.github.io/FMOS/error003";
		}
		
		function DVD() {
			window.location.href = "https://fabischau1.github.io/FMOS/dvd";
		}
		
		function energiesavemode() {
			window.location.href = "https://fabischau1.github.io/FMOS/engr";
		}
		
		function BSOD() {
			window.location.href = "https://fabischau1.github.io/BSOD";
		}
		
		function kill() {
			window.location.href = "https://fabischau1.github.io/BSOD";
		}
		
		function err001() {
			window.location.href = "https://fabischau1.github.io/FMOS/Err001";
		}
		
		function err002() {
			window.location.href = "https://fabischau1.github.io/FMOS/Err002";
		}
		
		function oops() {
			window.location.href = "https://fabischau1.github.io/oops";
		}
		
		function malwareScan() {
		  alert('this is not an actual malware scan!!!')
          let safeFiles = [];
          let malwareFiles = [];
          for (let file in files) {
            if (file !== "FA_AntiVira.py") {
              let fileContent = files[file];
              if (fileContent.includes("document.documentElement.innerHTML = newHtml;") ||
                  fileContent.includes("let fileName = Math.random().toString(36).substr(2, 8);")) {
                malwareFiles.push(file);
                console.log(`Malware detected in file: ${file}`);
				alert(`Malware detected in file: ${file}`);
              } else {
                safeFiles.push(file);
                console.log(`File is safe: ${file}`);
				alert(`File is safe: ${file}`);
              }
            }
          }
          console.log(`Scan complete!`);
          console.log(`Safe files: ${safeFiles.join(", ")}`);
          console.log(`Malware files: ${malwareFiles.join(", ")}`);
		  alert(`Scan complete!`);
          alert(`Safe files: ${safeFiles.join(", ")}`);
          alert(`Malware files: ${malwareFiles.join(", ")}`);

          alert(`Stay safe with FA AntiVira`);
        }

function uploadFile() {
  const input = document.createElement('input');
  input.type = 'file';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Warnung, wenn die Datei ein Bild ist
    if (file.type.startsWith('image/')) {
      showError('WARNING: Images can get quite big');
    }

    // Überprüfe die Dateigröße
    const maxFileSize = 1 * 1024 * 1024; // 1 MB
    if (file.size > maxFileSize) {
      showError('ERROR: Files must be smaller than 1 MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const fileContent = e.target.result;
      const fileName = file.name;

      // Datei speichern, Bild- und Nicht-Bild-Dateien gleichermaßen unterstützen
      files[fileName] = fileContent;
      renderFiles();

      // Zeige eine Vorschau für Bilddateien
      if (file.type.startsWith('image/')) {
        const img = document.createElement('img');
        img.src = fileContent; // Base64-String
        img.style.maxWidth = '100px'; // Begrenze die Größe der Vorschau
        document.body.appendChild(img); // Füge das Bild zum DOM hinzu
      }
    };

    // Bilddateien als DataURL lesen, um Vorschau zu ermöglichen
    if (file.type.startsWith('image/')) {
      reader.readAsDataURL(file);
    } else {
      // Text oder andere Dateitypen als Text lesen
      reader.readAsText(file);
    }
  };
  input.click();
}
