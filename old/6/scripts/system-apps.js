let terminalWindows = [];

function executeJSInTerminal() {
  const terminalWindow = document.createElement('div');
  terminalWindow.className = 'terminal-window';
  terminalWindow.innerHTML = `
    <div class="terminal-header">
      <div class="terminal-title">FM Shell</div>
      <div class="terminal-buttons">
        <button class="terminal-button" id="close-button">×</button>
      </div>
    </div>
    <div class="terminal-body">
      <div class="terminal-output" id="terminal-output">
        <span class="terminal-prompt">~$</span>
        <textarea id="terminal-input" placeholder="Enter JavaScript code..." style="width: 100%; padding: 10px; font-family: monospace; border: none; resize: none;"></textarea>
      </div>
    </div>
  `;
  document.body.appendChild(terminalWindow);

  terminalWindow.style.display = 'block';
  terminalWindow.style.opacity = 0;
  terminalWindow.style.transform = 'cale(0.5)';

  setTimeout(() => {
    terminalWindow.style.transition = 'opacity 0.5s, transform 0.5s';
    terminalWindow.style.opacity = 1;
    terminalWindow.style.transform = 'cale(1)';
  }, 10);

  const closeButton = terminalWindow.querySelector('#close-button');
  const terminalInput = terminalWindow.querySelector('#terminal-input');
  const terminalOutput = terminalWindow.querySelector('#terminal-output');

  closeButton.addEventListener('click', () => {
    terminalWindow.style.transition = 'opacity 0.5s, transform 0.5s';
    terminalWindow.style.opacity = 0;
    terminalWindow.style.transform = 'cale(0.5)';
    setTimeout(() => {
      terminalWindow.style.display = 'none';
    }, 500);
  });

  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const code = terminalInput.value;
      try {
        const result = eval(code);
        terminalOutput.innerHTML += `<span class="terminal-prompt">~$</span> ${code}<br>`;
        terminalOutput.innerHTML += `<span class="terminal-result">${result}</span><br>`;
      } catch (error) {
        terminalOutput.innerHTML += `<span class="terminal-prompt">~$</span> ${code}<br>`;
        terminalOutput.innerHTML += `<span class="terminal-error">${error.message}</span><br>`;
      }
      terminalInput.value = '';
    }
  });

  terminalWindows.push(terminalWindow);
}