//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Contex Menu---                                                //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

//-------Show-Contex-Menu---------------------------------------------------------------------------------------------

        function showContextMenu(event) {
            const contextMenu = document.getElementById('contextMenu');
            contextMenu.style.top = `${event.clientY}px`;
            contextMenu.style.left = `${event.clientX}px`;
            contextMenu.style.display = 'block';
            document.addEventListener('click', hideContextMenu);
        }

//-------Hide-Contex-Menu---------------------------------------------------------------------------------------------

        function hideContextMenu() {
            document.getElementById('contextMenu').style.display = 'none';
            document.removeEventListener('click', hideContextMenu);
        }

//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//
//                                     ---Reset And Restart OS---                                       //
//------------------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------------------//

function sysfactoriereset() {
	alert("WARNING")
	alert("THIS WILL DELETE ALL PERMANENTLY SAVED FILES")
	alert("WARNING")
	alert("THIS WILL DELETE THE PASSWORD")
	const userConfirmed = confirm("Do You Realy Want To Delete The Password And Files From FMOS?");
    
    // Überprüfen, welche Taste der Benutzer gedrückt hat
    if (userConfirmed) {
        localStorage.removeItem('password');
		localStorage.removeItem('files');
		deleteAllFMOSdesktopItems();
		localStorage.clear();
		filesclearAllData();
    } else {
		showError('Action Canceled.');
    }
}

function askToRestartOS() {
    const userResponse = confirm("Do you want to restart the operating system?");
    if (userResponse) {
        location.reload();
    } else {
		showError('OS restart canceled.');
    }
}