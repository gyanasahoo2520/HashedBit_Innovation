function toggleVisibility() {
    const paragraph = document.getElementById('useless-paragraph');

    // Check the current display style and toggle it
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block'; // Make it visible
    } else {
        paragraph.style.display = 'none'; // Hide it
    }
}
