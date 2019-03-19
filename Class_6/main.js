$(document).ready(function(){
    $('.carousel').carousel({
        interval:   1200,
        keyboard:   false,
     /* pause:,
        ride:,
        wrap:,
        touch:,*/
    });

    $('.carousel-pauser').click(function(){
        $('.carousel').carousel('pause');
    });

    $('.carousel-pauser').on('slid.bs.carousel',function(){
        console.log(event);
    });

    $('modal-popper').click(function(){
        $('modal').modal({
            backrop: 'static'
        });
    });

    $('modal').modal({});

  /*var HTML = '<h1 class="header">Hello</h1>'*/
});