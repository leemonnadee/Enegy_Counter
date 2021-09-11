
 $("input").val(3);
 var a=3;


$("#plus").click(function(){
  a++;
  
 
  $("input").val(a);
  if(a>10){
    a=10;
    $("input").val(a);
  }
 

   
  });
  $("#minus").click(function(){
   
  a--
    $("input").val(a);
   
    if(a<1){
      a=1;
     
      $("input").val(a);
    }
    });
   
    

  //next round
      var rndval=1;
      $("#round").html(rndval);
   
      $("#nxtRound").click(function(){
     
        rndval++;
        a++;
        a++;
       
        $("#round").html(rndval);
        $("#input").val(a);
        if(a>10){
          a=10
          $("#input").val(a);
        }
        if(rndval>=10){
  
         $("#bloodmoon").css({"animation":"anim 1s infinite", "background-color": "rgb(51, 4, 2)"});
         $("#bloodmoon").html("Blood Moon");
$(".rd").css({"color":"red"});

        }
       
          });
   //reset button   
 $("#reset").click(function(){
  $("#bloodmoon").css({"visibility":"visible","animation":"anim1 1s infinite"});
  $("#bloodmoon").html("Enegy Counter");
 rndval=1;
 a=3;
$("#round").html(rndval);
$("#input").val(a);
$("#input").css("background-color","white");
$(".maincontainer").css({"background-color":"#e0e0e0","box-shadow":"12px 12px 24px 0 rgba(0, 0, 0, 0.2),-12px -12px 24px 0 rgba(255, 255, 255, 1);"});
$(".rd").css("color","rgb(23, 163, 18)");
 
                      });


                      $("#donate").click(function(){
                        var text="480a28e5f9fd577e7252c3a02d8aafab0c367c40";
                        var TempElement=$("<input>").val(text).appendTo('body').select();
                        document.execCommand('copy');
                        TempElement.remove();
                        alert("Ronin wallet Copied");
                      });
