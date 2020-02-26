'use strict';


(function () {

  var blockSetuSimilar = document.querySelector('.setup-similar');
  var blockSetuSimilarList = document.querySelector('.setup-similar-list');
  // var wizards = [];

  // var arrayNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var arraySurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var colorCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var colorEyes = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  // === элементы настройки Волщебника ---------

  var mainWizardCoat = document.querySelector('.setup-wizard-wrap').querySelector('.wizard-coat');
  var mainWizarEyes = document.querySelector('.setup-wizard-wrap').querySelector('.wizard-eyes');
  var mainfireball = document.querySelector('.setup-fireball-wrap');
  var mainfireballInput = document.querySelector('.setup-fireball-wrap input[name="fireball-color"]');


  // --------------- рандомное значение  ---------------------

  var makeRandomValue = function (array) {
    return Math.round(Math.random() * (array.length - 1));
  };

  // ---

  //  --------------- создание массива описания  персонажей -------------

  // var wizardGeneretionCharacteristics = function (number) {
  //   for (var i = 0; i < number; i++) {
  //     wizards.push({
  //       name: arrayNames[makeRandomValue(arrayNames)] + ' ' + arraySurnames[makeRandomValue(arraySurnames)],
  //       coatColor: colorCoat[makeRandomValue(colorCoat)],
  //       eyesColor: colorEyes[makeRandomValue(colorEyes)]
  //     });
  //   }
  //   return wizards;
  // };

  // wizardGeneretionCharacteristics(4); --- вызов  генерации

  // --

  // ========= копирование узла =============


  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


  var renderWizard = function (arr) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = arr.name;
    wizardElement.querySelector('.wizard-coat').style.fill = arr.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = arr.colorEyes;
    return wizardElement;
  };
  //  ---------- конструирование блока  по данным с массива -----------

  var Load = function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    blockSetuSimilarList.appendChild(fragment);
    blockSetuSimilar.classList.remove('hidden');
  };

  window.backend.load('https://js.dump.academy/code-and-magick/data', Load);


  mainWizardCoat.addEventListener('click', function () {
    mainWizardCoat.style.fill = colorCoat[makeRandomValue(colorCoat)];
  });

  mainWizarEyes.addEventListener('click', function () {
    mainWizarEyes.style.fill = colorEyes[makeRandomValue(colorEyes)];
  });

  mainfireball.addEventListener('click', function () {
    mainfireball.style.backgroundColor = fireballColors[makeRandomValue(fireballColors)];
    mainfireballInput.setAttribute('value', fireballColors[makeRandomValue(fireballColors)]);
  });
})();
