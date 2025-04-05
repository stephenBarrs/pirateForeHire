document.addEventListener('DOMContentLoaded', function() {
    // Toggle navigation menu for mobile
    const toggleNav = document.querySelector('.toggle-nav');
    const navMenu = document.querySelector('.nav-menu');
    
    if (toggleNav) {
        toggleNav.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server
            // For this example, we'll just show an alert
            alert('Thank you for your message! Captain Z will contact you soon.');
            contactForm.reset();
        });
    }
    
    // Image gallery lightbox functionality
    const galleryLinks = document.querySelectorAll('.gallery-link');
    
    galleryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would show a lightbox
            // For this example, we'll just open the image in a new tab
            window.open(this.href, '_blank');
        });
    });
});
