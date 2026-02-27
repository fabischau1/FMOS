//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---File Operations---                                            //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------create-files---------------------------------------------------------------------------------------------

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

//-------open-files-in-editor-------------------------------------------------------------------------------------------

        function openFile(fileName) {
		  new Audio('sounds/click.mp3').play();
          selectedFile = fileName;
          document.getElementById('editorTitle').innerText = `Editor - ${fileName}`;
          document.getElementById('fileContent').value = files[fileName];
          openWindow();
          if (fileName === "12345.js") {
            eval("alert(\"You found an easter egg! 🎉\");");
          }
		  if (selectedFile && selectedFile.endsWith('.folder')) {
		    openfmosfolder()
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

//-------save-files---------------------------------------------------------------------------------------------

        function saveFile() {
			new Audio('sounds/click.mp3').play();
            if (selectedFile) {
                files[selectedFile] = document.getElementById('fileContent').value;
                alert('File saved.');
            }
        }

//-------delete-files---------------------------------------------------------------------------------------------

function deleteFile() {
  new Audio('sounds/click.mp3').play();
  if (selectedFile) {
    if (selectedFile.endsWith('.fsys')) {
      if (confirm('Are you sure you want to delete this system file?')) {
        if (confirm('This will delete the entire file: ' + selectedFile)) {
          delete files[selectedFile];
          closeWindow();
          renderFiles();
          selectedFile = null;
        }
      }
    } else {
      if (confirm('Are you sure you want to delete this file?')) {
        if (confirm('This will delete the entire file: ' + selectedFile)) {
          delete files[selectedFile];
          closeWindow();
          renderFiles();
          selectedFile = null;
        }
      }
    }
  }
}

//-------rename-files---------------------------------------------------------------------------------------------

        function renameFile() {
            if (selectedFile) {
                const newFileName = prompt("New Filename:", selectedFile);
                if (newFileName &&!files[newFileName]) {
                    files[newFileName] = files[selectedFile];
                    delete files[selectedFile];
                    selectedFile = newFileName;
                    renderFiles();
                } else {
                    showError('An error has occurred.');
                }
            }
        }

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
//                                     ---Execute Files---                                              //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------execute-html--------------------------------------------------------------------------------------------

function executeHTML() {
    alert("be Carefull while running html");
    if (selectedFile && (selectedFile.endsWith('.html') || selectedFile.endsWith('.png') || selectedFile.endsWith('.fak') || selectedFile.endsWith('.url'))) {
        const htmlContent = files[selectedFile];
        const iframe = document.getElementById('htmlPreview');
        iframe.srcdoc = htmlContent;
        iframe.width = '100%';
        iframe.height = '550px'; // Set height to 550px
        document.getElementById('htmlPreviewWindow').style.display = 'block';
        
        makeDraggable(document.getElementById('htmlPreviewWindow'));
        makeResizable(document.getElementById('htmlPreviewWindow'));
    } else {
        alert('ERROR: This Filetype cannot run HTML.');
    }
}

//-------make-html-draggable-------------------------------------------------------------------------------------------

function makeDraggable(element) {
    let isDragging = false;
    let offsetX, offsetY;

    element.querySelector('.window-header').addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - element.offsetLeft;
        offsetY = e.clientY - element.offsetTop;

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });

    function handleMouseMove(e) {
        if (isDragging) {
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            element.style.top = `${newY}px`;
            element.style.left = `${newX}px`;
        }
    }

    function handleMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    }
}

//-------make-html-Resizable-------------------------------------------------------------------------------------------

function makeResizable(element) {
    let isResizing = false;
    let startX, startY, startWidth, startHeight;

    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'resize-handle';
    resizeHandle.style.width = '10px';
    resizeHandle.style.height = '10px';
    resizeHandle.style.cursor = 'se-resize';
    resizeHandle.style.position = 'absolute';
    resizeHandle.style.bottom = '0';
    resizeHandle.style.right = '0';
    element.appendChild(resizeHandle);

    resizeHandle.addEventListener('mousedown', (e) => {
        isResizing = true;
        startX = e.clientX;
        startY = e.clientY;
        startWidth = element.offsetWidth;
        startHeight = element.offsetHeight;

        document.addEventListener('mousemove', handleResizeMove);
        document.addEventListener('mouseup', handleResizeUp);
    });

    function handleResizeMove(e) {
        if (isResizing) {
            const newWidth = startWidth + (e.clientX - startX);
            const newHeight = startHeight + (e.clientY - startY);

            element.style.width = `${newWidth}px`;
            element.style.height = `${newHeight}px`;

            const iframe = element.querySelector('#htmlPreview');
            iframe.style.width = '100%';
            iframe.style.height = `${newHeight - 20}px`; // Adjust height based on header
        }
    }

    function handleResizeUp() {
        isResizing = false;
        document.removeEventListener('mousemove', handleResizeMove);
        document.removeEventListener('mouseup', handleResizeUp);
    }
}

