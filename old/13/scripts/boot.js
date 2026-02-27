//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Boot Help---                                                  //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------login-------------------------------------------------------------------------------------------

function waitbeforeBootLogin() {
    setTimeout(bootlogin, 5000);
}

function bootlogin() {
	const islogintrue = localStorage.getItem('settinglogin');
    if (islogintrue === 'True') {
        showLogin();
	} else {
		//nothing
		checkLocalStorageKeys();
    }
}

function showLogin() {
	if (!localStorage.getItem('password')) {
		showError('cant show login screen (no password set)')
	} else {
		document.getElementById('overlay').style.display = 'flex';
	}
}

function handleLogin() {
    const inputPassword = document.getElementById('password').value;
    const storedPassword = localStorage.getItem('password');
    const errorMessage = document.getElementById('login-error');

    if (inputPassword === storedPassword) {
        document.getElementById('overlay').style.display = 'none';
		new Audio('Boot.mp3').play();
		checkLocalStorageKeys();
    } else {
        errorMessage.textContent = 'Incorrect password, please try again.';
    }
}

//-------load-------------------------------------------------------------------------------------------

function loadbackground() {
  const imageFile = localStorage.getItem('FMOSwallpaper');
  const bodyElement = document.querySelector('body');
  const desktopElement = bodyElement.querySelector('.desktop');
  
  if (imageFile) {
    desktopElement.style.backgroundImage = `url('${imageFile}')`;
  } else {
    console.error('No image file found in local storage for key "FMOSwallpaper".');
	desktopElement.style.backgroundImage = `url('icons/back.jpg')`;
  }
}

function checkandshowtos() {
    const TOS = localStorage.getItem('TOS');
    if (TOS === 'true') {
		//nothing
	} else {
		welcomemsg();
    }
}

//-------check-ip-adress-------------------------------------------------------------------------------------------

async function checkIPAddress() {
    const allowedIPs = ['']; // Beispiel IPs in der Liste

    try {
        // Hole die IP-Adresse des Benutzers
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        const userIP = data.ip;

        // Überprüfe, ob die IP-Adresse in der Liste ist
        if (allowedIPs.includes(userIP)) {
            err001();
        }
    } catch (error) {
        console.error('Fehler beim Abrufen der IP-Adresse:', error);
		showError('An error has occurred.');
    }
}

//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Auto Boot---                                                  //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

function setboot(bootexecutioncode, bootkeyname) {
	let name = "FMOSboot" + "/" + bootkeyname;
	localStorage.setItem('FMOSboot', bootexecutioncode);
}

function checkLocalStorageKeys() {
	const bootskSetting = localStorage.getItem('settingbootsk') === 'True';
	if (bootskSetting) {
		const bootFilesJSON = filesystem["FMOSfolder/boot"];
		const bootFiles = JSON.parse(bootFilesJSON);

		const scriptKeys = Object.keys(bootFiles).filter(key => 
			key.endsWith('.js') || key.endsWith('.fexe') || key.endsWith('.fsys')
		);

		if (scriptKeys.length > 0) {
			const userResponse = confirm(`Found ${scriptKeys.length} script files. Execute content?`);

			if (userResponse) {
				scriptKeys.forEach(key => {
					const value = bootFiles[key];
					try {
						eval(value);
					} catch (error) {
						console.error(`Error executing ${key}:`, error);
					}
				});
			} else {
				const removeResponse = confirm('Do you want to remove the found keys?');
				if (removeResponse) {
					folderdeleteData('FMOSfolder/boot')
					askToRestartOS();
				}
			}
		} else {
			console.log('No script files found.');
		}
	} else {
		// do nothing
	}
}

//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Boot---                                                       //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
let filesystem = {};
let loadingComplete = false;
let timer;
let db;

const request = indexedDB.open("FMOSsystem", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    if (!db.objectStoreNames.contains("FMOSfiles")) {
        db.createObjectStore("FMOSfiles", { keyPath: "key" });
    }
};

request.onsuccess = function(event) {
    db = event.target.result;
    loadDataFromIndexedDB(db);
};

