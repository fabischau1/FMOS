//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Render---                                                     //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//------render-files---------------------------------------------------------------------------------------------

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
	const showFileNames = localStorage.getItem('fmosfilenamessetting') === 'true';

	for (const fileName in files) {
		const fileIcon = document.createElement('div');
		fileIcon.className = 'icon';

		// Only create and append the file label if showFileNames is true
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

		desktop.appendChild(fileIcon);
	}
	positionIcons();
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
        const folderContent = localStorage.getItem(storageKey);

        if (folderContent) {
            files = JSON.parse(folderContent);
            folders = {};

            currentPath = fullPath;

            renderFiles();
            alert(`Connected to folder at: ${currentPath}`);
        } else {
            showError('Folder not found.');
        }
    } else {
        showError('Selected file is not a valid folder.');
    }
}

const ROOT_PATH = '/';

function getFullPath(folderPath, folderName) {
    return `${folderPath}/${folderName}`.replace('//', '/');
}

let currentPath = ROOT_PATH;

function showCurrentFolder() {
    const folderName = currentPath.split('/').pop() || '/';
    alert(`Current folder: ${folderName}\nPath: ${currentPath}`);
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
        localStorage.setItem(storageKey, JSON.stringify(files));
        alert(`Folder saved at ${fullPath}`);
    } else {
        showError("Folder path or name is invalid.");
    }
}


function saveFolderWithNameOnly() {
    const folderName = prompt("Enter folder name:");
    if (folderName) {
        const fullPath = getFullPath(ROOT_PATH, folderName);
        const storageKey = `FMOSfolder${fullPath}`;
        localStorage.setItem(storageKey, JSON.stringify(files));
        alert(`Folder saved at ${fullPath}`);
    } else {
        showError("Folder name is invalid.");
    }
}

function loadFolderWithPath() {
    const folderPath = prompt("Enter folder path (e.g., /path/to/folder):", ROOT_PATH);
    if (folderPath) {
        const storageKey = `FMOSfolder${folderPath}`;
        const folderContent = localStorage.getItem(storageKey);
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
        const folderContent = localStorage.getItem(storageKey);

        if (folderContent) {
            files = JSON.parse(folderContent);
            folders = {};
            
            currentPath = fullPath;

            renderFiles();
            alert(`Connected to folder at: ${currentPath}`);
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
        if (localStorage.getItem(storageKey)) {
            localStorage.removeItem(storageKey);
            alert(`Folder at ${folderPath} has been deleted.`);
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
        if (localStorage.getItem(storageKey)) {
            localStorage.removeItem(storageKey);
            alert(`Folder '${folderName}' has been deleted.`);
        } else {
            showError('Folder not found.');
        }
    } else {
        showError('Folder name is invalid.');
    }
}

function deleteAllFolders() {
    const allKeys = Object.keys(localStorage);
    const fmosFolderKeys = allKeys.filter(key => key.startsWith('FMOSfolder'));
    if (fmosFolderKeys.length === 0) {
        showError('No folders to delete.');
        return;
    }
    if (confirm('Are you sure you want to delete all folders?')) {
        fmosFolderKeys.forEach(key => localStorage.removeItem(key));
        alert('All folders have been deleted, and the root path "/" has been reset.');
    }
}

function showAllFolders() {
    const allKeys = Object.keys(localStorage);
    const fmosFolderKeys = allKeys.filter(key => key.startsWith('FMOSfolder'));
    if (fmosFolderKeys.length === 0) {
        showError('No folders found.');
        return;
    }
    const folderNames = fmosFolderKeys.map(key => key.replace('FMOSfolder', ''));
    alert(`Folders:\n${folderNames.join('\n')}`);
}

function savedesktopWithCustomName() {
    const customName = prompt("Desktop Name:");
    if (customName) {
        const storageKey = `FMOSdesktop${customName}`;
        localStorage.setItem(storageKey, JSON.stringify(files));
        alert(`Files Saved In ${storageKey}`);
    }
}

function loaddesktopContent() {
    const desktopname = prompt("Desktop Name:");
    if (desktopname) {
        const storageKey = `FMOSdesktop${desktopname}`;
        const folderContent = localStorage.getItem(storageKey);

        if (folderContent) {
            files = JSON.parse(folderContent);
            // Reset the existing folders
            folders = {};

            // Render files and folders
            renderFiles();
        } else {
            showError('No Folder Found With That Name.');
        }
    }
}

function showAllFMOSdesktopNames() {
    const allKeys = Object.keys(localStorage);
    const fmosFolderKeys = allKeys.filter(key => key.startsWith('FMOSdesktop'));

    if (fmosFolderKeys.length === 0) {
        showError('Nothing Found.');
        console.log('No FMOSdesktop entries found.');
        return;
    }

    const folderNames = fmosFolderKeys.map(key => key.replace('FMOSdesktop', ''));
    const message = folderNames.join('\n');

    alert(`FMOSdesktop entries:\n${message}`);
    console.log('FMOSdesktop entries:');
    console.log(message);
}
function deleteAllFMOSdesktopItems() {
    const allKeys = Object.keys(localStorage);
    const fmosFolderKeys = allKeys.filter(key => key.startsWith('FMOSdesktop'));

    if (fmosFolderKeys.length === 0) {
        showError('No Folders To Delete.');
        console.log('No FMOSdesktop entries found to delete.');
        return;
    }

    const confirmation = confirm('Are you sure you want to delete all FMOSdesktop entries? This action cannot be undone.');

    if (!confirmation) {
        alert('Operation cancelled.');
        console.log('Operation cancelled.');
        return;
    }

    fmosFolderKeys.forEach(key => localStorage.removeItem(key));

    alert('All FMOSdesktop entries have been deleted.');
    console.log('The following FMOSdesktop entries have been deleted:');
    console.log(fmosFolderKeys.join('\n'));
}

function deleteSpecificdesktop() {
    const desktopname = prompt('Enter the name of the folder to delete:');

    if (!desktopname) {
        showError('An error has occurred.');
        return;
    }

    const folderKey = `FMOSdesktop${desktopname}`;

    if (!localStorage.getItem(folderKey)) {
        showError('Folder Does Not Ecsist');
        return;
    }

    deletedesktopContents(folderKey);
    localStorage.removeItem(folderKey);

    alert(`Folder '${desktopname}' has been deleted.`);
    console.log(`Folder '${desktopname}' and its contents have been deleted.`);
}

function deletedesktopContents(folderKey) {
    const allKeys = Object.keys(localStorage);
    const folderKeys = allKeys.filter(key => key.startsWith(folderKey));

    folderKeys.forEach(key => localStorage.removeItem(key));
}

function migratefolderstodesktops() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        
        if (key.startsWith('FMOSfolder')) {
            let newKey = key.replace('FMOSfolder', 'FMOSdesktop');
            
            localStorage.setItem(newKey, localStorage.getItem(key));
            
            localStorage.removeItem(key);
        }
    }
}

//-------loads-files-out-of-secure-folder-------------------------------------------------------------------------------------

function loads() {
	alert("Tip: You Can Set A Password By Clicking On Settings Then Password");
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