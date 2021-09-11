import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

$(function() {

  


  // $('.popup').magnificPopup();

});

const button = document.querySelector('.main-block__button');

button.addEventListener('mouseenter', () => {
  button.classList.add('main-block__button_active');
});

button.addEventListener('mouseleave', () => {
  button.classList.remove('main-block__button_active');
});