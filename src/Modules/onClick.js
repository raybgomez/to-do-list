
//Create Variables, this is for the create projects button

function clickedCreateProject() {
    document.getElementById("popupProject").style.display = "block";
}

function closeForm() {
    document.getElementById("popupProject").style.display = "none";
}

//Create two functions for the create a new task buttons or cancel. 
//Do I need to create a new HTML page to keep things organized?

// When the user clicks anywhere outside of the Pop up box, close it
window.onclick = function (event) {
    let popUpBox = document.getElementById('popupProject');
    if (event.target == popUpBox) {
        closeForm();
    }
}