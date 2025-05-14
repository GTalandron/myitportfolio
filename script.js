var typed = new Typed(".input", {
    strings: ["Full Stack Developer", "Computer Engineering Student", "1st year college student from NCST"],
    typedSpeed: 100,
    backspeed: 100,
    loop: true
})

const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.navlinks');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


