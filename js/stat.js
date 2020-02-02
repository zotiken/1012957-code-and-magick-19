'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_COLOR = '#ffffff';
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';


var COL_LOW = 240;
var COL_MAX_HEIGHT = 150;
var COL_WIDTH = 40;
var COL_MY_COLOR = 'rgba(255, 0, 0, 1)';
var COL_OTHER_COLOR = 229;


var GAP = 50;
var PADDING__LEFT = 140;

var VALUE_PADDING__BOTTOM = 10;

var NAME_PADDING__TOP = 20;

var FONT_SIZE = 16;
var FONT_FEMALY = 'PT Mono';
var FONT_COLOR = '#000000';

window.renderStatistics = function (ctx, names, times) {

  var maxValue = Math.max.apply(null, times);

  ctx.fillStyle = CLOUD_SHADOW_COLOR;
  ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = CLOUD_COLOR;
  ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);

  ctx.fillStyle = FONT_COLOR;
  ctx.font = '"' + FONT_SIZE + FONT_FEMALY + '"';
  ctx.fillText('Ура вы победили!', PADDING__LEFT, 40);
  ctx.fillText('Список результатов:', PADDING__LEFT, 60);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = COL_MY_COLOR;
    } else {
      ctx.fillStyle = 'hsl(' + COL_OTHER_COLOR + ',' + Math.random() * 100 + '%, 52%)';
    }
    ctx.fillRect(PADDING__LEFT + (GAP + COL_WIDTH) * i, COL_LOW, COL_WIDTH, -(times[i] / (maxValue / COL_MAX_HEIGHT)));

    ctx.fillStyle = FONT_COLOR;
    ctx.fillText(names[i], PADDING__LEFT + (GAP + COL_WIDTH) * i, COL_LOW + NAME_PADDING__TOP);
    ctx.fillText(this.Math.ceil(times[i]), PADDING__LEFT + (GAP + COL_WIDTH) * i, COL_LOW - (times[i] / (maxValue / COL_MAX_HEIGHT)) - VALUE_PADDING__BOTTOM);
  }
};
