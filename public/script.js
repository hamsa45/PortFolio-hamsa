// Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navActions.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Smooth Scrolling for Navigation Links
    const navLinksList = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinksList.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                navLinksList.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    navActions.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinksList.forEach(link => link.classList.remove('active'));
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Typing Effect for Hero Name
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Initialize typing effect when hero section is visible
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const originalText = heroName.textContent;
                    typeWriter(heroName, originalText, 150);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(heroName);
    }
    
    // Animate Stats on Scroll
    const statCards = document.querySelectorAll('.stat-card h3');
    
    function animateStats() {
        statCards.forEach(stat => {
            const target = parseInt(stat.textContent);
            const increment = target / 50;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                }
            }, 30);
        });
    }
    
    // Trigger stats animation when stats section is visible
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        });
        
        statsObserver.observe(statsSection);
    }
    
    // Project Card Hover Effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Skill Item Hover Effects
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });
    
    // CTA Card Click Handlers
    const ctaCards = document.querySelectorAll('.cta-card');
    
    ctaCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add demo links functionality
            if (this.querySelector('h3').textContent.includes('Demo Links')) {
                alert('Demo links feature coming soon! This would allow you to add live demo links to your projects.');
            }
            
            // Enable private GitHub contributions functionality
            if (this.querySelector('h3').textContent.includes('Private Github')) {
                alert('Private GitHub contributions feature coming soon! This would help showcase your private repository contributions.');
            }
        });
    });
    
    // View Project Details Button Handlers
    const viewProjectButtons = document.querySelectorAll('.btn-view-project');
    
    viewProjectButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectTitle = this.closest('.project-card').querySelector('.project-title').textContent;
            alert(`Detailed view for ${projectTitle} coming soon! This would show a comprehensive project overview with screenshots, code snippets, and live demo.`);
        });
    });
    
    // Share Button Functionality
    const shareButton = document.querySelector('.btn-share');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: 'Abhilash Hamsa - Portfolio',
                    text: 'Check out my portfolio showcasing my projects and skills!',
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    alert('Portfolio URL copied to clipboard!');
                });
            }
        });
    }
    
    // Preview Button Functionality
    const previewButton = document.querySelector('.btn-preview');
    if (previewButton) {
        previewButton.addEventListener('click', function() {
            // Toggle preview mode (could be used for different view modes)
            document.body.classList.toggle('preview-mode');
            const isPreviewMode = document.body.classList.contains('preview-mode');
            this.innerHTML = isPreviewMode ? 
                '<i class="fas fa-eye-slash"></i> Exit Preview' : 
                '<i class="fas fa-eye"></i> Preview';
        });
    }
    
    // Generate GitHub Contribution Squares
    function generateContributionSquares() {
        const contributionSquares = document.querySelector('.contribution-squares');
        if (!contributionSquares) return;
        
        // Generate 365 squares (one year)
        for (let i = 0; i < 365; i++) {
            const square = document.createElement('div');
            square.style.width = '12px';
            square.style.height = '12px';
            square.style.borderRadius = '2px';
            square.style.backgroundColor = '#ebedf0';
            
            // Randomly assign contribution levels
            const random = Math.random();
            if (random > 0.8) {
                square.style.backgroundColor = '#216e39'; // High contribution
            } else if (random > 0.6) {
                square.style.backgroundColor = '#9be9a8'; // Medium contribution
            } else if (random > 0.4) {
                square.style.backgroundColor = '#40c463'; // Low contribution
            }
            
            contributionSquares.appendChild(square);
        }
    }
    
    // Initialize contribution squares
    generateContributionSquares();
    
    // Scroll to Top Functionality
    function createScrollToTopButton() {
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: white;
            border: none;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        `;
        
        document.body.appendChild(scrollToTopBtn);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.style.opacity = '1';
                scrollToTopBtn.style.visibility = 'visible';
            } else {
                scrollToTopBtn.style.opacity = '0';
                scrollToTopBtn.style.visibility = 'hidden';
            }
        });
        
        // Scroll to top when clicked
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effects
        scrollToTopBtn.addEventListener('mouseenter', () => {
            scrollToTopBtn.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        scrollToTopBtn.addEventListener('mouseleave', () => {
            scrollToTopBtn.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // Initialize scroll to top button
    createScrollToTopButton();
    
    // Form Validation (if contact form is added later)
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = '#ef4444';
                isValid = false;
            } else {
                input.style.borderColor = '#d1d5db';
            }
        });
        
        return isValid;
    }
    
    // Add form validation to any forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
    
    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for fade-in animation
    const fadeElements = document.querySelectorAll('.project-card, .skill-item, .stat-card');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
    
    // Console welcome message
    console.log('%c🚀 Welcome to Abhilash Hamsa\'s Portfolio!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%c💻 Built with HTML, CSS, and JavaScript', 'color: #64748b; font-size: 14px;');
    
});
