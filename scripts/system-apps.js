//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---File Editor---                                                //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

function openWindow() {
    document.getElementById('editorWindow').style.display = 'flex';
    document.getElementById('fileContent').focus();
    window.scrollTo(0, 0);
}

function closeWindow() {
    document.getElementById('editorWindow').style.display = 'none';
    document.getElementById('fileContent').blur();
}

//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Terminals---                                                  //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------terminal-one-------------------------------------------------------------------------------------------

let terminalWindows = [];

function executeJSInTerminal() {
  showError("WARNING DONT EXECUTE CODE FROM STRANGERS!!!");

  const terminalWindow = document.createElement('div');
  terminalWindow.className = 'terminal-window';
  terminalWindow.innerHTML = `
    <div class="terminal-header">
      <div class="terminal-title">FM Shell</div>
      <div class="terminal-buttons">
        <button class="terminal-button" id="close-button">×</button>
      </div>
    </div>
    <div class="terminal-body">
      <input id="terminal-input" placeholder="Enter command..." type="text" />
      <div id="terminal-output"></div>
    </div>
  `;
  document.body.appendChild(terminalWindow);

  terminalWindow.style.display = 'block';
  terminalWindow.style.opacity = 0;
  terminalWindow.style.transform = 'scale(0.5)';

  setTimeout(() => {
    terminalWindow.style.transition = 'opacity 0.5s, transform 0.5s';
    terminalWindow.style.opacity = 1;
    terminalWindow.style.transform = 'scale(1)';
  }, 10);

  const closeButton = terminalWindow.querySelector('#close-button');
  const fullscreenButton = terminalWindow.querySelector('#fullscreen-button');
  const terminalInput = terminalWindow.querySelector('#terminal-input');
  const terminalOutput = terminalWindow.querySelector('#terminal-output');

  let customVer = "FM Shell v2.0";

  closeButton.addEventListener('click', () => {
    terminalWindow.style.transition = 'opacity 0.5s, transform 0.5s';
    terminalWindow.style.opacity = 0;
    terminalWindow.style.transform = 'scale(0.5)';
    setTimeout(() => {
      terminalWindow.style.display = 'none';
    }, 500);
  });

  // Command Input Handler
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && terminalInput.value.trim() !== '') {
        e.preventDefault();

        const input = terminalInput.value.trim();
        terminalInput.value = '';
        
        // Display the command
        appendToOutput(`$ ${input}`);

        // Handle commands
        if (input.startsWith('echo ')) {
            const message = input.slice(5).trim();
            appendToOutput(message);
        } else if (input === 'ver') {
            appendToOutput(customVer);
        } else if (input === 'whatsys') {
            appendToOutput(systemName);
        } else if (input === 'clear') {
            terminalOutput.innerHTML = '';
        } else if (input === 'processmgr') {
            toggleProcessManager()
        } else if (input.startsWith('msg ')) {
            const message = input.slice(4).trim();
            showError(message);
        } else if (input.startsWith('forceerror ')) {
            const terminalerror = input.slice(11).trim();
            if (terminalerror === "err1") {err001()} else if (terminalerror === "err2") {err002()} else if (terminalerror === "err3") {err003()} else {appendToOutput('Error: No Specified Error');}
        } else {
            try {
            const result = eval(input); // Execute JavaScript code
            appendToOutput(result !== undefined ? result : '');
            } catch (error) {
            appendToOutput(`Error: ${error.message}`, 'error');
            }
        }

        terminalOutput.scrollTop = terminalOutput.scrollHeight; // Auto-scroll
        }
    });

  // Helper function to append to terminal output
  function appendToOutput(content, type = 'output') {
    const line = document.createElement('div');
    line.className = type;
    line.textContent = content;
    terminalOutput.appendChild(line);
  }

  // Enable dragging
  let offsetX = 0, offsetY = 0;
  const header = terminalWindow.querySelector('.terminal-header');
  header.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - terminalWindow.getBoundingClientRect().left;
    offsetY = e.clientY - terminalWindow.getBoundingClientRect().top;
    document.addEventListener('mousemove', dragTerminal);
    document.addEventListener('mouseup', stopDragging);
  });

  function dragTerminal(e) {
    terminalWindow.style.left = `${e.clientX - offsetX}px`;
    terminalWindow.style.top = `${e.clientY - offsetY}px`;
  }

  function stopDragging() {
    document.removeEventListener('mousemove', dragTerminal);
    document.removeEventListener('mouseup', stopDragging);
  }
}

