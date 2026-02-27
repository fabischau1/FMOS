        function createFile() {
            const fileName = prompt("Filename:");
            if (fileName) {
                if (!files[fileName]) {
                    files[fileName] = "";
                    renderFiles();
                } else {
                    alert("File alredy exsists.");
                }
            }
        }

        function createFolder() {
          const folderName = prompt("Foldername:");
          if (folderName) {
            if (!folders[folderName]) {
              folders[folderName] = {};
              renderFiles();
            } else {
              alert("Ordner alredy exsists.");
            }
          }
        }

        function openFile(fileName) {
          selectedFile = fileName;
          document.getElementById('editorTitle').innerText = `Editor - ${fileName}`;
          document.getElementById('fileContent').value = files[fileName];
          openWindow();
          if (fileName === "12345.js") {
            eval("alert(\"You found an easter egg! 🎉\");");
          }
		  if (fileName === "BIOS") {
		    eval("alert(\"You found an easter egg! 🎉\");");
            window.location.href = "https://fabischau1.github.io/BIOS/";
          }
		  if (fileName === "old.fsys") {
		    eval("alert(\"You found an easter egg! 🎉\");");
            window.location.href = "https://fabischau1.github.io/FMOSold/";
          }
		  if (fileName === "oops") {
		    eval("alert(\"You found an easter egg! 🎉\");");
            window.location.href = "https://fabischau1.github.io/oops/";
          }
		  if (fileName === "BSOD") {
		    eval("alert(\"You found an easter egg! 🎉\");");
            window.location.href = "https://fabischau1.github.io/BSOD/";
          }
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
                alert('File saved.');
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
                    alert("ERROR");
                }
            }
        }

        function openWindow() {
            document.getElementById('editorWindow').style.display = 'flex';
            document.getElementById('fileContent').focus();
            window.scrollTo(0, 0);
        }

        function closeWindow() {
            document.getElementById('editorWindow').style.display = 'none';
            document.getElementById('fileContent').blur();
        }

        function showContextMenu(event) {
            const contextMenu = document.getElementById('contextMenu');
            contextMenu.style.top = `${event.clientY}px`;
            contextMenu.style.left = `${event.clientX}px`;
            contextMenu.style.display = 'block';
            document.addEventListener('click', hideContextMenu);
        }

        function hideContextMenu() {
            document.getElementById('contextMenu').style.display = 'none';
            document.removeEventListener('click', hideContextMenu);
        }

        // Add a function to close the HTML preview window
        function closeHTMLPreviewWindow() {
            document.getElementById('htmlPreviewWindow').style.display = 'none';
        }

		function executeHTML() {
			if (selectedFile && selectedFile.endsWith('.html') || selectedFile.endsWith('.url')) {
				const htmlContent = files[selectedFile];
				const iframe = document.getElementById('htmlPreview');
				iframe.srcdoc = htmlContent;
				iframe.width = '100%';
				iframe.height = '550px'; // set height to 600px
				document.getElementById('htmlPreviewWindow').style.display = 'block';
			} else {
				alert('ERROR This Filetype can not run HTML.');
			}
		}

		// Update the executeJS function to call executeHTML for HTML files
		function executeJS() {
		    if (selectedFile && (selectedFile.endsWith('.fexe') || selectedFile.endsWith('.js') || selectedFile.endsWith('.py') || selectedFile.endsWith('.zfp') || selectedFile.endsWith('.fsys'))) {
		        try {
		            eval(files[selectedFile]);
		        } catch (error) {
		            alert(`ERROR: ${error.message}`);
		        }
		    } else if (selectedFile && selectedFile.endsWith('.html') || selectedFile.endsWith('.url')) {
		        executeHTML();
		    } else {
		        alert('ERROR This Filetype can not run Javaskript.');
		    }
		}