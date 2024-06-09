// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('darkModeToggle');
    const darkMode = localStorage.getItem('dark-mode');

    // Function to fetch and update the navbar
    function fetchNavbar() {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar').innerHTML = data;
            const currentPage = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll('#nav-links a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('current-page');
                    link.classList.add('navbar');
                    
                    link.setAttribute('aria-current', 'page');
                    link.removeAttribute('href');
                }
                else if(link.getAttribute('href') !== currentPage) {
                    link.classList.add('links');
                    link.classList.add('navbar');
                    console.log(1)
                }
            applyDarkModeStyles();
                
            });
            
            })
            .catch(error => console.error('Error fetching navbar:', error));
    }

    // Function to apply dark mode styles
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
    

    // Initial dark mode setup
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleCheckbox.checked = true;
        applyDarkModeStyles();
    }

    // Fetch the navbar initially
    fetchNavbar();

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
