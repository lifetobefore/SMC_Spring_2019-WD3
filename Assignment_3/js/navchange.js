$(window).on('resize', function() {
    if($(window).width() >= 400) {
        $("#navchange").removeClass("fixed-bottom");
        $("#navchange").addClass("fixed-top");
    }else{
        $("#navchange").removeClass("fixed-top");
        $("#navchange").addClass("fixed-bottom");
    }
})