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
    </div>
  `;
  document.body.appendChild(iframeWindow);
  iframeWindow.style.top = '50px';
  iframeWindow.style.left = '50px';
  iframeWindow.style.display = 'block';
}

function closem() {
  const iframeWindow = document.querySelector('.windowifr');
  iframeWindow.remove();
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
    </div>
  `;
  document.body.appendChild(iframeWindow);
  iframeWindow.style.top = '50px';
  iframeWindow.style.left = '50px';
  iframeWindow.style.display = 'block';
}

function closecaculator() {
  const iframeWindow = document.querySelector('.windowifc');
  iframeWindow.remove();
}

function code() {
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowifra'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header">
      <span>FMcode</span>
      <button onclick="closeIfra()">X</button>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMcode/"></iframe>
    </div>
  `;
  document.body.appendChild(iframeWindow);
  iframeWindow.style.top = '50px';
  iframeWindow.style.left = '50px';
  iframeWindow.style.display = 'block';
}

function closeIfra() {
  const iframeWindow = document.querySelector('.windowifra');
  iframeWindow.remove();
}

function secfil() {
  alert("Here you can permanently save files")
  alert("Be Carefull with running commands or code")
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowiframefiles'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header">
      <span>File Manager</span>
      <button onclick="closefiless()">X</button>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMOSfiles/"></iframe>
    </div>
  `;
  document.body.appendChild(iframeWindow);
  iframeWindow.style.top = '50px';
  iframeWindow.style.left = '50px';
  iframeWindow.style.display = 'block';
}

function closefiless() {
  const iframeWindow = document.querySelector('.windowiframefiles');
  iframeWindow.remove();
}

function openURLInIframe() {
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowifram'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header">
      <span>FMSearch</span>
      <button onclick="closeIframe()">X</button>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/FMSearch/"></iframe>
    </div>
  `;
  document.body.appendChild(iframeWindow);
  iframeWindow.style.top = '50px';
  iframeWindow.style.left = '50px';
  iframeWindow.style.display = 'block';
}

function closeIframe() {
  const iframeWindow = document.querySelector('.windowifram');
  iframeWindow.remove();
}

function vm() {
  const iframeWindow = document.createElement('div');
  iframeWindow.className = 'windowifra'; // same class as the HTML preview iframe
  iframeWindow.innerHTML = `
    <div class="window-header">
      <span>Virtual Mashine</span>
      <button onclick="closevm()">X</button>
    </div>
    <div class="window-body">
      <iframe id="iframe" frameborder="0" width="100%" height="550px" src="https://fabischau1.github.io/BIOS/"></iframe>
    </div>
  `;
  document.body.appendChild(iframeWindow);
  iframeWindow.style.top = '50px';
  iframeWindow.style.left = '50px';
  iframeWindow.style.display = 'block';
}

function closevm() {
  const iframeWindow = document.querySelector('.windowifra');
  iframeWindow.remove();
}