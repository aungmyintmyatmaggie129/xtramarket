//Slide Button 
const slider = document.getElementById('slider');
const moveLeft = document.getElementById('moveLeft');
const moveRight = document.getElementById('moveRight');

// How many pixels to scroll per click
const scrollAmount = 300;

moveRight.addEventListener('click', () => {
    slider.parentElement.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

moveLeft.addEventListener('click', () => {
    slider.parentElement.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});
