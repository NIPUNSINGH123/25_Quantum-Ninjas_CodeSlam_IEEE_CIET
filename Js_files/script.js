 const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        fadeElements.forEach(element => {
            observer.observe(element);
        });

        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('nav');
            const backToTop = document.querySelector('.back-to-top');
            
            if (window.scrollY > 50) {
                navbar.style.padding = '1rem 0';
                navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '1.5rem 0';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            }
            
   
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        const coffeeCards = document.querySelectorAll('.coffee-card');
        
        coffeeCards.forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                }, 150);
            });
        });


        const sizeOptions = document.querySelectorAll('.size-option');
        
        sizeOptions.forEach(option => {
            option.addEventListener('click', function() {
           
                const parentCard = this.closest('.coffee-card');
                const allOptions = parentCard.querySelectorAll('.size-option');
                allOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                this.classList.add('active');
            });
        });

        // Button ripple effect
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

 
        document.querySelector('.back-to-top').addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Floating button functionality
        document.querySelector('.floating-btn').addEventListener('click', function() {
            alert('Order your favorite coffee now! ☕');
        });

        // Coffee counter animation
        function animateCounter() {
            const counter = document.getElementById('coffee-count');
            let count = parseInt(counter.textContent);
            
            setInterval(() => {
                count += Math.floor(Math.random() * 3) + 1;
                counter.textContent = count;
            }, 5000);
        }

        // Add ripple effect styles
        const style = document.createElement('style');
        style.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.7);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
            }
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

 
        animateCounter();