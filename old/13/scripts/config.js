//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Config---                                                     //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------position-icons-and-make-file-editor-better-------------------------------------------------------------------------------------

        let isDragging = false;
        let offsetX, offsetY;

        document.querySelector('.window-header').addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - document.getElementById('editorWindow').offsetLeft;
            offsetY = e.clientY - document.getElementById('editorWindow').offsetTop;

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        });

        function handleMouseMove(e) {
            if (isDragging) {
                const newX = e.clientX - offsetX;
                const newY = e.clientY - offsetY;

                const maxX = window.innerWidth - document.getElementById('editorWindow').offsetWidth;
                const maxY = window.innerHeight - document.getElementById('editorWindow').offsetHeight;

                if (newX < 0) {
                    document.getElementById('editorWindow').style.left = '0';
                } else if (newX > maxX) {
                    document.getElementById('editorWindow').style.left = `${maxX}px`;
                } else {
                    document.getElementById('editorWindow').style.left = `${newX}px`;
                }

                if (newY < 0) {
                    document.getElementById('editorWindow').style.top = '0';
                } else if (newY > maxY) {
                    document.getElementById('editorWindow').style.top = `${maxY}px`;
                } else {
                    document.getElementById('editorWindow').style.top = `${newY}px`;
                }
            }
        }

        function handleMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

let currentDraggedElement = null;
let draggedFileName = null;

document.querySelector('.desktop').addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('icon')) {
        currentDraggedElement = e.target;
        draggedFileName = e.target.dataset.file;
        e.target.classList.add('dragging');
    }
});

document.querySelector('.desktop').addEventListener('mousemove', (e) => {
    if (currentDraggedElement) {
        const newX = e.clientX - currentDraggedElement.offsetWidth / 2;
        const newY = e.clientY - currentDraggedElement.offsetHeight / 2;

        const maxX = window.innerWidth - currentDraggedElement.offsetWidth;
        const maxY = window.innerHeight - currentDraggedElement.offsetHeight;

        currentDraggedElement.style.left = Math.min(Math.max(newX, 0), maxX) + 'px';
        currentDraggedElement.style.top = Math.min(Math.max(newY, 0), maxY) + 'px';
    }
});

document.querySelector('.desktop').addEventListener('mouseup', (e) => {
    if (currentDraggedElement) {
        const iconsContainer = document.getElementById('iconsContainer');
        const isVisible = iconsContainer.offsetWidth > 0 && iconsContainer.offsetHeight > 0;
        const iconsContainerRect = iconsContainer.getBoundingClientRect();


        if (isVisible &&
            e.clientX > iconsContainerRect.left &&
            e.clientX < iconsContainerRect.right &&
            e.clientY > iconsContainerRect.top &&
            e.clientY < iconsContainerRect.bottom) {
            
			if(draggedFileName.endsWith('.folder')) {
				showError('you cant move folders')
			} else {
			
				if (!filesystem.hasOwnProperty(foldermgrfilespath)) {
					showError('Sorry, this path does not exist. Tipp: Sometimes you have to input the path again and click enter. or the path realy does not exist');
					currentDraggedElement.classList.remove('dragging');
					currentDraggedElement = null;
					draggedFileName = null;
					return;
				}
				
				if (foldermgrfiles.hasOwnProperty(draggedFileName)) {
					const overwrite = confirm(`The File "${draggedFileName}" already exists. Do you want to overwrite it?`);
					if (!overwrite) {
						currentDraggedElement.classList.remove('dragging');
						currentDraggedElement = null;
						draggedFileName = null;
						return;
					}
				}
				
				// Assuming foldermgrfiles is defined globally and you want to update it
				foldermgrfiles[draggedFileName] = files[draggedFileName];
				filesetData(foldermgrfilespath, JSON.stringify(foldermgrfiles));
				loadFiles(foldermgrfilespath.replace('FMOSfolder', ''));
				delete files[draggedFileName];
				renderFiles();
				connectdesktops('2')
			}
		}
        currentDraggedElement.classList.remove('dragging');
        currentDraggedElement = null;
        draggedFileName = null;
    }
});


        function positionIcons() {
            const icons = document.querySelectorAll('.icon');
            const desktopWidth = document.getElementById('desktop').offsetWidth;
            const iconWidth = icons[0].offsetWidth;
            const iconHeight = icons[0].offsetHeight;
            let x = 10;
            let y = 10;

            icons.forEach((icon) => {
                icon.style.left = `${x}px`;
                icon.style.top = `${y}px`;
                x += iconWidth + 10;
                if (x > desktopWidth - iconWidth - 10) {
                    x = 10;
                    y += iconHeight + 10;
                }
            });
        }
		
const desktop = document.getElementById('desktop');
let selection = null;
let startX = 0;
let startY = 0;

// Define color and border properties
const borderWidth = '2px'; // Border width

desktop.addEventListener('mousedown', (event) => {
  if (event.button !== 0) return; // only handle left mouse button
  startX = event.clientX;
  startY = event.clientY;
  selection = document.createElement('div');
  selection.className = 'selected';
  selection.style.position = 'absolute'; // Ensure positioning is absolute
  selection.style.left = `${startX}px`;
  selection.style.top = `${startY}px`;
  selection.style.width = '0px';
  selection.style.height = '0px';
  selection.style.borderWidth = borderWidth;
  desktop.appendChild(selection);
});

document.addEventListener('mousemove', (event) => {
  if (event.buttons !== 1) return; // only handle mouse move while left mouse button is pressed
  if (!selection) return; // nothing to select
  const x = event.clientX;
  const y = event.clientY;
  const width = Math.abs(x - startX);
  const height = Math.abs(y - startY);
  const left = Math.min(x, startX);
  const top = Math.min(y, startY);
  selection.style.left = `${left}px`;
  selection.style.top = `${top}px`;
  selection.style.width = `${width}px`;
  selection.style.height = `${height}px`;

  // Check if the selection intersects with any file
  const files = document.querySelectorAll('.file');
  files.forEach((file) => {
    const fileLeft = file.offsetLeft;
    const fileTop = file.offsetTop;
    const fileWidth = file.offsetWidth;
    const fileHeight = file.offsetHeight;

    if (
      left < fileLeft + fileWidth &&
      top < fileTop + fileHeight &&
      left + width > fileLeft &&
      top + height > fileTop
    ) {
      // If the selection intersects with the file, add the 'selected' class to it
      file.classList.add('selected');
    } else {
      // Otherwise, remove the 'selected' class from the file
      file.classList.remove('selected');
    }
  });
});

document.addEventListener('mouseup', (event) => {
  if (event.button !== 0) return; // only handle left mouse button
  if (!selection) return; // nothing to select

  // Remove the selection element from the DOM
  selection.remove();
  selection = null; // Clear the selection reference
});
