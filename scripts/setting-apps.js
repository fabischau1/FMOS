//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Setting Menus---                                              //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------super-setting-menu---------------------------------------------------------------------------------------

function updateTaskbarHTML() {
    const taskbar = document.querySelector('.taskbar');
    if (!taskbar) return;

    // Standard-Buttons
    taskbar.innerHTML = `
        <button class="taskbar-button" onclick="startmenu()">
            <img src="icons/settingsapp.png" class="taskbar-icon">
        </button>
        <button class="taskbar-button" onclick="appwindowfinder()">
          <img src="icons/fsys.jpg" class="taskbar-icon">
        </button>
    `;

    console.log("FMOSsettingtaskbarapps:", localStorage.getItem("FMOSsettingtaskbarapps"));

    const settingsJSON = localStorage.getItem("FMOSsettingtaskbarapps");
    if (!settingsJSON) {
        console.error("FMOSsettingtaskbarapps nicht gefunden!");
        return;
    }

    let settings;
    try {
        settings = JSON.parse(settingsJSON);
    } catch (e) {
        console.error("Fehler beim Parsen von FMOSsettingtaskbarapps:", e);
        return;
    }

    if (!settings.apps || !Array.isArray(settings.apps)) {
        console.error("Ungültiges Format von FMOSsettingtaskbarapps:", settings);
        return;
    }

    settings.apps.forEach(app => {
        const appName = app.name;
        console.log("Verarbeite App:", appName);
        
        // Wir greifen auf das appFiles JSON zu, das die Programm-Dateien enthält.
        const appFilesJSON = filesystem["FMOSfolder/programms"];
        if (!appFilesJSON) {
            console.log("No External Apps Found.");
            return;
        }

        const appFiles = JSON.parse(appFilesJSON);
        const content = appFiles[appName];
        if (!content) {
            console.warn(`Kein Inhalt gefunden für ${appName}`);
            return;
        }

        // Suche nach dem Icon
        let iconMatch = content.match(/icon:\s*"([^"]+)"/);
        let iconPath = iconMatch ? iconMatch[1] : null;

        if (iconPath) {
            iconPath = "FMOSfolder" + iconPath;
            console.log("Gefundenes Icon:", iconPath);
            
            const realIcon = iconPath.split('/').pop();
            const realFolder = iconPath.split('/').slice(0, -1).join('/');
            const folderOffile = realFolder.replace(/\/$/, ''); 

            try {
                const folderContent = JSON.parse(filesystem[folderOffile]);
                iconPath = folderContent[realIcon] || "default_icon.png";
            } catch (e) {
                console.error("Fehler beim Laden des Icons:", e);
                iconPath = "default_icon.png";
            }
        } else {
            // Falls kein Icon gefunden wurde, Standard-Icon setzen
            iconPath = "default_icon.png";
        }

        // Button für die Taskbar erstellen
        const button = document.createElement("button");
        button.className = "taskbar-button";
        button.onclick = () => executeshortcutApp(appName); // Führt die App aus

        // Icon-Bild erstellen
        const img = document.createElement("img");
        img.src = iconPath;
        img.alt = "icon";
        img.className = "taskbar-icon";
        img.style.objectFit = "contain"; // Verhindert das Verzerren

        button.appendChild(img);

        // Button zur Taskbar hinzufügen
        taskbar.appendChild(button);
    });

    console.log("Taskbar wurde erfolgreich aktualisiert!");
    
}

function addAppToTaskbar(taskbarappname) {
  let appName = taskbarappname + ".short"
  if (JSON.parse(filesystem["FMOSfolder/programms"])[appName]) {
    const key = 'FMOSsettingtaskbarapps';
    let data = JSON.parse(localStorage.getItem(key)) || { apps: [] };
    
    // Prüfen, ob die App bereits existiert
    if (!data.apps.some(app => app.name === appName)) {
      data.apps.push({ name: appName });
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      showError(`${appName} is already on the taskbar.`);
    }
  } else {
    showError("This App Does not ecsist")
  }
}

function removeAppFromTaskbar(taskbarappname) {
  let appName = taskbarappname + ".short"
  const key = 'FMOSsettingtaskbarapps';
  let data = JSON.parse(localStorage.getItem(key)) || { apps: [] };

  const originalLength = data.apps.length;
  data.apps = data.apps.filter(app => app.name !== appName);

  if (data.apps.length < originalLength) {
    localStorage.setItem(key, JSON.stringify(data));
    console.log(`${appName} wurde entfernt.`);
  } else {
    console.log(`${appName} nicht gefunden.`);
  }
}


