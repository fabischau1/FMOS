//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Apps---                                                       //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------ID-------------------------------------------------------------------------------------------

function generateUniqueId() {
    return `window-${++windowCount}`;
  }

  function system_app(src, type, name) {
    const uniqueId = generateUniqueId();
    const iframeWindow = document.createElement('div');
    iframeWindow.id = uniqueId;
    iframeWindow.className = 'windowifra';
    
    iframeWindow.innerHTML = `
      <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
        <span>${name}</span>
        <div style="display: flex; gap: 5px;">
          <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
          <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
        </div>
      </div>
      <div class="window-body">
        <iframe id="iframe" frameborder="0" width="100%" height="550px" src="${src}"></iframe>
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
      type: type,
      id: uniqueId
    });
  }
  

  function sandbox_app(src, type, name, evalcode) {
    const uniqueId = generateUniqueId();
    const iframeWindow = document.createElement('div');
    iframeWindow.id = uniqueId;
    iframeWindow.className = 'windowifra';
    
    iframeWindow.innerHTML = `
      <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
        <span>${name}</span>
        <div style="display: flex; gap: 5px;">
          <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
          <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
        </div>
      </div>
      <div class="window-body">
        <iframe id="iframe" frameborder="0" width="100%" height="550px" sandbox="allow-scripts" src="${src}"></iframe>
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

    const iframe = iframeWindow.querySelector(`iframe#iframe-${uniqueId}`);
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write('<!DOCTYPE html><html><head></head><body></body></html>');
    iframeDoc.close();

    if (evalcode) {
        const script = iframeDoc.createElement('script');
        script.type = 'text/javascript';
        script.textContent = evalcode;
        iframeDoc.body.appendChild(script);
    }

    openedWindows.push({
      type: type,
      id: uniqueId
    });
  }
  
  //-------musik-------------------------------------------------------------------------------------------
  
  function musik() {
    system_app("apps/Musik/index.html", "musik", "Musik")
  }
  
  //-------store-------------------------------------------------------------------------------------------
  
  function store() {
    system_app("apps/store/index.html", "store", "FMOS Store")
  }
  
  //-------caculator-------------------------------------------------------------------------------------------
  
  function caculator() {
    system_app("apps/caculator/index.html", "Caculator", "Caculator")
  }
  
  //-------password-manager------------------------------------------------------------------------------------------
  
  function passwordmgr() {
    system_app("apps/pass/index.html", "Password MGR", "Password MGR")
  }
  
  //-------credits-------------------------------------------------------------------------------------------
  
  function crdits() {
    system_app("apps/Credits/index.html", "Credits", "Credits")
  }
  
  //-------codespace-------------------------------------------------------------------------------------------
  
  function code() {
    system_app("apps/FMcode/index.html", "FMcode", "FMcode")
  }
  
  //-------files-------------------------------------------------------------------------------------------
  
  function secfil() {
    showError("Here you can permanently save files");
    showError("Be Carefull with running commands or code");
    showError("Tip: You Can Set A Password By Clicking On Settings Then Password");
    system_app("apps/FMOSfiles/index.html", "secfil", "Files")
  }
  
  //-------browser-------------------------------------------------------------------------------------------
  
  function openURLInIframe() {
    showError('Warning: Please only go to trusted websites, as they may contain malware that could affect your actual PC.')
    system_app("apps/FMSearch/b/index.html", "FM Browser", "FM Browser")
  }
  //-------vm-------------------------------------------------------------------------------------------
  
  function vm() {
    system_app("apps/BIOS/index.html", "vm", "VM")
  }
  
  //-------folder-mgr------------------------------------------------------------------------------------------
  
  function foldermgr() {
    system_app("apps/Folder/main.html", "FolderMGR", "FolderMGR")
  }
  
  //-------welcome-message------------------------------------------------------------------------------------------
  
  function welcomemsg() {
    showError("WARNING: PLEASE DO NOT STORE PERSONAL DATA OR FILES OR INFORMATION ON THIS OPERATING SYSTEM SIMULATION. ALSO DO NOT USE A REAL PASSWORD AS YOUR PASSWORD.");
    const iframeWindow = document.createElement('div');
    iframeWindow.className = 'windowifc';
    iframeWindow.innerHTML = `
      <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
        <span>WELCOME TO FMOS</span>
        <div style="display: flex; gap: 5px;">
          <button onclick="toggleFullscreencaculator()" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
          <button onclick="checkTOS()" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
        </div>
      </div>
      <div class="window-body">
        <iframe id="iframe" frameborder="0" width="100%" height="550px" src="Bootscreen/Welcome.html"></iframe>
        <div class="resize-handle"></div>
      </div>
    `;
    document.body.appendChild(iframeWindow);
    iframeWindow.style.top = '50px';
    iframeWindow.style.left = '50px';
    iframeWindow.style.display = 'block'; // show the window
  
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
      }
    }
  
    function handleResizeUp() {
      isResizing = false;
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeUp);
    }
  }
  
  function checkTOS() {
      if (confirm("Do you accept the Terms of Service?")) {
          document.querySelector('.windowifc').remove();
          localStorage.setItem('TOS', 'true');
      } else {
          location.reload();
      }
  }
  
  //-------chat-box-1-----------------------------------------------------------------------------------------
  
  function Chatbox1() {
    system_app("apps/error/error003.html", "chatbox", "Chat Box")
  }
  
  //-------fullscreen-close-functions-----------------------------------------------------------------------------------------
  
  
  function closeiframe(windowId) {
    const vmWindow = document.getElementById(windowId);
    if (!vmWindow) return;
  
    vmWindow.style.animation = 'animate-out 0.3s forwards';
  
    setTimeout(() => {
      vmWindow.remove();
  
      const index = openedWindows.findIndex(win => win.id === windowId);
      if (index !== -1) {
        openedWindows.splice(index, 1);
      }
    }, 250);
  }
  
  
  
  function toggleFullscreenIframe(windowId) {
    const iframeWindow = document.getElementById(windowId);
    const iframe = iframeWindow.querySelector('#iframe');
    
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