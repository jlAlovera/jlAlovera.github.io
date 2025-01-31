const elements = document.querySelectorAll('.project, .assignment, .award, .certification');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

elements.forEach(element => {
    observer.observe(element);
});

window.addEventListener('load', () => {
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0) {
            element.classList.add('visible');
        }
    });
});