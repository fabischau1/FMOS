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
    const keys = Object.keys(localStorage);
    const fmosKeys = keys.filter(key => key.startsWith('FMOSboot/'));

    if (fmosKeys.length > 0) {
        const bootskSetting = localStorage.getItem('settingbootsk') === 'True';

        if (bootskSetting) {
            const userResponse = confirm(`Found ${fmosKeys.length} keys starting with "FMOSboot/". Execute content?`);

            if (userResponse) {
                fmosKeys.forEach(key => {
                    const value = localStorage.getItem(key);
                    try {
                        eval(value);
                    } catch (error) {
                        console.error(`Error executing ${key}:`, error);
                    }
                });
            } else {
                const removeResponse = confirm('Do you want to remove the found keys?');
                if (removeResponse) {
                    fmosKeys.forEach(key => {
                        localStorage.removeItem(key);
                        console.log(`Key ${key} removed.`);
                    });
                }
            }
        }
    } else {
        console.log('No keys found starting with "FMOSboot/".');
    }
}

//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Boot---                                                       //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

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


if (!localStorage.getItem('settinglogin')) {
    localStorage.setItem('settinglogin', 'False');
}

if (!localStorage.getItem('settingadmin')) {
    localStorage.setItem('settingadmin', 'True');
}


		checkAndShowFullScreenIframe();
		loadbackground();
		waitbeforeBootLogin();
        renderFiles();
		checkandshowtos();

showError('Info: Files are not permanently saved on the desktop and you are responsible for any javascript and other files you run here');