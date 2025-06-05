function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    navLinks.classList.toggle('show');
    body.classList.toggle('menu-open');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target) && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        document.body.classList.remove('menu-open');
    }
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('show');
        document.body.classList.remove('menu-open');
    });
});

function toggleCleanserDetails() {
    const details = document.getElementById('cleanser-details');
    const btn = document.querySelector('.see-more-btn');
    const btnTxt = btn.querySelector('.btn-txt');
    if (details.style.display === "none") {
        details.style.display = "block";
        btnTxt.textContent = "See Less";
    } else {
        details.style.display = "none";
        btnTxt.textContent = "See More";
    }
}

function toggleTonerDetails() {
    const details = document.getElementById('toner-details');
    const btn = document.querySelectorAll('.see-more-btn')[1];
    const btnTxt = btn.querySelector('.btn-txt');
    if (details.style.display === "none") {
        details.style.display = "block";
        btnTxt.textContent = "See Less";
    } else {
        details.style.display = "none";
        btnTxt.textContent = "See More";
    }
}

function toggleSerumDetails() {
    const details = document.getElementById('serum-details');
    const btn = document.querySelectorAll('.see-more-btn')[2];
    const btnTxt = btn.querySelector('.btn-txt');
    if (details.style.display === "none") {
        details.style.display = "block";
        btnTxt.textContent = "See Less";
    } else {
        details.style.display = "none";
        btnTxt.textContent = "See More";
    }
}

// Smooth scrolling for anchor links
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

// Toggle active class on shop-now-button for touch devices
const shopNowButton = document.querySelector('.shop-now-button');
if (shopNowButton) {
    shopNowButton.addEventListener('click', function (e) {
        // Allow clicks on platform links to work normally
        if (e.target.closest('a')) {
            return; // Do not prevent default or toggle active class
        }
        e.preventDefault();
        this.classList.toggle('active');
    });
}


