// Magic string
const classButton = '.main-block__button';
const classActiveButton = 'main-block__button_active';
const classQuizOption = '.quiz__option';
const classBlockCorners = '.quiz__corners';
const urlCorner = 'src/assets/icons/corner.svg';
const urlHoverCorner = 'src/assets/icons/corner-hover.svg';
const altCorner = 'icon corner';
const classCorner = 'quiz__corner';


// Variables
const button = document.querySelector(classButton);
const optionsQuiz = document.querySelectorAll(classQuizOption);

const layoutHoverOption = `
    <img src=${urlHoverCorner} alt=${altCorner} class=${classCorner}>
    <img src=${urlHoverCorner} alt=${altCorner} class=${classCorner}>
    <img src=${urlHoverCorner} alt=${altCorner} class=${classCorner}>
    <img src=${urlHoverCorner} alt=${altCorner} class=${classCorner}>
`;

const layoutDefaultOption = `
    <img src=${urlCorner} alt=${altCorner} class=${classCorner}>
    <img src=${urlCorner} alt=${altCorner} class=${classCorner}>
    <img src=${urlCorner} alt=${altCorner} class=${classCorner}>
    <img src=${urlCorner} alt=${altCorner} class=${classCorner}>
`;

// Events
button.addEventListener('mouseenter', () => {
  button.classList.add(classActiveButton);
});

button.addEventListener('mouseleave', () => {
  button.classList.remove(classActiveButton);
});

optionsQuiz.forEach(option => {
    option.addEventListener('mouseenter', () => {
        const blockCorner = option.querySelector(classBlockCorners);
        blockCorner.innerHTML = layoutHoverOption;
        
    });
    
    option.addEventListener('mouseleave', () => {
        const blockCorner = option.querySelector(classBlockCorners);
        blockCorner.innerHTML = layoutDefaultOption;
    });
});