//-------terminal-two-------------------------------------------------------------------------------------------

        function showNeonTerminal() {
			showError("WARNING DONT EXECUTE CODE FROM STRANGERS")
            document.getElementById('neonTerminal').style.display = 'flex';
            document.getElementById('neonTerminalInput').focus();
            window.scrollTo(0, 0);
        }

        function hideNeonTerminal() {
            document.getElementById('neonTerminal').style.display = 'none';
        }

        function toggleTerminalFullscreen() {
            const terminal = document.getElementById('neonTerminal');
            if (terminal.style.width === '100vw' && terminal.style.height === '100vh') {
                terminal.style.width = '400px';
                terminal.style.height = '300px';
                terminal.style.top = '50px';
                terminal.style.left = '50px';
            } else {
                terminal.style.width = '100vw';
                terminal.style.height = '100vh';
                terminal.style.top = '0';
                terminal.style.left = '0';
            }
        }

        function runNeonTerminalJS() {
            const code = document.getElementById('neonTerminalInput').value;
            const ask = confirm("Do you realy want to execute code?")
            if (ask === true) {
                try {
                    eval(code);
                } catch (error) {
                    showError(`ERROR: ${error.message}`);
                }
            } else { 
                showError('code not executed')
            }
        }

        // Drag functionality for the terminal
        let isDraggingTerminal = false;
        let terminalOffsetX, terminalOffsetY;

        document.querySelector('.neon-terminal-header').addEventListener('mousedown', (e) => {
            isDraggingTerminal = true;
            terminalOffsetX = e.clientX - document.getElementById('neonTerminal').offsetLeft;
            terminalOffsetY = e.clientY - document.getElementById('neonTerminal').offsetTop;

            document.addEventListener('mousemove', handleTerminalMouseMove);
            document.addEventListener('mouseup', handleTerminalMouseUp);
        });

        function handleTerminalMouseMove(e) {
            if (isDraggingTerminal) {
                const newX = e.clientX - terminalOffsetX;
                const newY = e.clientY - terminalOffsetY;

                const maxX = window.innerWidth - document.getElementById('neonTerminal').offsetWidth;
                const maxY = window.innerHeight - document.getElementById('neonTerminal').offsetHeight;

                if (newX < 0) {
                    document.getElementById('neonTerminal').style.left = '0';
                } else if (newX > maxX) {
                    document.getElementById('neonTerminal').style.left = `${maxX}px`;
                } else {
                    document.getElementById('neonTerminal').style.left = `${newX}px`;
                }

                if (newY < 0) {
                    document.getElementById('neonTerminal').style.top = '0';
                } else if (newY > maxY) {
                    document.getElementById('neonTerminal').style.top = `${maxY}px`;
                } else {
                    document.getElementById('neonTerminal').style.top = `${newY}px`;
                }
            }
        }

        function handleTerminalMouseUp() {
            isDraggingTerminal = false;
            document.removeEventListener('mousemove', handleTerminalMouseMove);
            document.removeEventListener('mouseup', handleTerminalMouseUp);
        }

//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Process-MGR---                                                //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

let updateInterval = null;

function toggleProcessManager() {
    const processManager = document.getElementById('fmosProcessManager');
    if (processManager.style.display === 'none') {
        processManager.style.display = 'block';
        updateProcessManager();
        startUpdateInterval();
    } else {
        processManager.style.display = 'none';
        stopUpdateInterval();
    }
}

function startUpdateInterval() {
    if (!updateInterval) {
        updateInterval = setInterval(updateProcessManager, 2000);
    }
}

function stopUpdateInterval() {
    if (updateInterval) {
        clearInterval(updateInterval);
        updateInterval = null;
    }
}

