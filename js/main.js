// JS scripts placed here
const element = document.getElementById('enter-button');
const intro = document.getElementById('intro');

element.addEventListener('click', () => {
    intro.classList.add('fade-out');
});
