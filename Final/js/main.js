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

/*var $form = $(".myform");
var $submitbutton = $(".submitbutton");

$form.on("blur", "input", () => {
  if ($form.valid()) {
    $submitbutton.removeAttr("disabled");   
  } else {
    $submitbutton.attr("disabled", "disabled");
  }
});

function validate() {
		
  var valid = true;
  valid = checkEmpty($("#name"));
  valid = valid && checkEmail($("#email"));
  
  $("#btn-submit").attr("disabled",true);
  if(valid) {
    $("#btn-submit").attr("disabled",false);
  }	
}
function checkEmpty(obj) {
  var name = $(obj).attr("name");
  $("."+name+"-validation").html("");	
  $(obj).css("border","");
  if($(obj).val() == "") {
    $(obj).css("border","#FF0000 1px solid");
    $("."+name+"-validation").html("Required");
    return false;
  }
  
  return true;	
}
function checkEmail(obj) {
  var result = true;
  
  var name = $(obj).attr("name");
  $("."+name+"-validation").html("");	
  $(obj).css("border","");
  
  result = checkEmpty(obj);
  
  if(!result) {
    $(obj).css("border","#FF0000 1px solid");
    $("."+name+"-validation").html("Required");
    return false;
  }
  
  var email_regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,3})+$/;
  result = email_regex.test($(obj).val());
  
  if(!result) {
    $(obj).css("border","#FF0000 1px solid");
    $("."+name+"-validation").html("Invalid");
    return false;
  }
  
  return result;	
}*/

$('#inputName, #inputEmail, #inputMessage').bind('keyup', function() {
  if(allFilled()) $('#register').removeAttr('disabled');
});

function allFilled() {
  var filled = true;
  $('body input').each(function() {
      if($(this).val() == '') filled = false;
  });
  return filled;
}