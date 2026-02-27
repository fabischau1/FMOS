//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Functions for devs---                                         //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------execute-files------------------------------------------------------------------------------------------

function exedir(FolderPathExecution, fileName) {
    const FolderPathPrefixExecution = 'FMOSfolder';
    const FolderPathFinalExe = FolderPathPrefixExecution + FolderPathExecution;

    exedircontent = filesystem[FolderPathFinalExe];
    confirmtorun = confirm("this script ran another script do u want to run that too? dont run it if you dont trust it! ur responsible for anything u run because it could infect your real pc if its not trustworthy")
    if (confirmtorun) {
		if (exedircontent) {
			try {
				const fileObject = JSON.parse(exedircontent);

				if (fileObject && fileObject[fileName]) {
					exedircontent = fileObject[fileName];
					
						const jspatternsforexecution = [
							/localStorage\.removeItem/i,
							/localStorage\.getItem/i,
							/localStorage\.clear/i,
							/localStorage\.setItem/i,
							/setboot/i,
							/FMOSboot/i,
							/hex/i,
							/filesetData/i,
							/folderdeleteData/i,
							/filedeleteData/i,
							/objectStore/i,
							/exediradmin/i,
							/atob/i
						];
						for (const pattern of jspatternsforexecution) {
							if (pattern.test(exedircontent)) {
								showError('This script needs administrator');
								return;
							}
						}
						if (fileName && (fileName.endsWith('.fexe') || fileName.endsWith('.js') || fileName.endsWith('.py') || fileName.endsWith('.zfp') || fileName.endsWith('.fsys'))) {
							try {
								eval(exedircontent);
							} catch (error) {
								showError(`ERROR: ${error.message}`);
							}
						} else {
							showError("ERROR: This file type cannot run js.");
						}
				} else {
					console.log("File not found: " + fileName);
					exedircontent = null;
				}
			} catch (error) {
				console.error("Error parsing JSON from localStorage:", error);
				exedircontent = null;
			}
		} else {
			console.log("No content found for: " + FolderPathFinalExe);
			exedircontent = null;
		}
	} else {
		showError('script Canceled')
	}
}

function exediradmin(FolderPathExecution, fileName) {
    const FolderPathPrefixExecution = 'FMOSfolder';
    const FolderPathFinalExe = FolderPathPrefixExecution + FolderPathExecution;

    exedircontent = filesystem[FolderPathFinalExe];
    confirmtorunasadmin = confirm("this script ran another script AS ADMIN do u want to run that too? dont run it if you dont trust it! ur responsible for anything u run because it could infect your real pc if its not trustworthy")
	if (confirm) {
		if (exedircontent) {
			try {
				const fileObject = JSON.parse(exedircontent);

				if (fileObject && fileObject[fileName]) {
					exedircontent = fileObject[fileName];
						if (fileName && (fileName.endsWith('.fexe') || fileName.endsWith('.js') || fileName.endsWith('.py') || fileName.endsWith('.zfp') || fileName.endsWith('.fsys'))) {
							try {
								eval(exedircontent);
							} catch (error) {
								showError(`ERROR: ${error.message}`);
							}
						} else {
							showError("ERROR: This file type cannot run js.");
						}
				} else {
					console.log("File not found: " + fileName);
					exedircontent = null;
				}
			} catch (error) {
				console.error("Error parsing JSON from localStorage:", error);
				exedircontent = null;
			}
		} else {
			console.log("No content found for: " + FolderPathFinalExe);
			exedircontent = null;
		}
	} else {
		showError('script Canceled')
	}
}

function getFileContent(fileName) {
    return files[fileName] || "File not found.";
}

function execute(fileName) {
	content = getFileContent(fileName)
	const jspatternsforexecution = [
		/localStorage\.removeItem/i,
		/localStorage\.getItem/i,
		/localStorage\.clear/i,
		/localStorage\.setItem/i,
		/setboot/i,
		/FMOSboot/i,
		/hex/i,
		/filesetData/i,
		/folderdeleteData/i,
		/filedeleteData/i,
		/objectStore/i,
		/atob/i
	];
	for (const pattern of jspatternsforexecution) {
        if (pattern.test(content)) {
            showError('This script needs administrator');
            return;
        }
    }
	if (fileName && (fileName.endsWith('.fexe') || fileName.endsWith('.js') || fileName.endsWith('.py') || fileName.endsWith('.zfp') || fileName.endsWith('.fsys'))) {
		try {
			eval(content);
		} catch (error) {
			showError(`ERROR: ${error.message}`);
		}
	} else {
        showError("ERROR: This file type cannot run js.");
    }
}