function supersettings() {
    // HTML-Inhalt des Editors
    const editorHTML = `
        <div id="taskbar-editor">
            <h3>Taskbar Editor</h3>
            <label>
                Width (%): <input type="range" id="taskbar-width" min="10" max="100" value="50"> <span id="width-value">50</span>
            </label>
            <label>
                Height (px): <input type="range" id="taskbar-height" min="40" max="200" value="80"> <span id="height-value">80</span>
            </label>
            <label>
                Transparency (%): <input type="range" id="taskbar-transparency" min="0" max="100" value="30"> <span id="transparency-value">30</span>
            </label>
            <label>
                Taskbar Border Radius (px): <input type="range" id="taskbar-border-radius" min="0" max="50" value="10"> <span id="taskbar-border-radius-value">10</span>
            </label>
            <label>
                Icon Size (px): <input type="range" id="icon-size" min="20" max="150" value="70"> <span id="icon-size-value">70</span>
            </label>
            <label>
                Icon Gap (px): <input type="range" id="icon-gap" min="0" max="50" value="5"> <span id="icon-gap-value">5</span>
            </label>
            <label>
                Icon Border Radius (px): <input type="range" id="icon-border-radius" min="0" max="50" value="5"> <span id="icon-border-radius-value">5</span>
            </label>
            <label>
                Horizontal Offset (px): <input type="range" id="horizontal-offset" min="0" max="500" value="0"> <span id="horizontal-offset-value">0</span>
            </label>
            <label>
                Taskbar Position from Bottom (px): <input type="range" id="taskbar-position" min="0" max="300" value="0"> <span id="taskbar-position-value">0</span>
            </label>
            <label>
                Taskbar Color: <input type="color" id="taskbar-color" value="#1c1c1c">
            </label>
            <label>
                Blur Effect: <input type="checkbox" id="taskbar-blur">
            </label>
            <label>
                Center Icons: <input type="checkbox" id="icon-centre">
            </label>
            <label>
                Remove Border: <input type="checkbox" id="taskbar-remove-border">
            </label>
            <h3>Desktop</h3>
            <label>
                Icon Size (px): <input type="range" id="desktop-icon-size" min="20" max="150" value="100"> <span id="desktop-icon-size-value">100</span>
            </label>
            <label>
                Icon Margin (px): <input type="range" id="desktop-icon-margin" min="1" max="50" value="10"> <span id="desktop-icon-margin-value">10</span>
            </label>
            <label>
                Icon Font Size (px): <input type="range" id="desktop-icon-font" min="1" max="150" value="20"> <span id="desktop-icon-font-value">20</span>
            </label>
            <button onclick="userappinput = prompt('Please Type an app Name that is a shortcut in the /Programms Folder (without the .short): '); addAppToTaskbar(userappinput); showError('Please Restart for the changes to take effect')">Add App To Taskbar</button>
            <button onclick="userappinput = prompt('Please type the name of an app on your taskbar: '); removeAppFromTaskbar(userappinput); showError('Please Restart for the changes to take effect')">Remove App From Taskbar</button>
            <button id="save-settings">Save Settings</button>
            <button id="load-settings">Load Settings</button>
            <button id="close-editor">Close Editor</button>
        </div>
    `;

    // Container für das Editor-Fenster
    const editorContainer = document.createElement('div');
    editorContainer.innerHTML = editorHTML;
    document.body.appendChild(editorContainer);

    const taskbar = document.querySelector('.taskbar');

    if (!taskbar) {
        console.error('Taskbar element not found. Make sure the taskbar exists on the page.');
        return;
    }

    // Funktion zum Aktualisieren der Taskbar-Einstellungen
    function updateTaskbar() {
        const width = document.getElementById('taskbar-width').value;
        const height = document.getElementById('taskbar-height').value;
        const transparency = document.getElementById('taskbar-transparency').value;
        const taskbarBorderRadius = document.getElementById('taskbar-border-radius').value;
        const iconSize = document.getElementById('icon-size').value;
        const iconGap = document.getElementById('icon-gap').value;
        const iconBorderRadius = document.getElementById('icon-border-radius').value;
        const horizontalOffset = document.getElementById('horizontal-offset').value;
        const taskbarPosition = document.getElementById('taskbar-position').value;
        const color = document.getElementById('taskbar-color').value;
        const blur = document.getElementById('taskbar-blur').checked;
        const iconcenter = document.getElementById('icon-centre').checked;
        const removeBorder = document.getElementById('taskbar-remove-border').checked;
        const desktopIconSize = document.getElementById('desktop-icon-size').value;
        const desktopIconMargin = document.getElementById('desktop-icon-margin').value;
        const desktopIconFont = document.getElementById('desktop-icon-font').value;

        // Taskbar aktualisieren
        taskbar.style.width = `${width}%`;
        taskbar.style.height = `${height}px`;
        taskbar.style.backgroundColor = color;
        taskbar.style.borderRadius = `${taskbarBorderRadius}px`;
        taskbar.style.left = `${horizontalOffset}px`;
        taskbar.style.position = 'fixed';
        taskbar.style.bottom = `${taskbarPosition}px`;
        taskbar.style.backgroundColor = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${(100 - transparency) / 100})`;
        taskbar.style.gap = `${iconGap}px`;
        taskbar.style.border = removeBorder ? 'none' : '1px solid rgba(255, 255, 255, 0.1)';
        taskbar.style.backdropFilter = blur ? 'blur(10px)' : 'none';
        taskbar.style.justifyContent = iconcenter ? 'center' : 'flex-start';

        // Taskbar Icons aktualisieren
        const icons = taskbar.querySelectorAll('.taskbar-icon');
        icons.forEach(icon => {
            icon.style.width = `${iconSize}px`;
            icon.style.height = `${iconSize}px`;
            icon.style.borderRadius = `${iconBorderRadius}px`;
        });

        // Desktop-Icons aktualisieren
        const desktopIcons = document.querySelectorAll('.icon');
        desktopIcons.forEach(icon => {
            icon.style.width = `${desktopIconSize}px`;
            icon.style.height = `${desktopIconSize}px`;
            icon.style.margin = `${desktopIconMargin}px`;
            icon.style.setProperty('font-size', `${desktopIconFont}px`);
        });

        // Werte anzeigen
        document.getElementById('width-value').innerText = width;
        document.getElementById('height-value').innerText = height;
        document.getElementById('transparency-value').innerText = transparency;
        document.getElementById('taskbar-border-radius-value').innerText = taskbarBorderRadius;
        document.getElementById('icon-size-value').innerText = iconSize;
        document.getElementById('icon-gap-value').innerText = iconGap;
        document.getElementById('icon-border-radius-value').innerText = iconBorderRadius;
        document.getElementById('horizontal-offset-value').innerText = horizontalOffset;
        document.getElementById('taskbar-position-value').innerText = taskbarPosition;
        document.getElementById('desktop-icon-size-value').innerText = desktopIconSize;
        document.getElementById('desktop-icon-margin-value').innerText = desktopIconMargin;
        document.getElementById('desktop-icon-font-value').innerText = desktopIconFont;
    }

    // Funktion zum Speichern der Einstellungen
    function saveSettings() {
        const settings = {
            width: document.getElementById('taskbar-width').value,
            height: document.getElementById('taskbar-height').value,
            transparency: document.getElementById('taskbar-transparency').value,
            taskbarBorderRadius: document.getElementById('taskbar-border-radius').value,
            iconSize: document.getElementById('icon-size').value,
            iconGap: document.getElementById('icon-gap').value,
            iconBorderRadius: document.getElementById('icon-border-radius').value,
            horizontalOffset: document.getElementById('horizontal-offset').value,
            taskbarPosition: document.getElementById('taskbar-position').value,
            color: document.getElementById('taskbar-color').value,
            blur: document.getElementById('taskbar-blur').checked,
            iconcenter: document.getElementById('icon-centre').checked,
            removeBorder: document.getElementById('taskbar-remove-border').checked,
            desktopiconsize: document.getElementById('desktop-icon-size').value,
            desktopIconMargin: document.getElementById('desktop-icon-margin').value,
            desktopIconFont: document.getElementById('desktop-icon-font').value
        };
        localStorage.setItem('FMOSSuperSettings', JSON.stringify(settings));
    }

    // Funktion zum Laden der gespeicherten Einstellungen
    function loadSettings() {
        const savedSettings = JSON.parse(localStorage.getItem('FMOSSuperSettings'));
        if (savedSettings) {
            document.getElementById('taskbar-width').value = savedSettings.width;
            document.getElementById('taskbar-height').value = savedSettings.height;
            document.getElementById('taskbar-transparency').value = savedSettings.transparency;
            document.getElementById('taskbar-border-radius').value = savedSettings.taskbarBorderRadius;
            document.getElementById('icon-size').value = savedSettings.iconSize;
            document.getElementById('icon-gap').value = savedSettings.iconGap;
            document.getElementById('icon-border-radius').value = savedSettings.iconBorderRadius;
            document.getElementById('horizontal-offset').value = savedSettings.horizontalOffset;
            document.getElementById('taskbar-position').value = savedSettings.taskbarPosition;
            document.getElementById('taskbar-color').value = savedSettings.color;
            document.getElementById('taskbar-blur').checked = savedSettings.blur;
            document.getElementById('icon-centre').checked = savedSettings.iconcenter;
            document.getElementById('taskbar-remove-border').checked = savedSettings.removeBorder;
            document.getElementById('desktop-icon-size').value = savedSettings.desktopiconsize;
            document.getElementById('desktop-icon-margin').value = savedSettings.desktopIconMargin;
            document.getElementById('desktop-icon-font').value = savedSettings.desktopIconFont;
            updateTaskbar();
        }
    }

    // Event Listener hinzufügen
    document.getElementById('save-settings').addEventListener('click', saveSettings);
    document.getElementById('load-settings').addEventListener('click', loadSettings);
    document.getElementById('close-editor').addEventListener('click', () => {
        editorContainer.remove();
    });

    // Alle Slider und Checkboxen aktualisieren
    document.getElementById('taskbar-width').addEventListener('input', updateTaskbar);
    document.getElementById('taskbar-height').addEventListener('input', updateTaskbar);
    document.getElementById('taskbar-transparency').addEventListener('input', updateTaskbar);
    document.getElementById('taskbar-border-radius').addEventListener('input', updateTaskbar);
    document.getElementById('icon-size').addEventListener('input', updateTaskbar);
    document.getElementById('icon-gap').addEventListener('input', updateTaskbar);
    document.getElementById('icon-border-radius').addEventListener('input', updateTaskbar);
    document.getElementById('horizontal-offset').addEventListener('input', updateTaskbar);
    document.getElementById('taskbar-position').addEventListener('input', updateTaskbar);
    document.getElementById('taskbar-color').addEventListener('input', updateTaskbar);
    document.getElementById('taskbar-blur').addEventListener('change', updateTaskbar);
    document.getElementById('icon-centre').addEventListener('change', updateTaskbar);
    document.getElementById('taskbar-remove-border').addEventListener('change', updateTaskbar);
    document.getElementById('desktop-icon-size').addEventListener('input', updateTaskbar);
    document.getElementById('desktop-icon-margin').addEventListener('input', updateTaskbar);
    document.getElementById('desktop-icon-font').addEventListener('input', updateTaskbar);

    // Initiale Taskbar-Updates
    updateTaskbar();
};

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
        taskbariconlabels: localStorage.getItem('fmostaskbarlabels') === 'true',
    };

    document.getElementById("bootScreen").checked = settings.bootScreen;
    document.getElementById("loginScreen").checked = settings.loginScreen;
    document.getElementById("fileNames").checked = settings.fileNames;
    document.getElementById("adminScripts").checked = settings.adminScripts;
    document.getElementById("bootScripts").checked = settings.bootScripts;
    document.getElementById("taskbariconlabels").checked = settings.taskbariconlabels;
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

function toggletaskbarlables() {
    const isChecked = document.getElementById("taskbariconlabels").checked;
    localStorage.setItem('fmostaskbarlabels', isChecked);
    isChecked ? enabletaskbariconlabels() : disabletaskbariconlabels();
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

function enabletaskbariconlabels() {
    localStorage.setItem('fmostaskbarlabels', 'true');
	showError('Taskar labels are Now Enabled reboot fmos for changes to take place')
}

function disabletaskbariconlabels() {
    localStorage.setItem('fmostaskbarlabels', 'false');
	showError('Taskar labels are Now Disabled')
  updateTaskbarHTML();
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
    showError("Invalid URL. Please enter the URL of a valid image file.");
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
    showError("Invalid URL. Please enter the URL of a valid image file.");
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
    showError("No color entered. Current color: " + taskbar.style.backgroundColor);
  }
}

function resetTaskbarBackgroundColor() {
  const taskbar = document.querySelector('.taskbar');
  taskbar.style.backgroundColor = '#333';
}