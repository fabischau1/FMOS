        // Drag functionality for the window
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

        // Drag functionality for the icons
        let currentDraggedElement = null;

        document.querySelector('.desktop').addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('icon')) {
                currentDraggedElement = e.target;
                currentDraggedFile = e.target.dataset.file;
                e.target.classList.add('dragging');
            }
        });

        document.querySelector('.desktop').addEventListener('mousemove', (e) => {
            if (currentDraggedElement) {
                const newX = e.clientX - currentDraggedElement.offsetWidth / 2;
                const newY = e.clientY - currentDraggedElement.offsetHeight / 2;

                const maxX = window.innerWidth - currentDraggedElement.offsetWidth;
                const maxY = window.innerHeight - currentDraggedElement.offsetHeight;

                if (newX < 0) {
                    currentDraggedElement.style.left = '0';
                } else if (newX > maxX) {
                    currentDraggedElement.style.left = `${maxX}px`;
                } else {
                    currentDraggedElement.style.left = `${newX}px`;
                }

                if (newY < 0) {
                    currentDraggedElement.style.top = '0';
                } else if (newY > maxY) {
                    currentDraggedElement.style.top = `${maxY}px`;
                } else {
                    currentDraggedElement.style.top = `${newY}px`;
                }
            }
        });

        document.querySelector('.desktop').addEventListener('mouseup', () => {
            if (currentDraggedElement) {
                currentDraggedElement.classList.remove('dragging');
                currentDraggedElement = null;
                currentDraggedFile = null;
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