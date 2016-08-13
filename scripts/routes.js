
var app = angular.module('blueharvest.routes', [
    'ui.router'
]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: "/home",
            views: {
                'header':{
                    templateUrl: 'views/header.html',
                    controller:'headerCtrl'
                },
                'main': {
                    templateUrl: 'views/home.html',
                    controller: 'homeCtrl'
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                    controller:'footerCtrl'
                }

            }
        })
        .state('nosotros', {
            url: "/nosotros",
            views: {
                'header':{
                    templateUrl: 'views/header.html',
                    controller:'headerCtrl'
                },
                'main': {
                    templateUrl: 'views/nosotros.html',
                    controller: 'usCtrl'
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                    controller:'footerCtrl'
                }

            }


        })
        .state('services', {
            url: "/services",
            views: {
                'header':{
                    templateUrl: 'views/header.html',
                    controller:'headerCtrl'
                },
                'main': {
                    templateUrl: 'views/servicios.html',
                    controller:'serviciosCtrl'
                },
                'footer': {
                    templateUrl: 'views/footer.html',
                    controller:'footerCtrl'
                }
            }


        });

    $urlRouterProvider.otherwise('/home');

});