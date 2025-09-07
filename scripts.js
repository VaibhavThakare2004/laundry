// ✅ Enhanced JavaScript for animations, interactions & bubbles
document.addEventListener('DOMContentLoaded', function () {
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll to top button
    const scrollBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });

    // Animate elements on scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.about-card, .service-card, .contact-card');
        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    const aboutCards = document.querySelectorAll('.about-card');
    const serviceCards = document.querySelectorAll('.service-card');
    const contactCards = document.querySelectorAll('.contact-card');

    aboutCards.forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });

    serviceCards.forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });

    contactCards.forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = 'translateX(-20px)';
        card.style.transition = 'all 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Button hover effects
    const buttons = document.querySelectorAll('.btn, .service-btn, .submit-btn');
    buttons.forEach((button) => {
        button.addEventListener('mouseenter', function (e) {
            const x = e.pageX - this.offsetLeft;
            const y = e.pageY - this.offsetTop;
            this.style.setProperty('--x', x + 'px');
            this.style.setProperty('--y', y + 'px');
        });
    });

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    }

    buttons.forEach((button) => {
        button.addEventListener('click', createRipple);
    });

    // ✅ Bubble Animation - Start Immediately + Randomize Positions
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble) => {
        // Randomize horizontal position (0% - 100%)
        bubble.style.left = Math.random() * 100 + '%';

        // Randomize animation duration (10s - 18s)
        bubble.style.animationDuration = Math.random() * (18 - 10) + 10 + 's';

        // Randomize delay so they don't start together
        bubble.style.animationDelay = Math.random() * 5 + 's';

        // Start animation
        bubble.style.animationPlayState = 'running';
    });
});
