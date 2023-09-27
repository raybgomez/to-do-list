

// THIS IS AN OBJECT. This will add a unique date id, name, and incomplete array to each new task title added to the Tasks list
export function createTask(name) {
    return {
        id: Date.now().toString(),
        name: name,
        complete: false,
    }
}

// THIS IS AN OBJECT. This will add a unique date id, name, and open tasks array to each new project title added to the lists array above
export function createList(name) {
    return {
        id: Date.now().toString(),
        name: name,
        tasks: [],
    }
}


