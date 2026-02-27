//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Setting Menus---                                              //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------new-setting-menu-----------------------------------------------------------------------------------------

let isResizing = false;

function openMenu() {
    const menu = document.getElementById("settingsMenu");
    menu.style.display = "block";
    loadSettings();
}


document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("settingsMenu").style.display = "none";
});

const menuHeader = document.getElementById("menuHeader");
menuHeader.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - settingsMenu.offsetLeft;
    offsetY = e.clientY - settingsMenu.offsetTop;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const menu = document.getElementById("settingsMenu");
        menu.style.left = `${e.clientX - offsetX}px`;
        menu.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});

const resizeHandle = document.getElementById("resizeHandle");
resizeHandle.addEventListener("mousedown", (e) => {
    isResizing = true;
});

document.addEventListener("mousemove", (e) => {
    if (isResizing) {
        const menu = document.getElementById("settingsMenu");
        const newWidth = e.clientX - menu.getBoundingClientRect().left;
        const newHeight = e.clientY - menu.getBoundingClientRect().top;

        // Min-Max-Größen festlegen
        if (newWidth > 200 && newHeight > 100) {
            menu.style.width = newWidth + "px";
            menu.style.height = newHeight + "px";
        }
    }
});

// Mouseup-Event für Resize
document.addEventListener("mouseup", () => {
    isResizing = false;
});

function loadSettings() {
    const settings = {
        bootScreen: localStorage.getItem('showFullScreenIframe') === 'false',
        loginScreen: localStorage.getItem('settinglogin') === 'True',
        fileNames: localStorage.getItem('fmosfilenamessetting') === 'true',
        adminScripts: localStorage.getItem('settingadmin') === 'True',
        bootScripts: localStorage.getItem('settingbootsk') === 'True',
    };

    document.getElementById("bootScreen").checked = settings.bootScreen;
    document.getElementById("loginScreen").checked = settings.loginScreen;
    document.getElementById("fileNames").checked = settings.fileNames;
    document.getElementById("adminScripts").checked = settings.adminScripts;
    document.getElementById("bootScripts").checked = settings.bootScripts;
}

function toggleBootScreen() {
    const isChecked = document.getElementById("bootScreen").checked;
    localStorage.setItem('showFullScreenIframe', isChecked);
    isChecked ? setFullScreenIframeKeyFalse() : setFullScreenIframeKeyTrue();
}

function toggleLoginScreen() {
    const isChecked = document.getElementById("loginScreen").checked;
    localStorage.setItem('settinglogin', isChecked);
    isChecked ? enablelogin() : disablelogin();
}

function toggleFileNames() {
    const isChecked = document.getElementById("fileNames").checked;
    localStorage.setItem('fmosfilenamessetting', isChecked);
    isChecked ? enableFileNames() : disableFileNames();
}

function toggleAdminScripts() {
    const isChecked = document.getElementById("adminScripts").checked;
    localStorage.setItem('settingadmin', isChecked);
    isChecked ? enableadminscripts() : disableadminscripts();
}

function toggleBootScripts() {
    const isChecked = document.getElementById("bootScripts").checked;
    localStorage.setItem('settingbootsk', isChecked);
    isChecked ? enablebootsk() : disablebootsk();
}

function togglesettingwinold() {
    const isChecked = document.getElementById("oldsettings").checked;
    localStorage.setItem('settingsettingwinold', isChecked);
    isChecked ? enablesettingwinold() : disablesettingwinold();
}

//-------style-settings---------------------------------------------------------------------------------------

function toggleSelectionWindow() {
  const selectionWindow = document.querySelector('[data-div-id="stlyes"]');
  selectionWindow.classList.toggle('active');
}

function animationsettings() {
  const selectionWindow = document.querySelector('[data-div-id="animations"]');
  selectionWindow.classList.toggle('active');
}

function wallpapersettings() {
  const selectionWindow = document.querySelector('[data-div-id="wallpapers"]');
  selectionWindow.classList.toggle('active');
}

function startmenu() {
  const selectionWindow = document.querySelector('[data-div-id="Startmenu"]');
  selectionWindow.classList.toggle('active');
}

//-------apps------------------------------------------------------------------------------------------

function appwindowfinder() {
  const selectionWindow = document.getElementById('appsfinder-window');
  selectionWindow.classList.toggle('active');
}

//-------folder-options----------------------------------------------------------------------------------------

