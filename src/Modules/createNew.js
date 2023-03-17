
function addTask() {
    let createNewTodo = document.querySelector('.taskBody');

    const newTask = document.createElement('div');
    newTask.className = 'task';
    const newTitle = document.createElement("input"); //short paragraph input, required.
    newTitle.className = 'title';
    const newDetails = document.createElement("input");//short paragraph input
    newDetails.className = 'details'; //Optional with details sample description input
    const newDate = document.createElement("button"); //Figure out how to use date-fns from external library npm, make button say "Due date" and make it optional.
    newDate.className = 'newDate';
    const createCancel = document.createElement("div");
    createCancel.className = 'createCancel';
    const create = document.createElement('button');//required or
    const cancel = document.createElement('button');//required

    createNewTodo.appendChild(newTask);
    newTask.append(newTitle, newDetails, newDate, createCancel);
    createCancel.append(create, cancel)

}

function newProject() {
    let createNewProject = document.querySelector('.projectBody');

    const newProject = document.createElement("div");
    newProject.className = 'project';
    const newTitle = document.createElement("input"); //short paragraph input, required.
    newTitle.className = 'title'; //This is a repeat code from above, try to shorten this!

    const createCancel = document.createElement("div"); //REPEAT CODE, SHORTEN!
    createCancel.className = 'createCancel';
    const create = document.createElement('button');//required or
    const cancel = document.createElement('button');//required

    createNewProject.appendChild(newProject);
    newProject.append(newTitle, createCancel);
    createCancel.append(create, cancel)

    //Turn this into a factory function

}