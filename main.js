/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/app.js":
/*!****************************!*\
  !*** ./src/Modules/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects.js */ \"./src/Modules/objects.js\");\n\n// For storage when creating new list items - Key:value\nconst LOCAL_STORAGE_LIST_KEY = 'tasks.lists'\nconst LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'tasks.selectedListID'\n\nlet selectedListID = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)\nlet lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []; // This is a storage array OF OBJECTS that asK for an id and a name - this is the list of project titles which will display in the sidebar under 'projects'. Or it will display an empty array.\n\nconst tasksContainer = document.querySelector('[data-tasks]');\nconst listsContainer = document.querySelector('[data-lists]');\nconst newListForm = document.querySelector('[data-new-list-form]');\nconst newListInput = document.querySelector('[data-new-list-input]');\nconst deleteButton = document.querySelector('[data-delete-button]');\nconst listDisplayContainer = document.querySelector('[data-display-container]');\nconst listTitleElement = document.querySelector('[data-list-title]');\nconst clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]')\nconst newTaskForm = document.querySelector('[data-new-task-form]');\nconst newTaskInput = document.querySelector('[data-new-task-input]');\nconst taskTemplate = document.getElementById('task-template');\n\n\n// This will save that the task that is checked when page refreshed\ntasksContainer.addEventListener('click', e => {\n    if (e.target.tagName.toLowerCase() === 'input') {\n        const selectedList = lists.find(list => list.id === selectedListID)\n        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)\n        selectedTask.complete = e.target.checked\n        save()\n    }\n})\n\nlistsContainer.addEventListener('click', e => {\n    if (e.target.tagName.toLowerCase() === 'li') {\n        selectedListID = e.target.dataset.listId\n        saveAndRender()\n    }\n})\n\n// This will create a new task item onto the list\nnewTaskForm.addEventListener('submit', e => {\n    e.preventDefault();\n    const taskName = newTaskInput.value;\n    if (taskName == null || taskName === '') return\n    const task = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(taskName);\n    newTaskInput.value = null;\n    const selectedList = lists.find(list => list.id === selectedListID)\n    selectedList.tasks.push(task)\n    saveAndRender()\n})\n\n// Whenever you submit a title on the project form, this will push the new title into the lists array as an object with a unique date id, name and tasks array\nnewListForm.addEventListener('submit', e => {\n    e.preventDefault();\n    const listName = newListInput.value;\n    if (listName == null || listName === '') return\n    const list = (0,_objects_js__WEBPACK_IMPORTED_MODULE_0__.createList)(listName);\n    newListInput.value = null;\n    lists.push(list);\n    saveAndRender()\n})\n\nclearCompleteTasksButton.addEventListener('click', () => {\n    const selectedList = lists.find(list => list.id === selectedListID)\n    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)\n    saveAndRender()\n})\n\n// This will activate the delete button by creating a new list. New list is a product of a filtered list that doesn't include the selected list item with selectedListID\ndeleteButton.addEventListener('click', () => {\n    lists = lists.filter(list => list.id !== selectedListID);\n    selectedListID = null;\n    saveAndRender()\n})\n\n// This will save newly created project lists and tasks to local storage so that items don't disappear after refreshing the page.\nfunction save() {\n    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))\n    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListID)\n}\n\n// This will call the save and render function to save lists data and create new list data once the form is submitted.\nfunction saveAndRender() {\n    save();\n    render()\n}\n\nfunction render() {\n    renderLists()\n    const selectedList = lists.find(list => list.id === selectedListID)\n    if (selectedListID == null) {\n        listDisplayContainer.style.display = 'none'\n    } else {\n        listDisplayContainer.style.display = ''\n        listTitleElement.innerHTML = selectedList.name\n        clearElement(tasksContainer)\n        renderTasks(selectedList)\n    }\n}\n\n// This will display tasks within each project\nfunction renderTasks(selectedList) {\n    selectedList.tasks.forEach(task => {\n        // The below variable makes it so we don't have to write out each task checkbox in javascript, but rather duplicate a pre-written template in HTML to pass on to the webpage.\n        const taskElement = document.importNode(taskTemplate.content, true)\n        const checkBox = taskElement.querySelector('input')\n        checkBox.id = task.id\n        checkBox.checked = task.complete\n        const label = taskElement.querySelector('label')\n        label.htmlFor = task.id\n        label.append(task.name)\n        tasksContainer.appendChild(taskElement)\n    })\n}\n\n// This will ensure that a newly created project item will remain even when the page is refreshed.\nfunction renderLists() {\n    clearElement(listsContainer);\n    lists.forEach(list => {\n        const listElement = document.createElement('li');\n        listElement.dataset.listId = list.id;\n        listElement.className = \"list-name flex gap-5 ease-in-out duration-300  group rounded-lg p-3 bg-white hover:shadow-lg hover: ring-slate-900/5 hover:ring-1 hover:cursor-pointer\";\n        listElement.innerText = list.name;\n        if (list.id === selectedListID) {\n            listElement.className = 'active-list font-semibold flex gap-5 p-3';\n        }\n        listsContainer.appendChild(listElement)\n    })\n}\n// This will clear the project list if there are any old lists from beforehand\nfunction clearElement(element) {\n    while (element.firstChild) {\n        element.removeChild(element.firstChild)\n    }\n}\n\n\n\n//# sourceURL=webpack://y/./src/Modules/app.js?");

                                /***/
}),

