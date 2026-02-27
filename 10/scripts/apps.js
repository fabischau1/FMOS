function musik() {
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowifr'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header">
      <span>Musik</span>
      <button onclick="closem()">X</button>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/Musik/"></iframe>
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

      // Update iframe width and height
      const iframe = iframeWindow.querySelector('#iframe');
      iframe.style.width = `${newWidth}px`;
      iframe.style.height = `${newHeight - 20}px`; // 20px is the height of the window-header
    }
  }

  function handleResizeUp() {
    isResizing = false;
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeUp);
  }
}

function closem() {
  document.querySelector('.windowifr').remove();
}

function store() {
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowstore'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header">
      <span>Store</span>
      <button onclick="closeeeeeeeeeeee()">X</button>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMOS/store.html"></iframe>
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

      // Update iframe width and height
      const iframe = iframeWindow.querySelector('#iframe');
      iframe.style.width = `${newWidth}px`;
      iframe.style.height = `${newHeight - 20}px`; // 20px is the height of the window-header
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

function caculator() {
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowifc'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header">
      <span>Caculator</span>
      <button onclick="closecaculator()">X</button>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/caculator/"></iframe>
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

function closecaculator() {
  document.querySelector('.windowifc').remove();
}

function code() {
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowifra'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header">
      <span>FMcode</span>
      <button onclick="closecode()">X</button>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMcode/"></iframe>
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

      // Update iframe width and height
      const iframe = iframeWindow.querySelector('#iframe');
      iframe.style.width = `${newWidth}px`;
      iframe.style.height = `${newHeight - 20}px`; // 20px is the height of the window-header
    }
  }

  function handleResizeUp() {
    isResizing = false;
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeUp);
  }
}

function closecode() {
  document.querySelector('.windowifra').remove();
}

function secfil() {
  alert("Here you can permanently save files");
  alert("Be Carefull with running commands or code");
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowiframefiles'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header">
      <span>Files</span>
      <button onclick="closef()">X</button>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMOSfiles/"></iframe>
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

      // Update iframe width and height
      const iframe = iframeWindow.querySelector('#iframe');
      iframe.style.width = `${newWidth}px`;
      iframe.style.height = `${newHeight - 20}px`; // 20px is the height of the window-header
    }
  }

  function handleResizeUp() {
    isResizing = false;
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeUp);
  }
}

function closef() {
  document.querySelector('.windowiframefiles').remove();
}

function openURLInIframe() {
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowifram'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header">
      <span>Browser</span>
      <button onclick="closeIframeeeee()">X</button>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMSearch/"></iframe>
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

      // Update iframe width and height
      const iframe = iframeWindow.querySelector('#iframe');
      iframe.style.width = `${newWidth}px`;
      iframe.style.height = `${newHeight - 20}px`; // 20px is the height of the window-header
    }
  }

  function handleResizeUp() {
    isResizing = false;
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeUp);
  }
}

function closeIframeeeee() {
  document.querySelector('.windowifram').remove();
}

function vm() {
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowifra'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header">
      <span>FMSearch</span>
      <button onclick="closevm()">X</button>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/BIOS/"></iframe>
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

      // Update iframe width and height
      const iframe = iframeWindow.querySelector('#iframe');
      iframe.style.width = `${newWidth}px`;
      iframe.style.height = `${newHeight - 20}px`; // 20px is the height of the window-header
    }
  }

  function handleResizeUp() {
    isResizing = false;
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeUp);
  }
  
  function handleResizeUp() {
    const windowifraElement = document.querySelector('.windowifra');
        windowifraElement.style.width = '800px';
        windowifraElement.style.height = '400px';
  }
}

function closevm() {
  document.querySelector('.windowifra').remove();
}