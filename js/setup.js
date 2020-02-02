'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var blockSetup = document.querySelector('.setup');
var blockSetupOpen = document.querySelector('.setup-open');
var blocksetupClose = document.querySelector('.setup-close');
var blockSetuSimilar = document.querySelector('.setup-similar');
var blockSetuSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');


var mainWizardCoat = document.querySelector('.setup-wizard-wrap').querySelector('.wizard-coat');
var mainWizarEyes = document.querySelector('.setup-wizard-wrap').querySelector('.wizard-eyes');
var mainfireball = document.querySelector('.setup-fireball-wrap');
var mainfireballInput = document.querySelector('.setup-fireball-wrap input[name="fireball-color"]');

var wizards = [];
var arrayNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var arraySurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];


//  ---------- Показать блок ---------------

var onBlockEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
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
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
});

blockSetupOpen.addEventListener('click', function () {
  showBlock();
});
blockSetupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    showBlock();
  }
});


blocksetupClose.addEventListener('click', function () {
  closeBlock();
});
blocksetupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeBlock();
  }
});

mainWizardCoat.addEventListener('click', function () {
  mainWizardCoat.style.fill = coatColors[makeRandomValue(coatColors)];
});

mainWizarEyes.addEventListener('click', function () {
  mainWizarEyes.style.fill = eyesColors[makeRandomValue(eyesColors)];
});

mainfireball.addEventListener('click', function () {
  mainfireball.style.backgroundColor = fireballColors[makeRandomValue(fireballColors)];
  mainfireballInput.setAttribute('value', fireballColors[makeRandomValue(fireballColors)]);
});

// --------------- рандомное значение  ---------------------

var makeRandomValue = function (array) {
  return Math.round(Math.random() * (array.length - 1));
};

// ---

//  --------------- создание массива описания  персонажей -------------

var wizardGeneretionCharacteristics = function (number) {
  for (var i = 0; i < number; i++) {
    wizards.push({
      name: arrayNames[makeRandomValue(arrayNames)] + ' ' + arraySurnames[makeRandomValue(arraySurnames)],
      coatColor: coatColors[makeRandomValue(coatColors)],
      eyesColor: eyesColors[makeRandomValue(eyesColors)]
    });
  }
  return wizards;
};

wizardGeneretionCharacteristics(4);

// --

// ========= копирование узла =============

var renderWizard = function (arr) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = arr.name;
  wizardElement.querySelector('.wizard-coat').style.fill = arr.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = arr.eyesColor;
  return wizardElement;
};
//  ---------- конструирование блока  по данным с массива -----------

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
blockSetuSimilarList.appendChild(fragment);

blockSetuSimilar.classList.remove('hidden');
