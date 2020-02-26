'use strict';

var blockSetup = document.querySelector('.setup');
var blockSetupOpen = document.querySelector('.setup-open');
var blocksetupClose = document.querySelector('.setup-close');


window.blockSetup = blockSetup;
//  ---------- Показать блок ---------------

var onBlockEscPress = function (evt) {
  if (evt.keyCode === window.util.ESC_KEYCODE) {
    closeBlock();
  }
};

var showBlock = function () {
  blockSetup.classList.remove('hidden');
  document.addEventListener('keydown', onBlockEscPress);
};

// if (blockSetup) {
//   showBlock();
// }

var closeBlock = function () {
  blockSetup.classList.add('hidden');
  document.removeEventListener('keydown', onBlockEscPress);
};

document.querySelector('input[name="username"]').addEventListener('keydown', function (evt) {
  if (evt.keyCode === window.util.ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

blockSetupOpen.addEventListener('click', function () {
  showBlock();
});
blockSetupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === window.util.ENTER_KEYCODE) {
    showBlock();
  }
});


blocksetupClose.addEventListener('click', function () {
  closeBlock();
});
blocksetupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === window.util.ENTER_KEYCODE) {
    closeBlock();
  }
});

