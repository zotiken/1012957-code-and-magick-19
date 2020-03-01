/* eslint-disable no-console */
'use strict';
(function () {


  var load = function (url, onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;
        case 404:
          onError(xhr.status);
          break;
        case 500:
          onError();
          break;
      }
    });
    xhr.addEventListener('timeout', function () {
      // eslint-disable-next-line no-console
      console.error('Привышенно время ожидания');
    });
    xhr.timeout = 10000;
    xhr.open('GET', url);
    xhr.send();
  };

  var upload = function (form, url, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;
        case 404:
          onError('Ошибка нет соединения с интернетом!');
          console.error(xhr.status);
          break;
        case 304:
          onError('Ошибка сервера');
          console.error(xhr.status);
          break;
        case 500:
          onError('Ошибка сервера,попробуйте позже!');
          console.error(xhr.status);
          break;
      }
    });

    xhr.addEventListener('timeout', function () {
      onError('Привышенно время ожидания');
      console.error('Привышенно время ожидания' + xhr.timeout);
    });
    xhr.timeout = 10000;
    xhr.open('POST', url);
    xhr.send(new FormData(form));
  };

  window.backend = {
    load: load,
    upload: upload
  };
})();
