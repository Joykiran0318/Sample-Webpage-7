const calendarDays = document.getElementById('calendarDays');
const monthYear = document.getElementById('monthYear');

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let date = new Date();

function renderCalendar() {
    const year = date.getFullYear();
    const month = date.getMonth();

    // Set header
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    monthYear.innerText = `${monthNames[month]} ${year}`;

    // Clear previous days
    calendarDays.innerHTML = '';

    // Add day headers
    for (let d of dayNames) {
        const day = document.createElement('div');
        day.classList.add('day', 'header');
        day.innerText = d;
        calendarDays.appendChild(day);
    }

    // Get first day of month and number of days
    const firstDayIndex = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    // Fill empty slots before first day
    for (let i = 0; i < firstDayIndex; i++) {
        const empty = document.createElement('div');
        empty.classList.add('day');
        calendarDays.appendChild(empty);
    }

    // Add actual days
    for (let i = 1; i <= lastDate; i++) {
        const day = document.createElement('div');
        day.classList.add('day');
        day.innerText = i;

        if (
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            day.classList.add('today');
        }

        calendarDays.appendChild(day);
    }
}

function prevMonth() {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}

renderCalendar();