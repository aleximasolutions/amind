let slider = document.querySelector('.slider');
let position = 0;

let slidesToScroll = slider.dataset.scroll;
let slidesToShow =  document.querySelector('body').clientWidth >= 1200 ? 2:1;

let minWidthToAdaptive = slider.dataset.maxwidth;

let itemWidth = slider.clientWidth / slidesToShow;
let movePosition = slidesToScroll*itemWidth;

let track = document.querySelector('.slider__track');
let items = document.querySelectorAll('.slider__item');
let itemsCount = items.length;

let btnPrev = document.querySelector('.btn__prev');
let btnNext = document.querySelector('.btn__next');

setUp();
window.addEventListener("resize", setUp);

function setUp() {
    slidesToShow =  document.querySelector('body').clientWidth >= minWidthToAdaptive ? 2:1;
    slider = document.querySelector('.slider');
    itemWidth = slider.clientWidth / slidesToShow;
    movePosition = slidesToScroll*itemWidth;
    
    for (var i = 0; i < itemsCount; i++) {
        items[i].style.minWidth = itemWidth + 'px';
    }
}

// checkBtn();
btnPrev.addEventListener('click', SlidePrev);
btnNext.addEventListener('click', SlideNext);

function SlideNext() {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow*itemWidth)/itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition: itemsLeft*itemWidth; 
    setPosition();
    checkBtn();
}

function SlidePrev() {
    const itemsLeft = Math.abs(position)/itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition: itemsLeft*itemWidth; 
    setPosition();
    checkBtn();
}

const setPosition = () => {
    track.style.transform = 'translateX(' + position + 'px)';
};

const checkBtn = () => {
    btnPrev.disabled = position >= 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};


checkBtn();