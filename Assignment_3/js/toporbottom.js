$(window).on('resize', function() {
    if($(window).width() > 400) {
        $('#toporbottom').removeClass('fixed-bottom');
        $('#toporbottom').addClass('fixed-top');
    }else{
        $('#toporbottom').removeClass('fixed-top');
        $('#toporbottom').addClass('fixed-bottom');
    }
})