function folsell() {
  const selectionWindow = document.getElementById('folsel-window');
  selectionWindow.classList.toggle('active');
}

//-------old-system-settings---------------------------------------------------------------------------------------

function syssettings() {
  const selectionWindow = document.getElementById('sysset-window');
  selectionWindow.classList.toggle('active');
}

//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Settings---                                                   //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------settings-settings-----------------------------------------------------------------------------------------

function settingcheck() {
    const settingValue = localStorage.getItem('settingsettingwinold');

    if (settingValue === 'False') {
        openMenu();
    } else if (settingValue === 'True') {
        syssettings();
    } else {
        showError('invalid reg local storrige key (deleting the key and restarting the system may help or resetting the system)'); // Wenn der Wert nicht vorhanden ist
    }
}

function enablesettingwinold() {
    localStorage.setItem('settingsettingwinold', 'True');
	showError('Old Setting Menu Is Now Enabled')
}

function disablesettingwinold() {
    localStorage.setItem('settingsettingwinold', 'False');
	showError('Old Setting Menu Is Now Disabled')
}

//-------file-names------------------------------------------------------------------------------------------

function enableFileNames() {
    localStorage.setItem('fmosfilenamessetting', 'true');
    renderFiles();
}
function disableFileNames() {
    localStorage.setItem('fmosfilenamessetting', 'false');
    renderFiles();
}

//-------administrator-for-certan-scripts---------------------------------------------------------------------------------------

function disableadminscripts() {
	const enteredPassword = prompt("Password:");

    const storedPassword = localStorage.getItem('password');

    if (enteredPassword === storedPassword) {
		alert("this disables a security function")
		const adminiddddkkkk = confirm("Do you realy want to disable this function?");
		if (adminiddddkkkk) {
			localStorage.setItem('settingadmin', 'False');
		} else {
			showError('Settings Have Not Changed.');
		}
	} else {
		showError('Settings Have Not Changed. Password incorrect. Please Set A Password over Settings or Reset The System over Settings.');
	}
}

function enableadminscripts() {
	localStorage.setItem('settingadmin', 'True');
	showError('Admin Scripts Are Now Enabled (Recomended)')
}

//-------boot-animation-----------------------------------------------------------------------------------------

function setFullScreenIframeKeyTrue() {
    localStorage.setItem('showFullScreenIframe', 'true');
	askToRestartOS();
}

function setFullScreenIframeKeyFalse() {
    localStorage.setItem('showFullScreenIframe', 'false');
	askToRestartOS();
}

function bootanimation2() {
    localStorage.setItem('showFullScreenIframe', 'boot2');
	askToRestartOS();
}

//-------login-settings-----------------------------------------------------------------------------------------

function enablelogin() {
	if (!localStorage.getItem('password')) {
		showError('please set a password first')
		passwordmgr()
	} else {
		localStorage.setItem('settinglogin', 'True');
		showError('Login Screen Is Now Enabled')
		askToRestartOS();
	}
}

function disablelogin() {
	localStorage.setItem('settinglogin', 'False');
	showError('Login Is Now Disabled')
	askToRestartOS();
}

//-------boot-scripts------------------------------------------------------------------------------------------

function enablebootsk() {
    localStorage.setItem('settingbootsk', 'True');
}

function disablebootsk() {
    localStorage.setItem('settingbootsk', 'False');
}

//-------desktop-wallpaper-and-editor-settings-and-terminal-settings----------------------------------------------------------------------------------


function updateTextColorEditor() {
    var elements = document.querySelectorAll('.textcoloreditor');
    
    elements.forEach(function(element) {
        element.style.color = 'black';
        element.style.backgroundColor = 'white';
        element.style.textShadow = 'none';
    });
}

function updateTextColorEditordef() {
    var elements = document.querySelectorAll('.textcoloreditor');
    
    elements.forEach(function(element) {
        element.style.color = '#00000f';
        element.style.backgroundColor = 'rgba(20, 20, 20, 0.7)';
        element.style.textShadow = '0 0 1px #0000ff, 0 0 2.5px #0000ff, 0 0 5px #0000ff, 0 0 5px #0000ff, 0 0 8px #0000ff, 0 0 10px #0000ff';
    });
}

function changeDesktopBackground() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/back.jpg')";
  localStorage.setItem('FMOSwallpaper', 'icons/back.jpg');
  wallpaper_off();
}

