var colors=["black","red","blue","purple","green","yellow"];
var i=0; 

$("#clicking").click(function() {

  
  $("body" ).css(
  "background-color", colors[i]);
  
   i++;
  
if (i > 5 ){i=0;}

});

    
