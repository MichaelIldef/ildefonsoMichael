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
                else if(link.getAttribute('href') !== currentPage) {
                    link.classList.add('links');
                }

            });
            

        })
        .catch(error => console.error('Error loading navbar:', error));
});