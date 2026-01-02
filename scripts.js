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
    
    if (galleryLinks.length) {
        // Build lightbox elements once
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close image viewer">&times;</button>
                <img class="lightbox-image" src="" alt="">
                <p class="lightbox-caption"></p>
            </div>
        `;
        document.body.appendChild(lightbox);

        const lightboxImage = lightbox.querySelector('.lightbox-image');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const closeButton = lightbox.querySelector('.lightbox-close');

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            lightboxImage.src = '';
            lightboxImage.alt = '';
            lightboxCaption.textContent = '';
        };

        closeButton.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });

        galleryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                const img = this.querySelector('img');
                lightboxImage.src = this.href;
                lightboxImage.alt = img ? img.alt : '';
                lightboxCaption.textContent = img ? img.alt : '';
                lightbox.classList.add('active');
            });
        });
    }
});
