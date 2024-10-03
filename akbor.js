// ............Mobile Menu Toggle................//

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuPanel = document.querySelector('.mobile-menu-panel');
    const navLinks = mobileMenuPanel.querySelectorAll('.nav-link');

    // Function to toggle menu
    function toggleMenu() {
      mobileMenuBtn.classList.toggle('active');
      mobileMenuPanel.classList.toggle('active');
      document.body.style.overflow = mobileMenuPanel.classList.contains('active') ? 'hidden' : '';
    }

    // Add click event listener to menu button
    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking a nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        mobileMenuPanel.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Add transition delays to nav links
    navLinks.forEach((link, index) => {
      link.style.transitionDelay = `${index * 0.1}s`;
    });
  });

//............ smooth scrolling................//

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



//............hero.............//

function createDotGrid(elementId, rows, cols) {
    const container = document.getElementById(elementId);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.style.left = `${j * 15}px`;
            dot.style.top = `${i * 15}px`;
            container.appendChild(dot);
        }
    }
}


// Create both dot grids when the page loads
document.addEventListener('DOMContentLoaded', () => {
    createDotGrid('dotGrid1', 5, 7);
    createDotGrid('dotGrid2', 5, 7);
});

//.............progressive counter.................//

// Function to progressively count numbers
const counters = document.querySelectorAll('.count');
const speed = 200; // Adjust the speed of counting

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Calculate the increment
        const increment = target / speed;

        // If the current count is less than the target, increase the count
        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target; // Ensure it ends at the target number
        }
    };

    // Run the function when the page loads
    updateCount();
});

//........services........//


document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper1');
    const cards = document.querySelectorAll('.service-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth;
    const cardsToShow = window.innerWidth <= 768 ? 1 : 3;
    const maxIndex = cards.length - cardsToShow;
    
    function updateSliderPosition() {
        const gap = 20; // Same as the gap in CSS
        const offset = (cardWidth + gap) * currentIndex;
        sliderWrapper.style.transform = `translateX(-${offset}px)`;
    }
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSliderPosition();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', () => {
        const newCardsToShow = window.innerWidth <= 768 ? 1 : 3;
        if (newCardsToShow !== cardsToShow) {
            currentIndex = 0;
            updateSliderPosition();
        }
    });
});



//................testimonial....................//

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the carousel with custom options
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000, // Slide duration
        pause: 'hover', // Pause on mouse hover
        wrap: true, // Enable continuous loop
        keyboard: true // Enable keyboard navigation
    });

    // Optional: Add touch swipe support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;
    const carousel = document.querySelector('#testimonialCarousel');

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;

        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                testimonialCarousel.next();
            } else {
                testimonialCarousel.prev();
            }
        }
    }
});

//...................contact form.................//
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(form);
        for (let [key, value] of formData.entries()) {
            console.log(key + ': ' + value);
        }
        
        // Clear the form
        form.reset();
        
        alert('Thank you for your message. We will get back to you soon!');
    });
});


//top scroll//

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
