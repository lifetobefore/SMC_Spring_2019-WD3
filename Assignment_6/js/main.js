$(document).ready(function(){
    $('.carousel').carousel({
        interval:   2000, 
        keyboard:   true
    });

    $('.carousel-pauser').click(function(){
        $('.carousel').carousel('pause');
    });

    $('.carousel-player').click(function(){
        $('.carousel').carousel('cycle');
    });

    $('.carousel').on('slid.bs.carousel', function(event){
        console.log(event);
    });

    $('.modal-popper').click(function(){
        $('.modal').modal( {backdrop: 'static'} );
    });

    $("input").blur(function(){
        console.log(this.value);
        if(this.value.length <= 7) {
            $(this).siblings(".input-alert").text("Please fill-in your information.");            
        }
        else {
            $(this).siblings(".input-alert").empty();
        }
    });
    
});