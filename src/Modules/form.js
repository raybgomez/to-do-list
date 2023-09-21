
//Create Variables, this is for the create projects button
let newProjectBtn = document.querySelector(".newProjectBtn");
newProjectBtn.addEventListener("click", addProject);

function addProject() {
    document.getElementById("popupProject").style.display = "block";
}

let closeProjectBtn = document.querySelector(".projBtnCancel");
closeProjectBtn.addEventListener("click", closeForm);

const createProjectBtn = document.querySelector(".projBtnSubmit");
createProjectBtn.addEventListener('click', closeForm)

function closeForm() {
    document.getElementById("popupProject").style.display = "none";
}
