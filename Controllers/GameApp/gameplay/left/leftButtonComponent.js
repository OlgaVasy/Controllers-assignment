angular.module('gameModule')
.component('leftButtonPanel', {
  templateUrl: 'GameApp/gameplay/left/leftElementTemplate.html',
  bindings: {
    'multiplier': '=',
    'multiplierAmount': '=',
    'cost': '=',
    'clickerService': '='
  }
})
