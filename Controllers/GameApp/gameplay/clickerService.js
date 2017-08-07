angular.module('gameModule')
.service('clickerService', ['$interval', '$cookies', function($interval, cookies) {

  this.cookies = cookies

  this.points = 0

  this.pointsPerClick = 1
  this.increasePointsPerClickCost = 10

  this.autoclickers = 0
  this.autoclickerPrice = 100

  this.multiplierAmount = 1.2

//  this.cookie = [this.points, this.increasePointsPerClickCost, this.autoclickers]

  this.click = () => {
    this.points += this.pointsPerClick
  }

  this.multiplier = () => {
    this.pointsPerClick *= this.multiplierAmount
    this.points -= this.increasePointsPerClickCost
    this.increasePointsPerClickCost += 2
    this.multiplierAmount += 0.2

  }

  this.useAutoclicker = () => {
    console.log('useAutoclicker triggered')
    this.autoclickers++
    this.points -= this.autoclickerPrice
    this.autoclickerPrice += 10
    $interval(() => {
      this.click()
    }, 1000)
  }

  // if (cookies.get('game')) {
  //   this.points = this.cookies.get('game', this.points)
  //   this.increasePointsPerClickCost = this.cookies.get('game', this.increasePointsPerClickCost)
  //   this.autoclickers = this.cookies.get('game', this.autoclickers)
  //   }
// //  Cookies.remove('game', { secure: true });
//
    $interval (() => {
      this.cookies.put('game', this.points)
      this.cookies.put('game', this.increasePointsPerClickCost)
      this.cookies.put('game', this.autoclickers),
     1000 })

}])
