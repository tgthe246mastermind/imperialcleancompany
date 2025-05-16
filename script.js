document.addEventListener('DOMContentLoaded', function() {
<<<<<<< HEAD
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // FAQ Accordions
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonialSlider && testimonials.length > 0) {
        let currentIndex = 0;
        
        // Set initial position
        updateSliderPosition();
        
        // Next button click
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % testimonials.length;
                updateSliderPosition();
            });
        }
        
        // Previous button click
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                updateSliderPosition();
            });
        }
        
        // Auto slide (every 5 seconds)
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonials.length;
            updateSliderPosition();
        }, 5000);
        
        function updateSliderPosition() {
            const translateX = -currentIndex * 100;
            testimonialSlider.style.transform = `translateX(${translateX}%)`;
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
=======
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
        if (navMenu.classList.contains('show')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-menu') && !event.target.closest('.menu-toggle')) {
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                document.body.style.overflow = '';
            }
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                document.body.style.overflow = '';
            }

            // Handle booking modal separately
            if (this.getAttribute('href') === '#book') {
                const bookingModal = document.querySelector('.booking-modal');
                bookingModal.classList.add('show');
                return;
            }

>>>>>>> 5be4906e6e0e6d85635b31d192c7c3747257b00b
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
<<<<<<< HEAD
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
=======
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
>>>>>>> 5be4906e6e0e6d85635b31d192c7c3747257b00b
                    behavior: 'smooth'
                });
            }
        });
    });
<<<<<<< HEAD
    
    // Form submission (prevent default and show success message)
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For demo purposes, just show a success message
            
            const successMessage = document.createElement('p');
            successMessage.textContent = 'Thank you! Your submission has been received.';
            successMessage.style.color = 'var(--primary-color)';
            successMessage.style.marginTop = '10px';
            
            // Remove any existing success messages
            const existingMessage = form.querySelector('.success-message');
            if (existingMessage) {
                form.removeChild(existingMessage);
            }
            
            successMessage.classList.add('success-message');
            form.appendChild(successMessage);
            
            // Reset form
            form.reset();
            
            // Remove success message after 3 seconds
            setTimeout(() => {
                form.removeChild(successMessage);
            }, 3000);
        });
    });
    
    // Add scroll animation for elements
    const revealElements = document.querySelectorAll('.service-card, .feature, .area, .testimonial');
    
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.8;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('revealed');
=======

    // Booking modal functionality
    const bookLinks = document.querySelectorAll('a[href="#book"]');
    const bookingModal = document.querySelector('.booking-modal');
    const closeModal = document.querySelector('.close-modal');
    
    bookLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            bookingModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        bookingModal.classList.remove('show');
        document.body.style.overflow = '';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === bookingModal) {
            bookingModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    // Simple testimonial slider
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');
            // In a real implementation, this would slide to the next testimonial
        });
    });

    // Form submission handling (prevent default for demo)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real implementation, this would submit the form data
            alert('Thank you for your submission! This is a demo site, so no data has been sent.');
            form.reset();
            
            // Close modal if it's the booking form
            if (form.id === 'bookingForm') {
                bookingModal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });

    // Add active class to navigation based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        let scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href="#' + sectionId + '"]')?.classList.add('active');
            } else {
                document.querySelector('.nav-menu a[href="#' + sectionId + '"]')?.classList.remove('active');
>>>>>>> 5be4906e6e0e6d85635b31d192c7c3747257b00b
            }
        });
    }
    
<<<<<<< HEAD
    // Add CSS for the reveal animation
    const style = document.createElement('style');
    style.textContent = `
        .service-card, .feature, .area, .testimonial {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .revealed {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // Check on load and scroll
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
});

document.getElementById('goToImage').addEventListener('click', function() {
const imgsection = document.getElementById('image-section');
imgsection.scrollIntoView({ behavior: 'smooth' });

});
=======
    window.addEventListener('scroll', highlightNavigation);
});

>>>>>>> 5be4906e6e0e6d85635b31d192c7c3747257b00b
