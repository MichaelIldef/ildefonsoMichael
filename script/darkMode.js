// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('darkModeToggle');
    const darkMode = localStorage.getItem('dark-mode');

    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleCheckbox.checked = true;
        updateNavbarStyles(true);
    }

    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
            updateNavbarStyles(true);
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
            updateNavbarStyles(false);
        }
    });
});
