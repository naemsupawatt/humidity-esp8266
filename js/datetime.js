function formatTimeUnit(unit) {
    return unit.toString().padStart(2, '0');
}

function updateClock() {
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = formatTimeUnit(currentDate.getMonth() + 1);
    var day = formatTimeUnit(currentDate.getDate());
    var hours = formatTimeUnit(currentDate.getHours());
    var minutes = formatTimeUnit(currentDate.getMinutes());
    var seconds = formatTimeUnit(currentDate.getSeconds());
    var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
    var dateElement = document.getElementById('currentDate');
    dateElement.textContent = formattedDate;
}

setInterval(updateClock, 1000);
