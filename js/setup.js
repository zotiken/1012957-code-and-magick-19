'use strict';

var blockSetup = document.querySelector('.setup');
var blockSetuSimilar = document.querySelector('.setup-similar');
var blockSetuSimilarList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
var wizards = [];
var arrayNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var arraySurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb (101, 137, 164)', 'rgb (241, 43, 107)', 'rgb (146, 100, 161)', 'rgb (56, 159, 117)', 'rgb (215, 210, 55)', 'rgb (0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


//  ---------- Показать блок ---------------

var showBlock = function () {
  blockSetup.classList.remove('hidden');
};

if (blockSetup) {
  showBlock();
}


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
