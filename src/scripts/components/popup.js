// Magic string
const classOpenPopup = 'popup_open';
const classPopup = '.popup';
const classClosePopup = '.popup__close';
const classButtonMain = '.main-block__button';
const classButtonPopup = '.popup__button';
const classPausePopup = '.popup__pause';
const classVideo = '.popup__video';
const displayNone = 'none';
const displayFlex = 'flex';

// Magic number
const timeOpenVideo = 500;

// Variables
const buttonOpenPopup = document.querySelector(classButtonMain);
const popup = document.querySelector(classPopup);
const buttonClosePopup = document.querySelector(classClosePopup);
const buttonPopup = document.querySelector(classButtonPopup);
const pausePopup = document.querySelector(classPausePopup);
const video = document.querySelector(classVideo);

// Functions
const openPopup = () => {
    popup.classList.add(classOpenPopup);
}

const closePopup = () => {
    popup.classList.remove(classOpenPopup);
    pauseVideo();
}

const playVideo = () => {
    pausePopup.style.display = displayNone;
    setTimeout(() => {
        video.play();
    }, timeOpenVideo);
}

const pauseVideo = () => {
    video.pause();
    pausePopup.style.display = displayFlex;
}

// Events
buttonOpenPopup.addEventListener('click', () => {
    openPopup();
});

buttonClosePopup.addEventListener('click', () => {
    closePopup();
});

buttonPopup.addEventListener('click', () => {
    playVideo();
});