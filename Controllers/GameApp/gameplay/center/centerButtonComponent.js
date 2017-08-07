
angular.module('gameModule')
.component('centerButtonPanel', {
  templateUrl: 'GameApp/gameplay/center/centerElementTemplate.html',
  bindings: {
    'click': '=',
    'pointsPerClick': '='
  }
})
