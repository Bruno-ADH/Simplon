document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.querySelector("#taskForm");
    const taskInput = document.querySelector("#taskInput");
    const columns = document.querySelectorAll(".column");
    const trashIcon = document.querySelector("#trash");

    let lastParent = null;

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (taskInput.value.trim() === "") return;

        const task = document.createElement("div");
        task.classList.add("task");
        task.textContent = taskInput.value;
        task.draggable = true;

        task.style.transform = "translateY(-50px)";
        task.style.opacity = "0";
        setTimeout(() => {
            task.style.transform = "translateY(0)";
            task.style.opacity = "1";
        }, 50);

        addDragEvents(task);
        document.querySelector("#todo").appendChild(task);
        taskInput.value = "";
    });

    function addDragEvents(task) {
        task.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", task.textContent);
            task.classList.add("dragging");

            lastParent = task.closest(".column");
            lastParent.style.transform = "rotate(3deg)";
        });

        task.addEventListener("dragend", () => {
            task.classList.remove("dragging");

            if (lastParent) {
                lastParent.style.transform = "rotate(0)";
            }
        });
    }

    columns.forEach(column => {
        column.addEventListener("dragover", (e) => {
            e.preventDefault();
            column.classList.add("drag-over");
        });

        column.addEventListener("dragleave", () => {
            column.classList.remove("drag-over");
        });

        column.addEventListener("drop", (e) => {
            e.preventDefault();
            column.classList.remove("drag-over");

            const draggedTask = document.querySelector(".dragging");
            if (draggedTask) {
                column.appendChild(draggedTask);
            }

            if (lastParent) {
                lastParent.style.transform = "rotate(0)";
            }
        });
    });

    trashIcon.addEventListener("click", () => {
        const doneTasks = document.querySelectorAll("#done .task");
        doneTasks.forEach(task => {
            task.classList.add("removed");
            setTimeout(() => {
                task.remove();
            }, 400);
        });
    });
});
