
document.addEventListener('DOMContentLoaded', () => {
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
                }
                
            });
            applyDarkModeStyles()
            })
            .catch(error => console.error('Error fetching navbar:', error));
    }
    fetchNavbar();
});

function applyDarkModeStyles() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const navbars = document.querySelectorAll('.navbar');
    navbar.style.backgroundColor = 'transparent';
    
    console.log('Applying dark mode styles:', isDarkMode);
    navbars.forEach(navbar => {
        if (isDarkMode) {
            navbar.style.color = 'white';
            console.log('Dark mode on');
        } else {
            navbar.style.color = 'black';
            console.log('Dark mode off');
        }
    });
}