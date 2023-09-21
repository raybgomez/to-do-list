
// Add variables
const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');
const deleteButton = document.querySelector('[data-delete-button]');
const listDisplayContainer = document.querySelector('[data-display-container]');
const listTitleElement = document.querySelector('[data-list-title]');
const tasksContainer = document.querySelector('[data-tasks]');
const taskTemplate = document.getElementById('task-template');

const newTaskForm = document.querySelector('[data-new-task-form]');
const newTaskInput = document.querySelector('[data-new-task-input]');
const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]')



// For storage when creating new list items - Key:value
const LOCAL_STORAGE_LIST_KEY = 'tasks.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'tasks.selectedListID'
let selectedListID = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)
// This is an storage array OF OBJECTS that asK for an id and a name - this is the list of project titles which will display in the sidebar under 'projects'. Or it will display an empty array.
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

listsContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectedListID = e.target.dataset.listId
        saveAndRender()
    }
})
// This will save that the task was checked when page refreshed
tasksContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'input') {
        const selectedList = lists.find(list => list.id === selectedListID)
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        save()
    }
})
// Whenever you submit a title on the project form, this will push the new title into the lists array as an object with a unique date id, name and tasks array
newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName == null || listName === '') return
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    saveAndRender()
})

// This will create a new task item into the list
newTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const taskName = newTaskInput.value;
    if (taskName == null || taskName === '') return
    const task = createTask(taskName);
    newTaskInput.value = null;
    const selectedList = lists.find(list => list.id === selectedListID)
    selectedList.tasks.push(task)
    saveAndRender()
})

// THIS IS AN OBJECT. This will add a unique date id, name, and open tasks array to each new project title added to the lists array above
function createList(name) {
    return {
        id: Date.now().toString(),
        name: name,
        tasks: [],
    }
}

// THIS IS AN OBJECT. This will add a unique date id, name, and incomplete array to each new task title added to the Tasks list
function createTask(name) {
    return {
        id: Date.now().toString(),
        name: name,
        complete: false,
    }
}
// BELOW NOT WORKING! DELETES THE CHECK IN THE BOX BUT NOT THE WHOLE WORDED TASK!!!
clearCompleteTasksButton.addEventListener('click', () => {
    const selectedList = lists.find(list => list.id === selectedListID)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveAndRender()
})

// This will activate the delete button by creating a new list. New list is a product of a filtered list that doesn't include the selected list item with selectedListID
deleteButton.addEventListener('click', () => {
    lists = lists.filter(list => list.id !== selectedListID);
    selectedListID = null;
    saveAndRender()
})

// This will call the save and render function to save lists data and create new list data once the form is submitted.
function saveAndRender() {
    save();
    render()
}
// This will save newly created project lists to local storage so that items don't disappear after refreshing the page.
function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListID)
}
// This will display tasks and title
function render() {
    renderLists()
    const selectedList = lists.find(list => list.id === selectedListID)
    if (selectedListID == null) {
        listDisplayContainer.style.display = 'none'
    } else {
        listDisplayContainer.style.display = ''
        listTitleElement.innerHTML = selectedList.name
        clearElement(tasksContainer)
        renderTasks(selectedList)

    }
}
// This will display tasks within each project
function renderTasks(selectedList) {
    selectedList.tasks.forEach(task => {
        // The below variable makes it so we don't have to write out each task checkbox in javascript, but rather duplicate a pre-written template in HTML to pass on to the webpage.
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkBox = taskElement.querySelector('input')
        checkBox.id = task.id
        checkBox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
        tasksContainer.appendChild(taskElement)
    })
}

// This will ensure that a newly created project item will remain even when the page is refreshed.
function renderLists() {
    clearElement(listsContainer);
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.className = "list-name flex gap-5 ease-in-out duration-300  group rounded-lg p-3 bg-white hover:shadow-lg hover: ring-slate-900/5 hover:ring-1 hover:cursor-pointer";
        listElement.innerText = list.name;
        if (list.id === selectedListID) {
            listElement.className = 'active-list font-semibold flex gap-5 p-3';

        }
        listsContainer.appendChild(listElement)

    })
}
// This will clear the project list if there are any old lists from beforehand
function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()