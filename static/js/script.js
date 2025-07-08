document.addEventListener('DOMContentLoaded', function () {
    // Initialize Particles.js
    if (typeof particlesJS === 'function' && document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 150,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#64ffda", "#52d1b2", "#a8b2d1"]
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#64ffda"
                    }
                },
                opacity: {
                    value: 0.7,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 10,
                        opacity_min: 0.2,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 3,
                        size_min: 1,
                        sync: false
                    }
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#64ffda",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    outMode: "bounce",
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab",
                        distance: 200
                    },
                    onclick: {
                        enable: true,
                        mode: "push",
                        particles_nb: 10
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 180,
                        links: {
                            opacity: 0.8
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 400,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 15
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // Typing Effect
    const typingText = document.getElementById('typing-effect');
    if (typingText) {
        const text = "Extract → Transform → Load → Analyze";
        let index = 0;

        function type() {
            if (index < text.length) {
                typingText.innerHTML = text.substring(0, index + 1);
                index++;
                setTimeout(type, 100);
            }
        }
        type();
    }

    // Header scroll effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(10, 25, 47, 0.95)';
                header.style.boxShadow = '0 5px 20px rgba(2, 12, 27, 0.5)';
            } else {
                header.style.background = 'rgba(10, 25, 47, 0.9)';
                header.style.boxShadow = 'none';
            }
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05) translateY(-25px)';
            this.style.boxShadow = '0 15px 35px rgba(100, 255, 218, 0.3)';
            this.style.borderColor = '#64ffda';
        });
    
        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
            this.style.boxShadow = '0 7px 20px rgba(0, 0, 0, 0.4)';
            this.style.borderColor = 'rgba(100, 255, 218, 0.1)';
        });
    });
});