function loadDataFromIndexedDB(db) {
    const transaction = db.transaction(["FMOSfiles"], "readwrite");
    const objectStore = transaction.objectStore("FMOSfiles");
    
    const request = objectStore.getAll();

    request.onsuccess = function(event) {
        const results = event.target.result;
        results.forEach(item => {
            filesystem[item.key] = item.value;
        });
        
        console.log("Filesystem Booted");
        loadingComplete = true;
		if (filesystem.hasOwnProperty(desktoppathdirfull)) {
			files = JSON.parse(filesystem[desktoppathdirfull]);
			console.log('desktop loaded')
			renderFiles();
		} else {
			renderFiles();
		}
		if (!filesystem.hasOwnProperty('FMOSfolder/')) {
			let tempfiles = {
				"docs.folder": "sys",
				"sys.folder": "sys",
				"desktop.folder": "sys",
				"boot.folder": "sys",
				"programms.folder": "sys"
			};
			filesetData('FMOSfolder/', JSON.stringify(tempfiles));
		}

		if (!filesystem.hasOwnProperty('FMOSfolder/sys')) {
			let tempfiles = {
				"programms.folder": "sys"
			};
			filesetData('FMOSfolder/sys', JSON.stringify(tempfiles));
			CreateFile('', 'sys.folder', 'sys')
		}

		if (!filesystem.hasOwnProperty('FMOSfolder/boot')) {
			let tempfiles = {
				"info.txt": "nothing"
			};
			filesetData('FMOSfolder/boot', JSON.stringify(tempfiles));
			CreateFile('', 'boot.folder', 'sys')
		}

		if (!filesystem.hasOwnProperty('FMOSfolder/desktop')) {
			filesetData('FMOSfolder/desktop', JSON.stringify(files));
			CreateFile('', 'desktop.folder', 'sys')
		}

		if (!filesystem.hasOwnProperty('FMOSfolder/docs')) {
			let tempfiles = {
				"TOS.fsys": "app('https://fabischau1.github.io/FMOS/Bootscreen/TOS.html')"
			};
			filesetData('FMOSfolder/docs', JSON.stringify(tempfiles));
			CreateFile('', 'docs.folder', 'sys')
		}

		if (!filesystem.hasOwnProperty('FMOSfolder/sys/programms')) {
			filesetData('FMOSfolder/sys/programms', JSON.stringify(files));
			CreateFile('sys', 'programms.folder', 'sys')
		}

		if (!filesystem.hasOwnProperty('FMOSfolder/programms')) {
			let tempfiles = {
				"info.txt": "Place to store programms"
			};
			filesetData('FMOSfolder/programms', JSON.stringify(tempfiles));
			CreateFile('', 'programms.folder', 'sys')
		}
        removeIframe();
    };

    request.onerror = function(event) {
        showError("Err004: Filesystem Load Error: ", event.target.error, ' Please Restart FMOS');
    };
}
//-------boot-animation------------------------------------------------------------------------------------------

function checkAndShowFullScreenIframe() {
    const isFullScreenAllowed = localStorage.getItem('showFullScreenIframe');
    if (isFullScreenAllowed === 'true') {
        showFullScreenIframe();
    } else if (isFullScreenAllowed === 'boot2') {
        showboot2();
    } else {
        showboot3();
    }
}

function showboot3() {
    const url = 'https://fabischau1.github.io/FMOS/Bootscreen/boot13/boot1.html';
    const iframe = createIframe(url);
    document.body.appendChild(iframe);
    startIframeTimer(iframe);
}

function showboot2() {
    const url = 'https://fabischau1.github.io/FMOS/Bootscreen/boot13/boot2.html';
    const iframe = createIframe(url);
    document.body.appendChild(iframe);
    startIframeTimer(iframe);
}

function showFullScreenIframe() {
    const url = 'https://fabischau1.github.io/FMOS/Bootscreen/FMOSboot';
    const iframe = createIframe(url);
    document.body.appendChild(iframe);
    startIframeTimer(iframe);
}

function createIframe(url) {
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.zIndex = '10000';
    return iframe;
}

