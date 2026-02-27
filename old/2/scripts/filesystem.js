        function renderFiles() {
          const desktop = document.getElementById('desktop');
          desktop.innerHTML = '';
          for (const folderName in folders) {
            const folderIcon = document.createElement('div');
            folderIcon.className = 'icon';
			folderIcon.dataset.folder = folderName;
            folderIcon.innerHTML = folderName;
            folderIcon.onclick = () => openFolder(folderName);
            folderIcon.oncontextmenu = (e) => {
              selectedFile = folderName;
              showContextMenu(e);
              return false;
            };
            folderIcon.dataset.folder = folderName;
            desktop.appendChild(folderIcon);
          }
          for (const fileName in files) {
            const fileIcon = document.createElement('div');
            fileIcon.className = 'icon';
            fileIcon.dataset.file = fileName;
			const fileNameSpan = document.createElement('span');
		    fileNameSpan.textContent = fileName;
		    fileNameSpan.style.color = ''; // Weißer Text
			fileNameSpan.style.fontSize = '20px'; // Kleinerer Text
		    fileNameSpan.style.position = 'absolute'; // Positionierung unten
		    fileNameSpan.style.bottom = '-5'; // Unten positionieren
		    fileNameSpan.style.left = '50%'; // Zentrieren
		    fileNameSpan.style.transform = 'translateX(-50%)'; // Zentrieren
		    fileIcon.appendChild(fileNameSpan);
            fileIcon.onclick = () => openFile(fileName);
            fileIcon.oncontextmenu = (e) => {
              selectedFile = fileName;
              showContextMenu(e);
              return false;
            };
            fileIcon.dataset.file = fileName;
            desktop.appendChild(fileIcon);
          }
          positionIcons();
        }