        function renderFiles() {
          const desktop = document.getElementById('desktop');
          desktop.innerHTML = '';
          for (const folderName in folders) {
            const folderIcon = document.createElement('div');
            folderIcon.className = 'icon';
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
            fileIcon.innerHTML = fileName;
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