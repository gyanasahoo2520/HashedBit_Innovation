// Change color of the text
document.getElementById('colorchange').addEventListener('click', function () {
    const colorInput = document.getElementById('colorbox').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.color = colorInput;
});

// Change font size of the text
document.getElementById('fontsize').addEventListener('input', function () {
    const fontSize = document.getElementById('fontsize').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontSize = fontSize + 'px';
});

// Toggle italics
document.getElementById('italic').addEventListener('click', function () {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontStyle = textContainer.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

// Toggle underline
document.getElementById('underline').addEventListener('click', function () {
    const textContainer = document.getElementById('text-container');
    textContainer.style.textDecoration = textContainer.style.textDecoration === 'underline' ? 'none' : 'underline';
});

// Toggle bold
document.getElementById('bold').addEventListener('click', function () {
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontWeight = textContainer.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

// Change font family based on dropdown selection
document.getElementById('list').addEventListener('change', function () {
    const selectedFont = document.getElementById('list').value;
    const textContainer = document.getElementById('text-container');
    textContainer.style.fontFamily = selectedFont;
});

// Get CSS properties and display them
document.getElementById('getstyle').addEventListener('click', function () {
    const textContainer = document.getElementById('text-container');
    const computedStyles = window.getComputedStyle(textContainer);

    // Get the relevant CSS properties
    const cssProps = {
        color: computedStyles.color,
        'font-size': computedStyles.fontSize,
        'font-family': computedStyles.fontFamily,
        'text-decoration': computedStyles.textDecoration,
        'font-style': computedStyles.fontStyle,
        'font-weight': computedStyles.fontWeight,
    };

    // Format the CSS properties as a string
    const cssText = Object.entries(cssProps)
        .map(([key, value]) => `${key}: ${value};`)
        .join(' ');

    // Display the CSS properties
    document.getElementById('css-props').textContent = cssText;
});
