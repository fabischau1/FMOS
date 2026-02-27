//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Apps---                                                       //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------ID-------------------------------------------------------------------------------------------

function generateUniqueId() {
  return `window-${++windowCount}`;
}

//-------musik-------------------------------------------------------------------------------------------

function musik() {
  const uniqueId = generateUniqueId();
  const iframeWindow = document.createElement('div');
  iframeWindow.id = uniqueId;
  iframeWindow.className = 'windowifra';
  
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>Musik</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/Musik/"></iframe>
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
    type: 'musik',
    id: uniqueId
  });
}

//-------store-------------------------------------------------------------------------------------------

function store() {
  const uniqueId = generateUniqueId();
  const iframeWindow = document.createElement('div');
  iframeWindow.id = uniqueId;
  iframeWindow.className = 'windowifra';
  
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>FMOS Store</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMOS/store.html" sandbox="allow-same-origin allow-scripts allow-forms"></iframe>
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
    type: 'store',
    id: uniqueId
  });
}

//-------caculator-------------------------------------------------------------------------------------------

function caculator() {
  const uniqueId = generateUniqueId();
  const iframeWindow = document.createElement('div');
  iframeWindow.id = uniqueId;
  iframeWindow.className = 'windowifra';
  
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>Caculator</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/caculator/"></iframe>
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
    type: 'Caculator',
    id: uniqueId
  });
}

function closecaculator() {
  document.querySelector('.windowifc').remove();
}

function toggleFullscreencaculator() {
  const iframeWindow = document.querySelector('.windowifc');
  const iframe = document.querySelector('#iframe');
  
  // Toggle between fullscreen and normal mode
  if (iframeWindow.classList.contains('fullscreen')) {
    iframeWindow.classList.remove('fullscreen');
    iframeWindow.style.top = '50px';
    iframeWindow.style.left = '50px';
    iframeWindow.style.width = '600px'; // Default width
    iframeWindow.style.height = '600px'; // Default height
    iframe.style.width = '100%';
    iframe.style.height = '550px'; // Adjust height
  } else {
    iframeWindow.classList.add('fullscreen');
    iframeWindow.style.top = '0';
    iframeWindow.style.left = '0';
    iframeWindow.style.width = '100vw';
    iframeWindow.style.height = '100vh';
    iframe.style.width = '100%';
    iframe.style.height = 'calc(100vh - 20px)'; // 20px for the header
  }
}

//-------password-manager------------------------------------------------------------------------------------------

function passwordmgr() {
  const uniqueId = generateUniqueId();
  const iframeWindow = document.createElement('div');
  iframeWindow.id = uniqueId;
  iframeWindow.className = 'windowifra';
  
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>Password MGR</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMOSfiles/pass"></iframe>
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
    type: 'Password MGR',
    id: uniqueId
  });
}

//-------credits-------------------------------------------------------------------------------------------

function crdits() {
  const uniqueId = generateUniqueId();
  const iframeWindow = document.createElement('div');
  iframeWindow.id = uniqueId;
  iframeWindow.className = 'windowifra';
  
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>Credits</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMOSfiles/Credits"></iframe>
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
    type: 'Credits',
    id: uniqueId
  });
}

//-------codespace-------------------------------------------------------------------------------------------

function code() {
  const uniqueId = generateUniqueId();
  const iframeWindow = document.createElement('div');
  iframeWindow.id = uniqueId;
  iframeWindow.className = 'windowifra';
  
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>FMcode</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMcode/"></iframe>
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
    type: 'FMcode',
    id: uniqueId
  });
}

//-------files-------------------------------------------------------------------------------------------

function secfil() {
  alert("Here you can permanently save files");
  alert("Be Carefull with running commands or code");
  alert("Tip: You Can Set A Password By Clicking On Settings Then Password");
  const uniqueId = generateUniqueId();
  const iframeWindow = document.createElement('div');
  iframeWindow.id = uniqueId;
  iframeWindow.className = 'windowifra';
  
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>Files</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMOSfiles/"></iframe>
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
    type: 'secfil',
    id: uniqueId
  });
}

//-------browser-------------------------------------------------------------------------------------------

function openURLInIframe() {
  showError('Warning: Please only go to trusted websites, as they may contain malware that could affect your actual PC.')
  const uniqueId = generateUniqueId();
  const iframeWindow = document.createElement('div');
  iframeWindow.id = uniqueId;
  iframeWindow.className = 'windowifra';
  
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>FM Browser</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMSearch/b/" sandbox="allow-popups allow-same-origin allow-scripts allow-forms"></iframe>
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
    type: 'FM Browser',
    id: uniqueId
  });
}

//-------vm-------------------------------------------------------------------------------------------

function vm() {
  const uniqueId = generateUniqueId();
  const iframeWindow = document.createElement('div');
  iframeWindow.id = uniqueId;
  iframeWindow.className = 'windowifra';
  
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>VM</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/BIOS/"></iframe>
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
    type: 'vm',
    id: uniqueId
  });
}

//-------folder-mgr------------------------------------------------------------------------------------------

function foldermgr() {
  const uniqueId = generateUniqueId();
  const iframeWindow = document.createElement('div');
  iframeWindow.id = uniqueId;
  iframeWindow.className = 'windowifra';
  
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>FolderMGR</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMOS/Folder/main"></iframe>
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
    type: 'FolderMGR',
    id: uniqueId
  });
}

//-------welcome-message------------------------------------------------------------------------------------------

function welcomemsg() {
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowifc'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>WELCOME TO FMOS</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreencaculator()" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="checkTOS()" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMOS/Bootscreen/Welcome"></iframe>
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
  const uniqueId = generateUniqueId();
  const iframeWindow = document.createElement('div');
  iframeWindow.id = uniqueId;
  iframeWindow.className = 'windowifra';
  
  iframeWindow.innerHTML = `
    <div class="window-header" style="display: flex; justify-content: space-between; align-items: center;">
      <span>FolderMGR</span>
      <div style="display: flex; gap: 5px;">
        <button onclick="toggleFullscreenIframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">🗖</button>
        <button onclick="closeiframe('${uniqueId}')" style="background:none; border:none; color: #ff5c5c; font-size: 16px;" class="redlightcolor">X</button>
      </div>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMOS/error003"></iframe>
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
    type: 'Chat Box',
    id: uniqueId
  });
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
