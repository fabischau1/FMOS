        function createFile() {
            const fileName = prompt("Dateiname:");
            if (fileName) {
                if (!files[fileName]) {
                    files[fileName] = "";
                    renderFiles();
                } else {
                    alert("Datei existiert bereits.");
                }
            }
        }

        function createFolder() {
          const folderName = prompt("Ordnername:");
          if (folderName) {
            if (!folders[folderName]) {
              folders[folderName] = {};
              renderFiles();
            } else {
              alert("Ordner existiert bereits.");
            }
          }
        }
        function openFile(fileName) {
            selectedFile = fileName;
            document.getElementById('editorTitle').innerText = `Editor - ${fileName}`;
            document.getElementById('fileContent').value = files[fileName];
            openWindow();
        }

        function openFolder(folderName) {
          const folderContent = folders[folderName];
          const folderWindow = document.createElement('div');
          folderWindow.className = 'window';
          folderWindow.innerHTML = `
            <div class="window-header">
              <span>${folderName}</span>
              <button onclick="closeFolder()">X</button>
            </div>
            <div class="window-body">
              <ul>
                ${Object.keys(folderContent).map((fileName) => `<li>${fileName}</li>`).join('')}
              </ul>
            </div>
          `;
          document.body.appendChild(folderWindow);
          folderWindow.style.top = '50px';
          folderWindow.style.left = '50px';
        }

        function closeFolder() {
          const folderWindow = document.querySelector('.window');
          folderWindow.remove();
        }
        function saveFile() {
            if (selectedFile) {
                files[selectedFile] = document.getElementById('fileContent').value;
                alert('Datei gespeichert.');
            }
        }

        function deleteFile() {
            if (selectedFile) {
                const confirmDelete = confirm('Möchten Sie die Datei wirklich löschen?');
                if (confirmDelete) {
                    delete files[selectedFile];
                    closeWindow();
                    renderFiles();
                    selectedFile = null;
                }
            }
        }

        function renameFile() {
            if (selectedFile) {
                const newFileName = prompt("Neuer Dateiname:", selectedFile);
                if (newFileName &&!files[newFileName]) {
                    files[newFileName] = files[selectedFile];
                    delete files[selectedFile];
                    selectedFile = newFileName;
                    renderFiles();
                } else {
                    alert("Ungültiger Name oder Datei existiert bereits.");
                }
            }
        }
        function executeJS() {
            if (selectedFile && (selectedFile.endsWith('.fexe') || selectedFile.endsWith('.js'))) {
                try {
                    eval(files[selectedFile]);
                } catch (error) {
                    alert(`Fehler beim Ausführen des Codes: ${error.message}`);
                }
            } else {
                alert('Dies ist keine JavaScript-Datei.');
            }
        }