
var app = angular.module('blueharvest.controllers.home', []);

app.controller('homeCtrl', function ($scope) {

    var logo=$('.logoBh');
    var bhtext=$('.bh-text');
    var tl = new TimelineMax();

    tl.
        from(logo,4,{
            rotation: 360,
            size:2
        })
        .from(bhtext,3,{
            opacity:0,
            y:-500,
            ease: Elastic.easeOut.config(0.2, 0.4)
        },"-=3.7");



});
app.controller('headerCtrl', function ($scope,$state) {
    if($state.current.name == "home"){
        var headerContent = $('#headerContent');
        TweenLite.from(headerContent,1,{
            delay:3,
            opacity:0
        })

    }
    $scope.openMenu = function(){
        $('body').append(
            '<div class="navigation-circle" style="position:absolute;top:10px; left: 10px;"></div>'
        );

        $('.navigation').addClass('open');
    }
});
app.controller('footerCtrl', function ($scope,$state) {
    if($state.current.name == "home") {
        var social = $('#social');
        TweenLite.from(social, 1, {
            delay: 3,
            opacity: 0
        })
    }
});