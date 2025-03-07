// submission form from HTML
const form = document.getElementById("taskForm");

let taskList = document.getElementById('taskList');

// creates an array of tasks based on the localStorage JSON.
let tasks = JSON.parse(localStorage.getItem('taskList')) || [];



// renders all tasks on screen
window.addEventListener("DOMContentLoaded", function() {
    render()
});


// event listener for form submissions
form.addEventListener("submit", function(event) {

    // prevents page load
    event.preventDefault();

    // getting value of task
    let taskInput = document.getElementById("task");
    let task = taskInput.value.trim();

    // pushes task to array
    tasks.push(task);
    localStorage.setItem("taskList", JSON.stringify(tasks));
    taskInput.value = ""; // reset value of form submission box
    render();
});


// function updates the state of the page
function render() {
    // clears current list of tasks
    taskList.innerHTML = '';

    // dynamically creates HTML elements for the taskList HTML
    tasks.forEach(function(task) {
        let listItem = document.createElement("li");
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}