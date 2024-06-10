document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('darkModeToggle');
    const darkMode = localStorage.getItem('dark-mode');

    function applyDarkModeStyles() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const navbars = document.querySelectorAll('.navbar');
        console.log('Applying dark mode styles:', isDarkMode);
        navbars.forEach(navbar => {
            if (isDarkMode) {
                navbar.style.backgroundColor = '#000000';
                navbar.style.color = 'white';
                console.log('Dark mode on');
            } else {
                navbar.style.backgroundColor = '#faebd7';
                navbar.style.color = 'black';
                console.log('Dark mode off');
            }
        });
    }
    function applyDarkModeEffects() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const navbars = document.querySelectorAll('.navbar');
        console.log('Applying dark mode styles:', isDarkMode);
        navbars.forEach(navbar => {
            if (isDarkMode) {
                navbar.classList.add("darkMode");
            } else {
                navbar.classList.remove("darkMode");
            }
        });
    }

    // Initial dark mode setup
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleCheckbox.checked = true;
        applyDarkModeStyles();
    }



    // Toggle dark mode and update styles
    toggleCheckbox.addEventListener('change', () => {
        if (toggleCheckbox.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
        applyDarkModeStyles();
    });
});
