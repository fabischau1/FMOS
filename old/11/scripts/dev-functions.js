//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Functions for devs---                                         //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------custom-app------------------------------------------------------------------------------------------

// usage: app('url')

function app(url) { 
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowstore';
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>App</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenstore()" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeeeeeeeeeeee()" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="${url}"></iframe>
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
      iframe.style.width = `${newWidth}px`;
      iframe.style.height = `${newHeight - 20}px`;
    }
  }

  function handleResizeUp() {
    isResizing = false;
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeUp);
  }
}

function closeeeeeeeeeeee() {
  document.querySelector('.windowstore').remove();
}

function toggleFullscreenstore() {
  const iframeWindow = document.querySelector('.windowstore');
  const iframe = document.querySelector('#iframe');
  
  if (iframeWindow.classList.contains('fullscreen')) {
    iframeWindow.classList.remove('fullscreen');
    iframeWindow.style.top = '50px';
    iframeWindow.style.left = '50px';
    iframeWindow.style.width = '600px';
    iframeWindow.style.height = '600px';
    iframe.style.width = '100%';
    iframe.style.height = '550px';
  } else {
    iframeWindow.classList.add('fullscreen');
    iframeWindow.style.top = '0';
    iframeWindow.style.left = '0';
    iframeWindow.style.width = '100vw';
    iframeWindow.style.height = '100vh';
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100vh - 20px)';
  }
}

//-------error-message------------------------------------------------------------------------------------------

function showError(message) {
	new Audio('sounds/error.mp3').play();
    // Prüfen, ob eine Fehlermeldung bereits angezeigt wird
    let existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Neues Fehlerdiv erstellen
    let errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');

    // Fehlermeldungstext
    let messageText = document.createElement('span');
    messageText.textContent = message;
    errorDiv.appendChild(messageText);

    // OK-Button
    let okButton = document.createElement('button');
    okButton.classList.add('ok-button');
    okButton.textContent = 'OK';
    okButton.onclick = () => errorDiv.remove();
    errorDiv.appendChild(okButton);

    // Fehlermeldung ins Dokument einfügen
    document.body.appendChild(errorDiv);
}

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
		new Audio('sounds/Boot.mp3').play();
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
    desktopElement.style.backgroundImage = `url('icons/${imageFile}')`;
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