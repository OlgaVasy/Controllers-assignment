angular.module('gameModule')

.controller('clickerController', ['clickerService', function(gameService) {

  this.clickerService = gameService
  

}])
