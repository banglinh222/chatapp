        $(document).ready(function(){
        	updateScroll();
        	$("#new_message").bind("ajax:complete", function(event,xhr,status){
  $("#message_body").val('');updateScroll();
});})

    function updateScroll(){
    var element = document.getElementById("container");
    element.scrollTop = element.scrollHeight;
}

