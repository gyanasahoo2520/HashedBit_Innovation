function swapTheme() {
    const appDiv = document.getElementById('app');
    const button = document.getElementById('swap');

    if (appDiv.classList.contains('day')) {
        appDiv.className = 'night';
        button.className = 'button_night';
    } else {
        appDiv.className = 'day';
        button.className = 'button_day';
    }
}
