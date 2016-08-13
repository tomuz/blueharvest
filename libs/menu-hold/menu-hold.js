
var navigation = (function(){
    var navigationTimer;
    var dragXStartPos = 0;
    var dragYStartPos = 0;
    var currentXPos = 0;
    var currentYPos = 0;
    var isNavOpen = false;

    function init(){
        $('body').on('mousedown', function(e){
            if(!isNavOpen){
                setTimer(function(){
                    $('body').off('mouseup');
                    addCircle(e);

                    $('body').on('mouseup', function(){
                        destroyCircle();
                    });

                    $('body').on('mousemove', function(e){
                        calculateCircleSize(e, function(x){
                            adjustCircleSize(x);
                        });
                    });
                });

                $('body').on('mouseup', function(){
                    clearTimer();
                    $('body').off('mouseup');
                });
            }
        });

        $('[data-close]').on('click', function(){
            console.log('click');
            closeNavigation();
        });
    }

    function setTimer(callback){
        console.log('timer waiting');

        navigationTimer = setTimeout(function(){
            console.log('timer set');
            callback();
        }, 250);
    }

    function clearTimer(){
        console.log('timer cleared');
        clearTimeout(navigationTimer);
    }

    function destroyCircle(){
        $('body').off('mousemove mouseup');
        $('.circle-outer').remove();
    }

    function addCircle(e){
        console.log('created circle');
        dragXStartPos = e.clientX;
        dragYStartPos = e.clientY;

        $('body').append(
            '<div class="circle-outer" style="top:' +
            dragYStartPos +
            'px; left:' +
            dragXStartPos +
            'px">' +
            '<div class="circle-inner"></div></div>' +
            '</div>'
        );
    }

    function calculateCircleSize(e, callback){
        currentXPos = e.clientX;
        currentYPos = e.clientY;
        var newCircleSize = 0;

        var XDistance = Math.abs(currentXPos - dragXStartPos) * 2;
        var YDistance = Math.abs(currentYPos - dragYStartPos) * 2;

        (XDistance > YDistance) ? newCircleSize = XDistance : newCircleSize = YDistance;

        if (newCircleSize >= 400){
            showNavigation();
            destroyCircle();
        };

        callback(newCircleSize);
    }

    function adjustCircleSize(x){
        $('.circle-inner').css({
            'width': x + 'px',
            'height': x + 'px'
        });
    }

    function showNavigation(){
        isNavOpen = true;

        $('body').append(
            '<div class="navigation-circle" style="top:' +
            dragYStartPos +
            'px; left:' +
            dragXStartPos +
            'px;"></div>'
        );

        $('.navigation').addClass('open');
    }

    function closeNavigation(){
        console.log('close nav');

        isNavOpen = false;
        $('.navigation-circle').remove();
        $('.navigation').removeClass('open');
    }

    return{
        init: init
    };
}());

navigation.init();
