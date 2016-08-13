
var app =angular.module('blueharvest', [
    'blueharvest.controllers',
    'blueharvest.services',
    'blueharvest.routes',
    'ngAnimate',
    'ngMaterial'
]);
app.run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}]);