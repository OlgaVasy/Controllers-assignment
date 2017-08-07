angular.module('gameModule')
.component('resetButtonElement', {
  templateUrl: 'GameApp/gameplay/reset/resetButtonTemplate.html',
  bindings: {
    'reset': '=',
    'clickerService': '='
  }
})
