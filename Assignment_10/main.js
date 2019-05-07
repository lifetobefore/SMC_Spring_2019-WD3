window.onload = function(){
    var canvas1 = document.getElementById("myCanvas1");
    var context1 = canvas1.getContext("2d");

    var img = document.getElementById("image");
    var radius = 75;
    var x = 50;
    var y = 50;

    context1.arc(x+300,y+25,radius,0,2*Math.PI,false);
    context1.fill();

    context1.fillStyle = 'rgba(0, 0, 200, 0.5)';
    context1.fillRect(400, 0, 150, 300);

    context1.fillStyle = 'rgb(200, 0, 0)';
    context1.fillRect(450, 0, 150, 150);

    context1.drawImage(img, 0, 0);

    context1.font = "24px Helvetica";
    context1.fillText("Overlap", 650, 85);


    //moving rect
    var canvas2 = document.getElementById("myCanvas2");
    var context2 = canvas2.getContext("2d");
    
    var rw = 50;
    var rh = 50;
    var mx = 50;
    var my = 50;
    
    function drawRect(mx,my,rw,rh){
        context2.fillStyle = "blue";
        context2.fillRect(mx, my, rw, rh);
    }

    drawRect(mx,my,rw,rh);

    window.onkeydown = function(event){
        var key = event.keyCode;
        if ( key == 38 && my > 0){
            my = my - 50;
        }

        else if ( key == 40 && my<= 540){
            my = my + 50;
        }

        else if ( key == 37 && mx > 0){
            mx = mx - 50;
        }

        else if ( key == 39 && mx <= 740){
            mx = mx + 50;
        }

        context2.clearRect(0,0,800,600);

        drawRect(mx,my,rw,rh);
    }
}

