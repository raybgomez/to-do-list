
//Create Variables, this is for the create projects button

export function form() {

    const newProjectBtn = document.querySelector(".newProjectBtn");
    const closeProjectBtn = document.querySelector(".projBtnCancel");
    const createProjectBtn = document.querySelector(".projBtnSubmit");

    newProjectBtn.addEventListener("click", addProject);
    closeProjectBtn.addEventListener("click", closeForm);
    createProjectBtn.addEventListener('click', closeForm)

    function addProject() {
        document.getElementById("popupProject").style.display = "block";
    }
    function closeForm() {
        document.getElementById("popupProject").style.display = "none";
    }
}


