// Pastor Melusi - International Breakthrough Ministries
// Main JavaScript File

// ========================================
// CONTENT PROTECTION
// ========================================

// Disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Content is protected!');
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    alert('Content is protected!');
});

// Disable keyboard shortcuts for copying
document.addEventListener('keydown', function(e) {
    // Disable Ctrl+C, Ctrl+U, Ctrl+S, F12
    if (e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's')) {
        e.preventDefault();
        alert('Content is protected!');
    }
    
    // Disable F12 (Developer Tools)
    if (e.key === 'F12') {
        e.preventDefault();
        alert('Content is protected!');
    }
    
    // Disable Ctrl+Shift+I (Inspect)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        alert('Content is protected!');
    }
});

// ========================================
// MOBILE MENU
// ========================================

const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when link is clicked
if (navLinks) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// FORM VALIDATION (for contact forms)
// ========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;
        
        // Validate name
        if (name && name.value.trim() === '') {
            alert('Please enter your name');
            name.focus();
            isValid = false;
            return;
        }
        
        // Validate email
        if (email && email.value.trim() === '') {
            alert('Please enter your email');
            email.focus();
            isValid = false;
            return;
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email.value)) {
            alert('Please enter a valid email address');
            email.focus();
            isValid = false;
            return;
        }
        
        // Validate message
        if (message && message.value.trim() === '') {
            alert('Please enter your message');
            message.focus();
            isValid = false;
            return;
        }
        
        if (isValid) {
            // Form is valid - you can submit it here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        }
    });
}

// ========================================
// IMAGE LAZY LOADING (optional enhancement)
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// ACTIVE PAGE HIGHLIGHT
// ========================================

// Highlight current page in navigation
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.style.color = 'var(--gold)';
    }
});

console.log('Pastor Melusi Ministry Website - All scripts loaded successfully! 🙏');
