//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Render---                                                     //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//------render-files---------------------------------------------------------------------------------------------

function renderFiles() {
    const desktop = document.getElementById('desktop');
    desktop.innerHTML = '';
    const showFileNames = localStorage.getItem('fmosfilenamessetting') === 'true';
  
    for (const fileName in files) {
      const fileIcon = document.createElement('div');
      fileIcon.className = 'icon';
  
      if (fileName.endsWith('.short')) {
        const contentosshortcut = files[fileName];
        let iconMatch = contentosshortcut.match(/icon:\s*"([^"]+)"/);
        let iconend = iconMatch ? iconMatch[1] : null;
        iconend = "FMOSfolder" + iconend
        if (iconend) {
          const realfile = iconend.split('/').pop();
          const realfolder = iconend.split('/').slice(0, -1).join('/');
  
          // Verschiebe die Deklaration von folderoffile nach oben
          let folderoffile;
          if (iconend !== "/") {
            folderoffile = realfolder.replace(/\/$/, '');  // Entfernt den letzten Schrägstrich
          } else {
            folderoffile = realfolder;  // Keine Veränderung, wenn der Pfad nur "FMOSfolder/" ist
          }
  
          const fileContent = JSON.parse(filesystem[folderoffile])[realfile];
  
          const img = document.createElement('img');
          img.src = fileContent;
          img.style.maxWidth = '100px';
          fileIcon.style.backgroundImage = `url(${fileContent})`;
        } else {
          // nothing
        }
        if (showFileNames) {
          const fileLabel = document.createElement('div');
          fileLabel.className = 'file-label';
          shortcutname = fileName.replace(".short", "");
          fileLabel.innerText = shortcutname;
          fileIcon.appendChild(fileLabel);
        }
        fileIcon.dataset.file = fileName;
        fileIcon.onclick = () => openFile(fileName);
        fileIcon.oncontextmenu = (e) => {
          selectedFile = fileName;
          showContextMenu(e);
          return false;
        };
        
      } else {
        if (showFileNames) {
          const fileLabel = document.createElement('div');
          fileLabel.className = 'file-label';
          fileLabel.innerText = fileName;
          fileIcon.appendChild(fileLabel);
        }
  
        fileIcon.dataset.file = fileName;
        fileIcon.onclick = () => openFile(fileName);
        fileIcon.oncontextmenu = (e) => {
          selectedFile = fileName;
          showContextMenu(e);
          return false;
        };
      }
  
      desktop.appendChild(fileIcon);
    }
    positionIcons();
  }
  
  
  
  function connectdesktops(number) {
      if (number === '1') {
          files = JSON.parse(filesystem[desktoppathdirfull]);
          renderFiles();
      } else if (number === '2') {
          const FMfolderMGRvar = window.getComputedStyle(document.getElementById("folderMGR"));
          filesetData(desktoppathdirfull, JSON.stringify(files));
          if (FMfolderMGRvar.display !== "none" && FMfolderMGRvar.visibility !== "hidden") {
              loadFiles(PathToreloadFolderMGR)
          } else {
              // nothing
          }
      } else {
          console.error(number, 'is not an option')
      }
  }

//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---File And Desktop System---                                    //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------function-names-are-self-explainotory---------------------------------------------------------------------------------------

function openfmosfolder() {
    if (selectedFile && selectedFile.endsWith('.folder')) {
        const folderName = selectedFile.slice(0, -'.folder'.length);

        const fullPath = getFullPath(currentPath, folderName);
        const storageKey = `FMOSfolder${fullPath}`;
        const folderContent = filesystem[storageKey];

        if (folderContent) {
            files = JSON.parse(folderContent);
            folders = {};

            currentPath = fullPath;

            renderFiles();
            showError(`Connected to folder at: ${currentPath}`);
        } else {
            showError('Folder not found.');
        }
    } else {
        showError('Selected file is not a valid folder.');
    }
}

function openfmosfolderfile(name) {
	const pfadname = desktoppathdirfull + '/' + name.slice(0, -'.folder'.length);
	console.log(pfadname)
    if (filesystem.hasOwnProperty(pfadname) && selectedFile && selectedFile.endsWith('.folder')) {
        const folderName = name.slice(0, -'.folder'.length);
		const folderMGR = document.getElementById('folderMGR');
		const nameforvalue = desktoppathdir + '/' + folderName
		const nameforvaluefull = desktoppathdirfull + '/' + folderName
		if (folderMGR.style.display === 'block') {
			document.getElementById('pathInput').value = nameforvalue;
			loadFiles(nameforvaluefull);
		} else {
			showFolderMGR();
			document.getElementById('pathInput').value = nameforvalue;
			loadFiles(nameforvaluefull);
		}
    } else {
        showError('Selected file is not a valid folder.');
    }
}

function openfmosfolderinfolmgr(name) {
	const varfinalofvalue = PathToreloadFolderMGR + (PathToreloadFolderMGR === '/' ? '' : '/') + name
	const varfinalofvaluefull = 'FMOSfolder' + varfinalofvalue
	if (filesystem.hasOwnProperty(varfinalofvaluefull)) {
		document.getElementById('pathInput').value = varfinalofvalue;
		loadFiles(varfinalofvalue);
    } else {
        showError('This folder is not a valid folder.');
    }
}

