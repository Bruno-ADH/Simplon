document.addEventListener("DOMContentLoaded", () => {
    const flipContainer = document.querySelector(".flip-container");
    const monthYear = document.querySelector("#month-year");
    const daysGrid = document.querySelector(".days-grid");
    const prevMonthBtn = document.querySelector("#prev-month");
    const nextMonthBtn = document.querySelector("#next-month");
    const modal = document.querySelector("#event-modal");
    const selectedDateText = document.querySelector("#selected-date");
    const eventList = document.querySelector("#event-list");
    const eventText = document.querySelector("#event-text");
    const addEventBtn = document.querySelector("#add-event");
    const closeModalBtn = document.querySelector("#close-modal");

    const events = JSON.parse(localStorage.getItem("events")) || {}
    let eventColors = {};
    let selectedDate
    let currentDate = new Date();

    function getRandomColor() {
        const hue = Math.floor(Math.random() * 360);
        return `hsl(${hue}, 70%, 60%)`;
    }
    

    function generateCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        monthYear.textContent = currentDate.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

        daysGrid.innerHTML = "";

        for (let i = 0; i < firstDay; i++) {
            let emptyCell = document.createElement("div");
            daysGrid.appendChild(emptyCell)
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement("div");
            dayDiv.classList.add("day")
            dayDiv.textContent = day
            dayDiv.dataset.date = `${year}-${month + 1}-${day}`

            if (events[dayDiv.dataset.date] && events[dayDiv.dataset.date].length > 0) {
                if (!eventColors[dayDiv.dataset.date]) {
                    eventColors[dayDiv.dataset.date] = getRandomColor();
                }
                dayDiv.style.backgroundColor = eventColors[dayDiv.dataset.date];
                dayDiv.style.color = "white";
            }

            dayDiv.addEventListener("click", () => openModal(dayDiv.dataset.date))
            daysGrid.appendChild(dayDiv)
        }
    }

    function openModal(date) {
        selectedDate = date;
        selectedDateText.textContent = selectedDate;
        eventList.innerHTML = "";
        if (events[selectedDate]) {
            events[selectedDate].forEach((event, index) => {
                const li = document.createElement("li");
                li.textContent = event;

                const deleteBtn = document.createElement("button");
                deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
                deleteBtn.classList.add("delete-event");
                deleteBtn.addEventListener("click", () => deleteEvent(index));

                li.appendChild(deleteBtn);
                eventList.appendChild(li);
            });
        }
        // modal.classList.remove("none");
        flipContainer.classList.add("flipped");
    }

    function addEvent() {
        const text = eventText.value.trim();
        if (text) {
            if (!events[selectedDate]) {
                events[selectedDate] = [];
            }
            events[selectedDate].push(text);
            localStorage.setItem("events", JSON.stringify(events));
            eventText.value = "";
            openModal(selectedDate);
        }
        // modal.classList.add("none");
        generateCalendar()
    }

    function deleteEvent(index) {
        events[selectedDate].splice(index, 1);
        if (events[selectedDate].length === 0) {
            delete events[selectedDate];
        }
        localStorage.setItem("events", JSON.stringify(events));
        openModal(selectedDate);
    }

    function changeMonth(offset) {
        console.log("eeeeee");
        
        currentDate.setMonth(currentDate.getMonth() + offset);
        generateCalendar();
    }

    prevMonthBtn.addEventListener("click", () => changeMonth(-1));
    nextMonthBtn.addEventListener("click", () => changeMonth(1));
    addEventBtn.addEventListener("click", addEvent)
    closeModalBtn.addEventListener("click", () => flipContainer.classList.remove("flipped"))
    generateCalendar()
});