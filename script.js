// Add event listener to navigation links
document.querySelectorAll('nav .nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').replace('#', '');
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Debounced scroll event listener
const debounceScroll = () => {
    let timeoutId;
    return () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            const scrollPosition = window.scrollY;
            const intro = document.querySelector('.intro');
            const projects = document.querySelectorAll('.project');

            if (scrollPosition > 200) {
                intro.classList.add('animated');
            } else {
                intro.classList.remove('animated');
            }

            projects.forEach((project) => {
                const projectTop = project.offsetTop;
                const projectHeight = project.offsetHeight;

                if (scrollPosition > projectTop - 200) {
                    project.classList.add('animated');
                } else {
                    project.classList.remove('animated');
                }
            });
        }, 100);
    };
};

document.addEventListener('scroll', debounceScroll());

// Scroll-to-Section Functions (no changes)
function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}