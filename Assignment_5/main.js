$(document).ready(function(){   
    $(".css-button").click(function(){
        var wVal = Math.random()*100+100;
        var hVal = Math.random()*100+100;
        var rVal = Math.random()*75+15;
        var bVal = Math.random()*50;
        var greenVal = Math.random()*255;
        var blueVal = Math.floor(Math.random()*255);
        var redVal = Math.floor(Math.random()*255)+100;
        $(".css-box").css("background-color", "rgb( "+ redVal + " , "  + greenVal + ", " + blueVal + ")");
        $(".css-box").css("transform","rotate(" + rVal + "deg)");
        $(".css-box").css("border-radius",bVal+"%")
        $(".css-box").width(wVal);
        $(".css-box").height(hVal);
    });
    
    $(".alert-button").click(function(){
        alert("!!!!!!!!!!!!!! Don't look !!!!!!!!!!!!!!!!");
    });

    /*$(".top-box-button").click(function(){
        if($(this).siblings("button").css("display") === "none") {
            $(this).text("Hide Me");
        }
        else {
            $(this).text("Top Box");
        }
        $(this).siblings("button").toggle();
        $(this).siblings("div").toggle();
    });*/

    /*$(".insert-text-button").click(function(){
        console.log(this);
        if($(this).text() === "Alert") {
            $(this).siblings("div").text("!!!!!!!!!!!!!!!!!!!!!!ALERT!!!!!!!!!!!!!!!!!!!!!!");
            $(this).text("Clean the TEXT");
        } 
        else {
            $(this).siblings("div").empty();
            $(this).text("Alert");
        }
    });*/

    $("input").blur(function(){
        /*var info = $(this).val();*/
        console.log(this.value);
        /*if( this.value === "" ) {
            $(this).siblings(".input-alert").text("Please fill in your information");            
        }
        else {
            $(this).siblings(".input-alert").empty();
        }*/
        if(this.value.length <= 7) {
            $(this).siblings(".input-alert").text("Required for 7 letters.");            
        }
        else {
            $(this).siblings(".input-alert").empty();
        }
    });

    $("#textinput").blur(function(){
        prompt("Hello there","Let me know your name.");
    });

    $(".animation-box").click(function () {
        $(".animation-box").animate({
            width: "350px",
            height: "5px",
            opacity: 0.5,
        }, 800, function(){
            $(this).animate({
                width: "200px",
                height: "200px",
                opacity: 1,
            } ,1000,);
        });
    });
});