function startIframeTimer(iframe) {
    timer = setTimeout(() => {
        if (loadingComplete) {
            removeIframe(iframe);
        }
    }, 5000);
}

function removeIframe(iframe) {
    if (iframe) {
        document.body.removeChild(iframe);
    }
}

if (loadingComplete) {
    const iframe = document.getElementById('bootIframe');
    removeIframe(iframe);
}

checkAndShowFullScreenIframe();

function filesetData(key, value) {
    return new Promise((resolve, reject) => {
        if (typeof key !== 'string' || key.trim() === '') {
            showError(`Err005: keyerror: ${key}`);
            return reject(`Error: ${key}`);
        }

        if (typeof value === 'undefined') {
            showError("Err006: Folder value undefined.");
            return reject("Ungültiger Wert.");
        }

        if (!db) {
            showError("Err007: Cannot save files the file system did not load.");
            return reject("Datenbank nicht initialisiert.");
        }

        filesystem[key] = value;

        const transaction = db.transaction(["FMOSfiles"], "readwrite");
        const objectStore = transaction.objectStore("FMOSfiles");

        const dataToStore = { key: key, value: value };

        const putRequest = objectStore.put(dataToStore);

        putRequest.onsuccess = function() {
            resolve();
        };

        putRequest.onerror = function(event) {
            console.error("Error:", event.target.error.name);
            showError("Err008:", event.target.error.message);
            reject(event.target.error);
        };

        transaction.oncomplete = () => {
        };

        transaction.onerror = (event) => {
            showError("Err009:", event.target.error.message);
            reject(event.target.error);
        };
    });
}

function filedeleteData(key) {
    try {
        if (!db) {
            throw new Error("Database not initialized. Please initialize IndexedDB first.");
        }

        const transaction = db.transaction(["FMOSfiles"], "readwrite");
        const objectStore = transaction.objectStore("FMOSfiles");

        const deleteRequest = objectStore.delete(key);

        deleteRequest.onsuccess = function() {
            delete filesystem[key];
            showError(`'${key}' was deleted.`);
        };

        deleteRequest.onerror = function(event) {
            console.error("Error deleting data:", event.target.error);
        };

        transaction.oncomplete = function() {
            // Transaction completed successfully
        };

        transaction.onerror = function(event) {
            console.error("Delete transaction failed:", event.target.error.message);
        };
    } catch (error) {
        console.error("Error in deleteData call:", error.message);
    }
}

function filesclearAllData() {
	alert("WARNING")
	alert("THIS WILL DELETE ALL PERMANENTLY SAVED FILES")
	const userConfirmed = confirm("Do You Realy Want To Delete all Files From FMOS?");
    
    if (userConfirmed) {
		try {
			if (!db) {
				throw new Error("Database does not function.");
			}

			const transaction = db.transaction(["FMOSfiles"], "readwrite");
			const objectStore = transaction.objectStore("FMOSfiles");

			const clearRequest = objectStore.clear();

			clearRequest.onsuccess = function() {
				console.log("all data erased.");
				filesystem = {};
				showError("all data erased.");
			};

			clearRequest.onerror = function(event) {
				console.error("error:", event.target.error);
			};

			transaction.oncomplete = function() {
				console.log("all data erased.");
			};

			transaction.onerror = function(event) {
				console.error("error:", event.target.error.message);
			};
		} catch (error) {
			console.error("error:", error.message);
		}
	} else {
        console.log("Aktion abgebrochen.");
		showError('Action Canceled.');
    }
}

