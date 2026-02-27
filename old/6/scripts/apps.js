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