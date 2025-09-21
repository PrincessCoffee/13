// Language switching functionality
let currentLanguage = 'ar';

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all elements with language data with smooth transition
    document.querySelectorAll('[data-ar][data-en]').forEach(element => {
        // Add fade effect for smooth transition
        element.style.opacity = '0.5';
        element.style.transform = 'translateY(-5px)';
        
        setTimeout(() => {
            if (lang === 'ar') {
                element.textContent = element.dataset.ar;
            } else {
                element.textContent = element.dataset.en;
            }
            
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 150);
    });
    
    // Update document direction and language
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update body class for styling
    document.body.className = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language preference
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'ar';
    switchLanguage(savedLang);
});

// Modal functionality
function showMenu() {
    const modal = document.getElementById('menuModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation class
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'modalSlideIn 0.3s ease-out';
}

function closeMenu() {
    const modal = document.getElementById('menuModal');
    const modalContent = modal.querySelector('.modal-content');
    
    // Add slide out animation
    modalContent.style.animation = 'modalSlideOut 0.3s ease-in';
    
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('menuModal');
    if (event.target === modal) {
        closeMenu();
    }
}

// Add slide out animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes modalSlideOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-50px);
        }
    }
`;
document.head.appendChild(style);

// Add interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to social buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add hover effects to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add click animation to menu button
    const menuButton = document.querySelector('.menu-btn');
    menuButton.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Add floating animation to logo
    const logo = document.querySelector('.logo-circle');
    if (logo) {
        let floatDirection = 1;
        
        setInterval(() => {
            const currentTransform = logo.style.transform || 'translateY(0px)';
            const currentY = parseFloat(currentTransform.match(/translateY\(([^)]+)\)/)?.[1] || 0);
            
            if (currentY >= 3) floatDirection = -1;
            if (currentY <= -3) floatDirection = 1;
            
            const baseTransform = logo.style.transform.replace(/translateY\([^)]*\)/, '') || '';
            logo.style.transform = `${baseTransform} translateY(${currentY + (floatDirection * 0.3)}px)`.trim();
        }, 150);
    }
    
    // Add sparkle effect
    createSparkles();
});

// Sparkle effect function
function createSparkles() {
    const container = document.querySelector('.profile-card');
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #d4af37;
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: sparkleAnimation 2s ease-out forwards;
            z-index: 1;
        `;
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }, 3000);
}

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleAnimation {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Add smooth scrolling for mobile
if (window.innerWidth <= 480) {
    document.body.style.overscrollBehavior = 'contain';
}

// Add touch feedback for mobile
if ('ontouchstart' in window) {
    const buttons = document.querySelectorAll('.social-btn, .menu-btn');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });
        
        button.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}