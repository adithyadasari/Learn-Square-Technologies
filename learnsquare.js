const carousel = document.querySelector('.carousel-display');
const leftButton = document.querySelector('.carousel-nav-button.left');
const rightButton = document.querySelector('.carousel-nav-button.right');
let currentIndex = 0;
let autoScrollInterval;

function moveCarousel(direction) {
    const itemWidth = document.querySelector('.carousel-image-item').offsetWidth;
    const itemsPerView = Math.floor(carousel.offsetWidth / itemWidth);
    const maxIndex = carousel.children.length - itemsPerView;

    if (direction === 'left') {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // If at the start, wrap around to the last set of items
            currentIndex = maxIndex;
        }
    } else if (direction === 'right') {
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            // If at the end, wrap around to the first set of items
            currentIndex = 0;
        }
    }

    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    
    // Reset auto-scroll when manually moving the carousel
    resetAutoScroll();
}

function startAutoScroll() {
    autoScrollInterval = setInterval(() => moveCarousel('right'), 2000);
}

function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
}

// Event listeners for manual navigation
leftButton.addEventListener('click', () => moveCarousel('left'));
rightButton.addEventListener('click', () => moveCarousel('right'));

// Start auto-scroll initially
startAutoScroll();


const viewMoreBtn = document.getElementById('viewMoreBtn');
const hiddenModules = document.querySelectorAll('.module.hidden');
let isExpanded = false;

viewMoreBtn.addEventListener('click', () => {
    if (!isExpanded) {
        hiddenModules.forEach(module => module.classList.remove('hidden'));
        viewMoreBtn.textContent = 'View Less';
        isExpanded = true;
    } else {
        hiddenModules.forEach(module => module.classList.add('hidden'));
        viewMoreBtn.textContent = 'View More Features';
        isExpanded = false;
    }
});


//pavan
function toggleContent(selectedBox) {
// Find the closest faq-container to the selected faq-box
const container = selectedBox.closest('.faq-container');
const boxes = container.querySelectorAll('.faq-box');

boxes.forEach(box => {
const content = box.querySelector('.faq-content');
const button = box.querySelector('.faq-toggle-btn');

if (box === selectedBox) {
    // Toggle the visibility of the content and the button text
    const isVisible = content.style.display === 'block';
    box.classList.toggle('active', !isVisible);
    content.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? '+' : '-';
} else {
    // Hide content and reset button text for other boxes
    box.classList.remove('active');
    content.style.display = 'none';
    button.textContent = '+';
}
});
}

window.onload = function() {
// Initialize the first faq-box as open
const firstBox = document.querySelector('.faq-container .faq-box');
if (firstBox) {
toggleContent(firstBox);
}
};

//adithya
// Event delegation for handling clicks on the container wrapper
document.querySelector('.faq-1-container-wrapper').addEventListener('click', function(e) {
// Check if the clicked element is part of the '.faq-1-box-header'
const boxHeader = e.target.closest('.faq-1-box-header');

if (boxHeader) {
const box = boxHeader.closest('.faq-1-box');
const content = box.querySelector('.faq-1-content');
const button = box.querySelector('.faq-1-toggle-btn');

// Toggle the selected box
const isActive = box.classList.toggle('active');
content.style.display = isActive ? 'block' : 'none';
button.textContent = isActive ? '-' : '+';

// Collapse other boxes
document.querySelectorAll('.faq-1-box').forEach(otherBox => {
    if (otherBox !== box) {
        otherBox.classList.remove('active');
        otherBox.querySelector('.faq-1-content').style.display = 'none';
        otherBox.querySelector('.faq-1-toggle-btn').textContent = '+';
    }
});
}
});

// Initialize active FAQ boxes on load
window.onload = function() {
document.querySelectorAll('.faq-1-box.active').forEach(box => {
const content = box.querySelector('.faq-1-content');
const button = box.querySelector('.faq-1-toggle-btn');
content.style.display = 'block';
button.textContent = '-';
});
};
function emailSend(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(event.target);
    console.log("Form Data:", formData);
    3

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sandeep@learnsquare.co",
        Password: "2996ECB1BA03CBA8DEF056E945AA213104FF",
        To: "sandeep@learnsquare.co",
        From: formData.get('email'),
        Subject: "This is the subject",
        Body: `Message from ${formData.get('first-name')} ${formData.get('last-name')}: ${formData.get('message')}`,
        Port: 587
    }).then(
        message => {
            console.log("Email sent:", message);
            alert("Email sent successfully!");
        }
    ).catch(
        error => {
            console.error("Error sending email:", error);
            alert("Failed to send email: " + error.message);
        }
    );
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            var captchaValue = document.getElementById('captcha').value;
            if (captchaValue === '25') {
                alert('Form submitted successfully!');
                // window.location.href = 'next-page.html'; // Replace with your next page URL
            } else {
                alert('Incorrect sum. Please try again.');
            }
        });


// menu icon
hamburger = document.querySelector(".hamburger");
hamburger.onclick=function() {
    navbar= document.querySelector(".nav-bar");
    navbar.classList.toggle("active");
}
