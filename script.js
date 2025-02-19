document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Slider functionality
let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
    updateDots(index);
}

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

dots.forEach(dot => {
    dot.addEventListener('click', function() {
        currentIndex = parseInt(this.getAttribute('data-index'));
        showSlide(currentIndex);
    });
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 3000); // Change slide every 3 seconds 