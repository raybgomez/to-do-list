
// Add project list items variables
const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

// This is an array OF OBJECTS that asK for an id and a name - this is the list of project titles which will display in the sidebar under 'projects'
let lists = [{
    id: 1,
    name: 'name'
}, {
    id: 2,
    name: 'ray'
}];
// Whenever you submit a title on the project form, this will push the new title into the lists array as an object with a unique date id, name and tasks array
newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName == null || listName === '') return
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    render()
})

// THIS IS AN OBJECT. This will add a unique date id, name, and open tasks array to each new project title added to the lists array above
function createList(name) {
    return {
        id: Date.now().toString(),
        name: name,
        tasks: [],
    }
}
// This will append a new child li which the new project title with unique id, name and tasks []
function render() {
    // <li class="list-name"
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.classList.add("list-name");
        listElement.innerText = list.name;
        listsContainer.appendChild(listElement)
    })
}
// This will clear the project list if there are any old lists from beforehand - may not need this function since there are no project titles written in the HTML page
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()

// SO FAR THIS WORKS THE SAME AS THE CODE BELOW. FIGURE OUT A WAY TO MAKE THE FORM DISAPPEAR AFTER HITTING SUBMIT.
//  NEXT STEP IN THE VIDEO IS SAVING DATA WHEN PAGE RELOADS. VIDEO - 10:35








// const addProjectInputTitle = document.querySelector("#title");
// const addProjectInputDetails = document.querySelector("#details");
// const addProjectBtn = document.querySelector(".projBtnSubmit");
// const projListHolder = document.querySelector('.projectListHolder');

// const projList = projListHolder.querySelector('.projectListUl');

// //addProjectBtn may need to become an object with an empty array and data attributes attached
// addProjectBtn.addEventListener('click', () => {
//     const newProjItem = document.createElement('li');
//     const newProjItemBtn = document.createElement('button');
//     newProjItemBtn.innerHTML = addProjectInputTitle.value;
//     // newProjItemBtn.classList = 'projectDisplayBtn px-6'; STYLING IS NOT WORKING - TRYING TO STRETCH OUT THE ITEMS TO TAKE UP ALL SPACE AND MAKE X ONLY HAVE SMALL SPACE
//     newProjItem.classList = "flex grow gap-5 ease-in-out duration-300 rounded-lg p-3 bg-white hover:shadow-lg hover: ring-slate-900/5 hover:ring-1";
//     projList.appendChild(newProjItem);
//     newProjItem.appendChild(newProjItemBtn);
//     addProjectInputTitle.value = '';
//     createDelBtn(newProjItem);

// })

// const del = projList.children;

// function createDelBtn(newProjItem) {
//     const erase = document.createElement('button');
//     erase.textContent = 'x';
//     // erase.classList = "font-bold"; - maybe use erase.classList.add
//     newProjItem.appendChild(erase);
//     erase.addEventListener('click', function () {
//         this.parentElement.remove();
//     })
//     return newProjItem;
// }

// for (let i = 0; i < newProjItem; i++) {

//     createDelBtn(newProjItem[i]);
// }
// CREATING A BUTTON INSIDE OF A BUTTON IS GETTING TOO CRAZY. WATCH KYLES VIDEO FROM 1:00 TO 11:00 TO USE OBJECTS AND SAVE DATA - MIGHT AS WELL LEARN HOW TO USE STORAGE DATA NOW

//CREATE AN EVENT LISTENER FOR NEWPROJITEMBTN - TO DISPLAY IT ON THE MAIN DISPLAY WITH THE ADD TASK BUTTON

// SUCCESS WITH STYLING THE APPENDED CHILD BUTTONS AND ADDING X DELETE BUTTON. NEXT FIX STYLING FOR SAID BUTTON.

// FIXED THE ALIGNMENT OF THE NEW CREATED LIST BUTTONS TO CENTER. 
// NOW DO THE SAME FOR 'DETAILS'-IF NOT JUST REMOVE 'DETAILS'. NEXT 
// MAKE EVER7Y NEW BUTTON HAVE A CLICK EVENT TO DISPLA7 ONTO DISPLAY.

// SUCCESS! MADE THE FORM WORK WITH VALUE FOR TITLE AS A NEW BUTTON APPENDED TO "PROJECTLIST"
// NEXT - DO THE SAME FOR DETAILS AND TRY TO ADD SOME STYLING TO THE APPEDNED BUTTONS
// THESE APPENDED BUTTONS WILL LATER HAVE THEIR OWN ONCLICK EVENTS.



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