function updateProcessManager() {
    const processList = document.getElementById('processList');
    const headers = document.querySelector('.process-row.header');
    processList.innerHTML = '';
    processList.appendChild(headers);

    if (openedWindows.length === 0) {
        processList.innerHTML += '<div class="process-row">No apps are running</div>';
        return;
    }

    openedWindows.forEach(window => {
        const row = document.createElement('div');
        row.className = 'process-row';

        const idCell = document.createElement('div');
        idCell.textContent = window.id;
        row.appendChild(idCell);

        const nameCell = document.createElement('div');
        nameCell.textContent = window.type;
        row.appendChild(nameCell);

        const urlCell = document.createElement('div');
        const iframe = document.getElementById(window.id)?.querySelector('#iframe');
        urlCell.textContent = iframe ? iframe.src : 'URL not found';
        row.appendChild(urlCell);

        const actionCell = document.createElement('div');
        const endProcessButton = document.createElement('button');
        endProcessButton.className = 'process-mgr-close-button';
        endProcessButton.textContent = 'End Process';
        endProcessButton.onclick = () => closeiframe(window.id);
        actionCell.appendChild(endProcessButton);
        row.appendChild(actionCell);

        processList.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const processManager = document.getElementById('fmosProcessManager');
    const headerElement = document.getElementById('processManagerHeader');
    if (headerElement) {
        processmgrMakeDraggable(headerElement);
    }
});

// Renamed makeDraggable to processmgrMakeDraggable
function processmgrMakeDraggable(element) {
    let offsetX, offsetY;

    element.addEventListener('mousedown', (e) => {
        offsetX = e.clientX - element.parentElement.getBoundingClientRect().left;
        offsetY = e.clientY - element.parentElement.getBoundingClientRect().top;

        function mouseMoveHandler(e) {
            element.parentElement.style.left = `${e.clientX - offsetX}px`;
            element.parentElement.style.top = `${e.clientY - offsetY}px`;
        }

        document.addEventListener('mousemove', mouseMoveHandler);

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        }, { once: true });
    });
}

//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Folder MGR---                                                 //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

let foldermgrfilespath;
let foldermgrfolderfrompathcontent;
let PathToreloadFolderMGR;

function showFolderMGR() {
    document.getElementById('folderMGR').style.display = 'block';
	document.getElementById('pathInput').value = '';
    loadFiles();
}

function folderMGRCreateFile() {
	if (filesystem.hasOwnProperty(foldermgrfilespath)) {
		let foldermgrfilename = prompt('Filename:');
		if (foldermgrfilename &&!foldermgrfiles[foldermgrfilename]&&!foldermgrfilename.endsWith('.folder')) {
			foldermgrfiles[foldermgrfilename] = "";
			filesetData(foldermgrfilespath, JSON.stringify(foldermgrfiles));
			connectdesktops('1');
			loadFiles(PathToreloadFolderMGR);
		} else {
			showError('ERROR (if u created a file with the extention .folder please use the create folder butten)')
		}
	} else {
		showError('Sorry, this path does not exist. Tipp: Sometimes you have to input the path again and click enter. or the path realy does not exist');
	}
}

function folderMGRCreateFolder() {
	if (filesystem.hasOwnProperty(foldermgrfilespath)) {
		let foldermgrfoldername = prompt('Foldername (without extention): ');
		let foldermgrfoldernamefile = foldermgrfoldername + '.folder'
		if (foldermgrfoldernamefile &&!foldermgrfiles[foldermgrfoldernamefile]) {
			let newfolderkey = foldermgrfilespath + (PathToreloadFolderMGR === '/' ? '' : '/') + foldermgrfoldername;
			filesetData(newfolderkey, JSON.stringify(''));
			foldermgrfiles[foldermgrfoldernamefile] = "";
			filesetData(foldermgrfilespath, JSON.stringify(foldermgrfiles));
			connectdesktops('1');
			loadFiles(PathToreloadFolderMGR);
		} else {
			showError('ERROR')
		}
	} else {
		showError('Sorry, this path does not exist. Tipp: Sometimes you have to input the path again and click enter. or the path realy does not exist');
	}
}

