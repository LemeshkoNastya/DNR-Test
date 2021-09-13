import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

$(function() {

  


  // $('.popup').magnificPopup();

});

import "./components/interactive";
import "./components/quiz";
import "./components/popup";