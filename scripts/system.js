//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Contex Menu---                                                //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------Show-Contex-Menu---------------------------------------------------------------------------------------------

function showContextMenu(event) {
    const contextMenu = document.getElementById('contextMenu');
    contextMenu.style.top = `${event.clientY}px`;
    contextMenu.style.left = `${event.clientX}px`;
    contextMenu.style.display = 'block';
    document.addEventListener('click', hideContextMenu);
  }
  
  //-------Hide-Contex-Menu---------------------------------------------------------------------------------------------
  
  function hideContextMenu() {
    document.getElementById('contextMenu').style.display = 'none';
    document.removeEventListener('click', hideContextMenu);
  }

//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---App Menu---                                                   //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

function renderAppFinder() {
    const appsFinderWindow = document.getElementById("appsfinder-window");
    
    if (!appsFinderWindow) {
        showError('Oops Something Went Wrong :(');
        return;
    }
    
    const appFilesJSON = filesystem["FMOSfolder/programms"];
    if (!appFilesJSON) {
        console.log("No External Apps Found.");
        return;
    }
    
    const appFiles = JSON.parse(appFilesJSON);
    
    for (const fileName in appFiles) {
        if (fileName.endsWith(".short")) {
            const appName = fileName.replace(".short", "");
            const content = appFiles[fileName];
            
            let iconMatch = content.match(/icon:\s*"([^"]+)"/);
            let iconPath = iconMatch ? iconMatch[1] : null;

            if (iconPath) {
                iconPath = "FMOSfolder" + iconPath;
                
                const realIcon = iconPath.split('/').pop();
                const realFolder = iconPath.split('/').slice(0, -1).join('/');
                const folderOffile = realFolder.replace(/\/$/, ''); 

                const iconContent = JSON.parse(filesystem[folderOffile])[realIcon];

                // Button erstellen
                const button = document.createElement("button");
                button.id = "option1";
                button.onclick = () => executeshortcutApp(appName + ".short"); // ✅ EXAKT, wie du es willst!

                // Icon-Bild erstellen
                const img = document.createElement("img");
                img.src = iconContent;
                img.alt = "icon";
                img.className = "button-icon";
                img.style.objectFit = "contain"; // Verhindert Quetschen
                
                button.appendChild(img);
                button.appendChild(document.createTextNode(" " + appName));
                
                appsFinderWindow.appendChild(button);
            } else {
                // Falls kein Icon gefunden wurde, Standard-Icon setzen
                const button = document.createElement("button");
                button.id = "option1";
                button.onclick = () => executeshortcutApp(appName + ".short"); // ✅ Genau wie gefordert!

                const img = document.createElement("img");
                img.src = "default_icon.png";
                img.alt = "default icon";
                img.className = "button-icon";
                img.style.objectFit = "contain"; // Verhindert Quetschen
                
                button.appendChild(img);
                button.appendChild(document.createTextNode(" " + appName));
                
                appsFinderWindow.appendChild(button);
            }
        }
    }
}
function executeshortcutApp(fileName) {
    const ProgrammFilesPath = JSON.parse(filesystem['FMOSfolder/programms'])
	const contentosshortcut = ProgrammFilesPath[fileName]
	let iconMatch = contentosshortcut.match(/icon:\s*"([^"]+)"/);
	let pathMatch = contentosshortcut.match(/path:\s*"([^"]+)"/);
	let fileMatch = contentosshortcut.match(/file:\s*"([^"]+)"/);
	let pathend = pathMatch ? pathMatch[1] : null;
	let iconend = iconMatch ? iconMatch[1] : null;
	let fileend = fileMatch ? fileMatch[1] : null;
	exedir(pathend, fileend)
}