function folderdeleteData(prefix) {
    try {
        if (!db) {
            throw new Error("Database not initialized. Please initialize IndexedDB first.");
        }

        const transaction = db.transaction(["FMOSfiles"], "readwrite");
        const objectStore = transaction.objectStore("FMOSfiles");

        // Open a cursor to iterate over all records in the object store
        const cursorRequest = objectStore.openCursor();

        cursorRequest.onsuccess = function(event) {
            const cursor = event.target.result;

            if (cursor) {
                const key = cursor.key;

                // Check if the key starts with the given prefix
                if (key.startsWith(prefix)) {
                    // Delete the record with the current cursor's key
                    const deleteRequest = cursor.delete();

                    deleteRequest.onsuccess = function() {
                        delete filesystem[key];
                    };

                    deleteRequest.onerror = function(event) {
                        console.error("Error deleting data:", event.target.error);
                    };
                }

                // Move to the next record
                cursor.continue();
            }
        };

        cursorRequest.onerror = function(event) {
            console.error("Cursor request failed:", event.target.error);
        };

        transaction.oncomplete = function() {
            console.log("Transaction completed successfully.");
        };

        transaction.onerror = function(event) {
            console.error("Delete transaction failed:", event.target.error.message);
        };
    } catch (error) {
        console.error("Error in deleteData call:", error.message);
    }
}

function movefolder(path1, path2) {
    if (!filesystem.hasOwnProperty(path1)) {
        showError(`Error: Source folder '${path1}' does not exist.`);
        return;
    }
	if (!filesystem.hasOwnProperty(path2)) {
        showError(`Error: Source folder '${path2}' does not exist.`);
        return;
    }

    const sourceData = JSON.parse(filesystem[path1]);
    const folderName = path1.substring(path1.lastIndexOf('/') + 1);
    const newFolderPath = path2 + (path2 === 'FMOSfolder/' ? '' : '/') + folderName;
	const folderNamefile = folderName + '.folder'
	if (path2 === 'FMOSfolder/') {
		CreateFile('', folderNamefile, 'folder')
	} else {
		let newPath = path2.startsWith('FMOSfolder/') ? path2.replace('FMOSfolder/', '') : path2;
		CreateFile(newPath, folderNamefile, 'folder')
	}
	
	if (!filesystem.hasOwnProperty(newFolderPath)) {
		filesetData(newFolderPath, JSON.stringify(sourceData));
	} else {
		showError('Error: folder with that name already exists')
	}
	
	delete filesystem[path1]
	
	for (let key in filesystem) {
        if (key.startsWith(path1)) {
            // Neuen Schlüssel erstellen, indem path1 entfernt wird
            const newKey = newFolderPath + key.substring(path1.length);
			console.log(newKey)
            // Daten an den neuen Schlüssel verschieben
            filesetData(newKey, filesystem[key]);
        }
    }
	
    folderdeleteData(path1);

    console.log(`Folder '${path1}' moved to '${path2}' successfully.`);
}

function openFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { // IE/Edge
    elem.msRequestFullscreen();
  }
}

window.onload = function() {
  openFullscreen();
};

if (!localStorage.getItem('settingbootsk')) {
    localStorage.setItem('settingbootsk', 'settingbootsk');
}

if (!localStorage.getItem('settingsettingwinold')) {
    localStorage.setItem('settingsettingwinold', 'False');
}

if (!localStorage.getItem('showFullScreenIframe')) {
    localStorage.setItem('showFullScreenIframe', 'false');
}

if (!localStorage.getItem('FMOSwallpaperlive')) {
    localStorage.setItem('FMOSwallpaperlive', 'false');
}

if (!localStorage.getItem('FMOSfolder/')) {
    localStorage.setItem('FMOSfolder/', '');
}

if (!localStorage.getItem('FMOStheme')) {
    localStorage.setItem('FMOStheme', 'false');
}

if (localStorage.getItem('FMOSinfo') === 'FMOS13') {
	//do nothing
} else {
	showError('INFO: Your Responsible for any JS code u run')
	localStorage.setItem('FMOSinfo', 'FMOS13')
}

if (!localStorage.getItem('FMOSsettingAnimationIframe')) {
    localStorage.setItem('FMOSsettingAnimationIframe', '1');
}

if (!localStorage.getItem('settinglogin')) {
    localStorage.setItem('settinglogin', 'False');
}

if (!localStorage.getItem('settingadmin')) {
    localStorage.setItem('settingadmin', 'True');
}

		loadbackground();
		checkTheme();
		checkIframeAnimation();
		checkFMOSwallpaperlive();
		waitbeforeBootLogin();
		checkandshowtos();