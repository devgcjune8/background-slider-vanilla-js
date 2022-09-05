const BODY = document.body;
const IMG_SLIDES = document.querySelectorAll('.img-slide');
const LEFT_ARROW = document.querySelector('.left');
const RIGHT_ARROW = document.querySelector('.right');

let currentImg = 2;

imgToBody()

function imgToBody() {
    BODY.style.backgroundImage  =  IMG_SLIDES[currentImg].style.backgroundImage
}

function slideTheImgSlides() {
    IMG_SLIDES.forEach((img) => {
        img.classList.remove('current')
    })

    IMG_SLIDES[currentImg].classList.add('current')
}

LEFT_ARROW.addEventListener("click", () => {
    currentImg = currentImg - 1;

    if (currentImg < 0) {
        currentImg = IMG_SLIDES.length - 1
    }

    imgToBody()
    slideTheImgSlides()
})

RIGHT_ARROW.addEventListener("click", () => {
    currentImg = currentImg + 1;

    if (currentImg > IMG_SLIDES.length - 1) {
        currentImg = 0
    }

    imgToBody()
    slideTheImgSlides()
})

//background image comes first before the slide in the middle