//-------create-files-and-folders----------------------------------------------------------------------------------------

function CreateFile(FolderPath, FileName, FileContent) {
	
	folderkey = 'FMOSfolder' + '/' + FolderPath
	
	if (filesystem[folderkey] !== null) {
		const dircontent1 = filesystem[folderkey];

		dircontent = JSON.parse(dircontent1);
		
		dircontent[FileName] = FileContent;
		
		jsonFiles = JSON.stringify(dircontent);
		
		filesetData(folderkey, jsonFiles);
		
		connectdesktops('1');
		
	} else {
        showError('this folder does not exist')
    }
}



//-------custom-app------------------------------------------------------------------------------------------

// usage: app('url')

function app(url) {
  const usersecureconfirm = confirm('this will open an iframe (wich can possibly be dangerous if its an unsafe webside) if u want to open this iframe click ok (on ur own risk). only use this on trusted websides in the iframe!!')
  if (usersecureconfirm) {
	  const uniqueId = generateUniqueId();
	  const iframeWindow = document.createElement('div');
	  iframeWindow.id = uniqueId;
	  iframeWindow.className = 'windowifra';
	  
	  iframeWindow.innerHTML = `
		<div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
		  <span>App</span>
		  <div style="display: flex; gap: 5px;">
			<button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
			<button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
		  </div>
		</div>
		<div class="window-body">
		  <iframe id="iframe" frameborder="0" width="100%" height="550px" src="${url}" sandbox="allow-top-navigation-by-user-activation allow-same-origin allow-scripts allow-forms allow-pointer-lock"></iframe>
		  <div class="resize-handle"></div>
		</div>
	  `;
	  
	  document.body.appendChild(iframeWindow);
	  iframeWindow.style.top = '50px';
	  iframeWindow.style.left = '50px';
	  iframeWindow.style.display = 'block';

	  // Add animation when opening the window
	  iframeWindow.classList.add('animate-in');

	  // Add drag functionality
	  let isDragging = false;
	  let offsetX, offsetY;

	  iframeWindow.querySelector('.window-header').addEventListener('mousedown', (e) => {
		isDragging = true;
		offsetX = e.clientX - iframeWindow.offsetLeft;
		offsetY = e.clientY - iframeWindow.offsetTop;

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	  });

	  function handleMouseMove(e) {
		if (isDragging) {
		  const newX = e.clientX - offsetX;
		  const newY = e.clientY - offsetY;

		  iframeWindow.style.top = `${newY}px`;
		  iframeWindow.style.left = `${newX}px`;
		}
	  }

	  function handleMouseUp() {
		isDragging = false;
		document.removeEventListener('mousemove', handleMouseMove);
		document.removeEventListener('mouseup', handleMouseUp);
	  }

	  // Add resize functionality
	  let isResizing = false;
	  let startX, startY, startWidth, startHeight;

	  iframeWindow.querySelector('.resize-handle').addEventListener('mousedown', (e) => {
		isResizing = true;
		startX = e.clientX;
		startY = e.clientY;
		startWidth = iframeWindow.offsetWidth;
		startHeight = iframeWindow.offsetHeight;

		document.addEventListener('mousemove', handleResizeMove);
		document.addEventListener('mouseup', handleResizeUp);
	  });

	function handleResizeMove(e) {
		if (isResizing) {
			const newWidth = startWidth + (e.clientX - startX);
			const newHeight = startHeight + (e.clientY - startY);

			iframeWindow.style.width = `${newWidth}px`;
			iframeWindow.style.height = `${newHeight}px`;

			const iframe = iframeWindow.querySelector('#iframe');
			iframe.style.width = `${newWidth -20}px`;
			iframe.style.height = `${newHeight -50}px`;
		}
	}

	  function handleResizeUp() {
		isResizing = false;
		document.removeEventListener('mousemove', handleResizeMove);
		document.removeEventListener('mouseup', handleResizeUp);
	  }	

	  openedWindows.push({
		type: 'App',
		id: uniqueId
	  });
	} else {
		showError('You canceled the iframe')
	}
}

