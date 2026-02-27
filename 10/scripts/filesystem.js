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

function loads() {
    const enteredPassword = prompt("Password:");

    const storedPassword = localStorage.getItem('password');

    if (enteredPassword === storedPassword) {
        if (localStorage.getItem('files')) {
			files = JSON.parse(localStorage.getItem('files'));
		}
		renderFiles();
    } else {
		alert("Password incorrect")
        setTimeout(askForPassword, 3000);
    }
}