/***/ "./src/Modules/form.js":
/*!*****************************!*\
  !*** ./src/Modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form)\n/* harmony export */ });\n\n//Create Variables, this is for the create projects button\n\nfunction form() {\n\n    const newProjectBtn = document.querySelector(\".newProjectBtn\");\n    const closeProjectBtn = document.querySelector(\".projBtnCancel\");\n    const createProjectBtn = document.querySelector(\".projBtnSubmit\");\n\n    newProjectBtn.addEventListener(\"click\", addProject);\n    closeProjectBtn.addEventListener(\"click\", closeForm);\n    createProjectBtn.addEventListener('click', closeForm)\n\n    function addProject() {\n        document.getElementById(\"popupProject\").style.display = \"block\";\n    }\n    function closeForm() {\n        document.getElementById(\"popupProject\").style.display = \"none\";\n    }\n}\n\n\n\n\n//# sourceURL=webpack://y/./src/Modules/form.js?");

                                /***/
}),

/***/ "./src/Modules/objects.js":
/*!********************************!*\
  !*** ./src/Modules/objects.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createList\": () => (/* binding */ createList),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\n\n\n// THIS IS AN OBJECT. This will add a unique date id, name, and incomplete array to each new task title added to the Tasks list\nfunction createTask(name) {\n    return {\n        id: Date.now().toString(),\n        name: name,\n        complete: false,\n    }\n}\n\n// THIS IS AN OBJECT. This will add a unique date id, name, and open tasks array to each new project title added to the lists array above\nfunction createList(name) {\n    return {\n        id: Date.now().toString(),\n        name: name,\n        tasks: [],\n    }\n}\n\n\n\n\n//# sourceURL=webpack://y/./src/Modules/objects.js?");

                                /***/
}),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                                eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/form.js */ \"./src/Modules/form.js\");\n/* harmony import */ var _Modules_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/app.js */ \"./src/Modules/app.js\");\n\n\n\n(0,_Modules_form_js__WEBPACK_IMPORTED_MODULE_0__.form)()\n;(0,_Modules_app_js__WEBPACK_IMPORTED_MODULE_1__.render)()\n\n\n//# sourceURL=webpack://y/./src/index.js?");

                                /***/
})

                /******/
});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
                        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
                        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
                /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                                        /******/
}
                                /******/
}
                        /******/
};
                /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
                /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                                /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
                        /******/
};
                /******/
})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
        /******/
        /******/
})()
        ;