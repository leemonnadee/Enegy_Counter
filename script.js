
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
         $(".maincontainer").css("background-color","rgba(202, 18, 18, 0.5)");
         $("#bloodmoon").css("visibility","visible");
        }
       
          });
   //reset button   
 $("#reset").click(function(){
  $("#bloodmoon").css("visibility","hidden");
 rndval=1;
 a=3;
$("#round").html(rndval);
$("#input").val(a);
$("#input").css("background-color","white");
$(".maincontainer").css("background-color","rgba(20, 22, 22, 0.5)");
             
                      });
