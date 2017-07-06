        $(document).ready(function(){
        	console.log("alo")
        	$("#new_message").bind("ajax:complete", function(event,xhr,status){
  $("#message_body").val('');
});})