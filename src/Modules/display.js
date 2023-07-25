
// ALL I DID WAS SET UP THE HTML WITH TITLE AND DATA LABELS. NEXT START SETTING UP THE QUERYSELECTOR FOR DISPLAY
// WATCH MORE OF THE VIDEO FROM 2:05
// TURN ADD BUTTON INTO A +___________ OR SOMETHING THAT WONT REQUIRE ANOTHER FORM MAYBE

const displayContainer = document.querySelector('[data-display-container]');
const listTitleElement = document.querySelector('[data-list-title]');
const tasksContainer = document.querySelector('[data-tasks]');
const taskButton = document.querySelector('data-task-button');
// Tried to follow the video for displaying items but its not working correctly because it is on separate sheets.
//  Work on calling one sheet to another maybe.
// Below render function was stolen from last page
// CONTINUE WATCHING VIDEO FROM 21.22

// This will append a new child li with the new project title with unique id, name and tasks []
// CHANGED THE BELOW FUNCTION FROM RENDER TO RENDERPROJECTLISTS
function renderProjectLists() {
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.className = "list-name flex gap-5 ease-in-out duration-300  group rounded-lg p-3 bg-white hover:shadow-lg hover: ring-slate-900/5 hover:ring-1";
        listElement.innerText = list.name;
        if (list.id === selectedListID) {
            listElement.className = 'active-list font-semibold flex gap-5 p-3';
            displayListElement(list)
        }
        listsContainer.appendChild(listElement)

    })
}

function displayListElement(list) {
    const displayDataListTitle = document.querySelector('[data-list-title]');
    displayDataListTitle.innerHTML = list.name;
}

function render() {
    clearElement(listsContainer);
    renderProjectLists();

    if (selectedListID == null) {
        listTitleElement.style.display = 'none'
    } else {
        listTitleElement.style.display = ''
    }

}

function showTaskInputField() {
    // This function will make it so that when add task is clicked, the input form will be visible.

}

// Next create a function so that once you type in a value into the input field, and hit the enter key,
// that value will innerHTML into the task-lists container and become 
// part of the tasks [] object/array inside of the create list function in add.js.






























// /Here will be functions for tab switching for each display item - (Today, This week, Completed, Default(Inbox), Projects)
// function viewProject() {
//     // onClick event - innertext display on Div with an add task button
//     // This factory or constructor will create display "objs" based on the button clicked under projects.
//     //input/#title/#details/submitbutton.(this.value) = innerTEXT.display
//     // call the addTask function button?
// }

// function displaySidebarSelection() {
//     let newDisplay = document.querySelector('.selectedDisplay');


// }

// function displayToday() {
//     //Some kind of onclick event for the "today" button. This will display all 
//     //tasks with a due date of current date.
//     //eventlisteners or append an element that will display a list of tasks - check boxes.
// }


// function displayCompletedTasks() {

// }

// WATCH KYLE'S VIDEO STARTING AT 19:30 TO RENDER ITEMS ON TO THE DISPLAY