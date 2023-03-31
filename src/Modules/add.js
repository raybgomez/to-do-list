//Add task and add project objs that will be called in the form submit buttons.

// function addedProject(???) - an obj. that will close out the form 
// and receive input details from that form into the "Projectbody" as an innerHTML text, 
// element, appendchild, li, ordered list, obj constructor or factory function

// Add project list items variables

const addProjectInputTitle = document.querySelector("#title");
const addProjectInputDetails = document.querySelector("#details");
const addProjectBtn = document.querySelector(".projBtnSubmit");
const projListHolder = document.querySelector('.projectListHolder');
const newProjItem = document.createElement('button');



addProjectBtn.addEventListener('click', () => {

    const projList = projListHolder.querySelector('.projectList');

    newProjItem.innerHTML = addProjectInputTitle.value;
    newProjItem.classList = "ease-in-out duration-300 group rounded-lg p-3 bg-white hover:shadow-lg hover: ring-slate-900/5 hover:ring-1";
    projList.appendChild(newProjItem);
    addProjectInputTitle.value = '';
    createDelBtn(newProjItem);

})

const del = projList.children;

function createDelBtn(newProjItem) {
    const erase = document.createElement('button');
    erase.textContent = 'x';
    // erase.classList = "text-red-950 ml-2.5"; STYLING FOR X BUTTON NOT WORKING BUT AT LEAST THERE IS NOW A DELETE BUTTON!
    newProjItem.appendChild(erase);
    erase.addEventListener('click', function () {
        this.parentElement.remove();
    })
    return newProjItem;
}

for (let i = 0; i < newProjItem; i++) {

    createDelBtn(newProjItem[i]);
}





// SUCCESS! MADE THE FORM WORK WITH VALUE FOR TITLE AS A NEW BUTTON APPENDED TO "PROJECTLIST"
// NEXT - DO THE SAME FOR DETAILS AND TRY TO ADD SOME STYLING TO THE APPEDNED BUTTONS
// THESE APPENDED BUTTONS WILL LATER HAVE THEIR OWN ONCLICK EVENTS.

// FIXED THE ALIGNMENT OF THE NEW CREATED LIST BUTTONS TO CENTER. 
// NOW DO THE SAME FOR 'DETAILS'-IF NOT JUST REMOVE 'DETAILS'. NEXT 
// MAKE EVER7Y NEW BUTTON HAVE A CLICK EVENT TO DISPLA7 ONTO DISPLAY.

// function addedProject(title, details) { //This is a factory function that will create project objects
//     return {
//         title: title,
//         details: details,
//         getFullProject() {
//             return `${title} ${details}`;
//         }
//     }
// };

// *To make user input into a new project object - input/#title/#details/submitbutton.(this.value) = trigger addedProject()
// create project obj - ="Projectbody.inner.html (as a button?)= inputed new project obj as a button?


//The new project appended li will be a button, when clicked, will display onto the main display (innertext, append?),
//showing the title of project and an "addTask() button that will call the taskPopupForm() - will have
// the addedTask() in it as the "submit" button.



//constructor or factory function addedtask(???) - called by the submit button within the taskPopupForm()
//an object that will receive input details from the taskPopupForm() and add it to the project.

// function addedTask (title, details, dueDate) {
//     return {
//         title:title,
//         details: details,
//         dueDate: dueDate,
//         getFullTask(){
//             return `${title} ${details} ${dueDate}`;
//     }

// } create task objs as radio buttons or check box buttons.






































// function addTask() {
//     let createNewTodo = document.querySelector('.taskBody');

//     const newTask = document.createElement('div');
//     newTask.className = 'task';
//     const newTitle = document.createElement("input"); //short paragraph input, required.
//     newTitle.className = 'title';
//     const newDetails = document.createElement("input");//short paragraph input
//     newDetails.className = 'details'; //Optional with details sample description input
//     const newDate = document.createElement("button"); //Figure out how to use date-fns from external library npm, make button say "Due date" and make it optional.
//     newDate.className = 'newDate';
//     const createCancel = document.createElement("div");
//     createCancel.className = 'createCancel';
//     const create = document.createElement('button');//required or
//     const cancel = document.createElement('button');//required

//     createNewTodo.appendChild(newTask);
//     newTask.append(newTitle, newDetails, newDate, createCancel);
//     createCancel.append(create, cancel)

// }

// function newProject() {
//     let createNewProject = document.querySelector('.projectBody');

//     const newProject = document.createElement("div");
//     newProject.className = 'project';
//     const newTitle = document.createElement("input"); //short paragraph input, required.
//     newTitle.className = 'title'; //This is a repeat code from above, try to shorten this!

//     const createCancel = document.createElement("div"); //REPEAT CODE, SHORTEN!
//     createCancel.className = 'createCancel';
//     const create = document.createElement('button');//required or
//     const cancel = document.createElement('button');//required

//     createNewProject.appendChild(newProject);
//     newProject.append(newTitle, createCancel);
//     createCancel.append(create, cancel)

//     //Turn this into a factory function

// }