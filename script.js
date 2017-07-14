var j = 0
function consolelog () {

    var val = $.trim($("textarea").val());
    if (val != "") {
        $("#thelist").append("<li class=b id=newli"+j+">");
        $("#newli"+j).append(val);
        j++
          }
  }
;

function clear(){
  $( "textarea" ).empty();
}
function button(){
  $('#button1').on('click', consolelog);
}

$(document).ready(button);

function rm(){
  $( "li" ).remove( ".b" );
  console.log("removed");
}
function clickdelete() {
  $("#thelist").on("click", ".b", rm);
}

$(document).ready(clickdelete);
