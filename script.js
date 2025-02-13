
// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector("#task-form");
//     const taskInput = document.querySelector("#task");
//     const tbody = document.querySelector("tbody");

//     let tasks = [];

//     form.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const taskText = taskInput.value.trim();
//         if (!taskText) return;

//         tasks.push(taskText);
//         renderTasks();
//         taskInput.value = "";
//     });

//     function renderTasks() {
//         tbody.innerHTML = "";
//         tasks.forEach((task, index) => {
//             const tr = document.createElement("tr");

//             tr.innerHTML = `
//                 <td>${index + 1}</td>
//                 <td>${task}</td>
//                 <td class="action-buttons">
//                     <a href="#task-form"><button class="edit-btn" onclick="editTask(${index})"><i class="fa-solid fa-pen-to-square"></i></button></a>
//                     <button class="delete-btn" onclick="deleteTask(${index})"><i class="fa-solid fa-trash-can"></i></button>
//                 </td>
//             `;
//             tbody.appendChild(tr);
//         });
//     }

//     window.editTask = (index) => {
//         const newTask = prompt("Modifier la tâche :", tasks[index]);
//         if (newTask) {
//             tasks[index] = newTask.trim();
//             renderTasks();
//         }
//     };

//     window.deleteTask = (index) => {
//         tasks.splice(index, 1);
//         renderTasks();
//     };

//     renderTasks();
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.querySelector("#task-form");
//     const taskInput = document.querySelector("#task");
//     const tbody = document.querySelector("tbody");

//     let tasks = [];

//     form.addEventListener("submit", (e) => {
//         e.preventDefault()
//         const taskText = taskInput.value.trim();
//         if (!taskText) return;
//         tasks.push(taskText);
//         renderTasks();
//         taskInput.value = "";
//     })

//     function renderTasks() {
//         tbody.innerHTML = "";
//         tasks.forEach((task, index) => {
//             const tr = document.createElement("tr");

//             tr.innerHTML = `
//                 <td>${index + 1}</td>
//                 <td>${task}</td>
//             `;
//             tbody.appendChild(tr);
//         });
//     }
// })

function displayObjectEntries(data={}) {
    return Object.entries(data);
}

const datas = {
    "key1": "Value1", 
    "Key2": "Value2", 
    "Key3": "Value3", 
    "Key4": "Value4"
}
console.log(displayObjectEntries(datas));

