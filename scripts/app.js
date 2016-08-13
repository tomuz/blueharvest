
var app =angular.module('blueharvest', [
    'blueharvest.controllers',
    'blueharvest.services',
    'blueharvest.routes',
    'ngAnimate',
    'ngMaterial'
]);
app.run(['$anchorScroll', function($anchorScroll) {
    $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
}]);/*
app.config(function(){
	new WOW().init();
});*/
app.run(['$rootScope', function ($rootScope) {

       //create a new instance
       new WOW().init();

    $rootScope.$on('$routeChangeStart', function (next, current) {
        //when the view changes sync wow
        new WOW().sync();
    });
}]);