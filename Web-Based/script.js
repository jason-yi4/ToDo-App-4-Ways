// submission form from HTML
const form = document.getElementById("form");

// gets the new task input into the form, as a string
let task = document.getElementById("task").value;



/* setting tasks to an empty array if there is no existing
 * to-do list data.
 */

// getting data from localStorage
let tasks = localStorage.getItem("taskList");

// checks if the localStorage element exists
if (tasks) {

    tasks = JSON.parse(tasks);

    if (!Array.isArray(tasks)) {

        // forces array instantiation for an invalid value
        tasks = [];

        console.log("localStorage JSON was not an Array. List of tasks reset to empty.");
    }
} else {
    tasks = [];
}



/* creating dynamic HTML element to constantly
 * display the current working to-do list
 * based on the localStorage JSON.
 */






/* event listening for submission of form.
 * executes the storeTask() method which stores the newly
 * added task into the localStorage JSON.
 */

form.addEventListener("submit", storeTask());


function storeTask() {
    tasks.push(task)
    console.log(`"${task}" added to list of tasks.`);

    localStorage.setItem("taskList", JSON.stringify(tasks));
}