$(document).ready(function(){
    $('.carousel').carousel({
        interval:   1200,
        keyboard:   true,
     /* pause:,
        ride:,
        wrap:,
        touch:,*/
    });

    $('.carousel-pauser').click(function(){
        $('.carousel').carousel('pause');
    });

    $('.carousel-pauser').on('slid.bs.carousel',function(event){
        console.log(event);
    });

    $('.modal-popper').click(function(){
        $('.modal').modal({
            backdrop: 'static'
        });
    });

  /*var HTML = '<h1 class="header">Hello</h1>'*/
});