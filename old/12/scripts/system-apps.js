

//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Terminals---                                                  //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------terminal-one-------------------------------------------------------------------------------------------

let terminalWindows = [];

function executeJSInTerminal() {
  alert("Be Carefull with running commands or code")
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

//-------terminal-two-------------------------------------------------------------------------------------------

        function showNeonTerminal() {
			showError("WARNING DONT EXECUTE CODE FROM STRANGERS")
            document.getElementById('neonTerminal').style.display = 'flex';
            document.getElementById('neonTerminalInput').focus();
            window.scrollTo(0, 0);
        }

        function hideNeonTerminal() {
            document.getElementById('neonTerminal').style.display = 'none';
        }

        function toggleTerminalFullscreen() {
            const terminal = document.getElementById('neonTerminal');
            if (terminal.style.width === '100vw' && terminal.style.height === '100vh') {
                terminal.style.width = '400px';
                terminal.style.height = '300px';
                terminal.style.top = '50px';
                terminal.style.left = '50px';
            } else {
                terminal.style.width = '100vw';
                terminal.style.height = '100vh';
                terminal.style.top = '0';
                terminal.style.left = '0';
            }
        }

        function runNeonTerminalJS() {
            const code = document.getElementById('neonTerminalInput').value;
            try {
                eval(code);
            } catch (error) {
                alert(`ERROR: ${error.message}`);
            }
        }

        // Drag functionality for the terminal
        let isDraggingTerminal = false;
        let terminalOffsetX, terminalOffsetY;

        document.querySelector('.neon-terminal-header').addEventListener('mousedown', (e) => {
            isDraggingTerminal = true;
            terminalOffsetX = e.clientX - document.getElementById('neonTerminal').offsetLeft;
            terminalOffsetY = e.clientY - document.getElementById('neonTerminal').offsetTop;

            document.addEventListener('mousemove', handleTerminalMouseMove);
            document.addEventListener('mouseup', handleTerminalMouseUp);
        });

        function handleTerminalMouseMove(e) {
            if (isDraggingTerminal) {
                const newX = e.clientX - terminalOffsetX;
                const newY = e.clientY - terminalOffsetY;

                const maxX = window.innerWidth - document.getElementById('neonTerminal').offsetWidth;
                const maxY = window.innerHeight - document.getElementById('neonTerminal').offsetHeight;

                if (newX < 0) {
                    document.getElementById('neonTerminal').style.left = '0';
                } else if (newX > maxX) {
                    document.getElementById('neonTerminal').style.left = `${maxX}px`;
                } else {
                    document.getElementById('neonTerminal').style.left = `${newX}px`;
                }

                if (newY < 0) {
                    document.getElementById('neonTerminal').style.top = '0';
                } else if (newY > maxY) {
                    document.getElementById('neonTerminal').style.top = `${maxY}px`;
                } else {
                    document.getElementById('neonTerminal').style.top = `${newY}px`;
                }
            }
        }

        function handleTerminalMouseUp() {
            isDraggingTerminal = false;
            document.removeEventListener('mousemove', handleTerminalMouseMove);
            document.removeEventListener('mouseup', handleTerminalMouseUp);
        }

