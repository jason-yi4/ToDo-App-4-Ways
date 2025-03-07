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

    // pushes task to array if the task is a non-empty string literal
    if (task) {
        tasks.push(task);
        console.log(`"${task}" added to the list of tasks.`);
        localStorage.setItem("taskList", JSON.stringify(tasks));
        taskInput.value = ""; // reset value of form submission box
    } else {
        console.log("No value for task.");
    }


    render();
});


/* event listener for checkbox ticks on to-do list */




/* function updates the state of the page */
function render() {
    // clears current list of tasks
    taskList.innerHTML = '';

    // dynamically creates HTML elements for the taskList HTML
    tasks.forEach(function(task) {
        
        // creating a list item to append to the taskList
        let listItem = document.createElement("li");

        // creating the task containing a checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // creating text node
        let textNode = document.createTextNode(task);

        // appending checkbox and text
        listItem.appendChild(checkbox);
        listItem.appendChild(textNode);

        // appending to the taskList
        taskList.appendChild(listItem);

    });
}