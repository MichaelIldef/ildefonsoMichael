document.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navBar').innerHTML = data;
            
            // Disable link to the current page
            const currentPage = window.location.pathname.split("/").pop();
            const navLinks = document.querySelectorAll('#nav-links a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('current-page');
                    link.setAttribute('aria-current', 'page');
                    link.removeAttribute('href');
                }
            });

            // Add event listener for the toggle button
            const navToggle = document.getElementById('nav-toggle');
            navToggle.addEventListener('click', () => {
                document.getElementById('nav-links').classList.toggle('show');
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
});