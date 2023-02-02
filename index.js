let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset += 300;
    if (offset > 300) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-previous').addEventListener('click', function () {
    offset -= 300;
    if (offset < 0) {
        offset = 300;
    }
    sliderLine.style.left = -offset + 'px';
});