//-------close-html-window-------------------------------------------------------------------------------------------


function closeHTMLPreviewWindow() {
    document.getElementById('htmlPreviewWindow').style.display = 'none';
}

//-------execute-js--------------------------------------------------------------------------------------------

function executeJS() {
    alert("Be careful with running commands or code");
	alert("please only run code from creators you trust");
    if (selectedFile && (selectedFile.endsWith('.fexe') || selectedFile.endsWith('.js') || selectedFile.endsWith('.py') || selectedFile.endsWith('.zfp') || selectedFile.endsWith('.fsys'))) {
        const code = files[selectedFile];
        const isAdmin = localStorage.getItem('settingadmin') === 'True';

        if (isAdmin) {
            const analyzeCode = (code) => {
                const localStoragePatterns = [
                    /localStorage\.removeItem/i,
                    /localStorage\.getItem/i,
                    /localStorage\.clear/i,
					/setboot/i,
					/FMOSboot/i
                ];

                // Check for key creation patterns starting with FMOSboot, settingadmin, files, or password
                const restrictedKeyPatterns = [
                    /localStorage\.setItem\(\s*['"]FMOSboot\w*['"]/i,
                    /localStorage\.setItem\(\s*['"]settingadmin\w*['"]/i,
                    /localStorage\.setItem\(\s*['"]files\w*['"]/i,
                    /localStorage\.setItem\(\s*['"]password\w*['"]/i,
                    /localStorage\.setItem\(\s*['"]settingadmin['"]/i,
                    /localStorage\.setItem\(\s*['"]files['"]/i,
                    /localStorage\.setItem\(\s*['"]password['"]/i
                ];

                for (const pattern of localStoragePatterns) {
                    if (pattern.test(code)) {
                        return { localStorageUsed: true };
                    }
                }
                
                for (const pattern of restrictedKeyPatterns) {
                    if (pattern.test(code)) {
                        return { restrictedKeyUsed: true };
                    }
                }
                
                return { localStorageUsed: false, restrictedKeyUsed: false };
            };

            const analysisResult = analyzeCode(code);
            
            if (analysisResult.localStorageUsed || analysisResult.restrictedKeyUsed) {
                showError("File Needs To Be Run As Administrator");
                return;
            }
        }
        try {
            eval(code);
        } catch (error) {
            alert(`ERROR: ${error.message}`);
        }
    } else if (selectedFile && (selectedFile.endsWith('.html') || selectedFile.endsWith('.png') || selectedFile.endsWith('.fak') || selectedFile.endsWith('.url'))) {
        executeHTML();
    } else if (selectedFile && (selectedFile.endsWith('.css') || selectedFile.endsWith('.style'))) {
        executeCSS();
    } else {
        showError("ERROR: This file type cannot run JavaScript.");
    }
}

//-------execute-js-as-admin------------------------------------------------------------------------------------------

function executeJSasadmin() {
	const enteredPassword = prompt("Password:");

    const storedPassword = localStorage.getItem('password');

    if (enteredPassword === storedPassword) {
		alert('if u run a script as admin you give it the perms to make any changes to your FMOS system')
		let userConfirmed = confirm("Do you trust this program and its creator?");
    
		if (userConfirmed) {
			alert("Be careful with running commands or code.");
        
			if (selectedFile && (selectedFile.endsWith('.fexe') || selectedFile.endsWith('.js') || selectedFile.endsWith('.py') || selectedFile.endsWith('.zfp') || selectedFile.endsWith('.fsys'))) {
				try {
					eval(files[selectedFile]);
				} catch (error) {
					alert(`ERROR: ${error.message}`);
				}
			} else if (selectedFile && (selectedFile.endsWith('.html') || selectedFile.endsWith('.png') || selectedFile.endsWith('.fak') || selectedFile.endsWith('.url'))) {
				executeHTML();
			} else if (selectedFile && (selectedFile.endsWith('.css') || selectedFile.endsWith('.style'))) {
				executeCSS();
			} else {
				showError("ERROR: This filetype cannot run JavaScript.");
			}
		} else {
			showError("Execution cancelled. You chose not to trust the program.");
		}
	} else {
		showError('Settings Have Not Changed. Password incorrect. Please Set A Password over Settings or Reset The System over Settings.');
	}
}

//-------execute-css--------------------------------------------------------------------------------------------

function executeCSS() {
    if (selectedFile && (selectedFile.endsWith('.css') || selectedFile.endsWith('.style'))) {
        try {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = files[selectedFile];
            document.head.appendChild(style);
        } catch (error) {
            alert(`ERROR: ${error.message}`);
        }
    } else {
        showError("ERROR: This file type cannot run css.");
    }
}