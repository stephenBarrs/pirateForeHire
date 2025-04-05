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
            // Don't prevent default so the mailto: action can work
            
            // Collect form data for email body
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Format email body
            const emailBody = `Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}`;
            
            // Set the subject and body for the mailto link
            contactForm.action = `mailto:stephen.barrs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            
            // Show confirmation
            alert('Thank you for your message! Your email client will open to send this message to Captain Z.');
            
            // Form will submit naturally to the mailto: link
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
