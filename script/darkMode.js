document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('darkModeToggle');
    const darkMode = localStorage.getItem('dark-mode');

    function applyDarkMode() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        const navbars = document.querySelectorAll('.navbar');
        const contacts = document.querySelectorAll('.contact');
        const project = document.querySelectorAll('.projectLinks');

        navbars.forEach(navbar => {
            navbar.style.backgroundColor = 'transparent';
            if (isDarkMode) {
                navbar.style.color = 'white';
                navbar.classList.add("darkMode");
            } else {
                navbar.style.color = 'black';
                navbar.classList.remove("darkMode");
            }
        });

        contacts.forEach(contact => {
            contact.style.color = isDarkMode ? 'white' : 'black';
        });
        project.forEach(projectLinks => {
            projectLinks.style.color = isDarkMode ? 'white' : 'black';
        })

        console.log(`Dark mode ${isDarkMode ? 'enabled' : 'disabled'}`);
    }

    // Initial dark mode setup
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleCheckbox.checked = true;
        applyDarkMode();
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
        applyDarkMode();
    });
});
