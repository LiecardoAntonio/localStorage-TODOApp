//get HTML element
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById('date-input');
const descriptionInput = document.getElementById('description-input');


const taskData = [];
let currentTask = {};

openTaskFormBtn.addEventListener('click', () => {taskForm.classList.toggle("hidden")});
closeTaskFormBtn.addEventListener('click', () => {confirmCloseDialog.showModal()}); //This will display a modal with the Discard and Cancel buttons when the cancel button is clicked.
cancelBtn.addEventListener('click', ()=>confirmCloseDialog.close()); ////If the user clicks the Cancel button, you want to cancel the process and close the modal so the user can continue editing.

discardBtn.addEventListener('click', () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle('hidden');
}) //If the user clicks the Discard button, you want to close the modal showing the Cancel and Discard buttons, then hide the form modal.

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
})





