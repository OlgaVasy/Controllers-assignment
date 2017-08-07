angular.module('gameModule')
.component('rightButtonPanel', {
  templateUrl: 'GameApp/gameplay/right/rightElementTemplate.html',
  bindings: {
    'autoclickerPrice': '=',
    'autoclickers': '=',
    'useAutoclicker': '=',
    'clickerService': '='
  }
})