const ROOT_PATH = '/';

function getFullPath(folderPath, folderName) {
    return `${folderPath}/${folderName}`.replace('//', '/');
}

let currentPath = ROOT_PATH;

function showCurrentFolder() {
    const folderName = currentPath.split('/').pop() || '/';
    showError(`Current folder: ${folderName}\nPath: ${currentPath}`);
}

function checkIfPathExists(path) {
    const allKeys = Object.keys(localStorage);
    return allKeys.includes(`FMOSfolder${path}`);
}

function saveFolderWithPath() {
    const folderPath = prompt("Enter folder path (e.g., /path/to/folder):", ROOT_PATH);
    const folderName = prompt("Enter folder name:");

    if (folderPath && folderName) {
        const pathSegments = folderPath.split('/').filter(Boolean);
        let currentFullPath = ROOT_PATH;

        for (const segment of pathSegments) {
            currentFullPath = getFullPath(currentFullPath, segment);
            if (!checkIfPathExists(currentFullPath)) {
                showError(`The path "${currentFullPath}" does not exist.`);
                return;
            }
        }

        // Save the folder if all paths exist
        const fullPath = getFullPath(folderPath, folderName);
        const storageKey = `FMOSfolder${fullPath}`;
        filesetData(storageKey, JSON.stringify(files));
		const folderfilename = folderName + '.folder'
		const fullfoldername = folderPath.slice(1);
		CreateFile(fullfoldername, folderfilename, '')
        showError(`Folder saved at ${fullPath}`);
    } else {
        showError("Folder path or name is invalid.");
    }
}


function saveFolderWithNameOnly() {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
        const fullPath = getFullPath(currentPath, folderName);
        const storageKey = `FMOSfolder${fullPath}`;
        filesetData(storageKey, JSON.stringify(files));
		const folderfilename = folderName + '.folder'
		const fullfoldername = currentPath.slice(1);
		CreateFile(fullfoldername, folderfilename, '')
        showError(`Folder saved at ${fullPath}`);
    } else {
        showError("Folder name is invalid.");
    }
}

function loadFolderWithPath() {
    const folderPath = prompt("Enter folder path (e.g., /path/to/folder):", ROOT_PATH);
    if (folderPath) {
        const storageKey = `FMOSfolder${folderPath}`;
        const folderContent = filesystem[storageKey];
        if (folderContent) {
            files = JSON.parse(folderContent);
			currentPath = folderPath;
            folders = {};
            renderFiles();
        } else {
            showError('Folder not found at the specified path.');
        }
    } else {
        showError('Folder path is invalid.');
    }
}

function loadFolderWithNameOnly() {
    const folderName = prompt("Enter folder name:");

    if (folderName) {
        const fullPath = getFullPath(currentPath, folderName);
        const storageKey = `FMOSfolder${fullPath}`;
        const folderContent = filesystem[storageKey];

        if (folderContent) {
            files = JSON.parse(folderContent);
            folders = {};
            
            currentPath = fullPath;

            renderFiles();
            showError(`Connected to folder at: ${currentPath}`);
        } else {
            showError('Folder not found.');
        }
    } else {
        showError('Folder name is invalid.');
    }
}

function deleteFolderWithPath() {
    const folderPath = prompt("Enter folder path to delete (e.g., /path/to/folder):", ROOT_PATH);
    if (folderPath) {
        const storageKey = `FMOSfolder${folderPath}`;
        if (filesystem.hasOwnProperty(storageKey)) {
            folderdeleteData(storageKey);
            showError(`Folder at ${folderPath} has been deleted.`);
        } else {
            showError('Folder not found at the specified path.');
        }
    } else {
        showError('Folder path is invalid.');
    }
}

function deleteFolderWithNameOnly() {
    const folderName = prompt("Enter folder name to delete:");
    if (folderName) {
        const fullPath = getFullPath(ROOT_PATH, folderName);
        const storageKey = `FMOSfolder${fullPath}`;
        if (filesystem.hasOwnProperty(storageKey)) {
            folderdeleteData(storageKey);
            showError(`Folder '${folderName}' has been deleted.`);
        } else {
            showError('Folder not found.');
        }
    } else {
        showError('Folder name is invalid.');
    }
}

function deleteAllFolders() {
    if (confirm('Are you sure you want to delete all folders?')) {
		filesclearAllData();
    }
}

function showAllFolders() {
	const fmosFolderKeys = Object.keys(filesystem).filter(key => key.startsWith('FMOSfolder'));
    if (fmosFolderKeys.length === 0) {
        showError('No folders found.');
        return;
    }
    const folderNames = fmosFolderKeys.map(key => key.replace('FMOSfolder', ''));
    
    showError(`Folders:\n${folderNames.join('\n')}`);
}

//-------loads-files-out-of-secure-folder-------------------------------------------------------------------------------------

function loads() {
	showError("Tip: You Can Set A Password By Clicking On Settings Then Password");
    const enteredPassword = prompt("Password:");

    const storedPassword = localStorage.getItem('password');

    if (enteredPassword === storedPassword) {
        if (localStorage.getItem('files')) {
			files = JSON.parse(localStorage.getItem('files'));
		}
		renderFiles();
    } else {
		showError("Password incorrect")
        setTimeout(askForPassword, 3000);
    }
}

//the real file system is in boot.js