function changeDesktopBackground2() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/123.jpg')";
  localStorage.setItem('FMOSwallpaper', 'icons/123.jpg');
  wallpaper_off();
}

function changeDesktopBackground3() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/flower.jpg')";
  localStorage.setItem('FMOSwallpaper', 'icons/flower.jpg');
  wallpaper_off();
}

function changeDesktopBackground4() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/lightning.jpg')";
  localStorage.setItem('FMOSwallpaper', 'icons/lightning.jpg');
  wallpaper_off();
}

function changeDesktopBackground6() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/abstract.webp')";
  localStorage.setItem('FMOSwallpaper', 'icons/abstract.webp');
  wallpaper_off();
}

function changeDesktopBackgroundcu29294() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/custom.jpg')";
  localStorage.setItem('FMOSwallpaper', 'icons/custom.jpg');
  wallpaper_off();
}

function changeDesktopBackground30() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/col.jpg')";
  localStorage.setItem('FMOSwallpaper', 'icons/col.jpg');
  wallpaper_off();
}

function changeDesktopBackground40() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/fmoss.png')";
  localStorage.setItem('FMOSwallpaper', 'icons/fmoss.jpg');
  wallpaper_off();
}

function changeDesktopBackgrounddarkfmos() {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = "url('icons/Dark.jpeg')";
  localStorage.setItem('FMOSwallpaper', 'icons/Dark.jpeg');
  wallpaper_off();
}

function changeDesktopBackground5() {
  const userInput = prompt("Enter a custom image URL:");
  if (userInput) {
	localStorage.setItem('FMOSwallpaper', userInput);
    const bodyElement = document.querySelector('body');
    const desktopElement = bodyElement.querySelector('.desktop');
    desktopElement.style.backgroundImage = `url('${userInput}')`;
	wallpaper_off();
  }
}

function wallpaper(imageFile) {
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  desktopElement.style.backgroundImage = `url('${imageFile}')`;
  wallpaper_off();
}

function changeTerminalBackground() {
  // Prompt the user for the URL of a background image
  const imageUrl = prompt("Enter the URL of a background image:");

  // Check if the user entered a valid URL
  if (imageUrl) {
    // Update the CSS style for .terminal-window
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `.terminal-window { background-image: url(${imageUrl}); }`;
    document.head.appendChild(styleElement);
  } else {
    alert("Invalid URL. Please enter the URL of a valid image file.");
  }
}

function thememodern() {
	changeDesktopBackgroundcu29294();
	setCompactFuturisticTaskbarStyle();
}

function changeTerminalBackground() {
  // Prompt the user for the URL of a background image
  const imageUrl = prompt("Enter the URL of a background image:");

  // Check if the user entered a valid URL
  if (imageUrl) {
    // Update the CSS style for .terminal-window
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `.terminal-window { background-image: url(${imageUrl}); }`;
    document.head.appendChild(styleElement);
  } else {
    alert("Invalid URL. Please enter the URL of a valid image file.");
  }
}

function setCompactFuturisticTaskbarStyle() {
    const taskbar = document.querySelector('.taskbar');
    
    if (taskbar) {
        taskbar.style.background = 'linear-gradient(135deg, rgba(46, 46, 46, 0.9), rgba(30, 30, 30, 0.9))';
        taskbar.style.color = '#e0e0e0';
        taskbar.style.height = '40px';
        taskbar.style.position = 'fixed';
        taskbar.style.bottom = '15px';
        taskbar.style.width = 'calc(100% - 30px)';
        taskbar.style.borderRadius = '20px';
        taskbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
        taskbar.style.padding = '0 15px';
        taskbar.style.display = 'flex';
        taskbar.style.alignItems = 'center';
        taskbar.style.justifyContent = 'space-between';
        taskbar.style.borderTop = 'none';
        taskbar.style.transition = 'all 0.3s ease-in-out';
    } else {
        console.error('Taskbar-Element wurde nicht gefunden.');
    }
}

function getAndSetTaskbarBackgroundColor() {
  const taskbar = document.querySelector('.taskbar');
  const color = prompt("Enter a color (e.g. #FF0000, red, rgba(255, 0, 0, 0.5)): ");
  if (color) {
    taskbar.style.backgroundColor = color;
  } else {
    alert("No color entered. Current color: " + taskbar.style.backgroundColor);
  }
}

function resetTaskbarBackgroundColor() {
  const taskbar = document.querySelector('.taskbar');
  taskbar.style.backgroundColor = '#333';
}
