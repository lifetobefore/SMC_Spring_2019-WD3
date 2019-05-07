window.onload = function(){
    var canvas1 = document.getElementById("myCanvas1");
    var context1 = canvas1.getContext("2d");

    var img = document.getElementById("image");
    var radius = 75;
    var x = 50;
    var y = 50;

    context1.arc(350,y+25,radius,0,2*Math.PI,false);
    context1.fill();

    context1.fillStyle = 'rgba(0, 0, 200, 0.5)';
    context1.fillRect(400, 0, 150, 300);

    context1.fillStyle = 'rgb(200, 0, 0)';
    context1.fillRect(450, 0, 150, 150);

    context1.drawImage(img, 0, 0);

    context1.font = "24px Helvetica";
    context1.fillText("Overlap", 650, 85);



    var canvas2 = document.getElementById("myCanvas2");
    canvas2.addEventListener("keydown", movebox, true);
    var context2 = canvas2.getContext("2d");
    
    context2.fillStyle = "blue";
    context2.fillRect(x, y, 50, 50);

    function movebox(event){
        var key = event.keyCode;
        
        if ( key == 38){
            context2.clearRect(0, 0, canvas.width, canvas.height);
            y = y - 10 ;
            context2.fillRect(x, y, 50, 50);
        }

        if ( key == 40){
            context2.clearRect(0, 0, canvas.width, canvas.height);
            y = y + 10 ;
            context2.fillRect(x, y, 50, 50);
        }

        if ( key == 37){
            context2.clearRect(0, 0, canvas.width, canvas.height);
            x = x - 10 ;
            context2.fillRect(x, y, 50, 50);
        }

        if ( key == 39){
            context2.clearRect(0, 0, canvas.width, canvas.height);
            x = x + 10 ;
            context2.fillRect(x, y, 50, 50);
        }

    }

}

