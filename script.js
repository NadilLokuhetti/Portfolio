// Dynamic copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });
});

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
    }
});

// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id], main[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.style.color = '';
                if (link.getAttribute('href') === '#' + entry.target.id) {
                    link.style.color = '#1a6fdb';
                    link.style.fontWeight = '600';
                } else {
                    link.style.fontWeight = '';
                }
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));