function folderMGRRenameFolder() {
	if (filesystem.hasOwnProperty(foldermgrfilespath)) {
		let foldernameold = prompt('Name Of Folder you Want to Rename (without extention) :');
		let oldfolder = foldernameold + '.folder';
		if (foldermgrfiles.hasOwnProperty(oldfolder)) {
			let message = 'New Name of' + oldfolder + ' (without extention) :';
			let foldername = prompt(message, oldfolder);
			let newfolder = foldername + '.folder';
			if (foldername &&!foldermgrfiles.hasOwnProperty(newfolder)) {
				foldermgrfiles[newfolder] = foldermgrfiles[oldfolder];
				delete foldermgrfiles[oldfolder];
				filesetData(foldermgrfilespath, JSON.stringify(foldermgrfiles));
				let newfolderkey = foldermgrfilespath + (PathToreloadFolderMGR === '/' ? '' : '/') + foldername;
				let oldfolderkey = foldermgrfilespath + (PathToreloadFolderMGR === '/' ? '' : '/') + foldernameold;
				let oldfoldercontentjson = filesystem[oldfolderkey];
				let oldfoldercontent = JSON.parse(oldfoldercontentjson) || {};
				filesetData(newfolderkey, JSON.stringify(oldfoldercontent));
				filedeleteData(oldfolderkey);
				connectdesktops('1');
				loadFiles(PathToreloadFolderMGR);
			} else {
				showError('No Name Given Or There is an already ecsisting folder');
			}
		} else {
			showError('This Folder Does Not exist');
		}
	} else {
		showError('Sorry, this path does not exist. Tipp: Sometimes you have to input the path again and click enter. or the path realy does not exist');
	}
}

function folderMGRDeleteFolder() {
	if (filesystem.hasOwnProperty(foldermgrfilespath)) {
		let foldername = prompt('Name Of folder you Want to Delete (without extention) :');
		let folder = foldername + '.folder';
		if (foldername &&foldermgrfiles.hasOwnProperty(folder)) {
			if (confirm('Are you sure you want to delete this Folder?')) {
				if (confirm('This will delete the entire Folder: ' + folder)) {
					delete foldermgrfiles[folder];
					filesetData(foldermgrfilespath, JSON.stringify(foldermgrfiles));
					let folderkeyname = foldermgrfilespath + (PathToreloadFolderMGR === '/' ? '' : '/') + foldername;
					folderdeleteData(folderkeyname);
					connectdesktops('1');
					loadFiles(PathToreloadFolderMGR);
				}
			}
		} else {
			showError('This folder Does Not exist');
		}
	} else {
		showError('Sorry, this path does not exist. Tipp: Sometimes you have to input the path again and click enter. or the path realy does not exist');
	}
}

function folderMGRRenameFile() {
	if (filesystem.hasOwnProperty(foldermgrfilespath)) {
		let oldfile = prompt('Name Of File you Want to Rename:')
		if (foldermgrfiles.hasOwnProperty(oldfile)&&!oldfile.endsWith('.folder')) {
			let message = 'New Name of' + oldfile + ':'
			let newfile = prompt(message, oldfile)
			if (newfile &&!foldermgrfiles[newfile]&&!newfile.endsWith('.folder')) {
				foldermgrfiles[newfile] = foldermgrfiles[oldfile]
				delete foldermgrfiles[oldfile]
				filesetData(foldermgrfilespath, JSON.stringify(foldermgrfiles));
				connectdesktops('1');
				loadFiles(PathToreloadFolderMGR);
			} else {
				showError('ERROR the file already exists or u tried to make it a folder')
			}
		} else {
			showError('This File Does Not exist or u tried to rename a folder')
		}
	} else {
		showError('Sorry, this path does not exist. Tipp: Sometimes you have to input the path again and click enter. or the path realy does not exist');
	}
}

function folderMGRDeleteFile() {
	if (filesystem.hasOwnProperty(foldermgrfilespath)) {
		let file = prompt('Name Of File you Want to Delete:')
		if (file &&foldermgrfiles.hasOwnProperty(file)) {
			if (confirm('Are you sure you want to delete this file?')) {
				if (confirm('This will delete the entire file: ' + file)) {
					delete foldermgrfiles[file]
					filesetData(foldermgrfilespath, JSON.stringify(foldermgrfiles));
					connectdesktops('1');
					loadFiles(PathToreloadFolderMGR);
				}
			}
		} else {
			showError('This File Does Not exist')
		}
	} else {
		showError('Sorry, this path does not exist. Tipp: Sometimes you have to input the path again and click enter. or the path realy does not exist');
	}
}

function closeFolderMGR() {
    document.getElementById('folderMGR').style.display = 'none';
}

