/*$(document).ready(function(){
    $(window).on('resize', function() {
        var win = $(this);
        if (win.width() > 769) {
            $('#mySidenav').addClass('la-nav');
            $('#mySidenav').removeClass('sidenav');
        }else{
            $('#mySidenav').addClass('sidenav');
            $('#mySidenav').removeClass('la-nav');
        }
    })
})*/

var count = 0;
var button = document.getElementById("countButton");
var display = document.getElementById("displayCount");

button.onclick = function(){
  count++;
  display.innerHTML = count;
}

var $form = $("#myform");
var $submitbutton = $("#submitbutton");

$form.on("blur", "input", () => {
  if ($form.valid()) {
    $submitbutton.removeAttr("disabled");   
  } else {
    $submitbutton.attr("disabled", "disabled");
  }
});