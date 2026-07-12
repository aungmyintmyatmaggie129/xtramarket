// Mobile hamburger toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const cancelBtn = document.getElementById('cancelBtn');

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.classList.add('no-scroll');
});

cancelBtn.addEventListener('click', () => {
    mobileMenu.classList.add('close');
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
})