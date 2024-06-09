
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
            
            })
            .catch(error => console.error('Error fetching navbar:', error));
    }
    fetchNavbar();
});