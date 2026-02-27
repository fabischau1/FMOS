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
        	// nothing
	} else {
		welcomemsg();
    }
}

//-------boot-animation------------------------------------------------------------------------------------------

function checkAndShowFullScreenIframe() {
    const isFullScreenAllowed = localStorage.getItem('showFullScreenIframe');
    if (isFullScreenAllowed === 'true') {
        showFullScreenIframe();
    } if (isFullScreenAllowed === 'boot2') {
        showboot3();
	} else {
		showboot2();
    }
}

function showboot3() {
    const url = 'https://fabischau1.github.io/FMOS/Bootscreen/boot2';

    const iframe = document.createElement('iframe');

    iframe.src = url;

    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';

    document.body.appendChild(iframe);

    setTimeout(() => {
        document.body.removeChild(iframe);
    }, 5000);
}

function showboot2() {
    const url = 'https://fabischau1.github.io/FMOS/Bootscreen/FMOS12bootnoterm.html';

    const iframe = document.createElement('iframe');

    iframe.src = url;

    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';

    document.body.appendChild(iframe);

    setTimeout(() => {
        document.body.removeChild(iframe);
    }, 5000);
}



function showFullScreenIframe() {
    const url = 'https://fabischau1.github.io/FMOS/Bootscreen/FMOSboot';

    const iframe = document.createElement('iframe');

    iframe.src = url;

    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';

    document.body.appendChild(iframe);

    setTimeout(() => {
        document.body.removeChild(iframe);
    }, 5000);
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