function sandboxapp(url) {
  const usersecureconfirm = confirm('this will open an iframe (wich can possibly be dangerous if its an unsafe webside) if u want to open this iframe click ok (on ur own risk). only use this on trusted websides in the iframe!!')
  if (usersecureconfirm) {
	  const uniqueId = generateUniqueId();
	  const iframeWindow = document.createElement('div');
	  iframeWindow.id = uniqueId;
	  iframeWindow.className = 'windowifra';
	  
	  iframeWindow.innerHTML = `
		<div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
		  <span>App</span>
		  <div style="display: flex; gap: 5px;">
			<button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
			<button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
		  </div>
		</div>
		<div class="window-body">
		  <iframe id="iframe" frameborder="0" width="100%" height="550px" src="${url}" sandbox="allow-top-navigation-by-user-activation allow-scripts allow-forms"></iframe>
		  <div class="resize-handle"></div>
		</div>
	  `;
	  
	  document.body.appendChild(iframeWindow);
	  iframeWindow.style.top = '50px';
	  iframeWindow.style.left = '50px';
	  iframeWindow.style.display = 'block';

	  iframeWindow.classList.add('animate-in');

	  let isDragging = false;
	  let offsetX, offsetY;

	  iframeWindow.querySelector('.window-header').addEventListener('mousedown', (e) => {
		isDragging = true;
		offsetX = e.clientX - iframeWindow.offsetLeft;
		offsetY = e.clientY - iframeWindow.offsetTop;

		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	  });

	  function handleMouseMove(e) {
		if (isDragging) {
		  const newX = e.clientX - offsetX;
		  const newY = e.clientY - offsetY;

		  iframeWindow.style.top = `${newY}px`;
		  iframeWindow.style.left = `${newX}px`;
		}
	  }

	  function handleMouseUp() {
		isDragging = false;
		document.removeEventListener('mousemove', handleMouseMove);
		document.removeEventListener('mouseup', handleMouseUp);
	  }

	  let isResizing = false;
	  let startX, startY, startWidth, startHeight;

	  iframeWindow.querySelector('.resize-handle').addEventListener('mousedown', (e) => {
		isResizing = true;
		startX = e.clientX;
		startY = e.clientY;
		startWidth = iframeWindow.offsetWidth;
		startHeight = iframeWindow.offsetHeight;

		document.addEventListener('mousemove', handleResizeMove);
		document.addEventListener('mouseup', handleResizeUp);
	  });

	function handleResizeMove(e) {
		if (isResizing) {
			const newWidth = startWidth + (e.clientX - startX);
			const newHeight = startHeight + (e.clientY - startY);

			iframeWindow.style.width = `${newWidth}px`;
			iframeWindow.style.height = `${newHeight}px`;

			const iframe = iframeWindow.querySelector('#iframe');
			iframe.style.width = `${newWidth -20}px`;
			iframe.style.height = `${newHeight -50}px`;
		}
	}


	  function handleResizeUp() {
		isResizing = false;
		document.removeEventListener('mousemove', handleResizeMove);
		document.removeEventListener('mouseup', handleResizeUp);
	  }	

	  openedWindows.push({
		type: 'App',
		id: uniqueId
	  });
	} else {
		showError('You canceled the iframe')
	}
}

//-------error-message------------------------------------------------------------------------------------------

let errorOffset = 0;

function showError(message) {
    new Audio('sounds/error.mp3').play();

    let errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');

    let messageText = document.createElement('span');
    messageText.textContent = message;
    errorDiv.appendChild(messageText);

    let okButton = document.createElement('button');
    okButton.classList.add('ok-button');
    okButton.textContent = 'OK';
    okButton.onclick = () => errorDiv.remove();
    errorDiv.appendChild(okButton);

    errorDiv.style.position = 'absolute';
    errorDiv.style.zIndex = 1000;

    document.body.appendChild(errorDiv);

    const rect = errorDiv.getBoundingClientRect();
    errorDiv.style.left = `calc(50% - ${rect.width / 2}px + ${errorOffset}px)`;
    errorDiv.style.top = `calc(50% - ${rect.height / 2}px + ${errorOffset}px)`;

    errorOffset += 20;
    if (errorOffset > 100) errorOffset = 0;

    makeDraggable(errorDiv);
}

function makeDraggable(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    el.onmousedown = function(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDrag;
        document.onmousemove = drag;
    };

    function drag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDrag() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
