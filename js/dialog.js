/* eslint-disable no-shadow */
'use strict';
(function () {

  var moveBlockSetup = document.querySelector('.upload');


  moveBlockSetup.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoordinat = {
      x: evt.clientX,
      y: evt.clientY
    };

    var Drag = false;
    var onMouseMove = function (evt) {
      Drag = true;

      var shift = {
        x: startCoordinat.x - evt.clientX,
        y: startCoordinat.y - evt.clientY
      };
      startCoordinat = {
        x: evt.clientX,
        y: evt.clientY
      };

      window.blockSetup.style.top = (window.blockSetup.offsetTop - shift.y) + 'px';
      window.blockSetup.style.left = (window.blockSetup.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (evt) {
      evt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (Drag) {
        var onMovePreventDefault = function (evt) {
          evt.preventDefault();
          moveBlockSetup.removeEventListener('click', onMovePreventDefault);
        };
        moveBlockSetup.addEventListener('click', onMovePreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
