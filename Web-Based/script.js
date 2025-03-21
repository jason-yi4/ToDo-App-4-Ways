// submission form from HTML
const form = document.getElementById("taskForm");

// CLEAR TASKS button from HTML
const clr = document.getElementById("clear");

// unordered list of tasks from HTML
let taskList = document.getElementById('taskList');

// creates an array of tasks based on the localStorage JSON.
let tasks = JSON.parse(localStorage.getItem('taskList')) || [];



// renders all tasks on screen
window.addEventListener("DOMContentLoaded", function() {
    render()
});


/* event listener for form submissions */
form.addEventListener("submit", function(event) {

    // prevents page load
    event.preventDefault();

    // getting value of task
    let taskInput = document.getElementById("task");
    let task = {
        text: taskInput.value.trim(),
        completedAt: null // used for sorting completed tasks
    };

    // pushes task to array if the task text is a non-empty string literal
    if (task.text) {
        tasks.push(task);
        console.log(`"${task.text}" added to the list of tasks.`);
        localStorage.setItem("taskList", JSON.stringify(tasks));
        taskInput.value = ""; // reset value of form submission box
    } else {
        console.log("No value for task.");
    }


    render();
});

/* event listener for checkbox ticks on to-do list */
taskList.addEventListener("change", function(event) {

    // event listener is triggered by any change, this if-statement runs only for checkbox changes
    if (event.target.type === "checkbox") {

        // creates new list item from the list element that was toggled
        let listItem = event.target.closest("li");
        let taskText = listItem.textContent.replace(/\s+/g, '');

        // find the task corresponding to the clicked checkbox
        let task = tasks.find(t => t.text.replace(/\s+/g, '') === taskText);

        // verifies if checkbox was checked
        if (event.target.checked) {
            listItem.style.textDecoration = "line-through";
            listItem.style.opacity = "0.5";
            
            task.completedAt = Date.now();
            

            // debug log
            console.log(`The "${listItem.textContent}" task was checked.`);
        } else {
            listItem.style.textDecoration = "none";
            listItem.style.opacity = "1";

            task.completedAt = null;

            // debug log
            console.log(`The "${listItem.textContent}" task was unchecked.`);
        }

        // modified sort function
        // unchecked items stay at the top
        // checked items are moved to the bottom
        tasks.sort((a, b) => {
            if (!a.completedAt && b.completedAt) return -1;
            if (a.completedAt && !b.completedAt) return 1;
    
            if (a.completedAt && b.completedAt) return a.completedAt - b.completedAt;
        });

        localStorage.setItem("taskList", JSON.stringify(tasks));
        render();
    }
});


/* event listener to clear all tasks */
clr.addEventListener("click", function() {
    
    // debug log
    console.log(`${clr.textContent} button was clicked.`);

    // clears web page memory
    localStorage.clear();

    // clears local memory of tasks
    tasks = [];

    // refreshes page
    render();
});


/* function updates the state of the page */
function render() {

    // clears current list of tasks
    taskList.innerHTML = '';

    // dynamically creates HTML elements for the taskList HTML
    tasks.forEach(function(task) {
        
        // creating a list item to append to the taskList
        let listItem = document.createElement("li");

        // creating the checkbox
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // creating text node
        let textNode = document.createTextNode(task.text);

        // checkbox persistance after sorting
        if (task.completedAt) {
            checkbox.checked = true;
            listItem.style.textDecoration = "line-through";
            listItem.style.opacity = 0.5;
        }

        // appending checkbox and text
        listItem.appendChild(checkbox);
        listItem.appendChild(textNode);

        // appending to the taskList
        taskList.appendChild(listItem);

    });
}