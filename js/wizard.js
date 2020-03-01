'use strict';


(function () {
  var wizards = [];
  var blockSetuSimilar = document.querySelector('.setup-similar');
  var blockSetuSimilarList = document.querySelector('.setup-similar-list');

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

  var onMainWizardCoat = window.debounce(function () {
    mainWizardCoat.style.fill = colorCoat[makeRandomValue(colorCoat)];
    update();
  });

  var onMainWizarEyes = window.debounce(function () {
    mainWizarEyes.style.fill = colorEyes[makeRandomValue(colorEyes)];
    update();
  });

  var onMainfireball = window.debounce(function () {
    mainfireball.style.backgroundColor = fireballColors[makeRandomValue(fireballColors)];
    mainfireballInput.setAttribute('value', fireballColors[makeRandomValue(fireballColors)]); // setTimeout(function () {
    update();
  });

  mainWizardCoat.addEventListener('click', onMainWizardCoat);

  mainWizarEyes.addEventListener('click', onMainWizarEyes);

  mainfireball.addEventListener('click', onMainfireball);

  //  получение оценки совпадения

  var levelOfSimilarity = function (data) {
    for (var i = 0; i < data.length; i++) {
      data[i].index = 0;
      if (mainWizardCoat.style.fill === data[i].colorCoat) {
        data[i].index = 5;
      }
      if (mainWizarEyes.style.fill === data[i].colorEyes) {
        data[i].index += 2;
      }
      if (mainfireballInput.value === data[i].colorFireball) {
        data[i].index += 1;
      }
    }
  };

  //  очистка списка  похожих волшебников

  var clearListWisards = function () {
    if (blockSetuSimilarList.children.length > 0) {
      var oldWizards = document.querySelectorAll('.setup-similar-item');
      for (var i = 0; i < oldWizards.length; i++) {
        blockSetuSimilarList.removeChild(oldWizards[i]);
      }
    }
  };

  // создание заданного списка похожих волшебников

  var createListWisards = function (data, value) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < value; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    blockSetuSimilarList.appendChild(fragment);
  };

  var update = function () {
    levelOfSimilarity(wizards);
    wizards.sort(function (a, b) {
      return b.index - a.index;
    });
    clearListWisards();
    createListWisards(wizards, 4);
  };

  //  ---------- конструирование блока  по данным и критериям  -----------

  var Load = function (data) {
    wizards = data.slice();
    update();
    blockSetuSimilar.classList.remove('hidden');
  };

  window.backend.load('https://js.dump.academy/code-and-magick/data', Load);

})();
