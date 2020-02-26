'use strict';

var blockSetup = document.querySelector('.setup');
var blockSetupOpen = document.querySelector('.setup-open');
var blocksetupClose = document.querySelector('.setup-close');
var WizardForm = document.querySelector('.setup-wizard-form');

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


var onUnload = function () {
  WizardForm.classList.add('hidden');
};

var onErr = function (error) {
  var errorInfo = '<p>' + error + '</p>';
  var message = document.createElement('div');
  message.classList.add('modal-error-massage');
  message.insertAdjacentHTML('afterBegin', errorInfo);
  document.body.appendChild(message);
  var modalErrorMassage = document.querySelector('.modal-error-massage');
  var remove = function () {
    modalErrorMassage.remove();
  };
  setTimeout(remove, 3000);
};


WizardForm.addEventListener('submit', function (evt) {
  window.backend.upload(WizardForm, 'https://js.dump.academy/code-and-magick', onUnload, onErr);
  evt.preventDefault();

});
