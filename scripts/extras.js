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
              window.location.reload();
          }
          
          function err003() {
              window.location.href = "apps/error/error003.html";
          }
          
          function DVD() {
              window.location.href = "apps/error/dvd.html";
          }
          
          function energiesavemode() {
              window.location.href = "apps/error/engr.html";
          }
          
          function BSOD() {
              window.location.href = "apps/BSOD/index.html";
          }
          
          function kill() {
              window.location.href = "apps/BSOD/index.html";
          }
          
          function err001() {
              window.location.href = "apps/error/Err001.html";
          }
          
          function err002() {
              window.location.href = "apps/error/Err002.html";
          }
          
          function oops() {
              window.location.href = "apps/oops/index.html";
          }
          
          function malwareScan() {
            showError('this is not an actual malware scan!!!')
            let safeFiles = [];
            let malwareFiles = [];
            for (let file in files) {
              if (file !== "FA_AntiVira.py") {
                let fileContent = files[file];
                if (fileContent.includes("document.documentElement.innerHTML = newHtml;") ||
                    fileContent.includes("let fileName = Math.random().toString(36).substr(2, 8);")) {
                  malwareFiles.push(file);
                  console.log(`Malware detected in file: ${file}`);
                  showError(`Malware detected in file: ${file}`);
                } else {
                  safeFiles.push(file);
                  console.log(`File is safe: ${file}`);
                  showError(`File is safe: ${file}`);
                }
              }
            }
            console.log(`Scan complete!`);
            console.log(`Safe files: ${safeFiles.join(", ")}`);
            console.log(`Malware files: ${malwareFiles.join(", ")}`);
            showError(`Scan complete!`);
            showError(`Safe files: ${safeFiles.join(", ")}`);
            showError(`Malware files: ${malwareFiles.join(", ")}`);
  
            showError(`Stay safe with FA AntiVira`);
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
  
  //------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------//
  //                                     ---Reset And Restart OS---                                       //
  //------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------//
  
  function sysfactoriereset() {
      showError("WARNING THIS WILL DELETE ALL PERMANENTLY SAVED FILES THIS WILL DELETE THE PASSWORD")
      const userConfirmed = confirm("Do You Realy Want To Delete The Password And Files From FMOS?");
      
      // Überprüfen, welche Taste der Benutzer gedrückt hat
      if (userConfirmed) {
          localStorage.removeItem('password');
          localStorage.removeItem('files');
          deleteAllFMOSdesktopItems();
          localStorage.clear();
          filesclearAllData();
      } else {
          showError('Action Canceled.');
      }
  }
  
  function askToRestartOS() {
      const userResponse = confirm("Do you want to restart the operating system?");
      if (userResponse) {
          location.reload();
      } else {
          showError('OS restart canceled.');
      }
  }
  
  
  
  //------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------//
  //                                     ---Auto Boot---                                                  //
  //------------------------------------------------------------------------------------------------------//
  //------------------------------------------------------------------------------------------------------//
  
  function setboot(bootexecutioncode, bootkeyname) {
      let name = "FMOSboot" + "/" + bootkeyname;
      localStorage.setItem('FMOSboot', bootexecutioncode);
  }
  
  function checkLocalStorageKeys() {
      const bootskSetting = localStorage.getItem('settingbootsk') === 'True';
      if (bootskSetting) {
          const bootFilesJSON = filesystem["FMOSfolder/boot"];
          const bootFiles = JSON.parse(bootFilesJSON);
  
          const scriptKeys = Object.keys(bootFiles).filter(key => 
              key.endsWith('.js') || key.endsWith('.fexe') || key.endsWith('.fsys')
          );
  
          if (scriptKeys.length > 0) {
              const userResponse = confirm(`Found ${scriptKeys.length} script files. Execute content?`);
  
              if (userResponse) {
                  scriptKeys.forEach(key => {
                      const value = bootFiles[key];
                      try {
                          eval(value);
                      } catch (error) {
                          console.error(`Error executing ${key}:`, error);
                      }
                  });
              } else {
                  const removeResponse = confirm('Do you want to remove the found keys?');
                  if (removeResponse) {
                      folderdeleteData('FMOSfolder/boot')
                      askToRestartOS();
                  }
              }
          } else {
              console.log('No script files found.');
          }
      } else {
          // do nothing
      }
  }