function loadFiles(path) {
    const iconsContainer = document.getElementById('iconsContainer');
    iconsContainer.innerHTML = '';

    PathToreloadFolderMGR = path;
    foldermgrfilespath = 'FMOSfolder' + path;
    foldermgrfolderfrompathcontent = filesystem[foldermgrfilespath];
    foldermgrfiles = JSON.parse(foldermgrfolderfrompathcontent) || {};

    for (const filename in foldermgrfiles) {
        const fileOrFolder = document.createElement('div');
        fileOrFolder.className = 'icon';
        fileOrFolder.innerText = filename;
        fileOrFolder.dataset.file = filename;

        fileOrFolder.style.backgroundSize = '100%';
        fileOrFolder.style.backgroundRepeat = 'no-repeat';
        fileOrFolder.style.backgroundPosition = 'center';
        fileOrFolder.onclick = () => openFileContent(filename);
        iconsContainer.appendChild(fileOrFolder);

        fileOrFolder.setAttribute('draggable', 'true');
        fileOrFolder.ondragstart = (event) => {
            event.dataTransfer.setData('text/plain', filename);
            event.dataTransfer.setData('application/json', foldermgrfiles[filename]);
        };
    }

    iconsContainer.ondrop = (event) => {
        event.preventDefault();
        const filename = event.dataTransfer.getData('text/plain');
        const content = event.dataTransfer.getData('application/json');

        foldermgrfiles[filename] = content;
        filesetData(foldermgrfilespath, JSON.stringify(foldermgrfiles));
    };

    iconsContainer.ondragover = (event) => {
        event.preventDefault();
    };
}

document.getElementById('desktop').ondrop = (event) => {
    event.preventDefault();
    const filename = event.dataTransfer.getData('text/plain');
    const content = event.dataTransfer.getData('application/json');
	
	if (filename.endsWith('.folder')) {
		showError('You Cant Move Folders')
		return;
	}
	
    if (files[filename]) {
        const confirmOverwrite = confirm(`the file "${filename}" already exists. do u want to overwrite it?`);
        if (!confirmOverwrite) {
            return;
        }
    }

    files[filename] = content;
    delete foldermgrfiles[filename];
    filesetData(foldermgrfilespath, JSON.stringify(foldermgrfiles));
    loadFiles(PathToreloadFolderMGR);
    renderFiles();
	connectdesktops('2');
};

document.getElementById('desktop').ondragover = (event) => {
    event.preventDefault();
};

function openFileContent(filename) {
	if (filename && filename.endsWith('.folder')) {
        const folderName = filename.slice(0, -'.folder'.length);
		openfmosfolderinfolmgr(folderName);
	} else {
		const msgofopenfilecontent = 'Content of : ' + filename + ': ' + foldermgrfiles[filename]
		showError(msgofopenfilecontent);
	}
}

document.getElementById('pathInput').addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        const path = event.target.value.trim();
        loadFiles(path);
    }
});

// Drag functionality for folder manager
function foldermgrDragStart(e) {
    const foldermgr = document.getElementById('folderMGR');
    foldermgr.isDragging = true;
    foldermgr.startX = e.clientX - foldermgr.offsetLeft;
    foldermgr.startY = e.clientY - foldermgr.offsetTop;

    document.addEventListener('mousemove', foldermgrDrag);
    document.addEventListener('mouseup', stopDrag);
}

function foldermgrDrag(e) {
    const foldermgr = document.getElementById('folderMGR');
    if (!foldermgr.isDragging) return;
    foldermgr.style.left = `${e.clientX - foldermgr.startX}px`;
    foldermgr.style.top = `${e.clientY - foldermgr.startY}px`;
}

function stopDrag() {
    const foldermgr = document.getElementById('folderMGR');
    foldermgr.isDragging = false;
    document.removeEventListener('mousemove', foldermgrDrag);
    document.removeEventListener('mouseup', stopDrag);
}

// Funktion, um den Folder Manager draggable zu machen
function foldermgrMakeDraggable() {
    const foldermgr = document.getElementById('folderMGR');
    
    // Drag-Funktionalität für den Header
    const header = document.querySelector('.foldermgr-header');
    header.addEventListener('mousedown', foldermgrDragStart);
}

document.addEventListener('DOMContentLoaded', foldermgrMakeDraggable);