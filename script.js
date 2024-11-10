const video = document.querySelector('.background-video');

const movementStrength = 25;

document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const mouseX = e.clientX / innerWidth - 0.5;
    const mouseY = e.clientY / innerHeight - 0.5;

    const translateX = mouseX * movementStrength;
    const translateY = mouseY * movementStrength;

    video.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.1)`;

});


const sections = document.querySelectorAll('.section');

function checkSections() {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition > sectionTop + sectionHeight / 4) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

window.addEventListener('scroll', checkSections);
window.addEventListener('load', checkSections);