
//Create Variables, this is for the create projects button - this might become one large function called 
let newProjectBtn = document.querySelector(".newProjectBtn");
newProjectBtn.addEventListener("click", addProject);

function addProject() {
    document.getElementById("popupProject").style.display = "block";
}

let closeProjectBtn = document.querySelector(".projBtnCancel"); //change to closeBtn, .cancelBtn
closeProjectBtn.addEventListener("click", closeForm);

function closeForm() {
    document.getElementById("popupProject").style.display = "none"; //change to querySelectorAll (#popupProject and #popupTask)
}

// let submitProjectBtn = document.querySelector(".projBtnSubmit");
// submitProjectBtn.addEventListener("click", function(???) - from add.js!!!

// When the user clicks anywhere outside of the Pop up box, close it - NOT WORKING!
// window.onclick = function (event) {
//     let popUpBox = document.getElementById('popupProject');
//     if (event.target == popUpBox) {
//         closeForm;
//     }
// }

//let newTaskBtn = document.querySelector("".addTask");
//newTaskBtn.addEventListener ("click", addTask);

//function addTask(){
// document.getElementById("popupTask").style.display = "block";
//}

//closeForm()