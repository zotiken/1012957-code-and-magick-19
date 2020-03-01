'use strict';
(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var userPic = document.querySelector('.setup-user-pic');
  var loadFile = document.querySelector('input[type="file"]');
  loadFile.addEventListener('change', function () {
    var file = loadFile.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        userPic.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  });
})();
