// Magic string
const optionCorrect = 'quiz__option_correct';
const optionWrong = 'quiz__option_wrong';
const openAnswerQuestion = 'quiz__answer_open';
const classQuestions = '.quiz__item';
const classOptionQuestion = '.quiz__option';
const classAnswerQuestion = '.quiz__answer';
const classCorners = '.quiz__corners'
const urlCorrectCorner = 'src/assets/icons/corner-correct.svg';
const urlWrongCorner = 'src/assets/icons/corner-wrong.svg';
const altImgCorner = 'icon corner';
const classImgCorner = 'quiz__corner';

// Magic number
const timeOpenAnswer = 500;

// Variable
const questionsQuiz = document.querySelectorAll(classQuestions);

const layoutCorrectOption = `
    <img src=${urlCorrectCorner} alt=${altImgCorner} class=${classImgCorner}>
    <img src=${urlCorrectCorner} alt=${altImgCorner} class=${classImgCorner}>
    <img src=${urlCorrectCorner} alt=${altImgCorner} class=${classImgCorner}>
    <img src=${urlCorrectCorner} alt=${altImgCorner} class=${classImgCorner}>
`;

const layoutWrongOption = `
    <img src=${urlWrongCorner} alt=${altImgCorner} class=${classImgCorner}>
    <img src=${urlWrongCorner} alt=${altImgCorner} class=${classImgCorner}>
    <img src=${urlWrongCorner} alt=${altImgCorner} class=${classImgCorner}>
    <img src=${urlWrongCorner} alt=${altImgCorner} class=${classImgCorner}>
`;

// Functions
const detectionVariable = (index) => {
    if (index == 0) return true;
    else return false;
}

const changeCorner = (option, correctQuestion) => {
    const blockCorner = option.querySelector(classCorners);

    if (correctQuestion) {
        blockCorner.innerHTML = layoutCorrectOption;
    } else {
        blockCorner.innerHTML = layoutWrongOption;
    }
}

const openAnswer = (option, answer, correctQuestion) => {
    if (correctQuestion) {
        option.classList.add(optionCorrect);
    } else {
        option.classList.add(optionWrong);
    }
    setTimeout(() => {
        answer.classList.add(openAnswerQuestion)
    }, timeOpenAnswer);
}

const closeAnswer = (options, answers) => {
    options.forEach(option => {
        if (option.classList.contains(optionCorrect)) {
            option.classList.remove(optionCorrect);
        } else if (option.classList.contains(optionWrong)) {
            option.classList.remove(optionWrong);
        }
    });

    answers.forEach(answer => {
        if (answer.classList.contains(openAnswerQuestion)) {
            answer.classList.remove(openAnswerQuestion);
        }
    });
}

// Event
questionsQuiz.forEach(question => {
    const optionsQuestion = question.querySelectorAll(classOptionQuestion);
    const answerQuestion = question.querySelectorAll(classAnswerQuestion);

    optionsQuestion.forEach((option, index) => {
        option.addEventListener('click', () =>{
            changeCorner(option, detectionVariable(index));
            closeAnswer(optionsQuestion, answerQuestion);
            openAnswer(option, answerQuestion[index], detectionVariable(index));
        });
    });

});