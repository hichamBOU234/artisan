
// Wait for DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        // Toggle active class on the clicked item
        item.classList.toggle('active');
        
        // Close other items when one is opened
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
      });
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (!name || !email || !message) {
          alert('Please fill in all fields');
          return;
        }
        
        // Show success message (in production, you'd handle this with a proper API call)
        alert('Thank you for your message! We will get back to you shortly.');
        
        // Reset the form
        contactForm.reset();
      });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Video placeholder click handler
    const videoPlaceholder = document.querySelector('.video-placeholder');
    
    if (videoPlaceholder) {
      videoPlaceholder.addEventListener('click', function() {
        // Replace with actual video embed when available
        alert('Video coming soon!');
      });
    }
    
    // Handle CTA button tracking (in production, you'd use proper analytics)
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
      button.addEventListener('click', function() {
        console.log('CTA button clicked');
        // In production: track this conversion event
      });
    });
    
    // Add sticky header on scroll
    const header = document.querySelector('header');
    let scrollPosition = 0;
    
    window.addEventListener('scroll', function() {
      scrollPosition = window.scrollY;
      
      if (scrollPosition > 100) {
        header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
    });
  });
  